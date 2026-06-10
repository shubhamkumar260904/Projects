import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList  implements OnInit {
   students: any[] = [];
   constructor(private service:StudentService,
                 private cdr: ChangeDetectorRef
   ){}

   ngOnInit(){
    this.load();
   }

   load(){
    this.service.getAll().subscribe(res=>{
      this.students=res;
       this.cdr.detectChanges();
    });
   }

   delete(id:string){
    this.service.delete(id).subscribe(()=>{
      this.load();
    });
   }
}
