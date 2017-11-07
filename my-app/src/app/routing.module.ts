import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ListeItemsComponent } from './items/containers/liste-items/liste-items.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AddComponent } from './items/containers/add/add.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListeItemsComponent },
  { path: 'add', component: AddComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
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
