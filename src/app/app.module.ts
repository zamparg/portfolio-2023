import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { TrabajosComponent } from './components/trabajos recientes/trabajos.component';
import { DescripcionComponent } from './components/Servicios/descripcion.component';
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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
