import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Marks } from "../models/marks.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getStudent(){
    return this.http.get(`${this.apiUrl}`)
  }
  
  addMarks(marks: Marks){
    return this.http.post(`${this.apiUrl}`,marks)
  }

}
