import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-publicarvacante',
  templateUrl: './publicarvacante.component.html',
  styleUrls: ['./publicarvacante.component.css']
})
export class PublicarvacanteComponent implements OnInit {
public myId=localStorage.getItem('IDEmpresa');
public country=localStorage.getItem('paisEmpresa');
public correo=localStorage.getItem('correoEmpresa');
  json:any;
  data:any;
  resutl:any;
  constructor(private http:HttpClient) { }
  url='//localhost:5000/vacante';
  ngOnInit(): void {
    if(localStorage.getItem("ID")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=true;      
    }
    if(localStorage.getItem("IDempresa")!=null){
      (<HTMLInputElement> document.getElementById("botoncito")).disabled=false;
    } 
  }
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
        
  }
  
}
