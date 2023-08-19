import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopNavigationComponent } from './top-navigation.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InfinitePhotoStreamComponent } from '../infinite-photo-stream/infinite-photo-stream.component';
import { FavoritePhotosComponent } from '../favorite-photos/favorite-photos.component';
import { routes } from 'src/app/app-routing.module';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopNavigationComponent]
    });
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const numberOfLinks = compiled.querySelectorAll('.top-navigation--link').length;
    expect(numberOfLinks).toEqual(2);
  });
});

describe('RouterTest', () => {
  let router: Router;
  let fixture: ComponentFixture<TopNavigationComponent>;
  let component: TopNavigationComponent;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [TopNavigationComponent, InfinitePhotoStreamComponent, FavoritePhotosComponent
      ]}).compileComponents().then(() => {
        router = TestBed.inject(Router);
        spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it(`should go to path '/'`, waitForAsync(() => {
    component.handleClick('');
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));

  it(`should go to path '/favorites'`, waitForAsync(() => {
    component.handleClick('favorites');
    expect(router.navigate).toHaveBeenCalledWith(['/favorites']);
  }));

  it(`should go to path '/**'`, waitForAsync(() => {
    component.handleClick('**');
    expect(router.navigate).toHaveBeenCalledWith(['/**']);
  }));
});