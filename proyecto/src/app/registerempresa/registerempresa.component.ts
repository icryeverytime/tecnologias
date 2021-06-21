import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';
@Component({
  selector: 'app-registerempresa',
  templateUrl: './registerempresa.component.html',
  styleUrls: ['./registerempresa.component.css']
})
export class RegisterempresaComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  url='http://localhost:5000/registroempresa';
  json:any;
  data:any;
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
