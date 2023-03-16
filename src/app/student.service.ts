import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000/students';

  public registerStudent(studentData: any) {
    return this.http.post(this.API, studentData);
  }

  public getStudents() {
    return this.http.get(this.API);
  }

  public deleteStudent(id: number) {
    return this.http.delete(this.API+"/"+ id);
  }

  public updateStudents(student: any,id:any) {
    return this.http.put(this.API+"/"+ id, student);
  }
}
