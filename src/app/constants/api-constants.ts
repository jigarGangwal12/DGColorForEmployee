export let API_CONSTANTS = {
    Purchase: {
        Product_Analyser: {
            Get_Data_for_Category: 'Master/GetAllItemdata',
            Get_Data_for_Location: 'Master/GetAllLocation',
            Get_Data_for_Products: 'Master/GetAllItemByCategory',
            Get_AUD_R_Count: 'Product/GerProductAUDRCount',
            Get_Product_Export: 'Product/GerProductInterExport',
            Get_Product_Import: 'Product/GetProductImport',
            Get_Total_Qty_Product: 'Product/GetTotalQtyProduct',
            Product_Detail: 'Product/GetProductDetail',
            //Get_Matrial_Receipt_Product_Category :'PendingOrderDetails/GetMaterialReceiptProductCategory',
            Get_Pending_Order_Details: 'PendingOrderDetails/GetMaterialReceiptByLocationWise',
            Get_Product_Category_List_Details: 'PendingOrderDetails/GetMaterialReceiptProductCategory',
            Get_Order_Booking_Location_Wise_List_Details: 'PendingOrderDetails/GetMaterialReceiptLocationWiseData',
            Get_Right_Side_Data_List: 'PendingOrderDetails/GetOrderBookingRightSideDataLocationWise'
        },
        Expense_Analyser: {
            Get_Location_Values: 'ExpenseAnalysis/GetExpenseAnalysisFilterLocation',
            Get_Supplier_Values: 'ExpenseAnalysis/GetExpenseAnalysisFilter',
            Get_Capital_FY_Monthly_Yearly: 'ExpenseAnalysis/GetExpenseAnalysisCapitalFYMonthlyYearly1',
            Get_Grid_Data: 'ExpenseAnalysis/GetExpenseAnalysisGridData',
            Get_Expense_Analysis_FY_Monthly_Yearly: 'ExpenseAnalysis/GetExpenseAnalysisFYMonthlyYearly',
            Get_Expense_Analysis_Capital_FY_Monthly_Yearly: 'ExpenseAnalysis/GetExpenseAnalysisCapitalFYMonthlyYearly'
        },
        Intermediate_Export: {
            GetProduct: 'Importer/IntermediateExportProductList',
            GetCountry: 'Importer/GetCountry',
            GetIntermediateExportData: 'Importer/getIntermediateExportData'
        },
        Scrap_Sales: {
            Get_Grid_Type_Of_Scrap_Left_Side: 'ScrapSales/GetGridTypeOfScrapLeftSide',
            Get_Grid_Vendors_Left_Side: 'ScrapSales/GetGridVendorsLeftSide',
            Get_Grid_Unit_Left_Side: 'ScrapSales/GetGridUnitLeftSide',
            Get_Grid_Scrap_Sales: 'ScrapSales/GetGridScrapSales',
        },
        Consumption: {
            Get_Consumption_Details: 'Consumption/GetConsumptionDeatails',
            Get_Location: 'Product/getlocation',
            Get_Consumption_On_Year_Data: 'Product/consumptionyearonyeardata'
        },
        Import_Consumption: {
            Get_Location: 'Product/getlocation',
            GetImportConsumptionData: 'Consumption/GetImportConsumptionDeatails'
        },
        Pending_GRN_Report: {
            Get_Pending_Outwards_Report_Data: 'PendingOutwardsReport/GetPendingOutwardsDataByLocationWise',
            Get_Pending_Outwards_Report_Total: 'PendingOutwardsReport/GetPendingOutwardsLocationWiseTotalBYLocationWise',
        },
        Open_Order: {
            Get_Category: 'Master/GetAllItemCategory',
            Get_Open_Order_Data: 'OpenOrder/GetOpenOrderDataByLocationWise',
        },
        Pending_GRN_User: {
            getpendingoutwardsreportData: 'PendingOutwardsReport/GetPendingOutwardsDataByLocationWise'
        },
        Pending_GRN: {
            getpendingoutwardsData: 'PendingOutwardsReport/GetPendingOutwardsDataByLocationWise'
        },
        PendingTransferOrder: {
            getPendingTransferOrderData: 'OpenOrder/GetPendingTransferOrder'
        },
        VendorAnalyser: {
            Get_Vendor_ItemCategory: '/Master/GetAllVendorPostingGroup',
            Get_VendorData_LocationWise: 'Vendor/GetVendorDetailingLocationWise',
            VendorAnalyserData: 'Vendor/VendorAnalyserData'
        },
        VendorDistribution: {
            Get_Vendor_Product: '/Master/GetAllItemByCategory'
        },
        VendorAgingReport: {
            Get_VendorAgeing_Report: '/VendorAgingReport/GetPostingGroupList'
        },
        RM_Inventory_Analyser: {
            Get_Inventory_Data: 'Inventory/GetFilterByProductIdInventoryTab1',
            Get_Stock_Location: 'Inventory/GetAllStockLocation',
            Get_Inventory_Tab1_Data: 'Inventory/GetInventoryTab1Data',
            Get_Inventory_Tab2_Data: 'Inventory/GetInventoryTab2Grid',
            GetProductAnalyserInventoryData: 'Product/GetProductAnalyserInventoryData',
            GerProductStockAPP: 'Product/GerProductStockAPP',
            Get_Plant_Inventory: 'Inventory/GetPlantInventory',
            Get_Plant_Location: 'Inventory/GetPlantLocation'
        },
        Vendor_Analyser_page: {
            Vendor_Group: 'Master/GetAllVendorGroups'
        },
        All_Vendor_Analyser_Page: {
            All_Vendor_Details: 'Master/GetAllVendors'
        },
        All_Vendor_Category: {
            Vendor_Category: 'Master/GetAllVendorPostingGroup'
        },
        Rate_Analyser_Item: {
            Rate_Analyser_Item_Category: 'RateAnalyser/GetRateAnalyzerIIItemCategory',
            RateAnalyserSegmentWise: 'RateAnalyser/GetInventoryDataBySegmentWise'
        },
        Rate_Analyser_Item_Total: {
            Rate_Analyser_Item_Totalrow: 'RateAnalyser/GetRateAnalyzerII'
        },
        Open_Order_Category: {
            Open_Order_Data_Item_Category: 'OpenOrder/GetOpenOrderDataOldPurchaseType'
        },
        Purchase_Order_Booking: {
            Purchase_Product_Category: 'PendingOrderDetails/GetOrderBookingPageFilter',
            Purchase_Order_Details: 'PendingOrderDetails/GetPendingOrderDetailsByLocationWise',
            Purchase_Order_BookingLocationWise: 'PendingOrderDetails/GetOrderBookingLocationWise',
            Purchase_Order_BookingProductCategory: 'PendingOrderDetails/GetOrderBookingProductCategory',
            Purchase_Monthly_Product_Detail: 'PendingOrderDetails/GetOrderBookingMonthlyProductDetail',
        },
        Vendor_Ageing_Report: {
            Vendor_Ageing_Posting_Group: 'VendorAgingReport/GetPostingGroupList',
            Vendor_Ageing_Posting_Group_Grid: 'VendorAgingReport/GetVedorPostingGroupGridTotal',
            Vendor_Ageing_Posting_Group_Grid_Data: 'VendorAgingReport/GetVendorPostingGroupGrid',
            Vendor_Ageing_Collection_Data: 'VendorAgingReport/GetVendorAgeningCollectiondata',
            Vendor_Ageing_Report_Data: 'VendorAgingReport/GetVendorAgingReport',
            getCashFlowVedorChartData: 'VendorAgingReport/GetCashFlowVedorChartData',
            getVedorChartData: 'VendorAgingReport/GetVedorChartData'
        },
        Recent_PO_Category: {
            LastPending_Order_Select_Category: 'Master/GetAllItemByCategory',
            Get_Last_Pending_Order_By_LocationWise: 'LastPendingOrder/GetLastPendingOrderByLocationWise',

        },
        CashFlow_Select: {
            Cash_Flow_Category: 'VendorAgingReport/GetAllVendorAgingData',
            Cash_Flow_WeekList: 'CashFlow/getweeklist'
        },
        CashFlow_Grid: {
            Cash_Flow_Grid: 'CashFlow/getcashflownewweekdata',
            GetVendorAppliedEntriesByVendorData: 'CashFlow/GetVendorAppliedEntriesByVendorData',
            GetAllVendorAgingData: 'VendorAgingReport/GetAllVendorAgingData'
        },
        vendor: {
            getLastEightYearDataVendorWise: 'vendor/LastEightYearDataVendorWise',
            getCurrentYearOustStanding: 'Vendor/CurrentYearOustStanding',
            getVendorDetailingLocation: 'Vendor/GetVendorDetailingLocationWise'
        },
        Monthly_Purchase_Category: {
            Select_Category_Monthly_Purchase: 'Master/GetAllItemdata',
            Get_Monthly_Purchase_Chart: 'Vendor/GetMonthlyPurchasechart',
            Get_Monthly_Purchase: 'Vendor/GetMonthlyPurchase',
            Get_Monthly_Purchase_Total: 'Vendor/GetMonthlyPurchaseTotal',
            Get_EightYears_Monthly_Purchase: 'Vendor/GetEightYearsMonthlyPurchase',
            Get_Monthly_Purchase_Table: 'Vendor/GetMonthlyPurchasetable',
        },
        Import_Analyser_Category: {
            Import_Analyser_Select_Category: 'Importer/ImporterProductList',
            Get_Product_Import: 'Importer/ProductImporter',
        },
        Work_Order: {
            Work_Order_grid: 'workorder/GetWorkOrderGridData',
            Work_Order_Location_Wise: 'workorder/GetWorkOrderTotalByLocationWise',
            Work_Order_Vendor_List: 'workorder/GetWorkOrderVendorList',
            Work_Order_Monthly_Data: 'workorder/GetWorkOrderMonthlydata',
            Work_Order_GetPdfDocumentByDocumentNo: 'workorder/GetPdfDocumentByDocumentNo'
        },
        Job_Work_Analysis: {
            JWA_Grid_Data: 'JobWorkAnalysis/GetJobWorkAnalysisGridData',
            JWA_Grid_Summary: 'JobWorkAnalysis/GetJobWorkAnalysisGridSummary',
            JWA_Filter_Data: 'JobWorkAnalysis/GetJobWorkAnalysisFilterData',
        },
        QC_Analysis: {
            Get_Location: 'Product/GetQcAnalysisLocation',
            Get_QC_Anylsis_Product: 'Product/GetQcAnalysisProduct',
            Get_QC_Anylsis_Vendor: 'Product/GetQcAnalysisVendor',
            Get_QC_Anylsis_Detail: 'Product/getQCAnalysisDetail',
        },
        Peding_Invoice: {
            Get_Pending_Invoice_Data: 'pendingreceipt/GetPendingReceiptGrnDataByLocationWise',
            Get_Pending_Location_Total: 'pendingreceipt/GetPendingLocationWiseTotalByLocationWise'
        },
        Sales_Raw_Material: {
            Sales_Material_Total_Data: 'Product/salesrawmaterialtotaldata',
            Sales_Material_Data: 'Product/salesrawmaterialdata',
        },
        Purchase_Indent: {
            Get_Project_Code: 'Product/Getpurchaseindentprojectcode',
            Post_Purchase_Indent_Data: 'Product/GetPurchaseIndent',
        },
        RM_Not_Purchase_In_Year: {
            RMNotPurinYear: 'Product/GetRMNotPurOneYear'
        },
        Capital_Analysis: {
            Get_Capital_FY_Monthly_Yearly: 'ExpenseAnalysis/GetExpenseAnalysisCapitalFYMonthlyYearly1',
            Capital_Analysis_Filter_Location: 'ExpenseAnalysis/GetCapitalAnalysisFilterLocation',
            Capital_Analysis_Filter_Vendors: 'ExpenseAnalysis/GetCapitalAnalysisFilterVendorsData',
            Capital_Analysis_Page1_Grid: 'ExpenseAnalysis/GetCapitalAnalysisPage1Grid',
            Get_Expense_Analysis_Monthly_Detail_Capital1: 'ExpenseAnalysis/GetExpenseAnalysisMonthlyDetailCapital1',
            GetInvoicePdfFileByDocumentNo: 'ExpenseAnalysis/GetInvoicePdfFileByDocumentNo',
            Get_Pending_Amount: 'ExpenseAnalysis/getpendingamount',
        },
        RM_Min_Max_Rate: {
            RMMinMaxRate: 'Product/RmMinMaxRatedata'
        },
        RM_MSL_Report: {
            Get_Location: 'Product/getlocation',
            Get_RMMSLReport: 'Product/GETRMMSMReport'
        },
        RM_M2M_Rate_Report: {
            Get_Segment: 'Master/GetRmRateSegmentFilter',
            Get_RMRateM2M: 'Product/GetRmRateM2M'
        }

    },

    Export: {
        Export_Receivable: {
            Get_Export_Receivable_Data: 'Export/getexportreceivabledata',
            Get_Popup_Data: 'Export/getcustpopupdata1',
            Get_Popup_Chart_Data: 'Export/getcustpopupdata',
            Get_Popup_FCY_Data: 'Export/getcustpopupdatafcy',
            Get_Popup_Fcy_Chart_Data: 'Export/getcustpopupdatafcy2',
        },
        Export_Product_Margin: {
            GetDailyOrderUpdateData: 'Export/GetDailyOrderUpdate',
            Get_Daily_Order_Update_Category: 'Export/GetDailyOrderUpdatCategory',
            Get_Daily_Order_Customer_Group: 'Export/GetDailyOrderUpdatCustomerGroup',
            GetDailyDyesUpdateDatatab2: 'Export/GetDailyDyesUpdate',
            Get_Daily_Dyes_Update: 'Export/GetDailyDyesUpdateProduct',
            Get_Daily_Dyes_Customer_Group: 'Export/GetDailyDyesUpdatCustomerGroup',
            Get_Daily_Dyes_Category: 'Export/GetDailyDyesUpdatCategory',
        },
        Export_Reqt: {
            Get_Agent: 'Master/GetAgent',
            Get_SalesProduct: 'Master/GetSalesProduct',
            Get_Customer: 'Master/GetCustomer',
            Get_SalesCode: 'Master/GetSalesCode',
            GetExportOrderReqtPageData: 'Export/GetExportOrderReqt'
        },
        Export_Analyser: {
            Get_Form_To_date: 'Export/GetExportAnalyserFromToDate',
            Get_Company_List: 'Master/CompanyNameList',
            Get_Category_List: 'Export/GetExportAnalyserCategory',
            Get_Left_table_Data: 'Export/GetExportAnalyserLeftSideData',
            Get_Grid_Monthly_table_Data: 'Export/GetExportAnalyserGridMonthly',
            Get_Grid_table_Data: 'Export/GetExportAnalyserGridData',
            Get_Page_Grid_2_Table_Data: 'Export/GetExportAnalyserPage2Grid',
        },
        Export_Dashboard: {
            Apply_All_Filter: 'ExportDashboard/ApplyAllFilter',
            Get_Grid_Data_Total: 'ExportDashboard/GetGridDataTotal',
            Get_Grid_Data: 'ExportDashboard/GetGridData',
            Get_Grid_DataForMTDYTD: 'ExportDashboard/GetGridForMTDYTDData',
            Get_Gildan_Code: 'ExportDashboard/GetGildanCode',
            Get_Export_Dashboard_Products: 'ExportDashboard/GetExportDashboardProducts',
        },
        New_Development_Product: {
            Get_Products: 'Export/GetNewProduct',
            Get_Product_development_Data: 'Export/GetNewDevelopProduct',
        },
        Transit_Report: {
            Get_Export_Transit_Report: 'Export/GetTransitReportData',
            Get_Sales_Person: 'Export/getTransitSalesPerson',
            Get_Countries: 'Export/getTransitCountry',
        },
        Gildan_Report: {
            Get_Gildan_Report: 'Export/getGildanReport',
        },
        Global_Export_Analyser: {
            Get_Global_Export_StartDateEndDate: 'Export/getGlobalExportStartDateEndDate',
            Get_Global_Export_Data: 'Export/getGlobalExportData',
            Get_Global_Export_DataByCountryFilter: 'Export/GetGlobalExportDataByCountryFilter',
            Get_Global_Monthly_Data: 'Export/getGlobalExportMonthlyData',
        },
        Export_Sales: {
            Get_Export_Sales_Yearly_Data: 'Export/getExportSalesYearly',
        },
        Export_Sales_Dashboard: {
            getExportSalesDashboardYearly: 'Export/getExportSalesDashboardYearly',
            getExportSalesDashboardMonthly: 'Export/getExportSalesDashboardMonthly',
        },
    },
    Domestic: {
        Available_Plant_Stock: {
            Get_Msl_Data: 'Msl/GetMslData',
            Get_Item_Category: 'Msl/getMSLItemCategory',
        },
        Product_Margin: {
            Get_Daily_Order_Update: 'SalesDashboard/GetDailyOrderUpdate',
            Get_Agent_Name: 'SalesDashboard/GetDailyOrderUpdatCustomerGroup',
            Get_Daily_Dyes_Update: 'SalesDashboard/GetDailyDyesUpdate',
            Get_Daily_Order_Category: 'SalesDashboard/GetDailyOrderUpdatCategory'
        },
        Price_Trend: {
            Get_Price_Trend_Data: 'SalesDashboard/PriceTrend/getData',
            Get_Sales_Agent: 'Master/GetSalesAgent',
            Get_Customer_List: 'Master/GetCustomerListForPriceTrend',
        },
        Domestic_Inventory: {
            Get_Domestic_Inventory: 'SalesDashboard/getdomesticInventorydata',
            Get_Location_For_Sales: 'Master/GetAllLocationForSalesInv',
        },
        Dispatch_Shipment: {
            Get_Dispatch_Shipment_Details: 'SalesDashboard/GetDispatchShipmentDetails',
        },
        Sales_Dashboard: {
            Get_Dashboard_Header_Filter: 'SalesDashboard/getsalaesdashboardheaderfilter',
            Get_Salesdashboard_Customer: 'SalesDashboard/getsalaesdashboardcustomer',
            Get_Salesdashboard_Sales_Person: 'SalesDashboard/getSalaesdashboardSalesPerson',
            Post_Salesdashboard_Data: 'SalesDashboard/SalesDashboardNewDataversion2',
            GetItemCategoryByEmpCode: 'SalesDashboard/GetItemCategoryByEmpCode',
            Post_Salesdashboard_Data_Default: 'SalesDashboard/SalesDashboardNewData_Default',
            Get_SalesDashboard_Agent_Data: 'SalesDashboard/getSalesAgentGridData',
            Get_SalesDashboard_Item_Category_Data: 'SalesDashboard/getSalesItemCategoryGridData',
            Get_SalesDashboard_Chart: 'SalesDashboard/GetSalesdashboardnew_Chart',
            Get_SalesDashboard_Conchem_Data: 'SalesDashboard/getSalesConchemYearly',
            Get_Sales_Monthly_Data_byRank: 'Salesdashboard/getSalesMonthlyDataByRank',
            Get_Sales_Monthly_Data_byRank_Default: 'Salesdashboard/getSalesMonthlyDataByRank_Default',
            Get_Sales_Monthly_Data: 'SalesDashboard/getSalesMonthlyData',
            Get_Sales_Monthly_Data_Default: 'SalesDashboard/getSalesMonthlyData_Default',
            Get_SalesDashboard_Conchem_Monthly_Data: 'SalesDashboard/getConchemMonthlyData',
            Get_Sales_Conchem_Monthly_Data: 'SalesDashboard/getSalesConchemMonthly',
            Get_Sales_Yearly_Data: 'SalesDashboard/getSalesYearlyData',
            Get_Sales_Yearly_Data_Default: 'SalesDashboard/getSalesYearlyDataDefault',
        },
        Sales_Inventory: {
            Get_Sales_Inventory: 'SalesDashboard/getInventorydatanew',
            GetInventoryMonthwiseAgeingData: 'SalesDashboard/GetInventoryMonthwiseAgeingData',
            // Get_Sales_Inventory_R1: 'SalesDashboard/GetSalesInventory',
            Get_Sales_Inventory_Sub_Grid: 'SalesDashboard/getsubgriddata',
            Get_Sales_Location: 'Master/GetAllLocationForSalesInv',
            Get_Sales_Inventory_R2: 'SalesDashboard/getinventorytabwise',
        },
        Sales_Analyser: {
            Get_Category: 'SalesDashboard/GetSegmentList',
            Get_Agent_List: 'SalesDashboard/GetDomestictSalesAnalyzerAgentList',
            Get_Sales_Analyser_Page1: 'SalesDashboard/GetDomesticSalesAnalyserPage1',
            Get_Sales_Analyser_Page2: 'SalesDashboard/GetDomesticSalesAnalyserPage2',
        },
        Visit_Report: {
            Get_Visit_Report_data: 'SalesDashboard/GetVisitReport',
            Get_Monthly_Visit_Data: 'SalesDashboard/GetVisitReportGridMonthly',
            Get_Yearly_Visit_Data: 'SalesDashboard/GetVisitReportGridYearly',
            Get_SalesPerson_Visit_Data: 'SalesDashboard/GetVisitReportGridSalespersonMonthly',
        },
        Domestic_Receivable: {
            Get_Domesticitem_Category_data: 'SalesDashboard/getdomesticitemcategory',
            Get_Sales_Person_data: 'SalesDashboard/getsalesperson',
            Get_Domestic_Receivable_Solunaris_Data: 'SalesDashboard/getdomesticreceivablesolunarisdata',
            Get_Domestic_Receivable_Data: 'SalesDashboard/getdomesticreceivabledata',

            GetCustPopupData1: 'SalesDashboard/getcustpopupdata1',//?custcode=' --Chart related call
            GetSolunarisCustPopupData1: 'SalesDashboard/getsolunariscustpopupdata1',
            GetCustPopupData: 'SalesDashboard/getcustpopupdata',
            GetSolunarisCustPopupData: 'SalesDashboard/getsolunariscustpopupdata',
        },
        Msl_Report: {
            Get_MSL_Report_Data: 'Msl/GetMslData',
            Get_MSL_Item_Category: 'Msl/getMSLItemCategory',
            Get_Pending_Order: 'Msl/Getpendingorder',
            Get_DigiInk_Inventory_Data: 'Msl/getinventorydata',
            Get_MSL_Planning_Data: 'Msl/getplannigdata'
        },
        DigiinkMSLReport: {
            Get_DigiInk_MSL_Report_Data: 'Msl/GetDigiinkMslReportData',
            Get_DigiInk_Inventory_Data: 'Msl/getdigiinkinventorydata',
            Get_DigiInk_Pending_Order: 'Msl/getdigiinkpendigordergrid'
        },
        DigitalInkSales: {
            Get_Digital_Ink_Sales_Data: 'Export/getDigitalInkSales'
        },
        Domestic_Dashboard_Two: {
            Agent_Dashboard_Data: 'SalesDashBoardMMT/GetDomesticDashboard2AgentsByCategory',
            Consignee_Dashboard_Data: 'SalesDashBoardMMT/GetDomesticDashboard2ConsigneeByCategory',
            Total_Grid_Data: 'SalesDashBoardMMT/GetGridDataTotal',
            Grid_Data: 'SalesDashBoardMMT/GetGridData',
            Dashboard_Header_Filter: 'SalesDashBoardMMT/GetDomesticDashboard2HeaderFilter',
        },
        Region_Analyser: {
            Get_Dom_Region_Analyser: 'SalesDashboard/GetDreamReport',
        },

        Sales_Receivable_Report: {
            Get_Sales_Receivable_Data: 'SalesDashboard/GetReceivableReport',
            Get_Monthly_Receivable_Data: 'SalesDashboard/GetReceivableReportGridMonthly',
            Get_Yearly_Receivable_Data: 'SalesDashboard/GetReceivableReportGridYearly'
        },
        Monthly_Order_Booking: {
            Get_Monthly_Order_Booking_Category: 'SalesDashboard/getMonthlyOrderBookingCategory',
            Get_Monthly_Order_Booking_BOM_Item: 'SalesDashboard/getMonthlyOrderBookingBOMItem',
            Get_Production_Bom_No: 'SalesDashboard/getProductionBomNo',
            Get_Monthly_Order_Booking_Detail: 'SalesDashboard/getmonthlyorderbookingdetail',
            Get_Monthly_RMC_Value: 'SalesDashboard/getMonthlyRMCValue',
        },
        Business_Promption: {
            Get_Domestic_Commission_Category: 'SalesDashboard/GetDomesticCommissionCategory',
            Get_Business_Promotion_Data: 'SalesDashboard/GetBusinessPromotionData',
        },
        Visit_Dashboard_Report: {
            Get_Visit_Dashboard_Report_Data: 'VisitDashboardReport/GetVisitDashboardReportData',
            Get_Left_Side_Grid_Visit_Data: 'VisitDashboardReport/getVisitDetailReportByEmpId'
        },
        Fg_Product_Analyser: {
            GetAllCategory: 'SalesDashboard/GetAllItemCategory',
            GetProduct: 'SalesDashboard/GetFGProductNameListByFilter',
            GetProductSubCategory: 'SalesDashboard/GetAllProductSubCategory',
            Get_Fg_Product_Data: 'SalesDashboard/GetFGProductData'
        },
        Pending_Approval_List: {
            Get_Pending_Approval_List_Data: 'SalesDashBoardMMT/GetPendingApprovalList'
        },
        Visit_Detail_Report: {
            Get_Visit_Details: 'SalesDashboard/getVisitDetailReport',
        },
        MarketingCost: {
            getDomesticMarketingCost: 'DomesticSaleCommision/GetDomesticMarketingCost_V2',
        },
        AverageBookingAndDispatch: {
            getaveragebookinganddispatch: 'SalesDashBoardMMT/getaveragebookinganddispatch'
        }
    },
    HR: {
        Employee_Profile: {
            Employee_List: 'HRMaster/GetAllEmployees_EmpProfile',
            GetEmpoyeProfileData: 'HRMaster/GetEmpoyeProfileData',
            GetEmpRelativeInfo: 'HRMaster/GetEmpRelativeInfo',
            GetEmpNoticeDetailsByEmpID: 'HRMaster/GetEmpNoticeDetails'
        },
        Just_Join: {
            GetEmployeeDetails: 'HRMaster/GetUserProfileData',
        },
        Academic_Report: {
            Academic_Report_Location: 'Master/GetHRLocation',
            Academic_Report_Department: 'Master/GetHRDepartment',
            Academic_Report_Grade: 'Master/GetHRGrade',
        },
        Before_Jay: {
            Before_Jay_Location: 'Master/GetHRLocation',
            Before_Jay_Department: 'Master/GetHRDepartment',
            Before_Jay_Grade: 'Master/GetHRGrade',
            Before_Jay_NoticeDetails: 'HRMaster/GetEmployeeNoticeList',
            Before_Jay_GetEmployeeNoticeListByEmpNo: 'HRMaster/GetEmployeeNoticeListByEmpNo',
            Before_Jay_GetMasterData: 'HRMaster/ExperienceData',
        },
        Employee_Attendance: {
            Employee_Attendance_Location: 'HRMaster/GetEmpDailyAttendaceUnitDeptSubDept'
        },
        Family_Details: {
            Employee_FamilyDetail_Unit: 'HRMaster/getfamilydetailunit'
        },
        Vaccine_Details: {
            Employee_VaccineDetail_Unit: 'HRMaster/getvaccineunit'
        },
        HR_Dashboard_Reporting: {
            Reporting_To: 'HRDashboard2/GetHeaderFilters',
            Employee_Summary: 'HRDashboard2/GetGridConfirmedUnderProbationLeftSide',
            Unit_Summary: 'HRDashboard2/GetGridUnitsLeftSide',
            Grade_Summary: 'HRDashboard2/GetGridGradesLeftSide',
            SubDepartment_Summary: 'HRDashboard2/GetGridSubDepartmentLeftSide',
            Department_Summary: 'HRDashboard2/GetGridDepartmentLeftSide',
            Employee_Master: 'HRDashboard2/GetGridEmployeeList'
        },
        NotifyEmployee: {
            Notify_Employee: 'HRDashboard2/GetHeaderFilters'
        },
        EmpAttendace_Form28: {
            EMPForm_28: 'HRMaster/GetEmpDailyAttendaceUnitDeptSubDept'
        },
        Organogram_Employees: {
            Organogram_Employees_List: 'HRMaster/GetOrganogramEmployees'
        },
        Net_Hiring: {
            InOut_Report: 'HRMaster/GetInOutReportData',
        },

    },
    Manufacturing: {
        Batch_Analysis_Product: {
            Get_Product_Batch_Analysis: 'Manufacturing/getproductbatchanalysis',
            Get_Batch_Dyes_Product: 'Manufacturing/getbatchdyesproduct'
        },
        Plant_Inventory_location: {
            Plant_Location_Data: 'Inventory/GetPlantLocation',
            GetInventoryData: 'Inventory/GetPlantInventory'
        },
        Lot_Working_Summary: {
            Get_Locations: 'Manufacturing/getlotworkingsummarylocation',
            Get_Years: 'Manufacturing/GetLotworkingyear',
            Get_Months: 'Manufacturing/GetOutputMonth',
            Get_Item_Code: 'Manufacturing/GetLotworkingitemcode',
            Get_Lot_No: 'Manufacturing/GetLotworkinglotno',
            Get_Lot_Working_Summary_Data: 'Manufacturing/GetLotworkingsummaryData',
            Delete_By_Lot_No: 'Manufacturing/DeleteLot'
        },
        ItemRequisition: {
            Item_Requisition_Department: 'Manufacturing/GetItemRequisitionDepartment',
            Item_Requisition_Data: 'Manufacturing/GetItemRequisitionData',
            Item_Indent_Data: 'Manufacturing/getidentwisegrndata',
            Issue_Indent_Data: 'Manufacturing/getidentwiseissuedata',
            GetPdf: 'Manufacturing/GetPOPdfByDocumentNo'
        },
        Costing: {
            GetCostingFinYear: 'Manufacturing/getcostingfinyear',
            GetCostingProduct: 'Manufacturing/getcostingproduct',
            GetCostingDocNumber: 'Manufacturing/getcostingdocumentno',
            GetCostingData: 'Manufacturing/getcostingdata',
            Delete: 'Manufacturing/DeleteBatch'
        },
        CostingDetail: {
            GetCostingDetailProduct: 'Manufacturing/getcostingdetailproduct',
            GetCostingDetailDocNo: 'Manufacturing/getcostingdetaildocument',
            GetCostingDetailData: 'Manufacturing/getcostingdetaildata'
        },
        Maintenance: {
            GetMaintenanceData: 'Manufacturing/getmaintenancedata'
        },
        BIP_Report: {
            GetBIPData: 'Manufacturing/getbipreportdata'
        },
        BlendingLotWorking: {
            GetFinYear: 'Manufacturing/getblendingfinyear',
            GetProduct: 'Manufacturing/getblendingproduct',
            GetDocNo: 'Manufacturing/getblendingdocumentno',
            GetBlendingData: 'Manufacturing/getblendingdata',
            Delete: 'Manufacturing/DeleteBlendingBatch'
        },
        BlendingDetail: {
            BlendingDetailProduct: 'Manufacturing/getblendingdetailproduct',
            BlendingDetailData: 'Manufacturing/getblendingdetaildata',
            BlendingDetailDocumentNo: 'Manufacturing/getblendingdetaildocument'
        },
        Volume_Batch: {
            Get_Volume_Batch_Document: 'Manufacturing/getVolumeBatchDocument',
            Get_Volume_Batch_Location: 'Manufacturing/getvolumebatchlocation',
            Get_Volume_Batch_Data: 'Manufacturing/getVolumeBatchData',
            Get_Volume_Batch_Detail_Final_Year: 'Manufacturing/getvolumebatchdetailfinyear',
        },
        Volume_Batch_Detail: {
            Get_Year: 'Manufacturing/getvolumebatchdetailfinyear',
            Get_Product: 'Manufacturing/getvolumebatchdetailgproduct',
            Get_Document: 'Manufacturing/getvolumebatchdetaildocumentno',
            Get_Batch_Detail_Data: 'Manufacturing/getvolumebatchdetaildata',
            Delete_Batch_Detail: 'Manufacturing/DeleteVolumeBatchDetail'
        },
        Consumable_Consumption: {
            Get_Consumable_Consumption_Category: 'Manufacturing/GetConsumableConsumptionCategory',
            Get_Consumable_Consumption_Monthly: 'Manufacturing/GetConsumableConsumptionMonthly',
            Get_Consumable_Consumption_Data: 'Manufacturing/GetConsumableConsumptionData'
        },
        ManuFacturing_Expense_Analysis: {
            GetMfgExpenseAnalysisFilterLocation: 'ExpenseAnalysis/GetMfgExpenseAnalysisFilterLocation',
            GetMfgExpenseAnalysisFYMonthlyYearly: 'ExpenseAnalysis/GetMfgExpenseAnalysisFYMonthlyYearly',
            GetFilterVendor: 'ExpenseAnalysis/GetMfgExpenseAnalysisFilterVendor',
            GetMfgMonthlyDetail: 'ExpenseAnalysis/GetMfgExpenseAnalysisMonthlyDetail',
            GetInvoicePdfFileByDocumentNo: 'ExpenseAnalysis/GetInvoicePdfFileByDocumentNo'
        }
    },
    DigiColor: {
        Inquiry_Form: {
            Getconsigneecustomer_DetailData: 'DigiColor/GetconsigneecustomerDetailData',
            GetConsigneeAddressDetails: 'DigiColor/GetConsigneeAddressDetails',
            PostInquiryFormData: 'DigiColor/PostInquiryFormData',
            GetDataByCaseIdData: 'DigiColor/GetDataByCaseIdData',
            GetAllInquiryData: 'DigiColor/GetAllInquiryData',
        },
        Inward_Form: {
            GetCaseIdByEmpCodeData: 'DigiColor/GetCaseIdByEmpCodeData',
            GetAllpendingSampleMappingData: 'DigiColor/GetAllpendingSampleMappingData',
            GetDigiColorUserId: 'DigiColor/GetDigiColorUserId',
            GetContactDetailandTypeofIndData: 'DigiColor/GetContactDetailandTypeofIndData',
            GetDigiColorInwardDataForEdit: 'DigiColor/GetDigiColorInwardDataForEdit',
            GetCustomerSubstrate: 'DigiColor/GetAllGetCustomerSubstrate',
            MapSampleIdWithCaseId: 'DigiColor/MapSampleIdWithCaseId',
            PostInwardFormData: 'DigiColor/PostInwardFormData',
            UpdateInwardFormData: 'DigiColor/UpdateInwardFormData'
        },
        OutWardPrediction_Form: {
            GetShadeIdDetailForOutwardPrediction: 'DigiColor/GetShadeIdDetailForOutwardPrediction',
            PostOutWardFormData: 'DigiColor/PostOutWardFormData'
        },
        DigiColorAdminPanel: {
            GetAllDigiColorUserList: 'DigiColor/GetAllDigiColorUserList',
            UpdateDigiColorUserList: 'DigiColor/UpdateDigiColorUserList',
            InsertOrUpdateAdminPanelData: 'DigiColor/InsertOrUpdateAdminPanelData'
        },
        ShadeMatching: {
            GetAllCustomerDataForShadeMatching: 'DigiColor/GetAllLabPredictionData',
            UpdateShadeIdStatusByJayEmployee: 'DigiColor/UpdateShadeIdStatusByJayEmployee',
            GerRecipeANDLabTesingParamter: 'DigiColor/GerRecipeANDLabTesingParamter',
            Get_ShadeId_Detail_For_OutwardPrediction: 'DigiColor/GetShadeIdDetailForOutwardPrediction',
            InsertRecipePrediction: 'DigiColor/InsertRecipePrediction',
            Insert_Shade_Matching: 'DigiColor/InsertShadeMatching',
            GerCustomerProductPurchase: 'DigiColor/GerCustomerProductPurchase',
            GetShadeMatchingDataFromJayChemical: 'DigiColor/GetShadeMatchingDataFromJayChemical',
            GetShadeMatchingDataFromDataColor: 'DigiColor/GetShadeMatchingDataFromDataColor',
            GetShadeIdDetailFromJayChemical: 'DigiColor/GetShadeIdDetailFromJayChemical',
            Get_All_Consginee: 'DigiColor/GetAllConsigenee',
            UpdateRecipePrediction: 'DigiColor/UpdateRecipePrediction',
            UpdateShadeMatchingRecipe: 'DigiColor/UpdateShadeMatchingRecipe',
            InsertRecipePredictionAfterLatestGetFromDataColor: 'DigiColor/InsertRecipePredictionAfterLatestGetFromDataColor',
            InsertShadeMatchingAfterLatestGetFromDataColor: 'DigiColor/InsertShadeMatchingAfterLatestGetFromDataColor',
            Get_All_Color_Gamut: 'DigiColor/GetAllColorGamut'
        },
        SendMessage:{
            getDigicolorInwardDetailForSendSMS: 'DigiColor/getDigicolorInwardDetailForSendSMS',
            getDigicolorInwardDetailForViewAll: 'DigiColor/getDigicolorInwardDetailForViewAll',
            SendSmsToCustomer: 'DigiColor/SendSmsToCustomer',
            SendSmsToCustomerForPredction: 'DigiColor/SendSmsToCustomerForPredction',
            SendSmsToCustomerForShadeMatching: 'DigiColor/SendSmsToCustomerForShadeMatching'
        }
    },
    Finance: {
        Balance_Sheet_Report: {
            Get_BalanceSheet_Liabilities: 'BalanceSheet/GetBalanceSheetLiabilities',
            Get_BalanceSheet_Asset: 'BalanceSheet/GetBalanceSheetAssets',
        },
        ProfitAndLossReport: {
            ProfitAndLossIncome: 'ProfitAndLoss/GetProfitAndLossIncome',
            ProfitAndLossExpense: 'ProfitAndLoss/GetProfitAndLossExpense',
            GetProfitAndLossHeader: 'ProfitAndLoss/GetProfitAndLossHeader',
            GetExpenseAnalysisMonthlyDetail: 'ExpenseAnalysis/GetExpenseAnalysisMonthlyDetail',
            GetInvoicePdfFileByDocumentNo: 'ExpenseAnalysis/GetInvoicePdfFileByDocumentNo'
        },
        Sales_Register: {
            Get_Locations: 'SalesDashboard/getlocation',
            Get_Sales_Register_With_TCS: 'SalesDashboard/GetSaleRegisterWithTCS',
            Get_Customer_Details: 'SalesDashboard/getcustomerdetail',
        },
        Peer_Group_Review: {
            GetSalesProfitMarginGrid: 'ProvisionReport/GetSalesProfitMarginGrid',
            GetBorrowSales: 'ProvisionReport/GetBorrowSales',
            GetFixedAssetsTurnoverRatio: 'ProvisionReport/GetFixedAssetsTurnoverRatio'
        }
    },
};
