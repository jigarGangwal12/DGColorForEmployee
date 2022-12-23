import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from 'src/app/core/services/api.service';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import { Router, ActivatedRoute } from '@angular/router';
import { SecureComponent } from '../../secure.component';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  inquiryForm: any;
  showR1Grid: boolean = true;
  colCountByScreen: Object;
  scanModeData: any;
  inquiryTypeData: any = [];
  cosigneeNameCode: any;
  inquiryByData: string[];
  agentListData: any;
  consigneeList: any;

  cosigneeNameCodeList: any;
  rowGroupPanelShow = 'always';
  autoGroupRate: any;
  defaultColDef: any;
  groupRowRendererParams = {
    suppressCount: true
  };
  sideBar: any;
  gridApi: any;
  gridColumnApi: any;
  InquiryInofcolumnDef: any;
  allInquiryListData: any;
  windowHeight2: any;
  readOnlyAgent: boolean = false;
  assignToRunnerList: any;
  UserId: any;
  disablesubbtn: boolean = false;
  customerRequirementType: any;
  selectedRowData: any = [];
  recipientName = [{ name: "Contact Person" }, { name: "Other" }];
  count: any = 0;
  consigneeContactDetail: any;
  dataforSMS: any = [];

  constructor(
    private apiService: ApiService,
    public router: Router,
    private route: ActivatedRoute,
    private secure: SecureComponent,
    private cdRef: ChangeDetectorRef
  ) {
    this.UserId = ((localStorage.getItem("empCode")));
    this.UserId = this.UserId.substring(1, this.UserId.length - 1);
    this.customerRequirementType = [{ name: 'Recipe Prediction' }, { name: 'Shade Matching Recipe' },]
    this.colCountByScreen = {
      md: 4,
      sm: 2,
    };
    this.inquiryByData = ['Agent', 'Direct Customer', 'Sales Person'];
    this.scanModeData = ['Off Site', 'On Site'];
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  async ngOnInit() {
    this.secure.showHideLogo = false;
    this.getAgentListData();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getDetail(e: any) {
    if (e.columnIndex === 0)
      if (e && e.row && e.row.data && e.row.data.caseId) {
        this.onReportValueChange(e.row.data.caseId, 'R1');
      }
  }

  getAgentListData() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.Getconsigneecustomer_DetailData, '')
      .subscribe((res: any) => {
        this.cosigneeNameCodeList = res.table1;
        this.cosigneeNameCode = new DataSource({
          store: res.table,
          paginate: true,
          pageSize: 10
        });
        let inquiryData = res.table2;
        this.inquiryTypeData = [inquiryData.map((item: any) => item.inquiryType).join(',')];
        this.assignToRunnerList = res.table3;

      });
    this.inquiryForm = {
      inquiryType: 'Shade Matching',
      scanMode: 'On Site',
      inquiryBy: 'Agent',
      agentNameCode: '',
      salesPersonName: '',
      consumerName: '',
      contactPersonName: '',
      contactPersonNo: '',
      assignToRunner: '',
      address: '',
      addressForVisit: '',
      address2: '',
      address2ForVisit: '',
      city: '',
      cityForVisit: '',
      stateCode: '',
      stateCodeForVisit: '',
      postCode: '',
      postCodeForVisit: '',
      sameasSysytemAddress: false,
      remarks: '',
      agentName: '',
      agentCode: '',
      ConsumerCode: '',
      ConsumerName: '',
      cosignee: '',
      caseId: '',
      requirement: 'Recipe Prediction',
      requirementValue: 'Recipe Prediction'
    };
  }

  agentValueChanged(event: any) {
  }

  ConsumerValueChanged(event: any) {
    if (event && event.value)
      if (!this.readOnlyAgent) {
        this.inquiryForm.contactPersonName = '';
        this.inquiryForm.contactPersonNo = '';
        this.inquiryForm.designation = '';
        this.inquiryForm.addressForVisit = '';
        this.inquiryForm.address2ForVisit = '';
        this.inquiryForm.cityForVisit = '';
        this.inquiryForm.stateCodeForVisit = '';
        this.inquiryForm.postCodeForVisit = '';
      }
    this.inquiryForm.sameasSysytemAddress = false;

    this.GetConsigneeDetails(event.value);

    if ((!event.value || event.value == null)) {
      this.inquiryForm.address = '';
      this.inquiryForm.address2 = '';
      this.inquiryForm.city = '';
      this.inquiryForm.stateCode = '';
      this.inquiryForm.postCode = '';
      this.inquiryForm.agentName = '';
      this.inquiryForm.sameasSysytemAddress = false;
      this.consigneeContactDetail = [];
      this.inquiryForm.agentNameCode = '';
    }
  }

  GetConsigneeDetails(data: any) {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.GetConsigneeAddressDetails, { consigneeCode: data })
      .subscribe((res: any) => {
        this.consigneeContactDetail = res.table1;
        if (this.consigneeContactDetail && this.consigneeContactDetail.length > 0) {
          this.selectedRowData = [];
          let filterReportTrue = this.consigneeContactDetail.filter((da: any) => da.isReportSend == true);
          filterReportTrue.forEach((element: any) => {
            this.selectedRowData.push(element.id);
          });
        }
        if (res.table && res.table.length > 0 && res.table[0].address) {
          this.inquiryForm.address = res.table[0].address;
        } else {
          notify({ message: 'Address is not defined', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
          this.inquiryForm.address2 = '';
          this.inquiryForm.city = '';
          this.inquiryForm.stateCode = '';
          this.inquiryForm.postCode = '';
          return;
        }
        this.showR1Grid = true;
        this.inquiryForm.address2 = res.table[0].address2;
        this.inquiryForm.city = res.table[0].city;
        this.inquiryForm.stateCode = res.table[0].stateCode;
        this.inquiryForm.postCode = res.table[0].postCode;
        if (this.cosigneeNameCodeList && this.cosigneeNameCodeList.length > 0) {
          let totalNjCount = this.cosigneeNameCodeList.filter((da: any) => da.value == data);
          if (totalNjCount && totalNjCount.length > 0) {
            this.inquiryForm.agentNameCode = totalNjCount[0].agentnamecode;
            this.inquiryForm.agentName = totalNjCount[0].agentname;
            this.inquiryForm.agentCode = totalNjCount[0].agentcode;
            this.inquiryForm.ConsumerCode = totalNjCount[0].value;
            this.inquiryForm.ConsumerName = totalNjCount[0].consumerName;
          }
        }
      });
  }
  selectBoxValueChanged(da: any) {
    if (da && da.value) {
      this.inquiryForm.addressForVisit = this.inquiryForm.address;
      this.inquiryForm.address2ForVisit = this.inquiryForm.address2;
      this.inquiryForm.cityForVisit = this.inquiryForm.city;
      this.inquiryForm.stateCodeForVisit = this.inquiryForm.stateCode;
      this.inquiryForm.postCodeForVisit = this.inquiryForm.postCode;
      this.inquiryForm.sameasSysytemAddress = true;
    }
    else {
      this.inquiryForm.addressForVisit = '';
      this.inquiryForm.address2ForVisit = '';
      this.inquiryForm.cityForVisit = '';
      this.inquiryForm.stateCodeForVisit = '';
      this.inquiryForm.postCodeForVisit = '';
      this.inquiryForm.sameasSysytemAddress = false;
    }
  }

  SaveInquiryDataForm(data: any, da: any) {
    data.saveOrSubmit = da;
    let isreportSendClickorNot = this.consigneeContactDetail.filter((da: any) => da.isReportSend == true);
    if (isreportSendClickorNot.length == 0) {
      notify({ message: 'Select atlese One Person for Send Report', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    this.consigneeContactDetail.forEach((element: any) => {
      if (element.mobileNumber) {
        element.mobileNumber = element.mobileNumber.toString();
      }
      if (element.mobileNumber == null || element.mobileNumber == '') {
        this.count++;
      }
      else if (element.mobileNumber.length != 10) {
        this.count++;
      }
      else {
        this.count = 0;
      }
    });
    if (this.count > 0) {
      notify({ message: 'Please enter valid 10 digit mobile number', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    data.customerContactDetail = this.consigneeContactDetail;

    data.createdBy = this.UserId;
    if (!data.inquiryType || !data.scanMode || !data.inquiryBy || !data.requirementValue || !data.ConsumerName || !data.addressForVisit || !data.cityForVisit || !data.stateCodeForVisit || !data.postCodeForVisit || !data.assignToRunner) {
      notify({ message: 'please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    let tempassignToRunner = data.assignToRunner.split('-')[0];
    let tempassignToRunnerCode = data.assignToRunner.split('-')[1];
    data.AssignToRunnerCode = tempassignToRunner;
    data.assignToRunner = tempassignToRunnerCode;
    this.disablesubbtn = true;

    this.apiService.post(this.API_CONSTANTS.DigiColor.Inquiry_Form.PostInquiryFormData, data)
      .subscribe((res: any) => {
        this.disablesubbtn = false;
        let caseid = res.table[0].caseId;
        let consumerName = res.table[0].consumerName;
        notify({ message: 'Inquiry Generate Successfully for Cusumer ' + consumerName + ' And Case Id is :' + caseid, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 600 }, 'success', 2000);
        this.router.navigate(["/digicolor/inquiry/"]);
        this.dataforSMS = data;
        this.dataforSMS.caseId = caseid;
        this.SendSMS(this.dataforSMS);
      });
  }
  SendSMS(data: any) {
    this.apiService.post(this.API_CONSTANTS.DigiColor.Inquiry_Form.SMSSendForPostInquiryFormData, data)
      .subscribe((res: any) => {
      });
  }
  UpdateInquiryDataForm(data: any, da: any) {
    data.saveOrSubmit = da;
    data.createdBy = this.UserId;
    if (!data.ConsumerName || !data.addressForVisit || !data.cityForVisit || !data.stateCodeForVisit || !data.postCodeForVisit) {
      notify({ message: 'please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    let isreportSendClickorNot = this.consigneeContactDetail.filter((da: any) => da.isReportSend == true);
    if (isreportSendClickorNot.length == 0) {
      notify({ message: 'Select atlese One Person for Send Report', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    this.consigneeContactDetail.forEach((element: any) => {
      if (element.mobileNumber) {
        element.mobileNumber = element.mobileNumber.toString();
      }
      if (element.mobileNumber == null || element.mobileNumber == '') {
        this.count++;
      }
      else if (element.mobileNumber.length != 10) {
        this.count++;
      }
      else {
        this.count = 0;
      }
    });
    if (this.count > 0) {
      notify({ message: 'Please enter valid 10 digit mobile number', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    data.customerContactDetail = this.consigneeContactDetail;
    data.AssignToRunnerCode = data.assignToRunner.split('-')[0];
    data.assignToRunner = data.assignToRunner.split('-')[1];
    this.disablesubbtn = true;
    this.apiService.post(this.API_CONSTANTS.DigiColor.Inquiry_Form.PostInquiryFormData, data)
      .subscribe((res: any) => {
        this.disablesubbtn = false;
        notify({ message: 'Inquiry Updated Successfully!!', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        this.GetallInquiryListData();
      });
  }

  cancelData() {
    this.router.navigate(["/digicolor/inquiry/"]);
  }

  form_customizeItem(item: any) {
  }

  onReportValueChange(data: string, page: string) {

    if (page == 'R1' && data != '') {

      this.getInqGridDataListbyId(data);
    } else {
      this.showR1Grid = true;
      this.getAgentListData();
    }
    if (page == 'R2') {
      this.readOnlyAgent = false;
      this.GetallInquiryListData();
    }
  }

  GetallInquiryListData() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.GetAllInquiryData, '')
      .subscribe((res: any) => {
        this.showR1Grid = false;
        this.allInquiryListData = res.table;
        this.windowHeight2 = (window.innerHeight) - 145;
        this.windowHeight2 = this.windowHeight2 + 'px';
        var eGridDiv = document.querySelector<HTMLElement>('#inquiryLlist')! as any;
        if (eGridDiv) {
          eGridDiv.style.setProperty('height', this.windowHeight2);
        }
      });
  }

  getInqGridDataListbyId(val: any) {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.GetDataByCaseIdData, { caseid: val })
      .subscribe((res: any) => {
        if (res.table && res.table.length > 0) {
          this.inquiryForm.addressForVisit = res.table[0].address1;
          this.inquiryForm.address2ForVisit = res.table[0].address2;
          this.inquiryForm.cityForVisit = res.table[0].city;
          this.inquiryForm.stateCodeForVisit = res.table[0].cosigneeState;
          this.inquiryForm.postCodeForVisit = res.table[0].pincode;
          this.inquiryForm.inquiryBy = res.table[0].inquiryBY;
          this.inquiryForm.cosignee = res.table[0].consigneeCode;
          this.inquiryForm.contactPersonName = res.table[0].contactPerson;
          this.inquiryForm.contactPersonNo = res.table[0].contactNo;
          this.inquiryForm.caseId = res.table[0].caseId;
          this.inquiryForm.remarks = res.table[0].remark;
          this.inquiryForm.assignToRunner = res.table[0].assignedCode + '-' + res.table[0].assignedName;
          this.readOnlyAgent = true;
        }
        this.GetConsigneeDetails(this.inquiryForm.cosignee);
      });
  }

  selectionChangedHandler(data: any) {
    if (data) {
      data.selectedRowsData.forEach((element: any) => {
        element.isReportSend = true;
      });

      if (data.currentDeselectedRowKeys && data.currentDeselectedRowKeys.length > 0) {
        let unselectedid = data.currentDeselectedRowKeys
        this.consigneeContactDetail.forEach((element1: any) => {
          if (element1.id == unselectedid) {

            element1.isReportSend = false;
          }
        });
      }
      data.component.refresh(true);
    }
  }

  screen(width: any) {
    if (width < 768) return "xs";
    if (width < 992) return "sm";
    if (width < 1200) return "md";
    return "lg";
  }
  customerRequirementValueChange(da: any) {
    if (da && da.value) {
      this.inquiryForm.requirementValue = da.value.toString();
    }

  }
  OnReportSubmissionDeleted(data: any) {

    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.DeleteContactDetailById, { id: data.data.id })
      .subscribe((res: any) => {

      });

  }
}
