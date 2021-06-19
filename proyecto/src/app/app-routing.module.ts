import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PrincipaleComponent } from './principale/principale.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'principale-component', component: PrincipaleComponent },
  { path: 'frontpage-component', component: FrontpageComponent},
   { path: 'register-component', component: RegisterComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
