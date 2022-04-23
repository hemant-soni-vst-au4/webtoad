(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module"],{

/***/ "HmKE":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/subscription-plans.page.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subscription-card {\n  background-color: #d8d8d8;\n}\n\n.monthly ion-card-content {\n  padding: 30px 0px;\n}\n\n.subscription-card p,\n.subscription-title,\n.subscription-amount,\n.stripe-subscription-card {\n  color: #212121;\n}\n\n.subscription-title {\n  font-size: 21px;\n  font-weight: 300;\n}\n\n.subscription-amount {\n  font-size: 34px;\n}\n\n.subscription-amount span {\n  font-size: 18px;\n}\n\n.light-bg {\n  padding: 20px 0px;\n  background-color: #eeeeee;\n}\n\n.year {\n  border: 4px solid #e02020;\n}\n\n.half-year {\n  border: 1px solid #e02020;\n}\n\n.flag {\n  width: 75px;\n  height: 28px;\n  margin: 0 auto;\n  position: absolute;\n  padding: 8px 0px;\n  top: 15px;\n  right: 25px;\n  z-index: 999;\n  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.5);\n  background: #e02020;\n  color: #ffffff;\n  font-size: 16px;\n  text-align: center;\n}\n\n.flag:after {\n  right: 0;\n  border-right: 45px solid #e02020;\n}\n\n.flag:before {\n  left: 0;\n  border-left: 45px solid #e02020;\n}\n\n.flag:after,\n.flag:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -14px;\n  border-bottom: 15px solid transparent;\n}\n\n.productCard {\n  cursor: pointer;\n}\n\n#auto-renewal {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.stripe-subscription-card {\n  border-radius: 25px;\n  margin: 0px 15px;\n  height: 426px;\n}\n\n.stripe-subscription-card ion-card-content {\n  padding: 25px 16px;\n}\n\n.stripe-subscription-card ion-card-content ion-button {\n  margin-bottom: 20px;\n}\n\n.stripe-subscription-card .price-block {\n  border-bottom: 1px solid #7b7b7b;\n  min-height: 265px;\n}\n\n.stripe-subscription-title {\n  margin-bottom: 20px;\n}\n\n.stripe-subscription-amount,\n.stripe-subscription-title {\n  font-weight: 700;\n}\n\n.stripe-subscription-amount {\n  font-size: 34px;\n}\n\n.actual-price {\n  font-size: 20px;\n  margin-top: 5px;\n  font-weight: 700;\n  margin-bottom: 18px;\n}\n\n.sub-prices {\n  font-size: 18px;\n  text-decoration: line-through;\n  -webkit-text-decoration-color: red;\n          text-decoration-color: red;\n}\n\n.stripe-subscription-card.monthly .stripe-subscription-amount {\n  margin-bottom: 45px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N1YnNjcmlwdGlvbi1wbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFQTs7OztFQUlFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUZFO0VBQ0UsZUFBQTtBQUlKOztBQURBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLFFBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBO0VBQ0UsT0FBQTtFQUNBLCtCQUFBO0FBTUY7O0FBSkE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFOQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFTRjs7QUFSRTtFQUNFLGtCQUFBO0FBVUo7O0FBVEk7RUFDRSxtQkFBQTtBQVdOOztBQVJFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQVVKOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTs7RUFFRSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBYUY7O0FBVkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBYUoiLCJmaWxlIjoic3Vic2NyaXB0aW9uLXBsYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpcHRpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG59XG4ubW9udGhseSB7XG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG59XG4uc3Vic2NyaXB0aW9uLWNhcmQgcCxcbi5zdWJzY3JpcHRpb24tdGl0bGUsXG4uc3Vic2NyaXB0aW9uLWFtb3VudCxcbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWNhcmQge1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi5zdWJzY3JpcHRpb24tdGl0bGUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3Vic2NyaXB0aW9uLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4ubGlnaHQtYmcge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnllYXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAjZTAyMDIwO1xufVxuLmhhbGYteWVhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMDIwMjA7XG59XG5cbi5mbGFnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMjVweDtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiAycHggMnB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6ICNlMDIwMjA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsYWc6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiA0NXB4IHNvbGlkICNlMDIwMjA7XG59XG4uZmxhZzpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBib3JkZXItbGVmdDogNDVweCBzb2xpZCAjZTAyMDIwO1xufVxuLmZsYWc6YWZ0ZXIsXG4uZmxhZzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IC0xNHB4O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3RDYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2F1dG8tcmVuZXdhbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBoZWlnaHQ6IDQyNnB4O1xuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNXB4IDE2cHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxuICAucHJpY2UtYmxvY2sge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2I3YjdiO1xuICAgIG1pbi1oZWlnaHQ6IDI2NXB4O1xuICB9XG59XG5cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWFtb3VudCxcbi5zdHJpcGUtc3Vic2NyaXB0aW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zdHJpcGUtc3Vic2NyaXB0aW9uLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5hY3R1YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5zdWItcHJpY2VzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XG59XG4uc3RyaXBlLXN1YnNjcmlwdGlvbi1jYXJkLm1vbnRobHkge1xuICAuc3RyaXBlLXN1YnNjcmlwdGlvbi1hbW91bnQge1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "PGXq":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/subscription-plans.page.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-progress-bar *ngIf=\"!isProductLoaded\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-grid *ngIf=\"isProductLoaded\" class=\"ion-padding\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"9\" class=\"ion-align-self-center\">\n            <h1 class=\"ion-no-margin\"><strong>Subscription Status</strong></h1>\n            <p>\n              <!-- You have not subscribed yet <br> -->\n              Unlock the journey to speak English fluently\n            </p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col>\n\n             <!-- <ion-row class=\"productCard ion-align-items-center ion-justify-content-center\"\n              (click)=\"checkoutIAP(productIds[0])\">\n              <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n                <div class=\"flag\">\n                  40% off\n                </div>\n                <ion-card class=\"ion-margin-top subscription-card light-bg year ion-no-margin\" mode=\"ios\">\n                  <ion-card-content>\n                    <h1 class=\"subscription-title ion-text-center\">\n                      Yearly ( Unlimited Lessons )\n                    </h1>\n                    <h1 class=\"subscription-amount ion-text-center\">\n                      {{ 71.8 | currency }} <span>({{ 5.99 | currency }} / month )</span>\n                    </h1> -->\n                    <!-- <p>{{products[0]?.state}}</p> -->\n                  <!-- </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row> --> \n\n            <ion-row class=\"productCard ion-align-items-center ion-justify-content-center\"\n              (click)=\"checkoutIAP(productIds[1])\">\n              <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n                <div class=\"flag\">\n                  20% off\n                </div>\n                <ion-card class=\"ion-margin-top subscription-card light-bg half-year ion-no-margin\" mode=\"ios\">\n                  <ion-card-content>\n                    <h1 class=\"subscription-title ion-text-center\">\n                      6 Months ( Unlimited Lessons )\n                    </h1>\n                    <h1 class=\"subscription-amount ion-text-center\">\n                      {{ 47.9 | currency }} <span>({{ 7.99 | currency }} / month )</span>\n                    </h1>\n                    <!-- <p>{{products[1]?.state}}</p> -->\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"productCard ion-align-items-center ion-justify-content-center\"\n              (click)=\"checkoutIAP(productIds[2])\">\n              <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n                <ion-card class=\"ion-margin-top subscription-card monthly ion-no-margin\" mode=\"ios\">\n                  <ion-card-content>\n                    <h1 class=\"subscription-title ion-text-center\">\n                      Monthly ( 30 Lessons )\n                    </h1>\n                    <h1 class=\"subscription-amount ion-text-center\">{{ 9.99 | currency }} / <span>month</span></h1>\n                    <!-- <p class=\"ion-text-center\"> * Unstudied number of lessons won’t be transferred to the next month. <br>\n                      * You can purchase extra lessons if you want to study more.\n                    </p> -->\n                    <p>\n                      <!-- {{products[2]?.state}} -->\n                    </p>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"6\" class=\"ion-align-self-center\">\n            <p class=\"ion-text-center\">\n              Subscription automatically renews unless auto-renew is turned off. Subscriptions may be managed by the\n              user and auto-renewal may be turned off by going to settings > account > subscription status.\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "ZarT":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/subscription-plans.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: SubscriptionPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPlansPageModule", function() { return SubscriptionPlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _subscription_plans_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription-plans.page */ "aFXt");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "s5RH");










const routes = [
    {
        path: '',
        component: _subscription_plans_page__WEBPACK_IMPORTED_MODULE_8__["SubscriptionPlansPage"],
    },
];
let SubscriptionPlansPageModule = class SubscriptionPlansPageModule {
};
SubscriptionPlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_subscription_plans_page__WEBPACK_IMPORTED_MODULE_8__["SubscriptionPlansPage"]],
        providers: [_ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppPurchase2"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], SubscriptionPlansPageModule);



/***/ }),

/***/ "aFXt":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/subscription-plans.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: SubscriptionPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPlansPage", function() { return SubscriptionPlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_plans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription-plans.page.html */ "PGXq");
/* harmony import */ var _subscription_plans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription-plans.page.scss */ "HmKE");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "s5RH");
/* harmony import */ var src_reactapp_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/reactapp/apollo-client */ "0GY7");
/* harmony import */ var src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/reactapp/types-and-hooks */ "35Ww");














