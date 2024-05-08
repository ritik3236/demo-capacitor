import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyUpdateData, dummyUpdateError, DummyUpdateFetch } from '../actions';

export function* updateSaga(action: DummyUpdateFetch) {
    try {
        const { data } = yield call(API.put(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}`, action.payload);

        yield put(dummyUpdateData({ data }));
        yield put(alertPush({ message: ['Dummy Successfully Updated'], type: 'success' }));
    } catch (error) {
        yield put(dummyUpdateError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
