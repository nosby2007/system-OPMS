import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientSudouest } from '../models/userSudouest.model';
import { ApiService9Service } from '../services/api-service9.service';

@Component({
  selector: 'app-registration-sudouest',
  templateUrl: './registration-sudouest.component.html',
  styleUrls: ['./registration-sudouest.component.scss']
})
export class RegistrationSudouestComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientSudouest>;
  public patient!: PatientSudouest[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api9:ApiService9Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientSudouest();
  }
  
  getPatientSudouest(){
    this.api9.getRegisteredPatientSudouest().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editSudouest(id:number){
    this.router.navigate(['updatesudouest', id]);
  }

  deleteSudouest(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api9.deleteRegisterSudouest(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientSudouest();
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
