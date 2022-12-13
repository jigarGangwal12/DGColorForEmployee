import { Component, OnInit } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from '../../../core/services/api.service';
import { SecureComponent } from '../../secure.component';

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
  constructor(private apiService: ApiService, private secure: SecureComponent) {

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
 
}
