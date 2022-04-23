(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-boarding-on-boarding-language-on-boarding-language-module"],{

/***/ "0Jwd":
/*!*******************************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding-language/on-boarding-language.page.ts ***!
  \*******************************************************************************/
/*! exports provided: OnBoardingLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingLanguagePage", function() { return OnBoardingLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_on_boarding_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./on-boarding-language.page.html */ "AVp6");
/* harmony import */ var _on_boarding_language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-boarding-language.page.scss */ "oy3K");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/shared.service */ "zuHl");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../global/global.service */ "Nrpk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");









let OnBoardingLanguagePage = class OnBoardingLanguagePage {
    constructor(globalService, sharedService, onBoardingService, platform, router, navController) {
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.onBoardingService = onBoardingService;
        this.platform = platform;
        this.router = router;
        this.navController = navController;
        this.subTitleLanguages = new Array();
        this.sharedService.gaTrackView('On-Boarding Language Selection Screen');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getSubTitleLanguages();
    }
    getSubTitleLanguages() {
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService.getSubTitleLanguages().subscribe((res) => {
                this.subTitleLanguages = res.data;
                this.sharedService.dismissLoader();
            }, (error) => {
                console.log(error);
                this.sharedService.dismissLoader();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    selectLanguage(language) {
        this.sharedService.gaTrackEvent('SelectedLanguage', language);
        this.isLanguageSelected = true;
        this.selectedLanguage = language;
    }
    nextQuestion() {
        try {
            this.sharedService.gaTrackEvent('LanguageNextQuestion', '{"Screen":"Select Language Screen" "selectin":"Next"}');
            this.onBoardingService
                .setUserSubTitleLanguage({
                subTitleLanguageId: this.selectedLanguage._id,
            })
                .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.navController.setDirection('forward');
                this.router.navigate(['/on-boarding-reminder']);
            }), (error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
OnBoardingLanguagePage.ctorParameters = () => [
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
OnBoardingLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-on-boarding-language',
        template: _raw_loader_on_boarding_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_boarding_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], OnBoardingLanguagePage);



/***/ }),

/***/ "AVp6":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding/on-boarding-language/on-boarding-language.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"h-100\">\n    <ion-row class=\"h-100 ion-align-items-center\" *ngIf=\"subTitleLanguages.length\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <h3 class=\"ion-text-center ion-margin-bottom\">\n              2 ) What is your native language?\n            </h3>\n            <p class=\"ion-text-center ion-margin-bottom\">\n              Select a language for translation\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-radio-group [(ngModel)]=\"selectedLanguage\" (ionChange)=\"selectLanguage(selectedLanguage)\">\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\" *ngFor=\"let language of subTitleLanguages\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n              <ion-card class=\"ion-no-margin\" mode=\"ios\">\n                <ion-card-content>\n                  <ion-item lines=\"none\">\n                    <ion-label>{{ language.languageName }}</ion-label>\n                    <ion-radio color=\"danger\" mode=\"md\" slot=\"start\" [value]=\"language\"></ion-radio>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\" *ngIf=\"isLanguageSelected === true\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" (click)=\"nextQuestion()\">\n              OKAY, NEXT QUESTION</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "WIsk":
/*!*********************************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding-language/on-boarding-language.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OnBoardingLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingLanguagePageModule", function() { return OnBoardingLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _on_boarding_language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-boarding-language.page */ "0Jwd");








const routes = [
    {
        path: '',
        component: _on_boarding_language_page__WEBPACK_IMPORTED_MODULE_7__["OnBoardingLanguagePage"],
    },
];
let OnBoardingLanguagePageModule = class OnBoardingLanguagePageModule {
};
OnBoardingLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_on_boarding_language_page__WEBPACK_IMPORTED_MODULE_7__["OnBoardingLanguagePage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], OnBoardingLanguagePageModule);



/***/ }),

/***/ "oy3K":
/*!*********************************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding-language/on-boarding-language.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('on-boarding-language-bg.png');\n}\nion-content ion-card {\n  --background: var(--color-white);\n  margin-bottom: 8px;\n}\nion-content ion-card ion-card-content {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uLWJvYXJkaW5nLWxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0FBQ0Y7QUFDRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtBQUVOIiwiZmlsZSI6Im9uLWJvYXJkaW5nLWxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb24tYm9hcmRpbmctbGFuZ3VhZ2UtYmcucG5nJyk7XG5cbiAgaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=on-boarding-on-boarding-language-on-boarding-language-module-es2015.js.map