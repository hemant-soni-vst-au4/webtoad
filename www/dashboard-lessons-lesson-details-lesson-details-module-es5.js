(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-lesson-details-lesson-details-module"], {
    /***/
    "+nZI":
    /*!***************************************************************************!*\
      !*** ./src/app/dashboard/lessons/lesson-details/lesson-details.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LessonDetailsPageModule */

    /***/
    function nZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LessonDetailsPageModule", function () {
        return LessonDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/comments.service */
      "Tvdm");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _lesson_details_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./lesson-details.page */
      "KTwm");
      /* harmony import */


      var ngx_y2_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-y2-player */
      "k9H9"); // import {IntroductionComponent} from './introduction/introduction.component'


      var routes = [{
        path: '',
        component: _lesson_details_page__WEBPACK_IMPORTED_MODULE_10__["LessonDetailsPage"]
      }];

      var LessonDetailsPageModule = function LessonDetailsPageModule() {
        _classCallCheck(this, LessonDetailsPageModule);
      };

      LessonDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), ngx_y2_player__WEBPACK_IMPORTED_MODULE_11__["NgxY2PlayerModule"]],
        declarations: [_lesson_details_page__WEBPACK_IMPORTED_MODULE_10__["LessonDetailsPage"]],
        // entryComponents: [],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_4__["LessonsService"], _services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__["OnBoardingService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_1__["SubscriptionService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], LessonDetailsPageModule);
      /***/
    },

    /***/
    "KTwm":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/lessons/lesson-details/lesson-details.page.tsx ***!
      \**************************************************************************/

    /*! exports provided: LessonDetailsPage */

    /***/
    function KTwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LessonDetailsPage", function () {
        return LessonDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _comments_Comments_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comments/Comments.scss */
      "hFQc");
      /* harmony import */


      var _lesson_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lesson-details.page.scss */
      "Nr6g");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! react */
      "q1tI");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! react-dom */
      "i8i4");
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/reactapp/AppProvider */
      "mxLC");
      /* harmony import */


      var _ionic_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/react */
      "eP13");
      /* harmony import */


      var ionicons_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionicons/icons */
      "/3n0");
      /* harmony import */


      var react_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! react-player */
      "7l9Y");
      /* harmony import */


      var react_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_dashboard_lessons_lesson_details_comments_Comments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/dashboard/lessons/lesson-details/comments/Comments */
      "JwR5");
      /* harmony import */


      var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/reactapp/useStore */
      "+9Tx");
      /* harmony import */


      var src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/reactapp/types-and-hooks */
      "35Ww");
      /* harmony import */


      var clsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! clsx */
      "iuhU");

      var Introduction = function Introduction(_ref) {
        var lessonDetails = _ref.lessonDetails;

        var _a;

        var navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__["useStore"])(function (state) {
          return state.navController;
        });
        var isLoading = lessonDetails === undefined;

        if (isLoading) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
            className: "ion-align-items-center ion-justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
            size: "12",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
            className: "lesson-heading"
          }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '100%'
            }
          }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '100%'
            }
          }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '80%'
            }
          })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
            className: "ion-align-items-center ion-justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
            size: "12",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '100%'
            }
          })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
            className: "ion-align-items-center ion-justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
            size: "12",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
            className: "lesson-heading"
          }, "Level"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '40%'
            }
          })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
            className: "ion-align-items-center ion-justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
            size: "12",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
            className: "lesson-heading"
          }, "Number of Scenes"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '40%'
            }
          })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
            className: "ion-align-items-center ion-justify-content-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
            size: "12",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSkeletonText"], {
            animated: true,
            style: {
              width: '40%'
            }
          })))));
        }

        var videoLevel = lessonDetails.videoLevel === 'Elementary' ? 'Upper-beginner' : lessonDetails.videoLevel;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
          className: "lesson-heading"
        }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonText"], null, lessonDetails === null || lessonDetails === void 0 ? void 0 : lessonDetails.introduction))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: "c-orange"
        }, lessonDetails === null || lessonDetails === void 0 ? void 0 : lessonDetails.tags))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
          className: "lesson-heading"
        }, "Level"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonText"], null, lessonDetails === null || lessonDetails === void 0 ? void 0 : lessonDetails.videoLevelLabel))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
          className: "lesson-heading"
        }, "Number of Scenes"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonText"], null, (_a = lessonDetails.scenes) === null || _a === void 0 ? void 0 : _a.length, " scenes", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", null, "(~20-30 mins. Each scene is ~3 mins to study)")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: "lesson-heading pointer",
          id: "course-page",
          style: {
            textDecoration: 'underline',
            display: 'inline-block'
          },
          onClick: function onClick() {
            navCtrl.navigateBack(['/course-details', lessonDetails.lessonId, 'myCourse']);
          }
        }, "Go to the course page"))));
      };

      function getLessonUsageMessage(profile, isDraft, isCompletedLesson) {
        console.log({
          profile: profile
        });
        var currentPackage = profile.currentPackage,
            subscriptionProductId = profile.subscriptionProductId; // currentPackage = 'Trial'
        // subscriptionProductId = 'monthly'
        // console.log({profile, currentPackage, subscriptionProductId})

        if (isDraft === true) {
          return {
            subHeader: '',
            message: "1 lesson won't be used",
            action: 'start'
          };
        }

        if (isCompletedLesson) {
          var message = '';

          if (currentPackage === 'Subscription' && (subscriptionProductId !== 'yearly' || subscriptionProductId !== '6_months')) {
            message = 'You’ve already completed this lesson. Do you want to re-study it?';
          } else {
            message = "You've studied this. <br/> 1 lesson won't be used";
          }

          return {
            subHeader: '',
            message: message,
            action: 'start'
          };
        }

        if (currentPackage === 'SubscriptionExpired') {
          return {
            header: 'Subscription expired!',
            message: 'Looks like your subscription has expired. Kindly renew it to continue.',
            action: 'subscribe'
          };
        }

        if (currentPackage === 'Trial') {
          var total = profile.trialLessonLimit;
          var left = total - profile.completedLesson;

          if (left <= 0) {
            return {
              header: 'Speaky Peaky',
              message: "Hooray! You've finished all free lessons. Please purchase a subscription for more lessons",
              action: 'subscribe'
            };
          } // prettier-ignore


          return {
            subHeader: 'You will use 1 lesson.',
            message: "<b style=\"color:#E22D2D\">".concat(left, " out of ").concat(total, "</b> ").concat(left <= 1 ? 'lesson is' : 'lessons are', " left."),
            action: 'start'
          };
        }

        if (currentPackage === 'Subscription') {
          var subHeader = '';
          var _message = '';

          if (subscriptionProductId === 'yearly' || subscriptionProductId === '6_months') {
            _message = 'Are you sure you want to study this lesson?';
          } else if (subscriptionProductId === 'monthly' || subscriptionProductId === undefined || subscriptionProductId === null) {
            subHeader = 'You will use 1 lesson.';
            var _total = profile.subscriptionLesson;

            var _left = _total - profile.completedLesson;

            if (_left <= 0) {
              return {
                header: 'Speaky Peaky',
                message: "Hooray! You've finished all lessons."
              };
            } // prettier-ignore


            _message = "<b style=\"color:#E22D2D\">".concat(_left, " out of ").concat(_total, "</b> ").concat(_left <= 1 ? 'lesson is' : 'lessons are', " left this month.");
          }

          return {
            subHeader: subHeader,
            message: _message,
            action: 'start'
          };
        }

        return {
          subHeader: 'none',
          message: 'none'
        };
      }

      function StartButton(_ref2) {
        var isDraft = _ref2.isDraft,
            lessonDetails = _ref2.lessonDetails,
            onStart = _ref2.onStart;
        var navController = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__["useStore"])(function (state) {
          return state.navController;
        });

        var _Object = Object(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["useIonAlert"])(),
            _Object2 = _slicedToArray(_Object, 1),
            present = _Object2[0];

        var _Object3 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__["useAddToMyLessonMutation"])({
          onCompleted: function onCompleted(data) {
            if (data.addToMyLesson.isMy) {
              onStart();
            }
          }
        }),
            _Object4 = _slicedToArray(_Object3, 1),
            addToMyLesson = _Object4[0]; // const {post: addMyCourseLesson, response} = useFetch('/lesson/add-course-lesson')


        var _Object5 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__["useGetProfileQuery"])({
          fetchPolicy: 'cache-and-network'
        }),
            profile = _Object5.data.profile,
            loading = _Object5.loading,
            refetch = _Object5.refetch;

        var isCompletedLesson = lessonDetails.isCompleted;

        function handleStart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!isDraft) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", onStart());

                  case 2:
                    addToMyLesson({
                      variables: {
                        lessonId: lessonDetails._id
                      }
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }

        function handleStartClick() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _getLessonUsageMessag, subHeader, message, action;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    // refetch()
                    // no free tiral
                    // expired
                    _getLessonUsageMessag = getLessonUsageMessage(profile, isDraft, isCompletedLesson), subHeader = _getLessonUsageMessag.subHeader, message = _getLessonUsageMessag.message, action = _getLessonUsageMessag.action;
                    console.log({
                      subHeader: subHeader,
                      message: message,
                      action: action
                    });

                    if (!(action === 'start')) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 6;
                    return present({
                      mode: 'md',
                      cssClass: 'startLessonAlert',
                      subHeader: subHeader,
                      message: message,
                      buttons: [{
                        text: '',
                        role: 'cancel',
                        cssClass: 'startLessonCancelBtn'
                      }, {
                        text: 'START',
                        cssClass: 'startLessonBtn',
                        handler: function handler() {
                          handleStart();
                        }
                      }]
                    });

                  case 6:
                    _context2.next = 15;
                    break;

                  case 8:
                    if (!(action === 'subscribe')) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 11;
                    return present({
                      mode: 'md',
                      cssClass: 'startLessonAlert',
                      subHeader: subHeader,
                      message: message,
                      buttons: [{
                        text: '',
                        role: 'cancel',
                        cssClass: 'startLessonCancelBtn'
                      }, {
                        text: 'Subscribe',
                        cssClass: 'startLessonBtn',
                        handler: function handler() {
                          navController.navigateForward('/subscriptionplans');
                        }
                      }]
                    });

                  case 11:
                    _context2.next = 15;
                    break;

                  case 13:
                    _context2.next = 15;
                    return present({
                      mode: 'md',
                      cssClass: 'startLessonAlert',
                      subHeader: subHeader,
                      message: message,
                      buttons: [{
                        text: '',
                        role: 'cancel',
                        cssClass: 'startLessonCancelBtn'
                      }]
                    });

                  case 15:
                    _context2.next = 19;
                    break;

                  case 17:
                    _context2.prev = 17;
                    _context2.t0 = _context2["catch"](0);

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 17]]);
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          mode: "ios",
          color: "danger",
          shape: "round",
          expand: "block",
          onClick: handleStartClick,
          disabled: loading
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          slot: "start",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_10__["play"]
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, "START")));
      }

      var LessonDetails = function LessonDetails(_ref3) {
        var subLessonId = _ref3.subLessonId,
            isDraft = _ref3.isDraft;
        var navController = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__["useStore"])(function (state) {
          return state.navController;
        });
        var sharedService = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__["useStore"])(function (state) {
          return state.sharedService;
        });
        var platform = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_13__["useStore"])(function (state) {
          return state.platform;
        });

        var _react__WEBPACK_IMPOR = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('introduction'),
            _react__WEBPACK_IMPOR2 = _slicedToArray(_react__WEBPACK_IMPOR, 2),
            segment = _react__WEBPACK_IMPOR2[0],
            setSegment = _react__WEBPACK_IMPOR2[1];

        var _react__WEBPACK_IMPOR3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),
            _react__WEBPACK_IMPOR4 = _slicedToArray(_react__WEBPACK_IMPOR3, 2),
            lessonDetails = _react__WEBPACK_IMPOR4[0],
            setLessonDetails = _react__WEBPACK_IMPOR4[1];

        var _react__WEBPACK_IMPOR5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
            _react__WEBPACK_IMPOR6 = _slicedToArray(_react__WEBPACK_IMPOR5, 2),
            showAlert = _react__WEBPACK_IMPOR6[0],
            setShowAlert = _react__WEBPACK_IMPOR6[1];

        var _react__WEBPACK_IMPOR7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
            _react__WEBPACK_IMPOR8 = _slicedToArray(_react__WEBPACK_IMPOR7, 2),
            playing = _react__WEBPACK_IMPOR8[0],
            setPlaying = _react__WEBPACK_IMPOR8[1]; // const {profile} = useProfile()


        var _Object6 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__["useGetProfileQuery"])(),
            profile = _Object6.data.profile;

        var _react__WEBPACK_IMPOR9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
            _react__WEBPACK_IMPOR10 = _slicedToArray(_react__WEBPACK_IMPOR9, 2),
            playedSeconds = _react__WEBPACK_IMPOR10[0],
            setPlayedSeconds = _react__WEBPACK_IMPOR10[1];

        var _Object7 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__["useSetLessonSavedMutation"])({
          onCompleted: function onCompleted(data) {
            setLessonDetails(function (lesson) {
              return Object.assign(Object.assign({}, lesson), {
                isSaved: data.setLessonSaved.isSaved
              });
            });
          }
        }),
            _Object8 = _slicedToArray(_Object7, 2),
            setSave = _Object8[0],
            saveLoading = _Object8[1].loading;

        var lessonRes = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_14__["useGetLessonDeatilQuery"])({
          // fetchPolicy: 'cache-and-network',
          variables: {
            id: subLessonId
          },
          onCompleted: function onCompleted(data) {
            console.log(data.lesson);
            setLessonDetails(data.lesson);
          },
          skip: !subLessonId
        }); // console.log({lessonRes})

        var playerRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

        if (!lessonDetails) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonProgressBar"], {
            type: "indeterminate"
          });
        }

        function handleUnstarted() {
          console.log('Unstarted', {
            playing: playing
          }); // if (playing) {
          //   const st = playerRef.current?.getCurrentTime()
          //   setTimeout(() => {
          //     const ed = playerRef.current?.getCurrentTime()
          //     if (st === ed) {
          //       setPlaying(false)
          //       setShowAlert(true)
          //     }
          //   }, 1200)
          // }
        } // console.log({lessonDetails})


        var scenes = lessonDetails.scenes.map(function (s) {
          return Object.assign(Object.assign({}, s), {
            length: s.end - s.start
          });
        });
        var firstScene = scenes[0];
        var scenePlayedSeconds = Math.max(playedSeconds - firstScene.start, 0);
        var playedRate = scenePlayedSeconds / 20 || 0;

        function handleSaveLesson() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    try {
                      setSave({
                        variables: {
                          id: subLessonId,
                          isSave: !lessonDetails.isSaved
                        }
                      }); // await loadData()
                    } catch (error) {
                      console.log(error);
                    }

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }

        function handleProgress(data) {
          var _a;

          setPlayedSeconds(data.playedSeconds);

          if (data.playedSeconds >= firstScene.start + 20) {
            setPlaying(false);
            (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.seekTo(firstScene.start);
          }
        }

        function handleOnReady(player) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var helpDone, isHelpModeDone, steps;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    player.seekTo(Math.floor(firstScene.start));
                    _context4.next = 4;
                    return sharedService.getNativeStorage('isHelpModeDone');

                  case 4:
                    helpDone = _context4.sent;
                    isHelpModeDone = Boolean(helpDone === null || helpDone === void 0 ? void 0 : helpDone.data);

                    if (!isHelpModeDone) {
                      steps = [{
                        element: '#highlight-save-lesson-icon',
                        popover: {
                          title: 'Save for later',
                          description: 'You can save lesson for later.',
                          position: 'left'
                        }
                      }, {
                        element: '#highlight-comment',
                        popover: {
                          title: 'Comments',
                          description: 'See what other people had to say about this lesson.',
                          position: 'top-right'
                        }
                      }];
                      sharedService.showHelpGuide({
                        steps: steps,
                        onClose: function onClose() {
                          setPlaying(true);
                          sharedService.setNativeStorage('isHelpModeDone', true);
                        }
                      });
                    } else {
                      setPlaying(true);
                    }

                    _context4.next = 11;
                    break;

                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](0);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 9]]);
          }));
        } // const isNew = !lessonDetails.completedLesson
        // const isSaved = saveLoading ? !lessonDetails.isSaved : lessonDetails.isSaved


        var isSaved = lessonDetails.isSaved;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonPage"], {
          className: "lesson-details-page"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], {
          mode: "ios"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], {
          mode: "ios"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], {
          slot: "start"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          mode: "md",
          onClick: function onClick() {
            navController.pop();
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          color: "dark",
          slot: "icon-only",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_10__["chevronBack"]
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], null, lessonDetails.lessonName), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], {
          slot: "end"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          mode: "md",
          onClick: function onClick() {
            navController.navigateRoot('/dashboard/lessons');
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          color: "dark",
          mode: "md",
          slot: "icon-only",
          src: "/assets/images/home.svg"
        }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"] // *ngIf="isLoaded; else loadingPlaceholder"
        , {
          // *ngIf="isLoaded; else loadingPlaceholder"
          className: "lesson ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "8",
          sizeXl: "8",
          className: "ion-align-self-center ion-no-padding youtube-container"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "player-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
          ref: playerRef,
          url: "https://www.youtube.com/watch?v=".concat(lessonDetails.youtubeId),
          controls: false,
          // playbackRate={2}
          playing: playing,
          width: "100%",
          height: "auto",
          // light
          config: {
            youtube: {
              playerVars: {
                showinfo: 0,
                disablekb: 1,
                controls: 0,
                cc_load_policy: 0,
                origin: window.location.origin
              },
              // embedOptions: {},
              onUnstarted: handleUnstarted
            }
          },
          progressInterval: 500,
          // onPlay={}
          onProgress: handleProgress,
          onReady: handleOnReady
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "player-overlay"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          id: "highlight-save-lesson-icon",
          onClick: handleSaveLesson,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_15__["default"])('ion-activatable ripple-parent', saveLoading && 'save-loading')
        }, saveLoading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSpinner"], {
          color: "medium"
        }) : isSaved ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          src: "/assets/images/like-active.svg"
        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          src: "/assets/images/like_inactive.svg"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRippleEffect"], null)))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonAlert"], {
          isOpen: showAlert,
          onDidDismiss: function onDidDismiss() {
            return setShowAlert(false);
          },
          cssClass: "my-custom-class",
          header: 'Can not Autoplay!',
          message: 'Autoplay is not allowed without <strong>User interacts</strong>!!!',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Play',
            handler: function handler() {
              setPlaying(true);
            }
          }]
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"] // *ngIf="isLoaded"
        , {
          // *ngIf="isLoaded"
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "8",
          sizeXl: "8",
          className: "ion-align-self-center ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "playing-progress-bar",
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "scene-bar active",
          style: {
            flex: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "scene-progress",
          style: {
            width: "".concat(playedRate * 100, "%")
          }
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "youtube-handler ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "5",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          fill: "clear",
          onClick: function onClick() {
            var _a, _b;

            var curTime = ((_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.getCurrentTime()) || 0;
            var time = Math.max(curTime - 3, Math.floor(firstScene.start));
            (_b = playerRef.current) === null || _b === void 0 ? void 0 : _b.seekTo(time);
            setPlayedSeconds(time);
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          src: "/assets/images/lessons/3seconds-back.svg"
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "2",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }, playing ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          fill: "clear",
          onClick: function onClick() {
            return setPlaying(false);
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          src: "/assets/images/lessons/pause-lesson.svg"
        })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonButton"], {
          fill: "clear",
          onClick: function onClick() {
            return setPlaying(true);
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], {
          src: "/assets/images/lessons/play-lesson.svg"
        }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          size: "5",
          className: "ion-align-self-center ion-no-padding"
        })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          "size-xs": "12",
          "size-sm": "12",
          "size-md": "10",
          "size-xl": "8",
          "size-lg": "8",
          className: "ion-align-self-center ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSegment"], {
          color: "danger",
          mode: "md",
          value: segment,
          onIonChange: function onIonChange(e) {
            return setSegment(e.detail.value);
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSegmentButton"], {
          mode: "md",
          value: "introduction"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], null, "Lesson Intro")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonSegmentButton"], {
          id: "highlight-comment",
          mode: "md",
          value: "comments"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], null, "Comments"))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          className: "ion-align-self-center ion-padding-end ion-padding-start",
          size: "12"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          "size-xs": "12",
          "size-sm": "12",
          "size-md": "10",
          "size-xl": "8",
          "size-lg": "8",
          className: "ion-align-self-center"
        }, lessonDetails && (segment === 'introduction' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Introduction, {
          lessonDetails: lessonDetails
        })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_app_dashboard_lessons_lesson_details_comments_Comments__WEBPACK_IMPORTED_MODULE_12__["Comments"], {
          lessonId: lessonDetails === null || lessonDetails === void 0 ? void 0 : lessonDetails.courseId,
          subLessonId: lessonDetails === null || lessonDetails === void 0 ? void 0 : lessonDetails._id,
          profile: profile,
          platform: platform
        })))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], {
          mode: "ios"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_9__["IonCol"], {
          "size-xs": "12",
          "size-sm": "12",
          "size-md": "6",
          "size-xl": "4",
          "size-lg": "4",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StartButton, {
          isDraft: isDraft,
          lessonDetails: lessonDetails,
          onStart: function onStart() {
            setPlaying(false);
            navController.navigateForward(['/lesson-steps', lessonDetails._id, isDraft]);
          }
        })))));
      };

      var containerElementName = 'rcLessonDetails';

      var LessonDetailsPage = /*#__PURE__*/function () {
        function LessonDetailsPage(route, sharedService) {
          _classCallCheck(this, LessonDetailsPage);

          this.route = route;
          this.sharedService = sharedService;
          this.isDraft = false;
          this.sharedService.gaTrackView('Lesson Details Start Screen');
        }

        _createClass(LessonDetailsPage, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.render();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.render();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["unmountComponentAtNode"])(this.containerRef.nativeElement);
          }
        }, {
          key: "render",
          value: function render() {
            if (this.containerRef) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LessonDetails, {
                isDraft: this.isDraft,
                subLessonId: this.subLessonId
              })), this.containerRef.nativeElement);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var isDraft, subLessonId;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        isDraft = JSON.parse(params.isDraft);
                        this.isDraft = isDraft;
                        subLessonId = params.subLessonId;
                        this.subLessonId = subLessonId;

                        if (subLessonId) {
                          _context5.next = 7;
                          break;
                        }

                        throw new Error('No SubLessonId');

                      case 7:
                        this.render();
                        _context5.next = 12;
                        break;

                      case 10:
                        _context5.prev = 10;
                        _context5.t0 = _context5["catch"](0);

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[0, 10]]);
              }));
            });
          }
        }]);

        return LessonDetailsPage;
      }();

      LessonDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }];
      };

      LessonDetailsPage.propDecorators = {
        containerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: [containerElementName, {
            "static": false
          }]
        }]
      };
      LessonDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-lesson-details',
        template: "<div #".concat(containerElementName, "></div>"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
        styles: [_comments_Comments_scss__WEBPACK_IMPORTED_MODULE_1__["default"], _lesson_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])], LessonDetailsPage);
      /***/
    },

    /***/
    "Nr6g":
    /*!***************************************************************************!*\
      !*** ./src/app/dashboard/lessons/lesson-details/lesson-details.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Nr6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".lesson-details-page ion-spinner {\n  display: block;\n  margin: 0 auto;\n  height: 275px;\n}\n.lesson-details-page #highlight-save-lesson-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 7px 6px 0px 6px;\n  border-radius: 25px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.lesson-details-page #highlight-save-lesson-icon ion-icon {\n  font-size: 25px;\n}\n.lesson-details-page .youtube-handler {\n  padding-top: 10px;\n  background: #efefef;\n  padding-bottom: 4px;\n}\n.lesson-details-page .youtube-handler ion-icon {\n  font-size: 35px;\n}\n.lesson-details-page ion-footer ion-row ion-col {\n  margin-bottom: 7px;\n}\n.lesson-details-page .lesson-heading {\n  color: #aca7a7;\n}\n.lesson-details-page #highlight-save-lesson-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 7px 6px 0px 6px;\n  border-radius: 25px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.lesson-details-page #highlight-save-lesson-icon.save-loading {\n  background: #f8f8f8;\n  padding: 6px;\n}\n.lesson-details-page #highlight-save-lesson-icon ion-spinner {\n  width: 25px;\n  height: 25px;\n}\n.lesson-details-page #highlight-save-lesson-icon ion-icon {\n  font-size: 25px;\n}\n.lesson-details-page .player-wrapper {\n  background-color: #000;\n  position: relative;\n}\n.lesson-details-page .player-wrapper .player-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lesson-details-page .player-wrapper .player-overlay .play-btn {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  width: 95%;\n  height: 60%;\n}\n.lesson-details-page .player-wrapper .react-player {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.lesson-details-page .youtube-handler {\n  padding-top: 10px;\n  background: #efefef;\n  padding-bottom: 4px;\n}\n.lesson-details-page .youtube-handler ion-icon {\n  font-size: 35px;\n}\n.lesson-details-page .display-block {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xlc3Nvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDRSxlQUFBO0FBQU47QUFTTTtFQUNFLGtCQUFBO0FBUFI7QUFtQkU7RUFDRSxjQUFBO0FBakJKO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFsQko7QUFtQkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFqQk47QUFtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWpCTjtBQW1CSTtFQUNFLGVBQUE7QUFqQk47QUFxQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBbkJKO0FBcUJJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbkJOO0FBb0JNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFuQlI7QUFzQkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBcEJOO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBckJKO0FBc0JJO0VBQ0UsZUFBQTtBQXBCTjtBQTJCRTtFQUNFLGNBQUE7QUF6QkoiLCJmaWxlIjoibGVzc29uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlc3Nvbi1kZXRhaWxzLXBhZ2Uge1xuICBpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAyNzVweDtcbiAgfVxuICAjaGlnaGxpZ2h0LXNhdmUtbGVzc29uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4IDZweCAwcHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIC55b3V0dWJlLWhhbmRsZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAvLyBwYWRkaW5nOiA1cHggNXB4IDVweCA1LjVweDtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAvLyBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB9XG4gIH1cbiAgaW9uLWZvb3RlciB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vLy8vL1xuXG4gIC8vIGlvbi1zbGlkZXMge1xuICAvLyAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNmNTgzM2Q7XG4gIC8vICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNlMjJkMmQ7XG4gIC8vICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAvLyB9XG4gIC5sZXNzb24taGVhZGluZyB7XG4gICAgY29sb3I6ICNhY2E3YTc7XG4gIH1cblxuICAjaGlnaGxpZ2h0LXNhdmUtbGVzc29uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4IDZweCAwcHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5zYXZlLWxvYWRpbmcge1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICB9XG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gIH1cblxuICAucGxheWVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHBhZGRpbmctdG9wOiA1Ni4yNSU7IC8qIFBsYXllciByYXRpbzogMTAwIC8gKDEyODAgLyA3MjApICovXG4gICAgLnBsYXllci1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAucGxheS1idG4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4MjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgfVxuICAgIH1cbiAgICAucmVhY3QtcGxheWVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIC55b3V0dWJlLWhhbmRsZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAvLyBwYWRkaW5nOiA1cHggNXB4IDVweCA1LjVweDtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAvLyBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB9XG4gIH1cbiAgLmRpc3BsYXktYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Tvdm":
    /*!**********************************************!*\
      !*** ./src/app/services/comments.service.ts ***!
      \**********************************************/

    /*! exports provided: CommentsService */

    /***/
    function Tvdm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
        return CommentsService;
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


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");

      var CommentsService = /*#__PURE__*/function () {
        function CommentsService(apiService) {
          _classCallCheck(this, CommentsService);

          this.apiService = apiService;
        }

        _createClass(CommentsService, [{
          key: "getCommentsBySubLessonId",
          value: function getCommentsBySubLessonId(page, data) {
            return this.apiService.post('/comments/list/' + page, data);
          }
        }, {
          key: "saveCommentBySubLessonId",
          value: function saveCommentBySubLessonId(data) {
            return this.apiService.post('/comments/user/save/', data);
          }
        }, {
          key: "likeComment",
          value: function likeComment(data) {
            return this.apiService.post('/comments/user/like/', data);
          }
        }, {
          key: "disLikeComment",
          value: function disLikeComment(data) {
            return this.apiService.post('/comments/user/dislike/', data);
          }
        }, {
          key: "getCommentRepliesBySubLessonId",
          value: function getCommentRepliesBySubLessonId(page, data) {
            return this.apiService.post('/comments/reply-list/' + page, data);
          }
        }, {
          key: "saveCommentReplyBySubLessonId",
          value: function saveCommentReplyBySubLessonId(data) {
            return this.apiService.post('/comments/user/reply/', data);
          }
        }, {
          key: "editComment",
          value: function editComment(data) {
            return this.apiService.post('/comments/edit/', data);
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(data) {
            return this.apiService.post('/comments/delete/', data);
          }
        }, {
          key: "editReply",
          value: function editReply(data) {
            return this.apiService.post('/comments/reply-edit/', data);
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(data) {
            return this.apiService.post('/comments/reply-delete/', data);
          }
        }]);

        return CommentsService;
      }();

      CommentsService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      };

      CommentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], CommentsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-lessons-lesson-details-lesson-details-module-es5.js.map