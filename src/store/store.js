import { createStore } from "redux";
import {rootReducer} from './root-reducer';
import {applyMiddleware, compose} from 'redux';
import { logger } from 'redux-logger';

const middleWares = [logger];

const composedEnhaners = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhaners);