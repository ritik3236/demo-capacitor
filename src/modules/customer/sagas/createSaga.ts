import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerCreateData, customerCreateError, CustomerCreateFetch } from '../actions';

export function* createSaga(action: CustomerCreateFetch) {
    try {
        const { data } = yield call(API.post(peatioRequestOptions(getCsrfToken())), '/admin/dummies', action.payload);

        yield put(customerCreateData({ data }));
        yield put(alertPush({ message: ['Customer Successfully Created'], type: 'success' }));
    } catch (error) {
        yield put(customerCreateError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
