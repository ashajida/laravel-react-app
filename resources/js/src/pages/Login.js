import React, { Fragment } from 'react';
import Login from '../components/Auth/Login';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const user = useSelector(state => state.auth.user);

    if(Object.keys(user).length > 0) return <Redirect to='/' />;

    return(
        <React.Fragment>
            <Login />
        </React.Fragment>
    );
}

export default LoginPage;