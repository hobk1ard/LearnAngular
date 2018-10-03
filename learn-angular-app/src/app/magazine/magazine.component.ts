import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  fullName:string = "";
  editions = [
    {code: 1, name: "US", price: "10.99 USD"},
    {code: 2, name: "Canada", price: "14.99 CAD"},
    {code: 3, name: "International", price: "23.99 USD"},
  ]
  selectedEdition = this.editions[0];
  selectedShipping = "";
  acceptPolicy:boolean = false;

  submitForm() {
    let requestData = {
      customerName: this.fullName,
      productCode: this.selectedEdition.code,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.selectedShipping
    }
    alert(JSON.stringify(requestData))
  }

  constructor() { }

  ngOnInit() {
  }

}
