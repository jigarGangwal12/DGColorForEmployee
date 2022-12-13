import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './auth/interceptor.service';
import { LoginComponent } from './public/login/login.component';
import { AppBootstrapModule } from './core/app-bootstrap/app-bootstrap.module';
import { AppConfigService } from './core/services/app-config.service';
import { AuthService } from './core/services/auth.service';
import { DxDataGridModule, } from 'devextreme-angular/ui/data-grid';
import { DxSelectBoxModule, DxListModule ,DxPopupModule, DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';
import { BnNgIdleService } from 'bn-ng-idle';
// import { FinanceRoutingModule } from './secure/finance/finance-routing.module';
 import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    AppBootstrapModule,
    // AppDevExtreamModule,
    HttpClientModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxButtonModule,
    DxListModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    AgGridModule,
    NgbModule,
    DxDataGridModule,
    NgxLoaderModule,
    // FinanceRoutingModule,
    // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
    // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes) 
    // and `ping` is 120 (2 minutes).
    UserIdleModule.forRoot({idle: 900, timeout: 600, ping: 60}) 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthService,
    AppConfigService,
    BnNgIdleService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
