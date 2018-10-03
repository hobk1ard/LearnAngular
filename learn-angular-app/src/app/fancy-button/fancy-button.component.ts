import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.css']
})
export class FancyButtonComponent{
  @Input() label:string
  @Output() onClick = new EventEmitter();

  buttonPressed = () => {
    this.onClick.emit();
  }
}
