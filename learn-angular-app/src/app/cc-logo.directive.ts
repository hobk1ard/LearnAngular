import { Directive, HostBinding, Input } from '@angular/core';
import { $ } from 'protractor';

@Directive({
  selector: '[appCcLogo]'
})
export class CcLogoDirective {
  @HostBinding('src') imageSrc;
  @HostBinding('hidden') isHidden: boolean;
  @Input() ccNumber: string = "";
  
  constructor() { }
  
  getCCType(): string {
    let startsWith = this.ccNumber.slice(0,1);
    switch (startsWith) {
      case "4":
        return "visa";
      case "5":
        return "mastercard";
      case "3":
        return "amex";
      default:
        return undefined;
    }
  }

  ngOnChanges() {
    const ccType = this.getCCType();

    this.isHidden = ccType == undefined;
    this.imageSrc = `assets/${ccType}.png`;
  }
}
