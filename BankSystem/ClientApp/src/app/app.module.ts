import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BankHomeComponent } from './bank-home/bank-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { LogOnComponent } from './log-on/log-on.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { RegisterAccountComponent } from './register/register-account/register-account.component';
import { RegisterProfileComponent } from './register/register-profile/register-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { BankSearchComponent } from './bank-search/bank-search.component';
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BankHomeComponent,
    ContactUsComponent,
    RegisterComponent,
    LogOnComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RegisterAccountComponent,
    RegisterProfileComponent,
    DashboardComponent,
    MessagesComponent,
    DashboardDetailComponent,
    BankSearchComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    //HttpClientInMemoryWebApiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BankHomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'log-on', component: LogOnComponent },
    ]),
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
