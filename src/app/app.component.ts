import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'studentdashboard';

  studentDetails:any;
  studentToUpdate = {
    id:['',Validators.required],
    name:['',Validators.required],
    rollNumber:['',Validators.required],
    address:['',Validators.required],
    percentage:['',Validators.required],
  }


  
  editData: any;

  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }


  
  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm).subscribe(
      (resp) => {
        alert("Data Succesfully added")
        console.log(resp);
        this.getStudentsDetails();
        registerForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student: any) {
    if(confirm("Do you want to delete ?"))
    this.studentService.deleteStudent(student.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
        alert("deleted succesfully")
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  

  // this.api.putProduct(this.productForm.value,this.editData.id)
  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate,this.studentToUpdate.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails()
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // studetails(){
    
  // }








  
  // sattus:boolean=true;
  
  // click(){
  //   let status:string="false"
  //   this.sattus = false;
  //   sessionStorage.setItem("ststus",status)
  // }

}
