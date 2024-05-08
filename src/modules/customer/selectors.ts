import { AppState, CustomerState } from '../index';

export const selectCustomer = (state: AppState): CustomerState['data'] =>
    state.customer.data;

export const selectCustomerLoading = (state: AppState): CustomerState['dataLoading'] =>
    state.customer.dataLoading;

export const selectCustomerList = (state: AppState): CustomerState['list'] =>
    state.customer.list;

export const selectCustomerListTotal = (state: AppState): CustomerState['listTotal'] =>
    state.customer.listTotal;

export const selectCustomerListLoading = (state: AppState): CustomerState['listLoading'] =>
    state.customer.listLoading;

export const selectCustomerActionSuccess = (state: AppState): CustomerState['actionSuccess'] =>
    state.customer.actionSuccess;

export const selectCustomerCreateSuccess = (state: AppState): CustomerState['createSuccess'] =>
    state.customer.createSuccess;

export const selectCustomerDeleteSuccess = (state: AppState): CustomerState['deleteSuccess'] =>
    state.customer.deleteSuccess;

export const selectCustomerUpdateSuccess = (state: AppState): CustomerState['updateSuccess'] =>
    state.customer.updateSuccess;
