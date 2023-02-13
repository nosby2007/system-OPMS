import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Patient } from '../models/user.model';
import { PatientCentre } from '../models/userCentre.model';
import { ApiServiceService } from '../services/api-service.service';
import { ApiService2Service } from '../services/api-service2.service';

@Component({
  selector: 'app-registration-centre',
  templateUrl: './registration-centre.component.html',
  styleUrls: ['./registration-centre.component.scss']
})
export class RegistrationCentreComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientCentre>;
  public patient!: PatientCentre[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api2:ApiService2Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientCentre();
  }
  
  getPatientCentre(){
    this.api2.getRegisteredPatientCentre().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editCentre(id:number){
    this.router.navigate(['updatecentre', id]);
  }

  deleteCentre(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api2.deleteRegisterCentre(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientCentre();
    },
    ()=>{

    });
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
