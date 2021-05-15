import Followers from '../components/Followers';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FollowersPage = () => {

    const params = useParams();
    const user = useSelector(state => state.auth.user);

    return(
        <React.Fragment>
            <Followers user={ user } />
        </React.Fragment>
    );
}

export default FollowersPage;