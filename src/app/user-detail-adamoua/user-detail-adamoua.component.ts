import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientAdamaoua } from '../models/userAdamaoua.model';
import { ApiService6Service } from '../services/api-service6.service';

@Component({
  selector: 'app-user-detail-adamoua',
  templateUrl: './user-detail-adamoua.component.html',
  styleUrls: ['./user-detail-adamoua.component.scss']
})
export class UserDetailAdamouaComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientAdamaoua
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api6:ApiService6Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api6.getRegisteredPatientAdamaouaId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }

}
