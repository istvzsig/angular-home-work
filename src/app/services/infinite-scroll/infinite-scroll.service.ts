import { Injectable } from '@angular/core';
import { PhotoService } from '../photo-service/photo.service';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {
  public isLoading: boolean = false;

  public updateOnScrollEvent(photoService: PhotoService): void {
    window.addEventListener('scroll', (e: Event) => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        photoService.pageNumber++;
        photoService.appendPhotos();
      }
    });
  }

  public toggleLoading(): boolean {
    return (this.isLoading = !this.isLoading);
  }
}
