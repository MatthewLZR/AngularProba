import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joc } from 'src/app/models/joc';
import { JocService } from 'src/app/services/joc.service';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.css']
})
export class JocComponent implements OnInit {

  title: string;
  genre: string;
  description: string;
  image_url: string;
  id:number;
  //joc:Joc;

  constructor(private  aRoute:ActivatedRoute,private jocService: JocService) { 
   this.title='';
   this.genre='';
   this.description='';
   this.image_url='';
   this.id=Number(this.aRoute.snapshot.paramMap.get('id')!);
   this.jocService.getJoc(this.id).subscribe(data=>{
    this.title=data.title;
    this.genre=data.genre;
    this.description=data.description
    this.image_url=data.image_url;
   })
  }


  ngOnInit(): void {
  }

}
