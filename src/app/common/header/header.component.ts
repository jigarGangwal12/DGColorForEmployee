import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TurkyService } from 'src/app/secure/turky/turky.service';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NotificationService } from "../notification/notification.service";
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ROUTING_CONSTANTS } from 'src/app/constants/routing-constant'


export class NotificationModel {
  public notificationId: any;
  public notifyType: number = 0;
  public senderCode: any;
  public recipientCode: any;
  public createdDate: any;
  public isRead: any;
  public readDate: any;
  public readByUserCode: any;
  public subjectText: any;
  public messageText: any;
  public attachments: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent {
  public unreadMessage: any;
  public unreadMessageCount: number = 0;
  Username;
  userRole: any;
  currentState: string = '';
  notificationpopupVisible: boolean = false;
  AgentCode: string = '';
  NotificationDataArry: NotificationModel[] = [];
  public showNotificationPdfModal: boolean = false;
  pdf_url: any;
  sanitizer: DomSanitizer;
  widthPdfModal: number;
  heightPdfModal: number;
  heightIframe: number;
  loadingVisible: boolean = false;
  IsViewMenuVisible: boolean = false;
  IsViewMobileMenuVisible: boolean = false;
  PdfTitle: string = '';
  NotificationCount: string = '';
  MarqueeText: string = '';
  PagePermissionList: any = [];
  ScreenSizeWidth: number;
  userType: string = '';
  reportlist: any =[];
  public destroyed = new Subject<any>();
  destroy$: Subject<boolean> = new Subject<boolean>();
  ROUTING_CONSTANTS = ROUTING_CONSTANTS;
 // foldername = true;
  menuContent: any = [
    {
      title: 'Reports',
      subMenu: [
        { Name: "Order Book", routing: this.ROUTING_CONSTANTS.ORDER_BOOK}
      ]
    },
    {
      title: 'Purchase',
      subMenu: [
        { Name: 'Capital Analysis', },
        { Name: 'Cash Flow' },
        { Name: 'Consumption' },
        { Name: 'Consumption User' },
        { Name: 'Consumption YOY' },
        { Name: 'Covid-19 Donations' },
        { Name: 'Expense Analysis',  },
        { Name: 'Import Analyzer ' },
        { Name: 'Import Consumption' },
        { Name: 'Intermediate Exports ' },
        { Name: 'Invoice Tracker ' },
        { Name: 'Job Work Analysis ' },
        { Name: 'Material Receipt ' },
        { Name: 'MD Dashboard ' },
        { Name: 'Monthly Purchase ' },
        { Name: 'Open Order ' },
        { Name: 'Open Order(Detail User) ' },
        { Name: 'Open Order(Details User) ' },
        { Name: 'Open Order(Details) ' },
        { Name: 'Order Booking ' },
        { Name: 'Payments ' },
        { Name: 'Pending GRN Report ' },
        { Name: 'Pending GRN Report User ' },
        { Name: 'Pending Invoice ' },
        { Name: 'Pending Invoice User ' },
        { Name: 'Pending Transfer Order ' },
        { Name: 'Product Analyser ',  },
        { Name: 'Purchase Indent ' },
        { Name: 'QC Detail Analysis ' },
        { Name: 'Rate Analyser ' },
        { Name: 'Rate Analyser - II ' },
        { Name: 'Recent PO ' },
        { Name: 'RM Inventory Analyser ' },
        { Name: 'RM MSL Report ' },
        { Name: 'RM Not Purchase in Year ' },
        { Name: 'RM Rate M2M ' },
        { Name: 'RMMinMaxRate ' },
        { Name: 'Sales Raw Material ' },
        { Name: 'Scan Document Report ' },
        { Name: 'Scrap Sales ' },
        { Name: 'Vendor Ageing ' },
        { Name: 'Vendor Aging Report ' },
        { Name: 'Vendor Analyser ' },
        { Name: 'Vendor Distribution ' },
        { Name: 'Work Order ' },
        { Name: 'Consumption YOY ' },
      ]
    },
    {
      title: 'HR',
      subMenu: [
        { Name: "Academic Report" },
        { Name: "Appraisal 21-22" },
        { Name: "AppraisalSummary" },
        { Name: "Attendance Report" },
        { Name: "Before JAY" },
        { Name: "Contractor Attendance" },
        { Name: "Contractor Master" },
        { Name: "CreateEmployee" },
        { Name: "CTCPercentage" },
        { Name: "Daily Tasks" },
        { Name: "Emp Profile Formula" },
        { Name: "EmpJobProfile" },
        { Name: "Employee Attendance" },
        { Name: "Employee Attendance Form28" },
        { Name: "Employee Profile" },
        { Name: "EmployeeProfileList" },
        { Name: "Family Detail" },
        { Name: "HR Dashboard" },
        { Name: "HR Dashboard 2" },
        { Name: "Increment 21-22 Analysis" },
        { Name: "Increment Report" },
        { Name: "Just Joined" },
        { Name: "Khambhat-Local Employment" },
        { Name: "Login As User" },
        { Name: "Login Log" },
        { Name: "lsAndAnalyser" },
        { Name: "MEmployeeProfile" },
        { Name: "MEmployeeProfilePrint" },
        { Name: "MEmployeeProfileSummary" },
        { Name: "Net Hiring" },
        { Name: "Notice Detail" },
        { Name: "Notify Employee" },
        { Name: "Personal Analyser" },
        { Name: "Total Cost" },
        { Name: "Vaccination Ratio" },
        { Name: "Vaccine Detail" },
      ]
    },
    {
      title: 'Export',
      subMenu: [
        { Name: "A-Order & Margin" },
        { Name: "C Sales - CustomerType" },
        { Name: "Competition" },
        { Name: "Date wise Average Margin" },
        { Name: "Export" },
        { Name: "Export Analyser" },
        { Name: "Export Analysis By Country" },
        { Name: "Export Analysis By Exporter" },
        { Name: "Export Dashboard" },
        { Name: "Export Dispatch" },
        { Name: "Export Freight" },
        { Name: "Export Incentive" },
        { Name: "Export Order" },
        { Name: "Export Order Reqt" },
        { Name: "Export Product Margin" },
        { Name: "Export Receivable" },
        { Name: "Export Reports" },
        { Name: "Export Reqt" },
        { Name: "Export Sales Order Dispatch" },
        { Name: "JCIL v/s India Export" },
        { Name: "NewDevelopProduct" },
        { Name: "Order Details - 1" },
        { Name: "P - Sales ProductRange (Qty)" },
        { Name: "PL - Sales(Port Of Destination)" },
        { Name: "RC - Sales RangeofColor (Qty & Rev)" },
        { Name: "Reach Certificate" },
        { Name: "Region Analyser" },
        { Name: "Sales - Agent & Product" },
        { Name: "SGA - Export" },
        { Name: "Transit Report"},
      ]
    },
    {
      title: 'Dom',
      subMenu: [
        { Name: "Agent Analyser" },
        { Name: "Agent Distribution" },
        { Name: "Available Plant Stock" },
        { Name: "Average Booking And Dispatch" },
        { Name: "Business Promotion" },
        { Name: "Collection" },
        { Name: "Colour Analyser" },
        { Name: "Competitor" },
        { Name: "Credit Control" },
        { Name: "Current Sales View" },
        { Name: "Customer Order Detail" },
        { Name: "Customer Order Detail(All)" },
        { Name: "Dispatch" },
        { Name: "Domestic Commission" },
        { Name: "Domestic Dashboard-1" },
        { Name: "Domestic Dashboard-2" },
        { Name: "Domestic Inventory" },
        { Name: "Domestic Order Booking" },
        { Name: "Domestic Product Margin" },
        { Name: "Domestic Product Margin-2" },
        { Name: "Domestic Sale Commision" },
        { Name: "Domestic Sales Analyser" },
        { Name: "DomesticSalesAnalyser1" },
        { Name: "Dream Report" },
        { Name: "Dream Report Pages" },
        { Name: "DSR Report" },
        { Name: "DSR Visit MIS" },
        { Name: "FGProduct Analyser" },
        { Name: "fgproductanalyserpivot" },
        { Name: "Inter Company Receivable" },
        { Name: "Inventory" },
        { Name: "Monthly Order Booking" },
        { Name: "Monthly OrderBooking Working" },
        { Name: "MSL Report" },
        { Name: "Pending Approval List" },
        { Name: "Pending Approval Page" },
        { Name: "Price Trend" },
        { Name: "Product Distribution" },
        { Name: "Product Margin" },
        { Name: "Product Range Analyser" },
        { Name: "QC Analysis FG" },
        { Name: "Quantity Approval" },
        { Name: "Quantity Recommendation" },
        { Name: "Receivable" },
        { Name: "Region Analyser" },
        { Name: "Sales Analyser" },
        { Name: "Sales Analyser-2" },
        { Name: "Sales DashBoard" },
        { Name: "Sales Inventory" },
        { Name: "Sales Product Analyser" },
        { Name: "Sales Trend" },
        { Name: "SGA - Domestic" },
        { Name: "Tabulargrid" },
        { Name: "Target With Sales" },
        { Name: "Warehouse Transfer Receipt" },
        { Name: "Zone Analyser" }
      ]
    },
    {
      title: 'Manufacturing',
      subMenu: [
        { Name: "Batch Analysis" },
        { Name: "BIP Report" },
        { Name: "Blending Detail" },
        { Name: "Blending Lot Working" },
        { Name: "Consumable Consumption" },
        { Name: "Costing" },
        { Name: "Costing Detail" },
        { Name: "Eng Requisition" },
        { Name: "Facility Entry" },
        { Name: "H Acid Plant Report" },
        { Name: "HPLC Detail" },
        { Name: "HPLC Entry" },
        { Name: "Item Requisition" },
        { Name: "Lot Working Summary" },
        { Name: "Maintenance" },
        { Name: "Manufacture Dashboard 2" },
        { Name: "Manufacturing DashBoard" },
        { Name: "Manufacturing Power" },
        { Name: "MEE Operation" },
        { Name: "Mfg Dashboard" },
        { Name: "Mfg. Expense Analysis" },
        { Name: "Mfg. Inventory" },
        { Name: "Pending Approval" },
        { Name: "Plant Inventory" },
        { Name: "Power" },
        { Name: "Production Overhead" },
        { Name: "Production Planning" },
        { Name: "productionplanning" },
        { Name: "Spray Dryer Report" },
        { Name: "Volume Batch Data" },
        { Name: "Volume Batch Detail" },
      ]
    },
    {
      title: 'Exim',
      subMenu: [
        { Name: "Import Document Updation" },
        { Name: "Import MIS Detail" },
        { Name: "Import MIS Summary" },
        { Name: "Import Shipment Updation" },
      ]
    },
    {
      title: 'FIN',
      subMenu: [
        { Name: "Balance Sheet" },
        { Name: "Document Management" },
        { Name: "Own Products Rate" },
        { Name: "Peer Group Review" },
        { Name: "Profit & Loss" },
        { Name: "Provision" },
        { Name: "Sales Register With TCS" },
      ]
    },
    {
      title: 'Insurance',
      subMenu: [
        { Name: "Brief Note" },
        { Name: "Claim Estimate" },
        { Name: "Email Content" },
        { Name: "FA Register" },
        { Name: "Index" },
        { Name: "Lor" },
      ]
    },
    {
      title: 'Safety',
      subMenu: [
        { Name: "Safety Moments" },
        { Name: "Safety Observation" },
      ]
    },
    {
      title: 'Settings',
      subMenu: [
        { Name: 'Manage Users' },
        { Name: 'Manage Module' },
      ]
    },
  ];
  datasource: any;

  constructor(
    private _sanitizer: DomSanitizer,
    private service: TurkyService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.Username = "UserNa,e";
    this.sanitizer = _sanitizer;
    this.ScreenSizeWidth = window.innerWidth;
    this.heightPdfModal = (window.innerHeight) - 10;
    this.widthPdfModal = (window.innerWidth) - 150;
    this.heightIframe = (window.innerHeight) - 80;
  }

  ngOnInit() {
    this.getReportsList();
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.getReportsList();
    });
  }


  ngAfterContentInit() {

    this.getReportsList();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
    this.destroyed.next();
    this.destroyed.complete();
  }

  show() {
  }

  onVisible(event: any) {
    event.preventDefault();
    event.stopPropagation();
   this.IsViewMenuVisible = false;
  }

  onPrevent(event: any) {
    event.preventDefault();
    event.stopPropagation();
   
  }

  OnClickViewMenu(event: any) {
    this.getReportsList();
    this.IsViewMenuVisible = !this.IsViewMenuVisible;
  }

  OnClickViewMobileMenu() {
    this.IsViewMobileMenuVisible = !this.IsViewMobileMenuVisible;
  }

  logout() {
    this.router.navigate(['login'])
    localStorage.clear();

  }


  isInternal() {
    return this.userType == 'Internal';
  }

  notificationpopup() {
  }

  getReportsList() {
    const UserId = localStorage.getItem("UserId");
    const StatementType = "Select"
    this.service.GetUsersWiseReports(UserId, StatementType).subscribe((response: any) => {
      if (response) {
        this.reportlist = response;
        this.datasource = response;
      }
    });
  }
}
