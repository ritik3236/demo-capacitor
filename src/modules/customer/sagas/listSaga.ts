import { call, put } from 'redux-saga/effects';

import { API, RequestOptions } from 'src/api';
import { buildQueryString } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerListData, customerListError, CustomerListFetch } from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* listSaga(action: CustomerListFetch) {
    try {
        const params = buildQueryString(action.payload);
        const { data, headers } = yield call(API.get(requestOptions), `/customers?${params}`);

        yield put(customerListData({ list: data.data, total: headers.total || 0 }));
    } catch (error) {
        yield put(customerListError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
