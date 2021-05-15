<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class  PostResourceIdentifier extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type'          => 'post',
            'id'            => $this->id,
            'image'         => $this->image,
            'title'         => $this->title,
            'likes_count'   => $this->likes->count(),
            'comments_count' => $this->comments->count(),
          ];
    }
}