<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\PostRepository;
use Illuminate\Support\Facades\Auth;




class PostController extends Controller 
{
    /**
     * @var PostRepository
     */
    private $postRepository;


    public function __construct(PostRepository $postRepository) {
        $this->postRepository  = $postRepository;
    }
    
    public function create(Request $request) 
    {
        $data         = [];
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }

        $data['title']       = $request->input('title');
        $data['image_path']  = $request->file('image')->getRealPath();
        $data['image_ext']   = $request->file('image')->extension();
        $data['user']        = $user;
        $post                = $this->postRepository->create($data);
        return $post;
    }

    public function self() {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }

        $posts = $this->postRepository->self($user);
        return $posts;
    }

    public function get(Request $request, $id) {
        $post = $this->postRepository->get($id);
        return $post;
    }

    public function getAll(Request $request) {

        $post = $this->postRepository->getAll();
        return $post;
    }

    public function edit(Request $request, $id) 
    {

        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }

        $data = [];
        $data = $request->input->all();
        $post = $this->postRepository->edit($data, $id);
    }

    public function delete(Request $request, $id)
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }

        $post = $this->postRepository->delete($id);
        return $post;
    }

    public function uploadImage(Request $request, $id)
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }
    
        $post = $this->postRepository->uploadImage($request->file('image'), $id);
        return $post;
    }

  
}