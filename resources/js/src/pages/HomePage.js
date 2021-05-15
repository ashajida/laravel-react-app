import React, { Fragment, useState, useEffect } from 'react';
import Home from '../components/Home';
import axios from 'axios';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const posts = useSelector((state) => state.posts.posts)
    
    return(
        <div>
            <Home posts={posts} />
        </div>
    );
}

export default HomePage;