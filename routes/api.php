<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('{path?}', 'app');
// Users

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/users', 'UserController@create')->name('users.create');

Route::delete('/users/{id}', 'UserController@delete')->name('users.delete');

Route::get('/users', 'UserController@getAll')->name('users.getAll');

Route::get('/users/{id}', 'UserController@get')->name('users.getById');

Route::post('/users/{id}/edit', 'UserController@edit')->name('users.edit');

Route::put('/users/{id}/upload/profile', 'UserController@uploadProfileImage')->name('users.upload.profile');

Route::put('/users/{id}/upload/cover', 'UserController@uploadCoverImage')->name('users.upload.coverImage');


// Subscribers / Subscriptions
// Route::get('/user/{id}/subscriber/create', 'UserController@createSubscriber')->name('user.subscriber.create');

Route::get('/users/{id}/subscribers', 'UserController@getSubscribers')->name('users.subscriber.get');

Route::post('/users/{id}/followers', 'UserController@follow')->name('users.followers.follow');

Route::post('/users/{id}/followers/unfollow', 'UserController@unfollow')->name('users.follow.unfollow');

Route::get('/users/{id}/subscriptions', 'UserController@getSubscriptions')->name('users.getSubscriptions');



// Login / Logout
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('verifyToken', 'AuthController@verifyToken');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

// Post
Route::post('/posts', 'PostController@create')->name('posts.create');

Route::delete('/posts/{id}', 'PostController@get')->name('posts.delete');

Route::put('/posts/{id}', 'PostController@edit')->name('posts.edit');

Route::get('/posts/self', 'PostController@self')->name('posts.self');

Route::get('/posts', 'PostController@getAll')->name('posts.getAll');

Route::get('/posts/{id}', 'PostController@get')->name('posts.get');


// Comment
Route::post('/posts/{id}/comments', 'CommentController@create')->name('posts.comments.create');
Route::get('/posts/{id}/comments/', 'CommentController@getAll')->name('posts.comments.getAll');
Route::put('/posts/{id}/comments/{comment_id}/edit', 'CommentController@edit')->name('posts.comments.edit');
Route::delete('/posts/{id}/comments/{comment_id}/delete', 'CommentController@delete')->name('posts.comments.delete');
 
// Likes
Route::post('/posts/{id}/likes', 'LikeController@create', 'posts.likes.create');
Route::get('/posts/{id}/likes', 'LikeController@get', 'posts.likes.get');
Route::post('/posts/{id}/likes/unlike', 'LikeController@delete', 'posts.likes.unlike');
 

// Images
// Route::post('/posts/{id}/images', 'ImageController@create')->name('posts.images.create');
Route::post('/images/upload', 'ImageController@upload')->name('posts.images.upload');