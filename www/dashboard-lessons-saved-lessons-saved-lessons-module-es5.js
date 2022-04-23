(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-saved-lessons-saved-lessons-module"], {
    /***/
    "843O":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/saved-lessons/saved-lessons.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>My Saved Lessons</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item\n            *ngFor=\"let item of savedLessons\"\n            mode=\"md\"\n            [routerLink]=\"['/lesson-details', item.subLessonId, false, false]\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"{{ item.thumbnail }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">{{ item.lessonName }}</h2>\n              <p>\n                {{ item.videoLevel }}\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"isSavedLessons\" mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item mode=\"md\" *ngFor=\"let item of [0, 1, 2, 3, 4, 5]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">\n                <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 75%;\"></ion-skeleton-text>\n              </h2>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "K8Xz":
    /*!***********************************************************************!*\
      !*** ./src/app/dashboard/lessons/saved-lessons/saved-lessons.page.ts ***!
      \***********************************************************************/

    /*! exports provided: SavedLessonsPage */

    /***/
    function K8Xz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedLessonsPage", function () {
        return SavedLessonsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_saved_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./saved-lessons.page.html */
      "843O");
      /* harmony import */


      var _saved_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./saved-lessons.page.scss */
      "fyUB");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/shared.service */
      "zuHl");

      var SavedLessonsPage = /*#__PURE__*/function () {
        function SavedLessonsPage(router, sharedService, navController, lessonsService) {
          _classCallCheck(this, SavedLessonsPage);

          this.router = router;
          this.sharedService = sharedService;
          this.navController = navController;
          this.lessonsService = lessonsService;
          this.savedLessons = [];
          this.total = 0;
          this.nextPage = 1;
          this.isSavedLessons = false;
          this.sharedService.gaTrackView('Saved Lesson Screen');
          this.isSavedLessons = true;
        }

        _createClass(SavedLessonsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getSavedLessons();
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
          key: "getSavedLessons",
          value: function getSavedLessons(event) {
            var _this = this;

            try {
              this.lessonsService.getSavedLessons(this.nextPage).subscribe(function (res) {
                if (_this.nextPage === 1) {
                  _this.savedLessons = [];
                }

                if (res.data.length) {
                  res.data.forEach(function (ele) {
                    if (ele['videoLevel'] === 'Elementary') {
                      ele['videoLevel'] = 'Upper-beginner';
                    }

                    ele['thumbnail'] = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';

                    _this.savedLessons.push(ele);
                  });
                  _this.nextPage++;
                  _this.total = res.total;
                }

                if (event) {
                  event.target.complete();
                }

                _this.isSavedLessons = false;
              }, function (error) {});
            } catch (error) {
              this.isSavedLessons = false;
              console.log(error);
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/dashboard/lessons']);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this2 = this;

            setTimeout(function () {
              if (_this2.nextPage === _this2.total) {
                event.target.disabled = true;
              }

              _this2.isSavedLessons = true;

              _this2.getSavedLessons(event);
            }, 500);
          }
        }]);

        return SavedLessonsPage;
      }();

      SavedLessonsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]
        }];
      };

      SavedLessonsPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
            "static": false
          }]
        }]
      };
      SavedLessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-saved-lessons',
        template: _raw_loader_saved_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]])], SavedLessonsPage);
      /***/
    },

    /***/
    "fyUB":
    /*!*************************************************************************!*\
      !*** ./src/app/dashboard/lessons/saved-lessons/saved-lessons.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function fyUB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 170px;\n  height: 120px;\n  --border-radius: 10px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n@media only screen and (max-width: 414px) {\n  ion-content ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NhdmVkLWxlc3NvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUROO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUFBUjtBQUtBO0VBSVE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUxSO0FBQ0YiLCJmaWxlIjoic2F2ZWQtbGVzc29ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgaDIuaW9uLXRleHQtd3JhcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1ZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "mSkJ":
    /*!*************************************************************************!*\
      !*** ./src/app/dashboard/lessons/saved-lessons/saved-lessons.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SavedLessonsPageModule */

    /***/
    function mSkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedLessonsPageModule", function () {
        return SavedLessonsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
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


      var _saved_lessons_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./saved-lessons.page */
      "K8Xz");

      var routes = [{
        path: '',
        component: _saved_lessons_page__WEBPACK_IMPORTED_MODULE_7__["SavedLessonsPage"]
      }];

      var SavedLessonsPageModule = function SavedLessonsPageModule() {
        _classCallCheck(this, SavedLessonsPageModule);
      };

      SavedLessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_saved_lessons_page__WEBPACK_IMPORTED_MODULE_7__["SavedLessonsPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"]]
      })], SavedLessonsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-lessons-saved-lessons-saved-lessons-module-es5.js.map