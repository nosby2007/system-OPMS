import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientSud } from '../models/userSud.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService4Service {
  private baseUrl:string = 'http://localhost:3000/patientSud'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj: PatientSud){
    return this.http.post<PatientSud>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredPatientSud(){
    return this.http.get<PatientSud[]>(`${this.baseUrl}`)
  }

  updateRegisterPatientSud(registerObj: PatientSud, id:number){
    return this.http.put<PatientSud>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegisterSud(id:number){
    return this.http.delete<PatientSud>(`${this.baseUrl}/${id}`)
  }
  getRegisteredPatientSudId(id: number){
    return this.http.get<PatientSud>(`${this.baseUrl}/${id}`,) }
}
