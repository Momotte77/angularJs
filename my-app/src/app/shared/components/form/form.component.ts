import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { State } from '../../../items/enum/state.enum';
import { COLLECTION } from '../../../items/collections';
import { Item } from '../../../items/interface/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  state = State;
  collection = COLLECTION;
  currentItem: Item;

  constructor(private _ROUTER: Router) {}

  ngOnInit() {
    this.currentItem = {
      name: '',
      reference: '',
      state: 0
    };
  }

  process() {
    this.collection.push(this.currentItem);
    this._ROUTER.navigate(['list']);
  }
}
