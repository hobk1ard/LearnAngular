import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckboxComponent } from './fancy-checkbox/fancy-checkbox.component';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent,
    FancyCheckboxComponent,
    FancyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
