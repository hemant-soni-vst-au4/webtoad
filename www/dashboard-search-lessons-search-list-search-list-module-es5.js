(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-search-lessons-search-list-search-list-module"], {
    /***/
    "C5qg":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/search-lessons/search-list/search-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: SearchListPage */

    /***/
    function C5qg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchListPage", function () {
        return SearchListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-list.page.html */
      "okSl");
      /* harmony import */


      var _search_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-list.page.scss */
      "ZOzD");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../global/global.service */
      "Nrpk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SearchListPage = /*#__PURE__*/function () {
        function SearchListPage(router, route, sharedService, navController, // private lessonsService: SearchService,
        lessonsService, globalService) {
          _classCallCheck(this, SearchListPage);

          this.router = router;
          this.route = route;
          this.sharedService = sharedService;
          this.navController = navController;
          this.lessonsService = lessonsService;
          this.globalService = globalService;
          this.elementaryCourse = new Array();
          this.intermediateCourse = new Array();
          this.advancedCourse = new Array();
          this.total = 0;
          this.nextPage = 1;
          this.isSearchLessonsList = false;
          this.videoLevel = 'Elementary';
          this.sharedService.gaTrackView('Search List Screen');
          this.isSearchLessonsList = true;
        }

        _createClass(SearchListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              _this.suggestedCurriculumId = params.suggestedCurriculumId;
              _this.suggestedCurriculumTitle = params.suggestedCurriculumTitle;
              _this.suggestedCurriculumDay = params.suggestedCurriculumDay;

              _this.getTopicLessonsByUserLevel();
            });
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
          key: "getTopicLessonsByUserLevel",
          value: function getTopicLessonsByUserLevel(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var obj, res, i, ele;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      obj = {
                        videoLevel: this.videoLevel,
                        lessonTopicId: this.suggestedCurriculumId
                      };
                      _context.prev = 1;
                      _context.next = 4;
                      return this.lessonsService.getCourseList(this.nextPage, obj).toPromise();

                    case 4:
                      res = _context.sent;
                      _context.t0 = this.videoLevel;
                      _context.next = _context.t0 === 'Elementary' ? 8 : _context.t0 === 'Intermediate' ? 10 : 12;
                      break;

                    case 8:
                      if (this.nextPage === 1) {
                        this.elementaryCourse = [];
                      }

                      return _context.abrupt("break", 14);

                    case 10:
                      if (this.nextPage === 1) {
                        this.intermediateCourse = [];
                      }

                      return _context.abrupt("break", 14);

                    case 12:
                      if (this.nextPage === 1) {
                        this.advancedCourse = [];
                      }

                      return _context.abrupt("break", 14);

                    case 14:
                      if (!res.data.length) {
                        _context.next = 34;
                        break;
                      }

                      i = 0;

                    case 16:
                      if (!(i < res.data.length)) {
                        _context.next = 32;
                        break;
                      }

                      ele = res.data[i]; // ele.subLessons.sort((a, b) => {
                      //   if (a.startTime.toUpperCase() < b.startTime.toUpperCase()) {
                      //     return -1
                      //   }
                      //   if (a.startTime.toUpperCase() > b.startTime.toUpperCase()) {
                      //     return 1
                      //   }
                      //   return 0
                      // })

                      ele.thumbnail = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'; // ele.expanded = true

                      ele.expanded = false;
                      _context.t1 = ele.videoLevel;
                      _context.next = _context.t1 === 'Elementary' ? 23 : _context.t1 === 'Intermediate' ? 25 : 27;
                      break;

                    case 23:
                      this.elementaryCourse.push(ele);
                      return _context.abrupt("break", 29);

                    case 25:
                      this.intermediateCourse.push(ele);
                      return _context.abrupt("break", 29);

                    case 27:
                      this.advancedCourse.push(ele);
                      return _context.abrupt("break", 29);

                    case 29:
                      i++;
                      _context.next = 16;
                      break;

                    case 32:
                      this.nextPage++;
                      this.total = res.totalLessons;

                    case 34:
                      if (event) {
                        event.target.complete();
                      }

                      this.isSearchLessonsList = false;
                      _context.next = 42;
                      break;

                    case 38:
                      _context.prev = 38;
                      _context.t2 = _context["catch"](1);

                      if (event) {
                        event.target.complete();
                      }

                      this.isSearchLessonsList = false;

                    case 42:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 38]]);
            }));
          }
        }, {
          key: "onExpandItem",
          value: function onExpandItem(searchLesson) {
            if (searchLesson.expanded) {
              searchLesson.expanded = false;
            } else {
              switch (this.videoLevel) {
                case 'Elementary':
                  this.elementaryCourse.map(function (item) {
                    if (searchLesson === item) {
                      item.expanded = !item.expanded;
                    } else {
                      item.expanded = false;
                    }

                    return item;
                  });
                  break;

                case 'Intermediate':
                  this.intermediateCourse.map(function (item) {
                    if (searchLesson === item) {
                      item.expanded = !item.expanded;
                    } else {
                      item.expanded = false;
                    }

                    return item;
                  });
                  break;

                default:
                  this.advancedCourse.map(function (item) {
                    if (searchLesson === item) {
                      item.expanded = !item.expanded;
                    } else {
                      item.expanded = false;
                    }

                    return item;
                  });
                  break;
              }
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/dashboard/search-lessons']);
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            this.isSearchLessonsList = true;
            this.nextPage = 1;
            this.videoLevel = event.detail.value;
            this.getTopicLessonsByUserLevel();
            this.infiniteScroll.disabled = false;
            this.elementaryCourse = [];
            this.intermediateCourse = [];
            this.advancedCourse = [];
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this2 = this;

            switch (this.videoLevel) {
              case 'Elementary':
                setTimeout(function () {
                  if (_this2.elementaryCourse.length === _this2.total) {
                    _this2.infiniteScroll.disabled = true;
                  } else {
                    _this2.isSearchLessonsList = true;

                    _this2.getTopicLessonsByUserLevel(event);
                  }
                }, 500);
                break;

              case 'Intermediate':
                setTimeout(function () {
                  if (_this2.intermediateCourse.length === _this2.total) {
                    _this2.infiniteScroll.disabled = true;
                  } else {
                    _this2.isSearchLessonsList = true;

                    _this2.getTopicLessonsByUserLevel(event);
                  }
                }, 500);
                break;

              default:
                setTimeout(function () {
                  if (_this2.advancedCourse.length === _this2.total) {
                    _this2.infiniteScroll.disabled = true;
                  } else {
                    _this2.isSearchLessonsList = true;

                    _this2.getTopicLessonsByUserLevel(event);
                  }
                }, 500);
                break;
            }
          }
        }, {
          key: "onCourseDetails",
          value: function onCourseDetails(lesson) {
            this.navController.setDirection('forward');
            this.router.navigate(['/course-details', lesson._id, 'search']);
          }
        }]);

        return SearchListPage;
      }();

      SearchListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]
        }, {
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }];
      };

      SearchListPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"]]
        }]
      };
      SearchListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-search-list',
        template: _raw_loader_search_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"], _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])], SearchListPage);
      /***/
    },

    /***/
    "DxXz":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/search-lessons/search-list/search-list.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SearchListPageModule */

    /***/
    function DxXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchListPageModule", function () {
        return SearchListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _course_course_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./course/course.component */
      "d5VU");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/search.service */
      "l3hs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _search_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./search-list.page */
      "C5qg");

      var routes = [{
        path: '',
        component: _search_list_page__WEBPACK_IMPORTED_MODULE_9__["SearchListPage"]
      }];

      var SearchListPageModule = function SearchListPageModule() {
        _classCallCheck(this, SearchListPageModule);
      };

      SearchListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
        declarations: [_search_list_page__WEBPACK_IMPORTED_MODULE_9__["SearchListPage"], _course_course_component__WEBPACK_IMPORTED_MODULE_1__["CourseComponent"]],
        entryComponents: [_course_course_component__WEBPACK_IMPORTED_MODULE_1__["CourseComponent"]],
        providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_2__["LessonsService"]]
      })], SearchListPageModule);
      /***/
    },

    /***/
    "ZOzD":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/search-lessons/search-list/search-list.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function ZOzD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-segment ion-segment-button ion-label {\n  text-transform: capitalize;\n}\nion-content h1 {\n  margin: 10px 0px 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlYXJjaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLDBCQUFBO0FBRlI7QUFNRTtFQUNFLHlCQUFBO0FBSkoiLCJmaWxlIjoic2VhcmNoLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoMSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTVweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "d5VU":
    /*!*********************************************************************************!*\
      !*** ./src/app/dashboard/search-lessons/search-list/course/course.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CourseComponent */

    /***/
    function d5VU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
        return CourseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_course_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./course.component.html */
      "fN58");
      /* harmony import */


      var _course_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course.component.scss */
      "g8bf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CourseComponent = /*#__PURE__*/function () {
        function CourseComponent() {
          _classCallCheck(this, CourseComponent);

          this.courseList = new Array();
          this.isCourseList = false;
          this.courseAction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.expandItemAction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(CourseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCourseDetails",
          value: function onCourseDetails(course, event) {
            event.stopPropagation();
            this.courseAction.emit(course);
          }
        }, {
          key: "onExpandItem",
          value: function onExpandItem(course, event) {
            event.stopPropagation();
            this.expandItemAction.emit(course);
          }
        }]);

        return CourseComponent;
      }();

      CourseComponent.ctorParameters = function () {
        return [];
      };

      CourseComponent.propDecorators = {
        courseList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isCourseList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        courseAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        expandItemAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      CourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course',
        template: _raw_loader_course_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CourseComponent);
      /***/
    },

    /***/
    "fN58":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/search-lessons/search-list/course/course.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fN58(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>\n  <ion-row class=\"course pointer ion-align-items-center ion-justify-content-center\" *ngFor=\"let course of courseList\">\n    <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-no-padding ion-align-self-center\">\n      <ion-row class=\"search-course-item\">\n        <ion-col size=\"auto\" (click)=\"onExpandItem(course, $event)\">\n          <ion-thumbnail>\n            <ion-img src=\"{{ course.thumbnail }}\"></ion-img>\n          </ion-thumbnail>\n        </ion-col>\n        <ion-col class=\"ion-padding-start\">\n          <ion-label>\n            <h2 class=\"ion-text-wrap\" (click)=\"onCourseDetails(course, $event)\">\n              {{ course.title || course.introduction }}\n            </h2>\n            <p id=\"scenes-count\">\n              <ion-text color=\"medium\"> {{ course.subLessons.length }} Episode </ion-text>\n            </p>\n            <ion-row (click)=\"onExpandItem(course, $event)\" class=\"ion-align-items-center ion-justify-content-center\">\n              <ion-col size=\"10\" class=\"ion-no-padding ion-align-self-center\">\n                <ion-text color=\"medium\" id=\"tags\">\n                  {{ course.tags }}\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-no-padding ion-text-center ion-align-self-center\">\n                <ion-icon color=\"medium\" id=\"collapsible-icons\" *ngIf=\"course.expanded; else Expanded\" mode=\"ios\"\n                  name=\"chevron-up\">\n                </ion-icon>\n                <ng-template #Expanded>\n                  <ion-icon color=\"medium\" id=\"collapsible-icons\" mode=\"ios\" name=\"chevron-down\"></ion-icon>\n                </ng-template>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"expand-wrapper\" [class.collapsed]=\"!course.expanded\">\n        <ion-col>\n          <ion-row *ngFor=\"let subLesson of course.subLessons\"\n            [routerLink]=\"['/lesson-details', subLesson._id, false, false]\" routerLinkActive=\"router-link-active\">\n            <ion-col class=\"ion-no-padding lesson-name\" size=\"12\" *ngIf=\"subLesson?.completedLesson === null\">\n              <p class=\"sub-lessons\">\n                {{ subLesson?.lessonName }}\n              </p>\n            </ion-col>\n            <ion-col class=\"ion-no-padding lesson-name\" size=\"8\" *ngIf=\"subLesson?.completedLesson !== null\">\n              <p class=\"sub-lessons\">\n                {{ subLesson?.lessonName }}\n              </p>\n            </ion-col>\n            <ion-col class=\"ion-no-padding studied-date\" size=\"4\" *ngIf=\"subLesson?.completedLesson !== null\">\n              <p>{{ subLesson?.completedLesson?.createdAt | date: 'mediumDate' }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ng-container>\n<ng-container *ngIf=\"isCourseList === true\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding\">\n      <ion-row *ngFor=\"let item of [0, 1, 2, 3, 4]\" class=\"course ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-no-padding ion-align-self-center\">\n          <ion-row>\n            <ion-col sizeXs=\"5\" sizeSm=\"5\" sizeMd=\"3\" sizeLg=\"3\" sizeXl=\"3\">\n              <ion-thumbnail>\n                <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n              </ion-thumbnail>\n            </ion-col>\n            <ion-col sizeXs=\"7\" sizeSm=\"7\" sizeMd=\"9\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-padding-start\">\n              <ion-label>\n                <h2 class=\"ion-text-wrap\">\n                  <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\n                </h2>\n                <p id=\"scenes-count\">\n                  <ion-text>\n                    <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                  </ion-text>\n                </p>\n                <p id=\"tags\">\n                  <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ng-container>";
      /***/
    },

    /***/
    "g8bf":
    /*!***********************************************************************************!*\
      !*** ./src/app/dashboard/search-lessons/search-list/course/course.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function g8bf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".course {\n  padding: 15px 0px;\n  border-bottom: 1px solid #c6c6c6;\n}\n.course ion-thumbnail {\n  width: 147px;\n  height: 120px;\n  --border-radius: 10px;\n}\n.course h2.ion-text-wrap {\n  font-weight: 600;\n  margin-right: 5px;\n}\n.course h2.ion-text-wrap,\n.course #tags {\n  line-height: 1.4em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.course #tags {\n  font-size: 14px;\n  display: block;\n}\n.course #scenes-count {\n  margin: 5px 0px;\n}\n.course #collapsible-icons {\n  font-size: 25px;\n}\n.course .search-course-item {\n  margin: 0px 10px;\n}\n.course .sub-lessons {\n  margin: 0px;\n  padding: 15px 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-bottom: 1px solid #efefef;\n}\n.course p.sub-lessons:last-child {\n  border-bottom: none;\n}\n.course .expand-wrapper {\n  max-height: 30em;\n  overflow: auto;\n  transition: max-height 0.5s, overflow 0.5s 0.5s;\n  margin: 0px 10px;\n}\n.course .expand-wrapper .lesson-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.course .expand-wrapper .studied-date {\n  font-size: 14px;\n  text-align: right;\n  color: #c6c6c6;\n}\n.course .collapsed {\n  max-height: 0;\n  /*and eventually delay an overflow:auto; */\n  overflow: hidden;\n  transition: max-height 0.5s, overflow 0s;\n}\n@media only screen and (max-width: 414px) {\n  .course ion-thumbnail {\n    margin: 0 auto;\n    width: 135px;\n    height: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDRTs7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQUo7QUFHQTtFQUVJO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBREo7QUFDRiIsImZpbGUiOiJjb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzZjNmM2O1xuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTQ3cHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgaDIuaW9uLXRleHQtd3JhcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBoMi5pb24tdGV4dC13cmFwLFxuICAjdGFncyB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgI3RhZ3Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjc2NlbmVzLWNvdW50IHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cbiAgI2NvbGxhcHNpYmxlLWljb25zIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnNlYXJjaC1jb3Vyc2UtaXRlbSB7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgfVxuICAuc3ViLWxlc3NvbnMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcbiAgfVxuICBwLnN1Yi1sZXNzb25zOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgLmV4cGFuZC13cmFwcGVyIHtcbiAgICBtYXgtaGVpZ2h0OiAzMGVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cywgb3ZlcmZsb3cgMC41cyAwLjVzO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgLmxlc3Nvbi1uYW1lIHtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC5zdHVkaWVkLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogI2M2YzZjNjtcbiAgICB9XG4gIH1cbiAgLmNvbGxhcHNlZCB7XG4gICAgLy8gZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgLyphbmQgZXZlbnR1YWxseSBkZWxheSBhbiBvdmVyZmxvdzphdXRvOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzLCBvdmVyZmxvdyAwcztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuY291cnNlIHtcbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "okSl":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/search-lessons/search-list/search-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function okSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"8\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\">\n          <strong>{{ suggestedCurriculumTitle }}</strong>\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"8\" class=\"ion-no-padding ion-align-self-center\">\n        <ion-segment color=\"danger\" mode=\"md\" (ionChange)=\"segmentChanged($event)\" [value]=\"videoLevel\">\n          <ion-segment-button mode=\"md\" value=\"Elementary\">\n            <ion-label>Upper-Beginner</ion-label>\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" value=\"Intermediate\">\n            <ion-label>Intermediate</ion-label>\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" value=\"Advanced\">\n            <ion-label>Advanced</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]=\"videoLevel\">\n      <div *ngSwitchCase=\"'Elementary'\">\n        <app-course\n          [courseList]=\"elementaryCourse\"\n          [isCourseList]=\"isSearchLessonsList\"\n          (expandItemAction)=\"onExpandItem($event)\"\n          (courseAction)=\"onCourseDetails($event)\"\n        ></app-course>\n      </div>\n      <div *ngSwitchCase=\"'Intermediate'\">\n        <app-course\n          [courseList]=\"intermediateCourse\"\n          [isCourseList]=\"isSearchLessonsList\"\n          (expandItemAction)=\"onExpandItem($event)\"\n          (courseAction)=\"onCourseDetails($event)\"\n        ></app-course>\n      </div>\n      <div *ngSwitchDefault>\n        <app-course\n          [courseList]=\"advancedCourse\"\n          [isCourseList]=\"isSearchLessonsList\"\n          (expandItemAction)=\"onExpandItem($event)\"\n          (courseAction)=\"onCourseDetails($event)\"\n        ></app-course>\n      </div>\n    </div>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\" #infiniteScroll>\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-search-lessons-search-list-search-list-module-es5.js.map