import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitePhotoStreamComponent } from './infinite-photo-stream.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo.service';

describe('InfinitePhotoStreamComponent', () => {
  let component: InfinitePhotoStreamComponent;
  let fixture: ComponentFixture<InfinitePhotoStreamComponent>;
  let service = PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InfinitePhotoStreamComponent],
      providers: [HttpClient, PhotoService]
    });
    fixture = TestBed.createComponent(InfinitePhotoStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
  
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
