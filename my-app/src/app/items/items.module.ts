import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeItemsComponent } from './component/liste-items/liste-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListeItemsComponent],
  exports:[ListeItemsComponent]
})
export class ItemsModule { }
