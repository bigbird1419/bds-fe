import routes from "../constants/routes"
import OnlyHeaderLayout from "../layouts/OnlyHeaderLayout"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Blogs from "../pages/Blogs"
import PricingPage from "../pages/PricingPage"

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.login, component: Login },
    { path: routes.signup, component: Signup },
    { path: routes.blogs, component: Blogs, layout: OnlyHeaderLayout },
    { path: routes.pricing, component: PricingPage, layout: OnlyHeaderLayout },
]

export { publicRoutes }