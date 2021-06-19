import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  postData={
    name: "chris",
    email: "christianantonio12322@gmail.com",
    contra: "12345678",
    fecha: "04/09/1999",
    activo: "active"
  };
  url='http://localhost:5000/registro';
  json:any;
  data:any;
  constructor(private http: HttpClient) {
  } 

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
