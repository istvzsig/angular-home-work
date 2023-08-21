import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Photo } from 'src/app/models/photo';
import { Router } from '@angular/router';
import { InfiniteScrollService } from '../infinite-scroll/infinite-scroll.service';
import { Observable, concatMap, delay, from, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos$: Photo[] = [];
  public favoritePhotos: Photo[] = [];
  public currentPhoto: any;
  public pageNumber: number = 1;
  public batchSize: number = 12;
  public currentPhotoId: number;
  public delay = Math.floor(Math.random() * (3000 - 1200 + 1) + 1200);
  public isLoading: boolean = false;

  @ViewChild('loadingSpinner') loadingSpinner: ElementRef;

  private headerConfig = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Autohorization': '',
    }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    public infiniteScrollService: InfiniteScrollService
  ) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${environment.baseApiUrl}/v2/list?page=${this.pageNumber}&limit=${this.batchSize}`
    );
  }

  public toggleLoading(): boolean {
    return this.isLoading = !this.isLoading;
  }

  public appendPhotos(): void {
    this.getPhotos().subscribe({
      next: (response: any) => {
        setTimeout(
          () => (this.photos$ = [...this.photos$, ...response]),
          this.delay
        );
      },
      error: (err: string) => console.error(err),
    });
    this.pageNumber++;
  }

  public loadPhotos(): void {
    const loadedPhotos: any[] = [];
    this.getPhotos().subscribe({
      next: (response: any) => {
        from(response)
          .pipe(concatMap((data) => of(data).pipe(delay(300))))
          .subscribe((photo) => loadedPhotos.push(photo));
      },
      error: (err: string) => console.error(err),
    });
    this.photos$ = loadedPhotos;
  }
  
  public addToFavoritePhoto(photoId: string): Observable<Object> {
    return this.http.post(
      `${environment.localHostUrl}/photos`,
      { id: photoId },
      this.headerConfig
    );
  }

  public removeFavoritePhoto(photoId: string): Observable<Object> {
    return this.http.delete(
      `${environment.localHostUrl}/photos/${photoId}`,
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
