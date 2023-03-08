import { Component } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-stundet',
  templateUrl: './add-stundet.component.html',
  styleUrls: ['./add-stundet.component.css']
})
export class AddStundetComponent {
  studentsArray:Student[]=[];
  student:Student |null = null;
  id:number =0;
  name:string ="";
  age:number =0;
  constructor(public students:StudentService ){
    this.studentsArray = students.getAllStudens();
  }
  add($event:any){
    this.student = {
      id:this.id,
      name:this.name,
      age:this.age,
    }
   this.studentsArray.push(this.student)
  }
}
