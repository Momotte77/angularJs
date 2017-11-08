import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CoreRoutingModule } from './core/core-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
