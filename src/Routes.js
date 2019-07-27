import Home from './Components/Home';
import PriceServices from './Components/PriceServices';
import Order from './Components/Order';
import Loginpage from './Components/Loginpage';
import Forgetpass from './Components/Forgetpass';
import Register from './Components/Register';
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import News from './Components/News';
import NavBar from './Components/Layout/NavBar';
import BlogOriginal from './Components/BlogOriginal';
import PanelCustom from './Components/PanelCustom';
function Routes() {

    const routers = [

        {
            path: '/',
            component: Home,
            exact: true,

        },
        {
            path: '/services/:id',
            // path: '/services',
            component: PriceServices,
            exact: true,

        },
        {
            path: '/order/:name',
            component: Order,
            exact: true,

        },
        {
            path: '/login',
            component: Loginpage,
            exact: true,

        },
        {
            path: '/forgetpass',
            component: Forgetpass,
            exact: true,

        },
        {
            path: '/register',
            component: Register,
            exact: true,

        },
        {
            path: '/news',
            component: News,
            exact: true,

        },
        {
            path: '/blog/:slug',
            component: BlogOriginal,
            exact: true,

        },
        {
            path: '/profile/:page',
            component:PanelCustom,
            exact: true,

        },

    ];

    return (
        <BrowserRouter>
            <React.Fragment>
                <header>
                    <NavBar/>
                </header>
                {routers.map((route, index) => <Route key={index} {...route}/>)}

            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;