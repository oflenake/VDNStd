import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtHomeComponent } from './webt-home.component';

describe('WebtHomeComponent', () => {
  let component: WebtHomeComponent;
  let fixture: ComponentFixture<WebtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
