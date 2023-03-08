import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsComponent } from './students/students.component';
import { AddStundetComponent } from './add-stundet/add-stundet.component';
import { FormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsComponent,
    AddStundetComponent,
    DeleteStudentComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
