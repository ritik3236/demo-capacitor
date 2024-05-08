import { takeLatest } from 'redux-saga/effects';

import {
    DUMMY_ACTION_FETCH,
    DUMMY_CREATE_FETCH,
    DUMMY_DELETE_FETCH,
    DUMMY_DETAIL_FETCH,
    DUMMY_LIST_FETCH,
    DUMMY_UPDATE_FETCH,
} from 'src/modules';

import { actionSaga } from './actionSaga';
import { createSaga } from './createSaga';
import { deleteSaga } from './deleteSaga';
import { detailSaga } from './detailSaga';
import { listSaga } from './listSaga';
import { updateSaga } from './updateSaga';

export function* rootDummiesSaga() {
    yield takeLatest(DUMMY_ACTION_FETCH, actionSaga);
    yield takeLatest(DUMMY_CREATE_FETCH, createSaga);
    yield takeLatest(DUMMY_DELETE_FETCH, deleteSaga);
    yield takeLatest(DUMMY_DETAIL_FETCH, detailSaga);
    yield takeLatest(DUMMY_LIST_FETCH, listSaga);
    yield takeLatest(DUMMY_UPDATE_FETCH, updateSaga);
}
