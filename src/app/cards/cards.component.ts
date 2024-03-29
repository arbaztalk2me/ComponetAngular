import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() title="";
  @Input() url="";
  @Input() content="";
  @Input() subtitle="";

  constructor() { }

  ngOnInit(): void {
  }

}
