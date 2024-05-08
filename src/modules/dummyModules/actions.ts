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

export interface DummyActionFetch {
    type: typeof DUMMY_ACTION_FETCH;
    payload: {
        id: number;
        action: string;
        comment: string;
    };
}

export interface DummyActionData {
    type: typeof DUMMY_ACTION_DATA;
    payload: {
        data: DummyInterface;
    };
}

export interface DummyActionError {
    type: typeof DUMMY_ACTION_ERROR;
}

export interface DummyActionReset {
    type: typeof DUMMY_ACTION_RESET;
}

export interface DummyCreateFetch {
    type: typeof DUMMY_CREATE_FETCH;
    payload: {
        uid: string;
    };
}

export interface DummyCreateData {
    type: typeof DUMMY_CREATE_DATA;
    payload: {
        data: DummyInterface;
    };
}

export interface DummyCreateError {
    type: typeof DUMMY_CREATE_ERROR;
}

export interface DummyCreateReset {
    type: typeof DUMMY_CREATE_RESET;
}

export interface DummyDeleteFetch {
    type: typeof DUMMY_DELETE_FETCH;
    payload: {
        id: number;
        uid: string;
    };
}

export interface DummyDeleteData {
    type: typeof DUMMY_DELETE_DATA;
}

export interface DummyDeleteError {
    type: typeof DUMMY_DELETE_ERROR;
}

export interface DummyDeleteReset {
    type: typeof DUMMY_DELETE_RESET;
}

export interface DummyDetailFetch {
    type: typeof DUMMY_DETAIL_FETCH;
    payload: {
        id: number;
    };
}

export interface DummyDetailData {
    type: typeof DUMMY_DETAIL_DATA;
    payload: {
        data: DummyInterface;
    };
}

export interface DummyDetailError {
    type: typeof DUMMY_DETAIL_ERROR;
}

export interface DummyDetailReset {
    type: typeof DUMMY_DETAIL_RESET;
}

export interface DummyListFetch {
    type: typeof DUMMY_LIST_FETCH;
    payload: {
        id?: number;
        uid?: string;

        // other filter params
        limit?: number;
        page?: number;
        range?: string;
        order_by?: string;
        ordering?: string;
        from?: string;
        to?: string;
    };
}

export interface DummyListData {
    type: typeof DUMMY_LIST_DATA;
    payload: {
        list: DummyInterface[];
        total: number;
    };
}

export interface DummyListError {
    type: typeof DUMMY_LIST_ERROR;
}

export interface DummyListReset {
    type: typeof DUMMY_LIST_RESET;
}

export interface DummyUpdateFetch {
    type: typeof DUMMY_UPDATE_FETCH;
    payload: {
        id: number;
    };
}

export interface DummyUpdateData {
    type: typeof DUMMY_UPDATE_DATA;
    payload: {
        data: DummyInterface;
    };
}

export interface DummyUpdateError {
    type: typeof DUMMY_UPDATE_ERROR;
}

export interface DummyUpdateReset {
    type: typeof DUMMY_UPDATE_RESET;
}

export type DummiesActions = DummyActionData
    | DummyActionError
    | DummyActionFetch
    | DummyActionReset
    | DummyCreateData
    | DummyCreateError
    | DummyCreateFetch
    | DummyCreateReset
    | DummyDeleteData
    | DummyDeleteError
    | DummyDeleteFetch
    | DummyDeleteReset
    | DummyDetailData
    | DummyDetailError
    | DummyDetailFetch
    | DummyDetailReset
    | DummyListData
    | DummyListError
    | DummyListFetch
    | DummyListReset
    | DummyUpdateData
    | DummyUpdateError
    | DummyUpdateFetch
    | DummyUpdateReset;

export const dummyActionFetch = (payload: DummyActionFetch['payload']): DummyActionFetch => ({
    type: DUMMY_ACTION_FETCH,
    payload,
});

export const dummyActionData = (payload: DummyActionData['payload']): DummyActionData => ({
    type: DUMMY_ACTION_DATA,
    payload,
});

export const dummyActionError = (): DummyActionError => ({
    type: DUMMY_ACTION_ERROR,
});

export const dummyActionReset = (): DummyActionReset => ({
    type: DUMMY_ACTION_RESET,
});

export const dummyCreateFetch = (payload: DummyCreateFetch['payload']): DummyCreateFetch => ({
    type: DUMMY_CREATE_FETCH,
    payload,
});

export const dummyCreateData = (payload: DummyCreateData['payload']): DummyCreateData => ({
    type: DUMMY_CREATE_DATA,
    payload,
});

export const dummyCreateError = (): DummyCreateError => ({
    type: DUMMY_CREATE_ERROR,
});

export const dummyCreateReset = (): DummyCreateReset => ({
    type: DUMMY_CREATE_RESET,
});

export const dummyDeleteFetch = (payload: DummyDeleteFetch['payload']): DummyDeleteFetch => ({
    type: DUMMY_DELETE_FETCH,
    payload,
});

export const dummyDeleteData = (): DummyDeleteData => ({
    type: DUMMY_DELETE_DATA,
});

export const dummyDeleteError = (): DummyDeleteError => ({
    type: DUMMY_DELETE_ERROR,
});

export const dummyDeleteReset = (): DummyDeleteReset => ({
    type: DUMMY_DELETE_RESET,
});

export const dummyDetailFetch = (payload: DummyDetailFetch['payload']): DummyDetailFetch => ({
    type: DUMMY_DETAIL_FETCH,
    payload,
});

export const dummyDetailData = (payload: DummyDetailData['payload']): DummyDetailData => ({
    type: DUMMY_DETAIL_DATA,
    payload,
});

export const dummyDetailError = (): DummyDetailError => ({
    type: DUMMY_DETAIL_ERROR,
});

export const dummyDetailReset = (): DummyDetailReset => ({
    type: DUMMY_DETAIL_RESET,
});

export const dummyListFetch = (payload: DummyListFetch['payload']): DummyListFetch => ({
    type: DUMMY_LIST_FETCH,
    payload,
});

export const dummyListData = (payload: DummyListData['payload']): DummyListData => ({
    type: DUMMY_LIST_DATA,
    payload,
});

export const dummyListError = (): DummyListError => ({
    type: DUMMY_LIST_ERROR,
});

export const dummyListReset = (): DummyListReset => ({
    type: DUMMY_LIST_RESET,
});

export const dummyUpdateFetch = (payload: DummyUpdateFetch['payload']): DummyUpdateFetch => ({
    type: DUMMY_UPDATE_FETCH,
    payload,
});

export const dummyUpdateData = (payload: DummyUpdateData['payload']): DummyUpdateData => ({
    type: DUMMY_UPDATE_DATA,
    payload,
});

export const dummyUpdateError = (): DummyUpdateError => ({
    type: DUMMY_UPDATE_ERROR,
});

export const dummyUpdateReset = (): DummyUpdateReset => ({
    type: DUMMY_UPDATE_RESET,
});
