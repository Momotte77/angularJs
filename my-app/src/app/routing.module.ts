import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeItemsComponent } from './items/containers/liste-items/liste-items.component';
import { AddComponent } from './items/containers/add/add.component';

const appRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class RoutingModule { }
