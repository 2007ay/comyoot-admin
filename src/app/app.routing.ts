//https://toddmotto.com/dynamic-page-titles-angular-2-router-events

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/_home/index';
import { LoginComponent } from './components/_login/index';
import { RegisterComponent } from './components/_register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true })],
    exports: [RouterModule],
})

export class AppRoutingModule { }
