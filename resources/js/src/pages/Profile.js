import React, { Fragment, useState, useEffect } from 'react';
import Self from '../components/Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const [ user, setUser ] = useState({});
    const [ fufilled, setFufilled ] = useState(false);
    const [ isFollowed, setIsFollowed ] = useState(false);
    const authUser = useSelector(state => state.auth.user);
    const posts = useSelector(state => state.posts.posts);
    const param = useParams();

    useEffect(() => {
        axios.get(`/api/users/${param.user}`)
        .then(res => {
            setUser(res.data)
            setFufilled(true);
            res.data.relationships.followers.data.data.map( follower => {
                if(follower.username == authUser.username) {
                    setIsFollowed(true);
                }
            })
        });

        return () => {
            setFufilled(false);
            setIsFollowed(false);
            setUser({});
        }

}, [param.user, authUser, posts]);

    return(
        <React.Fragment>
            { fufilled && <Self 
                            user={ user } 
                            isFollowed={ isFollowed } 
                            authUser={ authUser }
                            setIsFollowed={ setIsFollowed }
                            setUser={ setUser }
                        /> }
        </React.Fragment>
    );
}

export default ProfilePage;