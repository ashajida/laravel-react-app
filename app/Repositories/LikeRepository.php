<?php

namespace App\Repositories;

use App\Repositories\PostRepository;
use App\Repositories\UserRepository;
use App\Http\Resources\LikeResource;
use App\Http\Resources\PostResource;
use App\Models\Like;
use App\Models\Post;

class LikeRepository implements LikeRepositoryInterface
{
    /**
     * @var PostRepository 
     */
    protected $postRepository;

     /**
     * @var UserRepository 
     */
    protected $userRepository;

    public function __construct(PostRepository $postRepository, UserRepository $userRepository) 
    {
        $this->postRepository = $postRepository;
        $this->userRepository = $userRepository;

    }


    public function create($id) 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        $user->likes()->create(['post_id' => $id]);
        $postResource =  new PostResource(Post::find($id));
        PostResource::withoutWrapping();
        return $postResource;
    }

    public function get($id)
    {
        $likes = $this->postRepository->get($id)->likes;
        return $likes;
    }

    public function delete($id)
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 
            401);
        }

        $user->likes()->delete(['post_id' => $id]);
        $postResource =  new PostResource(Post::find($id));
        PostResource::withoutWrapping();
        return $postResource;
    }

}