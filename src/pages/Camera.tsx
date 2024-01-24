import { camera } from 'ionicons/icons';
import React, { useState } from 'react';

import { Camera, CameraResultType } from '@capacitor/camera';

import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonLoading,
} from '@ionic/react';

export const CameraPage: React.FC = () => {
    const [image, setImage] = useState(null);
    const [present, dismiss] = useIonLoading();

    const takePicture = async () => {
        await present('Loading...');
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Base64,
        });

        setImage(`data:image/jpeg;base64,${image.base64String}`);
    };

    const handleBtnClick = () => takePicture().finally(() => dismiss());

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Camera</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton onClick={handleBtnClick}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>
                <div id="container">
                    <img src={image} alt=""/>
                </div>
            </IonContent>
        </IonPage>
    );
};
