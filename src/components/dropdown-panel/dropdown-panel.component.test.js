import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'
import DropdownPanel from './dropdown-panel.component'

// Mock useDispatch function
jest.mock( 'react-redux', () => ( {
    useDispatch: jest.fn(),
} ) )

describe( 'DropdownPanel Component', () => {
    const sampleItems = [
        'This isn\'t a real item',
        'Sixteen tones'
    ]

    // Define a mock dispatch function
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue( mockDispatch )

    let component

    beforeEach( () => {
        useDispatch.mockClear()

        component = render(
            <DropdownPanel
                items={sampleItems}
                title="Dropdown Title"
                position="top"
                form={true}
                dropdownId="dropdown1"
            />
        )
    } )


    test( 'Renders the DropdownPanel component with a title and list', () => {
        const formElement = screen.getByTestId( 'form-component' )
        const headerElement = screen.getByTestId( 'form-component-header' )
        const headerText = screen.getByText( 'Dropdown Title' )
        const headerSymbol = screen.getByText( 'arrow_back' )

        const listItem1 = screen.getByText( sampleItems[0] )
        const listItem2 = screen.getByText( sampleItems[1] )


        expect( formElement ).toBeInTheDocument()
        expect( headerElement ).toBeInTheDocument()
        expect( headerText ).toBeInTheDocument()
        expect( headerSymbol ).toBeInTheDocument()

        // Assert that the list items are rendered
        expect( listItem1 ).toBeInTheDocument()
        expect( listItem2 ).toBeInTheDocument()
    } )

    test( 'Calls setIsDropdownVisible when clicking the close button', () => {
        component.rerender(
            <DropdownPanel
                items={sampleItems}
                title="Dropdown Title"
                position="top"
                dropdownId="dropdown3"
            />
        )

        // Click the close button
        fireEvent.click( screen.getByText( 'arrow_back' ) )

        // Assert that setIsDropdownVisible is called with the correct arguments
        expect( mockDispatch ).toHaveBeenCalledWith( {
            type: setIsDropdownVisible.type,
            payload: {
                dropdownId: 'dropdown3',
                isVisible: false,
            },
        } )
    } )

    test( 'Does not render if position prop is not provided', () => {
        component.rerender(
            <DropdownPanel
                items={sampleItems}
                title="Dropdown Title"
                dropdownId="dropdown4"
            />
        )

        expect( screen.queryByText( 'Dropdown Title' ) ).toBeNull()
    } )
} )
