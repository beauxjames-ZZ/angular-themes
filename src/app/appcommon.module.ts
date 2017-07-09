import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { MastheadComponent } from './masthead/masthead.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [  ],
  declarations: [
    NavComponent,
    MastheadComponent,
    BodyComponent
  ],
  exports: [
    NavComponent,
    MastheadComponent,
    BodyComponent
  ]
})

export class AppCommonModule { }
