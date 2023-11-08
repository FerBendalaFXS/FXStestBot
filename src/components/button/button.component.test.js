import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from './button.component'

describe( 'Button testing', () => {
    let component

    beforeEach( () => {
        component = render(
            <Button
                text="Text"
                symbol="filter_alt"
                active={false}
            />
        )
    } )

    test( 'Renders the Button component correctly with text and symbol', () => {
        const textElement = screen.getByText( 'Text' )
        const symbolElement = screen.getByText( 'filter_alt' )

        expect( textElement ).toBeInTheDocument()
        expect( symbolElement ).toBeInTheDocument()
    } )

    test( 'Renders the Button component with symbol but without text', () => {
        component.rerender(
            <Button symbol="filter_alt" />
        )

        const symbolElement = screen.getByText( 'filter_alt' )
        expect( symbolElement ).toBeInTheDocument()
    } )

    test( 'Renders the Button component with text but without symbol', () => {
        component.rerender(
            <Button text="Text" />
        )

        const textElement = screen.getByText( 'Text' )
        expect( textElement ).toBeInTheDocument()
    } )

    test( 'Renders the Button component as active', () => {
        component.rerender(
            <Button active={true} />
        )

        const buttonElement = screen.getByRole( 'button' )
        expect( buttonElement ).toHaveAttribute( 'data-active', 'true' )
    } )

    test( 'Renders the Button component as inactive', () => {
        const buttonElement = screen.getByRole( 'button' )
        expect( buttonElement ).toHaveAttribute( 'data-active', 'false' )
    } )

    test( 'Calls the onClick function when the button is clicked (inactive)', () => {
        const mockOnClick = jest.fn()
        component.rerender(
            <Button
                text="Button"
                symbol="filter_alt"
                onClick={mockOnClick}
                active={false}
            />
        )

        const buttonElement = screen.getByText( 'Button' )
        fireEvent.click( buttonElement )
        expect( mockOnClick ).toHaveBeenCalledTimes( 1 )
    } )

    test( 'Calls the onClick function when the button is clicked (active)', () => {
        const mockOnClick = jest.fn()
        component.rerender(
            <Button
                text="Button"
                symbol="filter_alt"
                onClick={mockOnClick}
                active={true}
            />
        )

        const buttonElement = screen.getByText( 'Button' )
        fireEvent.click( buttonElement )
        expect( mockOnClick ).toHaveBeenCalledTimes( 1 )
    } )
} )
