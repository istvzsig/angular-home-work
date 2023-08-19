import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfinitePhotoStreamComponent } from '../components/infinite-photo-stream/infinite-photo-stream.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Photo } from '../models/photo';

describe('PhotoService', () => {
  let photoService: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InfinitePhotoStreamComponent],
      providers: [HttpClient, PhotoService]
    });
    photoService = TestBed.inject(PhotoService);
  });

  it('should create', () => {
    expect(photoService).toBeTruthy();
  });
});

describe('HttpTesting', () => {
  let photoService: PhotoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InfinitePhotoStreamComponent],
      providers: [HttpClient, PhotoService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    photoService = TestBed.inject(PhotoService);
  });

  it('should test HttpClient.get', () => {
    httpClient.get(photoService.url).subscribe((data) => {
      expect(typeof data).toBe('object')
    });
  });
});
