import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';

import {ListPage} from './pages/list/list';
import {FormPage} from './pages/form/form';
import {CameraPage} from './pages/camera/camera';
import {UIcomponentsPage} from './pages/UIcomponents/UIcomponents';
import {callingAPI} from './pages/callingAPI/callingAPI';
import {externalComms} from './pages/externalComms/externalComms';



@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu, Popup) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'List and Navigation', component: ListPage },
      { title: 'Form Functions', component: FormPage },
      { title: 'Camera', component: CameraPage },
      { title: 'UI components', component: UIcomponentsPage },
      { title: 'Calling API', component: callingAPI },
      { title: 'External Communication', component: externalComms }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    (page.component.name === "HelloIonicPage") ? nav.setRoot(page.component) : nav.push(page.component);
  }
}
