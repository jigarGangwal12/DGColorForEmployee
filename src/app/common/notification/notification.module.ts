import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationComponent} from "./notification.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations:[
    NotificationComponent
  ],
  imports:[
    CommonModule,
    NgbModule
  ],
  exports: [NotificationComponent]
})

export class NotificationModule{}
