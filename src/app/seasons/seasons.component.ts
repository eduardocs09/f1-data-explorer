import { Component, OnInit } from '@angular/core';

import { Season } from './shared/season.model';
import { SeasonComponent } from './season/season.component';
import { SeasonsService } from './shared/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  lastSeason: Season;
  seasons: Season[];

  constructor(private seasonsService: SeasonsService) { }

  ngOnInit() {
    this.loadSeasons();
  }

  loadSeasons(): void {
    this.seasonsService.getSeasons().subscribe(response => {
      this.seasons = response['MRData'].SeasonTable.Seasons.map(function(season) {
        return { 'year': +season.season };
      });
      this.seasons.sort(function(firstObject: Season, secondObject: Season) {
        return secondObject.year - firstObject.year;
      });
      this.loadDriversStandings();
      this.loadConstructorStandings();
    });

    // this.lastSeason = this.seasons[0];
    // this.seasons.shift();
  }

  loadDriversStandings(): void {
    this.seasonsService.getDriverStandings().subscribe(driverStandingsResponse => {
      driverStandingsResponse['MRData'].StandingsTable.StandingsLists.forEach(element => {
        const year = +element.season;
        const elementIndex = this.seasons.findIndex(x => x.year === year);
        this.seasons[elementIndex].driverWinnerId = element.DriverStandings[0].Driver.driverId;
        this.seasons[elementIndex].driverWinnerName = element.DriverStandings[0].Driver.givenName
          + ' ' + element.DriverStandings[0].Driver.familyName;
      });
    });
  }

  loadConstructorStandings(): void {
    this.seasonsService.getConstructorStandings().subscribe(constructorStandingsResponse => {
      constructorStandingsResponse['MRData'].StandingsTable.StandingsLists.forEach(element => {
        const year = +element.season;
        const elementIndex = this.seasons.findIndex(x => x.year === year);
        this.seasons[elementIndex].constructorWinnerId = element.ConstructorStandings[0].Constructor.constructorId;
        this.seasons[elementIndex].constructorWinnerName = element.ConstructorStandings[0].Constructor.name;
      });
    });
  }
}
