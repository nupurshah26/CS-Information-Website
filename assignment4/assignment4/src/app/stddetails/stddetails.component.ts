/* AUTHOR: Nupur Shah
    Student details components
*/
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { StudentComponent } from '../student/student.component';
import { Student } from '../student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stddetails',
  templateUrl: './stddetails.component.html',
  styleUrls: ['./stddetails.component.css']
})
export class StddetailsComponent implements OnInit {

  constructor(private studentService: StudentServiceService, private route: ActivatedRoute) { }
  student: Student;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.studentService.getStdDetail(this.id).subscribe((student: Student) => {
        this.student = student;
      });
    });
  }
}
