import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routesConfig from '../Routes/route-config';
import IRoute from './route-interface';
import AppHeader from '../Layout/Header/header.component'
import PrivateRoute from './private-route';
import AppFooter from '../Layout/Footer/Footer.component';

const AppRoute: React.FC<any> = (props: any) => {
    const getRoutes = (route: IRoute) => {
        if (route.private) {
            return <PrivateRoute key={route.path}
                path={route.path}
                component={route.component}
                isAuthenticated={props.authState?.isAuthenticated}
            />
        } else {
            return <Route key={route.path}
                path={route.path}
                component={route.component}
            ></Route>
        }
    }
    return (
        <Router>
            <AppHeader />
            <div className="row" style={{ marginTop: '70px', marginBottom: '100px' }}>
                <div className="col-12">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {
                                routesConfig.map((route: IRoute, i) => (
                                    getRoutes(route)
                                ))
                            }
                            <Redirect from="/" exact to="home" />
                        </Switch>
                    </Suspense>
                </div>
            </div>
            <AppFooter />
        </Router>
    )
}

export default AppRoute;
