import { call, put } from 'redux-saga/effects';

import { API, RequestOptions } from 'src/api';
import { buildQueryString } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyDetailData, dummyDetailError, DummyDetailFetch } from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* detailSaga(action: DummyDetailFetch) {
    try {
        const params = buildQueryString(action.payload);
        const { data } = yield call(API.get(requestOptions), `/admin/dummies?${params}`);

        yield put(dummyDetailData({ data: data[0] }));
    } catch (error) {
        yield put(dummyDetailError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
