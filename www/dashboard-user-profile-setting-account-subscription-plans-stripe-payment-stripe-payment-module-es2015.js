(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module"],{

/***/ "5mFe":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "MFqa");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card.component.scss */ "cDqi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ "AytR");









let AddCardComponent = class AddCardComponent {
    constructor(sharedService, subscriptionService, modalController, onBoardingService, navParams) {
        this.sharedService = sharedService;
        this.subscriptionService = subscriptionService;
        this.modalController = modalController;
        this.onBoardingService = onBoardingService;
        this.navParams = navParams;
        this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stripePublicKey);
        this.onBoardingService
            .getUserProfile()
            .toPromise()
            .then((res) => {
            const profile = res.data; //this.navParams.get('profile')
            const stripeCustomerId = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])()
                ? profile.stripeSandBoxCustomerId
                : profile.stripeLiveCustomerId;
            if (stripeCustomerId === undefined) {
                this.dismiss();
            }
            this.stripeCustomerId = stripeCustomerId;
        })
            .catch((err) => {
            this.dismiss();
        });
    }
    ngOnInit() {
        this.setupStripe();
    }
    setupStripe() {
        const elements = this.stripe.elements();
        const style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        };
        this.card = elements.create('card', { style, hidePostalCode: true });
        // console.log( this.card );
        this.card.mount('#card-element');
        this.card.addEventListener('change', (event) => {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        const form = document.getElementById('payment-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // console.log( event );
            this.sharedService.presentLoader('Please wait...');
            // console.log( this.card );
            this.stripe.createSource(this.card).then((result) => {
                if (result.error) {
                    const errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                    this.sharedService.dismissLoader();
                }
                else {
                    this.attachSourceToCustomer(result.source.id);
                }
            });
        });
    }
    attachSourceToCustomer(sourceId) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const stripeCustomerId = this.stripeCustomerId;
                if (stripeCustomerId === undefined) {
                    return;
                }
                const res = yield this.subscriptionService
                    .attachSourceToCustomer({ customerId: stripeCustomerId, token: sourceId })
                    .toPromise();
                this.sharedService.dismissLoader();
                this.dismiss();
            }
            catch (error) {
                console.log(error);
                this.sharedService.dismissLoader();
                this.sharedService.presentToast((_b = (_a = error.err) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.message);
            }
            finally {
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
AddCardComponent.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
AddCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
], AddCardComponent);



/***/ }),

/***/ "BZ4+":
/*!************************************************************!*\
  !*** ./src/app/pipes/filter-payment-cards-by-date.pipe.ts ***!
  \************************************************************/
/*! exports provided: FilterPaymentCardsByDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPaymentCardsByDatePipe", function() { return FilterPaymentCardsByDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FilterPaymentCardsByDatePipe = class FilterPaymentCardsByDatePipe {
    transform(value, args) {
        if (value.length) {
            return value.sort((a, b) => {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return a.created - b.created;
            });
        }
        else {
            return null;
        }
    }
};
FilterPaymentCardsByDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterPaymentCardsByDate',
    })
], FilterPaymentCardsByDatePipe);



/***/ }),

/***/ "F09a":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header {\n  --background: lightgray;\n}\n\nion-item ion-label span {\n  font-size: 20px;\n}\n\n#add-card-icon {\n  font-size: 25px;\n  margin-right: 5px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.warning {\n  --background: #bad9b5;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0cmlwZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoic3RyaXBlLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5pb24taXRlbSB7XG4gIGlvbi1sYWJlbCB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG4jYWRkLWNhcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndhcm5pbmcge1xuICAtLWJhY2tncm91bmQ6ICNiYWQ5YjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */");

/***/ }),

/***/ "MFqa":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Add New Card\n    </ion-title>\n    <ion-buttons slot=\"end\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" mode=\"ios\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form action=\"/\" method=\"post\" id=\"payment-form\">\n    <ion-grid>\n      <ion-row class=\"ion-margin-top ion-margin-bottom ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"10\" sizeXl=\"10\" class=\"ion-align-self-center\">\n          <div class=\"form-row\">\n            <div id=\"card-element\">\n              <!-- a Stripe Element will be inserted here. -->\n            </div>\n            <!-- Used to display Element errors -->\n            <div class=\"c-red\" id=\"card-errors\" role=\"alert\"></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeLg=\"6\" sizeXl=\"6\" class=\"ion-align-self-center\">\n          <ion-button type=\"submit\" mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\"\n            >Add Card\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "PABW":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: StripePaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentPageModule", function() { return StripePaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_filter_payment_cards_by_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../pipes/filter-payment-cards-by-date.pipe */ "BZ4+");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card/add-card.component */ "5mFe");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stripe-payment.page */ "UNr2");











