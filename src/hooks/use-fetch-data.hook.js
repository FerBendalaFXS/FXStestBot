import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../redux/reducers/posts-reducer'
import { setIsLoading } from '../redux/reducers/global-reducer'
import { getAllData } from '../services/posts.service'

// Custom hook para fetchData
const useFetchData = () => {
    // Get variables from redux
    const isLoading = useSelector( ( state ) => state.global.isLoading )
    const posts = useSelector( ( state ) => state.postsData.posts )

    // Set dispatcher from redux
    const dispatch = useDispatch()

    // Call api and set variables if redux don't have content
    const fetchData = async () => {
        if ( !posts.length ) {
            try {
                const result = await getAllData()
                dispatch( setPosts( result ) )
                dispatch( setIsLoading( false ) )
            } catch ( error ) {
                console.error( 'Error obtaining data:', error )
                dispatch( setIsLoading( false ) )
            }
        } else {
            dispatch( setIsLoading( false ) )
        }
    }

    useEffect( () => {
        fetchData()
    }, [] )

    return { isLoading, posts }
}

export default useFetchData
