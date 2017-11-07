import { Component, OnInit, OnChanges } from '@angular/core';
import { COLLECTION } from '../../collections';
import { Item } from '../../interface/item.model';
import { State } from '../../enum/state.enum';

@Component({
  selector: 'app-liste-items',
  templateUrl: './liste-items.component.html',
  styleUrls: ['./liste-items.component.scss']
})
export class ListeItemsComponent implements OnInit, OnChanges {
  collection: Item[] = COLLECTION;
  state = State;

  constructor() {}

  ngOnChanges(): void {
    this.collection.sort(function(a, b){
      if (a.state < b.state) {
        return -1;
      }
      if (a.state > b.state) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {}

}
