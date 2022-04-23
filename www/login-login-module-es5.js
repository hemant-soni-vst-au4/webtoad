(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/shared.service */
      "zuHl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jwt-decode */
      "BOF4");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, sharedService, navController, authService, router, platform) {
          var _this = this;

          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.sharedService = sharedService;
          this.navController = navController;
          this.authService = authService;
          this.router = router;
          this.platform = platform;
          this.isSubmitted = false;
          this.type = 'password';
          this.showPass = false;
          this.sharedService.gaTrackView('LoginScreen');
          this.sharedService.getDeviceInfo().then(function (info) {
            _this.userPlatform = "".concat(info.manufacturer, " ( ").concat(info.platform, " ) ").concat(info.model, " ( ").concat(info.osVersion, " ) - ").concat(info.appVersion);
          });
        }

        _createClass(LoginPage, [{
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            if (this.loginForm.valid && event.key === 'Enter') {
              this.login();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// setTimeout(() => this.emailInput.setFocus(), 300)
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.showPass = !this.showPass;

            if (this.showPass) {
              this.type = 'text';
            } else {
              this.type = 'password';
            }
          }
        }, {
          key: "trimEmail",
          value: function trimEmail(event) {
            this.loginForm.patchValue({
              email: event.target.value.trim()
            });
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.login();
            }, 300);
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user, res, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isSubmitted = true;

                      if (!this.loginForm.invalid) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return");

                    case 3:
                      this.sharedService.gaTrackEvent('SignInButton', 'SignInScreen');
                      this.sharedService.presentLoader('Please wait...');
                      user = this.loginForm.value;
                      user.email = this.loginForm.value.email.trim().toLowerCase();
                      user.loginType = 'Email';
                      user.userPlatform = this.userPlatform;
                      _context.prev = 9;
                      _context.next = 12;
                      return this.authService.login(user).toPromise();

                    case 12:
                      res = _context.sent;

                      if (!res.token) {
                        _context.next = 24;
                        break;
                      }

                      data = jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(res.token); // console.log({data})

                      this.sharedService.setNativeStorage('isAdmin', !!data.isAdmin);
                      this.sharedService.setNativeStorage('isOnBoarding', true);
                      _context.next = 19;
                      return this.sharedService.setNativeStorage('token', res.token);

                    case 19:
                      this.authService.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](res.token);
                      this.authService.authSubject.next(true);
                      this.sharedService.presentToast('Login successfully.');
                      this.navController.setDirection('root');
                      this.router.navigate(['/dashboard']);

                    case 24:
                      _context.next = 29;
                      break;

                    case 26:
                      _context.prev = 26;
                      _context.t0 = _context["catch"](9);
                      this.sharedService.presentAlert('Alert', _context.t0.error);

                    case 29:
                      this.sharedService.dismissLoader();

                    case 30:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[9, 26]]);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }];
      };

      LoginPage.propDecorators = {
        emailInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['emailInput']
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['document:keypress', ['$event']]
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]])], LoginPage);
      /***/
    },

    /***/
    "BOF4":
    /*!**********************************************!*\
      !*** ./node_modules/jwt-decode/lib/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function BOF4(module, exports, __webpack_require__) {
      "use strict";

      var base64_url_decode = __webpack_require__(
      /*! ./base64_url_decode */
      "evrj");

      function InvalidTokenError(message) {
        this.message = message;
      }

      InvalidTokenError.prototype = new Error();
      InvalidTokenError.prototype.name = 'InvalidTokenError';

      module.exports = function (token, options) {
        if (typeof token !== 'string') {
          throw new InvalidTokenError('Invalid token specified');
        }

        options = options || {};
        var pos = options.header === true ? 0 : 1;

        try {
          return JSON.parse(base64_url_decode(token.split('.')[pos]));
        } catch (e) {
          throw new InvalidTokenError('Invalid token specified: ' + e.message);
        }
      };

      module.exports.InvalidTokenError = InvalidTokenError;
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"ion-padding h-100\">\n    <ion-row class=\"h-100 auth-form ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- <ion-col sizeXs=\"4\" sizeSm=\"4\" sizeLg=\"2\" sizeXl=\"1\" sizeMd=\"2\" class=\"ion-align-self-center ion-padding\">\n            <img src=\"/assets/images/logo.png\">\n          </ion-col> -->\n          <ion-col size-xs=\"8\" size-sm=\"8\" size-lg=\"4\" size-md=\"4\" size-xl=\"2\" class=\"ion-align-self-center\">\n            <img src=\"../../assets/images/Speaky-Peaky-Logo.png\" />\n          </ion-col>\n        </ion-row>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"5\" sizeXl=\"4\" sizeMd=\"6\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item mode=\"ios\" class=\"ion-no-padding auth-inputs\"\n                    [class.invalid]=\"!f.email.valid && (f.email.dirty || isSubmitted)\">\n                    <ion-label position=\"floating\">Email</ion-label>\n                    <ion-input #emailInput autofocus='true' email (ionBlur)=\"trimEmail($event)\" formControlName=\"email\"\n                      pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                    </ion-input>\n                  </ion-item>\n                  <ion-text color=\"danger\" *ngIf=\"!f.email.valid && (f.email.dirty || isSubmitted)\">\n                    <small>Please enter a valid email.</small>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item mode=\"ios\" class=\"ion-no-padding auth-inputs\"\n                    [class.invalid]=\"!f.password.valid && (f.password.dirty || isSubmitted)\">\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input [type]=\"!showPass ? 'password' : 'text'\" formControlName=\"password\" required>\n                    </ion-input>\n                    <ion-icon class=\"pwd-btn\" *ngIf=\"showPass === false; else viewPassword\" slot=\"end\" name=\"eye-off\"\n                      (click)=\"showPassword()\"></ion-icon>\n                    <ng-template #viewPassword>\n                      <ion-icon class=\"pwd-btn\" slot=\"end\" name=\"eye\" (click)=\"showPassword()\"></ion-icon>\n                    </ng-template>\n                  </ion-item>\n                  <ion-text color=\"danger\" *ngIf=\"!f.password.valid && (f.password.dirty || isSubmitted)\">\n                    <small>Please enter a password.</small>\n                  </ion-text>\n                  <p>\n                    <a class=\"ion-text-right c-orange\" [routerLink]=\"['/forgot-password']\"\n                      routerLinkActive=\"router-link-active\">Forgot Password?</a>\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-top\">\n                <ion-col size=\"12\">\n                  <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" type=\"button\"\n                    (click)=\"handleSubmit()\">\n                    <strong>SIGN IN</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <p class=\"ion-text-center ion-no-margin\">\n                    Don’t have an account?\n                    <a class=\"c-orange\" [routerLink]=\"['/sign-up']\" routerLinkActive=\"router-link-active\">\n                      Sign up\n                    </a>\n                    here.\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }];

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        providers: []
      })], LoginPageModule);
      /***/
    },

    /***/
    "evrj":
    /*!**********************************************************!*\
      !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function evrj(module, exports, __webpack_require__) {
      var atob = __webpack_require__(
      /*! ./atob */
      "m4GZ");

      function b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
          var code = p.charCodeAt(0).toString(16).toUpperCase();

          if (code.length < 2) {
            code = '0' + code;
          }

          return '%' + code;
        }));
      }

      module.exports = function (str) {
        var output = str.replace(/-/g, "+").replace(/_/g, "/");

        switch (output.length % 4) {
          case 0:
            break;

          case 2:
            output += "==";
            break;

          case 3:
            output += "=";
            break;

          default:
            throw "Illegal base64url string!";
        }

        try {
          return b64DecodeUnicode(output);
        } catch (err) {
          return atob(output);
        }
      };
      /***/

    },

    /***/
    "m4GZ":
    /*!*********************************************!*\
      !*** ./node_modules/jwt-decode/lib/atob.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function m4GZ(module, exports) {
      /**
       * The code was extracted from:
       * https://github.com/davidchambers/Base64.js
       */
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

      function InvalidCharacterError(message) {
        this.message = message;
      }

      InvalidCharacterError.prototype = new Error();
      InvalidCharacterError.prototype.name = 'InvalidCharacterError';

      function polyfill(input) {
        var str = String(input).replace(/=+$/, '');

        if (str.length % 4 == 1) {
          throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
        }

        for ( // initialize result and counters
        var bc = 0, bs, buffer, idx = 0, output = ''; // get next character
        buffer = str.charAt(idx++); // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
          // try to find character in table (0-63, not found => -1)
          buffer = chars.indexOf(buffer);
        }

        return output;
      }

      module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map