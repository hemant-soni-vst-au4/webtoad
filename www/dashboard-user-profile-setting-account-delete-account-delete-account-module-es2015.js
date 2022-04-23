(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-delete-account-delete-account-module"],{

/***/ "3DO9":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/delete-account/delete-account.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2RlbGV0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZGVsZXRlLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIl19 */");

/***/ }),

/***/ "Okup":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/delete-account/delete-account.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n        <h1 class=\"ion-no-margin\"><strong>Delete Account</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n        <h4>\n          Do you want to delete your account?<br /><br />\n\n          If you delete your account, all of your data including your lessons, saved words, and progress will be\n          deleted.<br /><br />\n\n          Are you sure you want to delete it?\n        </h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-margin-top\">\n        <ion-button mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\" (click)=\"back()\"\n          >No, I want to keep my account.\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-margin-top\">\n        <ion-button mode=\"ios\" color=\"medium\" fill=\"outline\" shape=\"round\" expand=\"block\"\n          >Yes, I want to delete my account\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "TPIe":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/delete-account/delete-account.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleteAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountPage", function() { return DeleteAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete-account.page.html */ "Okup");
/* harmony import */ var _delete_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-account.page.scss */ "3DO9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");







let DeleteAccountPage = class DeleteAccountPage {
    constructor(navController, router, sharedService) {
        this.navController = navController;
        this.router = router;
        this.sharedService = sharedService;
        this.sharedService.gaTrackView('Delete Account Screen');
    }
    ngOnInit() { }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/account']);
    }
};
DeleteAccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
DeleteAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-delete-account',
        template: _raw_loader_delete_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
], DeleteAccountPage);



/***/ }),

/***/ "hNuj":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/delete-account/delete-account.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DeleteAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountPageModule", function() { return DeleteAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _delete_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-account.page */ "TPIe");







const routes = [
    {
        path: '',
        component: _delete_account_page__WEBPACK_IMPORTED_MODULE_6__["DeleteAccountPage"],
    },
];
let DeleteAccountPageModule = class DeleteAccountPageModule {
};
DeleteAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_delete_account_page__WEBPACK_IMPORTED_MODULE_6__["DeleteAccountPage"]],
        providers: [],
    })
], DeleteAccountPageModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-delete-account-delete-account-module-es2015.js.map