declare global {
    interface Config {
        msAlertDisplayTime: string;
    }

    interface Window {
        env: Config;
    }
}

export {};
