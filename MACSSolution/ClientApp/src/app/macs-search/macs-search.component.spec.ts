import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsSearchComponent } from './macs-search.component';

describe('MacsSearchComponent', () => {
  let component: MacsSearchComponent;
  let fixture: ComponentFixture<MacsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
