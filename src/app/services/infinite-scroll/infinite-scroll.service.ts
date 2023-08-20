import { Injectable } from '@angular/core';
import { PhotoService } from '../photo-service/photo.service';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {
  public isLoading: boolean = false;

  public scrollY: number;
  public innerHeight: number;
  public delay = Math.floor(Math.random() * (300 - 200 + 1) + 200);

  constructor(private photoService: PhotoService) {}

  public update(): void {
    window.addEventListener('scroll',  (e:Event) => {
      this.scrollY = window.scrollY;
      this.innerHeight = window.innerHeight;
      this.photoService.appendPhotos();
    });
  }

  toggleLoading(): boolean {
    return this.isLoading = !this.isLoading;
  }

}
