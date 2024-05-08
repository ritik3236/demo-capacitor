import { AppState, DummiesState } from '../index';

export const selectDummy = (state: AppState): DummiesState['data'] =>
    state.dummies.data;

export const selectDummyLoading = (state: AppState): DummiesState['dataLoading'] =>
    state.dummies.dataLoading;

export const selectDummyList = (state: AppState): DummiesState['list'] =>
    state.dummies.list;

export const selectDummyListTotal = (state: AppState): DummiesState['listTotal'] =>
    state.dummies.listTotal;

export const selectDummyListLoading = (state: AppState): DummiesState['listLoading'] =>
    state.dummies.listLoading;

export const selectDummyActionSuccess = (state: AppState): DummiesState['actionSuccess'] =>
    state.dummies.actionSuccess;

export const selectDummyCreateSuccess = (state: AppState): DummiesState['createSuccess'] =>
    state.dummies.createSuccess;

export const selectDummyDeleteSuccess = (state: AppState): DummiesState['deleteSuccess'] =>
    state.dummies.deleteSuccess;

export const selectDummyUpdateSuccess = (state: AppState): DummiesState['updateSuccess'] =>
    state.dummies.updateSuccess;
