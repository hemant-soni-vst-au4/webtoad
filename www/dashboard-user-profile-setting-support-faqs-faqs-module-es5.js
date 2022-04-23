(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-support-faqs-faqs-module"], {
    /***/
    "1k+5":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/faqs/faqs.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function k5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".expand-wrapper {\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\nion-item {\n  --inner-padding-bottom: 10px;\n  --inner-padding-top: 10px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-item ion-icon {\n  font-size: 25px;\n  color: #747474;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZhcXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gIC8vICAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzc0NzQ3NDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "arc1":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/faqs/faqs.page.ts ***!
      \**************************************************************************/

    /*! exports provided: FaqsPage */

    /***/
    function arc1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsPage", function () {
        return FaqsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faqs.page.html */
      "icn4");
      /* harmony import */


      var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faqs.page.scss */
      "1k+5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../global/global.service */
      "Nrpk");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var FaqsPage = /*#__PURE__*/function () {
        function FaqsPage(navController, globalService, router, route, sharedService) {
          var _this = this;

          _classCallCheck(this, FaqsPage);

          this.navController = navController;
          this.globalService = globalService;
          this.router = router;
          this.route = route;
          this.sharedService = sharedService;
          this.faqs = [];
          this.sharedService.gaTrackView("FAQ's Screen");
          this.route.params.subscribe(function (params) {
            if (params.type === 'Subscriptions_and_Billing') {
              _this.faqs = _this.globalService.subscriptionsAndBillingFaqs;
            } else if (params.type === 'App_Features') {
              _this.faqs = _this.globalService.appFeaturesFaqs;
            } else if (params.type === 'Study_Methods') {
              _this.faqs = _this.globalService.studyMethods;
            } else if (params.type === 'Suggestions') {
              _this.faqs = _this.globalService.suggestions;
            }
          });
        }

        _createClass(FaqsPage, [{
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "expandItem",
          value: function expandItem(faq) {
            if (faq.expanded) {
              faq.expanded = false;
            } else {
              this.faqs.map(function (item) {
                if (faq === item) {
                  item.expanded = !item.expanded;
                } else {
                  item.expanded = false;
                }

                return item;
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/support']);
          }
        }]);

        return FaqsPage;
      }();

      FaqsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }];
      };

      FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-faqs',
        template: _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])], FaqsPage);
      /***/
    },

    /***/
    "icn4":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/support/faqs/faqs.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function icn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"6\" sizeSm=\"6\" sizeMd=\"3\" sizeLg=\"2\" sizeXl=\"2\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>FAQ</strong></h1>\n      </ion-col>\n      <ion-col\n        sizeXs=\"6\"\n        sizeSm=\"6\"\n        sizeMd=\"3\"\n        sizeLg=\"2\"\n        sizeXl=\"2\"\n        class=\"ion-align-self-center\"\n        [routerLink]=\"['/email-the-team']\"\n        routerLinkActive=\"router-link-active\"\n      >\n        <ion-text class=\"c-orange ion-float-right\">Email the team</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n        <ion-searchbar\n          mode=\"md\"\n          id=\"searchFaq\"\n          name=\"searchFaq\"\n          [(ngModel)]=\"searchFaq\"\n          placeholder=\"Search your questions\"\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-no-padding ion-align-self-center\">\n        <ion-list>\n          <ion-item *ngFor=\"let faq of faqs | filterFaqs: searchFaq\" (click)=\"expandItem(faq)\">\n            <div>\n              <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                <ion-col class=\"ion-no-padding ion-align-self-center\" size=\"11\">\n                  <p id=\"expandWrapper\">Q. {{ faq.question }}</p>\n                </ion-col>\n                <ion-col class=\"ion-no-padding ion-align-self-center\" size=\"1\">\n                  <ion-icon *ngIf=\"faq.expanded; else Expanded\" mode=\"ios\" name=\"chevron-up\"></ion-icon>\n                  <ng-template #Expanded>\n                    <ion-icon mode=\"ios\" name=\"chevron-down\"></ion-icon>\n                  </ng-template>\n                </ion-col>\n              </ion-row>\n              <div id=\"expandWrapper\" class=\"expand-wrapper c-orange\" [class.collapsed]=\"!faq.expanded\">\n                {{ faq.answer }}\n              </div>\n            </div>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "pJ5k":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/faqs/faqs.module.ts ***!
      \****************************************************************************/

    /*! exports provided: FaqsPageModule */

    /***/
    function pJ5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function () {
        return FaqsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../pipes/pipes.module */
      "iTUp");
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


      var _faqs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./faqs.page */
      "arc1");

      var routes = [{
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_7__["FaqsPage"]
      }];

      var FaqsPageModule = function FaqsPageModule() {
        _classCallCheck(this, FaqsPageModule);
      };

      FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_7__["FaqsPage"]],
        providers: []
      })], FaqsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-support-faqs-faqs-module-es5.js.map