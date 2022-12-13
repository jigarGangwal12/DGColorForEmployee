import { Component } from '@angular/core';

@Component({
    selector: 'app-secure',
    templateUrl: './secure.component.html',
    styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
    title = 'JAY Mirror BI';

    key: string = 'Defaultpage';
    myItem: any;
    showHideLogo:boolean=true;

    onLogoClick(){
        this.myItem = localStorage.getItem(this.key);
        // location.href = this.myItem;
    }
 
}


