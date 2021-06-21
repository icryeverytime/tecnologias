import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public myId=localStorage.getItem('IDEmpresa');
  constructor(private http: HttpClient) { }
  public data:any = [];
  ngOnInit(): void {
    this.data=[];
    const url='http://localhost:5000/getvacante/'+this.myId;
    console.log(url);
    this.http.get(url).subscribe((res)=>{
      this.data =res;
      console.log(this.data);
    });
  }
  url='http://localhost:5000/borrar';
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
