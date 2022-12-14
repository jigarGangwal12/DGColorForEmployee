import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { API_CONSTANTS } from '../../../constants/api-constants';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';
import * as events from "devextreme/events";
import { SecureComponent } from '../../secure.component';

@Component({
  selector: 'app-shade-matching',
  templateUrl: './shade-matching.component.html',
  styleUrls: ['./shade-matching.component.css']
})
export class ShadeMatchingComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  hideaccordian = true;
  dummydata: any;
  isShowPopOver: boolean;
  PopupVisible = false;
  GetAllLabPredictionData: any;
  StatusDataSource: any
  UserId: any;
  // loadingVisible: boolean = false;
  shadeId: any;

  recipeAllData: any;
  receipeData: any;

  showOption1RecipeData: boolean = false;
  showOption2RecipeData: boolean = false;
  showOption3RecipeData: boolean = false;
  showOption4RecipeData: boolean = false;

  receipeOptionData1: any;
  receipeOptionData2: any;
  receipeOptionData3: any;
  receipeOptionData4: any;

  rgbCodeOption1: any;
  rgbCodeOption2: any;
  rgbCodeOption3: any;
  rgbCodeOption4: any;


  noDataMsg: boolean = false;
  labPredictionParameter: any;
  fastnessData: any;

  isActive: any = 1;
  isActiveForLabProduct: any = 1;
  tabLabTesting: boolean = true;
  tabRecipePredcition: boolean = false;
  tabShadeMatching: boolean = false;

  labTestingParameter: boolean = true;
  productInfo: boolean = false;


  popUpPredictionAllData: any;
  popUpPredictionOption1Data: any;
  popUpPredictionOption2Data: any;
  popUpPredictionOption3Data: any;
  popUpPredictionOption4Data: any;

  popUpRgbCodeOption1: any;
  popUpRgbCodeOption2: any;
  popUpRgbCodeOption3: any;
  popUpRgbCodeOption4: any;


  poupShowPredictionOption1: boolean = false;
  poupShowPredictionOption2: boolean = false;
  poupShowPredictionOption3: boolean = false;
  poupShowPredictionOption4: boolean = false;


  loadingVisible: any;

  chkOption1: boolean = false;
  chkOption2: boolean = false;
  chkOption3: boolean = false;
  chkOption4: boolean = false;
  SelectedCaseId: any;
  SelectedshadeName: any;
  Selectedshadeid: any;
  SelectedConsigneeCode: any;
  SelectedConsigneeName: any;
  ProductPurchaseInfo: any;
  // input: any;
  // filter: any;
  // table: any;
  // tr: any;
  // td: any;
  // td1: any;
  // td2: any;
  // i: any;
  //txtValue: any;
  windowHeight: any;
  shadeMatchindData: any;
  disableUpdateButton: boolean = true;

  // Popup Shade Matching 
  popUpShadeMatchingAllData: any;
  popUpShadeMatchingOption1Data: any;
  popUpShadeMatchingOption2Data: any;
  popUpShadeMatchingOption3Data: any;
  popUpShadeMatchingOption4Data: any;

  popUpShadeMatchingRgbCodeOption1: any;
  popUpShadeMatchingRgbCodeOption2: any;
  popUpShadeMatchingRgbCodeOption3: any;
  popUpShadeMatchingRgbCodeOption4: any;

  poupShowShadeMatchingOption1: boolean = false;
  poupShowShadeMatchingOption2: boolean = false;
  poupShowShadeMatchingOption3: boolean = false;
  poupShowShadeMatchingOption4: boolean = false;

  chkShadeMatchingOption1: boolean = false;
  chkShadeMatchingOption2: boolean = false;
  chkShadeMatchingOption3: boolean = false;
  chkShadeMatchingOption4: boolean = false;

  disableShadeMatchingUpdateButton: boolean = true;

  Metameric1: any;
  Metameric2: any;
  Metameric3: any;
  Metameric4: any;

  lightSourceDataColor1: any;
  lightSourceDataColor2: any;
  lightSourceDataColor3: any;
  lightSourceDataColor4: any;

  MetamericPopup1: any;
  MetamericPopup2: any;
  MetamericPopup3: any;
  MetamericPopup4: any;

  process: any;
  dischargability: any;
  dyesRange: any;
  lightSourcePrimary: any
  lightSourceSecondary: any;
  lightSourceTertiary: any;
  samplereamark: any;
  ShadeIdforPassinDataColor: any;
  predictionDataNotAvailabe: boolean = false;
  UserRole: any;
  showUpdatebtnInrecipePrediction: boolean = false;
  getUpdatedRecipeFromDataColor: boolean = false;

  allConsigneeData: any
  GetAllLabPredictionDataForFilter: any;

  defaultVisible: boolean = false;
  remarkPopupVisible: boolean = false;
  ScreenSizeWidth: number;
  popUpWidth: string;
  lightSourcePoupup1: any;
  lightSourcePoupup2: any;
  lightSourcePoupup3: any;
  lightSourcePoupup4: any;

  popupRemark: any

  productPurchaseColDef: any;
  autoGroupPurchase: any;
  defaultColDef: any;
  groupDefaultExpanded = -1;
  rowGroupPanelShow = 'always';
  productInfoGridApi: any;
  productInfoGridColumnApi: any;

  StatusData = [
    {
      ID: 1,
      Name: 'Under Process'
    },
    {
      ID: 2,
      Name: 'Prediction'
    },
    {
      ID: 3,
      Name: 'Shade Matching'
    }
  ];
  allColorGamutData: any;
  selectedColorGamut: any = '';
  shadeMatchingDataNotAvailable: boolean = false;
  showUpdatebtnInShadeMatching: boolean = false;
  getUpdatedShadeMatchingFromDataColor: boolean = false;
  filter = {
    colorGamutSelected: '',
  }

  //Shade Matching in Expand 
  shadeMatchigDataAvialvble: boolean = false;

  showOption1ShadeMatching: boolean = false;
  showOption2ShadeMatching: boolean = false;
  showOption3ShadeMatching: boolean = false;
  showOption4ShadeMatching: boolean = false;

  shadeMatchingAllData: any;
  shadeMatchingOption1Data: any;
  shadeMatchingOption2Data: any;
  shadeMatchingOption3Data: any;
  shadeMatchingOption4Data: any;

  rgbshadeMatchingOption1: any
  rgbshadeMatchingOption2: any
  rgbshadeMatchingOption3: any
  rgbshadeMatchingOption4: any

  predictionAvilable: boolean = false;
  shadeMatchingAvilable: boolean = false;
  selectedfilterCaseId: string = '';
  selectedStatusValue: string = '';

  //remarks for prediction
  remarkPredictionOp1: any;
  remarkPredictionOp2: any;
  remarkPredictionOp3: any;
  remarkPredictionOp4: any;

  //remarks for matching
  remarkMatchingOp1: any
  remarkMatchingOp2: any
  remarkMatchingOp3: any
  remarkMatchingOp4: any


  shadeMatchingBtn: boolean = true;
  popupMoreThanOneOptionPrediction: boolean = false;
  popupMoreThanOneOptionMatching: boolean = false;
  moreThanOnePredctionOption: boolean = false;
  moreThanOneMatchingOption: boolean = false;

  PredictionRemarkOp1: boolean = false;
  PredictionRemarkOp2: boolean = false;
  PredictionRemarkOp3: boolean = false;
  PredictionRemarkOp4: boolean = false;

  remarkPopupVisible1: boolean = false;
  Remarks: any;
  MatchingRemarkOp1: any;
  MatchingRemarkOp2: any;
  MatchingRemarkOp3: any;
  MatchingRemarkOp4: any;
  lightSourceCount: any = 0;
  lightSourceCount2: any = 0;
  lightSourceCount3: any = 0;
  lightSourceCount4: any = 0;
  ShadeMatchingPdfOption1: any = [];
  ShadeMatchingPdfOption2: any = [];
  ShadeMatchingPdfOption3: any = [];
  ShadeMatchingPdfOption4: any = [];
  UpdateAttachmentsOption1: any[] = [];
  UpdateAttachmentsOption2: any[] = [];
  UpdateAttachmentsOption3: any[] = [];
  UpdateAttachmentsOption4: any[] = [];
  filespushData: any[] = [];
  DownloadPath: any = 'http://219.65.56.59:8595/api/DGColorDocument/';
  constructor(public apiService: ApiService, private router: Router, private secure: SecureComponent) {
    this.isShowPopOver = false;
    this.ScreenSizeWidth = window.innerWidth;
    if (this.ScreenSizeWidth >= 1366) {
      this.popUpWidth = '53%';
    }
    else {
      this.popUpWidth = '94%';
    }

    this.productPurchaseColDef = [
      {
        headerName: 'Item Category',
        field: 'itemCategoryCode',
        rowGroup: true,
        hide: true,
      },
      {
        headerName: 'Range',
        field: 'product Sub Category',
        // rowGroup: true,
        // hide: true,
      },
      {
        headerName: 'Product Name',
        field: 'description',
        minWidth: 220,
      },
      {
        headerName: 'Quantity',
        field: 'qty',
        type: 'rightAligned'
      },
      {
        headerName: 'Rating',
        field: 'rating',
        type: 'rightAligned',
        sort: 'desc',
      }
    ];

    this.autoGroupPurchase = {
      headerName: "Product Code",
      field: 'item No_',
      minWidth: 120,
      sort: 'desc',
      resizable: true,
      menuTabs: ['filterMenuTab', 'columnsMenuTab', 'generalMenuTab'],
      sortable: true,
      filterParams: {
        applyMiniFilterWhileTyping: true
      },
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
      },
    }

    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      flex: 1,
      minWidth: 90,
      sortable: true,
      filter: true,
      // suppressMenu: true,
      menuTabs: ['filterMenuTab', 'columnsMenuTab', 'generalMenuTab'],
      resizable: true,
      headerComponentParams: {
        template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
          '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>',
      }
    }
  }

  toggleDefault() {
    this.isShowPopOver = !this.isShowPopOver;
  }

  ngOnInit(): void {
    this.secure.showHideLogo = false;
    this.UserRole = localStorage.getItem('UserRole');
    this.windowHeight = (window.innerHeight) - 180;
    this.windowHeight = this.windowHeight + 'px';
    this.UserId = localStorage.getItem('empCode');
    this.UserId = this.UserId.substring(1, this.UserId.length - 1);
    this.UserRole = this.UserRole.substring(1, this.UserRole.length - 1);
    if (this.UserId == '70377') {

      this.UserRole = 'DG Color HOD';
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.dummydata = [{
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com',
      Status: "Under Process",
      rbgcode: "#F7A76C",
    }, {
      ID: 2,
      CompanyName: 'Electronics Depot',
      Address: '2455 Paces Ferry Road NW',
      City: 'Atlanta',
      State: 'Georgia',
      Zipcode: 30339,
      Phone: '(800) 595-3232',
      Fax: '(800) 595-3231',
      Website: 'http://www.nowebsitedepot.com',
      Status: "Prediction",
      rbgcode: "#FAD6A5",
    }, {
      ID: 3,
      CompanyName: 'K&S Music',
      Address: '1000 Nicllet Mall',
      City: 'Minneapolis',
      State: 'Minnesota',
      Zipcode: 55403,
      Phone: '(612) 304-6073',
      Fax: '(612) 304-6074',
      Website: 'http://www.nowebsitemusic.com',
      Status: "Matching",
      rbgcode: "#7FB77E",
    }];
    this.getAllConsginee();
    this.getAllLabPrediction();
  }

  getAllConsginee() {
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.Get_All_Consginee, '')
      .subscribe((res: any) => {
        this.allConsigneeData = res.table;
      });
  }

  getAllLabPrediction() {
    // this.loadingVisible = true;
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GetAllCustomerDataForShadeMatching, '')
      .subscribe((res: any) => {
        this.GetAllLabPredictionDataForFilter = res.table;
        this.GetAllLabPredictionData = res.table;
        this.StatusDataSource = [
          {
            shadeStatus: 'Under Process'
          },
          {
            shadeStatus: 'Prediction'
          },
          {
            shadeStatus: 'Matching'
          }
        ];
      });
  }

  onClickGetShadeDetails(event: any, shadeDetail: any) {
    this.PopupVisible = true;
    this.SelectedCaseId = shadeDetail.caseId;
    this.SelectedshadeName = shadeDetail.shadeName;
    this.Selectedshadeid = shadeDetail.shadeid;
    this.SelectedConsigneeCode = shadeDetail.consigneeCode;
    this.SelectedConsigneeName = shadeDetail.consigneeName;
    this.getPoupupPredictionData(1, shadeDetail.shadeid);
    if (shadeDetail.customerRequirement == 'Recipe Prediction')
      this.shadeMatchingBtn = false;
    else
      this.shadeMatchingBtn = true;
  }

  PopupClose(event: any) {
    this.PopupVisible = false;

    this.SelectedCaseId = "";
    this.SelectedshadeName = "";
    this.Selectedshadeid = "";
    this.SelectedConsigneeCode = "";
    this.SelectedConsigneeName = "";

    // Lab Parameter and fastness 
    this.labPredictionParameter = [];
    this.process = "";
    this.dyesRange = "";
    this.dischargability = "";
    this.lightSourcePrimary = "";
    this.lightSourceSecondary = "";
    this.lightSourceTertiary = "";
    this.samplereamark = "";
    this.fastnessData = [];


    // Recipe Prediction
    this.popUpPredictionAllData = [];
    this.popUpPredictionOption1Data = [];
    this.popUpPredictionOption2Data = [];
    this.popUpPredictionOption3Data = [];
    this.popUpPredictionOption4Data = [];

    this.popUpRgbCodeOption1 = "";
    this.popUpRgbCodeOption2 = "";
    this.popUpRgbCodeOption3 = "";
    this.popUpRgbCodeOption4 = "";

    this.poupShowPredictionOption1 = false;
    this.poupShowPredictionOption2 = false;
    this.poupShowPredictionOption3 = false;
    this.poupShowPredictionOption4 = false;

    this.chkOption1 = false;
    this.chkOption2 = false;
    this.chkOption3 = false;
    this.chkOption4 = false;

    // Popup Shade Matching 
    this.popUpShadeMatchingAllData = [];
    this.popUpShadeMatchingOption1Data = [];
    this.popUpShadeMatchingOption2Data = [];
    this.popUpShadeMatchingOption3Data = [];
    this.popUpShadeMatchingOption4Data = [];

    this.popUpShadeMatchingRgbCodeOption1 = "";
    this.popUpShadeMatchingRgbCodeOption2 = "";
    this.popUpShadeMatchingRgbCodeOption3 = "";
    this.popUpShadeMatchingRgbCodeOption4 = "";

    this.poupShowShadeMatchingOption1 = false;
    this.poupShowShadeMatchingOption2 = false;
    this.poupShowShadeMatchingOption3 = false;
    this.poupShowShadeMatchingOption4 = false;

    this.chkShadeMatchingOption1 = false;
    this.chkShadeMatchingOption2 = false;
    this.chkShadeMatchingOption3 = false;
    this.chkShadeMatchingOption4 = false;

    this.popupMoreThanOneOptionPrediction = false;
    this.popupMoreThanOneOptionMatching = false;
    this.shadeMatchingDataNotAvailable = false;
    this.predictionDataNotAvailabe = false;

    this.ShadeMatchingPdfOption1 = [];
    this.ShadeMatchingPdfOption2 = [];
    this.ShadeMatchingPdfOption3 = [];
    this.ShadeMatchingPdfOption4 = [];
    
    this.UpdateAttachmentsOption1 = [];
    this.UpdateAttachmentsOption2 = [];
    this.UpdateAttachmentsOption3 = [];
    this.UpdateAttachmentsOption4 = [];

    // this.router.navigate(["/digicolor/shadeMatching/"]);

  }

  statusValueChange(data: any, status: any, shadeId: any) {
    // if (data.previousValue != "Prediction") {
    //   this.loadingVisible = true;
    //   this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.UpdateShadeIdStatusByJayEmployee, { empCode: this.UserId, shadeId: shadeId })
    //     .subscribe((res: any) => {

    //     });
    // }
  }

  expandCollapse(data: any) {
    const dt = {
      shadeId: data.shadeid
    }
    this.shadeId = data.shadeid;
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GerRecipeANDLabTesingParamter, dt)
      .subscribe((res: any) => {
        if (res.table.length > 0) {
          this.moreThanOnePredctionOption = false;
          this.predictionAvilable = true;
          this.shadeMatchigDataAvialvble = false;
          this.recipeAllData = res.table;
          const maxValueOftrail = Math.max(...res.table.map((o: any) => o.predictionOption), 0);
          this.receipeData = res.table.filter((par: any) => par.predictionOption == 1);
          if (maxValueOftrail >= 1) {
            this.showOption1RecipeData = true;
            this.receipeOptionData1 = res.table.filter((par: any) => par.predictionOption == 1);
            this.receipeOptionData1.forEach((element: any) => {
              if (element.uom == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.uom == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbCodeOption1 = this.receipeOptionData1[0].rgbCode;
            if (this.receipeOptionData1 && this.receipeOptionData1[0].lightsourceByDataColor && this.receipeOptionData1[0].lightsourceByDataColor != null && this.receipeOptionData1[0].lightsourceByDataColor != undefined) {
              let templightSourceDataColor1 = this.receipeOptionData1[0].lightsourceByDataColor.slice(0, -5);
              let lightVar1 = templightSourceDataColor1.split('/');
              this.lightSourceDataColor1 = ''
              this.lightSourceCount = 0;
              lightVar1.forEach((element: any) => {
                if (element.length != 5) {
                  this.lightSourceCount = this.lightSourceCount + 1;
                  if (this.lightSourceDataColor1 != '') {
                    this.lightSourceDataColor1 = this.lightSourceDataColor1 + '/' + element
                  } else {
                    this.lightSourceDataColor1 = element
                  }
                }
              });
            }
            if (this.receipeOptionData1 && this.receipeOptionData1[0].matamerismByDataColor && this.receipeOptionData1[0].matamerismByDataColor != null && this.receipeOptionData1[0].matamerismByDataColor != undefined) {
              this.Metameric1 = this.receipeOptionData1[0].matamerismByDataColor.slice(0, -6);
              if (this.lightSourceCount == 2) {
                this.Metameric1 = this.Metameric1.slice(0, -7)
              }
              if (this.lightSourceCount == 1) {
                this.Metameric1 = this.Metameric1.slice(0, -14)
              }
            }
            this.PredictionRemarkOp1 = this.receipeOptionData1[0].remarks;
          } else {
            this.showOption1RecipeData = false;
          }
          if (maxValueOftrail >= 2) {
            this.moreThanOnePredctionOption = true;
            this.showOption2RecipeData = true;
            this.receipeOptionData2 = res.table.filter((par: any) => par.predictionOption == 2);
            this.receipeOptionData2.forEach((element: any) => {
              if (element.uom == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.uom == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbCodeOption2 = this.receipeOptionData2[0].rgbCode;
            if (this.receipeOptionData2 && this.receipeOptionData2[0].lightsourceByDataColor && this.receipeOptionData2[0].lightsourceByDataColor != null && this.receipeOptionData2[0].lightsourceByDataColor != undefined) {
              let templightSourceDataColor1 = this.receipeOptionData2[0].lightsourceByDataColor.slice(0, -5);
              let lightVar1 = templightSourceDataColor1.split('/');
              this.lightSourceDataColor2 = ''
              this.lightSourceCount2 = 0;
              lightVar1.forEach((element: any) => {
                if (element.length != 5) {
                  this.lightSourceCount2 = this.lightSourceCount2 + 1;
                  if (this.lightSourceDataColor2 != '') {
                    this.lightSourceDataColor2 = this.lightSourceDataColor2 + '/' + element
                  } else {
                    this.lightSourceDataColor2 = element
                  }
                }
              });
            }
            if (this.receipeOptionData2 && this.receipeOptionData2[0].matamerismByDataColor && this.receipeOptionData2[0].matamerismByDataColor != null && this.receipeOptionData2[0].matamerismByDataColor != undefined) {
              this.Metameric2 = this.receipeOptionData2[0].matamerismByDataColor.slice(0, -6);
              if (this.lightSourceCount2 == 2) {
                this.Metameric2 = this.Metameric2.slice(0, -7)
              }
              if (this.lightSourceCount2 == 1) {
                this.Metameric2 = this.Metameric2.slice(0, -14)
              }
            }

            this.PredictionRemarkOp2 = this.receipeOptionData2[0].remarks;
          } else {
            this.showOption2RecipeData = false;
          }
          if (maxValueOftrail >= 3) {
            this.showOption3RecipeData = true;
            this.receipeOptionData3 = res.table.filter((par: any) => par.predictionOption == 3);
            this.receipeOptionData3.forEach((element: any) => {
              if (element.uom == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.uom == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbCodeOption3 = this.receipeOptionData3[0].rgbCode;
            if (this.receipeOptionData3 && this.receipeOptionData3[0].lightsourceByDataColor && this.receipeOptionData3[0].lightsourceByDataColor != null && this.receipeOptionData3[0].lightsourceByDataColor != undefined) {
              let templightSourceDataColor1 = this.receipeOptionData3[0].lightsourceByDataColor.slice(0, -5);
              let lightVar1 = templightSourceDataColor1.split('/');
              this.lightSourceDataColor3 = ''
              this.lightSourceCount3 = 0;
              lightVar1.forEach((element: any) => {
                if (element.length != 5) {
                  this.lightSourceCount3 = this.lightSourceCount3 + 1;
                  if (this.lightSourceDataColor3 != '') {
                    this.lightSourceDataColor3 = this.lightSourceDataColor3 + '/' + element
                  } else {
                    this.lightSourceDataColor3 = element
                  }
                }
              });
            }
            if (this.receipeOptionData3 && this.receipeOptionData3[0].matamerismByDataColor && this.receipeOptionData3[0].matamerismByDataColor != null && this.receipeOptionData3[0].matamerismByDataColor != undefined) {
              this.Metameric3 = this.receipeOptionData3[0].matamerismByDataColor.slice(0, -6);
              if (this.lightSourceCount3 == 2) {
                this.Metameric3 = this.Metameric3.slice(0, -7)
              }
              if (this.lightSourceCount2 == 1) {
                this.Metameric3 = this.Metameric3.slice(0, -14)
              }
            }

            this.PredictionRemarkOp3 = this.receipeOptionData3[0].remarks;
          } else {
            this.showOption3RecipeData = false;
          }
          if (maxValueOftrail >= 4) {
            this.showOption4RecipeData = true;
            this.receipeOptionData4 = res.table.filter((par: any) => par.predictionOption == 4);
            this.receipeOptionData4.forEach((element: any) => {
              if (element.uom == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.uom == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbCodeOption4 = this.receipeOptionData4[0].rgbCode;
            if (this.receipeOptionData4 && this.receipeOptionData4[0].lightsourceByDataColor && this.receipeOptionData4[0].lightsourceByDataColor != null && this.receipeOptionData4[0].lightsourceByDataColor != undefined) {
              let templightSourceDataColor1 = this.receipeOptionData4[0].lightsourceByDataColor.slice(0, -5);
              let lightVar1 = templightSourceDataColor1.split('/');
              this.lightSourceDataColor4 = ''
              lightVar1.forEach((element: any) => {
                if (element.length != 5) {
                  this.lightSourceCount4 = this.lightSourceCount4 + 1;
                  if (this.lightSourceDataColor4 != '') {
                    this.lightSourceDataColor4 = this.lightSourceDataColor4 + '/' + element
                  } else {
                    this.lightSourceDataColor4 = element
                  }
                }
              });
            }
            if (this.receipeOptionData4 && this.receipeOptionData4[0].matamerismByDataColor && this.receipeOptionData4[0].matamerismByDataColor != null && this.receipeOptionData4[0].matamerismByDataColor != undefined) {
              this.Metameric4 = this.receipeOptionData4[0].matamerismByDataColor.slice(0, -6);
              if (this.lightSourceCount4 == 2) {
                this.Metameric4 = this.Metameric4.slice(0, -7)
              }
              if (this.lightSourceCount2 == 1) {
                this.Metameric4 = this.Metameric4.slice(0, -14)
              }
            }
            this.PredictionRemarkOp4 = this.receipeOptionData4[0].remarks;
          } else {
            this.showOption4RecipeData = false;
          }
        }
        else {
          this.predictionAvilable = false;
        }

        this.labPredictionParameter = res.table1;
        if (res && res.table1.length > 0) {
          this.process = res.table1[0].process;
          this.dyesRange = res.table1[0].dyesRange;
          this.dischargability = res.table1[0].dischargability;
          this.lightSourcePrimary = res.table1[0].lightSourcePrimary;
          this.lightSourceSecondary = res.table1[0].lightSourceSecondary;
          this.lightSourceTertiary = res.table1[0].lightSourceTertiary;
          this.samplereamark = res.table1[0].sampleRemarks;
        }
        this.fastnessData = res.table2;
        if (res.table3.length > 0) {
          this.moreThanOneMatchingOption = false;
          this.shadeMatchingAvilable = true;
          this.predictionAvilable = false;
          this.shadeMatchingAllData = res.table3;
          const maxValueOftrail = Math.max(...res.table3.map((o: any) => o.trail), 0);
          this.shadeMatchingAllData = res.table3.filter((par: any) => par.trail == 1);
          if (maxValueOftrail >= 1) {
            this.showOption1ShadeMatching = true;

            this.shadeMatchingOption1Data = res.table3.filter((par: any) => par.trail == 1);
            this.shadeMatchingOption1Data.forEach((element: any) => {
              if (element.recunit == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.recunit == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbshadeMatchingOption1 = this.shadeMatchingOption1Data[0].rgbHexaCode;
            this.MatchingRemarkOp1 = this.shadeMatchingOption1Data[0].remarks;
          } else {
            this.showOption1ShadeMatching = false;
          }
          if (maxValueOftrail >= 2) {
            this.moreThanOneMatchingOption = true;
            this.showOption2ShadeMatching = true;
            this.shadeMatchingOption2Data = res.table3.filter((par: any) => par.trail == 2);
            this.shadeMatchingOption2Data.forEach((element: any) => {
              if (element.recunit == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.recunit == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbshadeMatchingOption2 = this.shadeMatchingOption2Data[0].rgbHexaCode;
            this.MatchingRemarkOp2 = this.shadeMatchingOption2Data[0].remarks;
          } else {
            this.showOption2ShadeMatching = false;
          }
          if (maxValueOftrail >= 3) {
            this.showOption3ShadeMatching = true;
            this.shadeMatchingOption3Data = res.table3.filter((par: any) => par.trail == 3);
            this.shadeMatchingOption3Data.forEach((element: any) => {
              if (element.recunit == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.recunit == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbshadeMatchingOption3 = this.shadeMatchingOption3Data[0].rgbHexaCode;
            this.MatchingRemarkOp3 = this.shadeMatchingOption3Data[0].remarks;
          } else {
            this.showOption3ShadeMatching = false;
          }
          if (maxValueOftrail >= 4) {
            this.showOption4ShadeMatching = true;
            this.shadeMatchingOption4Data = res.table3.filter((par: any) => par.trail == 4);
            this.shadeMatchingOption4Data.forEach((element: any) => {
              if (element.recunit == 'g/l') {
                element.recipe = parseFloat(element.recipe).toFixed(2);
              }
              else if (element.recunit == '%') {
                element.recipe = parseFloat(element.recipe).toFixed(4);
              }
            });
            this.rgbshadeMatchingOption4 = this.shadeMatchingOption4Data[0].rgbHexaCode;
            this.MatchingRemarkOp4 = this.shadeMatchingOption4Data[0].remarks;
          } else {
            this.showOption4ShadeMatching = false;
          }
        }
        else {
          this.shadeMatchingAvilable = false;
        }

        // this.labPredictionParameter = res.table1;
        // this.fastnessData = res.table2;
      });
  }

  OnPopupButtonClick(tabNo: any) {
    if (tabNo == 1) {
      this.tabLabTesting = true;
      this.labTestingParameter = true;
      this.productInfo = true;
      this.tabRecipePredcition = false;
    }
    else if (tabNo == 2) {
      this.tabLabTesting = false;
      this.labTestingParameter = false;
      this.productInfo = false;
      this.tabRecipePredcition = true;
    }
  }

  getPoupupPredictionData(tabNo: any, shadeId: any) {
    this.isActive = tabNo;
    if (tabNo == 1) {
      this.tabLabTesting = true;
      this.tabRecipePredcition = false;
      this.tabShadeMatching = false;
      this.getLabTestingParameterData(shadeId);
    }
    else if (tabNo == 2) {
      this.tabRecipePredcition = true;
      this.tabLabTesting = false;
      this.tabShadeMatching = false;
      this.getRecipePredictionData(shadeId);
    }
    else if (tabNo == 3) {
      this.tabShadeMatching = true;
      this.tabLabTesting = false;
      this.tabRecipePredcition = false;
      this.getAllColorGamut();
      this.getShadeMatchingData(shadeId);
    }
  }

  getAllColorGamut() {
    this.allColorGamutData = [];
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(API_CONSTANTS.DigiColor.ShadeMatching.Get_All_Color_Gamut, '')
      .subscribe((res: any) => {
        this.allColorGamutData = res.table;
      })
  }

  getDatafromDataColorForUpdatedRecipe(shadeId: any) {
    if (shadeId) {
      const dt = {
        shadeId: shadeId,
        caseIdSharedIdGroup: ''
      }
      this.loadingVisible = true;
      this.getUpdatedRecipeFromDataColor = true;
      this.GetShadeIdDetailFromDataColorData(dt);
    }
  }

  getLabTestingParameterData(shadeId: any) {
    this.loadingVisible = true;
    const dt = {
      shadeId: shadeId
    }
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GerRecipeANDLabTesingParamter, dt)
      .subscribe((res: any) => {
        this.labPredictionParameter = res.table1;
        this.process = res.table1[0].process;
        this.dyesRange = res.table1[0].dyesRange;
        this.dischargability = res.table1[0].dischargability;
        this.lightSourcePrimary = res.table1[0].lightSourcePrimary;
        this.lightSourceSecondary = res.table1[0].lightSourceSecondary;
        this.lightSourceTertiary = res.table1[0].lightSourceTertiary;
        this.samplereamark = res.table1[0].sampleRemarks;

        this.fastnessData = res.table2;
        this.loadingVisible = false;
      });
    this.onLabOrProductInfoClick(1);
  }

  getRecipePredictionData(shadeId: any) {
    this.loadingVisible = true;
    if (shadeId) {
      const dt = {
        shadeId: shadeId,
        caseIdSharedIdGroup: ''
      }
      this.GetShadeIdDetailFromJayChemicalData(dt);
    }
  }

  GetShadeIdDetailFromJayChemicalData(dt: any) {
    this.ShadeIdforPassinDataColor = dt;
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(API_CONSTANTS.DigiColor.ShadeMatching.GetShadeIdDetailFromJayChemical, dt)
      .subscribe((res: any) => {
        if (res.table && res.table.length > 0) {

          this.FilterDataAfterGetRecipe(res.table, 'fromJayChemical');
          this.predictionDataNotAvailabe = false
          this.showUpdatebtnInrecipePrediction = true;
        } else {
          this.showUpdatebtnInrecipePrediction = false;
          this.GetShadeIdDetailFromDataColorData(this.ShadeIdforPassinDataColor);
        }
      });
  }

  GetShadeIdDetailFromDataColorData(dt: any) {
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(API_CONSTANTS.DigiColor.ShadeMatching.Get_ShadeId_Detail_For_OutwardPrediction, dt)
      .subscribe((res: any) => {
        if (res.table4 && res.table4.length > 0) {
          this.FilterDataAfterGetRecipe(res.table4, 'fromDataColor');
        }
        else {
          this.loadingVisible = false;
          this.predictionDataNotAvailabe = true;
        }
      });
  }

  FilterDataAfterGetRecipe(res: any, type: any) {
    this.popUpPredictionAllData = [];
    this.popUpPredictionAllData = res;
    if (type == 'fromDataColor') {
      res.forEach((element: any) => {
        element.caseid = this.SelectedCaseId;
        element.shadeName = this.SelectedshadeName;
        element.shadeid = this.Selectedshadeid;
        element.consigneeCode = this.SelectedConsigneeCode;
        // element.isShowToCustomer = 0;
        // element.isApprove = 0;
        element.remark = '';
      });
    }
    if (type == 'fromJayChemical') {
      res.forEach((element: any) => {
        element.caseid = this.SelectedCaseId;
        element.shadeName = this.SelectedshadeName;
        element.shadeid = this.Selectedshadeid;
        element.consigneeCode = this.SelectedConsigneeCode;
      });
    }
    const maxValueOftrail = Math.max(...res.map((o: any) => o.trail), 0);
    this.predictionDataNotAvailabe = false;
    if (maxValueOftrail >= 1) {
      this.poupShowPredictionOption1 = true;
      this.popUpPredictionOption1Data = res.filter((par: any) => par.trail == 1);
      this.popUpRgbCodeOption1 = this.popUpPredictionOption1Data[0].rgbHexaCode;
      this.chkOption1 = this.popUpPredictionOption1Data[0].isShowToCustomer;
      this.remarkPredictionOp1 = this.popUpPredictionOption1Data[0].remarks;
      //this.MetamericPopup1 = this.popUpPredictionOption1Data[0].primarymetamerism + "/" + this.popUpPredictionOption1Data[0].secondarymetamerism + "/" + this.popUpPredictionOption1Data[0].thirdmetamerism;
      if (this.popUpPredictionOption1Data && this.popUpPredictionOption1Data[0].matamerism && this.popUpPredictionOption1Data[0].matamerism != null && this.popUpPredictionOption1Data[0].matamerism != undefined) {
        this.MetamericPopup1 = this.popUpPredictionOption1Data[0].matamerism.slice(0, -6);
      }
      if (this.popUpPredictionOption1Data && this.popUpPredictionOption1Data[0].lightsource && this.popUpPredictionOption1Data[0].lightsource != null && this.popUpPredictionOption1Data[0].lightsource != undefined) {
        this.lightSourcePoupup1 = this.popUpPredictionOption1Data[0].lightsource.slice(0, -5);
      }
      if (this.popUpPredictionOption1Data[0].isShowToCustomer == true) {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.isShowToCustomer = 1;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.isShowToCustomer = 0;
          }
        });
      }
    } else {
      this.poupShowPredictionOption1 = false;
    }

    if (maxValueOftrail >= 2) {
      this.popupMoreThanOneOptionPrediction = true;
      this.poupShowPredictionOption2 = true;
      this.popUpPredictionOption2Data = res.filter((par: any) => par.trail == 2);
      this.popUpRgbCodeOption2 = this.popUpPredictionOption2Data[0].rgbHexaCode;
      this.chkOption2 = this.popUpPredictionOption2Data[0].isShowToCustomer;
      this.remarkPredictionOp2 = this.popUpPredictionOption2Data[0].remarks;
      //this.MetamericPopup2 = this.popUpPredictionOption2Data[0].primarymetamerism + "/" + this.popUpPredictionOption2Data[0].secondarymetamerism + "/" + this.popUpPredictionOption2Data[0].thirdmetamerism;
      if (this.popUpPredictionOption2Data && this.popUpPredictionOption2Data[0].matamerism && this.popUpPredictionOption2Data[0].matamerism != null && this.popUpPredictionOption2Data[0].matamerism != undefined) {
        this.MetamericPopup2 = this.popUpPredictionOption2Data[0].matamerism.slice(0, -6);
      }
      if (this.popUpPredictionOption2Data && this.popUpPredictionOption2Data[0].lightsource && this.popUpPredictionOption2Data[0].lightsource != null && this.popUpPredictionOption2Data[0].lightsource != undefined) {
        this.lightSourcePoupup2 = this.popUpPredictionOption2Data[0].lightsource.slice(0, -5);
      }
      if (this.popUpPredictionOption2Data[0].isShowToCustomer == true) {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.isShowToCustomer = 1;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.isShowToCustomer = 0;
          }
        });
      }
    } else {
      this.poupShowPredictionOption2 = false;
    }

    if (maxValueOftrail >= 3) {
      this.poupShowPredictionOption3 = true;
      this.popUpPredictionOption3Data = res.filter((par: any) => par.trail == 3);
      this.popUpRgbCodeOption3 = this.popUpPredictionOption3Data[0].rgbHexaCode;
      this.chkOption3 = this.popUpPredictionOption3Data[0].isShowToCustomer;
      this.remarkPredictionOp3 = this.popUpPredictionOption3Data[0].remarks;
      //this.MetamericPopup3 = this.popUpPredictionOption3Data[0].primarymetamerism + "/" + this.popUpPredictionOption3Data[0].secondarymetamerism + "/" + this.popUpPredictionOption3Data[0].thirdmetamerism;
      if (this.popUpPredictionOption3Data && this.popUpPredictionOption3Data[0].matamerism && this.popUpPredictionOption3Data[0].matamerism != null && this.popUpPredictionOption3Data[0].matamerism != undefined) {
        this.MetamericPopup3 = this.popUpPredictionOption3Data[0].matamerism.slice(0, -6);
      }
      if (this.popUpPredictionOption3Data && this.popUpPredictionOption3Data[0].lightsource && this.popUpPredictionOption3Data[0].lightsource != null && this.popUpPredictionOption3Data[0].lightsource != undefined) {
        this.lightSourcePoupup3 = this.popUpPredictionOption3Data[0].lightsource.slice(0, -5);
      }
      if (this.popUpPredictionOption3Data[0].isShowToCustomer == true) {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.isShowToCustomer = 1;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.isShowToCustomer = 0;
          }
        });
      }
    } else {
      this.poupShowPredictionOption3 = false;
    }

    if (maxValueOftrail >= 4) {
      this.poupShowPredictionOption4 = true;
      this.popUpPredictionOption4Data = res.filter((par: any) => par.trail == 4);
      this.popUpRgbCodeOption4 = this.popUpPredictionOption4Data[0].rgbHexaCode;
      this.chkOption4 = this.popUpPredictionOption4Data[0].isShowToCustomer;
      this.remarkPredictionOp4 = this.popUpPredictionOption4Data[0].remarks;
      if (this.popUpPredictionOption4Data && this.popUpPredictionOption4Data[0].matamerism && this.popUpPredictionOption4Data[0].matamerism != null && this.popUpPredictionOption4Data[0].matamerism != undefined) {
        this.MetamericPopup4 = this.popUpPredictionOption4Data[0].matamerism.slice(0, -6);
      }
      if (this.popUpPredictionOption4Data && this.popUpPredictionOption4Data[0].lightsource && this.popUpPredictionOption4Data[0].lightsource != null && this.popUpPredictionOption4Data[0].lightsource != undefined) {
        this.lightSourcePoupup4 = this.popUpPredictionOption4Data[0].lightsource.slice(0, -5);
      }
      if (this.popUpPredictionOption4Data[0].isShowToCustomer == true) {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.isShowToCustomer = 1;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.isShowToCustomer = 0;
          }
        });
      }
    } else {
      this.poupShowPredictionOption4 = false;
    }
    this.loadingVisible = false;
  }
  getDatafromDataColorForUpdatedShadeMatching(shadeId: any) {
    if (shadeId) {
      const dt = {
        shadeId: shadeId,
        caseIdSharedIdGroup: ''
      }
      this.loadingVisible = true;
      this.getUpdatedShadeMatchingFromDataColor = true;
      this.GetShadeMatchingDataFromDataColorData(dt);
    }
  }
  getShadeMatchingData(shadeId: any) {
    this.loadingVisible = true;
    const dt = {
      shadeId: shadeId
    }
    this.GetShadeMatchingetailFromJayChemicalData(dt);
  }

  GetShadeMatchingetailFromJayChemicalData(dt: any) {
    this.ShadeIdforPassinDataColor = dt;
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GetShadeMatchingDataFromJayChemical, dt)
      .subscribe((res: any) => {
        if (res.table && res.table.length > 0) {
          this.FilterShadeMatchingData(res, 'fromJayChemical');
          this.shadeMatchingDataNotAvailable = false
          this.showUpdatebtnInShadeMatching = true;
          this.filter.colorGamutSelected = res.table[0].colourGamut;

        } else {
          this.showUpdatebtnInShadeMatching = false;
          this.GetShadeMatchingDataFromDataColorData(this.ShadeIdforPassinDataColor);
        }



      });
  }
  GetShadeMatchingDataFromDataColorData(dt: any) {
    this.ShadeIdforPassinDataColor = dt;
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GetShadeMatchingDataFromDataColor, dt)
      .subscribe((res: any) => {
        if (res.table && res.table.length > 0) {
          this.FilterShadeMatchingData(res, 'fromDataColor');
        }
        else {
          this.loadingVisible = false;
          this.shadeMatchingDataNotAvailable = true;
        }
      });
  }
  FilterShadeMatchingData(res: any, type: any) {
    if (type == 'fromDataColor') {
      res.table.forEach((element: any) => {
        element.caseid = this.SelectedCaseId;
        element.shadeName = this.SelectedshadeName;
        element.shadeid = this.Selectedshadeid;
        element.consigneeCode = this.SelectedConsigneeCode;
        element.isShowToCustomer = 0;
        element.isApprove = 0;
      });
    }
    if (type == 'fromJayChemical') {
      res.table.forEach((element: any) => {
        element.caseid = this.SelectedCaseId;
        element.shadeName = this.SelectedshadeName;
        element.shadeid = this.Selectedshadeid;
        element.consigneeCode = this.SelectedConsigneeCode;
      });
    }
    if (res.table) {
      this.shadeMatchindData = res.table;
      this.popUpShadeMatchingAllData = res.table;
      res.table.forEach((element: any) => {
        element.caseid = this.SelectedCaseId;
        element.shadeName = this.SelectedshadeName;
        element.shadeid = this.Selectedshadeid;
        element.consigneeCode = this.SelectedConsigneeCode;
        //element.isShowToCustomer = 0;
        //element.isApprove = 0;
      });
      const maxValueOftrail = Math.max(...res.table.map((o: any) => o.trail), 0);

      if (maxValueOftrail >= 1) {
        this.poupShowShadeMatchingOption1 = true;
        this.popUpShadeMatchingOption1Data = res.table.filter((par: any) => par.trail == 1);
        this.popUpShadeMatchingRgbCodeOption1 = this.popUpShadeMatchingOption1Data[0].rgbHexaCode;
        this.chkShadeMatchingOption1 = this.popUpShadeMatchingOption1Data[0].isShowToCustomer;
        this.remarkMatchingOp1 = this.popUpShadeMatchingOption1Data[0].remarks;
        if (this.popUpShadeMatchingOption1Data[0].fileUploadedName) {
          this.UpdateAttachmentsOption1 = this.popUpShadeMatchingOption1Data[0].fileUploadedName.split('|');
        }
        if (this.popUpShadeMatchingOption1Data[0].isShowToCustomer == true) {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 1) {
              element.isShowToCustomer = 1;
            }
          });
        } else {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 1) {
              element.isShowToCustomer = 0;
            }
          });
        }
      } else {
        this.poupShowShadeMatchingOption1 = false;
      }

      if (maxValueOftrail >= 2) {
        this.popupMoreThanOneOptionMatching = true;
        this.poupShowShadeMatchingOption2 = true;
        this.popUpShadeMatchingOption2Data = res.table.filter((par: any) => par.trail == 2);
        this.popUpShadeMatchingRgbCodeOption2 = this.popUpShadeMatchingOption2Data[0].rgbHexaCode;

        this.chkShadeMatchingOption2 = this.popUpShadeMatchingOption2Data[0].isShowToCustomer;
        this.remarkMatchingOp2 = this.popUpShadeMatchingOption2Data[0].remarks;
        if (this.popUpShadeMatchingOption2Data[0].fileUploadedName) {
          this.UpdateAttachmentsOption2 = this.popUpShadeMatchingOption2Data[0].fileUploadedName.split('|');
        }
        if (this.popUpShadeMatchingOption2Data[0].isShowToCustomer == true) {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 2) {
              element.isShowToCustomer = 1;
            }
          });
        } else {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 2) {
              element.isShowToCustomer = 0;
            }
          });
        }
      } else {
        this.poupShowShadeMatchingOption2 = false;
      }

      if (maxValueOftrail >= 3) {
        this.poupShowShadeMatchingOption3 = true;
        this.popUpShadeMatchingOption3Data = res.table.filter((par: any) => par.trail == 3);
        this.popUpShadeMatchingRgbCodeOption3 = this.popUpShadeMatchingOption3Data[0].rgbHexaCode;
        this.chkShadeMatchingOption3 = this.popUpShadeMatchingOption3Data[0].isShowToCustomer;
        this.remarkMatchingOp3 = this.popUpShadeMatchingOption3Data[0].remarks;
        if (this.popUpShadeMatchingOption3Data[0].fileUploadedName) {
          this.UpdateAttachmentsOption3 = this.popUpShadeMatchingOption3Data[0].fileUploadedName.split('|');
        }
        if (this.popUpShadeMatchingOption3Data[0].isShowToCustomer == true) {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 3) {
              element.isShowToCustomer = 1;
            }
          });
        } else {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 3) {
              element.isShowToCustomer = 0;
            }
          });
        }
      } else {
        this.poupShowShadeMatchingOption3 = false;
      }

      if (maxValueOftrail >= 4) {
        this.poupShowShadeMatchingOption4 = true;
        this.popUpShadeMatchingOption4Data = res.table.filter((par: any) => par.trail == 4);
        this.popUpShadeMatchingRgbCodeOption4 = this.popUpShadeMatchingOption4Data[0].rgbHexaCode;
        this.chkShadeMatchingOption4 = this.popUpShadeMatchingOption4Data[0].isShowToCustomer;
        this.remarkMatchingOp4 = this.popUpShadeMatchingOption4Data[0].remarks;
        if (this.popUpShadeMatchingOption4Data[0].fileUploadedName) {
          this.UpdateAttachmentsOption4 = this.popUpShadeMatchingOption4Data[0].fileUploadedName.split('|');
        }
        if (this.popUpShadeMatchingOption4Data[0].isShowToCustomer == true) {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 4) {
              element.isShowToCustomer = 1;
            }
          });
        } else {
          this.popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 4) {
              element.isShowToCustomer = 0;
            }
          });
        }
      } else {
        this.poupShowShadeMatchingOption4 = false;
      }
    }
    this.loadingVisible = false;
  }
  onLabOrProductInfoClick(LabOrProduct: any) {
    this.isActiveForLabProduct = LabOrProduct;
    if (LabOrProduct == 1) {
      this.labTestingParameter = true;
      this.productInfo = false;
    }
    else if (LabOrProduct == 2) {
      this.labTestingParameter = false;
      this.productInfo = true;
      this.getProductInfoDetail(this.SelectedConsigneeCode);
    }
  }

  getProductInfoDetail(consgineeCode: any) {
    this.loadingVisible = true;
    this.ProductPurchaseInfo = [];
    var a = window.navigator.onLine;
    if (a == false) {
      notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
      return;
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.ShadeMatching.GerCustomerProductPurchase, { consigneeCode: consgineeCode })
      .subscribe((res: any) => {
        this.ProductPurchaseInfo = res.table;
        this.loadingVisible = false;
      });
  }

  onProductInfoGridReady(params: any, grid: any) {
    events.on(grid.viewContainerRef.element.nativeElement, "dxmousewheel", null, (ev: any) => {
      ev.stopPropagation();
    });
    this.productInfoGridApi = params.api;
    this.productInfoGridColumnApi = params.columnApi;
  }

  onSearch() {
    this.productInfoGridApi.setQuickFilter(
      (document.getElementById('filter-text') as any).value
    );
  }

  chkChangeOption1(event: any, data: any) {
    if (event.target.checked) {
      this.chkOption1 = true;
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 1) {
          element.isShowToCustomer = 1;
        }
      });
    }
    else {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 1) {
          element.isShowToCustomer = 0;
        }
      });
      this.chkOption1 = false;
    }
  }
  chkChangeOption2(event: any) {
    if (event.target.checked) {
      this.chkOption2 = true;
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 2) {
          element.isShowToCustomer = 1;
        }
      });
    }
    else {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 2) {
          element.isShowToCustomer = 0;
        }
      });
      this.chkOption2 = false;
    }
  }
  chkChangeOption3(event: any) {
    if (event.target.checked) {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 3) {
          element.isShowToCustomer = 1;
        }
      });
      this.chkOption3 = true;
    }
    else {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 3) {
          element.isShowToCustomer = 0;
        }
      });
      this.chkOption3 = false;
    }
  }
  chkChangeOption4(event: any) {
    if (event.target.checked) {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 4) {
          element.isShowToCustomer = 1;
        }
      });
      this.chkOption4 = true;
    }
    else {
      this.popUpPredictionAllData.forEach((element: any) => {
        if (element.trail == 4) {
          element.isShowToCustomer = 0;
        }
      });
      this.chkOption4 = false;
    }
  }

  SaveRecipePrecdictionData(popUpPredictionAllData: any) {
    this.getRemarksDataforPrediction(popUpPredictionAllData);
    if (popUpPredictionAllData) {
      this.disableUpdateButton = true;
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.InsertRecipePrediction, this.popUpPredictionAllData)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Record Save Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  UpdateRecipePrecdictionData(popUpPredictionAllData: any) {

    this.getRemarksDataforPrediction(popUpPredictionAllData);
    if (popUpPredictionAllData) {
      this.disableUpdateButton = true;
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UpdateRecipePrediction, this.popUpPredictionAllData)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Update Record Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  getRemarksDataforPrediction(popUpPredictionAllData: any) {
    const maxValueOftrail = Math.max(...popUpPredictionAllData.map((o: any) => o.trail), 0);
    if (maxValueOftrail >= 1) {
      if (this.remarkPredictionOp1 !== "") {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.remarks = this.remarkPredictionOp1;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 2
    if (maxValueOftrail >= 2) {
      if (this.remarkPredictionOp2 !== "") {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.remarks = this.remarkPredictionOp2;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 3
    if (maxValueOftrail >= 3) {
      if (this.remarkPredictionOp3 !== "") {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.remarks = this.remarkPredictionOp3;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 4
    if (maxValueOftrail >= 4) {
      if (this.remarkPredictionOp4 !== "") {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.remarks = this.remarkPredictionOp4;
          }
        });
      } else {
        this.popUpPredictionAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.remarks = '';
          }
        });
      }
    }
  }
  getRemarksDataforMatching(popUpShadeMatchingAllData: any) {
    const maxValueOftrail = Math.max(...popUpShadeMatchingAllData.map((o: any) => o.trail), 0);
    if (maxValueOftrail >= 1) {
      if (this.remarkMatchingOp1 !== "") {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.remarks = this.remarkMatchingOp1;
          }
        });
      } else {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 1) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 2
    if (maxValueOftrail >= 2) {
      if (this.remarkMatchingOp2 !== "") {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.remarks = this.remarkMatchingOp2;
          }
        });
      } else {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 2) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 3
    if (maxValueOftrail >= 3) {
      if (this.remarkMatchingOp3 !== "") {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.remarks = this.remarkMatchingOp3;
          }
        });
      } else {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 3) {
            element.remarks = '';
          }
        });
      }
    }

    // For Option 4
    if (maxValueOftrail >= 4) {
      if (this.remarkMatchingOp4 !== "") {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.remarks = this.remarkMatchingOp4;
          }
        });
      } else {
        this.popUpShadeMatchingAllData.forEach((element: any) => {
          if (element.trail == 4) {
            element.remarks = '';
          }
        });
      }
    }

  }
  UpdateRecipeAfterUpdatedRecipeFromDataColor(popUpPredictionAllData: any) {
    if (popUpPredictionAllData) {
      this.disableUpdateButton = true;
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.InsertRecipePredictionAfterLatestGetFromDataColor, this.popUpPredictionAllData)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Record Save Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  chkShadeMatchingChangeOption1(event: any) {
    if (event.target.checked) {
      this.chkShadeMatchingOption1 = true;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 1) {
          element.isShowToCustomer = 1;
        }
      });
    } else {
      this.chkShadeMatchingOption1 = false;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 1) {
          element.isShowToCustomer = 0;
        }
      });
    }
  }
  chkShadeMatchingChangeOption2(event: any) {
    if (event.target.checked) {
      this.chkShadeMatchingOption2 = true;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 2) {
          element.isShowToCustomer = 1;
        }
      });
    } else {
      this.chkShadeMatchingOption2 = false;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 2) {
          element.isShowToCustomer = 0;
        }
      });
    }
  }
  chkShadeMatchingChangeOption3(event: any) {
    if (event.target.checked) {
      this.chkShadeMatchingOption3 = true;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 3) {
          element.isShowToCustomer = 1;
        }
      });
    } else {
      this.chkShadeMatchingOption3 = false;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 3) {
          element.isShowToCustomer = 0;
        }
      });
    }
  }
  chkShadeMatchingChangeOption4(event: any) {
    if (event.target.checked) {
      this.chkShadeMatchingOption4 = true;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 4) {
          element.isShowToCustomer = 1;
        }
      });
    } else {
      this.chkShadeMatchingOption4 = false;
      this.popUpShadeMatchingAllData.forEach((element: any) => {
        if (element.trail == 4) {
          element.isShowToCustomer = 0;
        }
      });
    }
  }

  onColorGamutChnaged(event: any) {
    if (event && event.value) {
      this.selectedColorGamut = event.value;
    }
    else {
      this.selectedColorGamut = '';
    }
  }

  SaveShadeMatching(popUpShadeMatchingAllData: any, selectedColorGamut: any) {
    this.getRemarksDataforMatching(popUpShadeMatchingAllData);
    if (popUpShadeMatchingAllData) {
      this.disableShadeMatchingUpdateButton = true;
      popUpShadeMatchingAllData.forEach((element: any) => {
        element.colourGamut = selectedColorGamut;
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.Insert_Shade_Matching, this.popUpShadeMatchingAllData)
        .subscribe((res: any) => {
          this.disableShadeMatchingUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Update Record Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  UpdateShadeMatchingData(popUpShadeMatchingAllData: any, selectedColorGamut: any) {
    this.getRemarksDataforMatching(popUpShadeMatchingAllData);
    if (popUpShadeMatchingAllData) {
      this.disableUpdateButton = true;
      popUpShadeMatchingAllData.forEach((element: any) => {
        element.colourGamut = selectedColorGamut;
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UpdateShadeMatchingRecipe, this.popUpShadeMatchingAllData)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Update Record Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  GetUploadedFiles(): any[] {
    // const filesd[];
    this.filespushData = [];
    this.UpdateAttachmentsOption1.forEach(element => {
      const file_value = element;
      const file_name = element.substring(19, element.length);
      const fileObj = {};
      fileObj['path'] = this.DownloadPath + file_value;
      fileObj['name'] = file_name;
      this.filespushData.push(fileObj);
    });
    return this.filespushData;
  }
  GetUploadedFilesOption2(): any[] {
    // const filesd[];
    this.filespushData = [];
    this.UpdateAttachmentsOption2.forEach(element => {
      const file_value = element;
      const file_name = element.substring(19, element.length);
      const fileObj = {};
      fileObj['path'] = this.DownloadPath + file_value;
      fileObj['name'] = file_name;
      this.filespushData.push(fileObj);
    });
    return this.filespushData;
  }
  GetUploadedFilesOption3(): any[] {
    // const filesd[];
    this.filespushData = [];
    this.UpdateAttachmentsOption3.forEach(element => {
      const file_value = element;
      const file_name = element.substring(19, element.length);
      const fileObj = {};
      fileObj['path'] = this.DownloadPath + file_value;
      fileObj['name'] = file_name;
      this.filespushData.push(fileObj);
    });
    return this.filespushData;
  }
  GetUploadedFilesOption4(): any[] {
    // const filesd[];
    this.filespushData = [];
    this.UpdateAttachmentsOption4.forEach(element => {
      const file_value = element;
      const file_name = element.substring(19, element.length);
      const fileObj = {};
      fileObj['path'] = this.DownloadPath + file_value;
      fileObj['name'] = file_name;
      this.filespushData.push(fileObj);
    });
    return this.filespushData;
  }
  uploadStart(popUpShadeMatchingAllData: any, da: any, option: any) {
    if (option == 1) {
      const filesToUpload = <File[]>this.ShadeMatchingPdfOption1;
      const formData = new FormData();
      filesToUpload.forEach(element => {
        formData.append('file', element, element.name);
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UploadShadeMatchingPdf, formData)
        .subscribe((res: any) => {
          this.UpdateAttachmentsOption1 = (res).split('|');
          popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 1) {
              element.fileUploadName = res;
            }
          });
        });
    }
    if (option == 2) {
      const filesToUpload = <File[]>this.ShadeMatchingPdfOption2;
      const formData = new FormData();
      filesToUpload.forEach(element => {
        formData.append('file', element, element.name);
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UploadShadeMatchingPdf, formData)
        .subscribe((res: any) => {
          this.UpdateAttachmentsOption2 = (res).split('|');
          popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 2) {
              element.fileUploadName = res;
            }
          });
        });
    }
    if (option == 3) {
      const filesToUpload = <File[]>this.ShadeMatchingPdfOption3;
      const formData = new FormData();
      filesToUpload.forEach(element => {
        formData.append('file', element, element.name);
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UploadShadeMatchingPdf, formData)
        .subscribe((res: any) => {
          this.UpdateAttachmentsOption3 = (res).split('|');
          popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 3) {
              element.fileUploadName = res;
            }
          });
        });
    }
    if (option == 4) {
      const filesToUpload = <File[]>this.ShadeMatchingPdfOption4;
      const formData = new FormData();
      filesToUpload.forEach(element => {
        formData.append('file', element, element.name);
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.UploadShadeMatchingPdf, formData)
        .subscribe((res: any) => {
          this.UpdateAttachmentsOption4 = (res).split('|');
          popUpShadeMatchingAllData.forEach((element: any) => {
            if (element.trail == 4) {
              element.fileUploadName = res;
            }
          });
        });
    }
  }

  onScanPicsend(data: any) {
  }
  UpdateShadeMatchingAfterUpdatedRecipeFromDataColor(popUpShadeMatchingAllData: any, selectedColorGamut: any) {
    if (popUpShadeMatchingAllData) {
      this.disableUpdateButton = true;
      popUpShadeMatchingAllData.forEach((element: any) => {
        element.colourGamut = selectedColorGamut;
      });
      var a = window.navigator.onLine;
      if (a == false) {
        notify({ message: 'Your Internet Connection is not available. please connect Internet.', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
        return;
      }
      this.apiService.post(API_CONSTANTS.DigiColor.ShadeMatching.InsertShadeMatchingAfterLatestGetFromDataColor, this.popUpShadeMatchingAllData)
        .subscribe((res: any) => {
          this.disableUpdateButton = false;
          this.router.navigate(["/digicolor/shadeMatching/"]);
          notify({ message: 'Record Save Successfully', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        });
    }
  }
  consigneeValueChanged(event: any) {
    if (event && event.value) {
      var eventCaseId = event.value.split('-')[0].trim();
      this.selectedfilterCaseId = eventCaseId;
      if (this.selectedStatusValue !== "") {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.caseId == eventCaseId && par.statusForRecipePrediction == this.selectedStatusValue);
      } else {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.caseId == eventCaseId);
      }
    } else {
      this.selectedfilterCaseId = '';
      if (this.selectedStatusValue !== "") {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.statusForRecipePrediction == this.selectedStatusValue);
      } else {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter;
      }
    }
  }

  onClickGetRemarks(fastness: any) {
    this.remarkPopupVisible = true;
    if (fastness.remark) {
      this.popupRemark = fastness.remark;
    }
  }

  remarkPopupClose(event: any) {
    this.popupRemark = '';
    this.remarkPopupVisible = false;
  }

  onStatusValueChanged(event: any) {
    if (event && event.value) {
      if (event.value == 1) {
        this.selectedStatusValue = 'Under Process';
        if (this.selectedfilterCaseId !== "") {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus == 'Under Process' && par.caseId == this.selectedfilterCaseId);
        } else {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus == 'Under Process');
        }
      }
      else if (event.value == 2) {
        this.selectedStatusValue = 'Prediction';
        if (this.selectedfilterCaseId !== "") {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus == 'Prediction' && par.caseId == this.selectedfilterCaseId);
        } else {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus == 'Prediction');
        }
      }
      else if (event.value == 3) {
        this.selectedStatusValue = 'Matching';
        if (this.selectedfilterCaseId !== "") {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus.trim() == 'Matching' && par.caseId == this.selectedfilterCaseId);
        } else {
          this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.shadeStatus.trim() == 'Matching');
        }
      }
    }
    else {
      this.selectedStatusValue = '';
      if (this.selectedfilterCaseId !== "") {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter.filter((par: any) => par.caseId == this.selectedfilterCaseId);
      }
      else {
        this.GetAllLabPredictionData = this.GetAllLabPredictionDataForFilter;
      }
    }
  }
  remarkPopoUpOpen1(remark: any) {
    this.remarkPopupVisible1 = true;
    if (remark) {
      this.Remarks = remark;
    }

  }
  remarkPopupClose1(event: any) {
    this.Remarks = '';
    this.remarkPopupVisible1 = false;
  }
}
