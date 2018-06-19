import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsComponent } from './seasons.component';
import { SeasonComponent } from './season/season.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SeasonsComponent,
    SeasonComponent
  ],
  exports: [
    SeasonsComponent
  ]
})
export class SeasonsModule { }
