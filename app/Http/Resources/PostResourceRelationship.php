<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class PostResourceRelationship extends JsonResource
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
            'users'   => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new UserResourceIdentifier($this->users),
            ], 
            'likes'   => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new LikeResourceCollection($this->likes),
            ],
            'comments'   => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new CommentResourceCollection($this->comments),
            ],  
        ];
    }

    public function with($request)
    {
        return [
            'links' => [
                'self' => route('post.getAll'),
            ],
        ];
    }
}