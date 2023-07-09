import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailSudouestComponent } from './user-detail-sudouest.component';

describe('UserDetailSudouestComponent', () => {
  let component: UserDetailSudouestComponent;
  let fixture: ComponentFixture<UserDetailSudouestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailSudouestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailSudouestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
