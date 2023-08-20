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

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadPhotos();
  }
// *************** Refactor this into its own service LoaderService
  toggleLoading(): boolean {
    return this.isLoading = !this.isLoading;
  }

  toggleSpinner(): string {
    return 'spinner ' + this.isLoading ? 'show' : 'hide'; 
  }

// ***************

  public onScroll(): void {
    this.photoService.pageNumber++;
    this.photoService.appendPhotos();
  }
}
