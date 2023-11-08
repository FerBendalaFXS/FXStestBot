import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/posts-reducer'

// Persistance configuration using local storage
const persistConfig = {
    key: 'posts',
    storage,
}

// New reducer with persistance
const persistedPostsReducer = persistReducer( persistConfig, userReducer )

// Export persisted reducer
export { persistedPostsReducer }
