import { useDispatch } from 'react-redux'
import FakeItem from '../fake-item/fake-item.component'
import styles from './list.module.scss'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

const List = ( { fakeItems, items, direction, dropdownId } ) => {
    const dispatch = useDispatch()

    // Set list classnames based on the direction
    const listClassNames = direction === 'vertical'
        ? [styles['list'], styles['list--vertical']].join( ' ' )
        : styles['list']

    // Handle click to hide the dropdown panel when click on ITEM
    const handleClick = () => {
        dispatch( setIsDropdownVisible( { dropdownId, isVisible: false } ) )
    }

    return (
        <ul className={listClassNames} data-testid='list-component'>
            {/* Show fake items if exist */}
            {fakeItems?.map( ( item, index ) => (
                <li
                    key={index}
                    className={styles['list__item']}
                >
                    <FakeItem
                        type={item.type}
                        color={item.color}
                        width={item.width}
                    />
                </li>
            ) )}

            {/* Show items if exist */}
            {items?.map( ( item, index ) => (
                <li
                    key={index}
                    className={styles['list__item']}
                    onClick={handleClick}
                    data-testid='fake-item'
                >
                    <span className={`${styles['item__symbol']} ${styles['symbol']}`}>
                        {item.symbol}
                    </span>
                    <span className={styles['item__text']}>
                        {item.text}
                    </span>
                </li>
            ) )}
        </ul>
    )
}

export default List