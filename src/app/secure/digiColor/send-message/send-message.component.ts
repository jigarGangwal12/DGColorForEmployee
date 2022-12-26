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
  count: any = 0;
  recipePredctionSMSGrid: any;
  shadeMatchingSMSGird: any;
  recipePredctionColumnDef: any;
  shadeMatchingColumnDef: any;
  gridApiPrediction: any;
  gridColumnApiPrediction: any;
  gridApiMatching: any;
  gridColumnApiMatching: any;

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

    this.recipePredctionColumnDef = [
      {
        headerName: 'Case ID',
        field: 'caseId',
        rowGroup: true,
        hide: true,
        filterParams: { applyMiniFilterWhileTyping: true },
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
      // {
      //   headerName: 'Recipe Prediction Send SMS',
      //   field: 'isMessageSended',
      //   valueFormatter: (data: any) => {
      //     if (data.value == true)
      //       return '✓';
      //     else
      //       return '';
      //   },
      // },
    ]

    this.shadeMatchingColumnDef = [
      {
        headerName: 'Case ID',
        field: 'caseId',
        rowGroup: true,
        hide: true,
        filterParams: { applyMiniFilterWhileTyping: true },
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
      // {
      //   headerName: 'Shade Matching Send SMS',
      //   field: 'isShadeMatchingMessageSent',
      //   valueFormatter: (data: any) => {
      //     if (data.value == true)
      //       return '✓';
      //     else
      //       return '';
      //   }
      // },

    ]

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
      // this.InwardDetailsList = res.table;
      this.recipePredctionSMSGrid = res.table;
      this.shadeMatchingSMSGird = res.table1;
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

  SendSMS(isSendPrediction: any) {
    this.loadingVisible = true;
    let shadeIds: any = [];
    if (isSendPrediction == 'prediction') {
      var rowCount = this.gridApiPrediction.getSelectedNodes();
      rowCount.forEach((element: any) => {
        if (element.data) {
          shadeIds.push(element.data);
        }
      });
      this.count = 0;
      rowCount.forEach((element: any) => {
        if (element.data.isMessageSended == true) {
          this.count++;
        }

      });
      if (this.count > 0) {
        notify({ message: 'Something went wrong. please try again.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
        return;
      }
      
      this.disableUpdateButton = true;
      this.apiService.post(API_CONSTANTS.DigiColor.SendMessage.SendSmsToCustomerForPredction, shadeIds)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'success', 2000);
          this.getDigicolorInwardDetail();
        });
        this.loadingVisible = false;
    }
    else if (isSendPrediction == 'shadeMatching') {
      var rowCount = this.gridApiMatching.getSelectedNodes();
      rowCount.forEach((element: any) => {
        if (element.data) {
          shadeIds.push(element.data);
        }
      });
      this.count = 0;
      rowCount.forEach((element: any) => {
        if (element.data.isShadeMatchingMessageSent == true) {
          this.count++;
        }
      });
      if (this.count > 0) {
        notify({ message: 'Something went wrong. please try again.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
        return;
      }
      this.disableUpdateButton = true;
      this.apiService.post(API_CONSTANTS.DigiColor.SendMessage.SendSmsToCustomerForShadeMatching, shadeIds)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'success', 2000);
          this.getDigicolorInwardDetail();
        });
        this.loadingVisible = false;
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

  onFilterTextBoxChangedPrediction() {
    this.commonFunctions.onFilterTextBoxChanged(this.gridApiPrediction, 'filter-text-box');
  }

  onFilterTextBoxChangedMatching() {
    this.commonFunctions.onFilterTextBoxChanged(this.gridApiMatching, 'filter-text-box');
  }

  onFilterTextBoxChanged() {
    this.commonFunctions.onFilterTextBoxChanged(this.gridApi, 'filter-text-box');
  }

  OnGridReadyPredction(event: any) {
    this.gridApiPrediction = event.api;
    this.gridColumnApiPrediction = event.columnApi;
  }

  OnGridReadyMatching(event: any) {
    this.gridApiMatching = event.api;
    this.gridColumnApiMatching = event.columnApi;
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