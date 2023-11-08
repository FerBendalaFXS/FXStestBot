import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Tab from './tab.component'

const mockOnClick = jest.fn()

describe( 'Tab Component', () => {
    test( 'renders a tab with the correct text and without the "active" class by default', () => {
        render(
            <Tab text="Tab 1" active={false} onClick={mockOnClick} />
        )

        const tabButton = screen.getByTestId( 'tab-button' )
        const tabText = screen.getByText( 'Tab 1' )
        expect( tabButton ).toBeInTheDocument()
        expect( tabText ).toBeInTheDocument()
    } )

    test( 'calls the onClick function when the tab is clicked', () => {
        render(
            <Tab text="Tab 3" active={false} onClick={mockOnClick} />
        )

        const tabButton = screen.getByTestId( 'tab-button' )

        fireEvent.click( tabButton )
        expect( mockOnClick ).toHaveBeenCalledWith( 'Tab 3' )
    } )
} )
