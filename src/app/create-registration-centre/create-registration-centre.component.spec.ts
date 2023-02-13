import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistrationCentreComponent } from './create-registration-centre.component';

describe('CreateRegistrationCentreComponent', () => {
  let component: CreateRegistrationCentreComponent;
  let fixture: ComponentFixture<CreateRegistrationCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegistrationCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegistrationCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
