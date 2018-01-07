import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferalStatusComponent } from './refferal-status.component';

describe('RefferalStatusComponent', () => {
  let component: RefferalStatusComponent;
  let fixture: ComponentFixture<RefferalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
