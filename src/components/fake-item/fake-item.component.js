import styles from './fake-item.module.scss'

const FakeItem = ( { color, type = 'all', width } ) => {
    // Define the order of classes based on the type
    const classOrder = {
        all: ['circle', 'line'],
        'all-reverse': ['line', 'circle'],
        line: ['line'],
        circle: ['circle'],
    }

    // Set classnames based on the type
    const classNames = classOrder[type] || []

    // Set width for lines (circles have always the same size)
    const setWidth = ( item ) => {
        return ( type === 'all' && item === 'line' ) || ( item === 'line' && width )
    }

    return (
        <div className={styles['fake-item']}>
            {classNames.map( ( item, index ) => (
                <span
                    key={index}
                    className={styles[`fake-item__${item}`]}
                    style={{
                        backgroundColor: color,
                        width: setWidth( item ) ? width : 'auto',
                    }}
                    data-testid={`fake-${item}`}
                ></span>
            ) )}
        </div>
    )
}

export default FakeItem
