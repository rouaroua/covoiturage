import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    WelcomePageComponent,
    LoginComponent,
    SignupComponent,
    UploadComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    FontAwesomeModule
  ], 
 
  bootstrap: [AppComponent]
})
export class AppModule { }
