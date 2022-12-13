import { AppDevExtreamModule } from './../core/app-dev-extream/app-dev-extream.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppDevExtreamModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        AppDevExtreamModule,
    ]
})
export class SharedModule { }
