<?php

namespace App\Repositories;

interface CommentRepositoryInterface 
{
    
    /**
     * @param array $data
     */
    public function create($data);

    /**
     * @param int $id
     */
    public function getAll($id);

    /**
     * @param int $id
     */
    public function get($id);

    /**
     * @param array $data
     */
    public function edit($data);

    /**
     * @param int $id
     */
    public function delete(int $id);
}