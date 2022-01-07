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
import { CrearJocComponent } from './components/dashboard/crear-joc/crear-joc.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    JocComponent,
    DashboardComponent,
    LlistaComponent,
    CardComponent,
    PageNotFoundComponent,
    CrearJocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
