import React from 'react';

import IRoute from "./route-interface";

const Home = React.lazy( () => import('../Home/Home.component'));
const ContactUs = React.lazy( () => import('../ContactUs/ContactUs.component'));
const AboutUs = React.lazy( () => import('../AboutUs/AboutUs.component'));
const Products = React.lazy( () => import('../Products/Products.component'));

const routesConfig: Array<IRoute> = [
    {
        path: '/home',
        component: Home,
        icon: 'home',
        displayText: 'Home',
        float: 'left',
        show: true
    },
    {
        path: '/about',
        component: AboutUs,
        icon: 'home',
        displayText: 'About Us',
        float: 'right',
        show: true
    },
    {
        path: '/contact',
        component: ContactUs,
        icon: 'home',
        displayText: 'Contact Us',
        float: 'right',
        show: true
    },
    {
        path: '/products',
        component: Products,
        icon: 'home',
        displayText: 'Our Products',
        float: 'right',
        show: true
    }
]

export default routesConfig;