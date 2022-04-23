(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-edit-password-edit-password-module"],{

/***/ "/daA":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/edit-password/edit-password.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPageModule", function() { return EditPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-password.page */ "PLTG");








const routes = [
    {
        path: '',
        component: _edit_password_page__WEBPACK_IMPORTED_MODULE_7__["EditPasswordPage"],
    },
];
let EditPasswordPageModule = class EditPasswordPageModule {
};
EditPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
        ],
        declarations: [_edit_password_page__WEBPACK_IMPORTED_MODULE_7__["EditPasswordPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], EditPasswordPageModule);



/***/ }),

/***/ "I57v":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/edit-password/edit-password.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "PLTG":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/edit-password/edit-password.page.ts ***!
  \********************************************************************************************/
/*! exports provided: EditPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPage", function() { return EditPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-password.page.html */ "tRUn");
/* harmony import */ var _edit_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-password.page.scss */ "I57v");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









let EditPasswordPage = class EditPasswordPage {
    constructor(formBuilder, router, navController, onBoardingService, sharedService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.navController = navController;
        this.onBoardingService = onBoardingService;
        this.sharedService = sharedService;
        this.isSubmitted = false;
        this.sharedService.gaTrackView('Edit Password Screen');
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    get f() {
        return this.userForm.controls;
    }
    ionViewWillEnter() {
        this.getUserProfile();
    }
    getUserProfile() {
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService.getUserProfile().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.sharedService.dismissLoader();
                if (res.data) {
                    this.userForm.get('_id').setValue(res.data._id);
                }
            }), (error) => {
                this.sharedService.dismissLoader();
                console.log(error);
            });
        }
        catch (error) {
            this.sharedService.dismissLoader();
            console.log(error);
        }
    }
    onSubmit() {
        this.sharedService.gaTrackEvent('SaveEditPassword', 'EditPasswordScreen');
        this.isSubmitted = true;
        if (this.userForm.invalid) {
            return;
        }
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService.updateUserPassword(this.userForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.sharedService.dismissLoader();
                this.sharedService.presentToast(res.message);
                this.back();
            }), (error) => {
                console.log(error);
                this.sharedService.dismissLoader();
            });
        }
        catch (error) {
            console.log(error);
            this.sharedService.dismissLoader();
        }
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/account']);
    }
};
EditPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
EditPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-edit-password',
        template: _raw_loader_edit_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], EditPasswordPage);



/***/ }),

/***/ "tRUn":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/edit-password/edit-password.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n        <h1 no-margin><strong>Edit Password</strong></h1>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-item\n            mode=\"ios\"\n            class=\"ion-no-padding auth-inputs\"\n            [class.invalid]=\"!f.password.valid && (f.password.touched || f.password.dirty || isSubmitted)\"\n          >\n            <ion-label position=\"floating\">Current Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" required> </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"!f.password.valid && (f.password.dirty || isSubmitted)\">\n            <small>Please enter a current password.</small>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-item\n            mode=\"ios\"\n            class=\"ion-no-padding auth-inputs\"\n            [class.invalid]=\"!f.newPassword.valid && (f.newPassword.touched || f.newPassword.dirty || isSubmitted)\"\n          >\n            <ion-label position=\"floating\">New Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"newPassword\" required> </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"!f.newPassword.valid && (f.newPassword.dirty || isSubmitted)\">\n            <small>Please enter a new password.</small>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\" type=\"submit\"\n            >Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"medium\" fill=\"outline\" shape=\"round\" expand=\"block\" (click)=\"back()\"\n            >Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-edit-password-edit-password-module-es2015.js.map