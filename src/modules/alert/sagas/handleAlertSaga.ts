import { call, delay, put } from 'redux-saga/effects';

import { msAlertDisplayTime } from 'src/api';

import { alertData, alertDelete, AlertPush } from '../actions';

export function* handleAlertSaga(action: AlertPush) {
    yield call(callAlertData, action);
}

function* callAlertData(action: AlertPush) {
    yield put(alertData(action.payload));
    yield delay(msAlertDisplayTime());
    yield put(alertDelete());
}
