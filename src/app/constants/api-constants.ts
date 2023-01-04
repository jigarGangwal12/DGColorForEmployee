export let API_CONSTANTS = {
    DigiColor: {
        Inquiry_Form: {
            Getconsigneecustomer_DetailData: 'DigiColor/GetconsigneecustomerDetailData',
            GetConsigneeAddressDetails: 'DigiColor/GetConsigneeAddressDetails',
            PostInquiryFormData: 'DigiColor/PostInquiryFormData',
            GetDataByCaseIdData: 'DigiColor/GetDataByCaseIdData',
            GetAllInquiryData: 'DigiColor/GetAllInquiryData',
            DeleteContactDetailById: 'DigiColor/DeleteContactDetailById',
            SMSSendForPostInquiryFormData: 'DigiColor/SMSSendForPostInquiryFormData'
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
            UpdateInwardFormData: 'DigiColor/UpdateInwardFormData',
            InsertCompetitorName: 'DigiColor/InsertCompetitorName',
            InsertCompetitorProductName: 'DigiColor/InsertCompetitorProductName',
            CheckAllInwardSubmitedByCaseId: 'DigiColor/CheckAllInwardSubmitedByCaseId',
            SMSSendForPostInwardFormData: 'DigiColor/SMSSendForPostInwardFormData'
        },
        OutWardPrediction_Form: {
            GetShadeIdDetailForOutwardPrediction: 'DigiColor/GetShadeIdDetailForOutwardPrediction',
            PostOutWardFormData: 'DigiColor/PostOutWardFormData'
        },
        DigiColorAdminPanel: {
            GetAllDigiColorUserList: 'DigiColor/GetAllDigiColorUserList',
            UpdateDigiColorUserList: 'DigiColor/UpdateDigiColorUserList',
            InsertOrUpdateAdminPanelData: 'DigiColor/InsertOrUpdateAdminPanelData',
            PostCreateUser: 'DigiColor/PostCreateUser',
            GetAllUser: 'DigiColor/GetAllUser',
            RemoveUser: 'DigiColor/RemoveUser'
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
            SendSmsToCustomerForShadeMatching: 'DigiColor/SendSmsToCustomerForShadeMatching',
            SendMailToCustomerForPredction: 'DigiColor/SendMailToCustomerForPredction',
            SendMailToCustomerForShadeMatching: 'DigiColor/SendMailToCustomerForShadeMatching'
        }
    }
};
