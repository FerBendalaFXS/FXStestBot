import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PostHeader from './post-header.component'

// Mock the formatDateUtil function
jest.mock( '../../utils/format-date.util', () => ( {
    formatDateUtil: ( date ) => date.toISOString()
} ) )

test( 'Renders the PostHeader component with correct data', () => {
    const post = {
        feed: 'Feed Name',
        subFeed: 'Sub Feed Name',
        publicationTime: new Date( '2023-09-08T12:00:00Z' ), // Mocked publication time
    }

    render( <PostHeader post={post} /> )

    const feedText = screen.getByText( 'Feed Name' )
    const subFeedText = screen.getByText( 'Sub Feed Name' )
    expect( feedText ).toBeInTheDocument()
    expect( subFeedText ).toBeInTheDocument()

    const formattedDateText = screen.getByText( '2023-09-08T12:00:00.000Z' )
    expect( formattedDateText ).toBeInTheDocument()
} )
