import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { IniciComponent } from './components/dashboard/inici/inici.component';
import { JocComponent } from './components/dashboard/joc/joc.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LlistaComponent } from './components/dashboard/llista/llista.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    JocComponent,
    DashboardComponent,
    LlistaComponent,
    CardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
