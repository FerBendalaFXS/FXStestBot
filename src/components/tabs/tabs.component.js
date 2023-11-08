import Tab from '../tab/tab.component'
import Dropdown from '../dropdown/dropdown.component'

import styles from './tabs.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../redux/reducers/global-reducer'

const Tabs = () => {
    const activeTab = useSelector( state => state.global.activeTab )
    const dispatch = useDispatch()

    // Check if tab name its equal to active tab
    const applyActiveToTab = ( tabName ) => activeTab === tabName

    // Filter
    const dropdownItems = [
        { text: 'Hide', symbol: 'visibility_off' },
        { text: 'Improve my feed', symbol: 'tune' },
    ]

    // Dispatch redux and set the active tag
    const handleTabClick = ( text ) => {
        dispatch( setActiveTab( text ) )
    }

    return (
        <div className={styles['tabs']}>
            {/* Tabs */}
            <Tab
                text='Latest'
                active={applyActiveToTab( 'Latest' )}
                onClick={() => handleTabClick( 'Latest' )}
            />
            <Tab
                text='Popular'
                active={applyActiveToTab( 'Popular' )}
                onClick={() => handleTabClick( 'Popular' )}
            />

            {/* Filter */}
            <Dropdown
                dropdownItems={dropdownItems}
                position='bottom-left'
                dropdownId='header'
            />
        </div>
    )
}

export default Tabs