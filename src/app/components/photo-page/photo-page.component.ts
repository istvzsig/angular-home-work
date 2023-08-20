import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.sass']
})
export class PhotoPageComponent {

  public currentPhoto: any;

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.currentPhoto = window.localStorage.getItem(String(this.photoService.currentPhotoId));
    this.currentPhoto = JSON.parse(this.currentPhoto);
  }

  public goHome(): void {
    this.router.navigate(["/"]);
  }

  public removeFavorite() {
    this.photoService.removeFavoritePhoto(this.currentPhoto.id);
    this.router.navigate(['/favorites']);
  }
}
