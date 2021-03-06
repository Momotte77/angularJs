import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CollectionService } from './services/collection/collection.service';
import { CoreRoutingModule } from './core-routing.module';
import { environment } from '../../environments/environment.prod';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule   // imports firebase/auth, only needed for auth features
  ],
  declarations: [HomeComponent, PageNotFoundComponent],
  exports: [HomeComponent, PageNotFoundComponent],
  providers: [CollectionService]
})
export class CoreModule { }
