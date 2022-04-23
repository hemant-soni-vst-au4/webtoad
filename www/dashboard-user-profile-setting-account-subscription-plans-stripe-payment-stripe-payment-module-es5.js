(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module"], {
    /***/
    "5mFe":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: AddCardComponent */

    /***/
    function mFe(module, __webpack_exports__, __webpack_require__) {
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
      "MFqa");
      /* harmony import */


      var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-card.component.scss */
      "cDqi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../../environments/environment */
      "AytR");

      var AddCardComponent = /*#__PURE__*/function () {
        function AddCardComponent(sharedService, subscriptionService, modalController, onBoardingService, navParams) {
          var _this = this;

          _classCallCheck(this, AddCardComponent);

          this.sharedService = sharedService;
          this.subscriptionService = subscriptionService;
          this.modalController = modalController;
          this.onBoardingService = onBoardingService;
          this.navParams = navParams;
          this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stripePublicKey);
          this.onBoardingService.getUserProfile().toPromise().then(function (res) {
            var profile = res.data; //this.navParams.get('profile')

            var stripeCustomerId = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() ? profile.stripeSandBoxCustomerId : profile.stripeLiveCustomerId;

            if (stripeCustomerId === undefined) {
              _this.dismiss();
            }

            _this.stripeCustomerId = stripeCustomerId;
          })["catch"](function (err) {
            _this.dismiss();
          });
        }

        _createClass(AddCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setupStripe();
          }
        }, {
          key: "setupStripe",
          value: function setupStripe() {
            var _this2 = this;

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

              _this2.sharedService.presentLoader('Please wait...'); // console.log( this.card );


              _this2.stripe.createSource(_this2.card).then(function (result) {
                if (result.error) {
                  var errorElement = document.getElementById('card-errors');
                  errorElement.textContent = result.error.message;

                  _this2.sharedService.dismissLoader();
                } else {
                  _this2.attachSourceToCustomer(result.source.id);
                }
              });
            });
          }
        }, {
          key: "attachSourceToCustomer",
          value: function attachSourceToCustomer(sourceId) {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var stripeCustomerId, res;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      stripeCustomerId = this.stripeCustomerId;

                      if (!(stripeCustomerId === undefined)) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      _context.next = 6;
                      return this.subscriptionService.attachSourceToCustomer({
                        customerId: stripeCustomerId,
                        token: sourceId
                      }).toPromise();

                    case 6:
                      res = _context.sent;
                      this.sharedService.dismissLoader();
                      this.dismiss();
                      _context.next = 16;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);
                      this.sharedService.dismissLoader();
                      this.sharedService.presentToast((_b = (_a = _context.t0.err) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.message);

                    case 16:
                      _context.prev = 16;
                      return _context.finish(16);

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 11, 16, 18]]);
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
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      };

      AddCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], AddCardComponent);
      /***/
    },

    /***/
    "BZ4+":
    /*!************************************************************!*\
      !*** ./src/app/pipes/filter-payment-cards-by-date.pipe.ts ***!
      \************************************************************/

    /*! exports provided: FilterPaymentCardsByDatePipe */

    /***/
    function BZ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPaymentCardsByDatePipe", function () {
        return FilterPaymentCardsByDatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FilterPaymentCardsByDatePipe = /*#__PURE__*/function () {
        function FilterPaymentCardsByDatePipe() {
          _classCallCheck(this, FilterPaymentCardsByDatePipe);
        }

        _createClass(FilterPaymentCardsByDatePipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value.length) {
              return value.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return a.created - b.created;
              });
            } else {
              return null;
            }
          }
        }]);

        return FilterPaymentCardsByDatePipe;
      }();

      FilterPaymentCardsByDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterPaymentCardsByDate'
      })], FilterPaymentCardsByDatePipe);
      /***/
    },

    /***/
    "F09a":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F09a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list-header {\n  --background: lightgray;\n}\n\nion-item ion-label span {\n  font-size: 20px;\n}\n\n#add-card-icon {\n  font-size: 25px;\n  margin-right: 5px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.warning {\n  --background: #bad9b5;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0cmlwZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoic3RyaXBlLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5pb24taXRlbSB7XG4gIGlvbi1sYWJlbCB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG4jYWRkLWNhcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndhcm5pbmcge1xuICAtLWJhY2tncm91bmQ6ICNiYWQ5YjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "MFqa":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MFqa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Add New Card\n    </ion-title>\n    <ion-buttons slot=\"end\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" mode=\"ios\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form action=\"/\" method=\"post\" id=\"payment-form\">\n    <ion-grid>\n      <ion-row class=\"ion-margin-top ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"10\" sizeXl=\"10\" class=\"ion-align-self-center\">\n          <div class=\"form-row\">\n            <div id=\"card-element\">\n              <!-- a Stripe Element will be inserted here. -->\n            </div>\n            <!-- Used to display Element errors -->\n            <div class=\"c-red\" id=\"card-errors\" role=\"alert\"></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeLg=\"6\" sizeXl=\"6\" class=\"ion-align-self-center\">\n          <ion-button type=\"submit\" mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\"\n            >Add Card\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "PABW":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: StripePaymentPageModule */

    /***/
    function PABW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripePaymentPageModule", function () {
        return StripePaymentPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pipes_filter_payment_cards_by_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../../pipes/filter-payment-cards-by-date.pipe */
      "BZ4+");
      /* harmony import */


      var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-card/add-card.component */
      "5mFe");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./stripe-payment.page */
      "UNr2");

      var routes = [{
        path: '',
        component: _stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__["StripePaymentPage"]
      }];

      var StripePaymentPageModule = function StripePaymentPageModule() {
        _classCallCheck(this, StripePaymentPageModule);
      };

      StripePaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
        declarations: [_stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__["StripePaymentPage"], _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__["AddCardComponent"], _pipes_filter_payment_cards_by_date_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPaymentCardsByDatePipe"]],
        entryComponents: [_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__["AddCardComponent"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"]]
      })], StripePaymentPageModule);
      /***/
    },

    /***/
    "UNr2":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: StripePaymentPage */

    /***/
    function UNr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripePaymentPage", function () {
        return StripePaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stripe_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stripe-payment.page.html */
      "kKgU");
      /* harmony import */


      var _stripe_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stripe-payment.page.scss */
      "F09a");
      /* harmony import */


      var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-card/add-card.component */
      "5mFe");
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

      var StripePaymentPage = /*#__PURE__*/function () {
        function StripePaymentPage(sharedService, onBoardingService, navController, router, route, modalController, loadingController, subscriptionService) {
          _classCallCheck(this, StripePaymentPage);

          this.sharedService = sharedService;
          this.onBoardingService = onBoardingService;
          this.navController = navController;
          this.router = router;
          this.route = route;
          this.modalController = modalController;
          this.loadingController = loadingController;
          this.subscriptionService = subscriptionService; // Add Stripe Public Key

          this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripePublicKey);
          this.paymentCards = [];
          this.customerDetails = undefined;
          this.isDevelopmentMode = false;
          this.isProcessing = false;
        }

        _createClass(StripePaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["isDevMode"])()) {
              this.isDevelopmentMode = true;
            } else {
              this.isDevelopmentMode = false;
            }

            console.log('this.isDevelopmentMode', this.isDevelopmentMode);
            this.route.params.subscribe(function (params) {
              if (params.productId) {
                _this3.productId = params.productId;
              }
            }, function (error) {
              console.log(error);
            });
            this.getCustomer();
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var res;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.onBoardingService.getUserProfile(true).toPromise();

                    case 3:
                      res = _context2.sent;
                      return _context2.abrupt("return", res.data);

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](0);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getCustomer",
          value: function getCustomer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var profile, stripeCustomerId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      this.sharedService.presentLoader('Please wait...');
                      _context3.next = 4;
                      return this.getProfile();

                    case 4:
                      profile = _context3.sent;

                      if (!profile) {
                        _context3.next = 15;
                        break;
                      }

                      this.profile = profile;
                      stripeCustomerId = this.isDevelopmentMode ? profile.stripeSandBoxCustomerId : profile.stripeLiveCustomerId;

                      if (stripeCustomerId) {
                        _context3.next = 13;
                        break;
                      }

                      _context3.next = 11;
                      return this.createCustomer(profile.email);

                    case 11:
                      _context3.next = 15;
                      break;

                    case 13:
                      _context3.next = 15;
                      return this.getCustomerDetails(stripeCustomerId);

                    case 15:
                      _context3.next = 21;
                      break;

                    case 17:
                      _context3.prev = 17;
                      _context3.t0 = _context3["catch"](0);
                      this.sharedService.dismissLoader();
                      console.log(_context3.t0);

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 17]]);
            }));
          }
        }, {
          key: "createCustomer",
          value: function createCustomer(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var res;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('createCustomer', email);
                      _context4.prev = 1;
                      _context4.next = 4;
                      return this.subscriptionService.createStripeCustomer({
                        email: email
                      }).toPromise();

                    case 4:
                      res = _context4.sent;
                      this.setStripeCustomerId(res.data.id);
                      _context4.next = 12;
                      break;

                    case 8:
                      _context4.prev = 8;
                      _context4.t0 = _context4["catch"](1);
                      console.log(_context4.t0);
                      this.sharedService.presentToast(_context4.t0);

                    case 12:
                      _context4.prev = 12;
                      this.sharedService.dismissLoader();
                      return _context4.finish(12);

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 8, 12, 15]]);
            }));
          }
        }, {
          key: "setStripeCustomerId",
          value: function setStripeCustomerId(stripeCustomerId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var data, profile;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      data = {
                        customerId: stripeCustomerId,
                        type: this.isDevelopmentMode ? 'sandbox' : 'production'
                      };
                      _context5.next = 4;
                      return this.subscriptionService.setStripeCustomerId(data).toPromise();

                    case 4:
                      _context5.next = 6;
                      return this.getProfile();

                    case 6:
                      profile = _context5.sent;
                      this.profile = profile;
                      _context5.next = 14;
                      break;

                    case 10:
                      _context5.prev = 10;
                      _context5.t0 = _context5["catch"](0);
                      console.log(_context5.t0);
                      this.sharedService.presentToast(_context5.t0);

                    case 14:
                      _context5.prev = 14;
                      this.sharedService.dismissLoader();
                      return _context5.finish(14);

                    case 17:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 10, 14, 17]]);
            }));
          }
        }, {
          key: "getAllPaymentMethods",
          value: function getAllPaymentMethods() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var profile, stripeCustomerId, data, res, customerDetails;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.getProfile();

                    case 3:
                      profile = _context6.sent;
                      stripeCustomerId = this.isDevelopmentMode ? profile.stripeSandBoxCustomerId : profile.stripeLiveCustomerId;
                      data = {
                        type: 'card',
                        customerId: stripeCustomerId
                      };
                      _context6.next = 8;
                      return this.subscriptionService.getCustomerAllPaymentMethods(data).toPromise();

                    case 8:
                      res = _context6.sent;
                      console.log('getAllPaymentMethods', res);

                      if (!res.data.data.length) {
                        _context6.next = 19;
                        break;
                      }

                      this.paymentCards = res.data.data;
                      console.log('getCustomerDetails');
                      _context6.next = 15;
                      return this.subscriptionService.getCustomerDetails(stripeCustomerId).toPromise();

                    case 15:
                      customerDetails = _context6.sent;
                      console.log({
                        customerDetails: customerDetails
                      });
                      this.customerDetails = customerDetails.data;
                      this.paymentCards.map(function (card) {
                        if (card.id === _this4.customerDetails.default_source) {
                          card["default"] = true;
                        } else {
                          card["default"] = false;
                        }
                      });

                    case 19:
                      _context6.next = 24;
                      break;

                    case 21:
                      _context6.prev = 21;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0);

                    case 24:
                      _context6.prev = 24;
                      this.sharedService.dismissLoader();
                      return _context6.finish(24);

                    case 27:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 21, 24, 27]]);
            }));
          }
        }, {
          key: "getCustomerDetails",
          value: function getCustomerDetails(customerId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var res;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.subscriptionService.getCustomerDetails(customerId).toPromise();

                    case 3:
                      res = _context7.sent;
                      this.customerDetails = res.data;
                      this.getAllPaymentMethods();
                      _context7.next = 11;
                      break;

                    case 8:
                      _context7.prev = 8;
                      _context7.t0 = _context7["catch"](0);
                      console.log(_context7.t0);

                    case 11:
                      _context7.prev = 11;
                      this.sharedService.dismissLoader();
                      return _context7.finish(11);

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 8, 11, 14]]);
            }));
          }
        }, {
          key: "onAddCard",
          value: function onAddCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.modalController.create({
                        component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__["AddCardComponent"],
                        componentProps: {
                          profile: this.profile
                        },
                        mode: 'md'
                      });

                    case 2:
                      modal = _context8.sent;
                      _context8.next = 5;
                      return modal.present();

                    case 5:
                      _context8.next = 7;
                      return modal.onDidDismiss().then(function () {
                        _this5.getAllPaymentMethods();
                      })["catch"](function (error) {
                        console.log(error);
                      });

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "onProcessedToPayUsingStripe",
          value: function onProcessedToPayUsingStripe() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this6 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(this.customerDetails.default_source === null || this.productId === undefined)) {
                        _context9.next = 3;
                        break;
                      }

                      this.sharedService.presentToast('Please enter card details');
                      return _context9.abrupt("return");

                    case 3:
                      try {
                        data = {
                          planId: this.productId,
                          default_source: this.customerDetails.default_source,
                          customerId: this.customerDetails.id,
                          noCoupon: true
                        };
                        this.isProcessing = true;
                        this.sharedService.presentLoader('Please wait...');
                        this.subscriptionService.processedToPayUsingStripe(data).subscribe(function (res) {
                          _this6.setUserSubscription(res.data);
                        }, function (error) {
                          console.log(error);

                          _this6.sharedService.dismissLoader();

                          _this6.isProcessing = true;

                          _this6.sharedService.presentToast(error.err.rawType);
                        });
                      } catch (error) {
                        console.log(error);
                      }

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/subscriptionplans']);
          }
        }, {
          key: "setUserSubscription",
          value: function setUserSubscription(data) {
            var _this7 = this;

            var userSubscription = {
              type: 'Stripe',
              orderId: data.id,
              packageName: 'com.summer.startenglishnow',
              userSubscriptionStartDate: data.current_period_start * 1000,
              userSubscriptionEndDate: data.current_period_end * 1000,
              productId: data.plan.id,
              productType: this.productId
            };

            try {
              this.subscriptionService.setUserSubscription(userSubscription).subscribe(function (res) {
                _this7.sharedService.presentToast(res.message);

                _this7.sharedService.dismissLoader();

                _this7.navController.setDirection('root');

                _this7.getProfile().then(function () {
                  _this7.router.navigate(['/dashboard/lessons']);
                });
              }, function (error) {
                console.log(error);

                _this7.sharedService.dismissLoader();
              });
            } catch (error) {
              this.sharedService.dismissLoader();
              console.log(error);
            }
          }
        }, {
          key: "onSetDefaultCard",
          value: function onSetDefaultCard(paymentCard) {
            var _this8 = this;

            this.customerDetails.default_source = paymentCard.id;
            this.paymentCards.forEach(function (card) {
              card["default"] = card.id === _this8.customerDetails.default_source;
            });
          }
        }]);

        return StripePaymentPage;
      }();

      StripePaymentPage.ctorParameters = function () {
        return [{
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]
        }];
      };

      StripePaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-stripe-payment',
        template: _raw_loader_stripe_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stripe_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]])], StripePaymentPage);
      /***/
    },

    /***/
    "cDqi":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.scss ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cDqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kKgU":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kKgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isProcessing\" class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-top warning\">\n          <ion-card-content>\n            Your order Is being processed. Please DO NOT close the page or click the back or refresh buttons.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col\n        sizeXs=\"12\"\n        sizeSm=\"12\"\n        sizeMd=\"6\"\n        sizeLg=\"4\"\n        sizeXl=\"4\"\n        class=\"ion-no-padding ion-padding ion-align-self-center\"\n      >\n        <h1 class=\"ion-no-margin\">Payment options</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-no-padding ion-align-self-center\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\">\n          <ion-list-header mode=\"md\">\n            <ion-label>Credit / Debit Cards</ion-label>\n          </ion-list-header>\n          <ion-item\n            mode=\"md\"\n            *ngFor=\"let paymentCard of paymentCards | filterPaymentCardsByDate\"\n            (click)=\"onSetDefaultCard(paymentCard)\"\n          >\n            <ion-label> <span>xxxx-xxxx-xxxx-</span>{{ paymentCard.card.last4 }} </ion-label>\n            <ion-icon\n              *ngIf=\"paymentCard.default\"\n              mode=\"ios\"\n              color=\"success\"\n              name=\"checkmark-circle\"\n              size=\"large\"\n              slot=\"end\"\n            ></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-padding-start ion-align-self-center\">\n        <p (click)=\"onAddCard()\" class=\"pointer\">\n          <ion-icon id=\"add-card-icon\" name=\"add-circle-outline\"></ion-icon> ADD NEW CARD\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n      <ion-button\n        mode=\"ios\"\n        [disabled]=\"customerDetails === undefined\"\n        (click)=\"onProcessedToPayUsingStripe()\"\n        color=\"danger\"\n        shape=\"round\"\n        expand=\"block\"\n        >Process To Pay\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module-es5.js.map