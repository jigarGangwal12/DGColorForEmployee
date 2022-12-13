import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("CompanyName=Jay Chemical Pvt. Ltd,LicensedGroup=Jay Chemical,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-024493,ExpiryDate=20_January_2023_[v2]_MTY3NDE3MjgwMDAwMA==146a67f8da6654b5d5b8ff778a674e24");
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFac1pJW3xIfUx0RWFbb19yfldOalhWVAciSV9jS3xTc0RnWX9dcHBSRGVcUw==');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
