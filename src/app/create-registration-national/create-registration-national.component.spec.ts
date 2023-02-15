import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistrationNationalComponent } from './create-registration-national.component';

describe('CreateRegistrationNationalComponent', () => {
  let component: CreateRegistrationNationalComponent;
  let fixture: ComponentFixture<CreateRegistrationNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegistrationNationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegistrationNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
