import Beverages from "../pages/Beverages_Page/Beverages";
import Deserts from "../pages/Deserts_Page/Deserts";
import Home from "../pages/Home_page/Home";
import Pizza from "../pages/Pizza_Page/Pizza";
import Sauces from "../pages/Sauces_Page/Sauces";
import Snacks from "../pages/Snacks_Page/Snacks";
import Stocks from "../pages/Stocks_Page/Stocks";


export const routes = [
   { path: '/home', component: Home },
   { path: '/stocks', component: Stocks },
   { path: '/pizza', component: Pizza },
   { path: '/snacks', component: Snacks },
   { path: '/deserts', component: Deserts },
   { path: '/beverages', component: Beverages },
   { path: '/sauces', component: Sauces },
]