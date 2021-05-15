<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class  UserResourceIdentifier extends JsonResource
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
            'type' => 'user',
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'profile' => $this->profile_image,
            'cover' => $this->cover_image,
        ];
    }
}