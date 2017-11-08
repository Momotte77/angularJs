import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interface/item.model';
import { State } from '../../enum/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interface/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input  ('item') item: ItemId;
  etat= State;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState(item: ItemId): void {
    item.state = item.state + 1;
    this._CollectionService.update(item);
  }

  delete(item: ItemId): void {
    this._CollectionService.delete(item);
  }

}
