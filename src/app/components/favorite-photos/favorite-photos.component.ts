import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo/photo.service';

@Component({
  selector: 'favorite-photos',
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.sass'],
})
export class FavoritePhotosComponent {
  public favoritePhotos: Photo[] = [];
  public currentPhoto: any;

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.loadFavoritePhotosFromLocalStorage();
    this.currentPhoto = window.localStorage.getItem(String(this.photoService.currentPhotoId));
  }

  public loadFavoritePhotosFromLocalStorage() {
    const favoritePhotosInLocalStorage: Photo[] = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      const photo = JSON.parse(String(window.localStorage.getItem(keys[i])));
      favoritePhotosInLocalStorage.push(photo);
    }
    this.favoritePhotos = favoritePhotosInLocalStorage;
  }

  public removeFavoritePhotosFromLocalStorage(photoId: number) {
    if (!this.getPhotoByIdFromLocalStorage(photoId)) return;
    this.removePhotoByIdFromLocalStorage(photoId);
    this.loadFavoritePhotosFromLocalStorage();
    this.router.navigate(['/favorites']);
  }

  public openPhoto(photo: any): any {
    if (!photo) return this.router.navigate(['/']);
    this.photoService.currentPhotoId = photo.id;
    this.router.navigate(['/photos', photo.id]);
  }

  private getPhotoByIdFromLocalStorage(photoId: number) {
    return window.localStorage.getItem(String(photoId));
  }

  private removePhotoByIdFromLocalStorage(photoId: number) {
    return window.localStorage.removeItem(String(photoId));
  }
}