const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const productTypes = {
    'com.startenglishnow.yearly': 'yearly',
    'com.startenglishnow.6months': '6_months',
    'com.startenglishnow.monthly': 'monthly',
};
let SubscriptionPlansPage = class SubscriptionPlansPage {
    constructor(router, platform, subscriptionService, store, sharedService, alertController, loadingController, onBoardingService, navController) {
        this.router = router;
        this.platform = platform;
        this.subscriptionService = subscriptionService;
        this.store = store;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.onBoardingService = onBoardingService;
        this.navController = navController;
        this.isProductLoaded = false;
        this.productIds = [
            'com.startenglishnow.yearly',
            'com.startenglishnow.6months',
            'com.startenglishnow.monthly',
        ];
        this.validatorURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].validatorURL;
        this.handlers = [];
        const productIds = this.productIds;
        // store.verbosity = store.DEBUG
        // store.verbosity = store.INFO
        // const list = productIds.filter((p) => !store.products.byId[p])
        // if (list.length === 0) {
        //   this.products = store.products
        //   this.isProductLoaded = true
        // } else {
        //   store.register(
        //     list.map((p) => ({
        //       id: p,
        //       alias: p,
        //       type: store.PAID_SUBSCRIPTION,
        //     })),
        //   )
        // }
        // store.error(this.errorCb.bind(this))
    }
    ionViewWillEnter() {
        console.log('enter');
        this.orderProduct = null;
        this.isProductLoaded = false;
        setTimeout(() => {
            this.initIapStore();
        }, 100);
        // this.setupIAP()
    }
    initIapStore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data: profile } = yield this.onBoardingService.getUserProfile().toPromise();
            if (profile) {
                if (profile.currentPackage === 'Subscription') {
                    // return this.navController.navigateRoot('/subscription')
                }
                this.profile = profile;
                const store = this.store;
                store.applicationUsername = this.profile._id;
                store.validator = this.validatorURL;
                //@ts-ignore
                const list = this.productIds.filter((p) => !store.get(p));
                console.log({ list });
                if (list.length === 0) {
                    this.products = store.products;
                    this.isProductLoaded = true;
                }
                else {
                    store.register(list.map((p) => ({
                        id: p,
                        alias: p,
                        type: store.PAID_SUBSCRIPTION,
                    })));
                }
                const onReady = (p) => this.onReady.bind(this)();
                const errorCb = (p) => this.errorCb.bind(this)(p);
                const registeredCb = (p) => this.registeredCb.bind(this)(p);
                const updatedCb = (p) => this.updatedCb.bind(this)(p);
                const expiredCb = (p) => this.expiredCb.bind(this)(p);
                const approvedCb = (p) => this.approvedCb.bind(this)(p);
                const verifiedCb = (p) => this.verifiedCb.bind(this)(p);
                const finishedCb = (p) => this.finishedCb.bind(this)(p);
                const ownedCb = (p) => this.ownedCb.bind(this)(p);
                this.handlers.push(onReady, errorCb, registeredCb, updatedCb, expiredCb, approvedCb, verifiedCb, finishedCb, ownedCb);
                store.ready(onReady);
                store.error(errorCb);
                store.when('subscription').registered(registeredCb);
                store.when('subscription').updated(updatedCb);
                store.when('subscription').expired(expiredCb);
                store.when('subscription').approved(approvedCb);
                store.when('subscription').verified(verifiedCb);
                store.when('subscription').finished(finishedCb);
                store.when('subscription').owned(ownedCb);
                // store.when('subscription').registered((...args) => console.log('registered'))
                // store.when('subscription').updated((...args) => console.log('updated'))
                // store.when('subscription').expired((...args) => console.log('expired'))
                // store.when('subscription').approved((product) => {
                //   console.log('approved', product.id)
                //   return product.finish()
                // })
                // store.when('subscription').verified((...args) => console.log('verified'))
                // store
                //   .when('subscription')
                //   .finished((product: IAPProduct) => console.log('finished', product.id))
                // store.when('subscription').owned((product: IAPProduct) => {
                //   console.log('owned', product.id, product.owned)
                // })
                // store.error((...args) => console.log('error', args))
                store.refresh();
                if (!this.isProductLoaded) {
                }
            }
        });
    }
    onReady() {
        console.log('ready', this.store, this);
        this.isProductLoaded = true;
    }
    ionViewWillLeave() {
        this.orderProduct = null;
        const store = this.store;
        console.log('leave');
        this.handlers.forEach((h) => store.off(h));
        this.handlers = [];
        // store.off(this.onReady)
        // store.off(this.errorCb)
        // store.off(this.registeredCb)
        // store.off(this.updatedCb)
        // store.off(this.expiredCb)
        // store.off(this.approvedCb)
        // store.off(this.verifiedCb)
        // store.off(this.finishedCb)
        // store.off(this.ownedCb)
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/account']);
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    alertNotVerified(profile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Speaky Peaky',
                message: "It seems like you haven't verified your account. <br> Please check your email for verification.",
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
                        text: 'Resend',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.verifyEmail(profile);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkoutIAP(productId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log('checkoutIAP', productId);
                const { data: profile } = yield this.onBoardingService.getUserProfile().toPromise();
                if (profile.status === 'NotVerified') {
                    yield this.alertNotVerified(profile);
                    return;
                }
                const store = this.store;
                this.orderProduct = store.get(productId);
                store
                    .order(productId, {
                    applicationUsername: profile._id,
                })
                    .error((err) => {
                    console.log({ err });
                    this.orderProduct = null;
                })
                    .then((product) => {
                    this.orderProduct = product;
                    console.log('then', product.id);
                });
                this.sharedService.presentLoader('Please wait...');
                console.log('ordered');
            }
            catch (err) {
                console.log('Error Ordering ' + err);
                this.sharedService.presentToast(err);
            }
        });
    }
    setupIAP() {
        const store = this.store;
        store.when('subscription').registered(this.registeredCb.bind(this));
        store.when('subscription').updated(this.updatedCb.bind(this));
        store.when('subscription').expired(this.expiredCb.bind(this));
        store.when('subscription').approved(this.approvedCb.bind(this));
        store.when('subscription').verified(this.verifiedCb.bind(this));
        store.when('subscription').finished(this.finishedCb.bind(this));
        store.when('subscription').owned(this.ownedCb.bind(this));
        if (!this.isProductLoaded) {
            store.refresh();
        }
    }
    registeredCb(product) {
        console.log('registered' + product.alias);
    }
    errorCb(error) {
        console.log({ error });
        this.sharedService.dismissLoader();
    }
    updatedCb(product) {
        var _a;
        const store = this.store;
        // if (this.isProductLoaded) {
        //   store.off(this.updatedCb)
        //   return
        // }
        // console.log('updated', product.id, product.valid)
        const productIds = this.productIds;
        // console.log('store.products', store.products)
        const products = productIds.map((p) => store.get(p));
        if (products.every((v) => v && v.valid)) {
            // console.log('update: registed all')
            if (((_a = this.products) === null || _a === void 0 ? void 0 : _a.length) >= 3) {
                products.forEach((p, i) => {
                    this.products[i] = p;
                });
            }
            else {
                this.products = products;
            }
            //@ts-ignore
            if (store.ready()) {
                // console.log('ready')
                this.isProductLoaded = true;
            }
        }
    }
    expiredCb(product) {
        console.log('expired', product.id);
        product.finish();
    }
    approvedCb(product) {
        var _a, _b;
        console.log('approved', (_a = this.orderProduct) === null || _a === void 0 ? void 0 : _a.id, product.id, product.owned);
        if (((_b = this.orderProduct) === null || _b === void 0 ? void 0 : _b.id) === product.id) {
            product.verify();
        }
        else {
            product.finish();
        }
        return;
        // return product.finish()
        if (product.owned) {
            product.finish();
        }
        else {
            product.verify();
        }
    }
    verifiedCb(product) {
        console.log('verified', product.id);
        this.setSubscription(product)
            .then((success) => {
            console.log({ success });
            if (success) {
                product.finish();
            }
        })
            .catch((err) => {
            this.sharedService.dismissLoader();
            console.log({ err });
        });
    }
    finishedCb(product) {
        console.log('finished', product.id, product.owned);
    }
    ownedCb(product) {
        var _a;
        console.log('owned', product.id, product.owned);
        if (((_a = this.orderProduct) === null || _a === void 0 ? void 0 : _a.id) === product.id && product.owned) {
            this.finishCheckout(product);
        }
        else {
            this.sharedService.dismissLoader();
        }
    }
    finishCheckout(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data: profile } = yield this.onBoardingService.getUserProfile(true).toPromise();
            yield src_reactapp_apollo_client__WEBPACK_IMPORTED_MODULE_12__["client"].query({ query: src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_13__["GetProfileDocument"], fetchPolicy: 'network-only' });
            yield this.sharedService.dismissLoader();
            if (profile.currentPackage === 'Subscription') {
                console.log(profile.currentPackage);
                this.sharedService.presentToast('Subscribed successfully. Enjoy learning English!');
                this.navController.setDirection('root');
                this.router.navigate(['/subscription']);
            }
            else {
                this.sharedService.presentToast('Something went wrong');
            }
        });
    }
    setSubscription(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                return this.setSubscriptionAndroid(product);
            }
            else if (this.platform.is('ios')) {
                return this.setSubscriptionIOS(product);
            }
        });
    }
    setSubscriptionAndroid(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(product);
            const transaction = product.transaction;
            // const response = JSON.stringify(product)
            // const parseResponse = JSON.parse(response)
            const receipt = JSON.parse(transaction.receipt);
            if (!receipt.autoRenewing) {
                throw new Error('no autoRenewing');
            }
            const productType = productTypes[product.id];
            const data = {
                orderId: receipt.orderId,
                packageName: receipt.packageName,
                productId: receipt.productId,
                purchaseToken: receipt.purchaseToken,
                type: 'Android',
                productType: productType,
            };
            const res = yield this.subscriptionService.setUserSubscription(data).toPromise();
            if (res.message.startsWith('Subscribed successfully.')) {
                return true;
            }
            else {
                throw new Error('server error');
            }
        });
    }
    setSubscriptionIOS(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!product.transaction.appStoreReceipt) {
                return;
            }
            const receipt = product.transaction;
            const productType = productTypes[product.id];
            const data = {
                orderId: receipt.transaction_id,
                packageName: 'com.summer.startenglishnow',
                productId: receipt.product_id,
                purchaseToken: receipt.appStoreReceipt,
                type: 'iOS',
                productType: productType,
            };
            const res = yield this.subscriptionService.setUserSubscription(data).toPromise();
            if (res.message.startsWith('Subscribed successfully.')) {
                return true;
            }
            else {
                throw new Error('server error');
            }
        });
    }
    verifyEmail(profile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sharedService.presentLoader('Please wait...');
                const res = yield this.onBoardingService.verifyEmail(profile.email).toPromise();
                this.sharedService.presentAlert(res.message);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
};
SubscriptionPlansPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"] },
    { type: _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppPurchase2"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
];
SubscriptionPlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'app-subscription',
        template: _raw_loader_subscription_plans_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_plans_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"],
        _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppPurchase2"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
], SubscriptionPlansPage);



