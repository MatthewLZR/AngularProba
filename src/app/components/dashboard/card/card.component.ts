import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() joc:any;
  title: string;
  genre: string;
  description: string;
  image_url: string;
  id:number;

  constructor() {
   this.title='';
   this.genre='';
   this.description=''
   this.image_url='';
   this.id=0;
   }

  ngOnInit(): void {
  this.title= this.joc.title;
  this.genre= this.joc.genre;
  this.description= this.joc.description;
  this.image_url= this.joc.image_url;
  this.id= this.joc.id;
  }
}
