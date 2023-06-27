import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuiensoyComponent,
    TrabajosComponent,
    DescripcionComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
