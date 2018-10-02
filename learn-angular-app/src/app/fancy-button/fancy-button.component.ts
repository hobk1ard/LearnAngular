import { Component, Input } from '@angular/core';

@Component({
  selector: 'fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.css']
})
export class FancyButtonComponent{
  @Input() label:string
  @Input() message:string
  onClick = () => {
    alert(this.message);
  }
}
