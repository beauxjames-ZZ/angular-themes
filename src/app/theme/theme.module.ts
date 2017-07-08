import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeComponent } from './theme.component';

import { Theme01Component } from './theme01/theme01.component';
import { Theme02Component } from './theme02/theme02.component';
import { Theme03Component } from './theme03/theme03.component';

const routes = [
  {
    path: '',
    component: ThemeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [
    ThemeComponent,
    Theme01Component,
    Theme02Component,
    Theme03Component
  ],
  exports: [
    ThemeComponent
  ],
  entryComponents: [
    Theme01Component,
    Theme02Component,
    Theme03Component
  ]
})

export class ThemeModule { }
