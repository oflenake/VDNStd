import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaSearchComponent } from './homea-search.component';

describe('HomeaSearchComponent', () => {
  let component: HomeaSearchComponent;
  let fixture: ComponentFixture<HomeaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
