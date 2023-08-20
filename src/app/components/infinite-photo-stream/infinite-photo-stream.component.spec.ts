import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfinitePhotoStreamComponent } from './infinite-photo-stream.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Photo } from 'src/app/models/photo';

describe('InfinitePhotoStreamComponent', () => {
  let component: InfinitePhotoStreamComponent;
  let fixture: ComponentFixture<InfinitePhotoStreamComponent>;
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
      spyOn(component, 'loadPhotos');
      component.loadPhotos();
      expect(component.loadPhotos).toHaveBeenCalled();
    });
  });

  describe('appendPhotos()', () => {
    it('appendPhotos() should return string', () => {
      spyOn(component, 'appendPhotos');
      component.appendPhotos();
      expect(component.appendPhotos).toHaveBeenCalled();
    });
  });

  describe('toggleFavoritePhoto()', () => {
    it('toggleFavoritePhoto() should return boolean', () => {

      spyOn(component, 'toggleFavoritePhoto');
      component.toggleFavoritePhoto(photo);
      expect(component.toggleFavoritePhoto).toHaveBeenCalled();
      expect(photo.isFavorite).toBe(false);
      photo.isFavorite = true;
      expect(photo.isFavorite).toBe(true);
    });
  });

  describe('handleToAddFavoritePhoto()', () => {
    it('handleToAddFavoritePhoto() should return boolean', () => {

      spyOn(component, 'handleToAddFavoritePhoto');
      component.handleToAddFavoritePhoto(photo);
      expect(component.handleToAddFavoritePhoto).toHaveBeenCalled();
    });
  });

  describe('handleToRemoveFavoritePhoto()', () => {
    it('handleToRemoveFavoritePhoto() should return boolean', () => {

      spyOn(component, 'handleToRemoveFavoritePhoto');
      component.handleToRemoveFavoritePhoto(photo);
      expect(component.handleToRemoveFavoritePhoto).toHaveBeenCalled();
    });
  });
  
  describe('onScroll()', () => {
    it('onScroll() should return boolean', () => {
      spyOn(component, 'onScroll');
      component.onScroll();
      expect(component.onScroll).toHaveBeenCalled();
    });
  });
  
});