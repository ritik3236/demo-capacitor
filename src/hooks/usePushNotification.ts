import React from 'react';

import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

export const usePushNotification = () => {
    React.useEffect(() => {
        if (Capacitor.isNativePlatform()) {
            addNotificationListeners();
        }
    }, []);

    const addNotificationListeners = async () => {
        await PushNotifications.addListener('registration', (token) => {
            console.info('Registration token: ', token.value);
        });

        await PushNotifications.addListener('registrationError', (err) => {
            console.error('Registration error: ', err.error);
        });

        await PushNotifications.addListener('pushNotificationReceived', (notification) => {
            console.log('Push notification received: ', notification);
        });

        await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            console.log('Push notification action performed', notification.actionId, notification.inputValue);
        });
    };
};
