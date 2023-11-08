import List from '../list/list.component'

import LogoFXStreet from '../../assets/images/logo-fxstreet.svg'

import variables from 'variablesJS'
import styles from './aside.module.scss'

const Aside = () => {
    // List options array
    const types = [
        { type: 'line', color: variables['white'], width: 111 },
        { type: 'line', color: variables['gray-300'], width: 111, },
        { type: 'line', color: variables['gray-300'], width: 111, },
        { type: 'line', color: variables['gray-300'], width: 111, },
        { type: 'line', color: variables['gray-300'], width: 111 }
    ]

    return (
        <aside className={styles['aside']}>
            {/* Logo */}
            <img
                src={LogoFXStreet}
                alt='FXStreet'
                className={styles['aside__logo']}
            />

            {/* List options */}
            <List fakeItems={types} direction='vertical' />
        </aside>
    )
}

export default Aside
