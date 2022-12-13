import { Component, OnInit } from '@angular/core';
import { SecureComponent } from '../../secure.component';

@Component({
  selector: 'app-outward-matching',
  templateUrl: './outward-matching.component.html',
  styleUrls: ['./outward-matching.component.css']
})
export class OutwardMatchingComponent implements OnInit {
  hideaccordian =true;
  dummydata: any;
  PopupVisible = false;

  constructor(private secure:SecureComponent) { }

  ngOnInit(): void {
    this.secure.showHideLogo=false;
    this.dummydata=  [{
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com',
      Status: "Under Process",
      rbgcode: "#F7A76C",
    }, {
      ID: 2,
      CompanyName: 'Electronics Depot',
      Address: '2455 Paces Ferry Road NW',
      City: 'Atlanta',
      State: 'Georgia',
      Zipcode: 30339,
      Phone: '(800) 595-3232',
      Fax: '(800) 595-3231',
      Website: 'http://www.nowebsitedepot.com',
      Status: "Prediction",
      rbgcode: "#FAD6A5",
    }, {
      ID: 3,
      CompanyName: 'K&S Music',
      Address: '1000 Nicllet Mall',
      City: 'Minneapolis',
      State: 'Minnesota',
      Zipcode: 55403,
      Phone: '(612) 304-6073',
      Fax: '(612) 304-6074',
      Website: 'http://www.nowebsitemusic.com',
      Status: "Matching",
      rbgcode: "#7FB77E",
    }];
  }


  
  onClick(event:any){
    this.PopupVisible = true;
  }

  PopupClose(event:any){
    this.PopupVisible = false;
  }

}
