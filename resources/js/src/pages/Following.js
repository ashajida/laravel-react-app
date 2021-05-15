import Followers from '../components/Followers';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Following from '../components/Following';

const FollowingPage = () => {

    const params = useParams();
    const user = useSelector(state => state.auth.user);

    return(
        <React.Fragment>
            <Following user={ user } />
        </React.Fragment>
    );
}

export default FollowingPage;