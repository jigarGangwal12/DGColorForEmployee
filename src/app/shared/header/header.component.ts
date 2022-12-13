import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NotificationService } from "../../common/notification/notification.service";
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
  reportlist: any = [];
  public destroyed = new Subject<any>();
  destroy$: Subject<boolean> = new Subject<boolean>();
  ROUTING_CONSTANTS = ROUTING_CONSTANTS;
  menuContent1: any = [
    {
      title: 'Purchase',
      subMenu: [
        { Name: 'Turky', routing: this.ROUTING_CONSTANTS.TURKY },
        { Name: 'Order Booking ', routing: this.ROUTING_CONSTANTS.PURCHASE.ORDER_BOOKING },
        { Name: 'Capital Analysis', routing: this.ROUTING_CONSTANTS.PURCHASE.CAPITAL_ANALYSIS },
        { Name: 'Cash Flow', routing: this.ROUTING_CONSTANTS.PURCHASE.CASH_FLOW },
        { Name: 'Consumption', routing: this.ROUTING_CONSTANTS.PURCHASE.CONSUMPTION },
        { Name: 'Consumption User', routing: this.ROUTING_CONSTANTS.PURCHASE.CONSUMPTION_USER },
        { Name: 'Consumption YOY', routing: this.ROUTING_CONSTANTS.PURCHASE.CONSUMPTION_YOY },
        { Name: 'Covid-19 Donations', routing: this.ROUTING_CONSTANTS.PURCHASE.COVID_19 },
        { Name: 'Expense Analysis', routing: this.ROUTING_CONSTANTS.PURCHASE.EXPENSE_ANALYSIS },
        { Name: 'Import Analyzer ', routing: this.ROUTING_CONSTANTS.PURCHASE.IMPORT_ANALYZER },
        { Name: 'Import Consumption', routing: this.ROUTING_CONSTANTS.PURCHASE.IMPORT_CONSUMPTION },
        { Name: 'Intermediate Exports ', routing: this.ROUTING_CONSTANTS.PURCHASE.INTERMEDIATE_EXPORTS },
        { Name: 'Invoice Tracker ', routing: this.ROUTING_CONSTANTS.PURCHASE.INVOICE_TRACKER },
        { Name: 'Job Work Analysis ', routing: this.ROUTING_CONSTANTS.PURCHASE.JOB_WORK_ANALYSIS },
        { Name: 'Material Receipt ', routing: this.ROUTING_CONSTANTS.PURCHASE.MATERIAL_RECIEPT },
        { Name: 'MD Dashboard ', routing: this.ROUTING_CONSTANTS.PURCHASE.MD_DASHBOARD },
        { Name: 'Monthly Purchase ', routing: this.ROUTING_CONSTANTS.PURCHASE.MONTHLYPURCHASE },
        { Name: 'Open Order', routing: this.ROUTING_CONSTANTS.PURCHASE.OPEN_ORDER },
        { Name: 'Open Order(Detail User) ', routing: this.ROUTING_CONSTANTS.PURCHASE.OPEN_ORDER_DETAIL_USER },
        { Name: 'Open Order(Details User) ', routing: this.ROUTING_CONSTANTS.PURCHASE.OPEN_ORDER_DETAILS_USER },
        { Name: 'Open Order(Details) ', routing: this.ROUTING_CONSTANTS.PURCHASE.OPEN_ORDER_DETAILS },
        { Name: 'Payments ', routing: this.ROUTING_CONSTANTS.PURCHASE.PAYMENTS },
        { Name: 'Pending GRN Report ', routing: this.ROUTING_CONSTANTS.PURCHASE.PENDING_GRN_REPORT },
        { Name: 'Pending GRN Report User ', routing: this.ROUTING_CONSTANTS.PURCHASE.Pending_GRN_User },
        { Name: 'Pending Invoice ', routing: this.ROUTING_CONSTANTS.PURCHASE.PENDING_INVOICE },
        { Name: 'Pending Invoice User ', routing: this.ROUTING_CONSTANTS.PURCHASE.PENDING_INVOICE_USER },
        { Name: 'Pending Transfer Order ', routing: this.ROUTING_CONSTANTS.PURCHASE.PENDING_TRANSFER_ORDER },
        { Name: 'Product Analyser ', routing: this.ROUTING_CONSTANTS.PURCHASE.PRODUCT_ANALYSER },
        { Name: 'Purchase Indent ', routing: this.ROUTING_CONSTANTS.PURCHASE.INDENT },
        { Name: 'QC Detail Analysis ', routing: this.ROUTING_CONSTANTS.PURCHASE.QC_DETAIL_ANALYSIS },
        { Name: 'Rate Analyser ', routing: this.ROUTING_CONSTANTS.PURCHASE.RATE_ANALYSER },
        { Name: 'Rate Analyser - II ', routing: this.ROUTING_CONSTANTS.PURCHASE.RATE_ANALYSER_II },
        { Name: 'Recent PO ', routing: this.ROUTING_CONSTANTS.PURCHASE.RECENT_PO },
        { Name: 'RM Inventory Analyser ', routing: this.ROUTING_CONSTANTS.PURCHASE.RM_INVENTORY_ANALYSER },
        { Name: 'RM MSL Report ', routing: this.ROUTING_CONSTANTS.PURCHASE.RM_MSL_REPORT },
        { Name: 'RM Not Purchase in Year ', routing: this.ROUTING_CONSTANTS.PURCHASE.RM_NOT_PURCHASE_IN_YEAR },
        { Name: 'RM Rate M2M ', routing: this.ROUTING_CONSTANTS.PURCHASE.RM_RATE_M2M },
        { Name: 'RMMinMaxRate ', routing: this.ROUTING_CONSTANTS.PURCHASE.RM_MIN_MAX_RATE },
        { Name: 'Sales Raw Material ', routing: this.ROUTING_CONSTANTS.PURCHASE.SALES_RAW_MATERIAL },
        { Name: 'Scan Document Report ', routing: this.ROUTING_CONSTANTS.PURCHASE.SCAN_DOCUMENT_REPORT },
        { Name: 'Scrap Sales ', routing: this.ROUTING_CONSTANTS.PURCHASE.SCRAP_SALES },
        { Name: 'Vendor Ageing ', routing: this.ROUTING_CONSTANTS.PURCHASE.VENDOR_AGEING },
        { Name: 'Vendor Aging Report ', routing: this.ROUTING_CONSTANTS.PURCHASE.VENDOR_AGING_REPORT },
        { Name: 'Vendor Analyser ', routing: this.ROUTING_CONSTANTS.PURCHASE.VENDOR_ANALYSER },
        { Name: 'Vendor Distribution ', routing: this.ROUTING_CONSTANTS.PURCHASE.VENDOR_DISTRIBUTION },
        { Name: 'Work Order ', routing: this.ROUTING_CONSTANTS.PURCHASE.WORK_ORDER },
      ]
    },
    {
      title: 'HR',
      subMenu: [
        { Name: "Academic Report", routing: this.ROUTING_CONSTANTS.HR.ACADEMIC_REPORT },
        { Name: "Appraisal 21-22", routing: this.ROUTING_CONSTANTS.HR.APPRAISAL_21_22 },
        { Name: "AppraisalSummary", routing: this.ROUTING_CONSTANTS.HR.APPRAISAL_SUMMARY },
        { Name: "Attendance Report", routing: this.ROUTING_CONSTANTS.HR.ATTENDANCE_REPORT },
        { Name: "Before JAY", routing: this.ROUTING_CONSTANTS.HR.BEFORE_JAY },
        { Name: "Contractor Attendance", routing: this.ROUTING_CONSTANTS.HR.CONTRACTOR_ATTENDANCE },
        { Name: "Contractor Master" },
        { Name: "CreateEmployee", routing: this.ROUTING_CONSTANTS.HR.CREATE_EMPLOYEE },
        { Name: "CTCPercentage" },
        { Name: "Daily Tasks", routing: this.ROUTING_CONSTANTS.HR.DAILY_TASKS },
        { Name: "Emp Profile Formula", routing: this.ROUTING_CONSTANTS.HR.EMP_PROFILE_FORMULA },
        { Name: "EmpJobProfile" },
        { Name: "Employee Attendance", routing: this.ROUTING_CONSTANTS.HR.EMPLOYEE_ATTENDANCE },
        { Name: "Employee Attendance Form28", routing: this.ROUTING_CONSTANTS.HR.EMPLOYEE_ATTENDANCE_FORM28 },
        { Name: "Employee Profile", routing: this.ROUTING_CONSTANTS.HR.EMPLOYEE_PROFILE },
        { Name: "EmployeeProfileList" },
        { Name: "Family Detail", routing: this.ROUTING_CONSTANTS.HR.FAMILY_DETAIL },
        { Name: "HR Dashboard", routing: this.ROUTING_CONSTANTS.HR.HR_DASHBOARD },
        { Name: "HR Dashboard 2", routing: this.ROUTING_CONSTANTS.HR.HR_DASHBOARD_2 },
        { Name: "Increment 21-22 Analysis", routing: this.ROUTING_CONSTANTS.HR.INCREAMENT_21_22_ANALYSIS },
        { Name: "Increment Report", routing: this.ROUTING_CONSTANTS.HR.INCREAMENT_REPORT },
        { Name: "Just Joined", routing: this.ROUTING_CONSTANTS.HR.JUST_JOINED },
        { Name: "Khambhat-Local Employment", routing: this.ROUTING_CONSTANTS.HR.KHAMBHAT_LOCAL_EMPLOYEMENT },
        { Name: "Login As User", routing: this.ROUTING_CONSTANTS.HR.LOGIN_AS_USER },
        { Name: "Login Log", routing: this.ROUTING_CONSTANTS.HR.LOGIN_LOG },
        { Name: "lsAndAnalyser", routing: this.ROUTING_CONSTANTS.HR.LS_AND_ANALYSER },
        { Name: "MEmployeeProfile" },
        { Name: "MEmployeeProfilePrint" },
        { Name: "MEmployeeProfileSummary" },
        { Name: "Net Hiring", routing: this.ROUTING_CONSTANTS.HR.NET_HIRING },
        { Name: "Notice Detail", routing: this.ROUTING_CONSTANTS.HR.NOTICE_DETAIL },
        { Name: "Notify Employee", routing: this.ROUTING_CONSTANTS.HR.NOTIFY_EMPLOYEE },
        { Name: "Personal Analyser", routing: this.ROUTING_CONSTANTS.HR.PERSONAL_ANALYSER },
        { Name: "Total Cost", routing: this.ROUTING_CONSTANTS.HR.TOTAL_COST },
        { Name: "Vaccination Ratio", routing: this.ROUTING_CONSTANTS.HR.VACCINATION_RATIO },
        { Name: "Vaccine Detail", routing: this.ROUTING_CONSTANTS.HR.VACCINE_DETAIL },
      ]
    },
    {
      title: 'Export',
      subMenu: [
        { Name: "A-Order & Margin", routing: this.ROUTING_CONSTANTS.EXPORT.AGENT_ORDER_MARGIN },
        { Name: "C Sales - CustomerType", routing: this.ROUTING_CONSTANTS.EXPORT.C_SALES_CUSTOMER_TYPE },
        { Name: "Competition" },
        { Name: "Date wise Average Margin" },
        { Name: "Export" },
        { Name: "Export Analyser", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_ANALYSER },
        { Name: "Export Analysis By Country" },
        { Name: "Export Analysis By Exporter" },
        { Name: "Export Dashboard", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_DASHBOARD },
        { Name: "Export Dispatch" },
        { Name: "Export Freight" },
        { Name: "Export Incentive" },
        { Name: "Export Order" },
        { Name: "Export Order Reqt", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_REQT },
        { Name: "Export Produtct Margin", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_PRODUCT_MARGIN },
        { Name: "Export Receivable", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_RECEIVABLE },
        { Name: "Export Reports" },
        { Name: "Export Reqt" },
        { Name: "Export Sales Order Dispatch" },
        { Name: "JCIL v/s India Export" },
        { Name: "NewDevelopProduct", routing: this.ROUTING_CONSTANTS.EXPORT.NEW_DEVELOP_PRODUCT },
        { Name: "Order Details - 1" },
        { Name: "P - Sales ProductRange (Qty)" },
        { Name: "PL - Sales(Port Of Destination)" },
        { Name: "RC - Sales RangeofColor (Qty & Rev)" },
        { Name: "Reach Certificate" },
        { Name: "Region Analyser", routing: this.ROUTING_CONSTANTS.EXPORT.REGION_ANALYSER },
        { Name: "Sales - Agent & Product" },
        { Name: "SGA - Export" },
        { Name: "Tranist Report", routing: this.ROUTING_CONSTANTS.EXPORT.TRANSIT_REPORT },
        { Name: "Gildan Report", routing: this.ROUTING_CONSTANTS.EXPORT.GILDAN_REPORT },
        { Name: "Global Export Analyser", routing: this.ROUTING_CONSTANTS.EXPORT.GLOBAL_EXPORT_ANALYSER },
        { Name: "Export Sales", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_SALES },
        { Name: "Export Sales Dashboard", routing: this.ROUTING_CONSTANTS.EXPORT.EXPORT_SALES_DASHBOARD },
      ]
    },
    {
      title: 'Dom',
      subMenu: [
        { Name: "Agent Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.AGENT_ANALYSER },
        { Name: "Agent Distribution", routing: this.ROUTING_CONSTANTS.DOMESTIC.AGENT_DISTRIBUTION },
        { Name: "Available Plant Stock", routing: this.ROUTING_CONSTANTS.DOMESTIC.AVAILABLE_PLANT_STOCK },
        { Name: "Average Booking And Dispatch", routing: this.ROUTING_CONSTANTS.DOMESTIC.AVG_BOOKING_AND_DISPATCH },
        { Name: "Business Promotion", routing: this.ROUTING_CONSTANTS.DOMESTIC.BUSINESS_PROMOTION },
        { Name: "Collection", routing: this.ROUTING_CONSTANTS.DOMESTIC.COLLECTION },
        { Name: "Colour Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.COLOUR_ANALYSER },
        { Name: "Competitor", routing: this.ROUTING_CONSTANTS.DOMESTIC.COMPETITOR },
        { Name: "Credit Control", routing: this.ROUTING_CONSTANTS.DOMESTIC.CREDIT_CONTROL },
        { Name: "Current Sales View", routing: this.ROUTING_CONSTANTS.DOMESTIC.CURRENT_SALES_VIEW },
        { Name: "Customer Order Detail", routing: this.ROUTING_CONSTANTS.DOMESTIC.CUSTOMER_ORDER_DETAIL },
        { Name: "Customer Order Detail(All)", routing: this.ROUTING_CONSTANTS.DOMESTIC.CUSTOMER_ORDER_DETAIL_ALL },
        { Name: "Dispatch", routing: this.ROUTING_CONSTANTS.DOMESTIC.DISPATCH },
        { Name: "Dispatch Shipment", routing: this.ROUTING_CONSTANTS.DOMESTIC.DISPATCH_SHIPMENT },
        { Name: "Domestic Commission", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_COMISSION },
        { Name: "Domestic Dashboard-1", routing: this.ROUTING_CONSTANTS.DOMESTIC.DASHBOARD_ONE },
        { Name: "Domestic Dashboard-2", routing: this.ROUTING_CONSTANTS.DOMESTIC.DASHBOARD_TWO },
        { Name: "Domestic Inventory", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_INVENTORY },
        { Name: "Domestic Order Booking", routing: this.ROUTING_CONSTANTS.DOMESTIC.ORDER_BOOKING },
        { Name: "Domestic Product Margin", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_PRODUCT_MARGIN },
        { Name: "Domestic Product Margin-2", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_PRODUCT_MARGIN2 },
        { Name: "Domestic Sale Commision", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_SALES_COMISSION },
        { Name: "Domestic Sales Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_ANALYSER },
        { Name: "DomesticSalesAnalyser1", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_ANALYSER1 },
        { Name: "Dream Report", routing: this.ROUTING_CONSTANTS.DOMESTIC.DREAM_REPORT },
        { Name: "Domestic Receivable", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOMESTIC_RECEIVABLE },
        { Name: "Dream Report Pages", routing: this.ROUTING_CONSTANTS.DOMESTIC.DREAM_REPORT_PAGES },
        { Name: "DSR Report", routing: this.ROUTING_CONSTANTS.DOMESTIC.DSR_REPORT },
        { Name: "DSR Visit MIS", routing: this.ROUTING_CONSTANTS.DOMESTIC.DSR_VISIT_MIS },
        { Name: "FGProduct Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.FG_PRODUCT_ANALYSER },
        { Name: "fgproductanalyserpivot", routing: this.ROUTING_CONSTANTS.DOMESTIC.FG_PRODUCT_ANALYSER_PIVOT },
        { Name: "Inter Company Receivable", routing: this.ROUTING_CONSTANTS.DOMESTIC.INTER_COMPANY_RECEIVABLE },
        { Name: "Inventory", routing: this.ROUTING_CONSTANTS.DOMESTIC.INVENTORY },
        { Name: "Monthly Order Booking", routing: this.ROUTING_CONSTANTS.DOMESTIC.MONTHLY_ORDER_BOOKING },
        { Name: "Monthly OrderBooking Working", routing: this.ROUTING_CONSTANTS.DOMESTIC.MONTHLYORDERBOOKINGWorking },
        { Name: "MSL Report", routing: this.ROUTING_CONSTANTS.DOMESTIC.MSL_REPORT },
        { Name: "Pending Approval List", routing: this.ROUTING_CONSTANTS.DOMESTIC.PENDING_APPROVAL_LIST },
        { Name: "Pending Approval Page", routing: this.ROUTING_CONSTANTS.DOMESTIC.PENDING_APPROVAL_PAGE },
        { Name: "Price Trend", routing: this.ROUTING_CONSTANTS.DOMESTIC.PRICE_TREND },
        { Name: "Product Distribution", routing: this.ROUTING_CONSTANTS.DOMESTIC.PRODUCT_DISTRIBUTION },
        { Name: "Product Margin", routing: this.ROUTING_CONSTANTS.DOMESTIC.PRODUCT_MARGIN },
        { Name: "Product Range Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.PRODUCT_RANGE_ANALYSER },
        { Name: "QC Analysis FG", routing: this.ROUTING_CONSTANTS.DOMESTIC.QC_ANALYSIS_FG },
        { Name: "Quantity Approval", routing: this.ROUTING_CONSTANTS.DOMESTIC.QUANTITY_APPROVAL },
        { Name: "Quantity Recommendation", routing: this.ROUTING_CONSTANTS.DOMESTIC.QUANTITY_RECOMMENDATION },
        { Name: "Receivable", routing: this.ROUTING_CONSTANTS.DOMESTIC.RECEIVABLE },
        { Name: "Region Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.REGION_ANALYSER },
        { Name: "Sales Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.DOM_SALES_ANALYSER },
        { Name: "Sales Analyser-2", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_ANALYSER2 },
        { Name: "Sales DashBoard", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_DASHBOARD },
        { Name: "Sales Inventory", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_INVENTORY },
        { Name: "Sales Product Analyser", routing: this.ROUTING_CONSTANTS.DOMESTIC.SALES_PRODUCT_ANALYSER },
        { Name: "Sales Trend" },
        { Name: "SGA - Domestic" },
        { Name: "Tabulargrid" },
        { Name: "Target With Sales" },
        { Name: "Warehouse Transfer Receipt", routing: this.ROUTING_CONSTANTS.DOMESTIC.WAREHOUSE_TRANSFER_RECIEPT },
        { Name: "Zone Analyser" },
        { Name: "Visit Report", routing: this.ROUTING_CONSTANTS.DOMESTIC.VISIT_REPORT },
        { Name: "Visit Detail", routing: this.ROUTING_CONSTANTS.DOMESTIC.VISIT_DETAIL },
      ]
    },
    {
      title: 'Manufacturing',
      subMenu: [
        { Name: "Batch Analysis", routing: this.ROUTING_CONSTANTS.MANUFACTURING.BATCH_ANALYSIS },
        { Name: "BIP Report", routing: this.ROUTING_CONSTANTS.MANUFACTURING.BIP_REPORT },
        { Name: "Blending Detail" },
        { Name: "Blending Lot Working", routing: this.ROUTING_CONSTANTS.MANUFACTURING.BLENDING_LOT_WORKING },
        { Name: "Consumable Consumption", routing: this.ROUTING_CONSTANTS.MANUFACTURING.CONSUMABLE_CONSUMPTION },
        { Name: "Costing", routing: this.ROUTING_CONSTANTS.MANUFACTURING.COSTING },
        { Name: "Costing Detail", routing: this.ROUTING_CONSTANTS.MANUFACTURING.COSTING_DETAIL },
        { Name: "Eng Requisition", routing: this.ROUTING_CONSTANTS.MANUFACTURING.ENG_REQUISITION },
        { Name: "Facility Entry" },
        { Name: "H Acid Plant Report", routing: this.ROUTING_CONSTANTS.MANUFACTURING.H_ACID_PLANT_REPORT },
        { Name: "HPLC Detail" },
        { Name: "HPLC Entry" },
        { Name: "Item Requisition", routing: this.ROUTING_CONSTANTS.MANUFACTURING.ITEM_REQUISITION },
        { Name: "Lot Working Summary", routing: this.ROUTING_CONSTANTS.MANUFACTURING.LOT_WORKING_SUMMARY },
        { Name: "Maintenance" },
        { Name: "Manufacture Dashboard 2" },
        { Name: "Manufacturing DashBoard", routing: this.ROUTING_CONSTANTS.MANUFACTURING.MANUFACTURING_DASHBOARD },
        { Name: "Manufacturing Power" },
        { Name: "MEE Operation" },
        { Name: "Mfg Dashboard" },
        { Name: "Mfg. Expense Analysis", routing: this.ROUTING_CONSTANTS.MANUFACTURING.MANUFACTRING_EXPENSE_ANALYSIS },
        { Name: "Mfg. Inventory" },
        { Name: "Pending Approval", routing: this.ROUTING_CONSTANTS.MANUFACTURING.PENDING_APPROVAL },
        { Name: "Plant Inventory", routing: this.ROUTING_CONSTANTS.MANUFACTURING.PLANT_INVENTORY },
        { Name: "Power" },
        { Name: "Production Overhead" },
        { Name: "Production Planning" },
        { Name: "productionplanning" },
        { Name: "Spray Dryer Report" },
        { Name: "Volume Batch Data", routing: this.ROUTING_CONSTANTS.MANUFACTURING.VOLUME_BATCH_DATA },
        { Name: "Volume Batch Detail", routing: this.ROUTING_CONSTANTS.MANUFACTURING.VOLUME_BATCH_DETAIL },
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
        { Name: 'Manage Users', routing: this.ROUTING_CONSTANTS.USER_LIST },
        { Name: 'Manage Module' },
      ]
    },
  ];
  menuitems: any = [];
  pagesUserArry: any = [];
  menuContent: any = [];
  menuContent2: any = [];
  menuContent3: any = [];





  datasource: any;

  constructor(
    private _sanitizer: DomSanitizer,
    private router: Router,
    private actRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.Username = "UserName";
    this.sanitizer = _sanitizer;
    this.ScreenSizeWidth = window.innerWidth;
    this.heightPdfModal = (window.innerHeight) - 10;
    this.widthPdfModal = (window.innerWidth) - 150;
    this.heightIframe = (window.innerHeight) - 80;
  }

  ngOnInit() {
    this.pagesUserArry = [];
    this.menuContent = [];
    this.menuContent2 = [];





    this.menuitems = JSON.parse(localStorage.getItem("menuitemsnew")!);
    // 
    for (let i = 0; i < this.menuitems.length; i++) {
      var a = this.menuitems[i].subModule.split(",");
      var b = this.menuitems[i].subModuleState.split(",");
      this.menuContent3 = [];
      if (this.menuitems[i].module == 'Purchase') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Purchase', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'HR') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'HR', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Export') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Export', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Dom') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Dom', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Manufacturing') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Manufacturing', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Exim') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Exim', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'FIN') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'FIN', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Insurance') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Insurance', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'Safety') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'Safety', subMenu: this.menuContent3 })
      }
      else if (this.menuitems[i].module == 'DG Color') {
        for (let j = 0; j < a.length; j++) {
          this.menuContent3.push({ Name: a[j].split("*")[0], routing: (a[j].split("*")[1].trim()) });
        }
        this.menuContent.push({ 'title': 'DG Color', subMenu: this.menuContent3 })
      }
    }

    // this.getReportsList();
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

  OnClickViewMenu() {
    this.getReportsList();
    this.IsViewMenuVisible = !this.IsViewMenuVisible;
  }

  OnClickViewMobileMenu() {

    this.IsViewMobileMenuVisible = !this.IsViewMobileMenuVisible;
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate([this.ROUTING_CONSTANTS.LOGIN]);
  }

  isInternal() {
    return this.userType == 'Internal';
  }

  notificationpopup() {
  }

  getReportsList() {
    let UserId = localStorage.getItem("UserId");
    UserId += ',117';
    const StatementType = "Select"
    this.reportlist = [];
   
  }
}
