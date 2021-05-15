import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../redux/authReducer';

const Logout = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const history = useHistory();


    dispatch(logout());
    history.push('/');

    return(<div></div>);


}

export default Logout;