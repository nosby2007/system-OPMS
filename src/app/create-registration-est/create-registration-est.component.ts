import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PatientEst } from '../models/userEst.model';
import { ApiService5Service } from '../services/api-service5.service';

@Component({
  selector: 'app-create-registration-est',
  templateUrl: './create-registration-est.component.html',
  styleUrls: ['./create-registration-est.component.scss']
})
export class CreateRegistrationEstComponent implements OnInit {
  profession: string[] = [
    'INFIRMIER',
    'SAGE FEMME',
    'TMS',
  ];
  region: string[] = [
    'LITORAL',
    'CENTRE',
    'OUEST',
    'SUD',
    'EST',
    'ADAMAOUA',
    'NORD',
    'EXTREME NORD',
    'NORD OUEST',
    'SUD OUEST',
  ];
  gender: string[] = [
    'Male',
    'Female',
    'Others',
  ];
  public registerForm!: FormGroup;
  public userIdToUpdate!:number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private api5:ApiService5Service, private ActivatedRoute:ActivatedRoute, private router:Router, private toastService:NgToastService){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      ordre:[''],
      profession: [''],
      gender: [''],
      region: [''],
      date: [''],
      EMContact: [''],
      cni: [''],


    });
   /* this.registerForm.controls[`height`].valueChanges.subscribe(res=>{
      this.calculateBmi(res);
    });*/
    this.ActivatedRoute.params.subscribe(val => {
      this.userIdToUpdate= val['id'];
      this.api5.getRegisteredPatientEstId(this.userIdToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res);
      })
    })
  }

  submitEst(){
    this.api5.postRegistration(this.registerForm.value).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"patient added", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['listEst'])
      
    })
    
  }
  updateEst(){
    this.api5.updateRegisterPatientEst(this.registerForm.value, this.userIdToUpdate).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"patient added", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['listEst'])
    });
  }

  /*calculateBmi(heightValue: number){
    const weight = this.registerForm.value.height;
    const height = heightValue;
    const bmi = weight/(height * height);
    this.registerForm.controls[`bmi`].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls[`bmiResult`].patchValue("Underweight");
        break;
      case ( bmi >= 18.5 && bmi < 25):
        this.registerForm.controls[`bmiResult`].patchValue("Normal");
        break;
      case bmi >= 25 && bmi <30:
        this.registerForm.controls[`bmiResult`].patchValue("Overrweight");
        break;
    
      default:
        this.registerForm.controls[`bmiResult`].patchValue("Obese");
        break;
    }

  }*/
  fillFormToUpdate(user:PatientEst){
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      ordre:user.ordre,
      profession: user.profession,
      gender: user.gender,
      region: user.region,
      date: user.date,
      EMContact: user.EMContact,
      cni: user.cni
    })
    
  }
}
