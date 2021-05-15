<?php

namespace App\Repositories;

interface UserRepositoryInterface
{

    /**
     * @param int $id
     */
    public function get($id);

    /**
     * @param array $data
     * Creates a new user
     *  */  
    public function create($data);

    /**
     * @param int $id
     * Deletes a user
     */
    public function delete($id);

    /**
     * @param array $data
     * Edits user 
     */
    public function edit($data);

    /**
     * Get all users
     */
    public function getAll();

    /**
     * Get subscribers
     */
    public function getFollowers();

    /**
     * Get subscriptions
     */
    public function getFollowing();

    /**
     * @param int $id
     */
    public function follow($id);

    /**
     * @param int  $id
     */
    public function unfollow($id);

    /**
     * @param string $file
     */
    public function uploadAvatar($file);
 
}