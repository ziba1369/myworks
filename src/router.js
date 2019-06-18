import Home from './Components/Home';
import PriceServices from './Components/PriceServices';
import Order from './Components/Order';

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

]
export default routers;