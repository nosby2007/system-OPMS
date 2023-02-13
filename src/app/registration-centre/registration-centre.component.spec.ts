import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCentreComponent } from './registration-centre.component';

describe('RegistrationCentreComponent', () => {
  let component: RegistrationCentreComponent;
  let fixture: ComponentFixture<RegistrationCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
