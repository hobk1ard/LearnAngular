import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fancy-text',
  templateUrl: './fancy-text.component.html',
  styleUrls: ['./fancy-text.component.css']
})
export class FancyTextComponent {
  @Input() text:string = '';
  @Output() textChange = new EventEmitter();

  onChange() {this.textChange.emit(this.text)}
}
