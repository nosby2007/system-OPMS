import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientSud } from '../models/userSud.model';
import { ApiService4Service } from '../services/api-service4.service';

@Component({
  selector: 'app-user-detail-sud',
  templateUrl: './user-detail-sud.component.html',
  styleUrls: ['./user-detail-sud.component.scss']
})
export class UserDetailSudComponent implements OnInit {
  public UserID!: number
  public userDetails!: PatientSud
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private activatedRoute:ActivatedRoute, private api4:ApiService4Service){}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.UserID= val['id'];
    this.fetchUserDetails(this.UserID);

  })}

  fetchUserDetails(userID:number){
    this.api4.getRegisteredPatientSudId(userID).subscribe(res=>{
      this.userDetails=res;
    })
    

  }
}
