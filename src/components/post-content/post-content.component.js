import parse from 'html-react-parser'
import styles from './post-content.module.scss'

const Post = ( { post } ) => (
    <section className={styles['post-content']}>
        <div className={styles['post-content__description']}>
            {parse( post.content )}
        </div>
        {post.imageUrl &&
            <img
                src={post.imageUrl}
                alt={post.title}
                className={styles['post-content__image']}
            />
        }
    </section>
)


export default Post