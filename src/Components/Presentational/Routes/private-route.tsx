import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

interface IProps {
    component: any,
    isAuthenticated?: any;
    path: any;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
    const getRoutes = (data: any) => {
        return rest.isAuthenticated === true ? <Component {...data} /> : <Redirect to='/login' />
    }
    return (
        <Route {...rest} render={getRoutes} />
    )
}


  export default PrivateRoute;