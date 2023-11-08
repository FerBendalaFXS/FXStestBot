import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Header from './header.component'

const mockStore = configureStore( [] )

// Mock external variables from 'variablesJS'
jest.mock( 'variablesJS', () => ( {
    'orange-100': 'orange',
    'gray-500': 'gray',
    'blue-200': 'blue',
} ) )

describe( 'Header testing', () => {
    let store

    beforeEach( () => {
        store = mockStore( {
            global: {
                dropdowns: [],
            }
        } )
    } )

    test( 'Renders the Header component with a FakeItem and List', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )

        // Check if the Header component is rendered
        const headerElement = screen.getByTestId( 'header-component' )
        expect( headerElement ).toBeInTheDocument()

        // Check if FakeItem is rendered with the specified color and width
        const fakeItemElement = screen.getAllByTestId( 'fake-line' )
        expect( fakeItemElement[1] ).toHaveStyle( 'background-color: orange' )
        expect( fakeItemElement[1] ).toHaveStyle( 'width: 136px' )

        // Check if List is rendered with the specified number of FakeItems
        const listElement = screen.getByTestId( 'list-component' )
        const fakeItemLineElements = screen.getAllByTestId( 'fake-line' )
        const fakeItemCircleElements = screen.getAllByTestId( 'fake-circle' )
        expect( listElement ).toBeInTheDocument()
        expect( fakeItemLineElements ).toHaveLength( 3 )
        expect( fakeItemCircleElements ).toHaveLength( 4 )
    } )
} )