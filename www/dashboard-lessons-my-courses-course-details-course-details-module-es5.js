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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-my-courses-course-details-course-details-module"], {
    /***/
    "7ASm":
    /*!**************************************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/course-details/course-details.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function ASm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".course-details-page ion-spinner {\n  display: block;\n  margin: 0 auto;\n  height: 275px;\n}\n.course-details-page .youtube-handler {\n  padding-top: 10px;\n  background: #efefef;\n  padding-bottom: 4px;\n}\n.course-details-page .youtube-handler ion-icon {\n  font-size: 35px;\n}\n.course-details-page .player-wrapper {\n  position: relative;\n  background-color: #000;\n  min-height: 250px;\n}\n.course-details-page .player-wrapper .player-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.course-details-page .player-wrapper .player-overlay .play-btn {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  width: 95%;\n  height: 60%;\n}\n.course-details-page ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  line-height: 2em;\n}\n.course-details-page ion-item ion-label .lesson-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.course-details-page ion-item ion-label .studied-date {\n  font-size: 14px;\n  text-align: right;\n  color: #c6c6c6;\n}\n.course-details-page ion-item ion-icon {\n  -webkit-margin-start: 5px;\n          margin-inline-start: 5px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBT0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSk47QUFLTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSlI7QUFRRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUU07RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5SO0FBU0k7RUFDRSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQVBOIiwiZmlsZSI6ImNvdXJzZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtZGV0YWlscy1wYWdlIHtcbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMjc1cHg7XG4gIH1cbiAgLnlvdXR1YmUtaGFuZGxlciB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgLy8gcGFkZGluZzogNXB4IDVweCA1cHggNS41cHg7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgLy8gYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgfVxuICB9XG4gIC5wbGF5ZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgLnBsYXllci1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAucGxheS1idG4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4MjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgLmxlc3Nvbi1uYW1lIHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuc3R1ZGllZC1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICNjNmM2YzY7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "MdVw":
    /*!**************************************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/course-details/course-details.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: CourseDetailsPageModule */

    /***/
    function MdVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseDetailsPageModule", function () {
        return CourseDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/lessons.service */
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


      var ngx_y2_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-y2-player */
      "k9H9");
      /* harmony import */


      var _course_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./course-details.page */
      "poNP");

      var routes = [{
        path: '',
        component: _course_details_page__WEBPACK_IMPORTED_MODULE_8__["CourseDetailsPage"]
      }];

      var CourseDetailsPageModule = function CourseDetailsPageModule() {
        _classCallCheck(this, CourseDetailsPageModule);
      };

      CourseDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), ngx_y2_player__WEBPACK_IMPORTED_MODULE_7__["NgxY2PlayerModule"]],
        declarations: [_course_details_page__WEBPACK_IMPORTED_MODULE_8__["CourseDetailsPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"]]
      })], CourseDetailsPageModule);
      /***/
    },

    /***/
    "Xp0I":
    /*!**************************************************!*\
      !*** ./src/reactapp/pages/CourseDetailsPage.tsx ***!
      \**************************************************/

    /*! exports provided: CourseDetailsPage, default */

    /***/
    function Xp0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseDetailsPage", function () {
        return CourseDetailsPage;
      });
      /* harmony import */


      var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @chakra-ui/react */
      "gqGS");
      /* harmony import */


      var _ionic_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/react */
      "eP13");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns/fp */
      "XqfF");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ionicons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ionicons/icons */
      "/3n0");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! react */
      "q1tI");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! react-player */
      "7l9Y");
      /* harmony import */


      var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _types_and_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../types-and-hooks */
      "35Ww");
      /* harmony import */


      var _useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../useStore */
      "+9Tx");

      var formatDate = Object(date_fns_fp__WEBPACK_IMPORTED_MODULE_2__["format"])('MMM d, y');

      var CourseDetailsLoading = function CourseDetailsLoading() {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "9",
          sizeXl: "8",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
          className: "ion-padding-start"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, "Course Details")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          className: "lesson youtube-container"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "player-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
          controls: false,
          playing: false,
          width: "100%",
          height: "auto",
          // light
          config: {
            youtube: {
              playerVars: {
                showinfo: 0,
                disablekb: 1,
                controls: 0,
                cc_load_policy: 0
              }
            }
          },
          progressInterval: 500
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "player-overlay"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"], {
          color: "medium",
          name: "crescent"
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "youtube-handler ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "5",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "2",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          src: "/assets/images/lessons/play-lesson.svg"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "5",
          className: "ion-align-self-center ion-no-padding"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          className: "ion-no-padding ion-align-self-center",
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "9",
          sizeXl: "8"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "c-dark-grey"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '30%'
          }
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonText"], {
          className: "c-orange"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '80%'
          }
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "c-dark-grey"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '80%'
          }
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonText"], {
          className: "c-dark-grey"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '100%'
          }
        })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-padding-start ion-padding-end ion-padding-top ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          className: "ion-no-padding ion-align-self-center",
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "9",
          sizeXl: "8"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '100%'
          }
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '100%'
          }
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonSkeletonText"], {
          animated: true,
          style: {
            width: '100%'
          }
        }))))))));
      };

      var CourseDetails = function CourseDetails(_ref) {
        var courseDetails = _ref.courseDetails;
        var navCtrl = Object(_useStore__WEBPACK_IMPORTED_MODULE_7__["useStore"])(function (state) {
          return state.navController;
        });

        var _react__WEBPACK_IMPOR = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
            _react__WEBPACK_IMPOR2 = _slicedToArray(_react__WEBPACK_IMPOR, 2),
            showAlert = _react__WEBPACK_IMPOR2[0],
            setShowAlert = _react__WEBPACK_IMPOR2[1];

        var _react__WEBPACK_IMPOR3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
            _react__WEBPACK_IMPOR4 = _slicedToArray(_react__WEBPACK_IMPOR3, 2),
            playing = _react__WEBPACK_IMPOR4[0],
            setPlaying = _react__WEBPACK_IMPOR4[1];

        var _react__WEBPACK_IMPOR5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
            _react__WEBPACK_IMPOR6 = _slicedToArray(_react__WEBPACK_IMPOR5, 2),
            playedSeconds = _react__WEBPACK_IMPOR6[0],
            setPlayedSeconds = _react__WEBPACK_IMPOR6[1];

        var playerRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);

        function handleUnstarted() {
          console.log('Unstarted'); // const st = playerRef.current?.getCurrentTime()
          // setTimeout(() => {
          //   const ed = playerRef.current?.getCurrentTime()
          //   if (st === ed) {
          //     setPlaying(false)
          //     setShowAlert(true)
          //   }
          // }, 1200)
        }

        var firstScene = courseDetails.lessons[0].scenes[0];
        var scenePlayedSeconds = Math.max(playedSeconds - firstScene.start, 0);
        var playedRate = scenePlayedSeconds / 20 || 0;

        function handleProgress(data) {
          var _a;

          setPlayedSeconds(data.playedSeconds);

          if (data.playedSeconds >= firstScene.start + 20) {
            setPlaying(false);
            (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.seekTo(firstScene.start);
          }
        }

        function handleOnReady(player) {
          player.seekTo(Math.floor(firstScene.start));
          setPlaying(true);
        }

        var lessons = courseDetails.lessons;
        console.log({
          lessons: lessons
        });
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "8",
          sizeXl: "8",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
          className: "ion-padding-start"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, "Course Details")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          className: "lesson youtube-container"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "player-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
          ref: playerRef,
          url: "https://www.youtube.com/watch?v=".concat(courseDetails.youtubeId),
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
                cc_load_policy: 0
              },
              // embedOptions: {},
              onUnstarted: handleUnstarted
            }
          },
          progressInterval: 500,
          // onPlay={}
          onProgress: handleProgress,
          onReady: handleOnReady
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "player-overlay"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "playing-progress-bar",
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "scene-bar active",
          style: {
            flex: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "scene-progress",
          style: {
            width: "".concat(playedRate * 100, "%")
          }
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "youtube-handler ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "5",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          onClick: function onClick() {
            var _a, _b;

            var curTime = ((_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.getCurrentTime()) || 0;
            var time = Math.max(curTime - 3, Math.floor(firstScene.start));
            (_b = playerRef.current) === null || _b === void 0 ? void 0 : _b.seekTo(time);
            setPlayedSeconds(time);
          },
          src: "/assets/images/lessons/3seconds-back.svg"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "2",
          className: "ion-text-center ion-align-self-center ion-no-padding"
        }, playing ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          onClick: function onClick() {
            return setPlaying(false);
          },
          src: "/assets/images/lessons/pause-lesson.svg"
        }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          onClick: function onClick() {
            return setPlaying(true);
          },
          src: "/assets/images/lessons/play-lesson.svg"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          size: "5",
          className: "ion-align-self-center ion-no-padding"
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          className: "ion-no-padding ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "c-dark-grey"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, courseDetails.lessons.length, " Episode", courseDetails.lessons.length > 1 && 's')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonText"], {
          className: "c-orange"
        }, courseDetails.tags.split(',').map(function (tag) {
          return tag.trim();
        }).join(' ')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), courseDetails.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "c-dark-grey"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, courseDetails.title)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonText"], {
          className: "c-dark-grey"
        }, courseDetails.introduction))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], {
          className: "ion-padding-start ion-padding-end ion-padding-top ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
          className: "ion-no-padding ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonList"], null, courseDetails.lessons.map(function (lesson) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonItem"], {
            className: "pointer",
            key: lesson._id,
            detail: false,
            routerDirection: "forward",
            routerLink: "/lesson/".concat(lesson._id),
            onClick: function onClick(e) {
              e.preventDefault();
              setPlaying(false);

              if (lesson.completedAt) {
                navCtrl.navigateForward("/lesson-details/".concat(lesson._id, "/true/false"));
              } else {
                navCtrl.navigateForward("/lesson-details/".concat(lesson._id, "/false/false"));
              } // navCtrl.navigateForward(`/lesson/${lesson._id}`)

            }
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], {
            color: "dark"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
            className: "ion-no-padding lesson-name",
            size: lesson.completedAt ? '8' : '12'
          }, lesson.lessonName), lesson.completedAt && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonCol"], {
            className: "ion-no-padding studied-date",
            size: "4"
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, formatDate(new Date(lesson.completedAt)))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
            color: "medium",
            icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__["chevronForward"],
            mode: "ios",
            slot: "end"
          }));
        }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonAlert"], {
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
              // console.log('Confirm Okay')
              setPlaying(true);
            }
          }]
        })))));
      };

      var CourseDetailsPage = function CourseDetailsPage(_ref2) {
        var lessonId = _ref2.lessonId,
            isDraft = _ref2.isDraft;
        var navCtrl = Object(_useStore__WEBPACK_IMPORTED_MODULE_7__["useStore"])(function (state) {
          return state.navController;
        });

        var _Object = Object(_types_and_hooks__WEBPACK_IMPORTED_MODULE_6__["useGetCourseQuery"])({
          variables: {
            id: lessonId
          },
          skip: !lessonId
        }),
            data = _Object.data,
            loading = _Object.loading,
            error = _Object.error;

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonPage"], {
          className: "course-details-page"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], {
          mode: "ios"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], {
          mode: "ios"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], {
          slot: "start"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonButton"], {
          mode: "md",
          onClick: function onClick() {
            navCtrl.pop()["catch"](function () {
              navCtrl.navigateBack("/dashboard/lessons");
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          color: "dark",
          slot: "icon-only",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__["chevronBack"]
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], {
          slot: "end"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonButton"], {
          mode: "md",
          onClick: function onClick() {
            navCtrl.navigateRoot('/dashboard/lessons');
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], {
          color: "dark",
          mode: "md",
          slot: "icon-only",
          src: "/assets/images/home.svg"
        }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_1__["IonContent"], null, loading ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CourseDetailsLoading, null) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CourseDetails, {
          courseDetails: data.course
        })));
      };
      /* harmony default export */


      __webpack_exports__["default"] = CourseDetailsPage;
      /***/
    },

    /***/
    "poNP":
    /*!*************************************************************************************!*\
      !*** ./src/app/dashboard/lessons/my-courses/course-details/course-details.page.tsx ***!
      \*************************************************************************************/

    /*! exports provided: CourseDetailsPage */

    /***/
    function poNP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseDetailsPage", function () {
        return CourseDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _course_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./course-details.page.scss */
      "7ASm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! react */
      "q1tI");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! react-dom */
      "i8i4");
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/shared.service */
      "zuHl");
      /* harmony import */


      var src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/reactapp/AppProvider */
      "mxLC");
      /* harmony import */


      var src_reactapp_pages_CourseDetailsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/reactapp/pages/CourseDetailsPage */
      "Xp0I");

      var containerElementName = 'rcCourseDetails';

      var CourseDetailsPage = /*#__PURE__*/function () {
        function CourseDetailsPage(route, sharedService) {
          _classCallCheck(this, CourseDetailsPage);

          this.route = route;
          this.sharedService = sharedService;
          this.sharedService.gaTrackView('My Course Details Lessons Screen');
        }

        _createClass(CourseDetailsPage, [{
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
            Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["unmountComponentAtNode"])(this.containerRef.nativeElement);
          }
        }, {
          key: "render",
          value: function render() {
            if (this.containerRef) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["render"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(src_reactapp_pages_CourseDetailsPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
                lessonId: this.lessonId,
                isDraft: this.type
              })), this.containerRef.nativeElement);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              _this.lessonId = params.lessonId;
              _this.type = params.type;

              _this.render();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return CourseDetailsPage;
      }();

      CourseDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      CourseDetailsPage.propDecorators = {
        containerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [containerElementName, {
            "static": false
          }]
        }]
      };
      CourseDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-course-details',
        // templateUrl: './course-details.page.html',
        template: "<div #".concat(containerElementName, "></div>"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_course_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])], CourseDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-lessons-my-courses-course-details-course-details-module-es5.js.map