import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientOuest } from '../models/userOuest.model';
import { ApiService3Service } from '../services/api-service3.service';

@Component({
  selector: 'app-user-detail-ouest',
  templateUrl: './user-detail-ouest.component.html',
  styleUrls: ['./user-detail-ouest.component.scss']
})
export class UserDetailOuestComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientOuest
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api3:ApiService3Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api3.getRegisteredPatientOuestId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
