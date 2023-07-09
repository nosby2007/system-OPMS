import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientSud } from '../models/userSud.model';
import { ApiService4Service } from '../services/api-service4.service';

@Component({
  selector: 'app-registration-sud',
  templateUrl: './registration-sud.component.html',
  styleUrls: ['./registration-sud.component.scss']
})
export class RegistrationSudComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientSud>;
  public patient!: PatientSud[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api4:ApiService4Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientSud();
  }
  
  getPatientSud(){
    this.api4.getRegisteredPatientSud().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editSud(id:number){
    this.router.navigate(['updateouest', id]);
  }

  deleteSud(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api4.deleteRegisterSud(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès de la liste du Sud", duration:3000})
      });
      this.getPatientSud();
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
