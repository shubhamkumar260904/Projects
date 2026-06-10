import { ChangeDetectorRef, Component } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
   student = { name: '', age: '', course: '' };
   message='';
  constructor(
    private service: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  save() {
    this.service.create(this.student).subscribe(() => {
      // alert("Student added successfully");
      this.message='Student added successfully';
      this.cdr.detectChanges();
      setTimeout(()=>{
        this.message='';
         this.router.navigate(['/']);
      },2000);
     
    });
  }
}
