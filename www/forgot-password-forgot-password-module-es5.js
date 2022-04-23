(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "2bN1":
    /*!*********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function bN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "l7ks");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "hxgU");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/shared.service */
      "zuHl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(formBuilder, sharedService, navController, authService, router, ngZone, alertController) {
          _classCallCheck(this, ForgotPasswordPage);

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

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPasswordForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')])]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.forgotPasswordForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.sharedService.gaTrackEvent('SubmitForgotPassword', 'ForgotPasswordScreen');
            this.isSubmitted = true;

            if (this.forgotPasswordForm.invalid) {
              return;
            }

            this.sharedService.presentLoader('Please wait...');
            var email = this.forgotPasswordForm.value.email.trim().toLowerCase();
            this.authService.forgotPassword({
              email: email
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.sharedService.dismissLoader();
                        _context.next = 3;
                        return this.alertController.create({
                          header: 'Check you mail.',
                          message: 'Password reset link has been sent!',
                          buttons: [{
                            text: 'OK',
                            handler: function handler() {
                              _this2.navController.setDirection('root');

                              _this2.ngZone.run(function () {
                                return _this2.router.navigate(['/login']).then();
                              });
                            }
                          }]
                        });

                      case 3:
                        alert = _context.sent;
                        _context.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              _this.sharedService.dismissLoader(); // this.sharedService.presentToast( error );

            });
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], ForgotPasswordPage);
      /***/
    },

    /***/
    "JgOp":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function JgOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]],
        providers: []
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "hxgU":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function hxgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".auth-form img {\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1mb3JtIHtcbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "l7ks":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l7ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"ion-padding h-100\">\n    <ion-row class=\"h-100 auth-form ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"6\"\n            sizeSm=\"6\"\n            sizeLg=\"3\"\n            sizeXl=\"3\"\n            sizeMd=\"3\"\n            class=\"ion-padding ion-align-self-center mb-45\"\n          >\n            <img src=\"../../assets/images/password.svg\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n            <h5><strong>Forgot your password?</strong></h5>\n            <p>\n              Don’t worry. Enter your email to receive your temporary email and password reset instructions.\n            </p>\n          </ion-col>\n        </ion-row>\n        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"submit()\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item\n                    mode=\"ios\"\n                    class=\"ion-no-padding auth-inputs\"\n                    [class.invalid]=\"!f.email.valid && (f.email.dirty || isSubmitted)\"\n                  >\n                    <ion-label position=\"floating\">Enter your email</ion-label>\n                    <ion-input\n                      email\n                      formControlName=\"email\"\n                      pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                      required\n                    >\n                    </ion-input>\n                  </ion-item>\n                  <ion-text color=\"danger\" *ngIf=\"!f.email.valid && (f.email.dirty || isSubmitted)\">\n                    <small>Please enter a valid email.</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-top\">\n                <ion-col size=\"12\">\n                  <ion-button\n                    mode=\"ios\"\n                    color=\"danger\"\n                    shape=\"round\"\n                    expand=\"block\"\n                    type=\"submit\"\n                    [disabled]=\"forgotPasswordForm.invalid\"\n                  >\n                    SEND</ion-button\n                  >\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map