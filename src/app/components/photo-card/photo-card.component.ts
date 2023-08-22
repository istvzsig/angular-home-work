import { Component, Input } from '@angular/core';
import { FavoritePhotosComponent } from '../favorite-photos/favorite-photos.component';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'photo-card-component',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.sass']
})
export class PhotoCardComponent {

  constructor(public photoService: PhotoService, public router: Router) {}

  @Input() photo: Photo;

  onClick() {
    this.photoService.toggleFavoritePhoto(this.photo);
  }
}
