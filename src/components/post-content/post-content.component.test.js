import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PostContent from './post-content.component'

// Mock data for the post
const post = {
    title: 'Sample Post',
    content: '<p>This is a sample post content.</p>',
    imageUrl: 'sample-image-url.jpg',
}

test( 'Renders the Post component with correct data', () => {
    render( <PostContent post={post} /> )

    const contentElement = screen.getByText( 'This is a sample post content.' )
    expect( contentElement ).toBeInTheDocument()

    const imageElement = screen.getByAltText( 'Sample Post' )
    expect( imageElement ).toBeInTheDocument()
    expect( imageElement ).toHaveAttribute( 'src', 'sample-image-url.jpg' )
} )