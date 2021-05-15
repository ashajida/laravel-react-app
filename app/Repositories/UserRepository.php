<?php

namespace App\Repositories;

use App\CloudinaryWrapper\CloudinaryWrapper;
use App\Models\User as User;
use App\Models\Subscription;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserRepository implements UserRepositoryInterface
{
    private $cloudinary;

    public function __construct()
    {
        $this->cloudinary = new CloudinaryWrapper();
    }

    public function get($id) 
    {
        UserResource::withoutWrapping();
        $userResource = new UserResource(User::where('username', $id)->first());

        return $userResource;
    }

    public function getAuthenticatedUser() 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        return $user;
    }

    public function create($data) 
    {
        $testUser = User::where('email', $data['email'])->whereOr('username', $data['username']);

        if($testUser->count() >= 1) {
            return response()->json([
                'error_message' => 'User already exists',
            ]);
        }

        $user = new User();

        if(array_key_exists('image_path', $data)) {
            $imageId = Str::random(32);
            $this->cloudinary->upload($data['image_path'], $imageId);
            $image = $imageId.'.'.$data['image_ext']; 
            $user->profile_image = $image;
        }

        $user->username = $data['username'];
        $user->email    = $data['email']; 
        $user->password = Hash::make($data['password']);
        $user->save();
        UserResource::withoutWrapping();
        $userResource = new UserResource($user);
        return $userResource;
    }

    public function delete($id) 
    {
        $user = User::find($id);
        $user->delete();
        $userResource = new UserResource($user);
        return $userResource;
    }

    public function edit($data) 
    {

        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        } 

        if(array_key_exists('image_path', $data)) {
            $imageId = Str::random(32);
            $this->cloudinary->upload($data['image_path'], $imageId);
            $image = $imageId.'.'.$data['image_ext']; 
            $user->profile_image = $image;
        }
        
        if(isset($data['username'])) 
        {
            $user->username = $data['username'];
        }

        if(isset($data['email'])) 
        {
            $user->email = $data['email'];
        }

        if(isset($data['password'])) 
        {
            $user->password = Hash::make($data['password']);;
        }

        $user->save();

        return  $user;
    }

    public function getAll() 
    {
        UserResource::withoutWrapping();
        return new UserResourceCollection(User::with(['following', 'followers'])->paginate());
    }

    public function getFollowers() 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }
        
        $followers = $user->followers;

        if(count($followers) > 0) {
            return new UserResourceCollection($followers);
        } else {
            UserResource::withoutWrapping();
            return new UserResourceCollection($followers);
        }
    }

    public function getFollowing() 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }
        
        $subscriptions = $user->subscriptions;

        if(count($subscriptions) > 0) {
            return new UserResourceCollection($subscriptions);
        } else {
            UserResource::withoutWrapping();
            return new UserResourceCollection($subscriptions);
        }  
    }

    public function follow($id) 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        $user->following()->save(User::where('username', $id)->first());
        UserResource::withoutWrapping();
        $userResource = new UserResource($user);
        return $userResource;
    }

    public function unfollow($id) 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        $user->following()->detach(User::where('username', $id)->first());
        UserResource::withoutWrapping();
        $userResource = new UserResource($user);
        return $userResource;
    }

    public function uploadAvatar($file)
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        $image = $this->imageRepository->upload($file);
        $user->profile_image = $image->link();
        $user->save();
        UserResource::withoutWrapping();
        $userResource = new UserResource($user);
        return $userResource;

    }


}