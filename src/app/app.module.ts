import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ], 
 
  bootstrap: [AppComponent]
})
export class AppModule { }
