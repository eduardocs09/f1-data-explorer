import { SeasonsService } from './../seasons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasons;

  constructor(service: SeasonsService) {
    this.seasons = service.getSeasons();
  }

  ngOnInit() {
  }

}
