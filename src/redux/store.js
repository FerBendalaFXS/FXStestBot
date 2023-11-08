import { configureStore } from '@reduxjs/toolkit'
import { persistStore, REHYDRATE, PERSIST } from 'redux-persist'
import { persistedPostsReducer } from './persist'
import globalReducer from './reducers/global-reducer'

const rootReducer = {
    global: globalReducer,
    postsData: persistedPostsReducer
}

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [PERSIST, REHYDRATE],
            },
        } ),
} )

const persistor = persistStore( store )

export { store, persistor }
