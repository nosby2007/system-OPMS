import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientAdamaoua } from '../models/userAdamaoua.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService6Service {
  private baseUrl:string = 'http://localhost:3000/patientEst'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj: PatientAdamaoua){
    return this.http.post<PatientAdamaoua>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredPatientAdamaoua(){
    return this.http.get<PatientAdamaoua[]>(`${this.baseUrl}`)
  }

  updateRegisterPatientAdamaoua(registerObj: PatientAdamaoua, id:number){
    return this.http.put<PatientAdamaoua>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegisterAdamaoua(id:number){
    return this.http.delete<PatientAdamaoua>(`${this.baseUrl}/${id}`)
  }
  getRegisteredPatientAdamaouaId(id: number){
    return this.http.get<PatientAdamaoua>(`${this.baseUrl}/${id}`,) }
}
