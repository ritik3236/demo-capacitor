import { DummiesActions } from './actions';
import {
    DUMMY_ACTION_DATA,
    DUMMY_ACTION_ERROR,
    DUMMY_ACTION_FETCH,
    DUMMY_ACTION_RESET,
    DUMMY_CREATE_DATA,
    DUMMY_CREATE_ERROR,
    DUMMY_CREATE_FETCH,
    DUMMY_CREATE_RESET,
    DUMMY_DELETE_DATA,
    DUMMY_DELETE_ERROR,
    DUMMY_DELETE_FETCH,
    DUMMY_DELETE_RESET,
    DUMMY_DETAIL_DATA,
    DUMMY_DETAIL_ERROR,
    DUMMY_DETAIL_FETCH,
    DUMMY_DETAIL_RESET,
    DUMMY_LIST_DATA,
    DUMMY_LIST_ERROR,
    DUMMY_LIST_FETCH,
    DUMMY_LIST_RESET,
    DUMMY_UPDATE_DATA,
    DUMMY_UPDATE_ERROR,
    DUMMY_UPDATE_FETCH,
    DUMMY_UPDATE_RESET,
} from './constants';
import { DummyInterface } from './types';

export interface DummiesState {
    data: DummyInterface;
    dataLoading: boolean;

    list: DummyInterface[];
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

const initialState: DummiesState = {
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

export const dummiesReducer = (state = initialState, actions: DummiesActions) => {
    switch (actions.type) {
        case DUMMY_ACTION_FETCH:
            return {
                ...state,
                actionLoading: true,
                actionSuccess: false,
            };
        case DUMMY_ACTION_DATA:
            return {
                ...state,
                actionLoading: false,
                actionSuccess: true,
                data: actions.payload.data,
            };
        case DUMMY_ACTION_ERROR:
        case DUMMY_ACTION_RESET:
            return {
                ...state,
                actionLoading: false,
                actionSuccess: false,
            };
        case DUMMY_CREATE_FETCH:
            return {
                ...state,
                createLoading: true,
                createSuccess: false,
            };
        case DUMMY_CREATE_DATA:
            return {
                ...state,
                createLoading: false,
                createSuccess: true,
                data: actions.payload.data,
            };
        case DUMMY_CREATE_ERROR:
        case DUMMY_CREATE_RESET:
            return {
                ...state,
                createLoading: false,
                createSuccess: false,
            };
        case DUMMY_DELETE_FETCH:
            return {
                ...state,
                deleteLoading: true,
                deleteSuccess: false,
            };
        case DUMMY_DELETE_DATA:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
                data: undefined,
            };
        case DUMMY_DELETE_ERROR:
        case DUMMY_DELETE_RESET:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: false,
            };
        case DUMMY_DETAIL_FETCH:
            return {
                ...state,
                dataLoading: true,
            };
        case DUMMY_DETAIL_DATA:
            return {
                ...state,
                dataLoading: false,
                data: actions.payload.data,
            };
        case DUMMY_DETAIL_ERROR:
        case DUMMY_DETAIL_RESET:
            return {
                ...state,
                dataLoading: false,
                data: undefined,
            };
        case DUMMY_LIST_FETCH:
            return {
                ...state,
                listLoading: true,
            };
        case DUMMY_LIST_DATA:
            return {
                ...state,
                listLoading: false,
                list: actions.payload.list,
                listTotal: actions.payload.total,
            };
        case DUMMY_LIST_ERROR:
        case DUMMY_LIST_RESET:
            return {
                ...state,
                listLoading: false,
                list: [],
                listTotal: 0,
            };
        case DUMMY_UPDATE_FETCH:
            return {
                ...state,
                updateLoading: true,
                updateSuccess: false,
            };
        case DUMMY_UPDATE_DATA:
            return {
                ...state,
                updateLoading: false,
                updateSuccess: true,
                data: actions.payload.data,
            };
        case DUMMY_UPDATE_ERROR:
        case DUMMY_UPDATE_RESET:
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
