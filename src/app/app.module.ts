
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
} from '@angular/material';

import { DataTableModule } from 'angular2-datatable';

import { NvD3Module } from 'angular2-nvd3';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppRoutingModule } from './app.routing';

import { APP_CONFIG, APP_DI_CONFIG } from './app-config/app-config.constants';

import {
    AlertService,
    AuthenticationService,
    UserService,
    DashboardService,
    AppUtil,
    SubscriptionService
} from './_services/index';

import { AppComponent } from './app.component';

import { HomeLayoutComponent } from './components/layouts/home-layout.component';
import { LoginLayoutComponent } from './components/layouts/login-layout.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './components/_home/index';
import { LoginComponent } from './components/_login/index';
import { RegisterComponent } from './components/_register/index';
import { HeaderComponent } from './components/_header/_header.component';
import { SubscriptionComponent } from './components/_subscription/index';

import { DashboardReportComponent } from './components/_dashboard-report/_dashboard-report.component';
import { DataFilterPipe } from './components/_dashboard-report/_data-filter.pipe';

import { EngagementComponent } from './components/_dashboard-report/engagement/engagement.component';
import { ReferralStatusComponent } from './components/referral-status/referral-status.component';
import { ReferralFilterPipe } from './components/referral-status/_referral-filter.pipe';
import { UserOrgComponent } from './components/user-org/user-org.component';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        NvD3Module,
        DataTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        AppComponent,
        HomeLayoutComponent,
        LoginLayoutComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        DashboardReportComponent,
        DataFilterPipe,
        ReferralFilterPipe,
        EngagementComponent,
        SubscriptionComponent,
        ReferralStatusComponent,
        UserOrgComponent
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
        MockBackend,
        SubscriptionService,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
