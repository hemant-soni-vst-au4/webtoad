(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-edit-name-edit-name-module"], {
    /***/
    "BdSh":
    /*!**************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-name/edit-name.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: EditNamePageModule */

    /***/
    function BdSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditNamePageModule", function () {
        return EditNamePageModule;
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


      var _edit_name_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-name.page */
      "WXEg");

      var routes = [{
        path: '',
        component: _edit_name_page__WEBPACK_IMPORTED_MODULE_7__["EditNamePage"]
      }];

      var EditNamePageModule = function EditNamePageModule() {
        _classCallCheck(this, EditNamePageModule);
      };

      EditNamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_edit_name_page__WEBPACK_IMPORTED_MODULE_7__["EditNamePage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]]
      })], EditNamePageModule);
      /***/
    },

    /***/
    "WXEg":
    /*!************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-name/edit-name.page.ts ***!
      \************************************************************************************/

    /*! exports provided: EditNamePage */

    /***/
    function WXEg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditNamePage", function () {
        return EditNamePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_name_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-name.page.html */
      "jFoA");
      /* harmony import */


      var _edit_name_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-name.page.scss */
      "wuFk");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/shared.service */
      "zuHl");
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


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EditNamePage = /*#__PURE__*/function () {
        function EditNamePage(formBuilder, router, navController, onBoardingService, sharedService) {
          _classCallCheck(this, EditNamePage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.navController = navController;
          this.onBoardingService = onBoardingService;
          this.sharedService = sharedService;
          this.isSubmitted = false;
          this.sharedService.gaTrackView('Edit Name Screen');
        }

        _createClass(EditNamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userForm = this.formBuilder.group({
              fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userForm.controls;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserProfile();
          }
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
                          this.sharedService.dismissLoader();

                          if (res.data) {
                            this.userForm.get('fullName').setValue(res.data.fullName);
                            this.userForm.get('_id').setValue(res.data._id);
                          }

                        case 2:
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
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.sharedService.gaTrackEvent('SaveEditName', 'EditNameScreen');
            this.isSubmitted = true;

            if (this.userForm.invalid) {
              return;
            }

            this.userForm.value.fullName = this.userForm.value.fullName.toLowerCase();

            try {
              this.sharedService.presentLoader('Please wait...');
              this.onBoardingService.updateUserName(this.userForm.value).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.sharedService.dismissLoader();
                          this.sharedService.presentToast(res.message);
                          this.back();

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }, function (error) {
                console.log(error);

                _this2.sharedService.dismissLoader();
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
            this.router.navigate(['/account']);
          }
        }]);

        return EditNamePage;
      }();

      EditNamePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      };

      EditNamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-edit-name',
        template: _raw_loader_edit_name_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_name_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_7__["OnBoardingService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])], EditNamePage);
      /***/
    },

    /***/
    "jFoA":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/edit-name/edit-name.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jFoA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n        <h1 class=\"ion-no-margin\"><strong>Edit Name</strong></h1>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-item\n            mode=\"ios\"\n            class=\"ion-no-padding auth-inputs\"\n            [class.invalid]=\"!f.fullName.valid && (f.fullName.touched || f.fullName.dirty || isSubmitted)\"\n          >\n            <ion-label position=\"floating\">User name</ion-label>\n            <ion-input type=\"text\" formControlName=\"fullName\" required> </ion-input>\n          </ion-item>\n          <ion-text\n            color=\"danger\"\n            *ngIf=\"!f.fullName.valid && (f.fullName.touched || f.fullName.dirty || isSubmitted) && f.fullName.errors\"\n          >\n            <small *ngIf=\"f.fullName.errors.required\">User name is required</small>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\" type=\"submit\"\n            >Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"medium\" fill=\"outline\" shape=\"round\" expand=\"block\" (click)=\"back()\"\n            >Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "wuFk":
    /*!**************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-name/edit-name.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function wuFk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW5hbWUucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-account-edit-name-edit-name-module-es5.js.map