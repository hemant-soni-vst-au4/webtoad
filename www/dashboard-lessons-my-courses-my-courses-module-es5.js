(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-my-courses-my-courses-module"], {
    /***/
    "LbhI":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/my-courses.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function LbhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 170px;\n  height: 120px;\n  --border-radius: 10px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n@media only screen and (max-width: 414px) {\n  ion-content ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215LWNvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUROO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUFBUjtBQUtBO0VBSVE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUxSO0FBQ0YiLCJmaWxlIjoibXktY291cnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgaDIuaW9uLXRleHQtd3JhcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1ZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "SyKx":
    /*!*****************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/my-courses.page.ts ***!
      \*****************************************************************/

    /*! exports provided: MyCoursesPage */

    /***/
    function SyKx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCoursesPage", function () {
        return MyCoursesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-courses.page.html */
      "UInB");
      /* harmony import */


      var _my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-courses.page.scss */
      "LbhI");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MyCoursesPage = /*#__PURE__*/function () {
        function MyCoursesPage(router, sharedService, navController, lessonsService) {
          _classCallCheck(this, MyCoursesPage);

          this.router = router;
          this.sharedService = sharedService;
          this.navController = navController;
          this.lessonsService = lessonsService;
          this.myCourses = [];
          this.total = 0;
          this.nextPage = 1;
          this.isMyCourses = false;
          this.sharedService.gaTrackView('My Course Lessons Screen');
          this.isMyCourses = true;
        }

        _createClass(MyCoursesPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getMyCourse();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "getMyCourse",
          value: function getMyCourse(event) {
            var _this = this;

            try {
              this.lessonsService.getMyCourse().subscribe(function (res) {
                if (res.data.length) {
                  _this.myCourses = [];

                  for (var i = 0; i < res.data.length; i++) {
                    var ele = res.data[i];
                    var sublessons = res.data[i].subLessons;
                    sublessons.sort(function (a, b) {
                      var nameA = a.startTime.toUpperCase();
                      var nameB = b.startTime.toUpperCase();

                      if (nameA < nameB) {
                        return -1;
                      }

                      if (nameA > nameB) {
                        return 1;
                      }

                      return 0;
                    });

                    if (ele['videoLevel'] === 'Elementary') {
                      ele['videoLevel'] = 'Upper-beginner';
                    }

                    ele.thumbnail = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';
                    ele.expanded = false;
                    ele.subLessons = sublessons;

                    _this.myCourses.push(ele);
                  }
                }

                _this.isMyCourses = false;
              }, function (error) {});
            } catch (error) {
              this.isMyCourses = false;
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

              _this2.isMyCourses = true;

              _this2.getMyCourse(event);
            }, 500);
          }
        }]);

        return MyCoursesPage;
      }();

      MyCoursesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]
        }];
      };

      MyCoursesPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], {
            "static": false
          }]
        }]
      };
      MyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-my-courses',
        template: _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]])], MyCoursesPage);
      /***/
    },

    /***/
    "UInB":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/my-courses/my-courses.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UInB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>My Courses</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item\n            lines=\"none\"\n            *ngFor=\"let myCourse of myCourses\"\n            mode=\"md\"\n            [routerLink]=\"['/course-details', myCourse._id, 'myCourse']\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"{{ myCourse.thumbnail }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">{{ myCourse.title || myCourse.introduction }}</h2>\n              <ion-text color=\"medium\">\n                <p>\n                  <ion-text *ngIf=\"myCourse?.subLessons.length === 1; else multiple\">\n                    Single -\n                  </ion-text>\n                  <ng-template #multiple>\n                    <ion-text> {{ myCourse?.subLessons.length }} episode - </ion-text>\n                  </ng-template>\n                  {{ myCourse?.videoLevel }}\n                </p>\n              </ion-text>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"isMyCourses\" mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item lines=\"none\" mode=\"md\" *ngFor=\"let item of [0, 1, 2, 3, 4, 5]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">\n                <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 75%;\"></ion-skeleton-text>\n              </h2>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content>\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "VIXX":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/my-courses.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MyCoursesPageModule */

    /***/
    function VIXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCoursesPageModule", function () {
        return MyCoursesPageModule;
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


      var _my_courses_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./my-courses.page */
      "SyKx");

      var routes = [{
        path: '',
        component: _my_courses_page__WEBPACK_IMPORTED_MODULE_7__["MyCoursesPage"]
      }];

      var MyCoursesPageModule = function MyCoursesPageModule() {
        _classCallCheck(this, MyCoursesPageModule);
      };

      MyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_my_courses_page__WEBPACK_IMPORTED_MODULE_7__["MyCoursesPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"]]
      })], MyCoursesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-lessons-my-courses-my-courses-module-es5.js.map