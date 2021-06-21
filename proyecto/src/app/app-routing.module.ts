import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PolizasComponent } from './polizas/polizas.component';
import { PrincipaleComponent } from './principale/principale.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { LoginempresaComponent } from './loginempresa/loginempresa.component';
import { RegisterempresaComponent } from './registerempresa/registerempresa.component';
import { PublicarvacanteComponent } from './publicarvacante/publicarvacante.component';


import { RegisterempresaComponent } from './registerempresa/registerempresa.component';
import { LoginempresaComponent } from './loginempresa/loginempresa.component';



const routes: Routes = [
  { path: 'principale-component', component: PrincipaleComponent },
  { path: 'frontpage-component', component: FrontpageComponent},
  { path: 'terminos-servicio-component', component: TerminosServicioComponent},
  { path: 'polizas-component', component: PolizasComponent},
  { path: 'aboutus-component', component: AboutusComponent},
   { path: 'register-component', component: RegisterComponent},
   { path: 'login-component', component: LoginComponent},

   { path: 'loginempresa-component', component: LoginempresaComponent},
   { path: 'registerempresa-component', component: RegisterempresaComponent},
   { path: 'publicarvacante-component', component: PublicarvacanteComponent}

   { path: 'registerempresa-component', component: RegisterempresaComponent},
   { path: 'loginempresa-component', component: LoginempresaComponent},
   { path: 'app-component', component: AppComponent}

  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
