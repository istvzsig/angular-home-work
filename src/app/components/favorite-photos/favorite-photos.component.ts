import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'FavoritePhotosComponent',
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
    console.log(this.currentPhoto)
  }

  loadFavoritePhotosFromLocalStorage() {
    const favorites: Photo[] = [];
    let i, keys;

    keys = Object.keys(localStorage),
    i = keys.length;

    while (i--) {
      const photo = JSON.parse(String(window.localStorage.getItem(keys[i])));
      favorites.push(photo);
    }
    this.favoritePhotos = favorites;
  }
  
  removeFavoritePhotosFromLocalStorage(photoId: number) {
    if(!window.localStorage.getItem(String(photoId))) {
      return console.log('Nothing to remove');
    }
    window.localStorage.removeItem(String(photoId));
    console.log('Photo removed from local storage', photoId);
    this.loadFavoritePhotosFromLocalStorage();
  }
  
  openPhoto(photo: any) {
    this.photoService.currentPhotoId = photo.id;
    this.router.navigate(['/photos', photo.id]);
  }
}
