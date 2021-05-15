<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable implements JWTSubject 
{

    use Notifiable;

    /**
     * @var string
     */
    protected $table = 'users';

      /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $fillable = [
        'username',
        'email',
        'password',
        'profile_image',
        'created_at',
        'updated_at'
    ];

    public function followers() 
    {
        return $this->belongsToMany(
            'App\Models\User',
             'relationship',
             'user_one_id',
             'user_two_id'
        );
    }

    public function following() 
    {
        return $this->belongsToMany(
            'App\Models\User',
            'relationship',
            'user_two_id',
            'user_one_id',
        );
    }

    public function posts() 
    {
        return $this->hasMany('App\Models\Post','user_id', 'id');
    }

    public function comments() 
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function likes() 
    {
        return $this->hasMany('App\Models\Like');
    }

        /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}