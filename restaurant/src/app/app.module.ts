import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaladComponent } from './salad/salad.component';
import { BeefComponent } from './beef/beef.component';
import { PastaComponent } from './pasta/pasta.component';
import { PizzaComponent } from './pizza/pizza.component';
import { NabBarComponent } from './nab-bar/nab-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SaladComponent,
    BeefComponent,
    PastaComponent,
    PizzaComponent,
    NabBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
