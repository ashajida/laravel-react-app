<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\LikeRepository;

class LikeController extends Controller 
{
    /**
     * @var LikeRepository
     */
    private $likeRepository;

    public function __construct(LikeRepository $likeRepository) 
    {
        $this->likeRepository = $likeRepository;
    }

    /**
     * @param $request Request
     * @param $id Int 
     */
    public function create(Request $request, $id)
    {
        $like = $this->likeRepository->create($id);
        return $like;
    }

    /**
     * @param Int $id
     */
    public function get(Request $request, $id)
    {
        $likes = $this->likeRepository->get($id);
        return $likes;
    }


}