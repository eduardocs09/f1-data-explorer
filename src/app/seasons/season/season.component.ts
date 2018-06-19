import { Component, OnInit, Input } from '@angular/core';

import { Season } from './../shared/season.model';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  @Input('season') season: Season;

  constructor() { }

  ngOnInit() {
  }

}
