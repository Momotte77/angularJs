import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ItemsModule } from './items/items.module';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    CoreModule,
    ItemsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
