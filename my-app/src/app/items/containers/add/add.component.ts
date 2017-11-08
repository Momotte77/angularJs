import { Component, OnInit } from '@angular/core';
import { Item } from '../../interface/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _CollectionService: CollectionService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  addItem(newIten: Item) {
    this._CollectionService.add(newIten);
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'felicidad : un méchant est invoqué';
    modalRef.componentInstance.route = 'list';
  }
}
