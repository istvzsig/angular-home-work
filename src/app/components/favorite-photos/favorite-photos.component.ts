import { Component, Input } from '@angular/core';
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

  constructor(private router: Router, private photoService: PhotoService) {}

  ngOnInit() {
    this.loadFavoritePhotosFromLocalStorage();
    console.log(this.favoritePhotos);
  }

  public onClick(photo: Photo): any {
    if (!photo) return this.router.navigate(['/']);
    this.photoService.currentPhotoId = photo.id;
    this.router.navigate(['/photos', photo.id]);
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

  private getPhotoByIdFromLocalStorage(photoId: number) {
    return window.localStorage.getItem(String(photoId));
  }

  private removePhotoByIdFromLocalStorage(photoId: number) {
    return window.localStorage.removeItem(String(photoId));
  }
}
