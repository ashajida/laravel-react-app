<?php

namespace App\Repositories;

interface PostRepositoryInterface
{
    /**
     * @param array $data
     *  */  
    public function create(Array $data);

    /**
     * @param User $user
     */
    public function self($user);

    /**
     * @param int $id
     */
    public function get($id);

    /**
     * @param int $id
     * @param array $data
     */
    public function edit($data, $id);

    /**
     * @param int $id
     */
    public function delete($id);


}