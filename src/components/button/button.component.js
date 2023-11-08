import styles from './button.module.scss'

const Button = ( { symbol, text, onClick, active } ) => {
    // Set button classes if active
    const buttonClass = active
        ? [styles['button'], styles['active']].join( ' ' )
        : styles['button']

    return (
        <button
            onClick={onClick}
            className={buttonClass}
            data-active={active}
        >
            {/* If has symbol */}
            {symbol && (
                <span className={`${styles['symbols']} ${styles['button__symbol']}`}>
                    {symbol}
                </span>
            )}

            {/* If has text */}
            {text && (
                <span className={styles['button__text']}>
                    {text}<span>{active && 'd!'}</span>
                </span>
            )}
        </button>
    )
}

export default Button