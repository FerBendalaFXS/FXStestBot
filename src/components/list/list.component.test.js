import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import List from './list.component'

const mockStore = configureStore( [] )

const fakeItems = [
    { type: 'line', color: 'red', width: 100 },
    { type: 'line', color: 'red', width: 100 }
]

const items = [
    { symbol: 'A', text: 'Item A' },
    { symbol: 'B', text: 'Item B' },
]

describe( 'List testing', () => {
    let store

    beforeEach( () => {
        store = mockStore( {
            global: {
                dropdowns: [],
            }
        } )
    } )

    test( 'Renders the List component with fake items and items', () => {
        render(
            <Provider store={store}>
                <List
                    fakeItems={fakeItems}
                    items={items}
                    direction="vertical"
                    dropdownId="testDropdown"
                />
            </Provider>
        )

        const listElement = screen.getByTestId( 'list-component' )
        const fakeItemElements = screen.getAllByTestId( 'fake-line' )

        expect( listElement ).toBeInTheDocument()
        expect( fakeItemElements ).toHaveLength( fakeItems.length )
    } )

    test( 'Renders the List component with horizontal direction', () => {
        render(
            <Provider store={store}>
                <List
                    fakeItems={fakeItems}
                    items={items}
                    direction="horizontal"
                    dropdownId="testDropdown"
                />
            </Provider>
        )

        const listElement = screen.getByTestId( 'list-component' )
        expect( listElement ).toBeInTheDocument()
    } )

    test( 'Renders the List component without fake items', () => {
        render(
            <Provider store={store}>
                <List
                    items={items}
                    direction="vertical"
                    dropdownId="testDropdown"
                />
            </Provider>
        )

        const listElement = screen.getByTestId( 'list-component' )
        expect( listElement ).toBeInTheDocument()
    } )

    test( 'Renders the List component without items', () => {
        render(
            <Provider store={store}>
                <List
                    fakeItems={fakeItems}
                    direction="vertical"
                    dropdownId="testDropdown"
                />
            </Provider>
        )

        const listElement = screen.getByTestId( 'list-component' )
        expect( listElement ).toBeInTheDocument()

        const itemElements = screen.queryAllByTestId( 'list-item' )
        expect( itemElements ).toHaveLength( 0 )
    } )
} )