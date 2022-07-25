import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from '../assets/Components/display/display.component';
import { ButtonFieldComponent } from '../assets/Components/button-field/button-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
