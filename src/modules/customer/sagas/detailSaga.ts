import { call, put } from 'redux-saga/effects';

import { API, RequestOptions } from 'src/api';
import { buildQueryString } from 'src/helpers';
import { alertPush } from 'src/modules';

import { customerDetailData, customerDetailError, CustomerDetailFetch } from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* detailSaga(action: CustomerDetailFetch) {
    try {
        const params = buildQueryString(action.payload);
        const { data } = yield call(API.get(requestOptions), `/admin/dummies?${params}`);

        yield put(customerDetailData({ data: data[0] }));
    } catch (error) {
        yield put(customerDetailError());
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
