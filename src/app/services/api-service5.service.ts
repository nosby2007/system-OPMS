import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientEst } from '../models/userEst.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService5Service {
  private baseUrl:string = 'http://localhost:3000/patientEst'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj: PatientEst){
    return this.http.post<PatientEst>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredPatientEst(){
    return this.http.get<PatientEst[]>(`${this.baseUrl}`)
  }

  updateRegisterPatientEst(registerObj: PatientEst, id:number){
    return this.http.put<PatientEst>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegisterEst(id:number){
    return this.http.delete<PatientEst>(`${this.baseUrl}/${id}`)
  }
  getRegisteredPatientEstId(id: number){
    return this.http.get<PatientEst>(`${this.baseUrl}/${id}`,) }
}
