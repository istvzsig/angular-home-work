import { Component } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.sass']
})
export class PhotoPageComponent {
  public photo: Photo[];
  public photoId = null;

  constructor() {}

  ngOnInit() {

  }
}
