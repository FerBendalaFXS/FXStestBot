import List from '../list/list.component'

import LogoFXStreet from '../../assets/images/logo-fxstreet-m.svg'

import variables from 'variablesJS'
import styles from './header-mobile.module.scss'

const HeaderMobile = () => {
    // List options array
    const types = [
        { type: 'circle', color: variables['gray-300'] },
        { type: 'circle', color: variables['gray-300'] }
    ]

    return (
        <header className={styles['header']}>
            <nav className={styles['header__container']}>
                <img
                    src={LogoFXStreet}
                    alt='FXStreet'
                    className={styles['header__logo']}
                />

                {/* List options */}
                <List fakeItems={types} />
            </nav>
        </header>
    )
}

export default HeaderMobile