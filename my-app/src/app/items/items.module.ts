import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';

import { ListeItemsComponent } from './containers/liste-items/liste-items.component';
import { ItemComponent } from './component/item/item.component';
import { AddComponent } from './containers/add/add.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [ListeItemsComponent, ItemComponent, AddComponent],
  exports: [ListeItemsComponent]
})
export class ItemsModule { }
