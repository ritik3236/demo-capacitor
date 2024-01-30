import React from 'react';

import './ExploreContainer.css';
import { IonButton } from '@ionic/react';

const ExploreContainer: React.FC = () => {
    return (
        <div id="container">
            <IonButton routerLink="/camera">Camera</IonButton><br/>
            <IonButton routerLink="/push-notification">Push Notification</IonButton><br/>
            <IonButton routerLink="/https">HTTP Test</IonButton><br/>
            <strong>Ready to create an app? Yes</strong>
            <p>Start with Ionic
                <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
                    &nbsp;UI Components
                </a>
            </p>
        </div>
    );
};

export default ExploreContainer;
