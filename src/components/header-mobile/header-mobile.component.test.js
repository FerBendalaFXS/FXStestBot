import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Header from './header-mobile.component'

const mockStore = configureStore( [] )

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

        const fakeItemCircleElements = screen.getAllByTestId( 'fake-circle' )
        expect( fakeItemCircleElements ).toHaveLength( 2 )
    } )
} )