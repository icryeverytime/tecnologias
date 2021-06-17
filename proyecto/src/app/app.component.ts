import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto';
  public data:any = [];
  public p:any=[];
 constructor(private http: HttpClient) { 
 }
  getData(){
    const url='http://localhost:5000/getData';
    this.http.get(url).subscribe((res)=>{
      this.data =res;
      console.log(this.data);
      let p;
      const nombre=this.data.name.map(p=>p.name);
      sessionStorage.setItem('login',JSON.stringify(nombre));
    })
  }
  ngOnInit(){
    
  }

}
