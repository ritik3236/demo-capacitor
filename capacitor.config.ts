import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'gamma.coinfinacle.com',
    appName: 'Ion App',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ['badge', 'sound', 'alert'],
        },
        CapacitorHttp: {
            enabled: true,
        },
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            launchFadeOutDuration: 200,
            backgroundColor: '#ffffffff',
            splashFullScreen: true,
            splashImmersive: true,
        },
    },
    ios: {
        preferredContentMode: 'mobile',
    },
};

export default config;
