import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEsCL from '@angular/common/locales/es-CL';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';

import { register } from 'swiper/element/bundle';
import { registerLocaleData } from '@angular/common';

register();
registerLocaleData(localeEsCL, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
