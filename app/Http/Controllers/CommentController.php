<?php

namespace App\Http\Controllers;

use App\Repositories\CommentRepository;
use Illuminate\Http\Request;

class CommentController extends Controller 
{

      /**
     * @var CommentRepository
     */
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository) {
        $this->commentRepository = $commentRepository;
    }

    public function create(Request $request, $id)
    {
        $data = [];

        $data = $request->only(['body']);  
        $data['post_id'] = $id;

        $comment = $this->commentRepository->create($data);
        return $comment;
    }

    public function getAll(Request $request, $id) 
    {
        $comments = $this->commentRepository->getAll($id);
        return $comments;
    }

    public function edit(Request $request, $id, $comment_id) {
        $data               = [];
        $data['comment_id'] = $comment_id;
        $data['post_id']    = $id;
        $data['body']       = $request->input('body');
        $comment            = $this->commentRepository->edit($data);
        return $comment;
    }

    public function delete(Request $request, $comment_id) {
        $comment = $this->commentRepository->delete($comment_id);
        return $comment;
    }
}