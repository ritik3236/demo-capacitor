import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'gamma.coinfinacle.com',
    appName: 'Cap App',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ['badge', 'sound', 'alert'],
        },
    },
};

export default config;
