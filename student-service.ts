import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private api='http://localhost:3000/students';
  
  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<any[]>(this.api);
  }
  getById(id:string){
    return this.http.get<any>(`${this.api}/${id}`);
  }

  create(data:any){
    return this.http.post(this.api,data);
  }

  update(id:string, data:any){
    return this.http.put(`${this.api}/${id}`,data);
  }

  delete(id:string){
    return this.http.delete(`${this.api}/${id}`);
  }
}
