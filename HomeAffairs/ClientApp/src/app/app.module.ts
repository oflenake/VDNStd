import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { LogOnComponent } from './log-on/log-on.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterAccountComponent } from './register/register-account/register-account.component';
import { RegisterProfileComponent } from './register/register-profile/register-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { fas } from '@fortawesome/free-solid-svg-icons';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
//import { faCalendar } from '@fortawesome/free-regular-svg-icons';
//import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
//import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
//import { bug } from '@falib/icons';
//import { edit } from '@falib/icons';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { bug } from '@fortawesome/free-solid-svg-icons';
//import { edit } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FaqComponent,
    ContactUsComponent,
    RegisterComponent,
    LogOnComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RegisterAccountComponent,
    RegisterProfileComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'log-on', component: LogOnComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    //library.add(faCoffee);
    //library.add(fas);
    // library.add(faTwitter);
    //library.add(faCalendar);
    //library.add(farStar);
    //library.add(fasStar);
    //library.add(bug, edit);
  }
}
