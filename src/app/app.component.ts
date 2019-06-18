import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// Import AngularCropperjsComponent
import { NgxCropperjsComponent } from 'ngx-cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('angularCropper') public angularCropper: NgxCropperjsComponent;
  imageurl = "https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg"

  config = {
    dragMode: 'crop',
    aspectRatio: 1,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8,
  };


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.angularCropper.cropper.zoom(0.1);
    });
  }
}
