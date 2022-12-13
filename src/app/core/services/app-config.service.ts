import { Injectable } from '@angular/core';



/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class AppConfigService {
  private _sort = '+date';

 

  emailAddress!: string ;
  Username!: string ;
  isAuthorized = false;
  restDelay = 100;
  myRolesAndPermissions: any[];
  unreadMessageCount!: number;

  constructor() {
    this.load();
    
    this.myRolesAndPermissions = [];
  }

  toObject() {
    return {
      emailAddress: this.emailAddress,
      isAuthorized: this.isAuthorized,
      Username: this.Username,
      
      myRolesAndPermissions: this.myRolesAndPermissions,
      restDelay: this.restDelay,
      unreadMessageCount: this.unreadMessageCount
    };
  }

 

  load() {
    try {
      const data = JSON.parse(localStorage.getItem('appConfig')!);
      return Object.assign(this, data);
    } catch (Error) {}

    return this;
  }

  save() {
    const string = JSON.stringify(this.toObject());
    // sessionStorage.setItem('appConfig', string);
  }
}
