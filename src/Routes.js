import Home from './Components/Home';
import PriceServices from './Components/PriceServices';
import Order from './Components/Order';
import Loginpage from './Components/Loginpage';
import Forgetpass from './Components/Forgetpass';
import Register from './Components/Register';
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import News from './Components/News';
import BlogOriginal from './Components/BlogOriginal';
import PanelCustom from './Components/PanelCustom';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Basket from './Components/Basket';
import CustomOrder from './Components/CustomOrder';
import PaymentCallback from "./Components/PaymentCallback";

function Routes() {

    const routers = [

        {
            path: '/',
            component: Home,
            exact: true,

        },
        {
            path: '/services/:id/:slug',
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
        {
            path:'/contactus',
            component:ContactUs,
            exact:true
        },
        {
            path:'/aboutus',
            component:AboutUs,
            exact:true
        },
        {
            path:'/basket',
            component:Basket,
            exact:true
        },
        {
            path:'/customorder',
            component:CustomOrder,
            exact:true
        },
        {
            path:'/callback',
            component:PaymentCallback,
            exact:true
        }
      
    ];

    return (
        <BrowserRouter>
            <React.Fragment>

                {routers.map((route, index) => <Route key={index} {...route}/>)}

            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;