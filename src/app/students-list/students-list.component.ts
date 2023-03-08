import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],

})
export class StudentsListComponent  implements OnChanges{
  studentsArray:Student[];
  id:number = -1;
  name:string = "";
  age:number=-1;
  updatable:boolean = false;
  updateId:number = -1;
constructor(public students:StudentService ){
  this.studentsArray =students.getAllStudens(); 
}
  ngOnChanges(changes: SimpleChanges): void {
    this.studentsArray =this.students.getAllStudens(); 
    console.log('this.std :>> ', this.studentsArray);
  }
  isUpdateable(id:any){
    console.log(id)
    this.updateId = id;
    this.updatable = true;
  }
  save(id:number){
    const student:any =  this.students.getStundetById(id)
    const studentIndex = this.studentsArray.indexOf(student);
    student[studentIndex] = {
      id:id,
      name:this.name,
      age:this.age
    }
    this.updatable = false;
  }
  show(id:number):any{
    if(!this.updatable) return true;
    else if(this.updatable && id !== this.updateId) return true
    else return false;
  }
  showInput(id:number):any{
    console.log(this.updateId !==  id && this.updatable);
    if(this.updateId ==  id && this.updatable) return true ;
    else return false
  }


}
