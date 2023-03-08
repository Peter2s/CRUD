import { Component, Input } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  students:Student[]=[]
  @Input() id:number =-1;
  constructor(public studentService:StudentService){
    this.students = studentService.getAllStudens();
  }
  delete(){
  const studnet:any =  this.studentService.getStundetById(this.id);
  const studentIndex = this.students.indexOf(studnet);
  this.students = this.students.splice(studentIndex,1)
  }
}
