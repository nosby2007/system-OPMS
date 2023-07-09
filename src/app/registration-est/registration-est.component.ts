import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientEst } from '../models/userEst.model';
import { ApiService5Service } from '../services/api-service5.service';

@Component({
  selector: 'app-registration-est',
  templateUrl: './registration-est.component.html',
  styleUrls: ['./registration-est.component.scss']
})
export class RegistrationEstComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientEst>;
  public patient!: PatientEst[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api5:ApiService5Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientEst();
  }
  
  getPatientEst(){
    this.api5.getRegisteredPatientEst().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editEst(id:number){
    this.router.navigate(['updateest', id]);
  }

  deleteEst(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api5.deleteRegisterEst(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientEst();
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
