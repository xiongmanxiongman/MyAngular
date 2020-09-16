import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmComponent } from './xm.component';

describe('XmComponent', () => {
  let component: XmComponent;
  let fixture: ComponentFixture<XmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
