import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrgComponent } from './user-org.component';

describe('UserOrgComponent', () => {
  let component: UserOrgComponent;
  let fixture: ComponentFixture<UserOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
