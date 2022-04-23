(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-support-email-the-team-email-the-team-module"],{

/***/ "3MGO":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/support/email-the-team/email-the-team.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailTheTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTheTeamPageModule", function() { return EmailTheTeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _email_the_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-the-team.page */ "Y0ej");








const routes = [
    {
        path: '',
        component: _email_the_team_page__WEBPACK_IMPORTED_MODULE_7__["EmailTheTeamPage"],
    },
];
let EmailTheTeamPageModule = class EmailTheTeamPageModule {
};
EmailTheTeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
        ],
        declarations: [_email_the_team_page__WEBPACK_IMPORTED_MODULE_7__["EmailTheTeamPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], EmailTheTeamPageModule);



/***/ }),

/***/ "Y0ej":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/support/email-the-team/email-the-team.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: EmailTheTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTheTeamPage", function() { return EmailTheTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_the_team_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-the-team.page.html */ "nk8B");
/* harmony import */ var _email_the_team_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-the-team.page.scss */ "qcT2");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









let EmailTheTeamPage = class EmailTheTeamPage {
    constructor(navController, formBuilder, sharedService, router, onBoardingService) {
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.router = router;
        this.onBoardingService = onBoardingService;
        this.isSubmitted = false;
        this.sharedService.gaTrackView('EmailTeam Screen');
        this.mailForm = this.formBuilder.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ionViewWillEnter() {
        this.getUserProfile();
    }
    get f() {
        return this.mailForm.controls;
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    ngOnInit() { }
    getUserProfile() {
        try {
            this.onBoardingService.getUserProfile().subscribe((res) => {
                this.profile = res.data;
            }, (error) => { });
        }
        catch (error) {
            console.log(error);
        }
    }
    submit() {
        this.sharedService.gaTrackEvent('EmailSubmit', 'SupportPage');
        this.isSubmitted = true;
        if (this.mailForm.invalid) {
            return;
        }
        const obj = {
            email: this.profile.email,
            message: this.mailForm.value.message,
        };
        this.sharedService.presentLoader('Please wait...');
        this.onBoardingService.contactToAdmin(obj).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.message) {
                this.sharedService.presentToast(res.message);
                this.navController.setDirection('back');
                this.router.navigate(['/support']);
            }
            this.sharedService.dismissLoader();
        }), (error) => {
            this.sharedService.dismissLoader();
        });
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/support']);
    }
};
EmailTheTeamPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] }
];
EmailTheTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-email-the-team',
        template: _raw_loader_email_the_team_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_the_team_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"]])
], EmailTheTeamPage);



/***/ }),

/***/ "nk8B":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/support/email-the-team/email-the-team.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"4\" sizeXl=\"6\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Email Us</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n        <p>\n          Hi There! We will personally reply to you as soon as possible. If you want to find a solution to an issue\n          immediately, check our\n          <span class=\"c-orange\" (click)=\"back()\" style=\"text-decoration: underline;\">FAQ</span>, you may find most\n          answers you need with just a few clicks.\n        </p>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"mailForm\" (ngSubmit)=\"submit()\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n          <ion-item>\n            <ion-input placeholder=\"Subject*\" formControlName=\"subject\"></ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"!f.subject.valid && (f.subject.dirty || isSubmitted)\">\n            <small>Subject is required.</small>\n          </ion-text>\n          <ion-item class=\"ion-margin-top\">\n            <ion-textarea rows=\"6\" placeholder=\"Description*\" formControlName=\"message\"></ion-textarea>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"!f.message.valid && (f.message.dirty || isSubmitted)\">\n            <small>Description is required.</small>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n          <ion-button\n            mode=\"ios\"\n            color=\"danger\"\n            fill=\"outline\"\n            shape=\"round\"\n            expand=\"block\"\n            type=\"submit\"\n            [disabled]=\"mailForm.invalid\"\n            >Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "qcT2":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/support/email-the-team/email-the-team.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: 1px solid #c6c6c6;\n  --border-color: #fff;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2VtYWlsLXRoZS10ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImVtYWlsLXRoZS10ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-support-email-the-team-email-the-team-module-es2015.js.map