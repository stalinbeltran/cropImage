import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularCropperjsComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null; 
  myImage = null;
  scaleValX = 1;
  scaleValY = 1;

  constructor() {}

}
