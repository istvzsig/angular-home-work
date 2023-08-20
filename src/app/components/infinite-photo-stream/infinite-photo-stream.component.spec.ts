import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo-service/photo.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfinitePhotoStreamComponent } from './infinite-photo-stream.component';
import { InfiniteScrollService } from 'src/app/services/infinite-scroll/infinite-scroll.service';

describe('InfinitePhotoStreamComponent', () => {
  let component: InfinitePhotoStreamComponent;
  let fixture: ComponentFixture<InfinitePhotoStreamComponent>;
  let photoService: PhotoService;
  let infiniteScrollService: InfiniteScrollService;
  
  const photo = {
    id: 0,
    author: 'asdsad',
    width: 2,
    height: 2,
    url: 'string',
    download_url: 'string',
    isFavorite: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, InfiniteScrollModule],
      declarations: [InfinitePhotoStreamComponent],
      providers: [HttpClient, PhotoService],
    });
    fixture = TestBed.createComponent(InfinitePhotoStreamComponent);
    photoService = TestBed.inject(PhotoService);
    infiniteScrollService = TestBed.inject(InfiniteScrollService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleLoading()', () => {
    it('toggleLoading() should return true', () => {
      spyOn(component, 'toggleLoading');
      expect(component.isLoading).toBe(true);
    });

    it('toggleLoading() should return false', () => {
      component.isLoading = false;
      spyOn(component, 'toggleLoading');
      component.toggleLoading();
      expect(component.isLoading).toBe(false);
    });
  });

  describe('toggleSpinner()', () => {
    it('toggleSpinner() should return string', () => {
      const toggleSpinnerText = component.toggleSpinner();
      spyOn(component, 'toggleSpinner');
      expect(typeof toggleSpinnerText).toBe('string');
    });
  });

  describe('loadPhotos()', () => {
    it('loadPhotos() should return string', () => {
      spyOn(photoService, 'loadPhotos');
      photoService.loadPhotos();
      expect(photoService.loadPhotos).toHaveBeenCalled();
    });
  });

  describe('appendPhotos()', () => {
    it('appendPhotos() should return string', () => {
      spyOn(photoService, 'appendPhotos');
      photoService.appendPhotos();
      expect(photoService.appendPhotos).toHaveBeenCalled();
    });
  });

  describe('toggleFavoritePhoto()', () => {
    it('toggleFavoritePhoto() should return boolean', () => {

      spyOn(photoService, 'toggleFavoritePhoto');
      photoService.toggleFavoritePhoto(photo);
      expect(component.photoService).toHaveBeenCalled();
      expect(photo.isFavorite).toBe(false);
      photo.isFavorite = true;
      expect(photo.isFavorite).toBe(true);
    });
  });

  describe('handleToAddFavoritePhoto()', () => {
    it('handleToAddFavoritePhoto() should return boolean', () => {

      spyOn(photoService, 'handleToAddFavoritePhoto');
      photoService.handleToAddFavoritePhoto(photo);
      expect(photoService.handleToAddFavoritePhoto).toHaveBeenCalled();
    });
  });

  describe('handleToRemoveFavoritePhoto()', () => {
    it('handleToRemoveFavoritePhoto() should return boolean', () => {

      spyOn(photoService, 'handleToRemoveFavoritePhoto');
      photoService.handleToRemoveFavoritePhoto(photo);
      expect(photoService.handleToRemoveFavoritePhoto).toHaveBeenCalled();
    });
  });
  
  describe('onScroll()', () => {
    it('onScroll() should return boolean', () => {
      spyOn(infiniteScrollService, 'onScroll');
      infiniteScrollService.onScroll();
      expect(infiniteScrollService.onScroll).toHaveBeenCalled();
    });
  });
  
});