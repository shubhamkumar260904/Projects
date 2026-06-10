import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-view',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-view.html',
  styleUrl: './student-view.css',
})
export class StudentView  implements OnInit {
   student: any;

  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id'); // string

  this.service.getById(id!).subscribe(res => {
    this.student = res;
    this.cdr.detectChanges();
  });
}
}
