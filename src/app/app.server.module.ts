import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // The ModuleMapLoaderModule is a server-side module that allows lazy-loading of routes.
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
