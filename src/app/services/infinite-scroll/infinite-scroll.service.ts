import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {

  public updateOnScrollEvent(photoService: PhotoService): void {
    window.addEventListener('scroll', (e: Event) => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        photoService.toggleLoading()
        photoService.pageNumber++;
        photoService.appendPhotos();
      }
      else photoService.toggleLoading();
    });
  }

}
