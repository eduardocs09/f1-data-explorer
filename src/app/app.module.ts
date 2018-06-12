import { SeasonsService } from './seasons.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeasonComponent } from './season/season.component';
import { SeasonsComponent } from './seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SeasonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
