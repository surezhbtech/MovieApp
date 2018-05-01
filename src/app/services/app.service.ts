import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppData } from '../model/appInterface';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import 'rxjs/add/operator/filter';

@Injectable()
export class AppService {
  private PORT = 4000;
  private serviceUrl = `http://localhost:${this.PORT}/content`;  // URL to web api


  constructor(private http: HttpClient) { }

  searchByTilte(id: string) {
    return this.http.get<AppData>(`${this.serviceUrl}/${id}`);
  }

  searchByTilteAndPlot(title: string, plot: string) {
    return this.http.get<AppData>(`${this.serviceUrl}/${title}/${plot}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('AppService: ' + message);
  }
}
