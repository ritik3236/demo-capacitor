export const randomSecureHex = (length: number) => {
    const maxlength = 8;
    const min = Math.pow(16, Math.min(length, maxlength) - 1);
    const max = Math.pow(16, Math.min(length, maxlength)) - 1;
    const numberResult = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = numberResult.toString(16);

    while (result.length < length) {
        result = result + randomSecureHex(length - maxlength);
    }

    return result;
};
