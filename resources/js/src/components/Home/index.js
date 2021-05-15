import { Fragment } from 'react'
import React from 'react';
import PostsCollection from './PostCollection';

const Home = ({ posts }) => {
    return(
        <React.Fragment>
            <PostsCollection posts={ posts } />
        </React.Fragment>
    );
}

export default Home;