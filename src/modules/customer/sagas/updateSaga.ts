import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerUpdateData, customerUpdateError, CustomerUpdateFetch } from '../actions';

export function* updateSaga(action: CustomerUpdateFetch) {
    try {
        const { data } = yield call(API.put(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}`, action.payload);

        yield put(customerUpdateData({ data }));
        yield put(alertPush({ message: ['Customer Successfully Updated'], type: 'success' }));
    } catch (error) {
        yield put(customerUpdateError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
