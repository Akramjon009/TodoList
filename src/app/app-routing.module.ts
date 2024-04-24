import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign', pathMatch: 'full'},
  {path: 'sign', component: LoginComponent},
   {path: 'admin', component: AdminPageComponent},
   {path: 'nav', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
