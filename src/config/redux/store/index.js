import {
    createStore,applyMiddleware
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import reducer from '../reducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)

export { store, persistor }