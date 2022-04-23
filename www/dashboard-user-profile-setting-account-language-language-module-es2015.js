(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-language-language-module"],{

/***/ "AVJD":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/language/language.page.ts ***!
  \**********************************************************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./language.page.html */ "V62d");
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.page.scss */ "Ymqz");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../global/global.service */ "Nrpk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









let LanguagePage = class LanguagePage {
    constructor(globalService, sharedService, alertController, onBoardingService, router, navController) {
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.onBoardingService = onBoardingService;
        this.router = router;
        this.navController = navController;
        this.subTitleLanguages = new Array();
        this.sharedService.gaTrackView('change Language Screen');
    }
    ionViewWillEnter() {
        this.getUserProfile();
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    ngOnInit() { }
    getUserProfile() {
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService.getUserProfile().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.data) {
                    this.profile = res.data;
                    this.getSubTitleLanguages();
                    if (this.profile.subTitleLanguage) {
                        this.getUserSubTitleLanguage(this.profile.subTitleLanguage);
                    }
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
    getUserSubTitleLanguage(subTitleLanguage) {
        try {
            this.onBoardingService.getUserSubTitleLanguage(subTitleLanguage).subscribe((details) => {
                this.selectedLanguage = details.data[0];
                this.subTitleLanguages.forEach((ele) => {
                    if (ele._id === this.selectedLanguage._id) {
                        ele.checked = true;
                    }
                    else {
                        ele.checked = false;
                    }
                });
            }, (error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getSubTitleLanguages() {
        try {
            this.onBoardingService.getSubTitleLanguages().subscribe((res) => {
                this.subTitleLanguages = res.data;
                this.subTitleLanguages.forEach((ele) => {
                    ele.checked = false;
                });
                this.sharedService.dismissLoader();
            }, (error) => {
                console.log(error);
                this.sharedService.dismissLoader();
            });
        }
        catch (error) {
            this.sharedService.dismissLoader();
            console.log(error);
        }
    }
    selectLanguage(language) {
        this.isLanguageSelected = true;
        this.selectedLanguage = language;
        this.sharedService.gaTrackEvent('ChangeLanguage', this.selectedLanguage);
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService
                .setUserSubTitleLanguage({
                subTitleLanguageId: this.selectedLanguage._id,
            })
                .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.sharedService.dismissLoader();
                const alert = yield this.alertController.create({
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }), (error) => {
                this.sharedService.dismissLoader();
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
            this.sharedService.dismissLoader();
        }
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/setting']);
    }
};
LanguagePage.ctorParameters = () => [
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], LanguagePage);



/***/ }),

/***/ "SUiO":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/language/language.module.ts ***!
  \************************************************************************************/
/*! exports provided: LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language.page */ "AVJD");








const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"],
    },
];
let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], LanguagePageModule);



/***/ }),

/***/ "V62d":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/language/language.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\" *ngIf=\"subTitleLanguages.length\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <h1 class=\"ion-no-margin\"><strong>Language for Subtitles</strong></h1>\n            <p class=\"ion-margin-bottom\">Choose your language for translation</p>\n          </ion-col>\n        </ion-row>\n        <ion-radio-group [value]=\"selectedLanguage?._id\">\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\" *ngFor=\"let language of subTitleLanguages\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n              <ion-card class=\"ion-no-margin\" mode=\"ios\" (click)=\"selectLanguage(language)\">\n                <ion-card-content>\n                  <ion-item lines=\"none\">\n                    <ion-label>{{ language.languageName }}</ion-label>\n                    <ion-radio color=\"danger\" mode=\"md\" slot=\"start\" [value]=\"language._id\"> </ion-radio>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Ymqz":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/language/language.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('on-boarding-language-bg.png');\n}\nion-content ion-card {\n  --background: var(--color-white);\n  margin-bottom: 8px;\n}\nion-content ion-card ion-card-content {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0FBQ0Y7QUFDRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtBQUVOIiwiZmlsZSI6Imxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb24tYm9hcmRpbmctbGFuZ3VhZ2UtYmcucG5nJyk7XG5cbiAgaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-language-language-module-es2015.js.map