import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerActionData, customerActionError, CustomerActionFetch } from '../actions';

export function* actionSaga(action: CustomerActionFetch) {
    try {
        const { data } = yield call(API.patch(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}/action`, action.payload);

        yield put(customerActionData({ data }));
        yield put(alertPush({ message: [`Customer ${action.payload.action}!`], type: 'success' }));
    } catch (error) {
        yield put(customerActionError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
