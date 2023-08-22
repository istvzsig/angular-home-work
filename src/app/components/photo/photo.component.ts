import { Component, Input } from '@angular/core';
import { FavoritePhotosComponent } from '../favorite-photos/favorite-photos.component';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'photo-component',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent {

  constructor(public photoService: PhotoService, public router: Router) {}

  @Input() photo: Photo;

  public open(): any {
    console.log(this.photo)
    if (!this.photo) return this.router.navigate(['/']);
    this.photoService.currentPhotoId = this.photo.id;
    this.router.navigate(['/photos', this.photo.id]);
  }

}
