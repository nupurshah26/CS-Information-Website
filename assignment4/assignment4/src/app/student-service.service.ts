/* AUTHOR: Sai Risshie Makineni, Nupur Shah
    Student service to connect with beckend
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private usersUrl: string;
  private studentList:Array<String>=[];
  private std:Array<Student>=[];
  private stdDetail:Student;

  constructor(private http:HttpClient) { }

  getStdDetail(stdid: any){
    return this.http.get<Student>('http://localhost:8080/HW4-0.0.1-SNAPSHOT/students/'+'/'+stdid)
  }
 
  getStudents()
  {
    return this.http.get<Student[]>('http://localhost:8080/HW4-0.0.1-SNAPSHOT/students/');
  }

  setStudent(student: Student){
      const headers = {"Access-Control-Allow-Origin":"*"}
     return this.http.post('http://localhost:8080/HW4-0.0.1-SNAPSHOT/students/', student, {headers});
  }
}
