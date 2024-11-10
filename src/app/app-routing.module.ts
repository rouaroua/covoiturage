import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { FindComponent } from './find/find.component';


const routes: Routes = [
  { path: '', component: BodyComponent },  
  {path:'login',component:LoginComponent},
  { path: 'welcome', component: WelcomePageComponent },  
  { path: 'signup', component: SignupComponent },  
  { path: 'upload', component: UploadComponent },  
  { path: 'find', component: FindComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
