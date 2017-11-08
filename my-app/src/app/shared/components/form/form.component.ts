import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { State } from '../../../items/enum/state.enum';
import { Item } from '../../../items/interface/item.model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  state = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  @Output() currentItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.nameCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.refCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = this.fb.control(this.state.ALIVRER);

    this.form = this.fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {}

  process() {
    console.log(this.form.value);
    // this.collection.push({
    //  name: this.nameCtrl.value,
    //  reference: this.refCtrl.value,
    //  state: this.stateCtrl.value
    // });
    // ou alors ....
    //   this.collection.push({
    //     name: this.form.get('name').value,
    //     reference: this.form.get('ref').value,
    //     state: this.form.get('state').value});
    this.currentItem.emit( {
      name: this.nameCtrl.value,
      reference: this.refCtrl.value,
      state: this.stateCtrl.value
    });

    this.reset();
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(this.state.ALIVRER);
  }

    isError(champ: string) {
      return this.form.get(champ).touched && this.form.get(champ).hasError('minlength');
    }
}
