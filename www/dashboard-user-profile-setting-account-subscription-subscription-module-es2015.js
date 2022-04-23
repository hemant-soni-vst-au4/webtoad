(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-subscription-subscription-module"],{

/***/ "9ZSn":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription/subscription.page.ts ***!
  \******************************************************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription.page.html */ "IPqC");
/* harmony import */ var _subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.page.scss */ "yxpZ");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "AytR");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");











const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let SubscriptionPage = class SubscriptionPage {
    constructor(router, platform, subscriptionService, sharedService, alertController, loadingController, onBoardingService, navController) {
        this.router = router;
        this.platform = platform;
        this.subscriptionService = subscriptionService;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.onBoardingService = onBoardingService;
        this.navController = navController;
        this.isProduct = false;
        // isMobile = false
        this.products = [
            'com.startenglishnow.yearly',
            'com.startenglishnow.6months',
            'com.startenglishnow.monthly',
        ];
        this.validatorURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].validatorURL;
        this.isWeb = false;
        // App.addListener('appStateChange', (state: AppState) => {
        //   // state.isActive contains the active state
        //   console.log('App state changed. Is active?', state.isActive)
        //   if (state.isActive) {
        //     this.getUserProfileAndSubscriptions(false)
        //   }
        // })
    }
    ngOnInit() {
        this.sharedService.getDeviceInfo().then((info) => {
            this.isWeb = !info.isApp;
        });
    }
    ionViewWillEnter() {
        this.getUserProfileAndSubscriptions();
    }
    getUserProfileAndSubscriptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // this.sharedService.presentLoader('Please wait...')
                const { data: profile } = yield this.onBoardingService.getUserProfile().toPromise();
                console.log({ profile });
                if (profile.currentPackage !== 'Subscription') {
                    yield this.sharedService.dismissLoader();
                    this.router.navigate(['/subscriptionplans']);
                    return;
                }
                this.profile = profile;
                yield this.getSubscriptionDetails(this.profile.subscriptionType || 'Android');
            }
            catch (error) {
                console.log(error);
            }
            finally {
                // this.sharedService.dismissLoader()
                console.log('finally');
                this.isProduct = true;
            }
            console.log('out of try');
        });
    }
    getSubscriptionDetails(subscriptionType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.subscriptionService
                    .getUserSubscription({ subscriptionType })
                    .toPromise();
                if (res.message === 'Your subscription has been canceled.') {
                    yield this.sharedService.dismissLoader();
                    this.router.navigate(['/subscriptionplans']);
                }
                else {
                    this.subscriptionDetails = res.data;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    turnOffStripeAutoRenewal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sharedService.presentLoader('Please wait...');
                const res = yield this.subscriptionService
                    .turnOffAutoRenewalForStripe(this.subscriptionDetails.subscriptionId)
                    .toPromise();
                this.sharedService.presentToast('Successfully canceled.');
                yield this.getSubscriptionDetails('Stripe');
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
    turnOffAutoRenewal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert!',
                message: 'Are you sure you want to turn off auto-renewal?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            if (this.profile.subscriptionType === 'Stripe') {
                                this.turnOffStripeAutoRenewal();
                            }
                            else if (this.profile.subscriptionType === 'iOS') {
                                window.open('itms-apps://apps.apple.com/account/subscriptions', '_blank');
                                // this.store.manageSubscriptions()
                            }
                            else if (this.profile.subscriptionType === 'Android') {
                                window.open('https://play.google.com/store/account/subscriptions?sku=' +
                                    this.subscriptionDetails.productId +
                                    '&package=' +
                                    'com.startenglishnow.speakypeaky');
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/account']);
    }
    home() {
        this.navController.setDirection('root');
        this.router.navigate(['/dashboard/lessons']);
    }
    gotoStripeManage() {
        this.navController.setDirection('forward');
        this.router.navigate(['/payment/manage']);
    }
};
SubscriptionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
];
SubscriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'app-subscription',
        template: _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
], SubscriptionPage);



/***/ }),

