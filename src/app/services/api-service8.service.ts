import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientExtremenord } from '../models/userExtremenord.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService8Service {
  private baseUrl:string = 'http://localhost:3000/patientExtremenord'

constructor(private http:HttpClient) { }

postRegistration(registerObj: PatientExtremenord){
  return this.http.post<PatientExtremenord>(`${this.baseUrl}`, registerObj)
}
getRegisteredPatientExtremenord(){
  return this.http.get<PatientExtremenord[]>(`${this.baseUrl}`)
}

updateRegisterPatientExtremenord(registerObj: PatientExtremenord, id:number){
  return this.http.put<PatientExtremenord>(`${this.baseUrl}/${id}`, registerObj)
}
deleteRegisterExtremenord(id:number){
  return this.http.delete<PatientExtremenord>(`${this.baseUrl}/${id}`)
}
getRegisteredPatientExtremenordId(id: number){
  return this.http.get<PatientExtremenord>(`${this.baseUrl}/${id}`,) }
}
