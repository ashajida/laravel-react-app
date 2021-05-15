<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Post;
use App\Repositories\UserRepository;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostResourceCollection; 
use App\CloudinaryWrapper\CloudinaryWrapper;
use Illuminate\Support\Str;


class PostRepository implements PostRepositoryInterface
{
    protected $userRepository;

    protected $cloudinary;

    public function __construct()
    {
        $this->cloudinary = new CloudinaryWrapper();
    }

    public function create($data) 
    {
        $imageId = Str::random(32);
        $this->cloudinary->upload($data['image_path'], $imageId);
        $image = $imageId.'.'.$data['image_ext']; 
        $user = $data['user'];
        $post = $user->posts()->create(['title' => $data['title'], 'image' => $image]);
        PostResource::withoutWrapping();
        $postResource = new PostResource($post);

        return $postResource;
    }

    public function getAll() 
    {
        PostResource::withoutWrapping();
        return new PostResourceCollection(Post::all());
    }


    public function self($user) 
    {
        $posts = $user->posts;
        PostResource::withoutWrapping();
        return new PostResourceCollection($posts);
    }

    public function get($id) 
    {
        $post = Post::find($id);
        $postResource = new PostResource($post);
        return $postResource;
    }

    public function edit($data, $id) 
    {
        $post = Post::find($id);
        $post->fill($data['data']);
        $post->save;
    }

    public function delete($id) 
    {
        $post = Post::find($data['id']);
        $post->delete();
        return $post;
    }


}