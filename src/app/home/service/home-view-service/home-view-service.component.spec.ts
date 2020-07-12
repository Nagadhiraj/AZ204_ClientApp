import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewServiceComponent } from './home-view-service.component';

describe('ServiceComponent', () => {
  let component: HomeViewServiceComponent;
  let fixture: ComponentFixture<HomeViewServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
