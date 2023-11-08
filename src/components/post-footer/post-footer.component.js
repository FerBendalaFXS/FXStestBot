import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLikedAction, setIsSavedAction } from '../../redux/reducers/posts-reducer'

import Button from '../button/button.component'
import Dropdown from '../dropdown/dropdown.component'

import styles from './post-footer.module.scss'

const Post = ( { post } ) => {
    const postsData = useSelector( ( state ) => state.postsData )
    const isMobile = useMediaQuery( { maxWidth: 991 } )
    const dispatch = useDispatch()

    // Form list options array
    const items = [
        'I\'m not interested in this author',
        'I\'m not interested in this topic',
        'I’ve seen too many posts on this topic',
        'The information is incorrect',
        'I’ve seen this post before',
        'Other reasons',
    ]

    // Check and save if post is liked or saved in redux
    const togglePostState = ( postId, stateKey ) => {
        const updatedState = postsData[stateKey].includes( postId )
            ? postsData[stateKey].filter( ( id ) => id !== postId )
            : [...postsData[stateKey], postId]

        // Usa las acciones personalizadas en lugar de setIsLiked y setIsSaved
        dispatch( stateKey === 'isLiked' ? setIsLikedAction( updatedState ) : setIsSavedAction( updatedState ) )
    }

    // Check what post is liked or saved and show it
    const isPostLiked = postsData.isLiked.includes( post.id )
    const isPostSaved = postsData.isSaved.includes( post.id )

    return (
        <footer className={styles['post-footer']}>
            <Button
                symbol="favorite"
                text="Like"
                onClick={() => togglePostState( post.id, 'isLiked' )}
                active={isPostLiked}
            />
            <Button
                symbol="bookmark"
                text="Save"
                onClick={() => togglePostState( post.id, 'isSaved' )}
                active={isPostSaved}
            />
            <Dropdown
                dropdownItems={items}
                dropdownId={post.id}
                title='Tell us why:'
                symbol='more_horiz'
                position={isMobile ? 'top-left' : 'top'}
                form
            />
        </footer>
    )
}

export default Post
