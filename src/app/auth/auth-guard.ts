import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ROUTING_CONSTANTS } from "../constants/routing-constant";

@Injectable()
export class LoginAuthGuard implements CanActivate {
    ROUTING_CONSTANTS = ROUTING_CONSTANTS;
    constructor(
        private router: Router) { }
    canActivate(): boolean | Promise<boolean> {
        if (localStorage.getItem('Token')) {
            this.router.navigate([this.ROUTING_CONSTANTS.PURCHASE.PRODUCT_ANALYSER]);
            return false;
        }
        return true;
    }
}

@Injectable()
export class SecureAuthGuard implements CanActivate {
    ROUTING_CONSTANTS = ROUTING_CONSTANTS;
    constructor(
        private router: Router) { }
    canActivate(): boolean | Promise<boolean> {
        if (!localStorage.getItem('Token')) {
            this.router.navigate([this.ROUTING_CONSTANTS.LOGIN]);
            return false;
        }
        return true;
    }
}
