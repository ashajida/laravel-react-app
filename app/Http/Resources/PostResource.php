<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'comments_count' => $this->comments->count(),
            'likes_count' => $this->likes->count(),
            'relationships' => new PostResourceRelationship($this),
            'links' => [
                'self' => route('posts.get', ['id' => $this->id]),
            ],
        ];
    }
}