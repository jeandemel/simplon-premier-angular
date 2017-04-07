import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArgumentComponent } from './route-argument.component';

describe('RouteArgumentComponent', () => {
  let component: RouteArgumentComponent;
  let fixture: ComponentFixture<RouteArgumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteArgumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
