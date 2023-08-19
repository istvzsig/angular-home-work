import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'InfinitePhotoStream',
  templateUrl: './infinite-photo-stream.component.html',
  styleUrls: ['./infinite-photo-stream.component.sass'],
})
export class InfinitePhotoStreamComponent implements OnInit {
  public photos: Photo[];
  public isLoading: boolean = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService
    .getPhotos()
    .subscribe((fetchedPhotos: any) => {
      this.photos = fetchedPhotos;
    });
  }

  public toggleFavoritePhoto(photo: Photo) {
    if(!photo.isFavorite) {
      photo.isFavorite = true;
      return this.handleToAddFavoritePhoto(photo);
    }
    photo.isFavorite = false;
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
    console.log('Ricky')
  }
}
