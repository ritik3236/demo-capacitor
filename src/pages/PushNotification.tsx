import React from 'react';

import { PushNotifications } from '@capacitor/push-notifications';

import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

const registerNotifications = async (setData: (s: string) => void) => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
        alert('User denied permissions!');
    }

    await PushNotifications.register();
    return PushNotifications.addListener('registration', (data) => {
        setData(data.value);
    });
};

const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.info('delivered notifications:', JSON.stringify(notificationList.notifications));
};

export const PushNotificationPage: React.FC = () => {
    const [token, setToken] = React.useState('');

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
            <IonContent fullscreen class="ion-padding">
                <div id="container">
                    <p>Token: {token}</p>
                    <IonButton onClick={() => registerNotifications(setToken)}>Register</IonButton>
                    <IonButton onClick={getDeliveredNotifications}>Get Notification</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};
