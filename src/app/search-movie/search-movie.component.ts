import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { DataService } from '../../data';
import { AppData } from '../appInterface';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movieTypes = [
    {value: 'full', viewValue: 'full'},
    {value: 'short', viewValue: 'short'}
  ];
  movieSearchForm: FormGroup;
  movieType = new FormControl(this.movieTypes[1], [Validators.required]);
  searchText = new FormControl('', [Validators.required]);


  movieDetails: Observable<AppData>;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.movieSearchForm = this.fb.group({
      'movieType': this.movieTypes[0].value,
      'searchText': this.searchText
    });
    this.movieDetails = this.movieSearchForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .filter(data => this.movieSearchForm.valid)
      .switchMap(term => this.appService.searchByTilteAndPlot(term.searchText, term.movieType));
  }


  ngOnInit() {

  }


  onSubmit() {
    console.log('Form submitted!');
  }


}
