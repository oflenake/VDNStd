import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdSearchComponent } from './vd-search.component';

describe('VdSearchComponent', () => {
  let component: VdSearchComponent;
  let fixture: ComponentFixture<VdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
