import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Comp2Component } from './Comp2.Component';
import { Comp1Component } from './comp1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Comp1Component, Comp2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
