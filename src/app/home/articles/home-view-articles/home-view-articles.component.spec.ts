import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewArticleComponent } from './home-view-articles.component';

describe('ServiceComponent', () => {
  let component: HomeViewArticleComponent;
  let fixture: ComponentFixture<HomeViewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
