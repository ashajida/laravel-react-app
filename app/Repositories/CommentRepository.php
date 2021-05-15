<?php

namespace App\Repositories;

use App\Models\Comment;
use App\Models\Post;
use App\Http\Resources\CommentResource;

class CommentRepository implements CommentRepositoryInterface 
{

    private $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
        
    }
    public function create($data) 
    {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json([
                'message_error' => 'error'
            ]);
        }

        $comment = $user->comments()->create(['body' => $data['body'], 'post_id' => (int) $data['post_id']]);
        CommentResource::withoutWrapping(); 
        $commentResource = new CommentResource($comment);
        return $commentResource;

    }

    public function getAll($id) 
    {
        $comments = Post::find($id)->comments;
        return $comments;
    }

    public function get($id) 
    {
        $comments = Comment::find($id)->comments();
        return $comments;
    }

    public function edit($data) 
    {
        $comment = Comment::find($data['comment_id']);
        
        $comment->body = $data['body'];
        $comment->save();

        return $comment;

    }

    public function delete($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        return $comment;
    }



}