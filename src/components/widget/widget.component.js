import FakeItem from '../fake-item/fake-item.component'

import variables from 'variablesJS'
import styles from './widget.module.scss'

const Widget = () => (
    <aside
        className={styles['widget']}
        data-testid='widget-component'
    >
        {/* Section (positive color in scss) */}
        <div className={styles['widget__positive']}>
            <FakeItem
                type='line'
                width='100%'
                color={variables['white']}
            />
            <FakeItem
                type='line'
                width='60%'
                color={variables['white']}
            />
        </div>

        {/* Section (negative color in scss) */}
        <div className={styles['widget__negative']}>
            <FakeItem
                type='all-reverse'
                width={109}
                color={variables['blue-200']}
            />
        </div>
    </aside>
)

export default Widget