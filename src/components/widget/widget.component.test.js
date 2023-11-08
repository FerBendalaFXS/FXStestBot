import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Widget from './widget.component'

jest.mock( 'variablesJS', () => ( {
    white: 'white',
    'blue-200': 'blue',
} ) )

describe( 'Widget Component', () => {

    beforeAll( () => {
        render( <Widget /> )
    } )

    test( 'should render Widget component correctly', () => {
        const widgetElement = screen.getByTestId( 'widget-component' )
        expect( widgetElement ).toBeInTheDocument()

        const fakeLineItems = screen.getAllByTestId( 'fake-line' )
        expect( fakeLineItems.length ).toBe( 3 )
        expect( fakeLineItems[0] ).toHaveStyle( 'width: 100%' )
        expect( fakeLineItems[0] ).toHaveStyle( 'background-color: white' )
        expect( fakeLineItems[1] ).toHaveStyle( 'width: 60%' )
        expect( fakeLineItems[1] ).toHaveStyle( 'background-color: white' )

        const negativeFakeItem = screen.getByTestId( 'fake-circle' )
        expect( negativeFakeItem ).toBeInTheDocument()
        expect( negativeFakeItem ).toHaveStyle( 'width: auto' )
        expect( negativeFakeItem ).toHaveStyle( 'background-color: blue' )
    } )
} )
