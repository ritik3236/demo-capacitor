import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

import { alertReducer, AlertState, rootHandleAlertSaga } from 'src/modules/alert';
import { customerReducer, CustomerState, rootCustomerSaga } from 'src/modules/customer';
import { dummiesReducer, DummiesState, rootDummiesSaga } from 'src/modules/dummyModules';

export interface AppState {
    alerts: AlertState;
    dummies: DummiesState;
    customer: CustomerState;
}

export const rootReducer = () => combineReducers<AppState>({
    alerts: alertReducer,
    dummies: dummiesReducer,
    customer: customerReducer,
});

export function* rootSaga() {
    yield all([
        call(rootHandleAlertSaga),
        call(rootCustomerSaga),
        call(rootDummiesSaga),
    ]);
}
