(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "2bN1":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "l7ks");
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss */ "hxgU");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shared.service */ "zuHl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, sharedService, navController, authService, router, ngZone, alertController) {
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.navController = navController;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.alertController = alertController;
        this.isSubmitted = false;
        this.sharedService.gaTrackView('ForgotPasswordScreen');
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'),
                ]),
            ],
        });
    }
    get f() {
        return this.forgotPasswordForm.controls;
    }
    submit() {
        this.sharedService.gaTrackEvent('SubmitForgotPassword', 'ForgotPasswordScreen');
        this.isSubmitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.sharedService.presentLoader('Please wait...');
        const email = this.forgotPasswordForm.value.email.trim().toLowerCase();
        this.authService.forgotPassword({ email }).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sharedService.dismissLoader();
            const alert = yield this.alertController.create({
                header: 'Check you mail.',
                message: 'Password reset link has been sent!',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.navController.setDirection('root');
                            this.ngZone.run(() => this.router.navigate(['/login']).then());
                        },
                    },
                ],
            });
            yield alert.present();
        }), (error) => {
            this.sharedService.dismissLoader();
            // this.sharedService.presentToast( error );
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
], ForgotPasswordPage);



/***/ }),

/***/ "JgOp":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");







const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"],
    },
];
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]],
        providers: [],
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "hxgU":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth-form img {\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1mb3JtIHtcbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "l7ks":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"ion-padding h-100\">\n    <ion-row class=\"h-100 auth-form ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"6\"\n            sizeSm=\"6\"\n            sizeLg=\"3\"\n            sizeXl=\"3\"\n            sizeMd=\"3\"\n            class=\"ion-padding ion-align-self-center mb-45\"\n          >\n            <img src=\"../../assets/images/password.svg\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n            <h5><strong>Forgot your password?</strong></h5>\n            <p>\n              Don’t worry. Enter your email to receive your temporary email and password reset instructions.\n            </p>\n          </ion-col>\n        </ion-row>\n        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"submit()\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"ion-no-padding auth-inputs\"\n                    [class.invalid]=\"!f.email.valid && (f.email.dirty || isSubmitted)\"\n                  >\n                    <ion-label position=\"floating\">Enter your email</ion-label>\n                    <ion-input\n                      email\n                      formControlName=\"email\"\n                      pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                      required\n                    >\n                    </ion-input>\n                  </ion-item>\n                  <ion-text color=\"danger\" *ngIf=\"!f.email.valid && (f.email.dirty || isSubmitted)\">\n                    <small>Please enter a valid email.</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-top\">\n                <ion-col size=\"12\">\n                  <ion-button\n                    mode=\"ios\"\n                    color=\"danger\"\n                    shape=\"round\"\n                    expand=\"block\"\n                    type=\"submit\"\n                    [disabled]=\"forgotPasswordForm.invalid\"\n                  >\n                    SEND</ion-button\n                  >\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map