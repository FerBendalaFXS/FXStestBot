import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PostAuthor from './post-author.component'

// Mock data for the post
const post = {
    title: 'Sample Post',
    author: {
        name: 'John Doe',
        companyName: 'Sample Company',
        imageUrl: 'sample-image-url.jpg',
    },
}

test( 'Renders the Post component with correct data', () => {
    render( <PostAuthor post={post} /> )

    const titleElement = screen.getByText( 'Sample Post' )
    expect( titleElement ).toBeInTheDocument()

    const authorNameElement = screen.getByText( 'John Doe' )
    expect( authorNameElement ).toBeInTheDocument()

    const companyNameElement = screen.getByText( 'Sample Company' )
    expect( companyNameElement ).toBeInTheDocument()

    const authorImageElement = screen.getByAltText( 'John Doe' )
    expect( authorImageElement ).toBeInTheDocument()
    expect( authorImageElement ).toHaveAttribute(
        'src',
        'sample-image-url.jpg'
    )
} )
