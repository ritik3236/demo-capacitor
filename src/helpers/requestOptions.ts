import { RequestOptions } from '../api';

export const applogicRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'applogic',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export const barongRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'barong',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export const finexRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'finex',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export const peatioRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'peatio',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export const p2pRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'p2p',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export const sonicRequestOptions = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'sonic',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};
