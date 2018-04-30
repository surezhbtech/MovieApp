import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data';
import { AppService } from './app.service';
import { AppData } from './appInterface';
import { } from '@types/googlemaps';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appData: AppData[] = [];
  constructor( private appService: AppService) { }

  ngOnInit() {
    this.getAppData();
  }

  getAppData(): void {
    const FeatureMovies = ['Jumanji: Welcome to the Jungle', 'Avengers: Infinity War'];
    FeatureMovies.map(title => {
    this.appService.searchByTilteAndPlot(title, 'full')
      .subscribe(data => {
        console.log(data);
        this.appData.push(data);
        console.log(this.appData);
      });
    });
  }
}
