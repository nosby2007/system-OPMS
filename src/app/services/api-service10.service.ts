import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientNordouest } from '../models/userNordouest.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService10Service { private baseUrl:string = 'http://localhost:3000/patientNordouest'

constructor(private http:HttpClient) { }

postRegistration(registerObj: PatientNordouest){
  return this.http.post<PatientNordouest>(`${this.baseUrl}`, registerObj)
}
getRegisteredPatientNordouest(){
  return this.http.get<PatientNordouest[]>(`${this.baseUrl}`)
}

updateRegisterPatientNordouest(registerObj:PatientNordouest, id:number){
  return this.http.put<PatientNordouest>(`${this.baseUrl}/${id}`, registerObj)
}
deleteRegisterNordouest(id:number){
  return this.http.delete<PatientNordouest>(`${this.baseUrl}/${id}`)
}
getRegisteredPatientNordouestdId(id: number){
  return this.http.get<PatientNordouest>(`${this.baseUrl}/${id}`,) }
}
