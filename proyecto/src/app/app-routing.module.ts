import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PrincipaleComponent } from './principale/principale.component';

const routes: Routes = [
  { path: 'principale-component', component: PrincipaleComponent },
  { path: 'frontpage-component', component: FrontpageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
