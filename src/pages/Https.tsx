import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';

import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonLoading,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

export const HttpsPage: React.FC = () => {

    const [getResponse, setGetResponse] = useState(null);
    const [postResponse, setPostResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const headers = {
        'content-type': 'application/json',
        'XYZ': 'ccc',
        'user-agent': navigator.userAgent,
    };

    // Example of a GET request
    const doGet = async () => {
        const options = {
            url: 'http://192.168.29.53:3000',
            headers,
        };

        setLoading(true);
        const response = await CapacitorHttp.request({ ...options, method: 'GET' });
        setGetResponse(JSON.stringify(response.data));
        // or...
    };

    // Example of a POST request. Note: data
    // can be passed as a raw JS Object (must be JSON serializable)
    const doPost = async () => {
        const options = {
            url: 'http://192.168.29.53:3000/',
            headers: headers,
            data: {
                'email': 'eve.holt@reqres.in',
                'password': 'pistol',
            },
        };

        setLoading(true);
        const response: HttpResponse = await CapacitorHttp.request({ ...options, method: 'POST' });
        setPostResponse(JSON.stringify(response.data));
    };

    const doAxiosGet = async () => {
        const options: AxiosRequestConfig = {
            url: encodeURI('http://192.168.29.53:3000'),
            headers,
            method: 'GET',
        };

        setLoading(true);
        const response = await axios.request(options);
        setGetResponse(JSON.stringify(response.data));
    };

    const doAxiosPost = async () => {
        const options: AxiosRequestConfig = {
            url: 'http://192.168.29.53:3000',
            headers: { ...headers },
            data: {
                'email': 'eve.holt@reqres.in',
                'password': 'pistol',
            },
            method: 'POST',
        };

        setLoading(true);
        const response = await axios.request(options);
        setPostResponse(JSON.stringify(response.data));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Push Notification</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading isOpen={loading}/>
            <IonContent class="ion-padding">
                <div id="container">
                    <p className="ion-text-left"><b>getResponse: </b> {getResponse}</p><br/>
                    <p className="ion-text-left"><b>postResponse: </b> {postResponse}</p><br/>
                    <IonButton onClick={() => doGet().finally(() => setLoading(false))}>Do Get Req</IonButton>
                    <IonButton onClick={() => doPost().finally(() => setLoading(false))}>Do Post Req</IonButton>
                    <IonButton onClick={() => doAxiosGet().finally(() => setLoading(false))}>Do Get Req</IonButton>
                    <IonButton onClick={() => doAxiosPost().finally(() => setLoading(false))}>Do Post Req</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};
