import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Aside from '../components/aside/aside.component'
import Header from '../components/header/header.component'
import HeaderMobile from '../components/header-mobile/header-mobile.component'
import Widget from '../components/widget/widget.component'

import styles from './layout.module.scss'

const Layout = () => {
    const isMobile = useMediaQuery( { maxWidth: 991 } )

    return (
        <div className={styles['layout']}>
            {/* Aside bar */}
            <Aside />

            {/* Main */}
            <main className={styles['layout__main']}>
                {/* Show a type of header depending on device */}
                {!isMobile ? <Header /> : <HeaderMobile />}

                {/* Content */}
                <section className={styles['layout__main__content']}>
                    <Outlet />
                    <Widget />
                </section>
            </main>
        </div>
    )
}

export default Layout
