import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Robert Kinard';
  theirName:string = '';
  theirEmail:string = '';

  // constructor(name:string = '') {
  //   this.name = name;
  //   let arrName:string[] = name.split(' ');
  //   this.email = this.buildEmail(arrName[0], arrName[1]);
  // }

  theirNameChange = () => {
    console.log(this.name);
    let arrName:string[] = this.theirName.split(' ');
    this.theirEmail = this.buildEmail(arrName[0], arrName[1]);
  };

  private buildEmail = function(firstName:string = '', lastName:string = '') {
    if(firstName) {
      return `${firstName}${lastName ? '.' + lastName : ""}@argodata.com`;
    }
    else {
      return "";
    }
  }

  email:string = this.buildEmail('Robert', 'Kinard');
}
