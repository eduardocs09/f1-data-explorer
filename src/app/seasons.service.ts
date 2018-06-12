import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor() { }

  getSeasons() {
    return  [2018, 2017, 2016, 2015];
  }
}
