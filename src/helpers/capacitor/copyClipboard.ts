import { Clipboard } from '@capacitor/clipboard';

import { alertPush } from 'src/modules';

export const copyClipboard = (value: string, setIsCopied, dispatch, timeOut = 210) => {
    if (value === null || value === undefined) return;

    setIsCopied(true);

    Clipboard.write({ string: value })
        .then(() => dispatch(alertPush({ message: ['page.utils.clipboard.copy.success'], type: 'success' })))
        .catch((reason) => dispatch(alertPush({ message: [reason], type: 'error' })));

    setTimeout(() => setIsCopied(false), timeOut);
};
