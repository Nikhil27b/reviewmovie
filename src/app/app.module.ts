import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from "../environments/environment"
//Form and HTTP
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



//Componets

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboradComponent } from './componets/dashborad/dashborad.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExploreComponent } from './componets/explore/explore.component';
import { SerachComponent } from './layout/serach/serach.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PagenotfoundComponent,
    FooterComponent,
    HeaderComponent,
    ExploreComponent,
    SerachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
