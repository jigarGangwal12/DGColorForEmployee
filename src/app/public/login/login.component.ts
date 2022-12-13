import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTING_CONSTANTS } from 'src/app/constants/routing-constant';
import { Subscriber, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ROUTING_CONSTANTS = ROUTING_CONSTANTS;
  credentials = {
    Username: null as any,
    Password: null as any,
    MobileByEMPID: null as any,
    VerifiedOTP: null as any,
    usertypeLogin: null as any,
  };
  authenticating: boolean = false;
  errors = false;
  ScreenSizeWidth: number = 0;
  invalidUser = false;
  isAuthenticate = false;
  loginText = 'Login';
  lastpublishDatetime: any;
  yourIP2: any = false; UserId: any;
  Defaultpage: any;
  ;
  yourIP: any = '';
  otpPage: any = false;
  user: any
  Username: any = '';
  Password: any = '';
  showPassword = false;

  constructor(
    public router: Router,
    private authService: AuthService,
    readonly http: HttpClient
  ) {
    this.ScreenSizeWidth = window.innerWidth;
  }

  ngOnInit() {
    this.GetIPAddressClientMachine();
    this.user = {
      username: '',
      password: ''
    };
    this.Username = ((localStorage.getItem("UserName")));
    this.Password = ((localStorage.getItem("Password")));
    this.user.username = this.Username;
    this.user.password = this.Password;
    if (this.Username) {
      localStorage.clear();
      sessionStorage.clear();

    }
    this.user.username = this.Username;
  }

  /**
   * The controller for the `login` component
   *
   * The `login` method validates the credentials.
   * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
   */

  onChangePassword() { }

  GetIPAddressClientMachine() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.authUrl + '/LogIn/GetLastTimeUpdatedFolder')
        .subscribe(
          (data: any) => {
            resolve(data);
            this.lastpublishDatetime = new Date(data.data);
            this.lastpublishDatetime =
              this.lastpublishDatetime.toLocaleString();
            this.lastpublishDatetime = moment(this.lastpublishDatetime).format(
              'DD/MM/YYYY HH:mm'
            );
            if (environment.authUrl == 'http://192.168.0.252:8165/api/api/') {
              this.yourIP2 = true;
            } else if (environment.authUrl == 'http://192.168.6.60:8125/api/api/') {
              this.yourIP2 = false;
            }
            else {
              this.http.get(environment.authUrl + '/LogIn/GetIPAddressClientMachine').subscribe(
                (data: any) => {
                  this.yourIP = data;
                  if ((data === '192.168.6.60'||data === '192.168.6.68' || data === '192.168.0.47' || data === '192.168.0.49' || data === '192.168.10.107' || data === '192.168.4.47' || data === '192.168.0.113' || data === '192.168.6.52' || data === '192.168.6.210'|| data === '192.168.6.53')) {
                    this.yourIP2 = true;
                  } else {
                    this.yourIP2 = false;
                  }

                  localStorage.setItem("IPAddressClientMachine", data.data);
                });
            }
          },
          (err: any) => {
            reject(err);
          }
        );
    });
  }
  OtpEnter(form: any) {
    // if (Object.keys(form.$error).length > 0 && form.$error.hasOwnProperty('required')) {
    //   _.forEach(form.$error.required, function (element) {
    //     element.$setDirty();
    //   });
    //   return;
    // }
    this.http.post(environment.authUrl + '/account/VerifyOTP', this.user).subscribe(
      (token: any) => {
        if (token.access_token && token.userId) {
          localStorage.setItem('Token', token.accessToken);
          this.http.post(environment.authUrl + 'LogIn/LogInUser/', this.user).subscribe(
            (res: any) => {
              this.GetOtpUserDetail(res);
            });
        }
      });
  }
  onKeyDownEvent(event: any){
  }
  showPasswordForgot(useId: any) { }

  async login(credentials: any, loginForm: any) {
    loginForm.submitted = true;
    if (loginForm.invalid) {
      return;
    } else {
      var UserId = ((localStorage.getItem("UserId")));
      this.http.post(environment.authUrl + '/LogIn/LogInUserNameValidate', this.user).subscribe(
        (response: any) => {

          if (this.user.username != 'jaymirror') {
            this.http.get(environment.authUrl + '/LogIn/UpdateLoginDate?username=' + this.user.username).subscribe((data: any) => {

            });

          }
          if (response !== "") {
            var objUser = response;
            if (environment.authUrl === 'http://219.65.56.59:8595/api/api/') {
              if (objUser.isAccess == true) {
                if (this.user.username == objUser.userName) {
                  var Defaultproduct = objUser.default_Page;
                  this.Defaultpage = objUser.defaultpage;
                  var UserId = objUser.userId;
                  var itemCategoryArray = [];
                  if (objUser.itemCategory === null) {
                    itemCategoryArray = [];
                    localStorage.setItem("itemCategory", JSON.stringify(null));
                  } else {
                    itemCategoryArray = objUser.itemCategory.split(",");
                    var itemCategorybindinArray = itemCategoryArray.map((e: any) => {
                      return { name: e };
                    });
                    localStorage.setItem("itemCategory", JSON.stringify(itemCategorybindinArray));
                  }
                  if (objUser.userRole) {
                    localStorage.setItem("UserRole", JSON.stringify(objUser.userRole));
                    localStorage.setItem("UserId", JSON.stringify(UserId));
                    localStorage.setItem("UserName", JSON.stringify(objUser.userName));
                  }
                  if (objUser.userdepartment) {
                    localStorage.setItem("Userdepartment", JSON.stringify(objUser.userdepartment));
                  }
                  if (objUser.ipAddress === null) {
                    objUser.ipAddress = [];
                  } else {
                    objUser.ipAddress = objUser.ipAddress.split(",");
                  }

                  var purchaseType = objUser.purchaseType;
                  
                  localStorage.setItem("purchaseType", JSON.stringify(purchaseType));
                  localStorage.setItem("Defaultproduct", JSON.stringify(Defaultproduct));
                  localStorage.setItem("Defaultpage", JSON.stringify(this.Defaultpage));
                  
                  localStorage.setItem("UserId", JSON.stringify(UserId));
                  this.UserId = (localStorage.getItem("UserId"));
                  localStorage.setItem("UserName", JSON.stringify(this.user.username));
                  localStorage.setItem("UserDisplayName", JSON.stringify(objUser.firstName + " " + objUser.lastName));

                  if (objUser.userName == this.user.username && objUser.isotpRequired == true && this.yourIP == objUser.ipAddress) {
                    this.generateOTP(this.user).subscribe((data: any) => {
                      if (data.ok) {
                        // toastr.success('OTP is sent successfully!!', 'Success');
                        this.otpPage = true;
                      } else {
                        // // $rootScope.$broadcast('login-failed');
                        // toastr.error('Oops! Username or Password incorrect.', 'Error');
                      }
                    });
                    return;
                  }
                  if (objUser.userName == this.user.username && objUser.isotpRequired == true && objUser.ipAddress != '') {
                    this.generateOTP(this.user).subscribe((data: any) => {
                      if (data.ok) {
                        // toastr.success('OTP is sent successfully!!', 'Success');
                        this.otpPage = true;
                      } else {
                        // // $rootScope.$broadcast('login-failed');
                        // toastr.error('Oops! Username or Password incorrect.', 'Error');
                      }
                    });
                    return;
                  }
                  if (objUser.userName == this.user.username && objUser.isotpRequired == true && objUser.ipAddress == '') {
                    this.generateOTP(this.user).subscribe((data: any) => {
                      if (data.ok) {
                        // toastr.success('OTP is sent successfully!!', 'Success');
                        this.otpPage = true;
                      } else {
                        // // $rootScope.$broadcast('login-failed');
                        // toastr.error('Oops! Username or Password incorrect.', 'Error');
                      }
                    });
                    // // hideLoading();
                    return;
                  }
                  if (objUser.userName == this.user.username && (this.yourIP == objUser.ipAddress[0] || this.yourIP == objUser.ipAddress[1] || this.yourIP == objUser.ipAddress[2] || this.yourIP == '192.168.6.60' || this.yourIP == '192.168.0.113' || this.yourIP == '192.168.6.52')) {
                    this.authService.authenticate(this.user.username, this.user.password);
                    // // hideLoading();
                    return;
                  }
                  if (objUser.userName == this.user.username && objUser.ipAddress == '') {
                    this.authService.authenticate(this.user.username, this.user.password);
                    // // hideLoading();
                    return;
                  }
                  if (objUser.userName == this.user.username && objUser.isotpRequired == false && this.yourIP == objUser.ipAddress) {
                    this.authService.authenticate(this.user.username, this.user.password);
                    // // hideLoading();
                    return;
                  }
                } else {
                  // // hideLoading();
                  // toastr.error('Oops! Username or Password incorrect.', 'Error');
                }
              }
              else if (objUser.isAccess == false) {
                // // hideLoading();
                // toastr.error('Please Contact your administrator.', 'Error');
              }
            } else {

              if (this.user.username == objUser.userName) {
                try {
                  var Defaultproduct = objUser.defaultProduct;

                  this.Defaultpage = objUser.default_Page;
                  var UserId = objUser.userId;

                  var itemCategoryArray = [];
                  if (objUser.itemCategory === null) {
                    itemCategoryArray = [];
                    localStorage.setItem("itemCategory", JSON.stringify(null));
                  } else {
                    itemCategoryArray = objUser.itemCategory.split(",");
                    var itemCategorybindinArray = itemCategoryArray.map((e: any) => {
                      return { name: e };
                    });
                    localStorage.setItem("itemCategory", JSON.stringify(itemCategorybindinArray));
                  }
                  if (objUser.userRole) {
                    localStorage.setItem("UserRole", JSON.stringify(objUser.userRole));
                    
                    localStorage.setItem("UserId", JSON.stringify(UserId));
                    localStorage.setItem("UserName", JSON.stringify(objUser.userName));
                  }
                  if (objUser.userdepartment) {
                    localStorage.setItem("Userdepartment", JSON.stringify(objUser.userdepartment));
                  }
                  if (objUser.ipAddress === null) {
                    objUser.ipAddress = [];
                  } else {
                    objUser.ipAddress = objUser.ipAddress.split(",");
                  }

                  var purchaseType = objUser.purchaseType;
                  
                  localStorage.setItem("purchaseType", JSON.stringify(purchaseType));
                  localStorage.setItem("Defaultproduct", JSON.stringify(Defaultproduct));
                  localStorage.setItem("Defaultpage", JSON.stringify(this.Defaultpage));
                  localStorage.setItem("UserId", JSON.stringify(UserId));
                  this.UserId = (localStorage.getItem("UserId"));
                  localStorage.setItem("UserName", JSON.stringify(this.user.username));
                  localStorage.setItem("UserDisplayName", JSON.stringify(objUser.firstName + " " + objUser.lastName));


                  if (environment.authUrl == 'http://192.168.0.252:8165/api/api//') {
                    this.User8165Login(credentials);
                    // // hideLoading();
                  } else {
                    if (this.yourIP2 === true) {
                      this.authService.authenticate(this.user.username, this.user.password);
                      // hideLoading();
                      this.User8165Login(credentials);
                      return;
                    } else {
                      if (objUser.userName == this.user.username && objUser.isotpRequired == true && this.yourIP == objUser.ipAddress) {
                        this.generateOTP(this.user).subscribe((data: any) => {
                          if (data.ok) {
                            // toastr.success('OTP is sent successfully!!', 'Success');
                            this.otpPage = true;
                          } else {
                            // $rootScope.$broadcast('login-failed');
                            // toastr.error('Oops! Username or Password incorrect.', 'Error');
                          }
                        });
                        // hideLoading();
                        return;
                      }
                      if (objUser.userName == this.user.username && objUser.isotpRequired == true && objUser.ipAddress != '') {
                        this.generateOTP(this.user).subscribe((data: any) => {
                          if (data.ok) {
                            // toastr.success('OTP is sent successfully!!', 'Success');
                            this.otpPage = true;
                          } else {
                            // $rootScope.$broadcast('login-failed');
                            // toastr.error('Oops! Username or Password incorrect.', 'Error');
                          }
                        });
                        // hideLoading();
                        return;
                      }
                      if (objUser.userName == this.user.username && objUser.isotpRequired == true && objUser.ipAddress == '') {
                        this.generateOTP(this.user).subscribe((data: any) => {
                          if (data.ok) {
                            // toastr.success('OTP is sent successfully!!', 'Success');
                            this.otpPage = true;
                          } else {
                            // $rootScope.$broadcast('login-failed');
                            // toastr.error('Oops! Username or Password incorrect.', 'Error');
                          }
                        });
                        // hideLoading();
                        return;
                      }
                      if (objUser.userName == this.user.username && (this.yourIP == objUser.ipAddress[0] || this.yourIP == objUser.ipAddress[1] || this.yourIP == objUser.ipAddress[2] || this.yourIP == '192.168.6.60' || this.yourIP == '192.168.0.113' || this.yourIP == '192.168.6.52')) {
                        this.authService.authenticate(this.user.username, this.user.password);
                        // hideLoading();
                        return;
                      }
                      if (objUser.userName == this.user.username && objUser.ipAddress == '') {
                        this.authService.authenticate(this.user.username, this.user.password);
                        // hideLoading();
                        return;
                      }
                      if (objUser.userName == this.user.username && objUser.isotpRequired == false && this.yourIP == objUser.ipAddress) {
                        this.authService.authenticate(this.user.username, this.user.password);
                        // hideLoading();
                        return;
                      }
                    }

                  }

                } catch (error) {
                  localStorage.clear();
                  sessionStorage.clear();
                  alert(error);
                  window.location.reload();
                }
              } else {
                // hideLoading();
                // toastr.error('Oops! Username or Password incorrect.', 'Error');
              }
            }
          }

        });

    }

  }
  User8165Login(credentials: any) {
    const returnToOriginalState = async () => {
      // const userDefaultPage = localStorage.getItem('DefaultPage');
      const Token = localStorage.getItem('Token');
      if (!Token) {
        this.invalidUser = true;
        return;
      }
      this.invalidUser = false;
      this.isAuthenticate = true;
      this.loginText = 'Authenticating';
      const user = {
        username: credentials.username,
        password: credentials.password,
      };
      this.http.post(environment.authUrl + 'LogIn/LogInUser/', user).subscribe(
        (res: any) => {
          this.GetOtpUserDetail(res);
        });
    };
    const showError = () => {
      this.authenticating = false;
      this.errors = true;
    };
    const stop = () => {
      this.authenticating = false;
    };
    this.authService
      .authenticate(credentials.username, credentials.password)
      .subscribe(returnToOriginalState, showError, stop);
  }
  GetOtpUserDetail(res: any) {
    if (res !== '') {
      try {
        const objUser = res;
        const isAdmin = objUser.isAdmin;

        const User_Location_Array = [];
        if (objUser.location === null || objUser.location === '') {
        } else {
          const locationArray = objUser.location.split(',');

          for (let j = 0; j < locationArray.length; j++) {
            let e = locationArray[j];
            if (e !== '') {
              User_Location_Array.push({ name: e });
            }
          }
        }

        const User_Department_Array = [];
        if (objUser.department === null || objUser.department === '') {
        } else {
          const departmentArray = objUser.department.split(',');

          for (let j = 0; j < departmentArray.length; j++) {
            let e = departmentArray[j];
            if (e !== '') {
              User_Department_Array.push({ name: e });
            }
          }
        }

        const User_Segement_Array = [];
        if (objUser.segment1 === null || objUser.segment1 === '') {
        } else {
          const segmentArray = objUser.segment1.split(',');

          for (let j = 0; j < segmentArray.length; j++) {
            let e = segmentArray[j];
            if (e !== '') {
              User_Segement_Array.push({ name: e });
            }
          }
        }

        if (objUser.segment1 === null || objUser.segment1 === '') {
          localStorage.setItem('segment1', JSON.stringify(null));
        } else {
          localStorage.setItem('segment1', JSON.stringify(User_Segement_Array)
          );
        }

        if (objUser.segment === null || objUser.segment === '') {
          localStorage.setItem('segment', JSON.stringify(null));
          localStorage.setItem('selectedType', JSON.stringify(null));
        } else {
          localStorage.setItem('segment', JSON.stringify(objUser.segment));
          const localStorageSegment = (localStorage.getItem('segment') || '').split(',');
          localStorage.setItem('selectedType', JSON.stringify(localStorageSegment[0]));
        }
        localStorage.setItem( 'locations',
          JSON.stringify(User_Location_Array)
        );
        localStorage.setItem(
          'department',
          JSON.stringify(User_Department_Array)
        );

        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
        localStorage.setItem(
          'menuitems',
          JSON.stringify(objUser.userPages)
        );
        objUser.userPagesv2 =  objUser.userPagesv2 .filter((par: any) => par.module == 'DG Color');
        localStorage.setItem("menuitemsnew", JSON.stringify(objUser.userPagesv2));
        localStorage.setItem('empCode', JSON.stringify(objUser.empCode));
        localStorage.setItem(
          'accessLevel',
          JSON.stringify(objUser.accessLevel)
        );
        localStorage.setItem(
          'isShowASP',
          JSON.stringify(objUser.isShowASP)
        );
        localStorage.setItem(
          'isShowDiff',
          JSON.stringify(objUser.isShowDiff)
        );
        localStorage.setItem(
          'IsShowEmployeeCtc',
          JSON.stringify(objUser.isShowEmployeeCtc)
        );
        localStorage.setItem(
          'EmployeeLocations',
          JSON.stringify(objUser.employeeLocations)
        );
        localStorage.setItem('EmployeeGrades', JSON.stringify(objUser.employeeGrades));
        localStorage.setItem('PostingGroups', JSON.stringify(objUser.postingGroups));
        localStorage.setItem('GD2', JSON.stringify(objUser.gD2));
        localStorage.setItem('ProductionFacility', JSON.stringify(objUser.productionFacility));
        localStorage.setItem('Department', JSON.stringify(objUser.department));
        localStorage.setItem('ProductionCategory', JSON.stringify(objUser.productionCategory));
        localStorage.setItem('ReceivableItemCategories', JSON.stringify(objUser.receivableItemCategories));
        localStorage.setItem('UserTaskCount', JSON.stringify(objUser.userTaskCount));
        localStorage.setItem('AssignedTaskCount', JSON.stringify(objUser.assignedTaskCount));
      } catch (e) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
      }
      // this.router.navigate([this.Defaultpage]);
      this.router.navigate(['digicolor/inward']);
    }
  }

  generateOTP(user: any) {
    return this.http.post(environment.authUrl + '/account/GenerateOTP', user);
  }

}
