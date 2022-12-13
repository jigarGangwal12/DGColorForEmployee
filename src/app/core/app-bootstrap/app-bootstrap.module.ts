import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { BsDropdownModule } from 'ngx-bootstrap';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { BsDatepickerModule } from 'ngx-bootstrap';
// import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
// import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot(),
    // AccordionModule.forRoot(),
    // TypeaheadModule.forRoot(),
    // PopoverModule.forRoot(),
    // BsDatepickerModule.forRoot(),
  ],
  exports: [
    // BsDropdownModule,
    // TooltipModule,
    // ModalModule,
    // AccordionModule,
    // TypeaheadModule,
    // PopoverModule,
    // BsDatepickerModule
  ]
})
export class AppBootstrapModule { }
