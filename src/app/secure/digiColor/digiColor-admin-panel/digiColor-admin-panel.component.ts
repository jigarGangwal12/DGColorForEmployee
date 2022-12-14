import { Component, OnInit } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from '../../../core/services/api.service';
import { SecureComponent } from '../../secure.component';
import { Form } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import DataSource from 'devextreme/data/data_source';
import { AmdDependency } from 'typescript';
import { Router } from '@angular/router';


@Component({
  selector: 'app-digiColor-admin-panel',
  templateUrl: './digiColor-admin-panel.component.html',
  styleUrls: ['./digiColor-admin-panel.component.css']
})
export class DigiColorAdminPanelComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  windowHeight: any;
  digicolorUserDetailsList = [];
  cosigneeNameCodeList: any;
  cosigneeNameCode: any;
  inquiryTypeData: any;
  assignToRunnerList: any;
  processList: any;
  lightSourceData: any;
  fastnessDataSource: any;
  customerSubstrateData: any;
  colorGamutData: any;
  tableDataUpdate: any;
  allTables: boolean = true;
  createUser: boolean = false;
  selectedCategory = "All";
  selectedCustomerCode: any;
  allcosigneeNameCode: any;
  customername: any;
  agentcode: any;
  agentname: any;
  allcosigneeNameCodeFilter: any;
  userDataModel = {
    username: '',
    password: '',
    customercode: '',
    customername: '',
    agentcode: '',
    agentname: '',
  }
  allUserList: any;
  constructor(private apiService: ApiService, private secure: SecureComponent, private router: Router) {

  }

  ngOnInit() {
    this.secure.showHideLogo = false;
    this.windowHeight = (window.innerHeight) - 80;
    this.windowHeight = this.windowHeight + 'px';
    this.getDigiColorUserList();
    this.getAgentListData();
  }
  getDigiColorUserList() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.DigiColorAdminPanel.GetAllDigiColorUserList, '')
      .subscribe((res: any) => {
        this.digicolorUserDetailsList = res.table;
        this.processList = res.table1;
        this.lightSourceData = res.table2;
        this.fastnessDataSource = res.table3;
        this.customerSubstrateData = res.table4;
        this.colorGamutData = res.table5;
      });
  }
  getAgentListData() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.Getconsigneecustomer_DetailData, '')
      .subscribe((res: any) => {
        // this.cosigneeNameCodeList = res.table1;
        // this.cosigneeNameCode = new DataSource({
        //   store: res.table,
        //   paginate: true,
        //   pageSize: 10
        // });
        // let inquiryData = res.table2;
        // this.inquiryTypeData = [inquiryData.map((item: any) => item.inquiryType).join(',')];
        this.assignToRunnerList = res.table3;
      });
  }
  onrowUpdatedForUser(da: any) {
    if (da && da.data) {
      this.apiService.getAll(this.API_CONSTANTS.DigiColor.DigiColorAdminPanel.UpdateDigiColorUserList, da.data)
        .subscribe((res: any) => {

        });
    }
  }
  onProcessUpdate(da: any) {

    if (da && da.data) {
      da.data['typeValue'] = this.tableDataUpdate;
      da.data['insertOrUpdate'] = 'Update';
      this.apiService.post(this.API_CONSTANTS.DigiColor.DigiColorAdminPanel.InsertOrUpdateAdminPanelData, da.data)
        .subscribe((res: any) => {
        });

    }
  }
  OnProcessInsert(da: any) {
    if (da && da.data) {
      da.data['typeValue'] = this.tableDataUpdate;
      da.data['insertOrUpdate'] = 'Insert';
      this.apiService.post(this.API_CONSTANTS.DigiColor.DigiColorAdminPanel.InsertOrUpdateAdminPanelData, da.data)
        .subscribe((res: any) => {
        });
    }
  }
  OnProcessDeleted(da: any) {
    da.data['insertOrUpdate'] = 'Delete';
    this.apiService.post(this.API_CONSTANTS.DigiColor.DigiColorAdminPanel.InsertOrUpdateAdminPanelData, da.data)
      .subscribe((res: any) => {
      });
  }
  logEvent(da: any) {
    if (da)
      this.tableDataUpdate = da.column.dataField
  }


  onCreateUserClick(allOrCreate: any) {
    if (allOrCreate == this.selectedCategory)
      return;
    if (allOrCreate == 'All') {
      this.selectedCategory = 'All';
      this.allTables = true;
      this.createUser = false;
    }
    else if (allOrCreate == 'Create') {
      this.selectedCategory = 'Create';
      this.allTables = false;
      this.createUser = true;
      this.getAgentListData1();
      this.getAllUserData();
    }
  }

  submit(user: any) {
    const data = {
      username: user.value.username,
      password: user.value.password,
      customercode: user.value.customercode,
      customername: user.value.customername,
      agentcode: user.value.agentcode,
      agentname: user.value.agentname,
      createdBy: localStorage.getItem('UserName')
    }
    this.apiService.post(API_CONSTANTS.DigiColor.DigiColorAdminPanel.PostCreateUser, data)
      .subscribe((res: any) => {
        if (res.status == 1) {
          notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          this.userDataModel.customercode = '';
          this.userDataModel.customername = '';
          this.userDataModel.agentcode = '';
          this.userDataModel.agentname = '';
          this.getAllUserData();
        }
      });
  }


  getAgentListData1() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.Inquiry_Form.Getconsigneecustomer_DetailData, '')
      .subscribe((res: any) => {
        this.allcosigneeNameCode = res.table1;
        this.cosigneeNameCode = new DataSource({
          store: res.table,
          paginate: true,
          pageSize: 10
        });
      });
  }

  ConsumerValueChanged(event: any){
    if(event && event.value){ 
      this.allcosigneeNameCodeFilter = []; 
      this.userDataModel.customercode = '';
      this.userDataModel.customername = '';
      this.userDataModel.agentcode = '';
      this.userDataModel.agentname = '';
       var caseidSelected = event.value;
      this.allcosigneeNameCodeFilter = this.allcosigneeNameCode.filter((par: any) => par.value == caseidSelected);
      this.userDataModel.customercode = this.allcosigneeNameCodeFilter[0].value;
      this.userDataModel.customername = this.allcosigneeNameCodeFilter[0].consumerName;
      this.userDataModel.agentcode = this.allcosigneeNameCodeFilter[0].agentcode;
      this.userDataModel.agentname = this.allcosigneeNameCodeFilter[0].agentname;
    }
    else {
      this.allcosigneeNameCodeFilter = [];
      this.userDataModel.customercode = '';
      this.userDataModel.customername = '';
      this.userDataModel.agentcode = '';
      this.userDataModel.agentname = '';
    }
  }

  getAllUserData() {
    this.apiService.getAll(API_CONSTANTS.DigiColor.DigiColorAdminPanel.GetAllUser, '')
      .subscribe((res: any) => {
        this.allUserList = res.table;
      });
  }

  OnUserDeleted(event: any) {
    if (event && event.data) {
      const dt = {
        id: event.data.id 
      }
      this.apiService.getAll(API_CONSTANTS.DigiColor.DigiColorAdminPanel.RemoveUser,dt)
        .subscribe((res: any) => {
          if(res.status == 1){
            notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          }
        });
    }
  }

}
