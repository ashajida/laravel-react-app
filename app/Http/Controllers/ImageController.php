<?php

namespace App\Http\Controllers;

use App\Repositories\ImageRepository;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    /**
     * @var ImageRepository
     */
    private $imageRepository;

    public function __construct(ImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    public function create(Request $request, $id) 
    {
        $data            = [];
        $data['image']   = $request->image;
        $data['post_id'] = $id;
        $data['type']    = 'post';

        $image = $this->imageRepository->create($data);
        return $image; 
    }
}