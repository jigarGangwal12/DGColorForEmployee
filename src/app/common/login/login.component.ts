import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from '../../../environments/environment';
import {TurkyService} from "../../secure/turky/turky.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  credentials = { Username: null as any, Password: null as any, MobileByEMPID: null as any, VerifiedOTP: null as any, usertypeLogin: null as any };
  authenticating: boolean = false;
  errors = false;
  ScreenSizeWidth: number = 0;
  invalidUser = false;
  isAuthenticate = false;
  loginText = 'Login';

  constructor(public router: Router, private authService: AuthService, private _dashboardService: TurkyService) {
    this.ScreenSizeWidth = window.innerWidth;
  }

  ngOnInit() {
    this.GetIPAddressClientMachine();
    var myCarousel = document.getElementById('#myCarousel')
  };

  /**
   * The controller for the `login` component
   *
   * The `login` method validates the credentials.
   * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
   */

  onChangePassword() {
  };

  GetIPAddressClientMachine() {
  }

  showPasswordForgot(useId: any) {
  };


  //   login(credentials:any, loginForm:any) {
  //     loginForm.submitted = true;
  //     if (loginForm.invalid) {
  //       return;
  //     }
  //     else{
  //       localStorage.setItem('Token', 'sdsdsfesdf23234234');
  // this.router.navigate(['/Dashboard']);
  //     }
  //   };

  async login(credentials: any, loginForm: any) {

    loginForm.submitted = true;
    if (loginForm.invalid) {
      return;
    }
    else {

      const returnToOriginalState = async () => {
        // const userDefaultPage = localStorage.getItem('DefaultPage');
        const Token = localStorage.getItem('Token');
        if (!Token) {
          this.invalidUser = true
          return;
        }
        this.invalidUser = false
        this.isAuthenticate = true;
        this.loginText = 'Authenticating'
        const user = {
          username: credentials.Username,
          password: credentials.Password
        }
        const res: any = await this.authService.getUserDetails(user)
        if(res !== ''){
          try {
            const objUser = res;
            const isAdmin = objUser.isAdmin;

            const User_Location_Array = [];
            if (objUser.location === null || objUser.location === '') {

            } else {
              const locationArray = objUser.location.split(",");

              for (let j = 0; j < locationArray.length; j++) {
                let e = locationArray[j];
                if (e !== "") {
                  User_Location_Array.push({ name: e });
                }
              }
            }

            const User_Department_Array = [];
            if (objUser.department === null || objUser.department === '') {

            } else {
              const departmentArray = objUser.department.split(",");

              for (let j = 0; j < departmentArray.length; j++) {
                let e = departmentArray[j];
                if (e !== "") {
                  User_Department_Array.push({ name: e });
                }
              }
            }

            const User_Segement_Array = [];
            if (objUser.segment1 === null || objUser.segment1 === '') {

            } else {
              const segmentArray = objUser.segment1.split(",");

              for (let j = 0; j < segmentArray.length; j++) {
                let e = segmentArray[j];
                if (e !== "") {
                  User_Segement_Array.push({ name: e });
                }
              }
            }

            if (objUser.segment1 === null || objUser.segment1 === '') {
              localStorage.setItem("segment1", JSON.stringify(null));
            } else {
              localStorage.setItem("segment1", JSON.stringify(User_Segement_Array));
            }

            if (objUser.segment === null || objUser.segment === '') {
              localStorage.setItem("segment", JSON.stringify(null));
              localStorage.setItem("selectedType", JSON.stringify(null));
            } else {
              localStorage.setItem("segment", JSON.stringify(objUser.segment));
              const localStorageSegment = JSON.parse(localStorage.getItem("segment") || '').split(",");
              localStorage.setItem("selectedType", JSON.stringify(localStorageSegment[0]));
            }
            localStorage.setItem('locations', JSON.stringify(User_Location_Array));
            localStorage.setItem("department", JSON.stringify(User_Department_Array));

            localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
            localStorage.setItem("menuitems", JSON.stringify(objUser.userPages));
            localStorage.setItem("menuitemsnew", JSON.stringify(objUser.userPagesv2));
            localStorage.setItem("empCode", JSON.stringify(objUser.empCode));
            localStorage.setItem("accessLevel", JSON.stringify(objUser.accessLevel));
            localStorage.setItem("isShowASP", JSON.stringify(objUser.isShowASP));
            localStorage.setItem("isShowDiff", JSON.stringify(objUser.isShowDiff));
            localStorage.setItem("IsShowEmployeeCtc", JSON.stringify(objUser.isShowEmployeeCtc));
            localStorage.setItem("EmployeeLocations", JSON.stringify(objUser.employeeLocations));
            localStorage.setItem("EmployeeGrades", JSON.stringify(objUser.employeeGrades));
            localStorage.setItem("PostingGroups", JSON.stringify(objUser.postingGroups));
            localStorage.setItem("GD2", JSON.stringify(objUser.gD2));
            localStorage.setItem("ProductionFacility", JSON.stringify(objUser.productionFacility));
            localStorage.setItem("Department", JSON.stringify(objUser.department));
            localStorage.setItem("ProductionCategory", JSON.stringify(objUser.productionCategory));
            localStorage.setItem("ReceivableItemCategories", JSON.stringify(objUser.receivableItemCategories));
            localStorage.setItem("UserTaskCount", JSON.stringify(objUser.userTaskCount));
            localStorage.setItem("AssignedTaskCount", JSON.stringify(objUser.assignedTaskCount));

          }
          catch (e) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
          }
          this.router.navigate(['/Turky_Inventory_Ageing']);
        }
      };
      const showError = () => {
        this.authenticating = false;
        this.errors = true;
      };
      const stop = () => {
        this.authenticating = false;
      };
      this.authService.authenticate(credentials.Username, credentials.Password)
        .subscribe(returnToOriginalState, showError, stop);
      // this.router.navigate(['/Turky_Inventory_Ageing']);

      // const temp = this.authService.authorizeMe();
      // console.log(temp)

    }
  }

}
