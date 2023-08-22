import { Component, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.sass']
})
export class PhotoPageComponent {

  constructor(public photoService: PhotoService, private router: Router) {}
  
  ngOnInit() {
    this.setPhotoServiceCurrentPhoto();
  }

  setPhotoServiceCurrentPhoto() {
    const currentPhoto: any = this.getCurrentPhotoFromLocalStorage();
    this.photoService.currentPhoto = JSON.parse(currentPhoto);
  }

  getCurrentPhotoFromLocalStorage() {
    console.log(window.localStorage.getItem(String(this.photoService.currentPhotoId)));
    return window.localStorage.getItem(String(this.photoService.currentPhotoId));
  }
}
