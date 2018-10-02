import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.css']
})
export class FancyButtonComponent{
  onClick() {
    alert("Hey");
  }
}
