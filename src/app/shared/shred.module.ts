import { AppDevExtreamModule } from './../core/app-dev-extream/app-dev-extream.module';
import {NgModule} from "@angular/core";
import {HeaderComponent} from "../common/header/header.component";
import {CommonModule} from "@angular/common";
import { RouterModule } from "@angular/router";
import {NotificationModule} from "../common/notification/notification.module";


@NgModule({
   declarations: [
     HeaderComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
    AppDevExtreamModule,
    NotificationModule
  ],
  exports: [
    HeaderComponent,
    AppDevExtreamModule
  ]
})
export class ShredModule{

}
