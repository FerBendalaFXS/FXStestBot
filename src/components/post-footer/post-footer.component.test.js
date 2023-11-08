import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import PostFooter from './post-footer.component'

// Mock useSelector and useDispatch
jest.mock( 'react-redux', () => ( {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
} ) )

// Mock useMediaQuery
jest.mock( 'react-responsive', () => ( {
    useMediaQuery: jest.fn(),
} ) )

// Mock setIsLikedAction and setIsSavedAction
const setIsLikedAction = jest.fn()
const setIsSavedAction = jest.fn()

// Mock the postsData from Redux
const mockPostsData = {
    isLiked: [1, 2, 3],
    isSaved: [4, 5],
}

describe( 'Post footer testing', () => {

    beforeEach( () => {
        useDispatch.mockReturnValue( jest.fn() )
        useSelector.mockReturnValue( mockPostsData )
        setIsLikedAction.mockReturnValue( { type: 'SET_IS_LIKED', payload: [] } )
        setIsSavedAction.mockReturnValue( { type: 'SET_IS_SAVED', payload: [] } )
    } )

    test( 'Renders the Post component with correct data', () => {
        // Mock post data
        const post = { id: 1 }

        render( <PostFooter post={post} /> )

        const likeButton = screen.getByText( 'Like' )
        expect( likeButton ).toBeInTheDocument()


        const saveButton = screen.getByText( 'Save' )
        expect( saveButton ).toBeInTheDocument()

        const dropdown = screen.getByTestId( 'dropdown-component' )
        expect( dropdown ).toBeInTheDocument()

        fireEvent.click( likeButton )
        const likeButtonClicked = screen.getByText( 'd!' )
        expect( likeButtonClicked ).toBeInTheDocument()
    } )

    test( 'Renders the Post component with mobile view', () => {
        const post = { id: 1 }

        render( <PostFooter post={post} /> )

        const likeButton = screen.getByText( 'Like' )
        expect( likeButton ).toBeInTheDocument()

        const saveButton = screen.getByText( 'Save' )
        expect( saveButton ).toBeInTheDocument()
    } )
} )
