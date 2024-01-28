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

const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
        alert('User denied permissions!');
    }

    await PushNotifications.register();
};

const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.info('delivered notifications:', JSON.stringify(notificationList.notifications));
};

export const PushNotificationPage: React.FC = () => {
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
            <IonContent fullscreen>
                <div id="container">
                    <IonButton onClick={registerNotifications}>Register</IonButton>
                    <IonButton onClick={getDeliveredNotifications}>Get Notification</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};
