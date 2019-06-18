import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularCropperjsComponent } from 'angular-cropperjs';

// Import angular-cropperjs
// import { NgxCropperjsModule } from 'ngx-cropperjs';
import { NgxCropperjsComponent } from 'ngx-cropperjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('angularCropper') public angularCropper: NgxCropperjsComponent;
  imageUrl = "./assets/paisaje.jpg"

  config = {
    dragMode: 'crop',
    aspectRatio: 1,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8,
  };
  cropperOptions: any;
  croppedImage = null; 
  myImage = null;
  scaleValX = 1;
  scaleValY = 1;

  constructor(
  ) {}




  reset() {
    this.angularCropper.cropper.reset();
  }
 
  clear() {
    this.angularCropper.cropper.clear();
  }
 
  rotate() {
    this.angularCropper.cropper.rotate(90);
  }
 
  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }
 
  // scaleX() {
  //   this.scaleValX = this.scaleValX * -1;
  //   this.angularCropper.cropper.scaleX(this.scaleValX);
  // }
 
  // scaleY() {
  //   this.scaleValY = this.scaleValY * -1;
  //   this.angularCropper.cropper.scaleY(this.scaleValY);
  // }
 
  // move(x, y) {
  //   this.angularCropper.cropper.move(x, y);
  // }
 
  // save() {
  //   let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
  //   this.croppedImage = croppedImgB64String;
  // }



}




