import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientCentre } from '../models/userCentre.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService2Service {
  private baseUrl:string = 'http://localhost:3000/patientCentre'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj: PatientCentre){
    return this.http.post<PatientCentre>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredPatientCentre(){
    return this.http.get<PatientCentre[]>(`${this.baseUrl}`)
  }

  updateRegisterPatientCentre(registerObj: PatientCentre, id:number){
    return this.http.put<PatientCentre>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegisterCentre(id:number){
    return this.http.delete<PatientCentre>(`${this.baseUrl}/${id}`)
  }
  getRegisteredPatientCentreId(id: number){
    return this.http.get<PatientCentre>(`${this.baseUrl}/${id}`,) }
}
