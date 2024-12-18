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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    WelcomePageComponent,
    LoginComponent,
    SignupComponent,
    UploadComponent,
    FindComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ], 
  providers: [
    provideHttpClient(withFetch()) // Ajoutez la configuration de HttpClient ici
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
