import React from 'react';

import { Redirect, Route } from 'react-router';

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { library, playCircle, radio, search } from 'ionicons/icons';

import { CameraPage, DeviceInfo, Home, HttpsPage, PushNotificationPage } from 'src/pages';

export const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/home" render={() => <Home/>} exact={true}/>
                <Route path="/app/https" render={() => <HttpsPage/>} exact={true}/>
                <Route path="/app/camera" render={() => <CameraPage/>} exact={true}/>
                <Route path="/app/push-notification" render={() => <PushNotificationPage/>} exact={true}/>
                <Route path="/app/device-info" render={() => <DeviceInfo/>} exact={true}/>
                <Route exact path="/app">
                    <Redirect to="/app/home"/>
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home">
                    <IonIcon icon={playCircle}/>
                    <IonLabel>Listen now</IonLabel>
                </IonTabButton>

                <IonTabButton tab="https" href="/app/https">
                    <IonIcon icon={radio}/>
                    <IonLabel>Radio</IonLabel>
                </IonTabButton>

                <IonTabButton tab="camera" href="/app/camera">
                    <IonIcon icon={library}/>
                    <IonLabel>Library</IonLabel>
                </IonTabButton>

                <IonTabButton tab="device-info" href="/app/device-info">
                    <IonIcon icon={search}/>
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};