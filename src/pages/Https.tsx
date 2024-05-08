import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IonButton, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { customerListFetch, selectCustomerList } from 'src/modules';

export const HttpsPage: React.FC = () => {
    const dispatch = useDispatch();

    const customerList = useSelector(selectCustomerList);

    const [getResponse, setGetResponse] = useState(null);
    const [postResponse, setPostResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCustomer = () => dispatch(customerListFetch({}));

    useEffect(() => {
        console.log(customerList);
    }, [customerList]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Push Notification</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading isOpen={loading}/>
            <IonContent class="ion-padding">
                <div id="container">
                    <p className="ion-text-left"><b>getResponse: </b> {JSON.stringify(customerList)}</p><br/>
                    <p className="ion-text-left"><b>postResponse: </b> {postResponse}</p><br/>
                    <IonButton onClick={getCustomer}>Get Customers</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};
