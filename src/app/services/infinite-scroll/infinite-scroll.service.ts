import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {
  private scrollTop: number;
  private clientHeight: number;
  private scrollHeight: number;

  public handleOnScrollEvent(photoService: PhotoService): void {
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop;
      this.clientHeight = document.documentElement.clientHeight;
      this.scrollHeight = document.documentElement.scrollHeight;
      
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        photoService.toggleLoading();
        photoService.appendPhotos();
        photoService.pageNumber++;
      }
      else photoService.toggleLoading();
    });
  }

}
