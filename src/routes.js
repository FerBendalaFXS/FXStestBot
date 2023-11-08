import Layout from './layout/layout'

import Home from './pages/home.page'
import PageNotFound from './pages/not-found.page'

export const routes = [{
    path: '/',
    element: <Layout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '*', element: <PageNotFound /> },
    ],
}]