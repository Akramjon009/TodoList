import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
