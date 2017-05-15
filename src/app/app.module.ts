import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { RelatedPersonComponent } from './related-person/related-person.component';
import { ConsentComponent } from './consent/consent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientDataComponent,
    RelatedPersonComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
