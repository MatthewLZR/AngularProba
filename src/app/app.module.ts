import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistaComponent } from './components/llista/llista.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { IniciComponent } from './components/inici/inici.component';
import { JocComponent } from './components/joc/joc.component';


@NgModule({
  declarations: [
    AppComponent,
    LlistaComponent,
    IniciComponent,
    JocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
