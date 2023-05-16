import { all, put, call, takeLatest} from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {fetchCategoriesSuccess, fetchCategoriesFailed} from './category.action';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray));
       } catch (error) {
        yield put(fetchCategoriesFailed(error));
       }
} 

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    // listen to onFetchCategories inside of categoriesSaga
    yield all([call(onFetchCategories)]);
}
