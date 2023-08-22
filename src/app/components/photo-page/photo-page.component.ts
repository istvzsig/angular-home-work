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
    this.photoService.currentPhoto = window.localStorage.getItem(String(this.photoService.currentPhotoId));
    this.photoService.currentPhoto = JSON.parse(this.photoService.currentPhoto);
  }

  setPhotoServiceCurrentPhoto() {
    const currentPhoto = this.getCurrentPhotoFromLocalStorage();
  }

  getCurrentPhotoFromLocalStorage() {
    return window.localStorage.getItem(String(this.photoService.currentPhotoId));
  }

  public goHome(): void {
    this.router.navigate(["/"]);
  }
}
