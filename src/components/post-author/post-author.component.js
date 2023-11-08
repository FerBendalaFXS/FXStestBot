import styles from './post-author.module.scss'

const Post = ( { post } ) => (
    <section className={styles['post-author']}>
        <img
            src={post.author.imageUrl}
            alt={post.author.name}
            className={styles['post-author__image']}
        />
        <ul className={styles['post-author__list']}>
            <li className={styles['post-author__list__item']}>{post.author.name}</li>
            <li className={styles['post-author__list__item']}>{post.author.companyName}</li>
        </ul>
        <h2 className={styles['post-author__title']}>{post.title}</h2>
    </section>
)

export default Post