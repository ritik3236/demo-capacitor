import { takeLatest } from 'redux-saga/effects';

import {
    CUSTOMER_ACTION_FETCH,
    CUSTOMER_CREATE_FETCH,
    CUSTOMER_DELETE_FETCH,
    CUSTOMER_DETAIL_FETCH,
    CUSTOMER_LIST_FETCH,
    CUSTOMER_UPDATE_FETCH,
} from 'src/modules';

import { actionSaga } from './actionSaga';
import { createSaga } from './createSaga';
import { deleteSaga } from './deleteSaga';
import { detailSaga } from './detailSaga';
import { listSaga } from './listSaga';
import { updateSaga } from './updateSaga';

export function* rootCustomerSaga() {
    yield takeLatest(CUSTOMER_ACTION_FETCH, actionSaga);
    yield takeLatest(CUSTOMER_CREATE_FETCH, createSaga);
    yield takeLatest(CUSTOMER_DELETE_FETCH, deleteSaga);
    yield takeLatest(CUSTOMER_DETAIL_FETCH, detailSaga);
    yield takeLatest(CUSTOMER_LIST_FETCH, listSaga);
    yield takeLatest(CUSTOMER_UPDATE_FETCH, updateSaga);
}
