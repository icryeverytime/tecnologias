import { Component, Input, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  public myId=localStorage.getItem('ID');
  public nombre=localStorage.getItem('name');
  public correo=localStorage.getItem('correo');
  public data:any = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.data=[];
    const url='http://localhost:5000/getvacante';
    this.http.get(url).subscribe((res)=>{
      this.data =res;
      console.log(this.data);
    });
  }
  url='http://localhost:5000/interesado';
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
    
  
}
