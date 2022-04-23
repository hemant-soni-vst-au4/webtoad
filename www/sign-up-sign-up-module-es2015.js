(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "h2xV":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "kEuc":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "v2PJ");







const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"],
    },
];
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]],
        providers: [],
    })
], SignUpPageModule);



/***/ }),

/***/ "mydc":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"ion-padding h-100\">\n    <ion-row class=\"h-100 auth-form ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- <ion-col sizeXs=\"4\" sizeSm=\"4\" sizeLg=\"2\" sizeXl=\"1\" sizeMd=\"2\" class=\"ion-padding ion-align-self-center\">\n            <img src=\"/assets/images/logo.png\">\n          </ion-col> -->\n          <ion-col size-xs=\"8\" size-sm=\"8\" size-lg=\"4\" size-md=\"4\" size-xl=\"2\" class=\"ion-align-self-center\">\n            <img src=\"../../assets/images/Speaky-Peaky-Logo.png\" />\n          </ion-col>\n        </ion-row>\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"auth-inputs ion-no-padding\"\n                    [class.invalid]=\"!f.fullName.valid && (f.fullName.touched || f.fullName.dirty || isSubmitted)\"\n                  >\n                    <ion-label position=\"floating\">Name</ion-label>\n                    <ion-input type=\"text\" formControlName=\"fullName\" required></ion-input>\n                  </ion-item>\n                  <ion-text\n                    color=\"danger\"\n                    *ngIf=\"\n                      !f.fullName.valid && (f.fullName.touched || f.fullName.dirty || isSubmitted) && f.fullName.errors\n                    \"\n                  >\n                    <small *ngIf=\"f.fullName.errors.required\">Name is required</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"auth-inputs ion-no-padding\"\n                    [class.invalid]=\"!f.email.valid && (f.email.touched || f.email.dirty || isSubmitted)\"\n                  >\n                    <ion-label position=\"floating\">Email</ion-label>\n                    <ion-input\n                      email\n                      (ionBlur)=\"trimEmail($event, 'email')\"\n                      formControlName=\"email\"\n                      pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                      required\n                    ></ion-input>\n                  </ion-item>\n                  <ion-text\n                    color=\"danger\"\n                    *ngIf=\"!f.email.valid && (f.email.touched || f.email.dirty || isSubmitted) && f.email.errors\"\n                  >\n                    <small *ngIf=\"f.email.errors.required\">Email is required</small>\n                    <small *ngIf=\"f.email.errors.email\">Email must be a valid email address</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"auth-inputs ion-no-padding\"\n                    [class.invalid]=\"\n                      !f.confirmEmail.valid && (f.confirmEmail.touched || f.confirmEmail.dirty || isSubmitted)\n                    \"\n                  >\n                    <ion-label position=\"floating\">Confirm Email</ion-label>\n                    <ion-input\n                      email\n                      (ionBlur)=\"trimEmail($event, 'confirmEmail')\"\n                      formControlName=\"confirmEmail\"\n                      pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                      required\n                    ></ion-input>\n                  </ion-item>\n\n                  <ion-text\n                    color=\"danger\"\n                    *ngIf=\"\n                      !f.confirmEmail.valid &&\n                      (f.confirmEmail.touched || f.confirmEmail.dirty || isSubmitted) &&\n                      f.confirmEmail.errors\n                    \"\n                  >\n                    <small *ngIf=\"f.confirmEmail.errors.mustMatch\">Confirm email must match</small>\n                    <small *ngIf=\"f.confirmEmail.errors.required\">Confirm email is required</small>\n                    <small *ngIf=\"f.confirmEmail.errors.email\">Confirm email must be a valid email address</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-bottom\">\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"auth-inputs ion-no-padding\"\n                    [class.invalid]=\"!f.password.valid && (f.password.touched || f.password.dirty || isSubmitted)\"\n                  >\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input [type]=\"!showPass ? 'password' : 'text'\" formControlName=\"password\" required>\n                    </ion-input>\n                    <ion-icon\n                      *ngIf=\"showPass === false; else viewPassword\"\n                      slot=\"end\"\n                      class=\"pwd-btn\"\n                      name=\"eye-off\"\n                      (click)=\"showPassword()\"\n                    ></ion-icon>\n                    <ng-template #viewPassword>\n                      <ion-icon class=\"pwd-btn\" slot=\"end\" name=\"eye\" (click)=\"showPassword()\"></ion-icon>\n                    </ng-template>\n                  </ion-item>\n                  <ion-text color=\"danger\" *ngIf=\"!f.password.valid && (f.password.dirty || isSubmitted)\">\n                    <small>Please enter a password.</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"termsOfUse\">\n                <ion-col size=\"12\">\n                  <ion-checkbox color=\"danger\" mode=\"md\" formControlName=\"termsOfUse\" required> </ion-checkbox>\n                  <ion-label>\n                    <small\n                      >I agree to the\n                      <a class=\"c-orange\" href=\"https://www.newsite.speakypeaky.com/terms-and-conditions/\" target=\"_blank\">\n                        Terms of Use.\n                      </a>\n                    </small>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"termsOfUse\">\n                <ion-col size=\"12\">\n                  <ion-checkbox color=\"danger\" mode=\"md\" formControlName=\"privacyPolicy\" required> </ion-checkbox>\n\n                  <ion-label>\n                    <small\n                      >I agree to the\n                      <a class=\"c-orange\" href=\"https://www.newsite.speakypeaky.com/privacypolicy/\" target=\"_blank\">\n                        Privacy Policy.\n                      </a>\n                    </small>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-top\">\n                <ion-col size=\"12\">\n                  <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" type=\"submit\">\n                    <strong>SIGN UP</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <p class=\"ion-text-center ion-no-margin\">\n                    Already have an account?\n                    <a class=\"c-orange\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">\n                      Login\n                    </a>\n                    here.\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "p7nS":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-checkbox {\n  margin-right: 16px;\n  vertical-align: middle;\n}\n\n.termsOfUse {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6InNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRlcm1zT2ZVc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "v2PJ":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.page.html */ "mydc");
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.page.scss */ "p7nS");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shared.service */ "zuHl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "h2xV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











