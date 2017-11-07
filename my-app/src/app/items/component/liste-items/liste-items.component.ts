import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collections';
import { Item } from '../../interface/item.model';
import { State } from '../../enum/state.enum';

@Component({
  selector: 'app-liste-items',
  templateUrl: './liste-items.component.html',
  styleUrls: ['./liste-items.component.scss']
})
export class ListeItemsComponent implements OnInit {
  collection: Item[] = COLLECTION;
  state = State;

  constructor() { }

  ngOnInit() {
  }

}
