import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards = [  

    { title: 'Card 1', cols: 2, rows: 1 },  

    { title: 'Card 2', cols: 1, rows: 1 },  

    { title: 'Card 3', cols: 1, rows: 2 },  

    { title: 'Card 4', cols: 1, rows: 1 }  

  ];  

}
