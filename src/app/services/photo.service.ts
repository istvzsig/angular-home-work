import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos = new BehaviorSubject([]);
  public favoritePhotos: Photo[] = [];

  public page: number = 1;
  public batchLimit: number = 12;

  private headerConfig = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Autohorization': '',
    }),
  };

  constructor(private http: HttpClient) {}

  public getPhotos(page: number = 1, batchLimit: number = 1): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://picsum.photos/v2/list?page=${page}&limit=${batchLimit}`);
  }
  
  public addToFavoritePhoto(photoId: string) {
    return this.http.post(
      'http://120.0.0.1:4200/photos',
      { id: photoId },
      this.headerConfig
    );
  }

  public removeFavoritePhoto(photoId: string) {
    return this.http.delete(
      `http://120.0.0.1:4200/photos/${photoId}`,
      this.headerConfig
    );
  }
}
