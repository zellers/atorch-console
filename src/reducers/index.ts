import { combineReducers } from 'redux';

import atorch, { AtorchState } from './atorch';
import report, { ReportState } from './report';

export interface RootState {
  atorch: AtorchState;
  report: ReportState;
}

export const createRootReducer = () =>
  combineReducers({
    atorch,
    report,
  });
