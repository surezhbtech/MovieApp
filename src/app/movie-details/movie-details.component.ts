import { Component, OnInit, Input } from '@angular/core';
import { AppData } from '../appInterface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieDetails: AppData = <AppData>{};
  @Input() plot: string ;

  constructor() { }

  ngOnInit() {

  }

}
