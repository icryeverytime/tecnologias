import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public data:any = [];
  constructor(private http: HttpClient) { }
  public myId=localStorage.getItem('IDEmpresa');
  public nombre=localStorage.getItem('nameEmpresa');
  public correo=localStorage.getItem('correoEmpresa');
  ngOnInit(): void {
    this.data=[];
    const url='http://localhost:5000/getaspirante';
    this.http.get(url).subscribe((res)=>{
      this.data =res;
      console.log(this.data);
    });
  }
  url='http://localhost:5000/interesadoE';
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
