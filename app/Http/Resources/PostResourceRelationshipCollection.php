<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostResourceRelationshipCollection extends ResourceCollection
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
            'data'  => PostResourceIdentifier::collection($this->collection),
            'links' => [
                'self' => route('users.getAll'),
            ],
        ];
    }
}