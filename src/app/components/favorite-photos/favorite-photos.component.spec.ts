import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotosComponent } from './favorite-photos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { PhotoStreamComponent } from '../photo-stream/photo-stream-component';
import { Photo } from 'src/app/models/photo';

describe('FavoritePhotosComponent', () => {
  let component: FavoritePhotosComponent;
  let fixture: ComponentFixture<FavoritePhotosComponent>;
  let service: ComponentFixture<PhotoService>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PhotoStreamComponent, FavoritePhotosComponent],
      providers: [PhotoService]
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
      
    });
  });

  describe('removeFavoritePhotosFromLocalStorage()', () => {
    it('should remove favorite from local storage', () => {
      // service.getPho
    });
  });
});
