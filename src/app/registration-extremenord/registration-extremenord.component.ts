import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientExtremenord } from '../models/userExtremenord.model';
import { ApiService8Service } from '../services/api-service8.service';

@Component({
  selector: 'app-registration-extremenord',
  templateUrl: './registration-extremenord.component.html',
  styleUrls: ['./registration-extremenord.component.scss']
})
export class RegistrationExtremenordComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientExtremenord>;
  public patient!: PatientExtremenord[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api8:ApiService8Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientExtremenord();
  }
  
  getPatientExtremenord(){
    this.api8.getRegisteredPatientExtremenord().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editExtremenord(id:number){
    this.router.navigate(['updateextremenord', id]);
  }

  deleteExtremenord(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api8.deleteRegisterExtremenord(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès", duration:3000})
      });
      this.getPatientExtremenord();
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
