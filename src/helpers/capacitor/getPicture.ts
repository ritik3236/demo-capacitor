import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

import { randomSecureHex } from 'src/helpers';

export const getPicture2 = async (type?: 'front' | 'back' | 'selfie') => {
    let file: File;
    let filePath: string;

    try {
        const permission = await Camera.checkPermissions();
        if (permission.camera === 'denied' || permission.photos === 'denied') {
            alert('Permission Denied, Check App Permissions');
            return;
        }

        const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            direction: (type === 'selfie' ? CameraDirection.Front : CameraDirection.Rear),
        });

        const response = await fetch(image.webPath);
        const blob = await response.blob();
        file = new File([blob], randomSecureHex(10) + '.jpg', { type: 'image/jpeg' });
        filePath = image.webPath;
    } catch (e) {
        console.error(e);
    }
    return { file, filePath };
};
