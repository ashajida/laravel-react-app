<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\Post;

class  CommentResource extends JsonResource
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
            'type' => 'comment',
            'id'   => $this->id,
            'body' => $this->body,
            'relationships' => [
                'users' =>  User::find($this->user_id),
                'posts'  =>  Post::find($this->post_id),
            ]
        ];
    }
}