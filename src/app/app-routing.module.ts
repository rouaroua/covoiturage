import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },  // Route par défaut pour le BodyComponent
  { path: 'welcome', component: WelcomePageComponent },  // Route pour la page de bienvenue
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
