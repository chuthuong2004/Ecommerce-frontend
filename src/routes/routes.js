// Layouts

// Pages
import config from './../config';
import Home from './../pages/Home';
import Product from './../pages/Product';
import Account from '../pages/Account';
import Cart from '../pages/Cart/';
import Payment from './../pages/Payment/Payment';
// public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.account,
        component: Account,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
    {
        path: config.routes.payment,
        component: Payment,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
