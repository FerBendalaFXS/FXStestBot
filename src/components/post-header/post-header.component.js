import { formatDateUtil } from '../../utils/format-date.util'
import styles from './post-header.module.scss'

const PostHeader = ( { post } ) => {
    const formattedPsotDate = formatDateUtil( post.publicationTime )

    return (
        <header className={styles['post-header']}>
            {/* Feed */}
            <ul className={styles['post-header__feed']}>
                <li className={styles['post-header__feed__container']}>
                    <span className={`${styles['symbols']} ${styles['post-header__feed__symbol']}`}>
                        quick_reference_all
                    </span>
                    <span className={styles['post-header__feed__text']}>
                        {post.feed}
                    </span>
                </li>
                <li className={styles['post-header__feed__container']}>
                    <span className={`${styles['symbols']} ${styles['post-header__feed__symbol']}`}>
                        play_arrow
                    </span>
                    <span className={styles['post-header__feed__text']}>
                        {post.subFeed}
                    </span>
                </li>
            </ul>

            {/* Time */}
            <ul className={styles['post-header__time']}>
                <li className={styles['time__item']}>
                    <span className={`${styles['symbols']} ${styles['time__item__symbol']}`}>
                        schedule
                    </span>
                </li>
                <li className={styles['time__item']}>
                    <span className={styles['time__item__text']}>
                        {formattedPsotDate}
                    </span>
                </li>
            </ul>
        </header>
    )
}

export default PostHeader