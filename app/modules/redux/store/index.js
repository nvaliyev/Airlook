import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReduser from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['UserName','UserPassword']
  }


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];  
const persistReduce = persistReducer(persistConfig, rootReduser);
const store = createStore(persistReduce,applyMiddleware(...middleware));
const persistor = persistStore(store);

export {store, persistor} ;