/***/ "IPqC":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription/subscription.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-progress-bar *ngIf=\"!isProduct\" type=\"indeterminate\"></ion-progress-bar>\n  <ng-template #loading>\n    <ion-grid class=\"ion-padding\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n              <h1 class=\"ion-no-margin\">Subscription Status</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n              <ion-text color=\"medium\">Type</ion-text>\n              <h3 class=\"mt-5\">\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n              </h3>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n              <ion-text color=\"medium\">Start Date</ion-text>\n              <h3 class=\"mt-5\">\n                <ion-skeleton-text animated style=\"width: 55%;\"></ion-skeleton-text>\n              </h3>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n              <ion-text color=\"medium\">\n                <ion-skeleton-text animated style=\"width: 30%;\"></ion-skeleton-text>\n              </ion-text>\n              <h3 class=\"mt-5\">\n                <ion-skeleton-text animated style=\"width: 55%;\"></ion-skeleton-text>\n              </h3>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n\n  <ion-grid *ngIf=\"isProduct; else loading\" class=\"ion-padding\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <h1 class=\"ion-no-margin\">Subscription Status</h1>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n            <ion-text color=\"medium\">Type</ion-text>\n            <h3 class=\"mt-5\" *ngIf=\"subscriptionDetails?.productType === 'yearly'\">\n              Annual\n            </h3>\n            <h3 class=\"mt-5\" *ngIf=\"subscriptionDetails?.productType === '6_months'\">\n              6 Months\n            </h3>\n            <h3 class=\"mt-5\" *ngIf=\"subscriptionDetails?.productType === 'monthly'\">\n              Monthly\n            </h3>\n            <h3 class=\"mt-5\" *ngIf=\"\n                profile.currentPackage === 'Subscription' &&\n                (profile.subscriptionType === undefined || profile.subscriptionType === null)\n              \">\n              Monthly\n            </h3>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n            <ion-text color=\"medium\">Start Date</ion-text>\n            <h3 class=\"mt-5\">\n              {{ subscriptionDetails?.userSubscriptionStartDate | date: 'longDate' }}\n            </h3>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n            <ion-text color=\"medium\" *ngIf=\"subscriptionDetails?.autoRenewal === true\">Subscription Renews On\n            </ion-text>\n            <ion-text color=\"medium\" *ngIf=\"subscriptionDetails?.autoRenewal === false\">Subscription Expires On\n            </ion-text>\n            <h3 class=\"mt-5\">\n              {{ subscriptionDetails?.userSubscriptionEndDate | date: 'longDate' }}\n            </h3>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"subscriptionDetails?.autoRenewal === true\"\n          class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n            <ion-text id=\"auto-renewal\" color=\"medium\" (click)=\"turnOffAutoRenewal()\">Turn off auto-renewal</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"isWeb && subscriptionDetails?.subscriptionType === 'Stripe'\"\n          class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" class=\"ion-align-self-center\">\n            <ion-text id=\"auto-renewal\" color=\"medium\" (click)=\"gotoStripeManage()\">Manage Stripe Cards</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "sHxE":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription/subscription.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription.page */ "9ZSn");









const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_8__["SubscriptionPage"],
    },
];
let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_8__["SubscriptionPage"]],
        providers: [_services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], SubscriptionPageModule);



/***/ }),

