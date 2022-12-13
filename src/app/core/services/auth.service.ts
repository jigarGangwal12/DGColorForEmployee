import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import notify from 'devextreme/ui/notify';
import { tap } from 'rxjs/operators';
import { environment } from  '../../../environments/environment'

const apiUrl = environment.apiUrl;
const authUrl = environment.authUrl;
/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {

  constructor(
    public appConfig: AppConfigService,
    public apiService: HttpClient
  ) {

    this.appConfig = appConfig;

    const  UserThemeData = JSON.parse(localStorage.getItem("UserTheme")!);
    if (UserThemeData !== null) {
      document.documentElement.style.setProperty('--dx-header-row-bg-color', UserThemeData.headerBgColor);
      document.documentElement.style.setProperty('--dashBoardBoxLeftSide', UserThemeData.dashBoardBoxLeftSide);
      document.documentElement.style.setProperty('--dashBoardBoxrRightSide', UserThemeData.dashBoardBoxrRightSide);
      document.documentElement.style.setProperty('--dxHeaderRowColor', UserThemeData.dxHeaderRowColor);
      document.documentElement.style.setProperty('--dxHeaderRowFontColor', UserThemeData.dxHeaderRowFontColor);
      document.documentElement.style.setProperty('--dashBoradBoxFontColor', UserThemeData.dashBoradBoxFontColor);
      document.documentElement.style.setProperty('--dashboardQuickLinkColor', UserThemeData.dashboardQuickLinkColor);
      document.documentElement.style.setProperty('--rapidSearchtoggle', UserThemeData.rapidSearchtoggle);
      document.documentElement.style.setProperty('--orderDashboardTab', UserThemeData.orderDashboardTab);
      document.documentElement.style.setProperty('--orderDashboardTabhover', UserThemeData.orderDashboardTabhover);
      document.documentElement.style.setProperty('--commonSubmitButton', UserThemeData.commonSubmitButton);
      document.documentElement.style.setProperty('--dashBoardBox2LeftSide', UserThemeData.dashBoardBox2LeftSide);
      document.documentElement.style.setProperty('--dashBoardBox2RightSide', UserThemeData.dashBoardBox2RightSide);
      document.documentElement.style.setProperty('--dashBoardBox3LeftSide', UserThemeData.dashBoardBox3LeftSide);
      document.documentElement.style.setProperty('--dashBoardBox3RightSide', UserThemeData.dashBoardBox3RightSide);
      document.documentElement.style.setProperty('--dashBoardFontColor', UserThemeData.dashBoradBoxFontColor);
      document.documentElement.style.setProperty('--last30DaysShipmentFontColor', UserThemeData.last30DaysShipmentFontColor);
      document.documentElement.style.setProperty('--dxHeaderFiterColor', UserThemeData.dxHeaderFiterColor);
      document.documentElement.style.setProperty('--marqueeTextColor', UserThemeData.marqueeTextColor);
      document.documentElement.style.setProperty('--dxFooterColor', UserThemeData.dxFooterColor);
      document.documentElement.style.setProperty('--dxFooterFontColor', UserThemeData.dxFooterFontColor);
    }
  }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated() {
    this.getUserInfo();
    return !!this.appConfig.isAuthorized || !!localStorage.getItem('Token');
  }

  /**
   * Returns token if the user is currently authenticated, else empty string
   */
  getToken() {
    return localStorage.getItem('Token') || '';
  }

  // registerApplicator(signUpModelData) {
  //   return this.apiService.post(`${'/account/registerApplicator'}`, signUpModelData);
  // }
  // verifiedOtp(signUpModelData) {
  //   return this.apiService.post(`${'/account/K2VerifyOTP'}`, signUpModelData);
  // }


  CheckOrderBookingAvailable() {
    const userCode = localStorage.getItem('Code');
    let currentDateTime = new Date().toISOString();
    return this.apiService.get(`${'/UserManagement/CheckOrderBookingAvailable'}?userCode=${userCode}&userDateTime=${currentDateTime}`);
  }

  getCurrentUserID() {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      if (user) {
        return (user['DetailedClaims'] || []).find(
          (          claim: { [x: string]: string; }) => claim['Type'] === 'urn:oauth:scope:user:id'
        )['Value'];
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getBasicDetails() {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      if (user) {
        return user;
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
  getUserInfo() {
    const appConfig = this.appConfig;
    try {
      const user = JSON.parse(localStorage.getItem('userinfo')!);
      appConfig.save();
      if (user) {
        return user;
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Fake authentication function that returns a promise that is either resolved or rejected.
   *
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   *
   * Delays 800ms to simulate an async REST API delay.
   */
  authenticate(username:string, password:string) {
    const appConfig = this.appConfig;
    let objData = {
      UserName: username,
      Password: password
    };
   // return this.apiService.post(apiUrl + '/account/oauth/token',
    return this.apiService.post<any>(apiUrl + '/account/oauth/token', objData).pipe(tap(res => {
      // if (res['statusCode'] == 400) {
      //   notify({ message: res['error'], position: { at: 'center', my: 'center', offset: '0 -25' },width: 300 }, 'error', 4000);
      //   return false;
      // }

      console.clear();
      appConfig.Username = res['username'];
      appConfig.isAuthorized = true;
      appConfig.save();
      localStorage.setItem('Token', res.access_token);
      // localStorage.setItem('DefaultPage', res['defaultPage']);
      // localStorage.setItem('PagePermission', JSON.stringify(res['pagePermission']));
      // localStorage.setItem('PageModulePermission', JSON.stringify(res['pageModulePermission']));
      // localStorage.setItem('Code', res['userCode']);
      // localStorage.setItem('AgentName', res['firstName']);
      
      if(res.userId) {
        localStorage.setItem('UserId', res.userId);
      }
      if(res.logonTime) {
        localStorage.setItem('LogonTime', res.logonTime);
      }
      if(res.userName) {
        localStorage.setItem('UserName', res.userName);
      }
      // localStorage.setItem('ItemCategoryCode', res['itemCategoryCode']);
      // localStorage.setItem('AccountActivated', res['isActive']);
      // localStorage.setItem('IsAdministrator', res['isAdministrator']);
      // localStorage.setItem('IsSuperAdmin', res['isSuperAdmin']);
      // localStorage.setItem('UserType', res['userType']);
      // localStorage.setItem('LastLoginTime', res['lastLoginTime']);
      // localStorage.setItem('ProductGroupFilter', res['productGroup']);
      // localStorage.setItem('MarqueeText', JSON.stringify(res['marqueeText']));

      return res;
    },err => {
      throw err;
    }));
  }

  authorizeMe() {
    return this.apiService.get('authorize/me').subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
    });
  }

  getMobileByEmpId(username:string) {
    return this.apiService.get(`${'/PasswordChange/GetMobileNoByUsername'}?username=${username}`);
  }

  // generateOTP(credentials) {
  //   return this.apiService.get(`${'/account/GenerateOTP'}?credentials=${credentials}`);
  // }

  // getMobileNumber(credentials) {
  //   return this.apiService.get(`${'/account/GetMobileNumber'}?credentials=${credentials}`);
  // }

  // verifiedOTP(credentials: any) {
  //   return this.apiService.post(`${'/account/VerifyOTP'}`, credentials);
  // }
  // ForgotPwd(credentials) {
  //   return this.apiService.post(`${'/account/K2ForgotPwd'}`, credentials);
  // }


  // GetNotificationDataByAgent(agentCode) {
  //   return this.apiService.get(`${'/Notification/GetNotificationDataByAgent'}?agentCode=${agentCode}`);
  // }

  // GetNotificationPdfByAgent(id, notifyType) {
  //   return this.apiService.get(`${'/Notification/GetNotificationPdf'}?docNo=${id}&notifyType=${notifyType}`);
  // }

  // GetNotificationCountByAgent(agentCode) {
  //   return this.apiService.get(`${'/Notification/GetNotificationCountByAgent'}?agentCode=${agentCode}`);
  // }

  // GetIPAddressClientMachine() {
  //   return this.apiService.get(`${'/account/GetIPAddressClientMachine'}`);
  // }

  /** Logs the current user out */
  logout() {
    this.appConfig.isAuthorized = false;
    this.appConfig.myRolesAndPermissions = [];
    localStorage.clear();
    this.appConfig.save();
  }
  getUserDetails(user: any){
    return new Promise(((resolve, reject) => {
        this.apiService.post(authUrl+ 'LogIn/LogInUser/', user).subscribe(
          (res: any) => {
            resolve(res)
          },
          (err: any) => {
            reject(err)
          }
        )
    }))
  }
}
