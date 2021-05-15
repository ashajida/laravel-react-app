<?php

namespace App\CloudinaryWrapper;

use Cloudinary\Cloudinary;

class CloudinaryWrapper {

    /**
     * @var Cloudinary
     */
    private $cloudinary;

    public function __construct()
    {
        $this->cloudinary = new Cloudinary('CLOUDINARY_URL=cloudinary://443646728295438:uyWcti8M7doMXqFxi2dpZ7gZMYo@devash2020');
    }

    public function upload($file, $imageId)
    {
        $this->cloudinary->uploadApi()->upload($file, ['public_id' => $imageId ]);
    }

    public function get($id)
    {
        $image = $this->cloudinary->image($id);
        return $image;
    }
}

