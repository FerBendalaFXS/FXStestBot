import List from '../list/list.component'
import FakeItem from '../fake-item/fake-item.component'

import variables from 'variablesJS'
import styles from './header.module.scss'

const Header = () => {
    // List options array
    const types = [
        { type: 'line', color: variables['orange-100'], width: 136 },
        { type: 'circle', color: variables['gray-500'] },
        { type: 'circle', color: variables['gray-500'] },
        { type: 'all', color: variables['gray-500'] }
    ]

    return (
        <header
            className={styles['header']}
            data-testid='header-component'
        >
            <nav className={styles['header__container']}>
                <FakeItem
                    color={variables['blue-200']}
                    width={136}
                />

                {/* List options */}
                <List fakeItems={types} />
            </nav>
        </header>
    )
}

export default Header