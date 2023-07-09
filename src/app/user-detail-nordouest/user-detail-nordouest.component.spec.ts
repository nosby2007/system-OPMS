import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailNordouestComponent } from './user-detail-nordouest.component';

describe('UserDetailNordouestComponent', () => {
  let component: UserDetailNordouestComponent;
  let fixture: ComponentFixture<UserDetailNordouestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailNordouestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailNordouestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
