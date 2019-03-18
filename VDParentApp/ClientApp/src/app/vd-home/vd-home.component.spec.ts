import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdHomeComponent } from './vd-home.component';

describe('VdHomeComponent', () => {
  let component: VdHomeComponent;
  let fixture: ComponentFixture<VdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
