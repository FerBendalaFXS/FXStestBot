import styles from './tab.module.scss'

const Tab = ( { text, active, onClick } ) => {
    // Set id fortabs depending on name
    const id = text.toLowerCase().replace( / /g, '' )

    // Set class of the tab depending on state
    const tabClasses = active
        ? [styles['tab'], styles['active']].join( ' ' )
        : styles['tab']

    return (
        <button
            id={id}
            className={tabClasses}
            onClick={() => onClick( text )}
            data-testid='tab-button'
        >
            <span className={styles['tab__text']}>
                {text}
            </span>
        </button>
    )
}

export default Tab