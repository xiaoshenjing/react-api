import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['common']
}

const reducerModules = require.context('./reducer', true, /\.ts$/)

const asyncReducer: any = {}
reducerModules.keys().map((item: any) => {
    const value = reducerModules(item)
    asyncReducer[item.match(/\/(\S*)\./)[1]] = value.default
    return false
})

const composeEnhancers = composeWithDevTools({
    features: {
        pause: true, // start/pause recording of dispatched actions
        lock: false, // lock/unlock dispatching actions and side effects    
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list 
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate tests for the selected actions
    },
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const reducer = combineReducers(asyncReducer)

const persistedReducer = persistReducer(rootPersistConfig, reducer)

const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export const persistor = persistStore(store)

export default store