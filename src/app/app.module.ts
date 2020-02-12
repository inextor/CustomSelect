import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CallerComponent } from './caller/caller.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    CallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