let SignUpPage = class SignUpPage {
    constructor(formBuilder, sharedService, navController, authService, router) {
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.navController = navController;
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
        this.type = 'password';
        this.showPass = false;
        this.sharedService.gaTrackView('SignUpScreen');
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'),
                ]),
            ],
            confirmEmail: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'),
                ]),
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            termsOfUse: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            privacyPolicy: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_9__["MustMatch"])('email', 'confirmEmail'),
        });
    }
    get f() {
        return this.signUpForm.controls;
    }
    trimEmail(event, type) {
        if (type === 'email') {
            this.signUpForm.patchValue({
                email: event.target.value.trim(),
            });
        }
        else {
            this.signUpForm.patchValue({
                confirmEmail: event.target.value.trim(),
            });
        }
    }
    showPassword() {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sharedService.gaTrackEvent('SignUpButton', 'SignUpScreen');
            this.isSubmitted = true;
            if (this.signUpForm.invalid) {
                return;
            }
            if (!this.signUpForm.value.termsOfUse) {
                this.sharedService.presentToast('You must agree the Terms of Use and The Privacy Policy to sign up.');
                return;
            }
            if (!this.signUpForm.value.privacyPolicy) {
                this.sharedService.presentToast('You must agree the Terms of Use and The Privacy Policy to sign up.');
                return;
            }
            this.sharedService.presentLoader('Please wait...');
            const user = this.signUpForm.value;
            user.email = this.signUpForm.value.email.trim();
            user.fullName = this.signUpForm.value.fullName.trim();
            user.loginType = 'Email';
            this.sharedService.removeNativeStorage('reminder');
            this.sharedService.setNativeStorage('isHelpModeDone', false);
            this.sharedService.setNativeStorage('isHelpScreenForDictationStepDone', false);
            this.sharedService.setNativeStorage('isHelpScreenForReviewStepDone', false);
            this.sharedService.setNativeStorage('isHelpScreenForPracticeStepDone', false);
            this.sharedService.setNativeStorage('isTodayLessonHelpModeDone', false);
            this.sharedService.setNativeStorage('isReviewHelpModeDone', false);
            try {
                const res = yield this.authService.signUp(user).toPromise();
                if (res) {
                    const loginRes = yield this.authService
                        .login({
                        email: user.email,
                        password: user.password,
                        loginType: user.loginType,
                    })
                        .toPromise();
                    if (loginRes.token) {
                        yield this.sharedService.setNativeStorage('token', loginRes.token);
                        this.authService.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](loginRes.token);
                        this.authService.authSubject.next(true);
                        this.navController.setDirection('root');
                        this.router.navigate(['/on-boarding-level']);
                    }
                }
            }
            catch (err) {
                // console.error(err)
                this.sharedService.presentAlert('Alert', err.error);
            }
            this.sharedService.dismissLoader();
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map