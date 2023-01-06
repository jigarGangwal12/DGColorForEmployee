import { Component, OnInit } from '@angular/core';
import { API_CONSTANTS } from '../../../constants/api-constants';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-sms-report',
  templateUrl: './sms-report.component.html',
  styleUrls: ['./sms-report.component.css']
})
export class SmsReportComponent implements OnInit {
  API_CONSTANTS = API_CONSTANTS;
  smsReportData: any;
  smsReportDatafinalData: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSMSReport();
  }

  getSMSReport() {
    this.apiService.getAll(this.API_CONSTANTS.DigiColor.SMSReport.GetSMSReport, { fromDate: '01-05-2023', toDate: '01-05-2023' })
      .subscribe((res: any) => {
        this.smsReportData = JSON.parse(res.getReportData);
      });
  }

}
