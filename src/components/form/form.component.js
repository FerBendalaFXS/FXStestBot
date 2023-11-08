import { useState } from 'react'
import styles from './form.module.scss'
import { useDispatch } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

const Form = ( { items, dropdownId } ) => {
    const [selectedItem, setSelectedItem] = useState( null )
    const dispatch = useDispatch()
    const isButtonDisabled = selectedItem === null

    // Handle radio buttons
    const handleRadioChange = ( index ) => {
        setSelectedItem( index )
    }

    // Close modal when form is submitted
    const handleSubmit = ( event ) => {
        event.preventDefault()
        dispatch( setIsDropdownVisible( { dropdownId, isVisible: false } ) )
    }

    return (
        <form
            className={styles['form']}
            onSubmit={handleSubmit}
            data-testid='form-component'
        >
            {/* Map radio button inputs of the form */}
            {items.map( ( item, index ) => (
                <label
                    key={index}
                    className={styles['form__label']}
                >
                    <input
                        type="radio"
                        name="dropdown-radio"
                        className={styles['form__label__radio']}
                        onChange={() => handleRadioChange( index )}
                    />
                    <span className={styles['form__label__text']}>
                        {item}
                    </span>
                </label>
            ) )}

            <button
                type='submit'
                className={styles['form__button']}
                disabled={isButtonDisabled}
            >
                <span className={styles['form__button__text']}>Hide content</span>
            </button>
        </form>
    )
}

export default Form