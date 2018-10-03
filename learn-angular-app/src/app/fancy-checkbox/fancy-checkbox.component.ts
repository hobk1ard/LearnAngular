import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancy-checkbox.component.css"],
    template: "<label><input type='checkbox' (click)='onClick()' [(ngModel)]='checked'/><span></span>{{label}}</label>"
})
export class FancyCheckboxComponent {

    @Input() label: string = "";

    @Input() checked:boolean = false;

    @Output() onChange = new EventEmitter();

    test1:boolean;
    test2:boolean;

    onClick = () => {
        this.checked = !this.checked;
        this.onChange.emit({
            checked: this.checked,
            name: this.label
        })
    };


}