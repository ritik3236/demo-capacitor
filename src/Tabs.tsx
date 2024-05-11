import React from 'react';

import { Redirect, Route } from 'react-router';

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { home, library, receipt } from 'ionicons/icons';

import { CameraPage, Home, HttpsPage } from 'src/pages';

export const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/home" render={() => <Home/>} exact={true}/>
                <Route path="/app/orders" render={() => <HttpsPage/>} exact={true}/>
                <Route path="/app/customers" render={() => <CameraPage/>} exact={true}/>
                <Route exact path="/app">
                    <Redirect to="/app/home"/>
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home">
                    <IonIcon icon={home}/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="orders" href="/app/orders">
                    <IonIcon icon={receipt}/>
                    <IonLabel>Orders</IonLabel>
                </IonTabButton>

                <IonTabButton tab="customers" href="/app/customers">
                    <IonIcon icon={library}/>
                    <IonLabel>Customers</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};