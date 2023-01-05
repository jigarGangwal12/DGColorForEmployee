import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppDevExtreamModule } from '../../core/app-dev-extream/app-dev-extream.module';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { InquiryComponent } from './inquiry/inquiry.component';
import { DigiColorinwardComponent } from './DigiColorinward/DigiColorinward.component';
import { OutwardRecipePredictionComponent } from './outwardRecipePrediction/outwardRecipePrediction.component';
import { DigiColorAdminPanelComponent } from './digiColor-admin-panel/digiColor-admin-panel.component';
import { OutwardMatchingComponent } from './outward-matching/outward-matching.component';
import { ShadeMatchingComponent } from './shade-matching/shade-matching.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SmsReportComponent } from './sms-report/sms-report.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'inquiry', pathMatch: 'full'
    },
    {
        path: 'inquiry', component: InquiryComponent, pathMatch: 'full'
    },
    {
        path: 'inward', component: DigiColorinwardComponent, pathMatch: 'full'
    },
    {
        path: 'outwardRecipePrediction', component: OutwardRecipePredictionComponent, pathMatch: 'full'
    },
    {
        path: 'digiColorAdminPanel', component: DigiColorAdminPanelComponent, pathMatch: 'full'
    },
    {
        path: 'outwardMatching', component: OutwardMatchingComponent, pathMatch: 'full'
    },
    {
        path: 'shadeMatching', component: ShadeMatchingComponent, pathMatch: 'full'
    },
    {
        path: 'SendMessage', component: SendMessageComponent, pathMatch: 'full'
    },
    {
        path: 'smsReport', component: SmsReportComponent, pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        AgGridModule.withComponents([]),
        NgxDaterangepickerMd.forRoot(),
        CommonModule,
        FormsModule,
        AppDevExtreamModule,
    ],
    declarations: [
        // ReceivableReportComponent,
        InquiryComponent,
        DigiColorinwardComponent,
        OutwardRecipePredictionComponent,
        DigiColorAdminPanelComponent,
        OutwardMatchingComponent,
        ShadeMatchingComponent,
        SendMessageComponent,
        SmsReportComponent
    ],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class DigiColorRoutingModule { }
