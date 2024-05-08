import {
    CUSTOMER_ACTION_DATA,
    CUSTOMER_ACTION_ERROR,
    CUSTOMER_ACTION_FETCH,
    CUSTOMER_ACTION_RESET,
    CUSTOMER_CREATE_DATA,
    CUSTOMER_CREATE_ERROR,
    CUSTOMER_CREATE_FETCH,
    CUSTOMER_CREATE_RESET,
    CUSTOMER_DELETE_DATA,
    CUSTOMER_DELETE_ERROR,
    CUSTOMER_DELETE_FETCH,
    CUSTOMER_DELETE_RESET,
    CUSTOMER_DETAIL_DATA,
    CUSTOMER_DETAIL_ERROR,
    CUSTOMER_DETAIL_FETCH,
    CUSTOMER_DETAIL_RESET,
    CUSTOMER_LIST_DATA,
    CUSTOMER_LIST_ERROR,
    CUSTOMER_LIST_FETCH,
    CUSTOMER_LIST_RESET,
    CUSTOMER_UPDATE_DATA,
    CUSTOMER_UPDATE_ERROR,
    CUSTOMER_UPDATE_FETCH,
    CUSTOMER_UPDATE_RESET,
} from './constants';
import { CustomerInterface } from './types';

export interface CustomerActionFetch {
    type: typeof CUSTOMER_ACTION_FETCH;
    payload: {
        id: number;
        action: string;
        comment: string;
    };
}

export interface CustomerActionData {
    type: typeof CUSTOMER_ACTION_DATA;
    payload: {
        data: CustomerInterface;
    };
}

export interface CustomerActionError {
    type: typeof CUSTOMER_ACTION_ERROR;
}

export interface CustomerActionReset {
    type: typeof CUSTOMER_ACTION_RESET;
}

export interface CustomerCreateFetch {
    type: typeof CUSTOMER_CREATE_FETCH;
    payload: {
        uid: string;
    };
}

export interface CustomerCreateData {
    type: typeof CUSTOMER_CREATE_DATA;
    payload: {
        data: CustomerInterface;
    };
}

export interface CustomerCreateError {
    type: typeof CUSTOMER_CREATE_ERROR;
}

export interface CustomerCreateReset {
    type: typeof CUSTOMER_CREATE_RESET;
}

export interface CustomerDeleteFetch {
    type: typeof CUSTOMER_DELETE_FETCH;
    payload: {
        id: number;
        uid: string;
    };
}

export interface CustomerDeleteData {
    type: typeof CUSTOMER_DELETE_DATA;
}

export interface CustomerDeleteError {
    type: typeof CUSTOMER_DELETE_ERROR;
}

export interface CustomerDeleteReset {
    type: typeof CUSTOMER_DELETE_RESET;
}

export interface CustomerDetailFetch {
    type: typeof CUSTOMER_DETAIL_FETCH;
    payload: {
        id: number;
    };
}

export interface CustomerDetailData {
    type: typeof CUSTOMER_DETAIL_DATA;
    payload: {
        data: CustomerInterface;
    };
}

export interface CustomerDetailError {
    type: typeof CUSTOMER_DETAIL_ERROR;
}

export interface CustomerDetailReset {
    type: typeof CUSTOMER_DETAIL_RESET;
}

export interface CustomerListFetch {
    type: typeof CUSTOMER_LIST_FETCH;
    payload?: {};
}

export interface CustomerListData {
    type: typeof CUSTOMER_LIST_DATA;
    payload: {
        list: CustomerInterface[];
        total: number;
    };
}

export interface CustomerListError {
    type: typeof CUSTOMER_LIST_ERROR;
}

export interface CustomerListReset {
    type: typeof CUSTOMER_LIST_RESET;
}

export interface CustomerUpdateFetch {
    type: typeof CUSTOMER_UPDATE_FETCH;
    payload: {
        id: number;
    };
}

export interface CustomerUpdateData {
    type: typeof CUSTOMER_UPDATE_DATA;
    payload: {
        data: CustomerInterface;
    };
}

export interface CustomerUpdateError {
    type: typeof CUSTOMER_UPDATE_ERROR;
}

export interface CustomerUpdateReset {
    type: typeof CUSTOMER_UPDATE_RESET;
}

