import { Injectable } from '@angular/core';
import { PhotoService } from '../photo-service/photo.service';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {

  constructor(private photoService: PhotoService) { }
}
