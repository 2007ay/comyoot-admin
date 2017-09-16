import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdTableModule,
  MdTabsModule
} from '@angular/material';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppRoutingModule }        from './app.routing';

import { APP_CONFIG, APP_DI_CONFIG } from "./app-config/app-config.constants";

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AppUtil} from "./utils/appUtil";

import { AppComponent }  from './app.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './components/_home/index';
import { LoginComponent } from './components/_login/index';
import { RegisterComponent } from './components/_register/index';
import { HeaderComponent } from './components/_header/_header.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MdTableModule,
        MdTabsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent
    ],
    providers: [{
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        },
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        AppUtil,

        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
