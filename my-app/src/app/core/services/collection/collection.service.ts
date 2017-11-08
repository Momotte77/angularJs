import { Injectable } from '@angular/core';

import { COLLECTION } from '../../../items/collections';
import { Item } from '../../../items/interface/item.model';

@Injectable()
export class CollectionService {

  //recup la collection
  collection: Item[] = COLLECTION;

  constructor() { }

  add(item: Item): void {
    this.collection.push(item);
  }

  update(item: Item): void {
    console.log(item);
  }

  delete(item: Item): void {
    //this.collection.
  }

}
