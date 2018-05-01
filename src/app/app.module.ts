import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule, MatListModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './components/app.component';
import { AppService } from './services/app.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../server/data';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
    MovieDetailsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'movieApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [ AppService, DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
