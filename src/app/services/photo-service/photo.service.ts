import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Photo } from 'src/app/models/photo';
import { Router } from '@angular/router';
import { InfiniteScrollService } from '../infinite-scroll/infinite-scroll.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: Photo[] = [];
  public favoritePhotos: Photo[] = [];
  public currentPhoto: any;
  public pageNumber: number = 1;
  public batchSize: number = 12;
  public currentPhotoId: number;
  public delay = Math.floor(Math.random() * (300 - 200 + 1) + 200);

  private headerConfig = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Autohorization: '',
    }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    public infiniteScrollService: InfiniteScrollService) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `https://picsum.photos/v2/list?page=${this.pageNumber}&limit=${this.batchSize}`
    );
  }

  public appendPhotos(): void {
    this.infiniteScrollService.toggleLoading();
    this.getPhotos().subscribe({
      next: (response: any) => {
        setTimeout(
          () => (this.photos = [...this.photos, ...response]),
          this.delay
        );
      },
      error: (err: string) => console.error(err),
      complete: () => this.infiniteScrollService.toggleLoading(),
    });
  }

  public loadPhotos(): void {
    this.infiniteScrollService.toggleLoading();
    this.getPhotos().subscribe({
      next: (response: any) => {
        setTimeout(() => (this.photos = response), this.delay);
      },
      error: (err: string) => console.error(err),
      complete: () => this.infiniteScrollService.toggleLoading(),
    });
  }

  public addToFavoritePhoto(photoId: string): Observable<Object> {
    return this.http.post(
      'http://120.0.0.1:4200/photos',
      { id: photoId },
      this.headerConfig
    );
  }

  public removeFavoritePhoto(photoId: string): Observable<Object> {
    return this.http.delete(
      `http://120.0.0.1:4200/photos/${photoId}`,
      this.headerConfig
    );
  }

  public removeFavoritePhotoFromLocalStorage(): void {
    this.removeFavoritePhoto(this.currentPhoto.id);
    this.router.navigate(['/favorites']);
    window.localStorage.removeItem(this.currentPhoto.id);
  }

  public toggleFavoritePhoto(photo: Photo): void {
    if (!photo.isFavorite && !window.localStorage.getItem(String(photo.id))) {
      photo.isFavorite = true;
      window.localStorage.setItem(String(photo.id), JSON.stringify(photo));
      return this.handleToAddFavoritePhoto(photo);
    }
    photo.isFavorite = false;
    window.localStorage.removeItem(String(photo.id));
    return this.handleToRemoveFavoritePhoto(photo);
  }

  public handleToAddFavoritePhoto(photo: Photo): void {
    this.addToFavoritePhoto(String(photo.id)).subscribe(() => {
      photo.isFavorite = true;
    });
  }

  public handleToRemoveFavoritePhoto(photo: Photo): void {
    this.removeFavoritePhoto(String(photo.id)).subscribe(() => {
      photo.isFavorite = false;
    });
  }
}
