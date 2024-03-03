import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudent() {
    return this.http.get(`${this.apiUrl}/home`);
  }

  addMarks(
    courseName: any,
    examinationDate: any,
    examinationTime:any,
    marksObtained: any,
    maxMarks: any
  ) {
    const body = {
      courseName,
      examinationDate,
      examinationTime,
      marksObtained,
      maxMarks,
    };

    return this.http.post(`${this.apiUrl}/post`, body);
  }
}
