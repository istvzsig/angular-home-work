import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { InfiniteScrollService } from 'src/app/services/infinite-scroll/infinite-scroll.service';
import { PhotoService } from 'src/app/services/photo/photo.service';

@Component({
  selector: 'photo-stream',
  templateUrl: './photo-stream.component.html',
  styleUrls: ['./photo-stream.component.sass'],
})
export class PhotoStreamComponent implements OnInit {

  constructor(public photoService: PhotoService, public infiniteScrollService: InfiniteScrollService) {}

  ngOnInit() {
    this.photoService.loadPhotos();
    this.infiniteScrollService.handleOnScrollEvent(this.photoService);
  }

  onClick(photo: Photo) {
    this.photoService.toggleFavoritePhoto(photo);
  }
}
