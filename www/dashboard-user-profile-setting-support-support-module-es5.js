(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-support-support-module"], {
    /***/
    "DrT3":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/support.module.ts ***!
      \**************************************************************************/

    /*! exports provided: SupportPageModule */

    /***/
    function DrT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportPageModule", function () {
        return SupportPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../pipes/pipes.module */
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


      var _support_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./support.page */
      "Y8js");

      var routes = [{
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]
      }];

      var SupportPageModule = function SupportPageModule() {
        _classCallCheck(this, SupportPageModule);
      };

      SupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]],
        providers: []
      })], SupportPageModule);
      /***/
    },

    /***/
    "FMZa":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/support.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function FMZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card.card {\n  margin: 12px 16px !important;\n  font-weight: 500;\n}\n\n.expand-wrapper {\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\nion-item {\n  --inner-padding-bottom: 10px;\n  --inner-padding-top: 10px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-item ion-icon {\n  font-size: 25px;\n  color: #747474;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBRUUsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLmNhcmQge1xuICBtYXJnaW46IDEycHggMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZXhwYW5kLXdyYXBwZXIge1xuICAvLyAgIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG59XG5cbi5jb2xsYXBzZWQge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzc0NzQ3NDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "Y8js":
    /*!************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/support/support.page.ts ***!
      \************************************************************************/

    /*! exports provided: SupportPage */

    /***/
    function Y8js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
        return SupportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./support.page.html */
      "cbuu");
      /* harmony import */


      var _support_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./support.page.scss */
      "FMZa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../global/global.service */
      "Nrpk");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SupportPage = /*#__PURE__*/function () {
        function SupportPage(navController, router, route, globalService, sharedService) {
          var _this = this;

          _classCallCheck(this, SupportPage);

          this.navController = navController;
          this.router = router;
          this.route = route;
          this.globalService = globalService;
          this.sharedService = sharedService;
          this.faqs = [];
          this.isFocus = false;
          this.sharedService.gaTrackView('Support Screen');
          this.route.params.subscribe(function (params) {
            _this.faqs = _this.faqs.concat(_this.globalService.subscriptionsAndBillingFaqs, _this.globalService.appFeaturesFaqs, _this.globalService.studyMethods, _this.globalService.suggestions);
          });
        }

        _createClass(SupportPage, [{
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.isFocus = false;
            this.searchFaq = undefined;
          }
        }, {
          key: "clearInput",
          value: function clearInput() {
            this.searchFaq = undefined;
          }
        }, {
          key: "onSearch",
          value: function onSearch(searchFaq) {
            if (searchFaq !== undefined || searchFaq !== '') {} else {
              this.focusOnSearch(true);
            }
          }
        }, {
          key: "focusOnSearch",
          value: function focusOnSearch(isFocus) {
            this.searchFaq = undefined;
            this.isFocus = isFocus;
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/setting']);
          }
        }]);

        return SupportPage;
      }();

      SupportPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }];
      };

      SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])], SupportPage);
      /***/
    },

    /***/
    "cbuu":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/support/support.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cbuu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"6\" sizeSm=\"6\" sizeMd=\"3\" sizeLg=\"2\" sizeXl=\"2\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>FAQ</strong></h1>\n      </ion-col>\n      <ion-col\n        sizeXs=\"6\"\n        sizeSm=\"6\"\n        sizeMd=\"3\"\n        sizeLg=\"2\"\n        sizeXl=\"2\"\n        class=\"ion-align-self-center\"\n        [routerLink]=\"['/email-the-team']\"\n        routerLinkActive=\"router-link-active\"\n      >\n        <ion-text class=\"c-orange ion-float-right\">Email the team</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-margin-top ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n        <ion-searchbar\n          mode=\"md\"\n          id=\"searchFaq\"\n          name=\"searchFaq\"\n          [(ngModel)]=\"searchFaq\"\n          showCancelButton=\"focus\"\n          (ionFocus)=\"focusOnSearch(true)\"\n          animated\n          placeholder=\"Search in FAQs\"\n          (ionClear)=\"clearInput()\"\n          (ionCancel)=\"onCancel()\"\n          (ionChange)=\"onSearch(searchFaq)\"\n        >\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!isFocus && searchFaq === undefined; else searchLessonsFound\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-row\n          class=\"ion-align-items-center ion-justify-content-center\"\n          *ngFor=\"let faqCategory of globalService.faqCategories\"\n          [routerLink]=\"['/faqs', faqCategory.type]\"\n          routerLinkActive=\"router-link-active\"\n        >\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n            <ion-card mode=\"ios\" class=\"card\">\n              <ion-card-content mode=\"ios\">\n                <ion-text color=\"dark\">\n                  {{ faqCategory.title }}\n                </ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ng-template #searchLessonsFound>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-no-padding ion-align-self-center\">\n          <ion-list>\n            <ion-item *ngFor=\"let faq of faqs | filterFaqs: searchFaq\" (click)=\"expandItem(faq)\">\n              <div>\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                  <ion-col class=\"ion-no-padding ion-align-self-center\" size=\"11\">\n                    <p id=\"expandWrapper\">Q. {{ faq.question }}</p>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding ion-align-self-center\" size=\"1\">\n                    <ion-icon *ngIf=\"faq.expanded; else Expanded\" mode=\"ios\" name=\"chevron-up\"></ion-icon>\n                    <ng-template #Expanded>\n                      <ion-icon mode=\"ios\" name=\"chevron-down\"></ion-icon>\n                    </ng-template>\n                  </ion-col>\n                </ion-row>\n                <div id=\"expandWrapper\" class=\"expand-wrapper c-orange\" [class.collapsed]=\"!faq.expanded\">\n                  {{ faq.answer }}\n                </div>\n              </div>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-support-support-module-es5.js.map