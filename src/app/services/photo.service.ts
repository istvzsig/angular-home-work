import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Observable<Photo[]>;
  readonly url: string = 'https://picsum.photos/v2/list';
  
  constructor(private http: HttpClient) {}

  public getPhotos(url: string = this.url): any {
    return this.http.get<Photo[]>(url || this.url)
  }

}