/***/ }),

/***/ "s5RH":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/in-app-purchase-2/ngx/index.js ***!
  \*******************************************************************/
/*! exports provided: IAPError, InAppPurchase2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAPError", function() { return IAPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppPurchase2", function() { return InAppPurchase2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "a3Cf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());

var InAppPurchase2 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2.prototype.redeem = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "redeem", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "QUIET"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERROR"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "WARNING"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "INFO"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "DEBUG"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "verbosity"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "autoFinishTransactions"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "sandbox"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "disableHostedContent"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "CONSUMABLE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "NON_CONSUMABLE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_SETUP"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_LOAD"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_PURCHASE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_UNKNOWN"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_FINISH"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_COMMUNICATION"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_REFRESH"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_DOWNLOAD"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "REGISTERED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "INVALID"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "VALID"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "REQUESTED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "INITIATED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "APPROVED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "FINISHED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "OWNED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "DOWNLOADING"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "DOWNLOADED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "INVALID_PAYLOAD"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "CONNECTION_FAILED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "PURCHASE_EXPIRED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "PURCHASE_CONSUMED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "INTERNAL_ERROR"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "NEED_MORE_DATA"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "products"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "validator"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "applicationUsername"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "log"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2.pluginName = "InAppPurchase2";
    InAppPurchase2.plugin = "cordova-plugin-purchase";
    InAppPurchase2.pluginRef = "store";
    InAppPurchase2.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    InAppPurchase2.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    return InAppPurchase2;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O21CQUQzQzs7OztJQXNpQm9DLGtDQUFpQjs7OztJQW9MbkQsK0NBQXNCO0lBaUJ0Qiw0QkFBRyxhQUFDLFNBQWlCO0lBU3JCLDhCQUFLLGFBQUMsT0FBaUI7SUFPdkIsaUNBQVEsYUFBQyxPQUFnRDtJQVV6RCw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBWTVFLDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFTNUUsNEJBQUcsYUFBQyxRQUFrQjtJQTBCdEIsOEJBQUssYUFBQyxPQUE0QixFQUFFLGNBQW9CO0lBS3hELDhCQUFLLGFBQUMsUUFBa0I7SUEwQ3hCLGdDQUFPO0lBSVAsK0JBQU07SUFJTiw0Q0FBbUI7SUFJbkIsK0JBQU07MEJBdlVOLGlDQUFLOzs7Ozs7MEJBR0wsaUNBQUs7Ozs7OzswQkFHTCxtQ0FBTzs7Ozs7OzBCQUdQLGdDQUFJOzs7Ozs7MEJBR0osaUNBQUs7Ozs7OzswQkFNTCxxQ0FBUzs7Ozs7OzBCQU9ULGtEQUFzQjs7Ozs7OzBCQU10QixtQ0FBTzs7Ozs7OzBCQU9QLGdEQUFvQjs7Ozs7OzBCQUdwQiw2Q0FBaUI7Ozs7OzswQkFHakIsNkNBQWlCOzs7Ozs7MEJBR2pCLHFEQUF5Qjs7Ozs7OzBCQUd6QixzQ0FBVTs7Ozs7OzBCQUdWLDBDQUFjOzs7Ozs7MEJBR2QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLHdDQUFZOzs7Ozs7MEJBR1osNkNBQWlCOzs7Ozs7MEJBR2pCLDhDQUFrQjs7Ozs7OzBCQUdsQixpREFBcUI7Ozs7OzswQkFHckIsK0NBQW1COzs7Ozs7MEJBR25CLG1EQUF1Qjs7Ozs7OzBCQUd2Qix1Q0FBVzs7Ozs7OzBCQUdYLGdEQUFvQjs7Ozs7OzBCQUdwQixrREFBc0I7Ozs7OzswQkFHdEIsc0NBQVU7Ozs7OzswQkFHViw2Q0FBaUI7Ozs7OzswQkFHakIsMkRBQStCOzs7Ozs7MEJBRy9CLDZDQUFpQjs7Ozs7OzBCQUdqQixtREFBdUI7Ozs7OzswQkFHdkIsNENBQWdCOzs7Ozs7MEJBR2hCLHVDQUFXOzs7Ozs7MEJBR1gsK0NBQW1COzs7Ozs7MEJBR25CLHdDQUFZOzs7Ozs7MEJBR1osaUVBQXFDOzs7Ozs7MEJBR3JDLHNDQUFVOzs7Ozs7MEJBR1YsbUNBQU87Ozs7OzswQkFHUCxpQ0FBSzs7Ozs7OzBCQUdMLHFDQUFTOzs7Ozs7MEJBR1QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLG9DQUFROzs7Ozs7MEJBR1IsaUNBQUs7Ozs7OzswQkFHTCx1Q0FBVzs7Ozs7OzBCQUdYLHNDQUFVOzs7Ozs7MEJBS1YsMkNBQWU7Ozs7OzswQkFHZiw2Q0FBaUI7Ozs7OzswQkFHakIsNENBQWdCOzs7Ozs7MEJBR2hCLDZDQUFpQjs7Ozs7OzBCQUdqQiwwQ0FBYzs7Ozs7OzBCQUdkLDBDQUFjOzs7Ozs7MEJBR2Qsb0NBQVE7Ozs7OzswQkFHUixxQ0FBUzs7Ozs7OzBCQUdULCtDQUFtQjs7Ozs7OzBCQVFuQiwrQkFBRzs7Ozs7Ozs7Ozs7OztnQkExTEosVUFBVTs7eUJBcmlCWDtFQXNpQm9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0T3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIGFsaWFzPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIElBUFByb2R1Y3RzID0gSUFQUHJvZHVjdFtdICYge1xuICAvKipcbiAgICogR2V0IHByb2R1Y3QgYnkgSURcbiAgICovXG4gIGJ5SWQ6IHsgW2lkOiBzdHJpbmddOiBJQVBQcm9kdWN0IH07XG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBhbGlhc1xuICAgKi9cbiAgYnlBbGlhczogeyBbYWxpYXM6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgcHJvZHVjdHMgKGZvciB0ZXN0aW5nIG9ubHkpLlxuICAgKi9cbiAgcmVzZXQ6ICgpID0+IHt9O1xufTtcblxuZXhwb3J0IHR5cGUgSUFQUXVlcnlDYWxsYmFjayA9ICgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4gdm9pZCkgfCAoKGVycm9yOiBJQVBFcnJvcikgPT4gdm9pZCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdCB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgYWxpYXM/OiBzdHJpbmc7XG5cbiAgdHlwZTogc3RyaW5nO1xuXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgdGl0bGU6IHN0cmluZztcblxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIHByaWNlTWljcm9zOiBudW1iZXI7XG5cbiAgcHJpY2U6IHN0cmluZztcblxuICBjdXJyZW5jeTogc3RyaW5nO1xuXG4gIGxvYWRlZDogYm9vbGVhbjtcblxuICB2YWxpZDogYm9vbGVhbjtcblxuICBjYW5QdXJjaGFzZTogYm9vbGVhbjtcblxuICBvd25lZDogYm9vbGVhbjtcblxuICBkb3dubG9hZGluZz86IGJvb2xlYW47XG5cbiAgZG93bmxvYWRlZD86IGJvb2xlYW47XG5cbiAgbGFzdFJlbmV3YWxEYXRlPzogRGF0ZTtcblxuICBleHBpcnlEYXRlPzogRGF0ZTtcblxuICBpbnRyb1ByaWNlPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VNaWNyb3M/OiBudW1iZXI7XG5cbiAgaW50cm9QcmljZU51bWJlck9mUGVyaW9kcz86IG51bWJlcjtcblxuICBpbnRyb1ByaWNlU3Vic2NyaXB0aW9uUGVyaW9kPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VQYXltZW50TW9kZT86IHN0cmluZztcblxuICBpbmVsaWdpYmxlRm9ySW50cm9QcmljZT86IGJvb2xlYW47XG5cbiAgYmlsbGluZ1BlcmlvZD86IG51bWJlcjtcblxuICBiaWxsaW5nUGVyaW9kVW5pdD86IHN0cmluZztcblxuICB0cmlhbFBlcmlvZD86IG51bWJlcjtcblxuICB0cmlhbFBlcmlvZFVuaXQ/OiBzdHJpbmc7XG5cbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG5cbiAgdHJhbnNhY3Rpb24/OiBhbnk7XG5cbiAgLyoqXG4gICAqIENhbGwgYHByb2R1Y3QuZmluaXNoKClgIHRvIGNvbmZpcm0gdG8gdGhlIHN0b3JlIHRoYXQgYW4gYXBwcm92ZWQgb3JkZXIgaGFzIGJlZW4gZGVsaXZlcmVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBwcm9kdWN0IHN0YXRlIGZyb20gYEFQUFJPVkVEYCB0byBgRklOSVNIRURgIChzZWUgcHJvZHVjdCBsaWZlLWN5Y2xlKS5cbiAgICpcbiAgICogQXMgbG9uZyBhcyB5b3Uga2VlcCB0aGUgcHJvZHVjdCBpbiBzdGF0ZSBgQVBQUk9WRURgOlxuICAgKlxuICAgKiAgLSB0aGUgbW9uZXkgbWF5IG5vdCBiZSBpbiB5b3VyIGFjY291bnQgKGkuZS4gdXNlciBpc24ndCBjaGFyZ2VkKVxuICAgKiAgLSB5b3Ugd2lsbCByZWNlaXZlIHRoZSBgYXBwcm92ZWRgIGV2ZW50IGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gc3RhcnRzLFxuICAgKiAgICB3aGVyZSB5b3Ugc2hvdWxkIHRyeSBhZ2FpbiB0byBmaW5pc2ggdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqICoqZXhhbXBsZSB1c2UqKlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIHN5bmNocm9ub3VzXG4gICAqICAgICBhcHAudW5sb2NrRmVhdHVyZSgpO1xuICAgKiAgICAgcHJvZHVjdC5maW5pc2goKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIGFzeW5jaHJvbm91c1xuICAgKiAgICAgYXBwLmRvd25sb2FkRmVhdHVyZShmdW5jdGlvbigpIHtcbiAgICogICAgICAgICBwcm9kdWN0LmZpbmlzaCgpO1xuICAgKiAgICAgfSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGZpbmlzaCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBwdXJjaGFzZSB2YWxpZGF0aW9uIGFzIGRlZmluZWQgYnkgdGhlIGBzdG9yZS52YWxpZGF0b3JgIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogKipyZXR1cm4gdmFsdWUqKlxuICAgKlxuICAgKiBBIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gICAqXG4gICAqICAtIGBkb25lKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxuICAgKiAgICAtIGNhbGxlZCB3aGV0aGVyIHZlcmlmaWNhdGlvbiBmYWlsZWQgb3Igc3VjY2VlZGVkLlxuICAgKiAgLSBgZXhwaXJlZChmdW5jdGlvbihwcm9kdWN0KXt9KWBcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGV4cGlyZWQuXG4gICAqICAtIGBzdWNjZXNzKGZ1bmN0aW9uKHByb2R1Y3QsIHB1cmNoYXNlRGF0YSl7fSlgXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBpcyB2YWxpZCBhbmQgdmVyaWZpZWQuXG4gICAqICAgIC0gYHB1cmNoYXNlRGF0YWAgaXMgdGhlIGRldmljZSBkZXBlbmRlbnQgdHJhbnNhY3Rpb24gZGV0YWlsc1xuICAgKiAgICAgIHJldHVybmVkIGJ5IHRoZSB2YWxpZGF0b3IsIHdoaWNoIHlvdSBjYW4gbW9zdCBwcm9iYWJseSBpZ25vcmUuXG4gICAqICAtIGBlcnJvcihmdW5jdGlvbihlcnIpe30pYFxuICAgKiAgICAtIHZhbGlkYXRpb24gZmFpbGVkLCBlaXRoZXIgYmVjYXVzZSBvZiBleHBpcnkgb3IgY29tbXVuaWNhdGlvblxuICAgKiAgICAgIGZhaWx1cmUuXG4gICAqICAgIC0gYGVycmAgaXMgYSBzdG9yZS5FcnJvciBvYmplY3QsIHdpdGggYSBjb2RlIGV4cGVjdGVkIHRvIGJlXG4gICAqICAgICAgYHN0b3JlLkVSUl9QQVlNRU5UX0VYUElSRURgIG9yIGBzdG9yZS5FUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRGAuXG4gICAqL1xuICB2ZXJpZnkoKTogYW55O1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgc3RhdGVDaGFuZ2VkKCk6IHZvaWQ7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcblxuICBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgb2ZmKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgdHJpZ2dlcihhY3Rpb246IHN0cmluZywgYXJnczogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0RXZlbnRzIHtcbiAgLyoqIENhbGxlZCB3aGVuIHByb2R1Y3QgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuICovXG4gIGxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYW55IGNoYW5nZSBvY2N1cmVkIHRvIGEgcHJvZHVjdC4gKi9cbiAgdXBkYXRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLiBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIElBUEVycm9yIG9iamVjdC4gKi9cbiAgZXJyb3I6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC4gKi9cbiAgYXBwcm92ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuICovXG4gIG93bmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLiAqL1xuICBjYW5jZWxsZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLiAqL1xuICByZWZ1bmRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gcHJvZHVjdCBoYXMganVzdCBiZWVuIHJlZ2lzdGVyZWQuICovXG4gIHJlZ2lzdGVyZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGRldGFpbHMgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQuICovXG4gIHZhbGlkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHJvZHVjdCBjYW5ub3QgYmUgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xuICBpbnZhbGlkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBoYXMganVzdCBiZWVuIHJlcXVlc3RlZC4gKi9cbiAgcmVxdWVzdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgYmVlbiBpbml0aWF0ZWQuICovXG4gIGluaXRpYXRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHB1cmNoYXNlIHByb2Nlc3MgaGFzIGNvbXBsZXRlZC4gKi9cbiAgZmluaXNoZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHJlY2VpcHQgdmFsaWRhdGlvbiBzdWNjZXNzZnVsLiAqL1xuICB2ZXJpZmllZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkLiAqL1xuICB1bnZlcmlmaWVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB2YWxpZGF0aW9uIGZpbmQgYSBzdWJzY3JpcHRpb24gdG8gYmUgZXhwaXJlZC4gKi9cbiAgZXhwaXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBpcyBzdGFydGVkLiAqL1xuICBkb3dubG9hZGluZzogKHByb2R1Y3Q6IElBUFByb2R1Y3QsIHByb2dyZXNzOiBhbnksIHRpbWVfcmVtYWluaW5nOiBhbnkpID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkLiAqL1xuICBkb3dubG9hZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSUFQRXJyb3Ige1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgUHVyY2hhc2UgMlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbi1BcHAgUHVyY2hhc2Ugb24gaU9TLCBBbmRyb2lkLCBXaW5kb3dzLCBtYWNPUyBhbmQgWEJveC5cbiAqXG4gKiAjIyBGZWF0dXJlc1xuICpcbiAqIHwgIHwgaW9zIHwgYW5kcm9pZCB8IHdpbi04IHwgd2luLTEwL3V3cCB8IG1hYyB8XG4gKiB8LS18LS18LS18LS18LS18LS18XG4gKiB8IGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgbm9uIGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgc3Vic2NyaXB0aW9ucyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XG4gKiB8IHJlc3RvcmUgcHVyY2hhc2VzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgcmVjZWlwdCB2YWxpZGF0aW9ucyB8IOKchSB8IOKchSB8ICB8IOKchSB8IOKchSB8XG4gKiB8IGRvd25sb2FkYWJsZSBjb250ZW50IHwg4pyFIHwgICB8ICAgfCAgIHwg4pyFIHxcbiAqIHwgaW50cm9kdWN0b3J5IHByaWNlcyB8IOKchSB8IOKchSB8ICAgfCDinIUgfCDinIUgfFxuICpcbiAqIFN1cHBvcnRzOlxuICpcbiAqICAtICoqaU9TKiogdmVyc2lvbiA3LjAgb3IgaGlnaGVyLlxuICogIC0gKipBbmRyb2lkKiogdmVyc2lvbiAyLjIgKEFQSSBsZXZlbCA4KSBvciBoaWdoZXJcbiAqICAgIC0gd2l0aCBHb29nbGUgUGxheSBjbGllbnQgdmVyc2lvbiAzLjkuMTYgb3IgaGlnaGVyXG4gKiAgLSAqKldpbmRvd3MqKiBTdG9yZS9QaG9uZSA4LjEgb3IgaGlnaGVyXG4gKiAgLSAqKldpbmRvd3MgMTAgTW9iaWxlKipcbiAqICAtICoqbWFjT1MqKiB2ZXJzaW9uIDEwXG4gKiAgLSAqKlhib3ggT25lKipcbiAqICAgIC0gKGFuZCBhbnkgcGxhdGZvcm0gc3VwcG9ydGluZyBNaWNyb3NvZnQncyBVV1ApXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbkFwcFB1cmNoYXNlMiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLXB1cmNoYXNlLTIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHN0b3JlOiBJbkFwcFB1cmNoYXNlMikge1xuICogICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XG4gKiAgICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcbiAqICAgICAgdHlwZTogdGhpcy5zdG9yZS5OT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OLFxuICogICAgfSk7XG4gKiAgICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpXG4gKiAgICAgIC5hcHByb3ZlZChwID0+IHAudmVyaWZ5KCkpXG4gKiAgICAgIC52ZXJpZmllZChwID0+IHAuZmluaXNoKCkpO1xuICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XG4gKiAgIH0pO1xuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xuICpcbiAqIGBgYFxuICpcbiAqICMjIEZ1bGwgZXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAvLyBBZnRlciBwbGF0Zm9ybSByZWFkeVxuICogIHRoaXMuc3RvcmUudmVyYm9zaXR5ID0gdGhpcy5zdG9yZS5ERUJVRztcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcbiAqICAgIHR5cGU6IHRoaXMuc3RvcmUuUEFJRF9TVUJTQ1JJUFRJT04sXG4gKiAgfSk7XG4gKlxuICogIC8vIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgc3BlY2lmaWMgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikucmVnaXN0ZXJlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkOiAnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xuICogIH0pO1xuICpcbiAqICAvLyBVcGRhdGVkXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS51cGRhdGVkKCAocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAgY29uc29sZS5sb2coJ1VwZGF0ZWQnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xuICogIH0pO1xuICpcbiAqICAvLyBVc2VyIGNsb3NlZCB0aGUgbmF0aXZlIHB1cmNoYXNlIGRpYWxvZ1xuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikuY2FuY2VsbGVkKCAocHJvZHVjdCkgPT4ge1xuICogICAgICBjb25zb2xlLmVycm9yKCdQdXJjaGFzZSB3YXMgQ2FuY2VsbGVkJyk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFRyYWNrIGFsbCBzdG9yZSBlcnJvcnNcbiAqICB0aGlzLnN0b3JlLmVycm9yKCAoZXJyKSA9PiB7XG4gKiAgICBjb25zb2xlLmVycm9yKCdTdG9yZSBFcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFJ1biBzb21lIGNvZGUgb25seSB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeSB0byBiZSB1c2VkXG4gKiAgdGhpcy5zdG9yZS5yZWFkeSgoKSA9PiAge1xuICogICAgY29uc29sZS5sb2coJ1N0b3JlIGlzIHJlYWR5Jyk7XG4gKiAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLnByb2R1Y3RzKSk7XG4gKiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLmdldChcIm15X3Byb2R1Y3RfaWRcIikpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gUmVmcmVzaCB0aGUgc3RhdHVzIG9mIGluLWFwcCBwcm9kdWN0c1xuICogIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICpcbiAqICAuLi5cbiAqXG4gKiAgLy8gVG8gbWFrZSBhIHB1cmNoYXNlXG4gKiAgdGhpcy5zdG9yZS5vcmRlcihcIm15X3Byb2R1Y3RfaWRcIik7XG4gKlxuICogYGBgXG4gKlxuICogIyMgUGhpbG9zb3BoeVxuICpcbiAqIFRoZSBBUEkgaXMgbW9zdGx5IGV2ZW50cyBiYXNlZC4gQXMgYSB1c2VyIG9mIHRoaXMgcGx1Z2luLFxuICogeW91IHdpbGwgaGF2ZSB0byByZWdpc3RlciBsaXN0ZW5lcnMgdG8gY2hhbmdlcyBoYXBwZW5pbmcgdG8gdGhlIHByb2R1Y3RzXG4gKiB5b3UgcmVnaXN0ZXIuXG4gKlxuICogVGhlIGNvcmUgb2YgdGhlIGxpc3RlbmluZyBtZWNoYW5pc20gaXMgdGhlIGB3aGVuKClgIG1ldGhvZC4gSXQgYWxsb3dzIHlvdSB0b1xuICogYmUgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBvbmUgb3IgYSBzZXQgb2YgcHJvZHVjdHMgdXNpbmcgYSBxdWVyeSBtZWNoYW5pc206XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS51cGRhdGVkKHJlZnJlc2hTY3JlZW4pOyAvLyBtYXRjaCBhbnkgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcImZ1bGxfdmVyc2lvblwiKS5vd25lZCh1bmxvY2tBcHApOyAvLyBtYXRjaCBhIHNwZWNpZmljIHByb2R1Y3RcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJzdWJzY3JpcHRpb25cIikuYXBwcm92ZWQoc2VydmVyQ2hlY2spOyAvLyBtYXRjaCBhbGwgc3Vic2NyaXB0aW9uc1xuICogIHRoaXMuc3RvcmUud2hlbihcImRvd25sb2FkYWJsZSBjb250ZW50XCIpLmRvd25sb2FkZWQoc2hvd0NvbnRlbnQpO1xuICogYGBgXG4gKlxuICogVGhlIGB1cGRhdGVkYCBldmVudCBpcyBmaXJlZCB3aGVuZXZlciBvbmUgb2YgdGhlIGZpZWxkcyBvZiBhIHByb2R1Y3QgaXNcbiAqIGNoYW5nZWQgKGl0cyBgb3duZWRgIHN0YXR1cyBmb3IgaW5zdGFuY2UpLlxuICpcbiAqIFRoaXMgZXZlbnQgcHJvdmlkZXMgYSBnZW5lcmljIHdheSB0byB0cmFjayB0aGUgc3RhdHVzZXMgb2YgeW91ciBwdXJjaGFzZXMsXG4gKiB0byB1bmxvY2sgZmVhdHVyZXMgd2hlbiBuZWVkZWQgYW5kIHRvIHJlZnJlc2ggeW91ciB2aWV3cyBhY2NvcmRpbmdseS5cbiAqXG4gKiAjIyBSZWdpc3RlcmluZyBwcm9kdWN0c1xuICpcbiAqIFRoZSBzdG9yZSBuZWVkcyB0byBrbm93IHRoZSB0eXBlIGFuZCBpZGVudGlmaWVycyBvZiB5b3VyIHByb2R1Y3RzIGJlZm9yZSB5b3VcbiAqIGNhbiB1c2UgdGhlbSBpbiB5b3VyIGNvZGUuXG4gKlxuICogVXNlIGBzdG9yZS5yZWdpc3RlcigpYCB0byBkZWZpbmUgdGhlbSBiZWZvcmUgeW91ciBmaXJzdCBjYWxsIHRvIGBzdG9yZS5yZWZyZXNoKClgLlxuICpcbiAqIE9uY2UgcmVnaXN0ZXJlZCwgeW91IGNhbiB1c2UgYHN0b3JlLmdldCgpYCB0byByZXRyaWV2ZSBhbiBgSUFQUHJvZHVjdGAgb2JqZWN0LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgIGlkOiBcIm15X2NvbnN1bWFibGUxXCIsXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLkNPTlNVTUFCTEVcbiAqICB9KTtcbiAqICAuLi5cbiAqICBjb25zdCBwID0gdGhpcy5zdG9yZS5nZXQoXCJteV9jb25zdW1hYmxlMVwiKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBwcm9kdWN0IGBpZGAgYW5kIGB0eXBlYCBoYXZlIHRvIG1hdGNoIHByb2R1Y3RzIGRlZmluZWQgaW4geW91clxuICogQXBwbGUsIEdvb2dsZSBvciBNaWNyb3NvZnQgZGV2ZWxvcGVyIGNvbnNvbGVzLlxuICpcbiAqIExlYXJuIG1vcmUgYWJvdXQgaXQgW2Zyb20gdGhlIHdpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpLlxuICpcbiAqICMjIERpc3BsYXlpbmcgcHJvZHVjdHNcbiAqXG4gKiBSaWdodCBhZnRlciB5b3UgcmVnaXN0ZXJlZCB5b3VyIHByb2R1Y3RzLCBub3RoaW5nIG11Y2ggaXMga25vd24gYWJvdXQgdGhlbVxuICogZXhjZXB0IHRoZWlyIGBpZGAsIGB0eXBlYCBhbmQgYW4gb3B0aW9uYWwgYGFsaWFzYC5cbiAqXG4gKiBXaGVuIHlvdSBwZXJmb3JtIHRoZSBpbml0aWFsIGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAsIHRoZSBwbGF0Zm9ybXMnIHNlcnZlciB3aWxsXG4gKiBiZSBjb250YWN0ZWQgdG8gbG9hZCBpbmZvcm1hdGlvbnMgYWJvdXQgdGhlIHJlZ2lzdGVyZWQgcHJvZHVjdHM6IGh1bWFuXG4gKiByZWFkYWJsZSBgdGl0bGVgIGFuZCBgZGVzY3JpcHRpb25gLCBgcHJpY2VgLCBldGMuXG4gKlxuICogVGhpcyBpc24ndCBhbiBvcHRpb25hbCBzdGVwLCBzdG9yZSBvd25lcnMgcmVxdWlyZSB5b3VcbiAqIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9kdWN0IGV4YWN0bHkgYXMgcmV0cmlldmVkIGZyb20gdGhlaXIgc2VydmVyOiBub1xuICogaGFyZC1jb2Rpbmcgb2YgcHJpY2UgYW5kIHRpdGxlIGFsbG93ZWQhIFRoaXMgaXMgYWxzbyBjb252ZW5pZW50IGZvciB5b3VcbiAqIGFzIHlvdSBjYW4gY2hhbmdlIHRoZSBwcmljZSBvZiB5b3VyIGl0ZW1zIGtub3dpbmcgdGhhdCBpdCdsbCBiZSByZWZsZWN0ZWQgaW5zdGFudGx5XG4gKiBvbiB5b3VyIGNsaWVudHMnIGRldmljZXMuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbmZvcm1hdGlvbiBtYXkgbm90IGJlIGF2YWlsYWJsZSB3aGVuIHRoZSBmaXJzdCB2aWV3IHRoYXQgbmVlZHNcbiAqIHRoZW0gYXBwZWFycyBvbiBzY3JlZW4uIEZvciB5b3UsIHRoZSBiZXN0IG9wdGlvbiBpcyB0byBoYXZlIHlvdXIgdmlldyBtb25pdG9yXG4gKiBjaGFuZ2VzIG1hZGUgdG8gdGhlIHByb2R1Y3QuXG4gKlxuICogIyMgUHVyY2hhc2luZ1xuICpcbiAqICMjIyMgaW5pdGlhdGUgYSBwdXJjaGFzZVxuICpcbiAqIFB1cmNoYXNlcyBhcmUgaW5pdGlhdGVkIHVzaW5nIHRoZSBgc3RvcmUub3JkZXIoXCJzb21lX3Byb2R1Y3RfaWRcIilgIG1ldGhvZC5cbiAqXG4gKiBUaGUgc3RvcmUgd2lsbCBtYW5hZ2UgdGhlIGludGVybmFsIHB1cmNoYXNlIGZsb3cuIEl0J2xsIGVuZDpcbiAqXG4gKiAgLSB3aXRoIGFuIGBhcHByb3ZlZGAgZXZlbnQuIFRoZSBwcm9kdWN0IGVudGVycyB0aGUgYEFQUFJPVkVEYCBzdGF0ZS5cbiAqICAtIHdpdGggYSBgY2FuY2VsbGVkYCBldmVudC4gVGhlIHByb2R1Y3QgZ2V0cyBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxuICogIC0gd2l0aCBhbiBgZXJyb3JgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXG4gKlxuICogU2VlIHRoZSBwcm9kdWN0IGxpZmUtY3ljbGUgc2VjdGlvbiBmb3IgZGV0YWlscyBhYm91dCBwcm9kdWN0IHN0YXRlcy5cbiAqXG4gKiAjIyMjIGZpbmlzaCBhIHB1cmNoYXNlXG4gKlxuICogT25jZSB0aGUgdHJhbnNhY3Rpb24gaXMgYXBwcm92ZWQsIHRoZSBwcm9kdWN0IHN0aWxsIGlzbid0IG93bmVkOiB0aGUgc3RvcmUgbmVlZHNcbiAqIGNvbmZpcm1hdGlvbiB0aGF0IHRoZSBwdXJjaGFzZSB3YXMgZGVsaXZlcmVkIGJlZm9yZSBjbG9zaW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBUbyBjb25maXJtIGRlbGl2ZXJ5LCB5b3UnbGwgdXNlIHRoZSBgcHJvZHVjdC5maW5pc2goKWAgbWV0aG9kLlxuICpcbiAqICMjIyMgZXhhbXBsZSB1c2FnZVxuICpcbiAqIER1cmluZyBpbml0aWFsaXphdGlvbjpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRoaXMuc3RvcmUud2hlbihcImV4dHJhX2NoYXB0ZXJcIikuYXBwcm92ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgLy8gZG93bmxvYWQgdGhlIGZlYXR1cmVcbiAqICAgYXBwLmRvd25sb2FkRXh0cmFDaGFwdGVyKClcbiAqICAgLnRoZW4oKCkgPT4gcHJvZHVjdC5maW5pc2goKSk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIHB1cmNoYXNlIGJ1dHRvbiBpcyBjbGlja2VkOlxuICogYGBgdHlwZXNjcmlwdFxuICogdGhpcy5zdG9yZS5vcmRlcihcImV4dHJhX2NoYXB0ZXJcIik7XG4gKiBgYGBcbiAqXG4gKiAjIyMjIHVuLWZpbmlzaGVkIHB1cmNoYXNlc1xuICpcbiAqIElmIHlvdXIgYXBwIHdhc24ndCBhYmxlIHRvIGRlbGl2ZXIgdGhlIGNvbnRlbnQsIGBwcm9kdWN0LmZpbmlzaCgpYCB3b24ndCBiZSBjYWxsZWQuXG4gKlxuICogRG9uJ3Qgd29ycnk6IHRoZSBgYXBwcm92ZWRgIGV2ZW50IHdpbGwgYmUgcmUtdHJpZ2dlcmVkIHRoZSBuZXh0IHRpbWUgeW91XG4gKiBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLCB3aGljaCBjYW4gdmVyeSB3ZWxsIGJlIHRoZSBuZXh0IHRpbWVcbiAqIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMuIFBlbmRpbmcgdHJhbnNhY3Rpb25zIGFyZSBwZXJzaXN0YW50LlxuICpcbiAqICMjIyMgc2ltcGxlIGNhc2VcbiAqXG4gKiBJbiB0aGUgbW9zdCBzaW1wbGUgY2FzZSwgd2hlcmU6XG4gKlxuICogIC0gZGVsaXZlcnkgb2YgcHVyY2hhc2VzIGlzIG9ubHkgbG9jYWwgO1xuICogIC0geW91IGRvbid0IHdhbnQgKG9yIG5lZWQpIHRvIGltcGxlbWVudCByZWNlaXB0IHZhbGlkYXRpb24gO1xuICpcbiAqIFlvdSBtYXkganVzdCB3YW50IHRvIGZpbmlzaCBhbGwgcHVyY2hhc2VzIGF1dG9tYXRpY2FsbHkuIFlvdSBjYW4gZG8gaXQgdGhpcyB3YXk6XG4gKiBgYGBqc1xuICogdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XG4gKiBgYGBcbiAqXG4gKiBOT1RFOiB0aGUgXCJwcm9kdWN0XCIgcXVlcnkgd2lsbCBtYXRjaCBhbnkgcHVyY2hhc2VzIChzZWUgXCJxdWVyaWVzXCIgdG8gbGVhcm4gbW9yZSBkZXRhaWxzIGFib3V0IHF1ZXJpZXMpLlxuICpcbiAqICMjIFJlY2VpcHQgdmFsaWRhdGlvblxuICpcbiAqIFRvIGdldCB0aGUgbW9zdCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHB1cmNoYXNlcyAoaW4gY2FzZSBhIHB1cmNoYXNlIGhhdmUgYmVlbiBjYW5jZWxlZCwgb3IgYSBzdWJzY3JpcHRpb24gcmVuZXdlZCksXG4gKiB5b3Ugc2hvdWxkIGltcGxlbWVudCBzZXJ2ZXIgc2lkZSByZWNlaXB0IHZhbGlkYXRpb24uXG4gKlxuICogVGhpcyBhbHNvIHByb3RlY3RzIHlvdSBhZ2FpbnN0IGZha2UgXCJwdXJjaGFzZXNcIiwgbWFkZSBieSBzb21lIHVzZXJzIHVzaW5nXG4gKiBcImZyZWUgaW4tYXBwIHB1cmNoYXNlXCIgYXBwcyBvbiB0aGVpciBkZXZpY2VzLlxuICpcbiAqIFdoZW4gYSBwdXJjaGFzZSBoYXMgYmVlbiBhcHByb3ZlZCBieSB0aGUgc3RvcmUsIGl0J3MgZW5yaWNoZWQgd2l0aFxuICogdHJhbnNhY3Rpb24gaW5mb3JtYXRpb24gKHNlZSBgcHJvZHVjdC50cmFuc2FjdGlvbmAgYXR0cmlidXRlKS5cbiAqXG4gKiBUbyB2ZXJpZnkgYSBwdXJjaGFzZSB5b3UnbGwgaGF2ZSB0byBkbyB0aHJlZSB0aGluZ3M6XG4gKlxuICogIC0gY29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXG4gKiAgLSBjYWxsIGBwcm9kdWN0LnZlcmlmeSgpYCBmcm9tIHRoZSBgYXBwcm92ZWRgIGV2ZW50LCBiZWZvcmUgZmluaXNoaW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAqICAtIGZpbmlzaCB0aGUgdHJhbnNhY3Rpb24gd2hlbiB0cmFuc2FjdGlvbiBpcyBgdmVyaWZpZWRgLlxuICpcbiAqICoqU2hhbWVsZXNzIFBsdWcqKjogdGhpcyBpcyBhIGZlYXR1cmUgbWFueSB1c2VycyBzdHJ1Z2dsZSB3aXRoLCBzbyBhcyB0aGUgYXV0aG9yIG9mIHRoaXMgcGx1Z2luLCB3ZSBjYW4gcHJvdmlkZSBpdCB0byB5b3UgYXMtYS1zZXJ2aWNlOiBodHRwczovL2JpbGxpbmcuZm92ZWEuY2MvXG4gKiAod2hpY2ggaXMgZnJlZSB1bnRpbCB5b3Ugc3RhcnQgbWFraW5nIHNlcmlvdXMgbW9uZXkpXG4gKlxuICogIyMjIyBleGFtcGxlIHVzaW5nIGEgdmFsaWRhdGlvbiBVUkxcbiAqXG4gKiBgYGBqc1xuICogdGhpcy5zdG9yZS52YWxpZGF0b3IgPSBcImh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cIjtcbiAqXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteSBzdHVmZlwiKVxuICogICAuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAudmVyaWZ5KCkpXG4gKiAgIC52ZXJpZmllZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XG4gKiBgYGBcbiAqXG4gKiAjIyBTdWJzY3JpcHRpb25zXG4gKlxuICogRm9yIHN1YnNjcmlwdGlvbiwgeW91IE1VU1QgaW1wbGVtZW50IHJlbW90ZSByZWNlaXB0IHZhbGlkYXRpb24uXG4gKlxuICogV2hlbiB0aGUgcmVjZWlwdCB2YWxpZGF0b3IgcmV0dXJucyBhIGBzdG9yZS5QVVJDSEFTRV9FWFBJUkVEYCBlcnJvciBjb2RlLCB0aGUgc3Vic2NyaXB0aW9uIHdpbGxcbiAqIGF1dG9tYXRpY2FsbHkgbG9vc2UgaXRzIGBvd25lZGAgc3RhdHVzLlxuICpcbiAqIFR5cGljYWxseSwgeW91J2xsIGVuYWJsZSBhbmQgZGlzYWJsZSBhY2Nlc3MgdG8geW91ciBjb250ZW50IHRoaXMgd2F5LlxuICogYGBgdHlwZXNjcmlwdFxuICogdGhpcy5zdG9yZS53aGVuKFwibXlfc3ViY3JpcHRpb25cIikudXBkYXRlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICBpZiAocHJvZHVjdC5vd25lZClcbiAqICAgICBhcHAuc3Vic2NyaWJlck1vZGUoKTtcbiAqICAgZWxzZVxuICogICAgIGFwcC5ndWVzdE1vZGUoKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogIyMgUHJvZHVjdCBsaWZlLWN5Y2xlXG4gKlxuICogQSBwcm9kdWN0IHdpbGwgY2hhbmdlIHN0YXRlIGR1cmluZyB0aGUgYXBwbGljYXRpb24gZXhlY3V0aW9uLlxuICpcbiAqIEZpbmQgYmVsb3cgYSBkaWFncmFtIG9mIHRoZSBkaWZmZXJlbnQgc3RhdGVzIGEgcHJvZHVjdCBjYW4gcGFzcyBieS5cbiAqXG4gKiBgYGBcbiAqIFJFR0lTVEVSRUQgKy0tPiBJTlZBTElEXG4gKiAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgKy0tPiBWQUxJRCArLS0+IFJFUVVFU1RFRCArLS0+IElOSVRJQVRFRCArLStcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICBeICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfFxuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgICstLT4gRE9XTkxPQURJTkcgKy0tPiBET1dOTE9BREVEICtcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgfCAgICAgICstLT4gQVBQUk9WRUQgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tPiBGSU5JU0hFRCArLS0+IE9XTkVEXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKlxuICogIyMjIyBOb3Rlc1xuICpcbiAqICAtIFdoZW4gZmluaXNoZWQsIGEgY29uc3VtYWJsZSBwcm9kdWN0IHdpbGwgZ2V0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUsIHdoaWxlIG90aGVyIHdpbGwgZW50ZXIgdGhlIGBPV05FRGAgc3RhdGUuXG4gKiAgLSBBbnkgZXJyb3IgaW4gdGhlIHB1cmNoYXNlIHByb2Nlc3Mgd2lsbCBicmluZyBhIHByb2R1Y3QgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cbiAqICAtIER1cmluZyBhcHBsaWNhdGlvbiBzdGFydHVwLCBwcm9kdWN0cyBtYXkgZ28gaW5zdGFudGx5IGZyb20gYFJFR0lTVEVSRURgIHRvIGBBUFBST1ZFRGAgb3IgYE9XTkVEYCwgZm9yIGV4YW1wbGUgaWYgdGhleSBhcmUgcHVyY2hhc2VkIG5vbi1jb25zdW1hYmxlcyBvciBub24tZXhwaXJlZCBzdWJzY3JpcHRpb25zLlxuICogIC0gTm9uLVJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgYXJlIGlPUyBwcm9kdWN0cyBvbmx5LiBQbGVhc2Ugc2VlIHRoZSBbaU9TIE5vbiBSZW5ld2luZyBTdWJzY3JpcHRpb25zIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9pb3MubWQjbm9uLXJlbmV3aW5nKSBmb3IgYSBkZXRhaWxlZCBleHBsYW5hdGlvbi5cbiAqXG4gKiAjIyBldmVudHNcbiAqXG4gKiAgLSBgbG9hZGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLlxuICogIC0gYHVwZGF0ZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuXG4gKiAgLSBgZXJyb3IoZXJyKWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLlxuICogICAgLSBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIGVycm9yIG9iamVjdFxuICogIC0gYGFwcHJvdmVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuXG4gKiAgLSBgb3duZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuXG4gKiAgLSBgY2FuY2VsbGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLlxuICogIC0gYHJlZnVuZGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci5cbiAqICAtIEFjdHVhbGx5LCBhbGwgb3RoZXIgcHJvZHVjdCBzdGF0ZXMgaGF2ZSB0aGVpciBwcm9taXNlXG4gKiAgICAtIGByZWdpc3RlcmVkYCwgYHZhbGlkYCwgYGludmFsaWRgLCBgcmVxdWVzdGVkYCxcbiAqICAgICAgYGluaXRpYXRlZGAgYW5kIGBmaW5pc2hlZGBcbiAqICAtIGB2ZXJpZmllZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcbiAqICAtIGB1bnZlcmlmaWVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWRcbiAqICAtIGBleHBpcmVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiB2YWxpZGF0aW9uIGZpbmQgYSBzdWJzY3JpcHRpb24gdG8gYmUgZXhwaXJlZFxuICogIC0gYGRvd25sb2FkaW5nKElBUFByb2R1Y3QsIHByb2dyZXNzLCB0aW1lX3JlbWFpbmluZylgXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZFxuICogIC0gYGRvd25sb2FkZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcbiAqXG4gKiAjIyBMZWFybiBNb3JlXG4gKlxuICogIC0gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UpXG4gKiAgLSBbR2l0Qm9va10oaHR0cHM6Ly9wdXJjaGFzZS5jb3Jkb3ZhLmZvdmVhLmNjLylcbiAqICAtIFtXaWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKVxuICogIC0gW0FQSSByZWZlcmVuY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQpXG4gKlxuICogIyMgVGVjaG5pY2FsIFN1cHBvcnQgb3IgUXVlc3Rpb25zXG4gKlxuICogSWYgeW91IGhhdmUgcXVlc3Rpb25zIG9yIG5lZWQgaGVscCBpbnRlZ3JhdGluZyBJbi1BcHAgUHVyY2hhc2UsIFtPcGVuIGFuIElzc3VlIG9uIEdpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvaXNzdWVzKSBvciBlbWFpbCB1cyBhdCBfc3VwcG9ydEBmb3ZlYS5jY18uXG4gKlxuICogQGludGVyZmFjZXNcbiAqIElBUFByb2R1Y3RcbiAqIElBUFByb2R1Y3RPcHRpb25zXG4gKiBJQVBQcm9kdWN0RXZlbnRzXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFB1cmNoYXNlMicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcbiAgcGx1Z2luUmVmOiAnc3RvcmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cyddLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXB1cmNoYXNlIC0tdmFyaWFibGUgQklMTElOR19LRVk9XCI8QU5EUk9JRF9CSUxMSU5HX0tFWT5cIicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwUHVyY2hhc2UyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUVVJRVQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJST1I6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgV0FSTklORzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTkZPOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIERFQlVHOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlYnVnIGxldmVsLiBVc2UgUVVJRVQsIEVSUk9SLCBXQVJOSU5HLCBJTkZPIG9yIERFQlVHIGNvbnN0YW50c1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcmJvc2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBjbGVhciB0aGUgdHJhbnNhY3Rpb24gcXVldWUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbi5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZCNyYW5kb20tdGlwc1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGF1dG9GaW5pc2hUcmFuc2FjdGlvbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGludm9rZSB0aGUgcGxhdGZvcm0gcHVyY2hhc2Ugc2FuZGJveC4gKFdpbmRvd3Mgb25seSlcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzYW5kYm94OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGRvd25sb2FkaW5nIG9mIGhvc3RlZCBjb250ZW50LiAoQXBwbGUgb25seSkuXG4gICAqIFVzZWZ1bCBpbiBkZXZlbG9wbWVudCBvciB3aGVuIG1pZ3JhdGluZyB5b3VyIGFwcCBhd2F5IGZyb20gQXBwbGUgSG9zdGVkIENvbnRlbnQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZGlzYWJsZUhvc3RlZENvbnRlbnQ6IGJvb2xlYW47XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZSRUVfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBBSURfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT046IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ09OU1VNQUJMRTogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBOT05fQ09OU1VNQUJMRTogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfU0VUVVA6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0xPQUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BVUkNIQVNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9MT0FEX1JFQ0VJUFRTOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9DTElFTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9DQU5DRUxMRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9OT1RfQUxMT1dFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVU5LTk9XTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUkVGUkVTSF9SRUNFSVBUUzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfSU5WQUxJRF9QUk9EVUNUX0lEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9GSU5JU0g6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0NPTU1VTklDQVRJT046IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1NVQlNDUklQVElPTlNfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfTUlTU0lOR19UT0tFTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfQkFEX1JFU1BPTlNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9SRUZSRVNIOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX0VYUElSRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0RPV05MT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9TVUJTQ1JJUFRJT05fVVBEQVRFX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUkVHSVNURVJFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTlZBTElEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFZBTElEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFJFUVVFU1RFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTklUSUFURUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQVBQUk9WRUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRklOSVNIRUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgT1dORUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRE9XTkxPQURJTkc6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRE9XTkxPQURFRDogc3RyaW5nO1xuXG4gIC8qIHZhbGlkYXRpb24gZXJyb3IgY29kZXMgKi9cblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5WQUxJRF9QQVlMT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENPTk5FQ1RJT05fRkFJTEVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBVUkNIQVNFX0VYUElSRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUFVSQ0hBU0VfQ09OU1VNRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5URVJOQUxfRVJST1I6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTkVFRF9NT1JFX0RBVEE6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcHJvZHVjdHM6IElBUFByb2R1Y3RzO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2YWxpZGF0b3I6IHN0cmluZyB8ICgodXJsOiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHZvaWQpO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBhcHBsaWNhdGlvblVzZXJuYW1lOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXBwbGljYXRpb25Vc2VybmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBsb2c6IHtcbiAgICBlcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgICB3YXJuOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGluZm86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZGVidWc6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGJ5IGlkIG9yIGFsaWFzXG4gICAqIEBwYXJhbSBpZE9yQWxpYXNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXQoaWRPckFsaWFzOiBzdHJpbmcpOiBJQVBQcm9kdWN0IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZXJyb3IgaGFuZGxlclxuICAgKiBAcGFyYW0gb25FcnJvciB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIGNhbGwgb24gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlcnJvcihvbkVycm9yOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIG9yIHJlZ2lzdGVyIGEgcHJvZHVjdFxuICAgKiBAcGFyYW0gcHJvZHVjdCB7SUFQUHJvZHVjdE9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXIocHJvZHVjdDogSUFQUHJvZHVjdE9wdGlvbnMgfCBJQVBQcm9kdWN0T3B0aW9uc1tdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtJQVBQcm9kdWN0RXZlbnRzfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHdoZW4ocXVlcnk6IHN0cmluZyB8IElBUFByb2R1Y3QsIGV2ZW50Pzogc3RyaW5nLCBjYWxsYmFjaz86IElBUFF1ZXJ5Q2FsbGJhY2spOiBJQVBQcm9kdWN0RXZlbnRzIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWRlbnRpY2FsIHRvIGB3aGVuYCwgYnV0IHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuIEFmdGVyIGJlaW5nIGNhbGxlZCwgdGhlIGNhbGxiYWNrIHdpbGwgYmUgdW5yZWdpc3RlcmVkLlxuICAgKiBAcGFyYW0gcXVlcnkge3N0cmluZyB8IElBUFByb2R1Y3R9XG4gICAqIEBwYXJhbSBbZXZlbnRdIHtldmVudH1cbiAgICogQHBhcmFtIFtjYWxsYmFja10ge0lBUFF1ZXJ5Q2FsbGJhY2t9XG4gICAqIEByZXR1cm4ge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25jZShxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGEgY2FsbGJhY2suIFdvcmtzIGZvciBjYWxsYmFja3MgcmVnaXN0ZXJlZCB3aXRoIHJlYWR5LCB3aGVuLCBvbmNlIGFuZCBlcnJvci5cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxuICAgKlxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XG4gICAqXG4gICAqICAtIHRoZSBgSUFQUHJvZHVjdGAgb2JqZWN0XG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxuICAgKlxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cbiAgICogIC0gYGRldmVsb3BlclBheWxvYWRgOiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZXZlbG9wZXIgcGF5bG9hZCBhcyBkZXNjcmliZWQgaW4gW2JpbGxpbmcgYmVzdCBwcmFjdGljZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19iZXN0X3ByYWN0aWNlcy5odG1sKVxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIFNlZSB0aGUgXCJQdXJjaGFzaW5nIHNlY3Rpb25cIiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBwdXJjaGFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiAqKnJldHVybiB2YWx1ZSoqXG4gICAqXG4gICAqIGBzdG9yZS5vcmRlcigpYCByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcbiAgICpcbiAgICogIC0gYHRoZW5gIC0gY2FsbGVkIHdoZW4gdGhlIG9yZGVyIHdhcyBzdWNjZXNzZnVsbHkgaW5pdGlhdGVkLlxuICAgKiAgLSBgZXJyb3JgIC0gY2FsbGVkIGlmIHRoZSBvcmRlciBjb3VsZG4ndCBiZSBpbml0aWF0ZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb3JkZXIocHJvZHVjdDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgYWRkaXRpb25hbERhdGE/OiBhbnkpOiB7IHRoZW46IEZ1bmN0aW9uOyBlcnJvcjogRnVuY3Rpb24gfSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZWFkeShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEFmdGVyIHlvdSdyZSBkb25lIHJlZ2lzdGVyaW5nIHlvdXIgc3RvcmUncyBwcm9kdWN0IGFuZCBldmVudHMgaGFuZGxlcnMsXG4gICAqIHRpbWUgdG8gY2FsbCBgc3RvcmUucmVmcmVzaCgpYC5cbiAgICpcbiAgICogVGhpcyB3aWxsIGluaXRpYXRlIGFsbCB0aGUgY29tcGxleCBiZWhpbmQtdGhlLXNjZW5lIHdvcmssIHRvIGxvYWQgcHJvZHVjdFxuICAgKiBkYXRhIGZyb20gdGhlIHNlcnZlcnMgYW5kIHJlc3RvcmUgd2hhdGV2ZXIgYWxyZWFkeSBoYXZlIGJlZW5cbiAgICogcHVyY2hhc2VkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kIGFnYWluIGxhdGVyIGR1cmluZyB0aGUgYXBwbGljYXRpb25cbiAgICogZXhlY3V0aW9uIHRvIHJlLXRyaWdnZXIgYWxsIHRoYXQgaGFyZC13b3JrLiBJdCdzIGtpbmQgb2YgZXhwZW5zaXZlIGluIHRlcm0gb2ZcbiAgICogcHJvY2Vzc2luZywgc28geW91J2QgYmV0dGVyIGNvbnNpZGVyIGl0IHR3aWNlLlxuICAgKlxuICAgKiBPbmUgZ29vZCB3YXkgb2YgZG9pbmcgaXQgaXMgdG8gYWRkIGEgXCJSZWZyZXNoIFB1cmNoYXNlc1wiIGJ1dHRvbiBpbiB5b3VyXG4gICAqIGFwcGxpY2F0aW9ucyBzZXR0aW5ncy4gVGhpcyB3YXksIGlmIGRlbGl2ZXJ5IG9mIGEgcHVyY2hhc2UgZmFpbGVkIG9yXG4gICAqIGlmIGEgdXNlciB3YW50cyB0byByZXN0b3JlIHB1cmNoYXNlcyBoZSBtYWRlIGZyb20gYW5vdGhlciBkZXZpY2UsIGhlJ2xsXG4gICAqIGhhdmUgYSB3YXkgdG8gZG8ganVzdCB0aGF0LlxuICAgKlxuICAgKiAqKmV4YW1wbGUgdXNhZ2UqKlxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqICAgIC8vIC4uLlxuICAgKiAgICAvLyByZWdpc3RlciBwcm9kdWN0cyBhbmQgZXZlbnRzIGhhbmRsZXJzIGhlcmVcbiAgICogICAgLy8gLi4uXG4gICAqICAgIC8vXG4gICAqICAgIC8vIHRoZW4gYW5kIG9ubHkgdGhlbiwgY2FsbCByZWZyZXNoLlxuICAgKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAgICogYGBgXG4gICAqXG4gICAqICoqcmVzdG9yZSBwdXJjaGFzZXMqKlxuICAgKlxuICAgKiBBZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIHRvIGNhbGwgdGhlIGBzdG9yZS5yZWZyZXNoKClgIG1ldGhvZCwgbGlrZTpcbiAgICpcbiAgICogYDxidXR0b24gb25jbGljaz1cIjxwc2V1ZG9fY29kZT50aGlzLnN0b3JlLnJlZnJlc2goKTwvcHNldWRvX2NvZGU+XCI+UmVzdG9yZSBQdXJjaGFzZXM8L2J1dHRvbj5gXG4gICAqXG4gICAqIFRvIG1ha2UgdGhlIHJlc3RvcmUgcHVyY2hhc2VzIHdvcmsgYXMgZXhwZWN0ZWQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdFxuICAgKiB0aGUgXCJhcHByb3ZlZFwiIGV2ZW50IGxpc3RlbmVyIGhhZCBiZSByZWdpc3RlcmVkIHByb3Blcmx5LFxuICAgKiBhbmQgaW4gdGhlIGNhbGxiYWNrIGBwcm9kdWN0LmZpbmlzaCgpYCBzaG91bGQgYmUgY2FsbGVkLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZnJlc2goKTogdm9pZCB7fVxuXG4gIC8qKiBMaWdodHdlaWdodCBtZXRob2QgbGlrZSByZWZyZXNoIGJ1dCBkbyBub3QgcmVsb2dpbiB1c2VyICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGUoKTogdm9pZCB7fVxuXG4gIC8qKiBPcGVucyB0aGUgTWFuYWdlIFN1YnNjcmlwdGlvbiBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XG5cbiAgLyoqIE9wZW5zIHRoZSBDb2RlIFJlZGVtcHRpb24gU2hlZXQgb24gaU9TLiAoQXBwU3RvcmUpLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVkZWVtKCk6IHZvaWQge31cbn1cbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module-es2015.js.map