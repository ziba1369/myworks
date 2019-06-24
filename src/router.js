import Home from './Components/Home';
import PriceServices from './Components/PriceServices';
import Order from './Components/Order';
import Loginpage from './Components/Loginpage';
const routers = [

    {
        path: '/',
        component: Home,
        exact: true,

    },
    {
        path: '/services',
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

]
export default routers;