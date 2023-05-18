import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import { logger } from 'redux-logger';

// import { createStore } from "redux";
// import { applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from "redux-persist";
// import  storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";


// // Persisting data
// const persistConfig = {
//     key: 'root',   // at the top level(persist whole)
//     storage,
//     whitelist: ['cart'],
//     //blacklist:[],  // blacklist: ['user'] - we want to dismiss the user in this example
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middlewares
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean );

// // use react-devtools or not?
// const composeEnhancer = (
//     process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const composedEnhaners = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhaners);
// export const persistor = persistStore(store);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
       getDefaultMiddleware().concat(middleWares)
})