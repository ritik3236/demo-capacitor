import { takeEvery } from 'redux-saga/effects';

import { handleAlertSaga } from './handleAlertSaga';
import { ALERT_PUSH } from '../constants';

export function* rootHandleAlertSaga() {
    yield takeEvery(ALERT_PUSH, handleAlertSaga);
}
