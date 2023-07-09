import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailNationalComponent } from './user-detail-national.component';

describe('UserDetailNationalComponent', () => {
  let component: UserDetailNationalComponent;
  let fixture: ComponentFixture<UserDetailNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailNationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
