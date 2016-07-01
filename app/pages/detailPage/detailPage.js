import { Page, NavParams } from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/detailPage/detailPage.html'
})

export class DetailPage {
    static get parameters() {
        return [
            [NavParams]
        ];
    }

    constructor(navParams) {
        this.selectedItem = navParams.get('item');
        this.selectedItem = JSON.stringify(this.selectedItem);
    }
}