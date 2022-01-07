import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-joc',
  templateUrl: './crear-joc.component.html',
  styleUrls: ['./crear-joc.component.css']
})
export class CrearJocComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onSubmit(data: any): void{
    this.http.post("http://localhost:3000/game",data).subscribe((result=>{
      console.warn('result',result);
    }))
    console.warn(data);
  }
  ngOnInit(): void {
  }

}
