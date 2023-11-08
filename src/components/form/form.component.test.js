import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import Form from './form.component'

// Mock useDispatch to avoid Redux-related issues
jest.mock( 'react-redux', () => ( {
    useDispatch: jest.fn(),
} ) )

// Mock setIsDropdownVisible action
const mockDispatch = jest.fn()
useDispatch.mockReturnValue( mockDispatch )

const sampleItems = ['Item 1', 'Item 2', 'Item 3']

describe( 'Form testing', () => {
    test( 'Renders the Form component with radio buttons and a submit button', () => {
        render( <Form items={sampleItems} dropdownId="dropdownId" /> )

        const formElement = screen.getByTestId( 'form-component' )
        expect( formElement ).toBeInTheDocument()

        const radioButtons = screen.getAllByRole( 'radio' )
        expect( radioButtons ).toHaveLength( sampleItems.length )

        const submitButton = screen.getByRole( 'button', { name: 'Hide content' } )
        expect( submitButton ).toBeInTheDocument()
    } )

    test( 'Selecting a radio button updates the selected item', () => {
        render( <Form items={sampleItems} dropdownId="dropdownId" /> )

        const radioButtons = screen.getAllByRole( 'radio' )
        fireEvent.click( radioButtons[1] )

        expect( screen.getByRole( 'radio', { checked: true } ) ).toBeInTheDocument()
        expect( screen.getByText( 'Item 2' ) ).toBeInTheDocument()
    } )

    test( 'Submitting the form dispatches setIsDropdownVisible action', () => {
        render( <Form items={sampleItems} dropdownId="dropdownId" /> )

        const radioButtons = screen.getAllByRole( 'radio' )
        fireEvent.click( radioButtons[0] )

        const submitButton = screen.getByRole( 'button', { name: 'Hide content' } )
        fireEvent.click( submitButton )

        expect( mockDispatch ).toHaveBeenCalledWith( {
            payload: {
                dropdownId: 'dropdownId',
                isVisible: false,
            },
            type: 'global/setIsDropdownVisible',
        } )
    } )
} )