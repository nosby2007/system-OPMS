import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientAdamaoua } from '../models/userAdamaoua.model';
import { ApiService6Service } from '../services/api-service6.service';

@Component({
  selector: 'app-registration-adamoua',
  templateUrl: './registration-adamoua.component.html',
  styleUrls: ['./registration-adamoua.component.scss']
})
export class RegistrationAdamouaComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientAdamaoua>;
  public patient!: PatientAdamaoua[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api6:ApiService6Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientAdamaoua();
  }
  
  getPatientAdamaoua(){
    this.api6.getRegisteredPatientAdamaoua().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editAdamaoua(id:number){
    this.router.navigate(['updateadamaoua', id]);
  }

  deleteAdamaoua(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api6.deleteRegisterAdamaoua(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientAdamaoua();
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
