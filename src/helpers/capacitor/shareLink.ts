import { Dispatch } from 'redux';

import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';

import { alertPush } from 'src/modules';

export interface ShareLinkParams {
    link: string;
    title: string;
    text: string;
    dialog: string;
    successMessage: string;
    dispatch: Dispatch<any>;
}

export const shareLink = ({ link, title, text, dialog, successMessage, dispatch }: ShareLinkParams) => {
    Share.share({
        url: link,
        title: title,
        text: text,
        dialogTitle: dialog,
    }).then().catch(() => {
        Clipboard.write({ string: link })
            .then(() => dispatch(alertPush({ message: [successMessage], type: 'success' })))
            .catch((reason) => dispatch(alertPush({ message: [reason], type: 'error' })));
    });
};
