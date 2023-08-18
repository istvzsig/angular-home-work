import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationComponent } from './top-navigation.component';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
