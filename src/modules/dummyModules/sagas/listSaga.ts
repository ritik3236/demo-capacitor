import { call, put } from 'redux-saga/effects';

import { API, RequestOptions } from 'src/api';
import { buildQueryString } from 'src/helpers';
import { alertPush } from 'src/modules';

import { dummyListData, dummyListError, DummyListFetch } from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* listSaga(action: DummyListFetch) {
    try {
        const params = buildQueryString(action.payload);
        const { data, headers } = yield call(API.get(requestOptions), `/admin/dummies?${params}`);

        yield put(dummyListData({ list: data, total: headers.total }));
    } catch (error) {
        yield put(dummyListError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
