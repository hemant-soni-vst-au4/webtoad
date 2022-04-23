(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-language-language-module"], {
    /***/
    "AVJD":
    /*!**********************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/language/language.page.ts ***!
      \**********************************************************************************/

    /*! exports provided: LanguagePage */

    /***/
    function AVJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
        return LanguagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./language.page.html */
      "V62d");
      /* harmony import */


      var _language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./language.page.scss */
      "Ymqz");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../global/global.service */
      "Nrpk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LanguagePage = /*#__PURE__*/function () {
        function LanguagePage(globalService, sharedService, alertController, onBoardingService, router, navController) {
          _classCallCheck(this, LanguagePage);

          this.globalService = globalService;
          this.sharedService = sharedService;
          this.alertController = alertController;
          this.onBoardingService = onBoardingService;
          this.router = router;
          this.navController = navController;
          this.subTitleLanguages = new Array();
          this.sharedService.gaTrackView('change Language Screen');
        }

        _createClass(LanguagePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserProfile();
          }
        }, {
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            var _this = this;

            try {
              this.sharedService.presentLoader('Please wait...');
              this.onBoardingService.getUserProfile().subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (res.data) {
                            this.profile = res.data;
                            this.getSubTitleLanguages();

                            if (this.profile.subTitleLanguage) {
                              this.getUserSubTitleLanguage(this.profile.subTitleLanguage);
                            }
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, function (error) {
                _this.sharedService.dismissLoader();

                console.log(error);
              });
            } catch (error) {
              this.sharedService.dismissLoader();
              console.log(error);
            }
          }
        }, {
          key: "getUserSubTitleLanguage",
          value: function getUserSubTitleLanguage(subTitleLanguage) {
            var _this2 = this;

            try {
              this.onBoardingService.getUserSubTitleLanguage(subTitleLanguage).subscribe(function (details) {
                _this2.selectedLanguage = details.data[0];

                _this2.subTitleLanguages.forEach(function (ele) {
                  if (ele._id === _this2.selectedLanguage._id) {
                    ele.checked = true;
                  } else {
                    ele.checked = false;
                  }
                });
              }, function (error) {
                console.log(error);
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "getSubTitleLanguages",
          value: function getSubTitleLanguages() {
            var _this3 = this;

            try {
              this.onBoardingService.getSubTitleLanguages().subscribe(function (res) {
                _this3.subTitleLanguages = res.data;

                _this3.subTitleLanguages.forEach(function (ele) {
                  ele.checked = false;
                });

                _this3.sharedService.dismissLoader();
              }, function (error) {
                console.log(error);

                _this3.sharedService.dismissLoader();
              });
            } catch (error) {
              this.sharedService.dismissLoader();
              console.log(error);
            }
          }
        }, {
          key: "selectLanguage",
          value: function selectLanguage(language) {
            var _this4 = this;

            this.isLanguageSelected = true;
            this.selectedLanguage = language;
            this.sharedService.gaTrackEvent('ChangeLanguage', this.selectedLanguage);

            try {
              this.sharedService.presentLoader('Please wait...');
              this.onBoardingService.setUserSubTitleLanguage({
                subTitleLanguageId: this.selectedLanguage._id
              }).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var alert;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.sharedService.dismissLoader();
                          _context2.next = 3;
                          return this.alertController.create({
                            message: res.message,
                            buttons: ['OK']
                          });

                        case 3:
                          alert = _context2.sent;
                          _context2.next = 6;
                          return alert.present();

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }, function (error) {
                _this4.sharedService.dismissLoader();

                console.log(error);
              });
            } catch (error) {
              console.log(error);
              this.sharedService.dismissLoader();
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/setting']);
          }
        }]);

        return LanguagePage;
      }();

      LanguagePage.ctorParameters = function () {
        return [{
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], LanguagePage);
      /***/
    },

    /***/
    "SUiO":
    /*!************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/language/language.module.ts ***!
      \************************************************************************************/

    /*! exports provided: LanguagePageModule */

    /***/
    function SUiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
        return LanguagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./language.page */
      "AVJD");

      var routes = [{
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]
      }];

      var LanguagePageModule = function LanguagePageModule() {
        _classCallCheck(this, LanguagePageModule);
      };

      LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]]
      })], LanguagePageModule);
      /***/
    },

    /***/
    "V62d":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/language/language.page.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V62d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\" *ngIf=\"subTitleLanguages.length\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <h1 class=\"ion-no-margin\"><strong>Language for Subtitles</strong></h1>\n            <p class=\"ion-margin-bottom\">Choose your language for translation</p>\n          </ion-col>\n        </ion-row>\n        <ion-radio-group [value]=\"selectedLanguage?._id\">\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\" *ngFor=\"let language of subTitleLanguages\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n              <ion-card class=\"ion-no-margin\" mode=\"ios\" (click)=\"selectLanguage(language)\">\n                <ion-card-content>\n                  <ion-item lines=\"none\">\n                    <ion-label>{{ language.languageName }}</ion-label>\n                    <ion-radio color=\"danger\" mode=\"md\" slot=\"start\" [value]=\"language._id\"> </ion-radio>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "Ymqz":
    /*!************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/language/language.page.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ymqz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('on-boarding-language-bg.png');\n}\nion-content ion-card {\n  --background: var(--color-white);\n  margin-bottom: 8px;\n}\nion-content ion-card ion-card-content {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0FBQ0Y7QUFDRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtBQUVOIiwiZmlsZSI6Imxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb24tYm9hcmRpbmctbGFuZ3VhZ2UtYmcucG5nJyk7XG5cbiAgaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-account-language-language-module-es5.js.map