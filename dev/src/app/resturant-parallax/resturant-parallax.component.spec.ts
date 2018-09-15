import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantParallaxComponent } from './resturant-parallax.component';

describe('ResturantParallaxComponent', () => {
  let component: ResturantParallaxComponent;
  let fixture: ComponentFixture<ResturantParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
