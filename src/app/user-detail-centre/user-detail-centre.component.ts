import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientCentre } from '../models/userCentre.model';
import { ApiService2Service } from '../services/api-service2.service';

@Component({
  selector: 'app-user-detail-centre',
  templateUrl: './user-detail-centre.component.html',
  styleUrls: ['./user-detail-centre.component.scss']
})
export class UserDetailCentreComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientCentre
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api2:ApiService2Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api2.getRegisteredPatientCentreId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
