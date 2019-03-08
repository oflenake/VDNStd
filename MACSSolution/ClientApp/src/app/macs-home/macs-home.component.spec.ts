import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsHomeComponent } from './macs-home.component';

describe('MacsHomeComponent', () => {
  let component: MacsHomeComponent;
  let fixture: ComponentFixture<MacsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
