import { Component, OnInit } from '@angular/core';
import { JocService } from 'src/app/services/joc.service';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.css']
})
export class JocComponent implements OnInit {

  llistaJocs:any;

  constructor( private jocservice:JocService) { 
    this.jocservice.getJocs().subscribe(data=>{
    this.llistaJocs=data;
    });
  }


  ngOnInit(): void {
  }

}
