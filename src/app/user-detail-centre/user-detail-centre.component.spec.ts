import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCentreComponent } from './user-detail-centre.component';

describe('UserDetailCentreComponent', () => {
  let component: UserDetailCentreComponent;
  let fixture: ComponentFixture<UserDetailCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
