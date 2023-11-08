import { createSlice, createAction } from '@reduxjs/toolkit'

// Set initial state of the redux variables
const initialState = {
    posts: [],
    isLiked: [],
    isSaved: [],
}

// Define the slice of Redux state and its actions
const postsSlice = createSlice( {
    name: 'postsData',
    initialState: initialState,
    reducers: {
        setPosts ( state, action ) {
            state.posts = action.payload
        },
        setIsLiked ( state, action ) {
            state.isLiked = action.payload
        },
        setIsSaved ( state, action ) {
            state.isSaved = action.payload
        },
        resetPosts ( state ) {
            state.posts = []
        }
    },
} )

// Export defined actions
export const setIsLikedAction = createAction( 'postsData/setIsLiked' )
export const setIsSavedAction = createAction( 'postsData/setIsSaved' )
export const {
    setPosts,
    resetPosts
} = postsSlice.actions
export default postsSlice.reducer