/***/ "yxpZ":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription/subscription.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subscription-card {\n  background-color: #d8d8d8;\n}\n\n.monthly ion-card-content {\n  padding: 30px 0px;\n}\n\n.subscription-card p,\n.subscription-title,\n.subscription-amount,\n.stripe-subscription-card {\n  color: #212121;\n}\n\n.subscription-title {\n  font-size: 21px;\n  font-weight: 300;\n}\n\n.subscription-amount {\n  font-size: 34px;\n}\n\n.subscription-amount span {\n  font-size: 18px;\n}\n\n.light-bg {\n  padding: 20px 0px;\n  background-color: #eeeeee;\n}\n\n.year {\n  border: 4px solid #e02020;\n}\n\n.half-year {\n  border: 1px solid #e02020;\n}\n\n.flag {\n  width: 75px;\n  height: 28px;\n  margin: 0 auto;\n  position: absolute;\n  padding: 8px 0px;\n  top: 15px;\n  right: 25px;\n  z-index: 999;\n  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.5);\n  background: #e02020;\n  color: #ffffff;\n  font-size: 16px;\n  text-align: center;\n}\n\n.flag:after {\n  right: 0;\n  border-right: 45px solid #e02020;\n}\n\n.flag:before {\n  left: 0;\n  border-left: 45px solid #e02020;\n}\n\n.flag:after,\n.flag:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -14px;\n  border-bottom: 15px solid transparent;\n}\n\n.productCard {\n  cursor: pointer;\n}\n\n#auto-renewal {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.stripe-subscription-card {\n  border-radius: 25px;\n  margin: 0px 15px;\n  height: 426px;\n}\n\n.stripe-subscription-card ion-card-content {\n  padding: 25px 16px;\n}\n\n.stripe-subscription-card ion-card-content ion-button {\n  margin-bottom: 20px;\n}\n\n.stripe-subscription-card .price-block {\n  border-bottom: 1px solid #7b7b7b;\n  min-height: 265px;\n}\n\n.stripe-subscription-title {\n  margin-bottom: 20px;\n}\n\n.stripe-subscription-amount,\n.stripe-subscription-title {\n  font-weight: 700;\n}\n\n.stripe-subscription-amount {\n  font-size: 34px;\n}\n\n.actual-price {\n  font-size: 20px;\n  margin-top: 5px;\n  font-weight: 700;\n  margin-bottom: 18px;\n}\n\n.sub-prices {\n  font-size: 18px;\n  text-decoration: line-through;\n  -webkit-text-decoration-color: red;\n          text-decoration-color: red;\n}\n\n.stripe-subscription-card.monthly .stripe-subscription-amount {\n  margin-bottom: 45px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFQTs7OztFQUlFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUZFO0VBQ0UsZUFBQTtBQUlKOztBQURBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLFFBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBO0VBQ0UsT0FBQTtFQUNBLCtCQUFBO0FBTUY7O0FBSkE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFOQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFTRjs7QUFSRTtFQUNFLGtCQUFBO0FBVUo7O0FBVEk7RUFDRSxtQkFBQTtBQVdOOztBQVJFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQVVKOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTs7RUFFRSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBYUY7O0FBVkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBYUoiLCJmaWxlIjoic3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpcHRpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG59XG4ubW9udGhseSB7XG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG59XG4uc3Vic2NyaXB0aW9uLWNhcmQgcCxcbi5zdWJzY3JpcHRpb24tdGl0bGUsXG4uc3Vic2NyaXB0aW9uLWFtb3VudCxcbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWNhcmQge1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi5zdWJzY3JpcHRpb24tdGl0bGUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3Vic2NyaXB0aW9uLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4ubGlnaHQtYmcge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnllYXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAjZTAyMDIwO1xufVxuLmhhbGYteWVhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMDIwMjA7XG59XG5cbi5mbGFnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMjVweDtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiAycHggMnB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6ICNlMDIwMjA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsYWc6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiA0NXB4IHNvbGlkICNlMDIwMjA7XG59XG4uZmxhZzpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBib3JkZXItbGVmdDogNDVweCBzb2xpZCAjZTAyMDIwO1xufVxuLmZsYWc6YWZ0ZXIsXG4uZmxhZzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IC0xNHB4O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3RDYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2F1dG8tcmVuZXdhbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBoZWlnaHQ6IDQyNnB4O1xuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNXB4IDE2cHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxuICAucHJpY2UtYmxvY2sge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2I3YjdiO1xuICAgIG1pbi1oZWlnaHQ6IDI2NXB4O1xuICB9XG59XG5cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWFtb3VudCxcbi5zdHJpcGUtc3Vic2NyaXB0aW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5hY3R1YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5zdWItcHJpY2VzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XG59XG4uc3RyaXBlLXN1YnNjcmlwdGlvbi1jYXJkLm1vbnRobHkge1xuICAuc3RyaXBlLXN1YnNjcmlwdGlvbi1hbW91bnQge1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-subscription-subscription-module-es2015.js.map