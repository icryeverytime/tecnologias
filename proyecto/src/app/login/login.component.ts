import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';
import { EMPTY } from 'rxjs';
import { FormControl,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient
              
    ) { }

  postData={
    correo: "christianantonio12322@gmail.com",
    contra: "123456"
  }
  url='http://localhost:5000/login';
  json:any;
  data:any;
  greeter:any;

  ngOnInit(): void {
   
  }
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      let json=JSON.parse(result);
      console.log("result",json);
      console.log(json.idcuenta);
      console.log(json.name);
      console.log(json.correo);
      localStorage.setItem("ID",json.idcuenta);
      localStorage.setItem("name",json.name);
      localStorage.setItem("correo",json.correo);
    
    });
    var currentUser = localStorage.getItem('name')!;
    document.getElementById("mostrarnombre")!.innerHTML=currentUser;
    if(localStorage.getItem("name")===null){
      document.getElementById("mostrarnombre")!.innerHTML="";
    }    

    if(localStorage.getItem("ID")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=true;
    }
    if(localStorage.getItem("IDempresa")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=false;
    }

    

  }

  
}
