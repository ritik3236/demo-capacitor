import React, { useState } from 'react';

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

import { camera } from 'ionicons/icons';

import { getPicture } from 'src/helpers';

export const CameraPage: React.FC = () => {
    const [image, setImage] = useState(null);
    const [present, dismiss] = useIonLoading();

    const handleBtnClick = async () => {
        const { filePath } = await getPicture(present, dismiss);
        setImage(filePath);
    };

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
                    <IonFabButton id="open-loading" onClick={handleBtnClick}>
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
