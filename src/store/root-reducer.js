import {combineReducers} from 'redux';
import { categoriesReducer } from './categories/category.reducer';


export const rootReducer = combineReducers({
    categories: categoriesReducer, 
});