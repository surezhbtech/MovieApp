import { Component, Input } from '@angular/core';
import { AppData } from '../../model/appInterface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movieDetails: AppData = <AppData>{};
  constructor() { }
}
