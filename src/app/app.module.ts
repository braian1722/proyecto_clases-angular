import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';

import espa from '@angular/common/locales/es';
import espaAR from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(espa);
registerLocaleData(espaAR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
