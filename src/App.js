import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoutes, privateRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout'
import LayoutUser from './pages/User/Layout'

export default function App() {
    return (
        <Router>
            <div className=''>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        let Layout = DefaultLayout
                        if (route.layout) {
                            Layout = route.layout
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                    {privateRoutes.map((route, i) => {
                        const Page = route.component
                        let Layout = LayoutUser
                        if (route.layout) {
                            Layout = route.layout
                        }
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}