export type CustomerActions = CustomerActionData
    | CustomerActionError
    | CustomerActionFetch
    | CustomerActionReset
    | CustomerCreateData
    | CustomerCreateError
    | CustomerCreateFetch
    | CustomerCreateReset
    | CustomerDeleteData
    | CustomerDeleteError
    | CustomerDeleteFetch
    | CustomerDeleteReset
    | CustomerDetailData
    | CustomerDetailError
    | CustomerDetailFetch
    | CustomerDetailReset
    | CustomerListData
    | CustomerListError
    | CustomerListFetch
    | CustomerListReset
    | CustomerUpdateData
    | CustomerUpdateError
    | CustomerUpdateFetch
    | CustomerUpdateReset;

export const customerActionFetch = (payload: CustomerActionFetch['payload']): CustomerActionFetch => ({
    type: CUSTOMER_ACTION_FETCH,
    payload,
});

export const customerActionData = (payload: CustomerActionData['payload']): CustomerActionData => ({
    type: CUSTOMER_ACTION_DATA,
    payload,
});

export const customerActionError = (): CustomerActionError => ({
    type: CUSTOMER_ACTION_ERROR,
});

export const customerActionReset = (): CustomerActionReset => ({
    type: CUSTOMER_ACTION_RESET,
});

export const customerCreateFetch = (payload: CustomerCreateFetch['payload']): CustomerCreateFetch => ({
    type: CUSTOMER_CREATE_FETCH,
    payload,
});

export const customerCreateData = (payload: CustomerCreateData['payload']): CustomerCreateData => ({
    type: CUSTOMER_CREATE_DATA,
    payload,
});

export const customerCreateError = (): CustomerCreateError => ({
    type: CUSTOMER_CREATE_ERROR,
});

export const customerCreateReset = (): CustomerCreateReset => ({
    type: CUSTOMER_CREATE_RESET,
});

export const customerDeleteFetch = (payload: CustomerDeleteFetch['payload']): CustomerDeleteFetch => ({
    type: CUSTOMER_DELETE_FETCH,
    payload,
});

export const customerDeleteData = (): CustomerDeleteData => ({
    type: CUSTOMER_DELETE_DATA,
});

export const customerDeleteError = (): CustomerDeleteError => ({
    type: CUSTOMER_DELETE_ERROR,
});

export const customerDeleteReset = (): CustomerDeleteReset => ({
    type: CUSTOMER_DELETE_RESET,
});

export const customerDetailFetch = (payload: CustomerDetailFetch['payload']): CustomerDetailFetch => ({
    type: CUSTOMER_DETAIL_FETCH,
    payload,
});

export const customerDetailData = (payload: CustomerDetailData['payload']): CustomerDetailData => ({
    type: CUSTOMER_DETAIL_DATA,
    payload,
});

export const customerDetailError = (): CustomerDetailError => ({
    type: CUSTOMER_DETAIL_ERROR,
});

export const customerDetailReset = (): CustomerDetailReset => ({
    type: CUSTOMER_DETAIL_RESET,
});

export const customerListFetch = (payload: CustomerListFetch['payload']): CustomerListFetch => ({
    type: CUSTOMER_LIST_FETCH,
    payload,
});

export const customerListData = (payload: CustomerListData['payload']): CustomerListData => ({
    type: CUSTOMER_LIST_DATA,
    payload,
});

export const customerListError = (): CustomerListError => ({
    type: CUSTOMER_LIST_ERROR,
});

export const customerListReset = (): CustomerListReset => ({
    type: CUSTOMER_LIST_RESET,
});

export const customerUpdateFetch = (payload: CustomerUpdateFetch['payload']): CustomerUpdateFetch => ({
    type: CUSTOMER_UPDATE_FETCH,
    payload,
});

export const customerUpdateData = (payload: CustomerUpdateData['payload']): CustomerUpdateData => ({
    type: CUSTOMER_UPDATE_DATA,
    payload,
});

export const customerUpdateError = (): CustomerUpdateError => ({
    type: CUSTOMER_UPDATE_ERROR,
});

export const customerUpdateReset = (): CustomerUpdateReset => ({
    type: CUSTOMER_UPDATE_RESET,
});
