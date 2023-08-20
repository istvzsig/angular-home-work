import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service/photo.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'InfinitePhotoStream',
  templateUrl: './infinite-photo-stream.component.html',
  styleUrls: ['./infinite-photo-stream.component.sass'],
})
export class InfinitePhotoStreamComponent implements OnInit {
  public isLoading: boolean = false;
  public photos: Photo[] = [];
  private page: number = 1;
  private batchLimit: number = 12;
  private delay = Math.floor(Math.random() * (300 - 200 + 1) + 200);

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos();
  }

  toggleLoading(): boolean {
    return this.isLoading = !this.isLoading;
  }

  toggleSpinner(): string {
    return 'spinner ' + this.isLoading ? 'show' : 'hide'; 
  }

  loadPhotos(): void {
    this.toggleLoading();
    this.photoService.getPhotos(this.page, this.batchLimit).subscribe({
      next: (response: any) => {
        setTimeout(() => this.photos = response, this.delay)
      },
      error: (err: string) => console.error(err),
      complete: () => this.toggleLoading()
    });
  }

  appendPhotos(): void {
    this.toggleLoading();
    this.photoService.getPhotos(this.page, this.batchLimit).subscribe({
      next: (response: any) => {
        setTimeout(() => this.photos = [...this.photos, ...response], this.delay)
      },
      error: (err: string) => console.error(err),
      complete: () => this.toggleLoading()
    });
  }

  public toggleFavoritePhoto(photo: Photo) {
    if(!photo.isFavorite && !(window.localStorage.getItem(String(photo.id)))) {
      photo.isFavorite = true;
      window.localStorage.setItem(String(photo.id), JSON.stringify(photo));
      return this.handleToAddFavoritePhoto(photo);
    }
    photo.isFavorite = false;
    window.localStorage.removeItem(String(photo.id));
    return this.handleToRemoveFavoritePhoto(photo);
  }

  public handleToAddFavoritePhoto(photo: Photo): any {
    this.photoService
    .addToFavoritePhoto(String(photo.id))
    .subscribe(() => {
      photo.isFavorite = true;
    });
    
  }

  public handleToRemoveFavoritePhoto(photo: Photo): any {
    this.photoService
    .removeFavoritePhoto(String(photo.id))
    .subscribe(() => {
      photo.isFavorite = false;
    });

  }

  public onScroll(): void {
    this.page++;
    this.appendPhotos();
  }
}
