import { useSelector } from 'react-redux'
import useFetchData from '../../hooks/use-fetch-data.hook'

import Post from '../../components/post/post.component'

import loadingAnimation from '../../assets/images/icon-loader.svg'
import styles from './posts.module.scss'

const Posts = () => {
    const activeTab = useSelector( state => state.global.activeTab )
    const { isLoading, posts } = useFetchData()

    // Filter posts depending on active tab
    const filteredPosts = posts.filter( ( post ) =>
        activeTab === 'Popular'
            ? post.isPopular
            : !post.isPopular
    )

    // Reverse list to show like exercise demand
    const reversedPosts = filteredPosts.reverse()

    // Return loading message if is loading data
    if ( isLoading ) {
        return <img src={loadingAnimation} alt='loading' className={styles['posts__loading']} />
    }

    return (
        <div className={styles['posts']}>
            {reversedPosts.map( post =>
                <Post
                    key={post.id}
                    post={post}
                />
            )}
        </div>
    )
}

export default Posts