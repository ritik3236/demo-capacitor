declare const ENV;

export const defaultConfig: Config = {
    msAlertDisplayTime: '5000',
};

export const Cryptobase = {
    config: defaultConfig,
};

Cryptobase.config = { ...defaultConfig, ...window.env };

export const msAlertDisplayTime = () => Number(Cryptobase.config.msAlertDisplayTime);