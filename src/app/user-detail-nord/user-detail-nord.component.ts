import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientNord } from '../models/userNord.model';
import { ApiService7Service } from '../services/api-service7.service';

@Component({
  selector: 'app-user-detail-nord',
  templateUrl: './user-detail-nord.component.html',
  styleUrls: ['./user-detail-nord.component.scss']
})
export class UserDetailNordComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientNord
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api7:ApiService7Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api7.getRegisteredPatientNordId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
