import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PrincipaleComponent } from './principale/principale.component';
import { NgMetro4Module } from 'ng-metro4';
import { NgMetro4FormsModule } from 'ng-metro4';
import { NgMetro4BaseModule } from 'ng-metro4';
import { ContactoComponent } from './contacto/contacto.component';
import { RegisterComponent } from './register/register.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';
import { PolizasComponent } from './polizas/polizas.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FrontpageComponent,
    PrincipaleComponent,
    ContactoComponent,    
    RegisterComponent,    
    TerminosServicioComponent, PolizasComponent, AboutusComponent, LoginComponent, CurriculumComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgMetro4Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
