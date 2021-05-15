<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;

class UserController extends Controller 
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    /**
     * @param Request $request
     * @param int $id
     */
    public function edit(Request $request, $id) 
    {
        $data = [];

        if($request->hasFile('image')) {
            $data['image_path']  = $request->file('image')->getRealPath();
            $data['image_ext']   = $request->file('image')->extension();
        }
        
        $data['id'] = $id;
        $data['username'] = $request->input('username');
        $data['email']    = $request->input('email');
        $data['password'] = $request->input('password');
        $user = $this->userRepository->edit($data);
        return $user;
    }


    /**
     * @param Request $request
     * @param int $id
     */
    public function delete(Request $request, $id) 
    {
        $user = $this->userRepository->delete($id);
        return $user;
    }

     /**
     * @param Request $request
     * @param int $id
     */    
    public function get(Request $request, $id) 
    {
        $user = $this->userRepository->get($id);

        return $user;
    }


    public function getAll() 
    {
        $users = $this->userRepository->getAll();
        return $users;
    }

    public function getfollowers() 
    {
        $followers = $this->userRepository->getfollowers();
        return $followers;
    }

    public function getSubscriptions() 
    {
        $subscriptions = $this->userRepository->getSubscriptions();
        return $subscriptions;
    }

    /**
     * @param Request $request
     * @param int $id
     */
    public function follow(Request $request, $id) 
    {
        $user = $this->userRepository->follow($id);
        return $user;
    }

    /**
     * @param Request $request
     * @param int $id
     */
    public function unfollow(Request $request, $id) 
    {
        $user = $this->userRepository->unfollow($id);
        return $user;
    }

    /**
     * @param Request $request
     * @param int $id
     */
    public function uploadProfileImage(Request $request)
    {
        $file = $request->file('image');
        $image = $this->userRepository->uploadProfileImage($file);
        return $image;
    }


}