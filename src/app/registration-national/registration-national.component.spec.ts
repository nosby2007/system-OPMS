import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNationalComponent } from './registration-national.component';

describe('RegistrationNationalComponent', () => {
  let component: RegistrationNationalComponent;
  let fixture: ComponentFixture<RegistrationNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationNationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
