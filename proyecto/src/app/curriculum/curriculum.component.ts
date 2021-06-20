import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgMetro4Module } from 'ng-metro4';
import { DialogComponent } from 'ng-metro4';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  public myId=localStorage.getItem('ID');
  constructor(private http:HttpClient) { 
    
  }
  url='http://localhost:5000/curriculum';
  json:any;
  data:any;
  greeter:any;
  ngOnInit(): void {
    var id=JSON.parse(localStorage.getItem('ID') || '{}');
  
  }
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
