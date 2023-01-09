import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';
import { SecureComponent } from '../../secure.component';
// import 'rxjs/add/observable/interval';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-sms-report',
  templateUrl: './sms-report.component.html',
  styleUrls: ['./sms-report.component.css']
})
export class SmsReportComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  smsReportData: any;
  smsReportDatafinalData: any;
  smsReportFinalData: any;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  fromDatePassValue: any;
  toDatePassValue: any;
  selectedRowData: any = [];
  checkBoxesMode = 'always';
  disableReSendSMS: boolean = false;
  loadingVisible: boolean = false;
  userName: any;


  constructor(private apiService: ApiService, private router: Router,private secure: SecureComponent) { }

  ngOnInit(): void {
    this.secure.showHideLogo = false;
    this.userName = localStorage.getItem('UserName');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getSMSReport();
    // Observable.interval(50000)
    //   .subscribe((val) => { this.getSMSReport(); });
  }

  getSMSReport() {
    this.loadingVisible = true;
    this.fromDatePassValue = (this.fromDate.getMonth() + 1) + '-' + this.fromDate.getDate() + '-' + this.fromDate.getFullYear();
    this.toDatePassValue = (this.fromDate.getMonth() + 1) + '-' + this.fromDate.getDate() + '-' + this.fromDate.getFullYear();
    const dt = {
      fromDate: this.fromDatePassValue,
      toDate: this.toDatePassValue
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SMSReport.GetSMSReport, dt)
      .subscribe((res: any) => {
        this.smsReportData = JSON.parse(res.getReportData);
        if (this.userName !== 'admin2') {
          if (this.smsReportData.data != null && this.smsReportData.data != '' && this.smsReportData.data != undefined) {
            this.smsReportFinalData = this.smsReportData.data.filter((par: any) => par.TemplateId == '1207166987942256080' || par.TemplateId == '1207166987930466583' || par.TemplateId == '1207166979251570904' || par.TemplateId == '1207166979294395439' || par.TemplateId == '1207166979257063681'
              || par.TemplateId == '1207166979313658622' || par.TemplateId == '1207166979304297607' || par.TemplateId == '1207166987920818847' || par.TemplateId == '1207166987925973028' || par.TemplateId == '1207166987945829541'
              || par.TemplateId == '1207167082238473391' || par.TemplateId == '1207167082244548733' || par.TemplateId == '1207167145033299243' || par.TemplateId == '1207167213975458818' || par.TemplateId == '1207167283492548257'
              || par.TemplateId == '1207167283488041630' || par.TemplateId == '1207167283482408492' || par.TemplateId == '1207167283477656737' || par.TemplateId == '1207167283469804720');
          }
        }
        else {
          this.smsReportFinalData = this.smsReportData.data;
        }

        this.loadingVisible = false;
      });
  }

  fromDateValueChange(event: any) {
    this.loadingVisible = true;
    if (event && event.value) {
      const sDate = event.value;
      this.fromDatePassValue = (sDate.getMonth() + 1) + '-' + sDate.getDate() + '-' + sDate.getFullYear();
    }
    const dt = {
      fromDate: this.fromDatePassValue,
      toDate: this.toDatePassValue
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SMSReport.GetSMSReport, dt)
      .subscribe((res: any) => {
        this.smsReportData = JSON.parse(res.getReportData);
        if (this.userName !== 'admin2') {
          if (this.smsReportData.data != null && this.smsReportData.data != '' && this.smsReportData.data != undefined) {
            this.smsReportFinalData = this.smsReportData.data.filter((par: any) => par.TemplateId == '1207166987942256080' || par.TemplateId == '1207166987930466583' || par.TemplateId == '1207166979251570904' || par.TemplateId == '1207166979294395439' || par.TemplateId == '1207166979257063681'
              || par.TemplateId == '1207166979313658622' || par.TemplateId == '1207166979304297607' || par.TemplateId == '1207166987920818847' || par.TemplateId == '1207166987925973028' || par.TemplateId == '1207166987945829541'
              || par.TemplateId == '1207167082238473391' || par.TemplateId == '1207167082244548733' || par.TemplateId == '1207167145033299243' || par.TemplateId == '1207167213975458818' || par.TemplateId == '1207167283492548257'
              || par.TemplateId == '1207167283488041630' || par.TemplateId == '1207167283482408492' || par.TemplateId == '1207167283477656737' || par.TemplateId == '1207167283469804720');
          }
        }
        else {
          this.smsReportFinalData = this.smsReportData.data;
        }
        this.loadingVisible = false;
      });
  }
  toDateValueChange(event: any) {
    this.loadingVisible = true;
    if (event && event.value) {
      const sDate = event.value;
      this.toDatePassValue = (sDate.getMonth() + 1) + '-' + sDate.getDate() + '-' + sDate.getFullYear();
    }
    const dt = {
      fromDate: this.fromDatePassValue,
      toDate: this.toDatePassValue
    }
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SMSReport.GetSMSReport, dt)
      .subscribe((res: any) => {
        this.smsReportData = JSON.parse(res.getReportData);
        if (this.userName !== 'admin2') {
          if (this.smsReportData.data != null && this.smsReportData.data != '' && this.smsReportData.data != undefined) {
            this.smsReportFinalData = this.smsReportData.data.filter((par: any) => par.TemplateId == '1207166987942256080' || par.TemplateId == '1207166987930466583' || par.TemplateId == '1207166979251570904' || par.TemplateId == '1207166979294395439' || par.TemplateId == '1207166979257063681'
              || par.TemplateId == '1207166979313658622' || par.TemplateId == '1207166979304297607' || par.TemplateId == '1207166987920818847' || par.TemplateId == '1207166987925973028' || par.TemplateId == '1207166987945829541'
              || par.TemplateId == '1207167082238473391' || par.TemplateId == '1207167082244548733' || par.TemplateId == '1207167145033299243' || par.TemplateId == '1207167213975458818' || par.TemplateId == '1207167283492548257'
              || par.TemplateId == '1207167283488041630' || par.TemplateId == '1207167283482408492' || par.TemplateId == '1207167283477656737' || par.TemplateId == '1207167283469804720');
          }
        }
        else {
          this.smsReportFinalData = this.smsReportData.data;
        }
        this.loadingVisible = false;
      });
  }

  selectionChangedHandler(event: any) {
    if (event && event.currentSelectedRowKeys.length > 0) {
      this.selectedRowData.push(event.currentSelectedRowKeys[0]);
    }
    else if (event && event.currentDeselectedRowKeys.length > 0) {
      this.selectedRowData.pop(event.currentDeselectedRowKeys[0]);
    }
  }

  onReSendSMSClick() {
    this.disableReSendSMS = true;
    if (this.selectedRowData != '' && this.selectedRowData != undefined) {
      this.apiService.post(this.API_CONSTANTS.DigiColor.SMSReport.ReSendSMS, this.selectedRowData)
        .subscribe((res: any) => {
          this.disableReSendSMS = false;
          if (res.status == 1) {
            notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'success', 2000);
          } else {
            notify({ message: res.message, position: { at: 'center', my: 'center', offset: '0 -25' }, width: 300 }, 'error', 2000);
          }
          this.router.navigate(["/digicolor/smsReport/"]);
        });
    }
  }


  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.showPosition);
  //   }
  // }

  // showPosition(position: any) {
  //   alert("Latitude: " + position.coords.latitude +
  //     "Longitude: " + position.coords.longitude);
  // }


}
