import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joc } from 'src/app/models/joc.model';
import { JocService } from 'src/app/services/joc.service';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.css']
})
export class JocComponent implements OnInit {

  id:number;
  joc!: Joc;

  constructor(private  aRoute:ActivatedRoute,private jocService: JocService) { 
  
   
   this.id=Number(this.aRoute.snapshot.paramMap.get('id')!);
   
   this.jocService.getJoc(this.id).subscribe(data=>{
     this.joc=data;
   
   })
  }


  ngOnInit(): void {
  }

}
