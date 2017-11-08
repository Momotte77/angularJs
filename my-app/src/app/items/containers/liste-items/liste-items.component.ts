import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../../enum/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../interface/item-id.model';

@Component({
  selector: 'app-liste-items',
  templateUrl: './liste-items.component.html',
  styleUrls: ['./liste-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListeItemsComponent implements OnInit {
  collection: Observable<ItemId[]>;
  state = State;

  constructor(private _CollectionService: CollectionService) {}

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
