import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service/photo.service';
import { Photo } from 'src/app/models/photo';
import { InfiniteScrollService } from 'src/app/services/infinite-scroll/infinite-scroll.service';

@Component({
  selector: 'InfinitePhotoStream',
  templateUrl: './photo-stream.component.html',
  styleUrls: ['./photo-stream.component.sass'],
})
export class PhotoStreamComponent implements OnInit {
  
  public isLoading: boolean = false;

  constructor(public photoService: PhotoService, public infiniteScrollService: InfiniteScrollService) {}

  ngOnInit() {
    this.photoService.loadPhotos();
    this.infiniteScrollService.updateOnScrollEvent(this.photoService);
  }


// *************** Refactor this into its own service LoaderService
  toggleLoading(): boolean {
    return this.isLoading = !this.isLoading;
  }

  toggleSpinner(): string {
    return 'spinner ' + this.isLoading ? 'show' : 'hide'; 
  }
// ***************
}
