import PostHeader from '../post-header/post-header.component'
import PostAuthor from '../post-author/post-author.component'
import PostContent from '../post-content/post-content.component'
import PostFooter from '../post-footer/post-footer.component'

import styles from './post.module.scss'

const Post = ( { post } ) => (
    <article
        className={styles['post']}
        data-testid='post-component'
    >
        <PostHeader post={post} />
        <PostAuthor post={post} />
        <PostContent post={post} />
        <PostFooter post={post} />
    </article>
)

export default Post