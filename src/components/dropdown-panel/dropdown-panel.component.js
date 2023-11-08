import { useDispatch } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

import List from '../list/list.component'
import Form from '../form/form.component'

import styles from './dropdown-panel.module.scss'

const DropdownPanel = ( { items, title, form, position, dropdownId } ) => {
    const dispatch = useDispatch()

    // Close dropdown clicking on header button (if has header)
    const closeDropdown = () => {
        dispatch( setIsDropdownVisible( { dropdownId, isVisible: false } ) )
    }

    // It's necesary prove a position
    if ( !position ) {
        return null
    }

    return (
        <div className={`${styles['dropdown']} ${styles[`dropdown--${position}`]}`}>
            {/* Header if exists */}
            {title &&
                <header
                    className={styles['dropdown__header']}
                    data-testid='form-component-header'
                >
                    <button
                        className={`${styles['dropdown__header__button']} ${styles['symbol']}`}
                        onClick={closeDropdown}
                    >
                        arrow_back
                    </button>
                    <span className={styles['dropdown__header__text']}>{title}</span>
                </header>
            }

            {/* Dropdown List */}
            <div className={styles['dropdown__list']}>
                {!form
                    ? (
                        <List
                            items={items}
                            direction='vertical'
                            dropdownId={dropdownId}
                        />
                    ) : (
                        <Form
                            items={items}
                            dropdownId={dropdownId}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default DropdownPanel