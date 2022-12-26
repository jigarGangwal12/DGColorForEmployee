import { Component, OnInit } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { IDetailCellRendererParams } from 'ag-grid-community';
import { SecureComponent } from '../../secure.component';
import { filter } from 'rxjs/operators';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-DigiColorinward',
  templateUrl: './DigiColorinward.component.html',
  styleUrls: ['./DigiColorinward.component.css']
})
export class DigiColorinwardComponent implements OnInit {
  // @ViewChild('dxTreeListUserPageList') dxTreeListUserPage: DxTreeListComponent;
  API_CONSTANTS = API_CONSTANTS;
  customerSubStrateData: any;
  customerSubStrate: any = [{ typeofIndustries1: '' }];
  customerFastnessDataSource = [];
  customerContactDetails = [];
  competitorDataSource = [];
  uniqueChars: any = [];
  uniqueTypeofIndustries: any;
  uomList: any = [];
  showR1Grid: boolean = true;
  EmpCode: any;
  caseIdData: any;
  caseIdDatetime: any;
  samppleDataForMaping: any;
  selectMatchIdModules: any;
  filterdata: any;
  selectedRowData: any;
  shadeNameId: any;
  mapwithSamplIdCustomerList: any;
  shadeNameIddata: any;
  contactPersonDepartment: any;
  contactPersonDesignation: any;
  designationListData: any;
  processList: any;
  lightSourceData: any;
  dischargeabilityDataSource: any;
  nameofFastnessDataSource: any;
  testMethodDataSource: any;
  targetRatingDataSource: any;
  testMethodList: any;
  windowHeight: any;
  showR3Grid: boolean = false;
  showR2Grid: boolean = false;
  inwardFormListData: any;
  allSampleidForMapping: any;
  alldyesRange: any;
  editShadeid: boolean = false;
  InwardDataModel = {
    caseId: '',
    shadeNameNoForEdit: '',
    shadeNoName: [],
    customerName: '',
    consigneeCode: '',
    inwardDateTime: new Date(),
    inquiryDateTime: '',
    consigneeState: '',
    agentNameCode: '',
    process: '',
    primarylightSource: '',
    secondarylightSource: '',
    tertiarylightSource: '',
    remarks: '',
    submitedby: '',
    customerType: '',
    dischargeability: '',
    saveOrSubmit: '',
    address1: '',
    address2: '',
    consigneeCity: '',
    dyesRange: '',
    sampleScanDateTime: '',
    requirement: 'Shade Matching',
    substrate: '',
    fabricQuality: '',
    ratio: '',
    shadeId: '',
    competitorName: '',
    itemCategory: 'DYES',
    productName: '',
    competitorNameForProduct: '',
    customerRequirement: ''    
  };
  digiColorUserId: any;
  loadingVisible: boolean = false;
  UserId: any;
  defaultColDef: any;
  sideBar: any;
  gridInwardDetailsApi: any;
  gridInwardDetailsColumnApi: any;
  columnDefs: any;
  detailCellRendererParams: any;
  showRubbingColumninGrid: any;
  dyesorWetDataSource: any;
  disablesubbtn: any;
  customerRequirementType: any;
  selectedRowDataContactDetail: any = [];
  recipientName = [{ name: "Contact Person" }, { name: "Other" }];
  itemCategoryDataSource = [{ name: "DYES" }];
  ProductRangeModeDataSource = [
    { name: 'EXHAUST', id: 1 },
    { name: 'CONTINUOUS', id: 2 },
    { name: 'PRINTING', id: 3 },
    { name: 'SIZING', id: 4 }
  ];
  productSegment = [
    { name: 'DYEING', id: 1 },
    { name: 'FINISHING', id: 2 },
    { name: 'PRE-TREATMENT', id: 3 },
    { name: 'PRINTING', id: 4 },
    { name: 'SIZING', id: 5 }
  ];
  productByCompetitorName: any;
  productFunction: any;
  filterProductByCompetitor: any;
  competitorNameDataSource: any;
  filterCompetitorByItemCategory: any;
  selecteditemCategory: any;
  addCompetitorpopupVisible: boolean = false;
  count: any = 0;
  userRole: any;
  customerReuirement: any = [];
  constructor(private apiService: ApiService, private router: Router, private secure: SecureComponent) {
    this.dyesorWetDataSource = [{ name: 'Dry' }, { name: 'Wet' }]
    this.customerRequirementType = [{ name: 'Recipe prediction' }, { name: 'Shade Matching' },]
    this.dischargeabilityDataSource = ['Yes', 'No'];
    this.defaultColDef = {
      editable: false,
      enableValue: true,
      enableRowGroup: true,
      minWidth: 300,
      flex: 1,
      sortable: true,
      filter: false,
      resizable: true,
      animateRows: true,
      headerComponentParams: {
        template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
          '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>',
      },
    };

    this.sideBar = {
      toolPanels: [
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
          minWidth: 180,
          maxWidth: 400,
          width: 250,
        },
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          minWidth: 225,
          width: 225,
          maxWidth: 225,
        },
      ],
    };

    this.columnDefs = [
      {
        field: 'inwardDate',
        headerName: 'Inward Date Time',
        minWidth: 130,
        maxWidth: 130,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
        valueFormatter: (data: any) => {
          if (data.value !== '1753-01-01T00:00:00') {
            return data.value
              ? new Date(data.value).toLocaleDateString('en-JM', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })
              : '';
          }
          return '';
        },
        cellRenderer: 'agGroupCellRenderer'
      },
      {
        field: 'shadeid',
        headerName: 'Shade Id',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'caseId',
        headerName: 'Case Id',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'shadeName',
        headerName: 'Shade Name',
        minWidth: 150,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'agentNameCode',
        headerName: 'Agent Name',
        minWidth: 150,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'consigneeCode',
        headerName: 'Customer Code',
        minWidth: 80,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'consigneeName',
        headerName: 'Customer Name',
        minWidth: 80,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'lightSourcePrimary',
        headerName: 'Primary',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'lightSourceSecondary',
        headerName: 'Secondary',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'lightSourceTertiary',
        headerName: 'Tertiary',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'dyesRange',
        headerName: 'Dye Range',
        minWidth: 60,
        maxWidth: 60,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'process',
        headerName: 'Process',
        minWidth: 70,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'dischargability',
        headerName: 'Dischargability',
        minWidth: 80,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'inwardcreatedBy',
        headerName: 'Emp. Name',
        minWidth: 80,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      },
      {
        field: 'sampleRemarks',
        headerName: 'Remarks',
        minWidth: 80,
        filterParams: { applyMiniFilterWhileTyping: true },
        filter: true,
      }
    ]
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          {
            headerName: 'Substrate',
            field: 'typeofIndustries1',
            filterParams: { applyMiniFilterWhileTyping: true }
          },
          {
            headerName: 'Unit of Measurement',
            field: 'uom',
            filterParams: { applyMiniFilterWhileTyping: true }
          },
          {
            headerName: 'Ratio',
            field: 'ratio',
            filterParams: { applyMiniFilterWhileTyping: true }
          },
        ],

        defaultColDef: {
          flex: 1,
          sortable: true,
        }
      },
      getDetailRowData: (params: any) => {
        const data = {
          caseId: params.data.caseId,
          shadeId: params.data.shadeid,
          caseIdSharedIdGroup: params.data.caseIdSharedIdGroup
        }
        this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetDigiColorInwardDataForEdit, data).subscribe((res: any) => {
          params.successCallback(res.table3);
        })
      }
    } as IDetailCellRendererParams;

    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          {
            headerName: 'Name of fastness',
            field: 'nameoffastness'
          },
          {
            headerName: 'Test Method',
            field: 'testMethod'
          },
          {
            headerName: 'Target Rating',
            field: 'targetRating'
          },
          {
            headerName: 'Remark',
            field: 'remark'
          }
        ],
        defaultColDef: {
          flex: 1,
          sortable: true,
        }
      },
      getDetailRowData: (params: any) => {
        const data = {
          caseId: params.data.caseId,
          shadeId: params.data.shadeid,
          caseIdSharedIdGroup: params.data.caseIdSharedIdGroup
        }
        this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetDigiColorInwardDataForEdit, data).subscribe((res: any) => {
          params.successCallback(res.table4);
        })
      }
    } as IDetailCellRendererParams;
    //this.detailCellRendererParams as GetDetailRowDataParams;
  }

  ngOnInit() {
    this.secure.showHideLogo = false;
    this.getCustomerSubstrate();
    // var UserId = ((localStorage.getItem("empCode")));
    // UserId = UserId.substring(1, UserId.length - 1);
    this.UserId = localStorage.getItem('empCode');
    this.UserId = this.UserId.substring(1, this.UserId.length - 1);
    this.userRole = localStorage.getItem('UserRole');
    if (this.UserId) {
      this.EmpCode = this.UserId;
      // this.EmpCode = '70477';
      this.getCaseIdByEmpCode();
    }
    this.getUserList();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.windowHeight = (window.innerHeight) - 80;
    this.windowHeight = this.windowHeight + 'px';

  }
  getUserList() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetDigiColorUserId, { empCode: this.EmpCode })
      .subscribe((res: any) => {
        if (res.table && res.table.length > 0 && res.table[0].digiColorUserId) {
          this.digiColorUserId = res.table[0].digiColorUserId.trim();
        }
        this.competitorNameDataSource = res.table1;
        this.productByCompetitorName = res.table2;
        this.productFunction = res.table3;

        this.getallPendingSampleId();

      });
  }
  getallPendingSampleId() {
    // this.loadingVisible = true;
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetAllpendingSampleMappingData, { digicolorUserId: this.digiColorUserId, empCode: this.EmpCode, })
      .subscribe((res: any) => {
        // this.loadingVisible = false;
        this.samppleDataForMaping = res.table;
      });
  }

  getCaseIdByEmpCode() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetCaseIdByEmpCodeData, { empCode: this.EmpCode, userRole: this.userRole })
      .subscribe((res: any) => {
        this.caseIdData = res.table;
        this.shadeNameId = res.table1;
        this.mapwithSamplIdCustomerList = res.table2;
        this.contactPersonDepartment = res.table3;
        this.contactPersonDesignation = res.table4;
        this.processList = res.table5;
        this.lightSourceData = res.table6;
        this.InwardDataModel.submitedby = res.table7[0].employeeName;
        this.nameofFastnessDataSource = res.table8;
        this.testMethodDataSource = res.table9;
        this.targetRatingDataSource = res.table10;
        this.inwardFormListData = res.table14;
      });
  }
  caseIdValueChanged(da: any) {
    if (da && da.value) {
      this.filterdata = [];
      this.filterdata = this.caseIdData.filter((data: any) => data.caseId == da.value);
    }
    this.caseIdDatetime = this.filterdata[0].createdDate;
    // this.samppleDataForMaping = this.allSampleidForMapping.filter((data: any) => data.customerId == this.filterdata[0].consigneeCode);
  }
  getCustomerSubstrate() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetCustomerSubstrate, '')
      .subscribe((res: any) => {
        this.customerSubStrateData = res.table;
        this.uniqueTypeofIndustries = res.table1;
        this.alldyesRange = res.table2;
      });
  }
  typeofIndustriesValueChanged(data: any) {
    if (data && data.selectedItem.typeofIndustries)
      this.uomList = this.customerSubStrateData.filter((da: any) => da.typeofIndustries == data.selectedItem.typeofIndustries);
  }
  nameofFastnessValueChanged(data: any) {
    if (data && data.selectedItem.nameofFastness)
      this.testMethodList = this.testMethodDataSource.filter((da: any) => da.nameofFastness == data.selectedItem.nameofFastness);
    if (data.selectedItem.nameofFastness == 'Rubbing Fastness') {
      this.showRubbingColumninGrid = true;
    }
    //  else {
    //   this.showRubbingColumninGrid = false;
    // }
  }
  departmentValueChanged(data: any) {
    if (data && data.selectedItem.department)
      this.designationListData = this.contactPersonDesignation.filter((da: any) => da.department == data.selectedItem.department);
  }
  cellTemplate(container: any, options: any) {
    const noBreakSpace = '\u00A0';
    // const text = (options.value || []).map((element: any) => options.column.lookup.calculateCellValue(element)).join(', ');
    container.textContent = options.value || noBreakSpace;
    container.title = options.value;
  }
  onReportValueChange(page: string) {
    if (page == 'R2') {
      this.showR2Grid = true;
      this.showR1Grid = false;
      this.showR3Grid = false;
    }
    if (page == 'R1') {
      this.showR1Grid = true;
      this.showR3Grid = false;
      this.showR2Grid = false;
    }
    if (page == 'R3') {
      this.showR3Grid = true;
      this.showR1Grid = false;
      this.showR2Grid = false;
    }
  }
  MapSampleDatatoCaseIdDataForm(da: any) {
    this.disablesubbtn = true;
    this.apiService.post(this.API_CONSTANTS.DigiColor.Inward_Form.MapSampleIdWithCaseId, this.selectedRowData)
      .subscribe((res: any) => {
        this.disablesubbtn = false;
        notify({ message: 'Sample Id Map with Case Id SuccessFully ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'success', 2000);
        this.router.navigate(["/digicolor/inward/"]);
      });
  }
  onSelectionChangedMapping(e: any) {
    this.selectedRowData = [];
    this.selectedRowData = e.selectedRowsData;
    this.selectMatchIdModules = [];
    if (this.selectedRowData && this.selectedRowData.length > 0)
      this.selectedRowData.forEach((key: any) => {
        key.caseId = this.filterdata[0].caseId;
        key.consigneeCode = this.filterdata[0].consigneeCode;
        key.consigneeName = this.filterdata[0].consigneeName;
        key.agentCode = this.filterdata[0].agentCode;
        key.agentName = this.filterdata[0].agentName;
        key.taketoInward = true;
        key.CreatedBy = this.EmpCode
      });
  };

  shadeidValueChanged(dat: any) {
    this.InwardDataModel.shadeNoName = dat.value;
  }
  onProcessValueChanged(da: any) {
    this.InwardDataModel.process = da.value;
  }
  dischargeValueChanged(da: any) {
    this.InwardDataModel.dischargeability = da.value;
  }
  onPrimaryLightValueChanged(da: any) {
    this.InwardDataModel.primarylightSource = da.value;
  }
  onSecondaryLightValueChanged(da: any) {
    this.InwardDataModel.secondarylightSource = da.value;
  }
  onTertiaryLightValueChanged(da: any) {
    this.InwardDataModel.tertiarylightSource = da.value;
  }
  dyesRangeValueChanged(da: any) {
    this.InwardDataModel.dyesRange = '';
    if (da.value) {
      this.InwardDataModel.dyesRange = da.value.toString();
    }
  }
  RequirementValueChanged(da: any) {
    this.InwardDataModel.requirement = da.value;
  }
  InwardcaseIdValueChanged(data: any) {
    if (data.selectedItem) {
      this.shadeNameIddata = [];
      this.shadeNameIddata = this.shadeNameId.filter((da: any) => da.consigneeCode == data.selectedItem.consigneeCode);
      this.InwardDataModel.sampleScanDateTime = this.shadeNameIddata[0].createdDate;
      if (data && data.selectedItem) {
        let consigneeDetail = this.mapwithSamplIdCustomerList.filter((da: any) => da.consigneeCode == data.selectedItem.consigneeCode);
        if (consigneeDetail.length > 0) {
          this.InwardDataModel.consigneeCode = consigneeDetail[0].consigneeCode;
          this.InwardDataModel.consigneeState = consigneeDetail[0].consigneeState;
          this.InwardDataModel.agentNameCode = consigneeDetail[0].agentNameCode;
          this.InwardDataModel.customerType = consigneeDetail[0].customerType;
          this.InwardDataModel.address1 = consigneeDetail[0].address1;
          this.InwardDataModel.address2 = consigneeDetail[0].address2;
          this.InwardDataModel.consigneeState = consigneeDetail[0].consigneeState;
          this.InwardDataModel.consigneeCity = consigneeDetail[0].city;
          this.InwardDataModel.inquiryDateTime = consigneeDetail[0].createdDate;
          this.customerReuirement = consigneeDetail[0].customerRequirement.split(',');
          debugger
          this.customerRequirementType.name = this.customerReuirement;
          this.InwardDataModel.caseId = consigneeDetail[0].consigneeNameCode.split('-')[0].trim();
          this.InwardDataModel.saveOrSubmit = 'Save';
          this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetContactDetailandTypeofIndData, {
            caseid: this.InwardDataModel.caseId
          })
            .subscribe((res: any) => {
              this.customerContactDetails = res.table;
              let filterReportTrue = this.customerContactDetails.filter((da: any) => da.isReportSend == true);
              if (filterReportTrue && filterReportTrue.length > 0)
                filterReportTrue.forEach((element: any) => {
                  this.selectedRowDataContactDetail.push(element.id);
                });
            });
        }
      }
    }
  }

  cancelData() {
    this.router.navigate(["/digicolor/inward/"]);
  }
  getDetailByShadeId(da: any) {
    
    let consigneeDetail = this.inwardFormListData.filter((data: any) => data.shadeid == da.data.shadeid);
    this.InwardDataModel.agentNameCode = consigneeDetail[0].agentNameCode;
    this.InwardDataModel.caseId = consigneeDetail[0].caseId;
    this.InwardDataModel.consigneeCode = consigneeDetail[0].consigneeCode + ' - ' + consigneeDetail[0].consigneeName;
    this.InwardDataModel.saveOrSubmit = 'Update';
    if (da.data.status.trim() == 'Inward') {
      this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetDigiColorInwardDataForEdit,
        { caseId: this.InwardDataModel.caseId, shadeId: consigneeDetail[0].shadeid, caseIdSharedIdGroup: consigneeDetail[0].caseIdSharedIdGroup })
        .subscribe((res: any) => {
          this.InwardDataModel.address1 = res.table[0].address1;
          this.InwardDataModel.address2 = res.table[0].address2;
          this.InwardDataModel.consigneeCity = res.table[0].city;
          this.InwardDataModel.consigneeState = res.table[0].cosigneeState;
          this.InwardDataModel.customerType = res.table[0].customerType;
          this.InwardDataModel.inquiryDateTime = res.table[0].createdDate;
          this.customerRequirementType = res.table[0].customerRequirement.split(',');
          this.InwardDataModel.shadeId = res.table1[0].shadeid;
          this.InwardDataModel.shadeNameNoForEdit = res.table1[0].shadeName + ' - ' + res.table1[0].shadeid;
          // this.customerSubStrate = res.table3;
          this.InwardDataModel.substrate = res.table3[0].typeofIndustries1;
          this.InwardDataModel.fabricQuality = res.table3[0].uom;
          this.InwardDataModel.ratio = res.table3[0].ratio;
          this.customerContactDetails = res.table2;
          if (this.customerContactDetails && this.customerContactDetails.length > 0) {
            let filterReportTrue = this.customerContactDetails.filter((da: any) => da.isReportSend == true);
            filterReportTrue.forEach((element: any) => {
              this.selectedRowDataContactDetail.push(element.id);
            });
          }
          // res.table6.forEach((element: any) => {
          //   element.productName = element.productName.split(',');
          // });
          this.competitorDataSource = res.table6;
          this.customerFastnessDataSource = res.table4;
          this.InwardDataModel.process = res.table5[0].process;
          this.InwardDataModel.dischargeability = res.table5[0].dischargability;
          this.InwardDataModel.primarylightSource = res.table5[0].lightSourcePrimary;
          this.InwardDataModel.secondarylightSource = res.table5[0].lightSourceSecondary;
          this.InwardDataModel.tertiarylightSource = res.table5[0].lightSourceTertiary;
          this.InwardDataModel.inwardDateTime = res.table5[0].createdDate;
          this.InwardDataModel.remarks = res.table5[0].sampleRemarks;
          this.InwardDataModel.dyesRange = res.table5[0].dyesRange;
          this.InwardDataModel.submitedby = res.table5[0].submitedBy + ' - ' + res.table5[0].submitedByEmpname;
        },
          err => {
            if (err.status == 500)
              console.log(err)
            this.loadingVisible = false;
            // check error status code is 500, if so, do some action
          });
      this.showR2Grid = true;
      this.showR3Grid = false;
      this.editShadeid = true;
    }
  }

  SaveInwardData(data: any) {
    
    if (!data.caseId || data.shadeNoName.length == 0 || !data.substrate || !data.process || !data.dischargeability || !data.primarylightSource) {
      notify({ message: 'Please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    data.customerContactDetail = this.customerContactDetails;
    if (this.customerContactDetails) {
      let isreportSendClickorNot = this.customerContactDetails.filter((da: any) => da.isReportSend == true);
      if (isreportSendClickorNot.length == 0) {
        notify({ message: 'Select atlese One Person for Send Report', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
        return;
      }
      this.customerContactDetails.forEach((element: any) => {
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
    }
    else {
      notify({ message: 'Please enter One Contact Details', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    this.customerSubStrate[0]['typeofIndustries1'] = this.InwardDataModel.substrate;
    this.customerSubStrate[0]['uom'] = this.InwardDataModel.fabricQuality;
    this.customerSubStrate[0]['ratio'] = this.InwardDataModel.ratio;
    data.customerSubstrate = this.customerSubStrate;
    data.fastnessRequirement = this.customerFastnessDataSource;
    data.customerRequirement = this.customerReuirement.toString();
    if (this.competitorDataSource && this.competitorDataSource.length > 0) {
      this.competitorDataSource.forEach((data: any) => {
        if (data.product) {
          data.product = data.product.toString();
        }
      });
    }
    data.competitorData = this.competitorDataSource;
    if (this.customerSubStrate.length > 0 && this.customerContactDetails.length > 0) {
      this.disablesubbtn = true;
      this.apiService.post(this.API_CONSTANTS.DigiColor.Inward_Form.PostInwardFormData, data)
        .subscribe((res: any) => {
          this.disablesubbtn = false;
          notify({ message: 'Inward Entry SuccessFully ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          this.router.navigate(["/digicolor/inward/"]);
        });
    }
    else {
      notify({ message: 'please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
    }
  }
  UpdateInwardData(data: any) {
    if (!data.substrate || !data.process || !data.dischargeability || !data.primarylightSource) {
      notify({ message: 'Please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    if (this.customerContactDetails && this.customerContactDetails.length > 0) {
      this.customerContactDetails.forEach((element: any) => {
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
    }
    if (this.count > 0) {
      notify({ message: 'Please enter valid 10 digit mobile number', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 500 }, 'error', 2000);
      return;
    }
    data.customerContactDetail = this.customerContactDetails;
    this.customerSubStrate[0]['typeofIndustries1'] = this.InwardDataModel.substrate;
    this.customerSubStrate[0]['uom'] = this.InwardDataModel.fabricQuality;
    this.customerSubStrate[0]['ratio'] = this.InwardDataModel.ratio;
    data.customerSubstrate = this.customerSubStrate;
    data.fastnessRequirement = this.customerFastnessDataSource;
    data.customerRequirement = this.customerReuirement.toString();
    if (this.customerSubStrate.length > 0 && this.customerContactDetails.length > 0) {
      this.disablesubbtn = true;
      this.apiService.post(this.API_CONSTANTS.DigiColor.Inward_Form.UpdateInwardFormData, data)
        .subscribe((res: any) => {
          this.disablesubbtn = false;
          notify({ message: 'Inward Updated SuccessFully ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          this.router.navigate(["/digicolor/inward/"]);
        });
    }
    else {
      notify({ message: 'please fill all Mandtory field ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
    }
  }
  onInwardDetailsGridReady(params: any) {
    this.gridInwardDetailsApi = params.api;
    this.gridInwardDetailsColumnApi = params.columnApi;
  }

  onFirstDataRendered(params: any) {
    setTimeout(function () {
      params.api.getDisplayedRowAtIndex(1)!.setExpanded(false);
    }, 0);
  }

  competitorValueChanged(da: any) {
    if (da && da.selectedItem.cm_name) {
      this.filterProductByCompetitor = this.productByCompetitorName.filter((data: any) => data.competitor == da.selectedItem.cm_name)
    }
  }
  itemCategoryValueChanged(dat: any) {
    if (dat && dat.selectedItem.name) {
      this.selecteditemCategory = dat.selectedItem.name;
      this.filterCompetitorByItemCategory = this.competitorNameDataSource.filter((data: any) => data.segment == dat.selectedItem.name);
    }

  }
  productFunctionValueChanged(dat: any) {
  }

  selectionChangedHandler(data: any) {
    
    if (data) {
      data.selectedRowsData.forEach((element: any) => {
        element.isReportSend = true;
      });

      if (data.currentDeselectedRowKeys && data.currentDeselectedRowKeys.length > 0) {
        let unselectedid = data.currentDeselectedRowKeys
        this.customerContactDetails.forEach((element1: any) => {
          if (element1.id == unselectedid) {
            element1.isReportSend = false;
          }
        });
      }
      data.component.refresh(true);
    }
  }
  addCompetitorandProduct() {
    this.addCompetitorpopupVisible = true;
  }

  addCompetitorandProductPopupClose(event: any) {
    this.addCompetitorpopupVisible = false;
  }
  SaveCompetitorData(data: any) {
    if (data.competitorName) {
      this.disablesubbtn = true;
      data.competitorName = data.competitorName.toUpperCase();
      data['SubmitedByForCompetitor'] = data.submitedby.split('-')[0].trim();
      this.apiService.post(this.API_CONSTANTS.DigiColor.Inward_Form.InsertCompetitorName, data)
        .subscribe((res: any) => {
          this.disablesubbtn = false;
          this.getUserList();
        });
    }
  }

  SaveCompetitorProductData(data: any) {
    if (data.productName) {
      this.disablesubbtn = true;
      data.productName = data.productName.toUpperCase();
      data['SubmitedByForCompetitor'] = data.submitedby.split('-')[0].trim();
      this.apiService.post(this.API_CONSTANTS.DigiColor.Inward_Form.InsertCompetitorProductName, data)
        .subscribe((res: any) => {
          this.disablesubbtn = false;
          this.getUserList();
        });
    }
  }

  itemCategoryValueChangedCompetitor(aa: any) {
    this.InwardDataModel.itemCategory = aa.value;
    this.filterCompetitorByItemCategory = this.competitorNameDataSource.filter((data: any) => data.segment == aa.value);
  }

  customerRequirementValueChange(event: any){
    if(event && event.value){
      this.customerReuirement = event.value;
    }
  }
  OnReportSubmissionDeleted(data: any) {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.DeleteContactDetailById, { id: data.data.id })
      .subscribe((res: any) => {

      });
  }
  
}
