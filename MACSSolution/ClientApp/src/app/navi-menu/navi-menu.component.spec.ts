import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviMenuComponent } from './navi-menu.component';

describe('NaviMenuComponent', () => {
  let component: NaviMenuComponent;
  let fixture: ComponentFixture<NaviMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
