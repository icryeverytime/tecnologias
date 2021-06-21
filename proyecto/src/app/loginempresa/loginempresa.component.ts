import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';
import { EMPTY } from 'rxjs';
@Component({
  selector: 'app-loginempresa',
  templateUrl: './loginempresa.component.html',
  styleUrls: ['./loginempresa.component.css']
})
export class LoginempresaComponent implements OnInit {

  constructor(private http:HttpClient) { }
  url='http://localhost:5000/loginE';
  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      let json=JSON.parse(result);
      console.log("result",json);
      console.log(json.idempresa);
      console.log(json.nombreempresa);
      console.log(json.correo);
      localStorage.setItem("IDEmpresa",json.idempresa);
      localStorage.setItem("nameEmpresa",json.nombreempresa);
      localStorage.setItem("correoEmpresa",json.correo);
      localStorage.setItem("paisEmpresa",json.pais);
    
    });
    var currentUser = localStorage.getItem('nameEmpresa')!;
    document.getElementById("mostrarnombre2")!.innerHTML=currentUser;
    if(localStorage.getItem("nameEmpresa")===null){
      document.getElementById("mostrarnombre2")!.innerHTML="";

    }
    if(localStorage.getItem("ID")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=true;
    }
    if(localStorage.getItem("IDempresa")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=false;

    }    



  }
}
