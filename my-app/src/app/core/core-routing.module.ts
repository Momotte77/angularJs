import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      coreRoutes
    )
    // other imports here
  ]
})
export class CoreRoutingModule { }
