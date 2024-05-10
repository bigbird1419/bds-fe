import routes from "../constants/routes"
import OnlyHeaderLayout from "../layouts/OnlyHeaderLayout"
import NoFilterLayout from '../layouts/NoFilterLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Blogs from "../pages/Blogs"
import PricingPage from "../pages/PricingPage"
import PostPage from "../pages/PostPage"
import Categorys from "../pages/Categorys"

import LayoutAdmin from "../pages/Admin/Layout"
import LayoutUser from '../pages/User/Layout'
import AdminHome from '../pages/Admin/Home'
import UserHome from '../pages/User/Home'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.login, component: Login, layout: OnlyHeaderLayout },
    { path: routes.signup, component: Signup, layout: OnlyHeaderLayout },
    { path: routes.blogs, component: Blogs, layout: OnlyHeaderLayout },
    { path: routes.pricing, component: PricingPage, layout: NoFilterLayout },
    { path: routes.post, component: PostPage, layout: OnlyHeaderLayout },
    { path: routes.category, component: Categorys },
    { path: routes.category, component: UserHome },
]

const privateRoutes = [
    { path: routes.adminHome, component: AdminHome, layout: LayoutAdmin },
    { path: routes.userHome, component: UserHome, layout: LayoutUser },
]

export { publicRoutes, privateRoutes }