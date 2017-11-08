import { Component, OnInit, OnChanges } from '@angular/core';
import { Item } from '../../interface/item.model';
import { State } from '../../enum/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-liste-items',
  templateUrl: './liste-items.component.html',
  styleUrls: ['./liste-items.component.scss']
})
export class ListeItemsComponent implements OnInit, OnChanges {
  collection: Item[];
  state = State;

  constructor(private _CollectionService: CollectionService) {}

  ngOnChanges(): void {
    this.collection.sort(function(a, b){
      if (a.state < b.state) {
        return 1;
      }
      if (a.state > b.state) {
        return -1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
