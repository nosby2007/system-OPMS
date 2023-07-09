import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientNord } from '../models/userNord.model';
import { ApiService7Service } from '../services/api-service7.service';

@Component({
  selector: 'app-registration-nord',
  templateUrl: './registration-nord.component.html',
  styleUrls: ['./registration-nord.component.scss']
})
export class RegistrationNordComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientNord>;
  public patient!: PatientNord[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','gender','profession','region','action']

  constructor( private toast:NgToastService, private api7:ApiService7Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientNord();
  }
  
  getPatientNord(){
    this.api7.getRegisteredPatientNord().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editNord(id:number){
    this.router.navigate(['updateest', id]);
  }

  deleteNord(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api7.deleteRegisterNord(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientNord();
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
