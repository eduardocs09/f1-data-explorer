import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Season } from './season.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  seasonsUrl = 'https://ergast.com/api/f1/seasons.json?limit=1000';
  driverStandingsUrl = 'https://ergast.com/api/f1/driverStandings/1.json?limit=1000';
  constructorStandingsUrl = 'https://ergast.com/api/f1/constructorStandings/1.json?limit=1000';

  constructor(private http: HttpClient) { }

  getSeasons() {
    return this.http.get(this.seasonsUrl);
  }

  getDriverStandings() {
    return this.http.get(this.driverStandingsUrl);
  }

  getConstructorStandings() {
    return this.http.get(this.constructorStandingsUrl);
  }
}
