import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.less']
})
export class DisplayingDataComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  constructor() { }

  ngOnInit(): void {
  }

}
