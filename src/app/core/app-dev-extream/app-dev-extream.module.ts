import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxDataGridModule, } from 'devextreme-angular/ui/data-grid';
import { DxPopupModule } from 'devextreme-angular/ui/popup'
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';
import { DxTreeListModule } from 'devextreme-angular/ui/tree-list';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
import {
  DxAccordionModule, 
} from 'devextreme-angular/ui/accordion';
import {
   DxSliderModule, 
} from 'devextreme-angular/ui/slider';

import {
  DxBulletModule, DxTextAreaModule, DxButtonModule, DxAutocompleteModule, DxTabsModule, DxValidatorModule,
  DxValidationSummaryModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular/ui/pie-chart';
import { DxFormModule } from 'devextreme-angular/ui/form';

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxListModule,
    DxDataGridModule,
    DxPopupModule,
    DxScrollViewModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxChartModule,
    DxLoadPanelModule,
    DxRadioGroupModule,
    DxCheckBoxModule,
    DxDropDownBoxModule,
    DxTreeListModule,
    DxTagBoxModule,
    DxNumberBoxModule,
    DxBulletModule,
    DxTextAreaModule,
    DxTabsModule,
    DxPieChartModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    //  DxFormComponent,
    DxAutocompleteModule
    ,DxTemplateModule
    ,DxSliderModule,
    DxAccordionModule,
    DxFileUploaderModule
  ],
  declarations: [],
  exports: [
    DxSelectBoxModule,
    DxListModule,
    DxDataGridModule,
    DxPopupModule,
    DxScrollViewModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxChartModule,
    DxLoadPanelModule,
    DxRadioGroupModule,
    DxCheckBoxModule,
    DxDropDownBoxModule,
    DxTreeListModule,
    DxTagBoxModule,
    DxNumberBoxModule,
    DxBulletModule,
    DxTextAreaModule,
    DxTabsModule,
    DxPieChartModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    //  DxFormComponent,
    DxAutocompleteModule
    ,DxTemplateModule
    ,DxSliderModule,
    DxAccordionModule,
    DxFileUploaderModule
  ]
})
export class AppDevExtreamModule { }
