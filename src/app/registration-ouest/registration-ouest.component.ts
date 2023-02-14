import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { PatientOuest } from '../models/userOuest.model';
import { ApiService3Service } from '../services/api-service3.service';

@Component({
  selector: 'app-registration-ouest',
  templateUrl: './registration-ouest.component.html',
  styleUrls: ['./registration-ouest.component.scss']
})
export class RegistrationOuestComponent implements OnInit {
  dataSource!:  MatTableDataSource<PatientOuest>;
  public patient!: PatientOuest[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string [] = ['id','firstName','lastName','email','phone','ordre','date','gender','profession','region','cni','action']

  constructor( private toast:NgToastService, private api3:ApiService3Service, private router:Router, private congirm:NgConfirmService){}
  ngOnInit(): void {
   this.getPatientOuest();
  }
  
  getPatientOuest(){
    this.api3.getRegisteredPatientOuest().subscribe(res=>{
      this.patient=res;
      this.dataSource= new MatTableDataSource(this.patient);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  editOuest(id:number){
    this.router.navigate(['updateouest', id]);
  }

  deleteOuest(id: number){
    this.congirm.showConfirm("Vous êtes sur le point de supprimer un Professionel", 
    ()=>{
      this.api3.deleteRegisterOuest(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Supprimé avec Succès de la liste de l'ouest", duration:3000})
      });
      this.getPatientOuest();
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
