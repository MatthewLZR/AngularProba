import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joc } from '../models/joc.model';

@Injectable({
  providedIn: 'root'
})
export class JocService {

  constructor(private http: HttpClient) { }

  getJocs():Observable<Joc[]> {
    const URL= "http://localhost:3000/game";
    return this.http.get<Joc[]>(URL);
  }
  getJoc(id:number):Observable<Joc>{
    const URL= "http://localhost:3000/game/"+id;
    return this.http.get<Joc>(URL);
  }
}
