(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module"], {
    /***/
    "0J8G":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/add-card/add-card.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J8G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Add New Card\n    </ion-title>\n    <ion-buttons slot=\"end\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" mode=\"ios\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form action=\"/\" method=\"post\" id=\"payment-form\">\n    <ion-grid>\n      <ion-row class=\"ion-margin-top ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"10\" sizeXl=\"10\" class=\"ion-align-self-center\">\n          <div class=\"form-row\">\n            <div id=\"card-element\">\n              <!-- a Stripe Element will be inserted here. -->\n            </div>\n            <!-- Used to display Element errors -->\n            <div class=\"c-red\" id=\"card-errors\" role=\"alert\"></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeLg=\"6\" sizeXl=\"6\" class=\"ion-align-self-center\">\n          <ion-button type=\"submit\" mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\"\n            >Add Card\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "4vM4":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: StripeManagePageModule */

    /***/
    function vM4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripeManagePageModule", function () {
        return StripeManagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-card/add-card.component */
      "WqH7");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _stripe_manage_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./stripe-manage.page */
      "OSRK"); // import {FilterPaymentCardsByDatePipe} from '../../../../../../pipes/filter-payment-cards-by-date.pipe'


      var routes = [{
        path: '',
        component: _stripe_manage_page__WEBPACK_IMPORTED_MODULE_9__["StripeManagePage"]
      }];

      var StripeManagePageModule = function StripeManagePageModule() {
        _classCallCheck(this, StripeManagePageModule);
      };

      StripeManagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
        declarations: [_stripe_manage_page__WEBPACK_IMPORTED_MODULE_9__["StripeManagePage"], _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_1__["AddCardComponent"]],
        entryComponents: [_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_1__["AddCardComponent"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"]]
      })], StripeManagePageModule);
      /***/
    },

    /***/
    "CXLi":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.page.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CXLi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col\n        sizeXs=\"12\"\n        sizeSm=\"12\"\n        sizeMd=\"6\"\n        sizeLg=\"4\"\n        sizeXl=\"4\"\n        class=\"ion-no-padding ion-padding ion-align-self-center\"\n      >\n        <h1 class=\"ion-no-margin\">Payment options</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-no-padding ion-align-self-center\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\">\n          <ion-list-header mode=\"md\">\n            <ion-label>Credit / Debit Cards</ion-label>\n          </ion-list-header>\n          <ion-item mode=\"md\" *ngFor=\"let paymentCard of paymentCards\" (click)=\"onSetDefaultCard(paymentCard)\">\n            <ion-label\n              >{{ paymentCard.card.brand | uppercase }} <span>xxxx-xxxx-xxxx-</span>{{ paymentCard.card.last4 }}\n            </ion-label>\n            <ion-label>\n              {{ paymentCard.card.exp_month | number: '2.0' }}/{{ paymentCard.card.exp_year % 100 | number: '2.0' }}\n            </ion-label>\n            <ion-icon\n              *ngIf=\"paymentCard.default\"\n              mode=\"ios\"\n              color=\"success\"\n              name=\"checkmark-circle\"\n              size=\"large\"\n              slot=\"end\"\n            ></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-padding-start ion-align-self-center\">\n        <p (click)=\"onAddCard()\" class=\"pointer\">\n          <ion-icon id=\"add-card-icon\" name=\"add-circle-outline\"></ion-icon> ADD NEW CARD\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n      <!-- <ion-button\n        mode=\"ios\"\n        [disabled]=\"customerDetails === undefined\"\n        (click)=\"onProcessedToPayUsingStripe()\"\n        color=\"danger\"\n        shape=\"round\"\n        expand=\"block\"\n        >Process To Pay\n      </ion-button> -->\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "OSRK":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.page.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: StripeManagePage */

    /***/
    function OSRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripeManagePage", function () {
        return StripeManagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stripe_manage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stripe-manage.page.html */
      "CXLi");
      /* harmony import */


      var _stripe_manage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stripe-manage.page.scss */
      "PQNX");
      /* harmony import */


      var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-card/add-card.component */
      "WqH7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../../environments/environment */
      "AytR");

      var StripeManagePage = /*#__PURE__*/function () {
        function StripeManagePage(sharedService, onBoardingService, navController, router, modalController, loadingController, subscriptionService) {
          _classCallCheck(this, StripeManagePage);

          this.sharedService = sharedService;
          this.onBoardingService = onBoardingService;
          this.navController = navController;
          this.router = router;
          this.modalController = modalController;
          this.loadingController = loadingController;
          this.subscriptionService = subscriptionService; // Add Stripe Public Key

          this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripePublicKey);
          this.paymentCards = [];
          this.customerDetails = undefined;
          this.isDevelopmentMode = true;
        }

        _createClass(StripeManagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["isDevMode"])()) {
              this.isDevelopmentMode = true;
            } else {
              this.isDevelopmentMode = false;
            }

            console.log('this.isDevelopmentMode', this.isDevelopmentMode);
            this.getCustomer();
          }
        }, {
          key: "getCustomer",
          value: function getCustomer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var profileRes, profile, stripeCustomerId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      this.sharedService.presentLoader('Please wait...');
                      _context.next = 4;
                      return this.onBoardingService.getUserProfile().toPromise();

                    case 4:
                      profileRes = _context.sent;

                      if (profileRes.data) {
                        profile = profileRes.data;
                        stripeCustomerId = this.isDevelopmentMode ? profile.stripeSandBoxCustomerId : profile.stripeLiveCustomerId;
                        this.stripeCustomerId = stripeCustomerId;
                        this.getAllPaymentMethods();
                      }

                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);

                    case 11:
                      _context.prev = 11;
                      this.sharedService.dismissLoader();
                      return _context.finish(11);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 8, 11, 14]]);
            }));
          }
        }, {
          key: "getAllPaymentMethods",
          value: function getAllPaymentMethods() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var stripeCustomerId, data, res, customerDetails;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      stripeCustomerId = this.stripeCustomerId;
                      data = {
                        type: 'card',
                        customerId: stripeCustomerId
                      };
                      _context2.next = 5;
                      return this.subscriptionService.getCustomerAllPaymentMethods(data).toPromise();

                    case 5:
                      res = _context2.sent;

                      if (!res.data.data.length) {
                        _context2.next = 14;
                        break;
                      }

                      this.paymentCards = res.data.data;
                      _context2.next = 10;
                      return this.subscriptionService.getCustomerDetails(stripeCustomerId).toPromise();

                    case 10:
                      customerDetails = _context2.sent;
                      this.customerDetails = customerDetails.data;
                      this.paymentCards.map(function (card) {
                        card["default"] = card.id === _this.customerDetails.default_source;
                      });
                      console.log(this.paymentCards);

                    case 14:
                      _context2.next = 19;
                      break;

                    case 16:
                      _context2.prev = 16;
                      _context2.t0 = _context2["catch"](0);
                      console.log(_context2.t0);

                    case 19:
                      _context2.prev = 19;
                      this.sharedService.dismissLoader();
                      return _context2.finish(19);

                    case 22:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 16, 19, 22]]);
            }));
          }
        }, {
          key: "onAddCard",
          value: function onAddCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__["AddCardComponent"],
                        componentProps: {
                          stripeCustomerId: this.stripeCustomerId
                        },
                        mode: 'md'
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      _context3.next = 7;
                      return modal.onDidDismiss().then(function () {
                        _this2.getAllPaymentMethods();
                      })["catch"](function (error) {
                        console.log(error);
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/subscription']);
          }
        }, {
          key: "onSetDefaultCard",
          value: function onSetDefaultCard(paymentCard) {
            var _this3 = this;

            this.customerDetails.default_source = paymentCard.id;
            this.paymentCards.forEach(function (card) {
              card["default"] = card.id === _this3.customerDetails.default_source;
            });
          }
        }]);

        return StripeManagePage;
      }();

      StripeManagePage.ctorParameters = function () {
        return [{
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]
        }];
      };

      StripeManagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-stripe-manage',
        template: _raw_loader_stripe_manage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stripe_manage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]])], StripeManagePage);
      /***/
    },

    /***/
    "PQNX":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.page.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PQNX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list-header {\n  --background: lightgray;\n}\n\nion-item ion-label span {\n  font-size: 20px;\n}\n\n#add-card-icon {\n  font-size: 25px;\n  margin-right: 5px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.warning {\n  --background: #bad9b5;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0cmlwZS1tYW5hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFHSTtFQUNFLGVBQUE7QUFBTjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJzdHJpcGUtbWFuYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuaW9uLWl0ZW0ge1xuICBpb24tbGFiZWwge1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuI2FkZC1jYXJkLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53YXJuaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYmFkOWI1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl19 */";
      /***/
    },

    /***/
    "TANj":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/add-card/add-card.component.scss ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TANj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "WqH7":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-manage/add-card/add-card.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: AddCardComponent */

    /***/
    function WqH7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardComponent", function () {
        return AddCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-card.component.html */
      "0J8G");
      /* harmony import */


      var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-card.component.scss */
      "TANj");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../../environments/environment */
      "AytR");

      var AddCardComponent = /*#__PURE__*/function () {
        function AddCardComponent(sharedService, subscriptionService, modalController, navParams) {
          _classCallCheck(this, AddCardComponent);

          this.sharedService = sharedService;
          this.subscriptionService = subscriptionService;
          this.modalController = modalController;
          this.navParams = navParams;
          this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].stripePublicKey);
          this.stripeCustomerId = this.navParams.get('stripeCustomerId');
        }

        _createClass(AddCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setupStripe();
          }
        }, {
          key: "setupStripe",
          value: function setupStripe() {
            var _this4 = this;

            var elements = this.stripe.elements();
            var style = {
              base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
              }
            };
            this.card = elements.create('card', {
              style: style,
              hidePostalCode: true
            }); // console.log( this.card );

            this.card.mount('#card-element');
            this.card.addEventListener('change', function (event) {
              var displayError = document.getElementById('card-errors');

              if (event.error) {
                displayError.textContent = event.error.message;
              } else {
                displayError.textContent = '';
              }
            });
            var form = document.getElementById('payment-form');
            form.addEventListener('submit', function (event) {
              event.preventDefault(); // console.log( event );

              _this4.sharedService.presentLoader('Please wait...'); // console.log( this.card );


              _this4.stripe.createSource(_this4.card).then(function (result) {
                if (result.error) {
                  var errorElement = document.getElementById('card-errors');
                  errorElement.textContent = result.error.message;

                  _this4.sharedService.dismissLoader();
                } else {
                  _this4.attachSourceToCustomer(result.source.id);
                }
              });
            });
          }
        }, {
          key: "attachSourceToCustomer",
          value: function attachSourceToCustomer(sourceId) {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var stripeCustomerId, res;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      stripeCustomerId = this.stripeCustomerId;

                      if (!(stripeCustomerId === undefined)) {
                        _context4.next = 4;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 4:
                      _context4.next = 6;
                      return this.subscriptionService.attachSourceToCustomer({
                        customerId: stripeCustomerId,
                        token: sourceId
                      }).toPromise();

                    case 6:
                      res = _context4.sent;
                      this.sharedService.dismissLoader();
                      this.dismiss();
                      _context4.next = 16;
                      break;

                    case 11:
                      _context4.prev = 11;
                      _context4.t0 = _context4["catch"](0);
                      console.log(_context4.t0);
                      this.sharedService.dismissLoader();
                      this.sharedService.presentToast((_b = (_a = _context4.t0.err) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.message);

                    case 16:
                      _context4.prev = 16;
                      return _context4.finish(16);

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 11, 16, 18]]);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return AddCardComponent;
      }();

      AddCardComponent.ctorParameters = function () {
        return [{
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      };

      AddCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], AddCardComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module-es5.js.map