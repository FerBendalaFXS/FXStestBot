import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

import DropdownPanel from '../dropdown-panel/dropdown-panel.component'
import ButtonFilter from '../button-filter/button-filter.component'

import styles from './dropdown.module.scss'

const Dropdown = ( { dropdownItems, form, symbol, title, position, dropdownId } ) => {
    const isDropdownVisible = useSelector( state => state.global.dropdowns[dropdownId] || false )
    const dropdownRef = useRef( null ) // Ref for tracking the dropdown element
    const dispatch = useDispatch()

    useEffect( () => {
        // Check for clicks outside the dropdown
        if ( isDropdownVisible )
            document.addEventListener( 'mousedown', handleClickOutside )

        // Clean up the event listener
        return () =>
            document.removeEventListener( 'mousedown', handleClickOutside )
    }, [isDropdownVisible] )

    // Toogle dropdown visibility
    const handleDropdown = () => {
        dispatchDropdownVisibility( !isDropdownVisible )
    }

    // Manage clicks out of dropdown to close it
    const handleClickOutside = ( click ) => {
        const checkOutsideClick = dropdownRef.current && !dropdownRef.current.contains( click.target )
        if ( checkOutsideClick ) dispatchDropdownVisibility( false )
    }

    // Dispatch redux action to set rhe dropdown visibility
    const dispatchDropdownVisibility = ( visibility ) => {
        dispatch( setIsDropdownVisible( {
            dropdownId,
            isVisible: visibility
        } ) )
    }

    return (
        <div
            className={styles['dropdown']}
            ref={dropdownRef}
            data-testid='dropdown-component'
        >
            {/* Dropdown button */}
            {symbol
                ? (
                    <button
                        className={styles['dropdown__button']}
                        onClick={handleDropdown}
                    >
                        <span className={`${styles['dropdown__button__symbol']} ${styles['symbol']}`}>
                            {symbol}
                        </span>
                    </button>
                ) : (
                    <ButtonFilter
                        isDropdownVisible={isDropdownVisible}
                        onClick={handleDropdown}
                    />
                )
            }

            {/* Dropdown */}
            {isDropdownVisible && (
                <DropdownPanel
                    items={dropdownItems}
                    form={form}
                    title={title}
                    position={position}
                    dropdownId={dropdownId}
                />
            )}
        </div>
    )
}

export default Dropdown