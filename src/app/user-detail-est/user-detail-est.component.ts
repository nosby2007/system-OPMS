import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientEst } from '../models/userEst.model';
import { ApiService5Service } from '../services/api-service5.service';

@Component({
  selector: 'app-user-detail-est',
  templateUrl: './user-detail-est.component.html',
  styleUrls: ['./user-detail-est.component.scss']
})
export class UserDetailEstComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientEst
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api5:ApiService5Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api5.getRegisteredPatientEstId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
