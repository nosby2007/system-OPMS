import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientSudouest } from '../models/userSudouest.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService9Service { private baseUrl:string = 'http://localhost:3000/patientSudouest'

constructor(private http:HttpClient) { }

postRegistration(registerObj: PatientSudouest){
  return this.http.post<PatientSudouest>(`${this.baseUrl}`, registerObj)
}
getRegisteredPatientSudouest(){
  return this.http.get<PatientSudouest[]>(`${this.baseUrl}`)
}

updateRegisterPatientSudouest(registerObj: PatientSudouest, id:number){
  return this.http.put<PatientSudouest>(`${this.baseUrl}/${id}`, registerObj)
}
deleteRegisterSudouest(id:number){
  return this.http.delete<PatientSudouest>(`${this.baseUrl}/${id}`)
}
getRegisteredPatientSudouestId(id: number){
  return this.http.get<PatientSudouest>(`${this.baseUrl}/${id}`,) }
}
