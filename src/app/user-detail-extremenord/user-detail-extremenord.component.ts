import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientExtremenord } from '../models/userExtremenord.model';
import { ApiService8Service } from '../services/api-service8.service';

@Component({
  selector: 'app-user-detail-extremenord',
  templateUrl: './user-detail-extremenord.component.html',
  styleUrls: ['./user-detail-extremenord.component.scss']
})
export class UserDetailExtremenordComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientExtremenord
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api8:ApiService8Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api8.getRegisteredPatientExtremenordId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
