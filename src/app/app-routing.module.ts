import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginAuthGuard, SecureAuthGuard } from './auth/auth-guard';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './secure/secure.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/interceptor.service';
import { ApiService } from './core/services/api.service';
import { CommonFunctions } from 'src/app/secure/common/common-functions';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [LoginAuthGuard],
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: SecureComponent,
    canActivate: [SecureAuthGuard],
    children: [
      { path: '', redirectTo: 'digicolor', pathMatch: 'full' },
      {
        path: 'digicolor',
        loadChildren: () => import('./secure/digicolor/digicolor.module').then(m => m.DigiColorModule)
      },
      { path: '**', redirectTo: 'digicolor', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    RouterModule.forRoot(routes,  { onSameUrlNavigation: 'reload' }),
    SharedModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers: [
    LoginAuthGuard,
    SecureAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    ApiService,
    CommonFunctions
  ],
})
export class AppRoutingModule { }
