<?php

namespace App\Repositories;

interface LikeRepositoryInterface
{
    /**
     * @param int $id
     */
    public function get($id);

    /**
     * @param int $id
     *  */  
    public function create($id);

    /**
     * @param int $id
     */
    public function delete($id);

}