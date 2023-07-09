import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PatientAdamaoua } from '../models/userAdamaoua.model';
import { ApiService6Service } from '../services/api-service6.service';

@Component({
  selector: 'app-create-registration-adamaoua',
  templateUrl: './create-registration-adamaoua.component.html',
  styleUrls: ['./create-registration-adamaoua.component.scss']
})
export class CreateRegistrationAdamaouaComponent implements OnInit{

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

  constructor(private fb: FormBuilder, private api6:ApiService6Service, private ActivatedRoute: ActivatedRoute,private router:Router, private toastService:NgToastService){}
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
      this.api6.getRegisteredPatientAdamaouaId(this.userIdToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res);
      })
    })
  }

  submitAdamaoua(){
    this.api6.postRegistration(this.registerForm.value).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"Professionel Ajouté avec success", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['listadamaoua'])
  
      
    })
    
  }
  updateAdamaoua(){
    this.api6.updateRegisterPatientAdamaoua(this.registerForm.value, this.userIdToUpdate).subscribe(res=>{
      this.toastService.success({detail:"success", summary:"mise a jour effectuée avec succes", duration:3000});
      this.registerForm.reset();
      this.router.navigate(['listadamaoua'])
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
  fillFormToUpdate(user:PatientAdamaoua){
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
