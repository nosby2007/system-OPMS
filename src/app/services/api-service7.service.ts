import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientNord } from '../models/userNord.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService7Service { private baseUrl:string = 'http://localhost:3000/patientNord'

constructor(private http:HttpClient) { }

postRegistration(registerObj: PatientNord){
  return this.http.post<PatientNord>(`${this.baseUrl}`, registerObj)
}
getRegisteredPatientNord(){
  return this.http.get<PatientNord[]>(`${this.baseUrl}`)
}

updateRegisterPatientNord(registerObj: PatientNord, id:number){
  return this.http.put<PatientNord>(`${this.baseUrl}/${id}`, registerObj)
}
deleteRegisterNord(id:number){
  return this.http.delete<PatientNord>(`${this.baseUrl}/${id}`)
}
getRegisteredPatientNordId(id: number){
  return this.http.get<PatientNord>(`${this.baseUrl}/${id}`,) }
}
