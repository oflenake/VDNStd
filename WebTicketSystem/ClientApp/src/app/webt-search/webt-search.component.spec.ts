import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtSearchComponent } from './webt-search.component';

describe('WebtSearchComponent', () => {
  let component: WebtSearchComponent;
  let fixture: ComponentFixture<WebtSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
