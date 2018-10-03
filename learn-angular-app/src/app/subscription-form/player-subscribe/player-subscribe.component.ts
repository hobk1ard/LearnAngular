import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-subscribe',
  templateUrl: './player-subscribe.component.html',
  styleUrls: ['./player-subscribe.component.css']
})
export class PlayerSubscribeComponent implements OnInit {
  players = [
    {name: "LeBron James", value: true},
    {name: "Lioonel Messi", value: false},
    {name: "Manny Pacquiao", value: false} ];
  constructor() { }

  ngOnInit() {
  }

}
