import { Page, NavController, NavParams } from 'ionic-angular';
import { Http } from 'angular2/http';
import { DetailPage } from '../detailPage/detailPage';

@Page({
    templateUrl: 'build/pages/callingAPI/callingAPI.html'
})
export class callingAPI {
    static get parameters() {

        return [
            [Http],
            [NavController],
            [NavParams]
        ];
    }

    constructor(Http, NavController, NavParams) {
        this.http = Http;
        this.nav = NavController;
        this.navParams = NavParams;

        // init ui states
        this.data = [];
        this.SendBtnDisable = false;
    }

    callAPI() {
        this.loadingVar = "Loading...";
        this.SendBtnDisable = true;

        let serviceUrl = "https://randomuser.me/api/?results=10";
        this.http.get(serviceUrl)
            .subscribe(
                data => {
                    this.loadingVar = "";
                    this.data = data.json();
                    this.SendBtnDisable = false;
                }, error => {
                    this.loadingVar = "An error occured. Please try again later.";
                    this.data = [];
                    this.SendBtnDisable = false;
                });
    }

    openDetailPage(item) {return;
        console.log('item ', item);
        this.nav.push(DetailPage, {
          item: item
        });
    }

}
