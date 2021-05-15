<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model 
{
    /**
     * @var string
     */
    protected $table = 'likes';

    protected $fillable = [
        'user_id',
        'post_id',
        'created_at',
        'updated_at'
    ];

    public function posts() 
    {
        return $this->belongsTo('App\Models\Post');
    }

    public function users() {
        return $this->belongsTo('App\Model\User');
    }

}