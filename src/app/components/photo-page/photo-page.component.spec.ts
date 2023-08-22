import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPageComponent } from './photo-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from 'src/app/services/photo/photo.service';

describe('PhotoPageComponent', () => {
  let component: PhotoPageComponent;
  let fixture: ComponentFixture<PhotoPageComponent>;
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoPageComponent],
      imports: [HttpClientModule],
      providers: [PhotoService]
    });
    fixture = TestBed.createComponent(PhotoPageComponent);
    service = TestBed.inject(PhotoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const photo = window.localStorage.getItem('0');
    expect(component).toBeTruthy();
  });
});
