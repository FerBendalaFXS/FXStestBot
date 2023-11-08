import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import FilterIcon from './button-filter.component'

describe( 'FilterIcon Component', () => {
    let onClickMock, component

    beforeEach( () => {
        onClickMock = jest.fn()
        component = render(
            <FilterIcon
                isDropdownVisible={false}
                onClick={onClickMock}
            />
        )
    } )

    test( 'Renders the FilterIcon component with text and symbol when not in small screen', () => {
        const showText = screen.getByText( 'Show:' )
        const allText = screen.getByText( 'All' )
        const symbol = screen.getByText( 'expand_more' )

        expect( showText ).toBeInTheDocument()
        expect( allText ).toBeInTheDocument()
        expect( symbol ).toBeInTheDocument()
    } )

    test( 'Check if dropdown button are correctly diplayed when not in small screen', () => {
        component.rerender(
            <FilterIcon
                isDropdownVisible={true}
                onClick={onClickMock}
            />
        )

        const symbol = screen.getByText( 'keyboard_arrow_up' )
        expect( symbol ).toBeInTheDocument()
    } )

    test( 'Calls the onClick function when the button is clicked', () => {
        const buttonElement = screen.getByRole( 'button' )
        fireEvent.click( buttonElement )

        expect( onClickMock ).toHaveBeenCalledTimes( 1 )
    } )
} )