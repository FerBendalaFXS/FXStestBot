import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import './assets/scss/index.scss'

const App = () => {
    // Render routes from ./routes
    const renderRoutes = ( { children, path, element } ) => (
        <Route
            key={path}
            path={path}
            element={element}
        >
            {children && children.map( childRoute => renderRoutes( childRoute ) )}
        </Route>
    )

    return (
        <Routes>
            {routes.map( route => renderRoutes( route ) )}
        </Routes>
    )
}

export default App
