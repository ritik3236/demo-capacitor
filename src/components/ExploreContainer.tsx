import React from 'react';

import './ExploreContainer.css';
import { IonButton } from '@ionic/react';

const ExploreContainer: React.FC = () => {
    return (
        <div id="container">
            <IonButton routerLink="/camera">Camera</IonButton>
            <br/>
            <IonButton routerLink="/push-notification">Push Notification</IonButton>
            <br/>
            <strong>Ready to create an app? no</strong>
            <p>Start with Ionic
                <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
                    UI Components
                </a>
            </p>
        </div>
    );
};

export default ExploreContainer;
