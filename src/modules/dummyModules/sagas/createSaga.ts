import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyCreateData, dummyCreateError, DummyCreateFetch } from '../actions';

export function* createSaga(action: DummyCreateFetch) {
    try {
        const { data } = yield call(API.post(peatioRequestOptions(getCsrfToken())), '/admin/dummies', action.payload);

        yield put(dummyCreateData({ data }));
        yield put(alertPush({ message: ['Dummy Successfully Created'], type: 'success' }));
    } catch (error) {
        yield put(dummyCreateError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
