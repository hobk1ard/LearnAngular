import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckboxComponent } from './fancy-checkbox/fancy-checkbox.component';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { PlayerSubscribeComponent } from './subscription-form/player-subscribe/player-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent,
    FancyCheckboxComponent,
    FancyButtonComponent,
    SubscriptionFormComponent,
    PlayerSubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
