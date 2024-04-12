import React, { useState } from 'react';

import { Device } from '@capacitor/device';

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

export const DeviceInfo: React.FC = () => {
    const [deviceInfo, setDeviceInfo] = useState(null);
    const [batteryInfo, setBatteryInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const logDeviceInfo = async () => {
        const info = await Device.getInfo();

        setDeviceInfo(JSON.stringify(info));
    };

    const logBatteryInfo = async () => {
        const info = await Device.getBatteryInfo();

        setBatteryInfo(JSON.stringify(info));
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Device Info</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading isOpen={loading}/>
            <IonContent class="ion-padding">
                <div id="container">
                    <p className="ion-text-left"><b>getResponse: </b> {deviceInfo}</p><br/>
                    <p className="ion-text-left"><b>postResponse: </b> {batteryInfo}</p><br/>
                    <IonButton onClick={() => logDeviceInfo().finally(() => setLoading(false))}>Device Info</IonButton>
                    <IonButton onClick={() => logBatteryInfo().finally(() => setLoading(false))}>Battery
                        Info</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};