const routes = [
    {
        path: '',
        component: _stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__["StripePaymentPage"],
    },
];
let StripePaymentPageModule = class StripePaymentPageModule {
};
StripePaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
        ],
        declarations: [_stripe_payment_page__WEBPACK_IMPORTED_MODULE_10__["StripePaymentPage"], _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__["AddCardComponent"], _pipes_filter_payment_cards_by_date_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPaymentCardsByDatePipe"]],
        entryComponents: [_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__["AddCardComponent"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"]],
    })
], StripePaymentPageModule);



/***/ }),

/***/ "UNr2":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: StripePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentPage", function() { return StripePaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stripe_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stripe-payment.page.html */ "kKgU");
/* harmony import */ var _stripe_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripe-payment.page.scss */ "F09a");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card/add-card.component */ "5mFe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../services/subscription.service */ "HtUY");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "AytR");











let StripePaymentPage = class StripePaymentPage {
    constructor(sharedService, onBoardingService, navController, router, route, modalController, loadingController, subscriptionService) {
        this.sharedService = sharedService;
        this.onBoardingService = onBoardingService;
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.subscriptionService = subscriptionService;
        // Add Stripe Public Key
        this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripePublicKey);
        this.paymentCards = [];
        this.customerDetails = undefined;
        this.isDevelopmentMode = false;
        this.isProcessing = false;
    }
    ngOnInit() {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["isDevMode"])()) {
            this.isDevelopmentMode = true;
        }
        else {
            this.isDevelopmentMode = false;
        }
        console.log('this.isDevelopmentMode', this.isDevelopmentMode);
        this.route.params.subscribe((params) => {
            if (params.productId) {
                this.productId = params.productId;
            }
        }, (error) => {
            console.log(error);
        });
        this.getCustomer();
    }
    getProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.onBoardingService.getUserProfile(true).toPromise();
                return res.data;
            }
            catch (_a) { }
        });
    }
    getCustomer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sharedService.presentLoader('Please wait...');
                const profile = yield this.getProfile();
                if (profile) {
                    this.profile = profile;
                    const stripeCustomerId = this.isDevelopmentMode
                        ? profile.stripeSandBoxCustomerId
                        : profile.stripeLiveCustomerId;
                    if (!stripeCustomerId) {
                        yield this.createCustomer(profile.email);
                    }
                    else {
                        yield this.getCustomerDetails(stripeCustomerId);
                    }
                }
            }
            catch (error) {
                this.sharedService.dismissLoader();
                console.log(error);
            }
        });
    }
    createCustomer(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('createCustomer', email);
            try {
                const res = yield this.subscriptionService.createStripeCustomer({ email }).toPromise();
                this.setStripeCustomerId(res.data.id);
            }
            catch (error) {
                console.log(error);
                this.sharedService.presentToast(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
    setStripeCustomerId(stripeCustomerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const data = {
                    customerId: stripeCustomerId,
                    type: this.isDevelopmentMode ? 'sandbox' : 'production',
                };
                yield this.subscriptionService.setStripeCustomerId(data).toPromise();
                const profile = yield this.getProfile();
                this.profile = profile;
            }
            catch (error) {
                console.log(error);
                this.sharedService.presentToast(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
    getAllPaymentMethods() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const profile = yield this.getProfile();
                const stripeCustomerId = this.isDevelopmentMode
                    ? profile.stripeSandBoxCustomerId
                    : profile.stripeLiveCustomerId;
                const data = {
                    type: 'card',
                    customerId: stripeCustomerId,
                };
                const res = yield this.subscriptionService
                    .getCustomerAllPaymentMethods(data)
                    .toPromise();
                console.log('getAllPaymentMethods', res);
                if (res.data.data.length) {
                    this.paymentCards = res.data.data;
                    console.log('getCustomerDetails');
                    const customerDetails = yield this.subscriptionService
                        .getCustomerDetails(stripeCustomerId)
                        .toPromise();
                    console.log({ customerDetails });
                    this.customerDetails = customerDetails.data;
                    this.paymentCards.map((card) => {
                        if (card.id === this.customerDetails.default_source) {
                            card.default = true;
                        }
                        else {
                            card.default = false;
                        }
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
    getCustomerDetails(customerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.subscriptionService
                    .getCustomerDetails(customerId)
                    .toPromise();
                this.customerDetails = res.data;
                this.getAllPaymentMethods();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.sharedService.dismissLoader();
            }
        });
    }
    onAddCard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__["AddCardComponent"],
                componentProps: { profile: this.profile },
                mode: 'md',
            });
            yield modal.present();
            yield modal
                .onDidDismiss()
                .then(() => {
                this.getAllPaymentMethods();
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
    onProcessedToPayUsingStripe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.customerDetails.default_source === null || this.productId === undefined) {
                this.sharedService.presentToast('Please enter card details');
                return;
            }
            try {
                const data = {
                    planId: this.productId,
                    default_source: this.customerDetails.default_source,
                    customerId: this.customerDetails.id,
                    noCoupon: true,
                };
                this.isProcessing = true;
                this.sharedService.presentLoader('Please wait...');
                this.subscriptionService.processedToPayUsingStripe(data).subscribe((res) => {
                    this.setUserSubscription(res.data);
                }, (error) => {
                    console.log(error);
                    this.sharedService.dismissLoader();
                    this.isProcessing = true;
                    this.sharedService.presentToast(error.err.rawType);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/subscriptionplans']);
    }
    setUserSubscription(data) {
        const userSubscription = {
            type: 'Stripe',
            orderId: data.id,
            packageName: 'com.summer.startenglishnow',
            userSubscriptionStartDate: data.current_period_start * 1000,
            userSubscriptionEndDate: data.current_period_end * 1000,
            productId: data.plan.id,
            productType: this.productId,
        };
        try {
            this.subscriptionService.setUserSubscription(userSubscription).subscribe((res) => {
                this.sharedService.presentToast(res.message);
                this.sharedService.dismissLoader();
                this.navController.setDirection('root');
                this.getProfile().then(() => {
                    this.router.navigate(['/dashboard/lessons']);
                });
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
    onSetDefaultCard(paymentCard) {
        this.customerDetails.default_source = paymentCard.id;
        this.paymentCards.forEach((card) => {
            card.default = card.id === this.customerDetails.default_source;
        });
    }
};
StripePaymentPage.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"] }
];
StripePaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-stripe-payment',
        template: _raw_loader_stripe_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stripe_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]])
], StripePaymentPage);



/***/ }),

/***/ "cDqi":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/add-card/add-card.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kKgU":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.page.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isProcessing\" class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-top warning\">\n          <ion-card-content>\n            Your order Is being processed. Please DO NOT close the page or click the back or refresh buttons.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col\n        sizeXs=\"12\"\n        sizeSm=\"12\"\n        sizeMd=\"6\"\n        sizeLg=\"4\"\n        sizeXl=\"4\"\n        class=\"ion-no-padding ion-padding ion-align-self-center\"\n      >\n        <h1 class=\"ion-no-margin\">Payment options</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-no-padding ion-align-self-center\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\">\n          <ion-list-header mode=\"md\">\n            <ion-label>Credit / Debit Cards</ion-label>\n          </ion-list-header>\n          <ion-item\n            mode=\"md\"\n            *ngFor=\"let paymentCard of paymentCards | filterPaymentCardsByDate\"\n            (click)=\"onSetDefaultCard(paymentCard)\"\n          >\n            <ion-label> <span>xxxx-xxxx-xxxx-</span>{{ paymentCard.card.last4 }} </ion-label>\n            <ion-icon\n              *ngIf=\"paymentCard.default\"\n              mode=\"ios\"\n              color=\"success\"\n              name=\"checkmark-circle\"\n              size=\"large\"\n              slot=\"end\"\n            ></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-padding-start ion-align-self-center\">\n        <p (click)=\"onAddCard()\" class=\"pointer\">\n          <ion-icon id=\"add-card-icon\" name=\"add-circle-outline\"></ion-icon> ADD NEW CARD\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n      <ion-button\n        mode=\"ios\"\n        [disabled]=\"customerDetails === undefined\"\n        (click)=\"onProcessedToPayUsingStripe()\"\n        color=\"danger\"\n        shape=\"round\"\n        expand=\"block\"\n        >Process To Pay\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module-es2015.js.map