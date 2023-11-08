import { createSlice } from '@reduxjs/toolkit'

// Set initial state of the redux variables
const initialState = {
    isLoading: true,
    dropdowns: {},
    activeTab: 'Latest',
    containerRef: null,
}

// Define the slice of Redux state and its actions
const globalSlice = createSlice( {
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsLoading ( state, action ) {
            state.isLoading = action.payload
        },
        setIsDropdownVisible ( state, action ) {
            const { dropdownId, isVisible } = action.payload
            state.dropdowns[dropdownId] = isVisible
        },
        setActiveTab ( state, action ) {
            state.activeTab = action.payload
        },
        setContainerRef ( state, action ) {
            state.containerRef = action.payload
        },
    },
} )

// Export defined actions
export const {
    setIsLoading,
    setIsDropdownVisible,
    setActiveTab,
    setContainerRef
} = globalSlice.actions
export default globalSlice.reducer
