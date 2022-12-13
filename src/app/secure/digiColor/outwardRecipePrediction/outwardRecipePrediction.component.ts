import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { filter } from 'rxjs/operators';
import notify from 'devextreme/ui/notify';
import { SecureComponent } from '../../secure.component';
@Component({
  selector: 'app-outwardRecipePrediction',
  templateUrl: './outwardRecipePrediction.component.html',
  styleUrls: ['./outwardRecipePrediction.component.css']
})
export class OutwardRecipePredictionComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  EmpCode: any;
  caseIdData: any;
  shadeNameId: any;
  mapwithSamplIdCustomerList: any;
  contactPersonDepartment: any;
  contactPersonDesignation: any;
  processList: any;
  lightSourceData: any;
  nameofFastnessDataSource: any;
  testMethodDataSource: any;
  targetRatingDataSource: any;
  inwardFormListData: any;
  customerContactDetails = [];
  customerSubStrate = [];
  customerFastnessDataSource = [];
  outWardModel = {
    caseId: '',
    customerCodeName: '',
    agentCodeName: '',
    consigneeState: '',
    agentNameCode: '',
    inwardDatetime: '',
    outwardDatetime: new Date(),
    process: '',
    primarylightSource: '',
    secondarylightSource: '',
    tertiarylightSource: '',
    remarks: '',
    submitedby: '',
    customerType: '',
    dischargeability: '',
    address1: '',
    address2: '',
    consigneeCity: '',
    dyesRange: '',
    colourGamutData: '',
    technicalPerson: '',
    approvedBy: '',
    shadeId: '',
    shadeName: '',
    consigneeCode: ''
  }
  colourGamutDataSource: any;
  loadingVisible: boolean = false;
  receipePredictionData: any;
  metamericDataSource: any;
  UserId: any;
  marketingPersonDataSource: any;
  receipePredictionOptionData2: any = [];
  receipePredictionOptionData3: any = [];
  showOption2PredictionData: boolean = false;
  showOption3PredictionData: boolean = false;
  receipePredictionAllData: any;
  showOption4PredictionData: boolean =false;
  receipePredictionOptionData4: any;
  constructor(private apiService: ApiService, private router: Router,private secure :SecureComponent) { }

  ngOnInit() {
    this.secure.showHideLogo=false;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.UserId = localStorage.getItem('empCode');
    this.UserId = this.UserId.substring(1, this.UserId.length - 1);
    if (this.UserId) {
      this.outWardModel.submitedby = this.UserId;
      this.getCaseIdByEmpCode();
    }
  
    this.metamericDataSource = [
      {
        name: '0.00'
      }, {
        name: '0.50'
      }, {
        name: '0.30'
      }
    ]

  }
  getCaseIdByEmpCode() {
    this.loadingVisible = true;
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inward_Form.GetCaseIdByEmpCodeData, { empCode: this.UserId })
      .subscribe((res: any) => {
        this.loadingVisible = false;
        this.caseIdData = res.table;
        this.shadeNameId = res.table1;
        this.mapwithSamplIdCustomerList = res.table2;
        this.contactPersonDepartment = res.table3;
        this.contactPersonDesignation = res.table4;
        this.processList = res.table5;
        this.lightSourceData = res.table6;
        this.nameofFastnessDataSource = res.table8;
        this.testMethodDataSource = res.table9;
        this.targetRatingDataSource = res.table10;
        this.inwardFormListData = res.table11;
        this.marketingPersonDataSource = res.table13;
        this.colourGamutDataSource = res.table15;
      });

  }
  InwardcaseIdValueChanged(data: any) {
    if (data.value) {
      this.loadingVisible = true;
      const filterData = this.inwardFormListData.filter((da: any) => da.shadeid == data.value);
      this.apiService.getAll(this.API_CONSTANTS.DigiColor.OutWardPrediction_Form.GetShadeIdDetailForOutwardPrediction, { shadeId: data.value, caseIdSharedIdGroup: filterData[0].caseIdSharedIdGroup }).subscribe((res: any) => {
        this.loadingVisible = false;
        this.outWardModel.caseId = res.table[0].caseId;
        this.outWardModel.shadeId = res.table[0].shadeId;;
        this.outWardModel.shadeName = res.table[0].shadeName;
        this.outWardModel.consigneeCode = res.table[0].consigneeCode;
        this.outWardModel.customerCodeName = res.table[0].consigneeCodeName;
        this.outWardModel.agentCodeName = res.table[0].agentCodeName;
        this.outWardModel.customerType = res.table[0].customerType;
        this.outWardModel.dyesRange = res.table[0].dyesRange;
        this.outWardModel.inwardDatetime = res.table[0].createdDate;
        this.outWardModel.address1 = res.table[0].address1;
        this.outWardModel.address2 = res.table[0].address2;
        this.outWardModel.consigneeCity = res.table[0].city;
        this.outWardModel.consigneeState = res.table[0].cosigneeState;
        this.outWardModel.process = res.table[0].process;
        this.outWardModel.primarylightSource = res.table[0].lightSourcePrimary;
        this.outWardModel.secondarylightSource = res.table[0].lightSourceSecondary;
        this.outWardModel.tertiarylightSource = res.table[0].lightSourceTertiary;
        this.outWardModel.dischargeability = res.table[0].dischargability;
        this.customerContactDetails = res.table1;
        this.customerSubStrate = res.table2;
        this.customerFastnessDataSource = res.table3;
        if (res.table4) {
          this.receipePredictionAllData = res.table4;
          const maxValueOftrail = Math.max(...res.table4.map((o: any) => o.trail), 0);
          this.receipePredictionData = res.table4.filter((par: any) => par.trail == 1);
          if (maxValueOftrail >= 2) {
            this.showOption2PredictionData = true;

            this.receipePredictionOptionData2 = res.table4.filter((par: any) => par.trail == 2);
          } else {
            this.showOption2PredictionData = false;
          }
          if (maxValueOftrail >= 3) {
            this.showOption3PredictionData = true;
            this.receipePredictionOptionData3 = res.table4.filter((par: any) => par.trail == 3);
          } else {
            this.showOption3PredictionData = false;
          }
          if (maxValueOftrail >= 4) {
            this.showOption4PredictionData = true;
            this.receipePredictionOptionData4 = res.table4.filter((par: any) => par.trail == 4);
          } else {
            this.showOption4PredictionData = false;
          }
        }
      });
    }
  }
  cellTemplate(container: any, options: any) {
    const noBreakSpace = '\u00A0';
    // const text = (options.value || []).map((element: any) => options.column.lookup.calculateCellValue(element)).join(', ');
    container.textContent = options.value || noBreakSpace;
    container.title = options.value;
  }
  cancelData() {
    this.router.navigate(["/digicolor/outwardRecipePrediction/"]);
  }
  SaveOutwardData(data: any) {
    data.recipeprediction = this.receipePredictionAllData;
    data.fastnessRequirement = this.customerFastnessDataSource;
    this.apiService.post(this.API_CONSTANTS.DigiColor.OutWardPrediction_Form.PostOutWardFormData, data)
      .subscribe((res: any) => {
        notify({ message: 'Outward Entry SuccessFully ', position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
        this.router.navigate(["/digicolor/outwardRecipePrediction/"]);
      });
  }
}
