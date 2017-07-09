import { Component, OnInit } from '@angular/core';

import { Theme01Component } from './theme01/theme01.component';
import { Theme02Component } from './theme02/theme02.component';
import { Theme03Component } from './theme03/theme03.component';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

export class ThemeComponent implements OnInit {

  rnd : number = this.getRandomInt(1,3);
  selectedTheme = this.rnd === 1 ? Theme01Component : this.rnd === 2 ? Theme02Component : Theme03Component;

  constructor() { }

  ngOnInit() {
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
