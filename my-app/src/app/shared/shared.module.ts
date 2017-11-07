import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directive/state/state.directive';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent, StateDirective],
  exports: [MenuComponent, StateDirective]
})
export class SharedModule { }
