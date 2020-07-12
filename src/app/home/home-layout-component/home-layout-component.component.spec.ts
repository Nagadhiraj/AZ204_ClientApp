import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutComponentComponent } from './home-layout-component.component';

describe('HomeLayoutComponentComponent', () => {
  let component: HomeLayoutComponentComponent;
  let fixture: ComponentFixture<HomeLayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
