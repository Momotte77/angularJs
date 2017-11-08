import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directive/state/state.directive';
import { FormComponent } from './components/form/form.component';


@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [MenuComponent, StateDirective, FormComponent],
  exports: [MenuComponent, StateDirective, FormComponent]
})
export class SharedModule { }
