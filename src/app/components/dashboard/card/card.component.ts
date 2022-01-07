import { Component, Input, OnInit } from '@angular/core';
import { Joc } from 'src/app/models/joc.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() joc!:Joc;
 
  game!: Joc;

  constructor() {
  
   }

  ngOnInit(): void {
    this.game= this.joc;
  }
}
