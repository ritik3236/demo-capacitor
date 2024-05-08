import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';

import { getPlatform } from 'src/helpers';

declare const ENV;

export type HTTPMethod = 'get' | 'post' | 'delete' | 'put' | 'patch';

export interface JsonBody {
    // tslint:disable-next-line no-any
    [key: string]: any;
}

export interface RequestOptions {
    withHeaders?: boolean;
    headers?: object;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

const getAPI = () => {
    return 'http://127.0.0.1:8000/api';
};

const convertToSerializableObject = (data: FormData) => {
    const object = {};
    data.forEach(function (value, key) {
        object[key] = value;
    });
    return object;
};

const buildNativeRequest = (request: Request, configData: RequestOptions) => {
    const { body, method, url } = request;
    const { headers } = configData;

    const contentType = body instanceof FormData ? 'multipart/form-data' : 'application/json';
    // Converting to regular javascript object as FormData serialization while posting to Capacitor bridge - https://github.com/capacitor-community/http/issues/136
    const data = body instanceof FormData ? convertToSerializableObject(body) : body;

    const defaultHeaders = {
        'content-type': contentType,
    };

    const apiUrl = getAPI();
    const nativeRequestConfig: HttpOptions = {
        url: apiUrl + url,
        method: method.toUpperCase(),
        data: data,
        headers: { ...headers, ...defaultHeaders },
    };
    return nativeRequestConfig;
};

const buildAxiosRequest = (request: Request, configData: RequestOptions) => {
    const { body, method, url } = request;
    const { headers } = configData;

    const contentType = body instanceof FormData ? 'multipart/form-data' : 'application/json';

    const defaultHeaders = {
        'content-type': contentType,
    };

    const apiUrl = getAPI();
    const requestConfig: AxiosRequestConfig = {
        baseURL: apiUrl,
        data: body,
        headers: { ...headers, ...defaultHeaders },
        method,
        url,
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: any) => {
    const response = responseError?.response || defaultResponse;
    const errors = (response.data && (response.data.errors || [response.data.error])) || [];

    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = async (request: Request, configData: RequestOptions) => {
    if (getPlatform() === 'ios') {
        const requestConfig = buildNativeRequest(request, configData);

        return new Promise((resolve, reject) => {
            const request: Promise<HttpResponse> = CapacitorHttp.request(requestConfig);
            request
                .then((response: HttpResponse) => {
                    if (response.status >= 299) {
                        reject(formatError(response));
                    } else {
                        resolve(response);
                    }
                })
                .catch((error: HttpResponse) => {
                    reject(formatError(error));
                });
        });
    }

    const requestConfig = buildAxiosRequest(request, configData);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => resolve(response))
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
