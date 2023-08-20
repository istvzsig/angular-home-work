import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfinitePhotoStreamComponent } from '../components/infinite-photo-stream/infinite-photo-stream.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

describe('PhotoService', () => {
  let httpMock: HttpTestingController;
  let photoService: PhotoService;

  const names: Photo[] = [
    {
      id: 0,
      author: 'asdsad',
      width: 2,
      height: 2,
      url: 'string',
      download_url: 'string',
      isFavorite: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService],
    });

    photoService = TestBed.inject(PhotoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getPhotos() should http GET names', () => {
    const names: Photo[] = [
      {
        id: 0,
        author: 'asdsad',
        width: 2,
        height: 2,
        url: 'string',
        download_url: 'string',
        isFavorite: false,
      },
    ];

    photoService.getPhotos(1, 12).subscribe((res) => {
      expect(res).toEqual(names);
    });

    const request = httpMock.expectOne(
      'https://picsum.photos/v2/list?page=1&limit=12'
    );
    expect(request.request.method).toEqual('GET');
    request.flush(names);

    httpMock.verify();
  });

  it('addToFavoritePhoto() should add photo from favorites', () => {
    photoService.addToFavoritePhoto('0').subscribe((res) => {
      expect(res).toEqual(names);
    });

    const request = httpMock.expectOne('http://120.0.0.1:4200/photos');
    expect(request.request.method).toEqual('POST');
    request.flush(names);

    httpMock.verify();
  });

  it('removeFavoritePhoto() should remove photo from favorites', () => {
    photoService.removeFavoritePhoto('0').subscribe((res) => {
      expect(res).toEqual(names);
    });

    const request = httpMock.expectOne('http://120.0.0.1:4200/photos/0');
    expect(request.request.method).toEqual('DELETE');
    request.flush(names);
    httpMock.verify();
  });
});
