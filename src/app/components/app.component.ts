import {Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { AppData } from '../model/appInterface';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appData: Observable<AppData>[];
  movieDetails: AppData;
  constructor( private appService: AppService) { }

  ngOnInit() {
    this.getAppData();
  }

  getAppData(): void {
    const FeatureMovies = ['Jumanji: Welcome to the Jungle', 'Avengers: Infinity War'];
    this.appData = FeatureMovies.map(title => this.appService.searchByTilteAndPlot(title, 'full'));
  }

  onSearch (movieData: AppData) {
    this.movieDetails = movieData;
  }
}
