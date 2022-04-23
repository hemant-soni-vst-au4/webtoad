(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-app-info-app-info-module"], {
    /***/
    "HoKA":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/app-info/app-info.page.ts ***!
      \**************************************************************************/

    /*! exports provided: AppInfoPage */

    /***/
    function HoKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInfoPage", function () {
        return AppInfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app-info.page.html */
      "y3UY");
      /* harmony import */


      var _app_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-info.page.scss */
      "rTzo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Device;

      var AppInfoPage = /*#__PURE__*/function () {
        function AppInfoPage(router, sharedService, navController, platform) {
          var _this = this;

          _classCallCheck(this, AppInfoPage);

          this.router = router;
          this.sharedService = sharedService;
          this.navController = navController;
          this.platform = platform;
          this.isMobile = false;
          this.appName = '';
          this.packageName = '';
          this.versionCode = '1.4.6';
          this.versionNumber = '118';
          sharedService.getDeviceInfo().then(function (info) {
            console.log({
              info: info
            });

            if (info.isApp) {
              _this.versionCode = info.appVersion;
              _this.versionNumber = info.appBuild;
            } else {
              _this.versionCode = 'HSEN.231';
              _this.versionNumber = '';
            }
          });
        }

        _createClass(AppInfoPage, [{
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/setting']);
          }
        }]);

        return AppInfoPage;
      }();

      AppInfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      AppInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-app-info',
        template: _raw_loader_app_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], AppInfoPage);
      /***/
    },

    /***/
    "g5FP":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/app-info/app-info.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AppInfoPageModule */

    /***/
    function g5FP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInfoPageModule", function () {
        return AppInfoPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _app_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-info.page */
      "HoKA");

      var routes = [{
        path: '',
        component: _app_info_page__WEBPACK_IMPORTED_MODULE_5__["AppInfoPage"]
      }];

      var AppInfoPageModule = function AppInfoPageModule() {
        _classCallCheck(this, AppInfoPageModule);
      };

      AppInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_app_info_page__WEBPACK_IMPORTED_MODULE_5__["AppInfoPage"]],
        providers: []
      })], AppInfoPageModule);
      /***/
    },

    /***/
    "rTzo":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/app-info/app-info.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function rTzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content #share-icons {\n  display: block;\n  margin: 0 auto;\n}\nion-content ul {\n  -webkit-padding-start: 20px;\n          padding-inline-start: 20px;\n}\nion-content ul li:first-child {\n  margin-bottom: 1em;\n}\nion-content .copy-link {\n  display: block;\n  background: white;\n  padding: 15px;\n  border: 2px solid lightgrey;\n  border-radius: 3px;\n}\nion-content .copy-link .link {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUo7QUFFRTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ04iLCJmaWxlIjoiYXBwLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAjc2hhcmUtaWNvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIHVsIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG4gIC5jb3B5LWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAubGluayB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "y3UY":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/app-info/app-info.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y3UY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"padding: 16px 16px 0px 16px;\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>App Information</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"padding: 16px;\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <p>Build Version: {{ versionCode }}</p>\n        <p>Build Number: {{ versionNumber }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-app-info-app-info-module-es5.js.map