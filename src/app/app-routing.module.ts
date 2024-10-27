import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: BodyComponent },  // Route par défaut pour le BodyComponent
  { path: 'welcome', component: WelcomePageComponent },// Route pour la page de bienvenue
  { path: 'login', component: LoginComponent },  
  { path: 'signup', component: SignupComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
