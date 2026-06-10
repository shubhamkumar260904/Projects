import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit  implements OnInit {
   student: any = {};
   message:string='';
  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private router: Router,
     private cdr: ChangeDetectorRef
  ) {}

 ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id'); // string

  this.service.getById(id!).subscribe(res => {
    this.student = res;
    this.cdr.detectChanges();
  });
}

  update() {
    this.service.update(this.student.id, this.student).subscribe(() => {
      // alert('Edited Successfully')
      this.message='Details have been updated'
      this.cdr.detectChanges();
      setTimeout(()=>{
        this.message='';
        this.router.navigate(['/']);//below after detectchanges before pop-up
      },1000)
    });
  }
}
