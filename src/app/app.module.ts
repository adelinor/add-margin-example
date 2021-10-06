import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnComponentComponent } from './my-own-component/my-own-component.component';
import { MyPanelComponent } from './my-panel/my-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyOwnComponentComponent,
    MyPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
