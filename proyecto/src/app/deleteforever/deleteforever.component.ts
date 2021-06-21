import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-deleteforever',
  templateUrl: './deleteforever.component.html',
  styleUrls: ['./deleteforever.component.css']
})
export class DeleteforeverComponent implements OnInit {
  public myid=localStorage.getItem('IDEmpresa');
  public myid2=localStorage.getItem('ID');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  url='http://localhost:5000/borrarsiempre';
  onSubmit(data:any){
    console.log(data);
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log("result",result);
    });
  }
}
