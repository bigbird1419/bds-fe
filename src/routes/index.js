import routes from "../constants/routes"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.login, component: Login },
    { path: routes.signup, component: Signup },
]

export { publicRoutes }