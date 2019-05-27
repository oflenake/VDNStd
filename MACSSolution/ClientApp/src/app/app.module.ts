import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { MacsHomeComponent } from './macs-home/macs-home.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NaviMenuComponent } from './navi-menu/navi-menu.component';
import { RegisterComponent } from './register/register.component';
import { LogOnComponent } from './log-on/log-on.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { RegisterAccountComponent } from './register/register-account/register-account.component';
import { RegisterProfileComponent } from './register/register-profile/register-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MacsSearchComponent } from './macs-search/macs-search.component';
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
    ContactUsComponent,
    FaqComponent,
    MacsHomeComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NaviMenuComponent,
    RegisterComponent,
    LogOnComponent,
    DashboardComponent,
    DashboardDetailComponent,
    RegisterAccountComponent,
    RegisterProfileComponent,
    MessagesComponent,
    MacsSearchComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MacsHomeComponent, pathMatch: 'full' },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'log-on', component: LogOnComponent },
      { path: 'register', component: RegisterComponent },
    ]),
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
