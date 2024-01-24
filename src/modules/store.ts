import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

export interface AppState {
}

export const rootReducer = () => combineReducers<AppState>({});

export function* rootSaga() {
    yield all([]);
}
