import { Injectable } from '@angular/core';

import { Item } from '../../../items/interface/item.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../items/interface/item-id.model';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    // this.collection = this.itemsCollection.valueChanges();
    this.collection = this.itemsCollection.snapshotChanges().map(data => {
      return data.map(item => {
        return {
          name: item.payload.doc.data().name,
          reference: item.payload.doc.data().reference,
          state: item.payload.doc.data().state,
          id: item.payload.doc.id
        };
      });
    });
    // this.collection.subscribe((data) => console.log(data));
   }

  add(item: Item): void {
    // this.collection.push(item);
    this.itemsCollection.add(item);
  }

  update(item: ItemId): void {
    console.log(item);
    this.afs.doc<Item>('collection/' + item.id).update(item);
  }

  delete(item: ItemId): void {
    this.afs.doc<Item>('collection/' + item.id).delete();
  }
}
