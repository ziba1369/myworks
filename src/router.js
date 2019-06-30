import Home from './Components/Home';
import PriceServices from './Components/PriceServices';
import Order from './Components/Order';
import Loginpage from './Components/Loginpage';
import Forgetpass from './Components/Layout/Login/Forgetpass';
import Register from './Components/Layout/Login/Resgistery';
const routers = [

    {
        path: '/',
        component: Home,
        exact: true,

    },
    {
        path: '/services/:id',
        component: PriceServices,
        exact: true,

    },
    {
        path: '/order',
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

]
export default routers;