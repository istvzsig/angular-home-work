import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'FavoritePhotosComponent',
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.sass'],
})
export class FavoritePhotosComponent {
  public favoritePhotos: Photo[] = [];

  constructor() {}

  ngOnInit() {
    this.loadFavoritePhotosFromLocalStorage();
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
}
