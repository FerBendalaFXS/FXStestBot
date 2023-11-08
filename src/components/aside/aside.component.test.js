import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Aside from './aside.component'

const mockStore = configureStore( [] )

describe( 'Aside Component', () => {
    let store

    beforeEach( () => {
        store = mockStore( {
            global: {
                dropdowns: [],
            }
        } )

        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        )
    } )

    test( 'Renders the component correctly', () => {
        const logoElement = screen.getByAltText( 'FXStreet' )
        const listElement = screen.getByTestId( 'list-component' )

        expect( logoElement ).toBeInTheDocument()
        expect( listElement ).toBeInTheDocument()
    } )
} )
