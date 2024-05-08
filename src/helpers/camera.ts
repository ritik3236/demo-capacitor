import { Camera, CameraResultType } from '@capacitor/camera';

import { randomSecureHex } from 'src/helpers';

export const getPicture = async (loader, loaderDissenter: () => Promise<void>) => {
    let file: File;
    let filePath: string;

    const takePicture = async () => {
        try {
            const permission = await Camera.checkPermissions();
            if (permission.camera === 'denied' || permission.photos === 'denied') {
                alert('Permission Denied, Check App Permissions');
                return;
            }

            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri,
            });

            const response = await fetch(image.webPath);
            const blob = await response.blob();
            file = new File([blob], randomSecureHex(10) + '.jpg', { type: 'image/jpeg' });
            filePath = image.webPath;
        } catch (e) {
            console.error(e);
        }
    };

    await takePicture().finally(() => loaderDissenter());

    return { file, filePath };
};
