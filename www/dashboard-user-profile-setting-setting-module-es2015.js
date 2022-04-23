(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-setting-module"],{

/***/ "5TdI":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/setting.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Settings</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <ion-list>\n          <ion-item *ngFor=\"let settingPage of settingPages\" mode=\"md\" [routerLink]=\"[settingPage.url]\"\n            routerLinkActive=\"router-link-active\">\n            <ion-label tabindex=\"0\">{{ settingPage.name }}</ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item mode=\"md\" (click)=\"rateApp()\" class=\"pointer\">\n            <ion-label tabindex=\"0\">Rate this app</ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item mode=\"md\" (click)=\"termsOfUse()\" class=\"pointer\">\n            <ion-label tabindex=\"0\">Terms of Use</ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item mode=\"md\" (click)=\"privacyPolicy()\" class=\"pointer\" tabindex=\"0\">\n            <ion-label tabindex=\"0\">Privacy Policy</ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item class=\"pointer\">\n            <ion-label tabindex=\"0\" (click)=\"logout()\">Log Out</ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "M/Ir":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/setting.module.ts ***!
  \******************************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "tUM2");







const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"],
    },
];
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]],
        providers: [],
    })
], SettingPageModule);



/***/ }),

/***/ "gBgz":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/setting.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0px;\n  --inner-padding-top: 10px;\n  --inner-padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoic2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "tUM2":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/setting.page.ts ***!
  \****************************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting.page.html */ "5TdI");
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.page.scss */ "gBgz");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/auth.service */ "lGQG");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");








let SettingPage = class SettingPage {
    constructor(router, sharedService, authService, navController, platform, alertController) {
        this.router = router;
        this.sharedService = sharedService;
        this.authService = authService;
        this.navController = navController;
        this.platform = platform;
        this.alertController = alertController;
        this.settingPages = [
            {
                name: 'Account',
                url: '/account',
            },
            {
                name: 'Reminder',
                url: '/reminder',
            },
            {
                name: 'Language',
                url: '/language',
            },
            {
                name: 'Support',
                url: '/support',
            },
            {
                name: 'Share this app',
                url: '/share-app',
            },
            {
                name: 'App Information',
                url: '/app-info',
            },
        ];
        this.sharedService.gaTrackView('Settings Screen');
    }
    ngOnInit() { }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.removeLeftOffData();
            this.sharedService.gaTrackEvent('Logout', 'Settings Screen');
            this.sharedService.setNativeStorage('isOnBoarding', true);
            this.sharedService.setNativeStorage('isAdmin', false);
            this.sharedService.removeNativeStorage('token');
            this.authService.authSubject.next(false);
            this.navController.setDirection('root');
            this.router.navigate(['/login']);
        });
    }
    removeLeftOffData() {
        this.sharedService.removeNativeStorage('leftOfData');
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    rateApp() {
        this.sharedService.gaTrackEvent('Rate App', 'Settings Screen');
        if (this.platform.is('ios')) {
            this.presentAlert('App Store', 'https://apps.apple.com/in/app/speaky-peaky/id1486127431');
        }
        else if (this.platform.is('android')) {
            this.presentAlert('Play Store', 'https://play.google.com/store/apps/details?id=com.summer.startenglishnow');
        }
    }
    presentAlert(store, storeUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.open(storeUrl, '_blank');
        });
    }
    termsOfUse() {
        this.sharedService.gaTrackEvent('Terms', 'Settings Screen');
        window.open('https://www.newsite.speakypeaky.com/terms-and-conditions', '_blank');
    }
    privacyPolicy() {
        this.sharedService.gaTrackEvent('Privacy', 'Settings Screen');
        window.open('https://www.newsite.speakypeaky.com/privacypolicy', '_blank');
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/dashboard/profile']);
    }
};
SettingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-setting-module-es2015.js.map