// Layouts

// Pages
import config from './../config';
import Home from './../pages/Home';
import Product from './../pages/Product';
import Account from '../pages/Account';
import Cart from '../pages/Cart/';
import Payment from './../pages/Payment/Payment';
import Login from '../pages/Login/Login';
import Collection from '../pages/Collection';
import { HeaderOnly } from '../layouts';

// public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: `${config.routes.product}/:slug`,
        component: Product,
    },
    {
        path: config.routes.account,
        component: Account,
    },
    {
        path: config.routes.cart,
        component: Cart,
        layout: HeaderOnly,
    },
    {
        path: config.routes.payment,
        component: Payment,
        layout: null,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Login,
        layout: null,
    },
    {
        path: `${config.routes.collections}/:slugCollection`,
        component: Collection,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
