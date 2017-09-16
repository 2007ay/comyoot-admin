import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
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
