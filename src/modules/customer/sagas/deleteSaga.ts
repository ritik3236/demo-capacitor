import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerDeleteData, customerDeleteError, CustomerDeleteFetch } from '../actions';

export function* deleteSaga(action: CustomerDeleteFetch) {
    try {
        yield call(API.delete(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}`, action.payload);

        yield put(customerDeleteData());
        yield put(alertPush({ message: ['Customer Successfully Deleted'], type: 'success' }));
    } catch (error) {
        yield put(customerDeleteError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
