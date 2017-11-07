import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../../items/enum/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input ('appState') appState: State;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {
    console.log(this.appState);
    this._Renderer2.addClass(this._ElementRef.nativeElement, `state-${this.appState}`);
    switch (this.appState) {
      case State.ALIVRER:
        this._ElementRef.nativeElement.innerHTML = 'A livrer';
      break;
      case State.ENCOURS:
      this._ElementRef.nativeElement.innerHTML = 'En cours';
      break;
      case State.DELIVREE:
      this._ElementRef.nativeElement.innerHTML = 'délivrée';
      break;
      default:
      console.log(`oups!!!! ${this.appState}`);
      this._ElementRef.nativeElement.innerHTML = 'oupss!!!! perdu!!!';
      this._Renderer2.addClass(this._ElementRef.nativeElement, `state-error`);
    }

  }

}
