import { Component, OnInit } from '@angular/core';
import { JocService } from 'src/app/services/joc.service';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {
  llistaJocs:any;
  
  constructor( private jocservice:JocService) { 
    this.jocservice.getJocs().subscribe(data=>{
    this.llistaJocs=data;
    });
  }

  ngOnInit(): void {
  }

}
