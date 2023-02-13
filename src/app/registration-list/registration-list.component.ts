import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,  } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Patient } from '../models/user.model';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  dataSource!:  MatTableDataSource<Patient>;
  public patient!: Patient[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api:ApiServiceService, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatient();
  }
  
  getPatient(){
    this.api.getRegisteredPatient().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  edit(id:number){
    this.router.navigate(['update', id]);
  }

  delete(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api.deleteRegister(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatient();
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

