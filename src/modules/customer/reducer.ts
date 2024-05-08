import { CustomerActions } from './actions';
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

export interface CustomerState {
    data: CustomerInterface;
    dataLoading: boolean;

    list: CustomerInterface[];
    listTotal: number;
    listLoading: boolean;

    actionLoading: boolean;
    actionSuccess: boolean;

    createLoading: boolean;
    createSuccess: boolean;

    deleteLoading: boolean;
    deleteSuccess: boolean;

    updateLoading: boolean;
    updateSuccess: boolean;
}

const initialState: CustomerState = {
    data: undefined,
    dataLoading: false,

    list: [],
    listTotal: 0,
    listLoading: false,

    actionLoading: false,
    actionSuccess: false,

    createLoading: false,
    createSuccess: false,

    deleteLoading: false,
    deleteSuccess: false,

    updateLoading: false,
    updateSuccess: false,
};

export const customerReducer = (state = initialState, actions: CustomerActions) => {
    switch (actions.type) {
        case CUSTOMER_ACTION_FETCH:
            return {
                ...state,
                actionLoading: true,
                actionSuccess: false,
            };
        case CUSTOMER_ACTION_DATA:
            return {
                ...state,
                actionLoading: false,
                actionSuccess: true,
                data: actions.payload.data,
            };
        case CUSTOMER_ACTION_ERROR:
        case CUSTOMER_ACTION_RESET:
            return {
                ...state,
                actionLoading: false,
                actionSuccess: false,
            };
        case CUSTOMER_CREATE_FETCH:
            return {
                ...state,
                createLoading: true,
                createSuccess: false,
            };
        case CUSTOMER_CREATE_DATA:
            return {
                ...state,
                createLoading: false,
                createSuccess: true,
                data: actions.payload.data,
            };
        case CUSTOMER_CREATE_ERROR:
        case CUSTOMER_CREATE_RESET:
            return {
                ...state,
                createLoading: false,
                createSuccess: false,
            };
        case CUSTOMER_DELETE_FETCH:
            return {
                ...state,
                deleteLoading: true,
                deleteSuccess: false,
            };
        case CUSTOMER_DELETE_DATA:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
                data: undefined,
            };
        case CUSTOMER_DELETE_ERROR:
        case CUSTOMER_DELETE_RESET:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: false,
            };
        case CUSTOMER_DETAIL_FETCH:
            return {
                ...state,
                dataLoading: true,
            };
        case CUSTOMER_DETAIL_DATA:
            return {
                ...state,
                dataLoading: false,
                data: actions.payload.data,
            };
        case CUSTOMER_DETAIL_ERROR:
        case CUSTOMER_DETAIL_RESET:
            return {
                ...state,
                dataLoading: false,
                data: undefined,
            };
        case CUSTOMER_LIST_FETCH:
            return {
                ...state,
                listLoading: true,
            };
        case CUSTOMER_LIST_DATA:
            return {
                ...state,
                listLoading: false,
                list: actions.payload.list,
                listTotal: actions.payload.total,
            };
        case CUSTOMER_LIST_ERROR:
        case CUSTOMER_LIST_RESET:
            return {
                ...state,
                listLoading: false,
                list: [],
                listTotal: 0,
            };
        case CUSTOMER_UPDATE_FETCH:
            return {
                ...state,
                updateLoading: true,
                updateSuccess: false,
            };
        case CUSTOMER_UPDATE_DATA:
            return {
                ...state,
                updateLoading: false,
                updateSuccess: true,
                data: actions.payload.data,
            };
        case CUSTOMER_UPDATE_ERROR:
        case CUSTOMER_UPDATE_RESET:
            return {
                ...state,
                updateLoading: false,
                updateSuccess: false,
            };
        default:
            return {
                ...state,
            };
    }
};
