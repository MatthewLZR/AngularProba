import { Component, OnInit } from '@angular/core';
import { Joc } from 'src/app/models/joc.model';
import { JocService } from 'src/app/services/joc.service';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {
  llistaJocs: Joc[] = [];
  
  constructor( private jocservice:JocService) { 
    this.jocservice.getJocs().subscribe(data=>{
    this.llistaJocs=data; 
    });
  }

  ngOnInit(): void {
  }

}
