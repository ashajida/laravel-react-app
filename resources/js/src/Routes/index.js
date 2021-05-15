import { Route, Redirect } from 'react-router-dom';
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {

    const { component: Component,  ...rest } = props;
    const user = useSelector(state => state.auth.user);
 
    useEffect(() => {

    }, []);

    if(Object.keys(user).length === 0) {
        return(<Redirect to='/login' />);
    }

    return(
        <React.Fragment>
            { 
                <Route {...rest} render={(props) => {
                    return( <Component {...props} /> );
                }} />
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;