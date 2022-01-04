import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getJocs():Observable<any>{
  
    const URL="http://localhost:3000/game";
    return this.http.get(URL);
  }

}
