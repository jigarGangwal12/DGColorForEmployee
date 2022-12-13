import { Component, OnInit } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from '../../../core/services/api.service';
import { CommonFunctions } from 'src/app/secure/common/common-functions';
import notify from 'devextreme/ui/notify';
import { SecureComponent } from '../../secure.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  loadingVisible = false;
  InwardDetailsList: any;
  defaultColDef: any;
  AutoGroupColumnDef: any;
  ColumnDef: any;
  sideBar: any;
  gridApi: any;
  gridColumnApi: any;
  groupDefaultExpanded = 1;
  expandL1: any = true;
  public rowSelection = 'multiple';
  disableUpdateButton: boolean = false;
  sendSMS: boolean = true;
  viewSMS: boolean = false;
  selectedCategory = 'Send';
  defaultColDefViewSms: any;

  constructor(private apiService: ApiService, private commonFunctions: CommonFunctions, private secure: SecureComponent) {
    this.sideBar = this.commonFunctions.sideBar;
    this.defaultColDef = {
      flex: 1,
      resizable: true,
      sortable: true,
      suppressMenu: true,
      enableSorting: true,
      animateRows: true,
      filter: true,
      groupSelectsChildren: false,
      menuTabs: ['filterMenuTab', 'columnsMenuTab', 'generalMenuTab'],
      checkboxSelection: (params: any) => {
        if (!params.node.group) {
          const displayedColumns = params.columnApi.getAllDisplayedColumns();
          const thisIsFirstColumn = displayedColumns[0] === params.column;
          return thisIsFirstColumn;
        }
        else {
          return false;
        }
      },
    };

    this.defaultColDefViewSms = {
      flex: 1,
      resizable: true,
      suppressMenu: true,
      sortable: true,
      filter: true,
      groupSelectsChildren: false,
    };


    this.AutoGroupColumnDef = {
      headerName: 'Shade Id',
      field: 'shadeId',
      sortable: true,
      filterParams: { applyMiniFilterWhileTyping: true },
      cellRendererParams: {
        suppressCount: true,
      },
    }

    this.ColumnDef = [
      {
        headerName: 'Case ID',
        field: 'caseId',
        rowGroup: true,
        hide: true,
        filterParams: { applyMiniFilterWhileTyping: true }
      },
      {
        headerName: 'Consignee Code',
        field: 'consigneeCode',
        filterParams: { applyMiniFilterWhileTyping: true }
      },
      {
        headerName: 'Consignee Name',
        field: 'consigneeName',
        filterParams: { applyMiniFilterWhileTyping: true }
      },
      {
        headerName: 'Agent Code',
        field: 'agentCode',
        filterParams: { applyMiniFilterWhileTyping: true }
      },
      {
        headerName: 'Agent Name',
        field: 'agentName',
        filterParams: { applyMiniFilterWhileTyping: true }
      },
      {
        headerName: 'Recipe Prediction Send SMS',
        field: 'isMessageSended',
        valueFormatter: (data: any) => {
          if (data.value == true)
            return '✓';
          else
            return '';
        },
      },
      {
        headerName: 'Shade Matching Send SMS',
        field: 'isShadeMatchingMessageSent',
        valueFormatter: (data: any) => {
          if (data.value == true)
            return '✓';
          else
            return '';
        }
      },
      
    ]
  }

  ngOnInit(): void {
    this.secure.showHideLogo = false;
    this.getDigicolorInwardDetail();
  }

  getDigicolorInwardDetail() {
    this.loadingVisible = true;
    this.InwardDetailsList = [];
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SendMessage.getDigicolorInwardDetailForSendSMS, '').subscribe((res: any) => {
      this.InwardDetailsList = res.table;
      this.loadingVisible = false;
    })
  }

  getAllDigicolorInwardDetail() {
    this.loadingVisible = true;
    this.InwardDetailsList = [];
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SendMessage.getDigicolorInwardDetailForViewAll, '').subscribe((res: any) => {
      this.InwardDetailsList = res.table;
      this.loadingVisible = false;
    })
  }

  SendSMS(isSendPrediction: boolean) {
    let shadeIds: any = [];
    var rowCount = this.gridApi.getSelectedNodes();
    rowCount.forEach((element: any) => {
      if (element.data) {
        shadeIds.push(element.data);
      }
    });

    // let filterarrayforpassPrediction = [];
    // let unique = [...new Set(shadeIds.map((item: any) => item.caseId))]
    // unique.forEach((element: any) => {
    //   let filteraray = shadeIds.filter((data: any) => data.caseId == element);
    //   filterarrayforpassPrediction.push(filteraray);
    // });
    if (isSendPrediction) {
      this.disableUpdateButton = true;
      this.apiService.post(API_CONSTANTS.DigiColor.SendMessage.SendSmsToCustomerForPredction, shadeIds)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          this.getDigicolorInwardDetail();
        });
    }
    else {
      this.disableUpdateButton = true;
      this.apiService.post(API_CONSTANTS.DigiColor.SendMessage.SendSmsToCustomerForShadeMatching, shadeIds)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          this.getDigicolorInwardDetail();
        });
    }
  }

  expandLevel(event: any) {
    this.expandL1 = true;
    if (event.target.checked) {
      return this.gridApi.expandAll();
    } else {
      return this.gridApi.forEachNode((node: any) => {
        if (node.level === 0) {
          node.setExpanded(false);
        }
      });
    }
  }

  onFilterTextBoxChanged() {
    this.commonFunctions.onFilterTextBoxChanged(this.gridApi, 'filter-text-box');
  }

  OnGridReady(event: any) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
  }

  onClickButtons(SendorView: any) {
    if (SendorView == this.selectedCategory)
      return;
    if (SendorView == 'Send') {
      this.selectedCategory = 'Send';
      this.sendSMS = true;
      this.viewSMS = false;
      this.getDigicolorInwardDetail();
    }
    else if (SendorView == 'View') {
      this.selectedCategory = 'View';
      this.sendSMS = false;
      this.viewSMS = true;
      this.getAllDigicolorInwardDetail();
    }
  }

}