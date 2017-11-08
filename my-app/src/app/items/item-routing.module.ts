import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListeItemsComponent } from './containers/liste-items/liste-items.component';
import { AddComponent } from './containers/add/add.component';

const itemRoutes: Routes = [
  { path: 'list', component: ListeItemsComponent },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      itemRoutes
    )
    // other imports here
  ],
})
export class ItemRoutingModule { }
