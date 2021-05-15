<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'username' => $this->username,
            'email' => $this->email,
            'profile_image' => $this->profile_image,
            'cover_image' => $this->cover_image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'followers_count' => $this->followers->count(),
            'following_count' => $this->following->count(),
            'posts_count' => $this->posts->count(),
            'relationships' => new UserResourceRelationship($this),
            'links' => [
                'self' => route('users.getById', ['id' => $this->id]),
            ],
        ];
    }
}