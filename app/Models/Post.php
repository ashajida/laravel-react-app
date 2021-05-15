<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model 
{
    /**
     * @var string
     */
    protected $table = 'posts';

    // protected $primaryKey = 'id';

    protected $fillable = [
        'title',
        'image_id',
        'user_id',
        'image',
        'created_at',
        'updated_at'
    ];

    public function comments() 
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function users() 
    {
        return $this->belongsTo(
            'App\Models\User',
             'user_id',
             'id',
             'user_id'
        );
    }

    public function likes() 
    {
        return $this->hasMany('App\Models\Like');
    }

}