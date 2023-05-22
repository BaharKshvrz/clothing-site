import { createStore, applyMiddleware, compose, Middleware } from "redux";
import {rootReducer} from './root-reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import  storage from "redux-persist/lib/storage";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from 'redux-saga';

export type RootState = ReturnType<typeof rootReducer>;

// Persisting data
type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
};

const persistConfig: ExtendedPersistConfig = {
    key: 'root',   // at the top level(persist whole)
    storage,
    whitelist: ['cart'],
    //blacklist:[],  // blacklist: ['user'] - we want to dismiss the user in this example
}
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middlewares
const middleWares = [process.env.NODE_ENV !== 'production' && 
                    logger, sagaMiddleware]
                    .filter((middleware): middleware is Middleware => Boolean(middleware) );

// use react-devtools or not? 
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}

const composeEnhancer = (
    process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhaners = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhaners);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);