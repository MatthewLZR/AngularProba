import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JocService {

  constructor(private http: HttpClient) { }

  getJocs():Observable<any>{
    const URL= "http://localhost:3000/game";
    return this.http.get(URL);
  }
  getJoc(id:number):Observable<any>{
    const URL= "http://localhost:3000/game/"+id;
    return this.http.get(URL);
  }
}
