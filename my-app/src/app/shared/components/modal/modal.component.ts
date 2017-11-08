import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() msg;
  @Input() route;

  constructor(public activeModal: NgbActiveModal, private _ROUTER: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._ROUTER.navigate([this.route]);
  }

}
