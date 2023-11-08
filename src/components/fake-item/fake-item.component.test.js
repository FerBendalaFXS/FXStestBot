import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FakeItem from './fake-item.component'


describe( 'Fake item testing', () => {
    test( 'Renders a "circle" FakeItem correctly with default width', () => {
        render( <FakeItem color="blue" type="circle" /> )

        const circleItem = screen.getByTestId( 'fake-circle' )

        expect( circleItem ).toBeInTheDocument()
        expect( circleItem ).toHaveStyle( 'background-color: blue' )
        expect( circleItem ).toHaveStyle( 'width: auto' )
    } )

    test( 'Renders a "line" FakeItem with custom width', () => {
        render( <FakeItem color="red" type="line" width="100%" /> )

        const lineItem = screen.getByTestId( 'fake-line' )

        expect( lineItem ).toBeInTheDocument()
        expect( lineItem ).toHaveStyle( 'background-color: red' )
        expect( lineItem ).toHaveStyle( 'width: 100%' )
    } )

    test( 'Renders an "all" FakeItem with both circle and line', () => {
        render( <FakeItem color="green" type="all" width="30px" /> )

        const circleItem = screen.getByTestId( 'fake-circle' )
        const lineItem = screen.getByTestId( 'fake-line' )

        expect( circleItem ).toBeInTheDocument()
        expect( circleItem ).toHaveStyle( 'background-color: green' )
        expect( circleItem ).toHaveStyle( 'width: auto' )

        expect( lineItem ).toBeInTheDocument()
        expect( lineItem ).toHaveStyle( 'background-color: green' )
        expect( lineItem ).toHaveStyle( 'width: 30px' )
    } )
} )
