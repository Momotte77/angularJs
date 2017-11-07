import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interface/item.model';
import { State } from '../../enum/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input  ('item') item: Item;
  etat= State;

  constructor() { }

  ngOnInit() {
  }

  changeState(item: Item): void {
    item.state = item.state + 1;
  }

}
