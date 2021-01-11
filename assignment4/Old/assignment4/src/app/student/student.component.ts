/* AUTHOR: Nupur Shah
    Student component */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: string[]=[];
  student = '';
  likedabtcampus: String[] = [];
  numeric: number=0;
  mean:number=0;
  sum : number=0;
  sd : number=0;
  value : string='';
  data : String[]=[];
  id : String = '';
  name : String ='';
  studentDetails:Student;
  scheduleForm: FormGroup;
  stdArray:Array<String>=[];
  showSimpleAcknowledgement:boolean = false;
  showWinnerAcknowledgement:boolean = false;
  showSuccess = true;

  constructor(private http:HttpClient,private myService:StudentServiceService, private fb: FormBuilder) { }

  get username(): FormControl {
    return this.scheduleForm.get('username') as FormControl;
  }
  get stdid(): FormControl {
    return this.scheduleForm.get('stdid') as FormControl;
  }
  get street(): FormControl {
    return this.scheduleForm.get('street') as FormControl;
  }
  get city(): FormControl {
    return this.scheduleForm.get('city') as FormControl;
  }
  get state(): FormControl {
    return this.scheduleForm.get('state') as FormControl;
  }
  get zip(): FormControl {
    return this.scheduleForm.get('zip') as FormControl;
  }
  get telephone(): FormControl {
    return this.scheduleForm.get('telephone') as FormControl;
  }
  get mail(): FormControl {
    return this.scheduleForm.get('mail') as FormControl;
  }
  get datad(): FormControl {
    return this.scheduleForm.get('data') as FormControl;
  }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      stdid: ['', Validators.required],
      street: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]*')]],
      city: ['', Validators.required],
      state:  ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      telephone:  ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      mail:  ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]],
      websiteaddress:  ['', Validators.required],
      sdate:['',Validators.required],
      highschlgradmonth:[],
      highschlgradyear:[],
      intrestinuni:[],
      likedabtcampus:[],
      additionalcomments: [],
      recos:[],
      data:['',Validators.required],

    },{ updateOn: 'blur' });
    console.log("get students"+this.myService.getStudents());

    this.myService.getStudents().subscribe(
      response =>this.handleSuccessfulResponse(response),
     ); 
  }
  handleSuccessfulResponse(response : any)
  {
      this.students = response;
      console.log("student ids retrieving "+this.students);
  }
  onCheckboxChange(event : any, value : any) {
    if (!event.target.checked) {

      let index = this.likedabtcampus.indexOf(value);

      if (index > -1) {

        this.likedabtcampus.splice(index, 1);
      }
    }
    else {
      this.likedabtcampus.push(value);
    }
  }

  submit():void {
    this.showSuccess = false;
    this.value = this.scheduleForm.value.data;

    this.data = this.value.split(",")
    for(let i=0; i<this.data.length; i++){
      this.numeric= this.numeric + (+this.data[i]);      
    }

    this.mean = this.numeric/(this.data.length)
    console.log("mean is "+this.mean);

    for(let i=0;i<this.data.length;i++){
      this.numeric = +this.data[i] - this.mean;
      this.numeric = this.numeric * this.numeric;
      this.sum = this.sum + this.numeric;
    }
  
    this.sd = Math.sqrt(this.sum/(this.data.length))
    console.log("standard deviation "+this.sd);

    if(this.mean<90){
      this.showSuccess = false;
      this.showSimpleAcknowledgement = true;
    }
    else{
      this.showSuccess = false;
      this.showWinnerAcknowledgement = true;
    }

  console.log("radio"+this.scheduleForm.value.intrestinuni);
  console.log("likeliness"+this.scheduleForm.value.recos);

  this.studentDetails = {
    stdId : this.scheduleForm.value.stdid,
    username : this.scheduleForm.value.username,
    street : this.scheduleForm.value.street,
    city : this.scheduleForm.value.city,
    state : this.scheduleForm.value.state,
    zip : this.scheduleForm.value.zip,
    telephone : this.scheduleForm.value.telephone,
    email : this.scheduleForm.value.mail,
    url : this.scheduleForm.value.websiteaddress,
    likedabtcampus : this.likedabtcampus.join(),
    intinuni : this.scheduleForm.value.intrestinuni,
    sdate : this.scheduleForm.value.sdate,
    highschlgradmonth : this.scheduleForm.value.highschlgradmonth,
    highschlgradyear : this.scheduleForm.value.highschlgradyear,
    recos : this.scheduleForm.value.recos,
    additionalcomments : this.scheduleForm.value.additionalcomments,
    data : this.scheduleForm.value.data
  } 
  console.log(this.studentDetails);
  this.myService.setStudent(this.studentDetails);
  this.myService.setStudent(this.studentDetails).subscribe(
  response => alert("student added successfully")
  );

  }
  onSubmit(): void {
  };

}
