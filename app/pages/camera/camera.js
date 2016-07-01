import {
    Page
} from 'ionic-angular';
import {
    Camera
} from 'ionic-native';

@Page({
    templateUrl: 'build/pages/camera/camera.html'
})
export class CameraPage {

    takePicture() {
        Camera.getPicture({
            destinationType: 0,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
              this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }
}
