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
  
  public data:any = [];
 constructor(private http: HttpClient) { 
 }
  getData(){
    const url='http://localhost:5000/getData';
    this.http.get(url).subscribe((res)=>{
      this.data =res;
      console.log(this.data);
      let p;

    })
  }
  ngOnInit(){
    
  }

}
