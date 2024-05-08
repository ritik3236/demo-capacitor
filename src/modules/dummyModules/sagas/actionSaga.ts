import { call, put } from 'redux-saga/effects';

import { API } from 'src/api';
import { getCsrfToken, peatioRequestOptions } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyActionData, dummyActionError, DummyActionFetch } from '../actions';

export function* actionSaga(action: DummyActionFetch) {
    try {
        const { data } = yield call(API.patch(peatioRequestOptions(getCsrfToken())), `/admin/dummies/${action.payload.id}/action`, action.payload);

        yield put(dummyActionData({ data }));
        yield put(alertPush({ message: [`Dummy ${action.payload.action}!`], type: 'success' }));
    } catch (error) {
        yield put(dummyActionError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
