import ImagePicker from 'react-native-image-picker';

const GetPhoto = () => {
    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    return new Promise(((resolve, reject) => {
        
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                reject('User cancelled image picker');
            } else if (response.error) {
                reject('ImagePicker Error: ', response.error);
            } else if (response.camera) {
                reject('User tapped custom button: ', response.camera);
            } else {
                const source = { uri: response.uri };
                resolve(source);
            }
        })
    }))
}
export default GetPhoto;