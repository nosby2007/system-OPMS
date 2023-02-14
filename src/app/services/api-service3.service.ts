import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientOuest } from '../models/userOuest.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService3Service {
  private baseUrl:string = 'http://localhost:3000/patientOuest'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj: PatientOuest){
    return this.http.post<PatientOuest>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredPatientOuest(){
    return this.http.get<PatientOuest[]>(`${this.baseUrl}`)
  }

  updateRegisterPatientOuest(registerObj: PatientOuest, id:number){
    return this.http.put<PatientOuest>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegisterOuest(id:number){
    return this.http.delete<PatientOuest>(`${this.baseUrl}/${id}`)
  }
  getRegisteredPatientOuestId(id: number){
    return this.http.get<PatientOuest>(`${this.baseUrl}/${id}`,) }
}
