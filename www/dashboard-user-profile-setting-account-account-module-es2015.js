(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-account-module"],{

/***/ "MOrc":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/account.module.ts ***!
  \**************************************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.page */ "T79y");








const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"],
    },
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], AccountPageModule);



/***/ }),

/***/ "PFID":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/account.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0px;\n}\nion-item ion-label {\n  font-size: 15px;\n  color: #707070;\n}\nion-item ion-label h3 {\n  color: #212121;\n  font-size: 18px;\n  margin: 10px 0px 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUdOIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgaDMge1xuICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW46IDEwcHggMHB4IDVweCAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "T79y":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/account.page.ts ***!
  \************************************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "Tk30");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "PFID");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









let AccountPage = class AccountPage {
    constructor(router, navController, alertController, sharedService, subscriptionService, onBoardingService) {
        this.router = router;
        this.navController = navController;
        this.alertController = alertController;
        this.sharedService = sharedService;
        this.subscriptionService = subscriptionService;
        this.onBoardingService = onBoardingService;
        this.sharedService.gaTrackView('Settings Account');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getUserProfile();
    }
    getUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const SUBSCRIPTION_LABELS = {
                Subscription: 'Subscription',
                SubscriptionExpired: 'Subscription Expired',
                Trial: 'Free Trial',
            };
            try {
                const { data: profile } = yield this.onBoardingService.getUserProfile().toPromise();
                console.log(profile);
                if (profile.currentPackage === 'Subscription' &&
                    profile.subscriptionType &&
                    (yield this.checkIsExpired(profile.subscriptionType))) {
                    profile.currentPackage = 'SubscriptionExpired';
                }
                this.profile = {
                    fullName: profile.fullName,
                    email: profile.email,
                    currentPackage: profile.currentPackage,
                    subscriptionLabel: SUBSCRIPTION_LABELS[profile.currentPackage],
                };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    checkIsExpired(subscriptionType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.subscriptionService
                    .getUserSubscription({ subscriptionType })
                    .toPromise();
                return res.message === 'Your subscription has been canceled.';
            }
            catch (error) {
                console.log(error);
            }
            return false;
        });
    }
    onSubscription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const path = this.profile.currentPackage === 'Subscription'
                ? '/subscription'
                : '/subscriptionplans';
            this.navController.setDirection('forward');
            this.router.navigate([path]);
        });
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/setting']);
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"]])
], AccountPage);



/***/ }),

/***/ "Tk30":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/account.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Account</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ng-container *ngIf=\"profile !== undefined; else noProfile\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label\n              >User name\n              <h3>{{ profile?.fullName | titlecase }}</h3>\n            </ion-label>\n            <ion-button\n              slot=\"end\"\n              color=\"danger\"\n              mode=\"ios\"\n              fill=\"clear\"\n              [routerLink]=\"['/edit-name']\"\n              routerLinkActive=\"router-link-active\"\n              >Edit</ion-button\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label\n              >Email\n              <h3>{{ profile?.email }}</h3>\n            </ion-label>\n            <ion-button\n              slot=\"end\"\n              color=\"danger\"\n              mode=\"ios\"\n              fill=\"clear\"\n              [routerLink]=\"['/edit-email']\"\n              routerLinkActive=\"router-link-active\"\n              >Edit</ion-button\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label>\n              <h3>Update password</h3>\n            </ion-label>\n            <ion-button\n              slot=\"end\"\n              color=\"danger\"\n              mode=\"ios\"\n              fill=\"clear\"\n              [routerLink]=\"['/edit-password']\"\n              routerLinkActive=\"router-link-active\"\n              >Manage</ion-button\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label\n              >Subscription Status\n              <h3>{{ profile?.subscriptionLabel }}</h3>\n            </ion-label>\n            <ion-button slot=\"end\" color=\"danger\" mode=\"ios\" fill=\"clear\" (click)=\"onSubscription()\">Manage</ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label>\n              <h3>Delete Account</h3>\n            </ion-label>\n            <ion-button slot=\"end\" color=\"danger\" mode='ios' fill=\"clear\" [routerLink]=\"['/delete-account']\"\n              routerLinkActive=\"router-link-active\">Manage</ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n    </ng-container>\n    <ng-template #noProfile>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\" *ngFor=\"let item of [0, 1, 2, 3, 4]\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n          <ion-item mode=\"ios\">\n            <ion-label>\n              <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n              </h3>\n            </ion-label>\n            <ion-button slot=\"end\" color=\"danger\" mode=\"ios\" fill=\"clear\">\n              <ion-skeleton-text animated style=\"width: 20%;\"></ion-skeleton-text>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-account-module-es2015.js.map