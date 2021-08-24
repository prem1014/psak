import React from 'react';
import { Link } from 'react-router-dom';

import routesConfig from '../../Routes/route-config';
import IRoute from '../../Routes/route-interface';

const NavBar = (props: any) => {

    const leftRouteLinks = routesConfig.filter(routeConfig => routeConfig.float === 'left');
    const rightRouteLinks = routesConfig.filter(routeConfig => routeConfig.float === 'right');

    const getNavLink = (route: IRoute) => {
        if (route.show) {
            return <li className="nav-item">
                <Link className="nav-link" to={route.path}>{route.displayText}</Link>
            </li>
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark Header fixed-top">
            {/* <a className="navbar-brand" href="#" style={{ marginLeft: '5px' }}>PSAK Engineering</a> */}
            <Link className="navbar-brand" style={{ marginLeft: '5px' }} to="/home">PSAK Engineering</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav me-auto">
                    {
                        leftRouteLinks.map((route: IRoute) => (
                            getNavLink(route)
                        ))
                    }
                </ul>
                <ul className="navbar-nav">
                    {
                        rightRouteLinks.map((route: IRoute) => (
                            getNavLink(route)
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;