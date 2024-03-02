import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { TrabajosComponent } from './components/trabajos recientes/trabajos.component';
import { DescripcionComponent } from './components/Servicios/descripcion.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideBarComponent } from './components/SideBar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuiensoyComponent,
    TrabajosComponent,
    DescripcionComponent,
    FooterComponent,
    NavbarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   BrowserAnimationsModule,
   MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
