import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ListeItemsComponent } from './items/containers/liste-items/liste-items.component';
import { AddComponent } from './items/containers/add/add.component';

const appRoutes: Routes = [
  { path: 'items', loadChildren: './items/items.module#ItemsModule'},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}   // prechargement des modules pour optimisation performance
      // { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class RoutingModule { }
