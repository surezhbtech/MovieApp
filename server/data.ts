/* tslint:disable */
import { AppData } from '../src/app/model/appInterface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  searchByTilte(term) :Observable<AppData> {
    let data = {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "Rated": "R",
      "Released": "14 Oct 1994",
      "Runtime": "142 min",
      "Genre": "Crime, Drama",
      "Director": "Frank Darabont",
      "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
      "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Nominated for 7 Oscars. Another 19 wins & 29 nominations.",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [{
        "Source": "Internet Movie Database",
        "Value": "9.3/10"
      }, {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      }, {
        "Source": "Metacritic",
        "Value": "80/100"
      }],
      "Metascore": "80",
      "imdbRating": "9.3",
      "imdbVotes": "1,929,977",
      "imdbID": "tt0111161",
      "Type": "movie",
      "DVD": "27 Jan 1998",
      "BoxOffice": "N/A",
      "Production": "Columbia Pictures",
      "Website": "N/A",
      "Response": "True"
    };

    const simpleObservable : Observable<AppData> = new Observable((observer) => {

      // observable execution
      observer.next(data)
      observer.complete()
    })

    return simpleObservable;
  }

  searchByTilteAndPlot(term, plot) :Observable<AppData> {
    let data = {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "Rated": "R",
      "Released": "14 Oct 1994",
      "Runtime": "142 min",
      "Genre": "Crime, Drama",
      "Director": "Frank Darabont",
      "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
      "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Nominated for 7 Oscars. Another 19 wins & 29 nominations.",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [{
        "Source": "Internet Movie Database",
        "Value": "9.3/10"
      }, {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      }, {
        "Source": "Metacritic",
        "Value": "80/100"
      }],
      "Metascore": "80",
      "imdbRating": "9.3",
      "imdbVotes": "1,929,977",
      "imdbID": "tt0111161",
      "Type": "movie",
      "DVD": "27 Jan 1998",
      "BoxOffice": "N/A",
      "Production": "Columbia Pictures",
      "Website": "N/A",
      "Response": "True"
    };

    const simpleObservable : Observable<AppData> = new Observable((observer) => {

      // observable execution
      observer.next(data)
      observer.complete()
    })

    return simpleObservable;
  }
}
