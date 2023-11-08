import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Tabs from './tabs.component'

const mockStore = configureStore( [] )

describe( 'Tabs Component', () => {
    let store

    beforeEach( () => {
        store = mockStore( {
            global: {
                dropdowns: [],
                activeTab: 'Latest'
            },
        } )

        render(
            <Provider store={store}>
                <Tabs />
            </Provider>
        )
    } )

    test( 'should dispatch setActiveTab when a tab is clicked', () => {
        const popularTab = screen.getByText( 'Popular' )
        fireEvent.click( popularTab )

        const expectedAction = {
            type: 'global/setActiveTab',
            payload: 'Popular',
        }

        expect( store.getActions() ).toEqual( [expectedAction] )
    } )
} )
