import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { FavoritePhotosComponent } from '../components/favorite-photos/favorite-photos.component';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public imagesLoaded: boolean = false;
  public favorites: Photo[] = [];
  private batchLimit = 20;
  private _options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Autohorization': '',
  })};

  readonly url: string = `https://picsum.photos/v2/list?page=2&limit=${this.batchLimit}`;
  
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url)
  }
  
  public addToFavoritePhoto(photoId: string) {
    console.log('post favorite photo');
    return this.http.post('http://120.0.0.1:4200/photos', {id: photoId}, this._options)
  }

  public removeFavoritePhoto(photoId: string) {
    console.log('delete favorite photo');
    return this.http.delete(`http://120.0.0.1:4200/photos/${photoId}`, this._options);
  }
}
