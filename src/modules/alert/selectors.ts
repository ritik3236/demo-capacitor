import { AppState } from 'src/modules';

import { AlertState } from './reducer';

export const selectAlertState = (state: AppState): AlertState => state.alerts;
