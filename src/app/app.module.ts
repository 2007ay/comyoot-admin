
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule, MatSelectModule } from '@angular/material';

import { DataTableModule } from "angular2-datatable";

import { NvD3Module } from 'angular2-nvd3'

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppRoutingModule }        from './app.routing';

import { APP_CONFIG, APP_DI_CONFIG } from "./app-config/app-config.constants";

import { AlertService, AuthenticationService, UserService, DashboardService, AppUtil } from './_services/index';

import { AppComponent }  from './app.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './components/_home/index';
import { LoginComponent } from './components/_login/index';
import { RegisterComponent } from './components/_register/index';
import { HeaderComponent } from './components/_header/_header.component';

import { DashboardReportComponent } from './components/_dashboard-report/_dashboard-report.component';
import { DataFilterPipe } from './components/_dashboard-report/_data-filter.pipe';
import { EngagementComponent } from './components/_dashboard-report/engagement/engagement.component';


@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        NvD3Module,
        DataTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        DashboardReportComponent,
        DataFilterPipe,
        EngagementComponent
    ],
    providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        },
        AuthGuard,
        AlertService,
        AppUtil,
        AuthenticationService,
        UserService,
        DashboardService,
        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
