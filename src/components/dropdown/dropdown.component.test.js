import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Dropdown from './dropdown.component'

const mockStore = configureStore( [] )

describe( 'Dropdown Component', () => {
    let store

    beforeEach( () => {
        store = mockStore( {
            global: {
                dropdowns: [],
            }
        } )
    } )

    test( 'Renders the Dropdown component with a button symbol', () => {
        render(
            <Provider store={store}>
                <Dropdown
                    symbol="filter_alt"
                    dropdownId="dropdown2"
                />
            </Provider>
        )

        const buttonElement = screen.getByRole( 'button' )
        const hasSymbol = screen.getByText( 'filter_alt' )

        expect( buttonElement ).toBeInTheDocument()
        expect( hasSymbol ).toBeInTheDocument()
    } )

    test( 'Renders the Dropdown component with not a button symbol', () => {
        render(
            <Provider store={store}>
                <Dropdown dropdownId="dropdown1" />
            </Provider>
        )

        const showText = screen.getByText( 'Show:' )
        const allText = screen.getByText( 'All' )
        const symbol = screen.getByText( 'expand_more' )

        expect( showText ).toBeInTheDocument()
        expect( allText ).toBeInTheDocument()
        expect( symbol ).toBeInTheDocument()
    } )
} )
