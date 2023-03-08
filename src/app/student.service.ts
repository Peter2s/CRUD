import { Injectable } from '@angular/core';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[] = [
    {
      id:10,
      name:"peter",
      age:25
    },
    {
      id:20,
      name:"salah",
      age:55
    }
  ]
  constructor() { }
  getAllStudens():Student[]{
    return this.students;
  }
  getStundetById(id:number): Student | null{
    for (let index = 0; index < this.students.length; index++) {
      if(this.students[index].id == id)
        return this.students[index];
    }
    return null;
  }
  addStudent(student:Student):void{
    this.students.push(student);
  }
  deleteStudent(id:number):void{

  }
}
