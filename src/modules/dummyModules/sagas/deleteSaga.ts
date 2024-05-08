import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyDeleteData, dummyDeleteError, DummyDeleteFetch } from '../actions';

export function* deleteSaga(action: DummyDeleteFetch) {
    try {
        yield call(API.delete(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}`, action.payload);

        yield put(dummyDeleteData());
        yield put(alertPush({ message: ['Dummy Successfully Deleted'], type: 'success' }));
    } catch (error) {
        yield put(dummyDeleteError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
