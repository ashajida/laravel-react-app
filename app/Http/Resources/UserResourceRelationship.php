<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class UserResourceRelationship extends JsonResource
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
            'following' => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new SubscriptionResourceCollection($this->following),
            ],
            'followers'   => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new SubscriberResourceCollection($this->followers),
            ], 
            'posts' => [
                'links'     => [
                    // 'self' => route('articles.relationships.author', ['article' => $this->id]),
                ],
                'data'      => new PostResourceRelationshipCollection($this->posts),
            ],
        ];
    }

    public function with($request)
    {
        return [
            'links' => [
                'self' => route('users.getAll'),
            ],
        ];
    }
}