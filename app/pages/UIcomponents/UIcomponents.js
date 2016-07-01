import {
    Page,
    ActionSheet,
    NavController,
    Alert
} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/UIcomponents/UIcomponents.html'
})
export class UIcomponentsPage {

    static get parameters() {
        return [
            [NavController]
        ];
    }

    constructor(nav) {
        this.nav = nav;
    }

    presentActionSheet() {
        var actionSheet = ActionSheet.create({
            title: 'Modify your album',
            buttons: [{
                text: 'Destructive',
                role: 'destructive',
                handler: () => {
                    console.log('Destructive clicked');
                }
            }, {
                text: 'Archive',
                handler: () => {
                    console.log('Archive clicked');
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        this.nav.present(actionSheet);
    }

    doConfirm() {
        let confirm = Alert.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [{
                text: 'Disagree',
                handler: () => {
                    console.log('Disagree clicked');
                }
            }, {
                text: 'Agree',
                handler: () => {
                    console.log('Agree clicked');
                }
            }]
        });
        this.nav.present(confirm);
    }

    doRadio() {
        let alert = Alert.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });

        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });

        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });

        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });

        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        this.nav.present(alert).then(() => {
            this.testRadioOpen = true;
        });
    }
}
