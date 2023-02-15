import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientNordouest } from '../models/userNordouest.model';
import { ApiService10Service } from '../services/api-service10.service';

@Component({
  selector: 'app-registration-nordouest',
  templateUrl: './registration-nordouest.component.html',
  styleUrls: ['./registration-nordouest.component.scss']
})
export class RegistrationNordouestComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientNordouest>;
  public patient!: PatientNordouest[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api10:ApiService10Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientNordouest();
  }
  
  getPatientNordouest(){
    this.api10.getRegisteredPatientNordouest().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editNordouest(id:number){
    this.router.navigate(['updatenordouest', id]);
  }

  deleteNordouest(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api10.deleteRegisterNordouest(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientNordouest();
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
