import React, { Fragment, useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [ post, setPost ] = useState({});
    const [ fufilled, setFufilled ] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/posts/${ id }`)
        .then(res => { 
            setPost(res.data.data);
            setFufilled(true);
        });

        return () => setFufilled(false);
    }, []);

    return(
        <React.Fragment>
            { fufilled && <SinglePost post={ post } /> }
        </React.Fragment>
    );
}

export default Post;