import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotosComponent } from './favorite-photos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo.service';
import { InfinitePhotoStreamComponent } from '../infinite-photo-stream/infinite-photo-stream.component';

describe('FavoritePhotosComponent', () => {
  let component: FavoritePhotosComponent;
  let fixture: ComponentFixture<FavoritePhotosComponent>;
  let service: ComponentFixture<PhotoService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InfinitePhotoStreamComponent,FavoritePhotosComponent],
      providers: [HttpClient, PhotoService]
    });
    fixture = TestBed.createComponent(FavoritePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadFavoritePhotosFromLocalStorage()', () => {
    it('should load favorites from local storage', () => {
      const photos = component.favoritePhotos;
      component.loadFavoritePhotosFromLocalStorage();
      expect(photos.length).toBeGreaterThan(0);
    });
  });

  describe('removeFavoritePhotosFromLocalStorage()', () => {
    it('should remove favorite from local storage', () => {
      const stream = InfinitePhotoStreamComponent;
      component.removeFavoritePhotosFromLocalStorage(0);
      expect(window.localStorage.getItem("0")).toBe('undefined');
    });
  });
});
