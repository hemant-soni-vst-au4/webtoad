(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-boarding-on-boarding-reminder-on-boarding-reminder-module"], {
    /***/
    "1Ggr":
    /*!*********************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-reminder/on-boarding-reminder.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: OnBoardingReminderPageModule */

    /***/
    function Ggr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingReminderPageModule", function () {
        return OnBoardingReminderPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _on_boarding_reminder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./on-boarding-reminder.page */
      "IqO9");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "cBgN");

      var routes = [{
        path: '',
        component: _on_boarding_reminder_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingReminderPage"]
      }];

      var OnBoardingReminderPageModule = function OnBoardingReminderPageModule() {
        _classCallCheck(this, OnBoardingReminderPageModule);
      };

      OnBoardingReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_on_boarding_reminder_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingReminderPage"]],
        providers: [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"]]
      })], OnBoardingReminderPageModule);
      /***/
    },

    /***/
    "IqO9":
    /*!*******************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-reminder/on-boarding-reminder.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: OnBoardingReminderPage */

    /***/
    function IqO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingReminderPage", function () {
        return OnBoardingReminderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_boarding_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-boarding-reminder.page.html */
      "PN5Z");
      /* harmony import */


      var _on_boarding_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-boarding-reminder.page.scss */
      "K8PE");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "cBgN");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].LocalNotifications;

      var OnBoardingReminderPage = /*#__PURE__*/function () {
        function OnBoardingReminderPage(datePicker, sharedService, router, platform, navController) {
          var _this = this;

          _classCallCheck(this, OnBoardingReminderPage);

          this.datePicker = datePicker;
          this.sharedService = sharedService;
          this.router = router;
          this.platform = platform;
          this.navController = navController;
          this.isStart = false;
          this.isDesktop = false;
          this.platform.ready().then(function () {
            if (_this.platform.is('android') || _this.platform.is('ios')) {
              _this.isDesktop = false;
            } else {
              _this.isDesktop = true;
            }

            _this.sharedService.gaTrackView('On-Boarding Set Reminder Screen');
          })["catch"](function (error) {
            console.log(error);
          });
        }

        _createClass(OnBoardingReminderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            LocalNotifications.requestPermission();
          }
        }, {
          key: "setReminder",
          value: function setReminder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var date;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.datePicker.show({
                        date: new Date(),
                        mode: 'time',
                        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
                      });

                    case 3:
                      date = _context.sent;
                      this.sharedService.setNativeStorage('reminder', date.getTime());
                      _context.next = 7;
                      return this.setReminderTime(date);

                    case 7:
                      this.reminderTime = date.getTime();
                      this.reminder = true;
                      _context.next = 14;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](0);
                      console.log('Error occurred while getting date: ', _context.t0);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 11]]);
            }));
          }
        }, {
          key: "onChangeReminder",
          value: function onChangeReminder(event) {
            console.log(event);

            if (event.detail.checked === false) {
              this.sharedService.removeNativeStorage('reminder');
              this.reminder = false;
              this.reminderTime = undefined;
              LocalNotifications.cancel({
                notifications: [{
                  id: '42'
                }]
              });
            } else if (event.detail.checked) {
              this.setReminder();
            } else {
              this.sharedService.removeNativeStorage('reminder');
              this.reminderTime = undefined;
              LocalNotifications.cancel({
                notifications: [{
                  id: '42'
                }]
              });
            }
          }
        }, {
          key: "setReminderTime",
          value: function setReminderTime(date) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var time, notifs;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      time = new Date(date.getTime());
                      _context2.next = 3;
                      return LocalNotifications.schedule({
                        notifications: [{
                          id: 42,
                          title: 'SpeakyPeaky',
                          body: '20 mins a day = big gains in 3 months',
                          schedule: {
                            repeats: true,
                            every: 'day',
                            on: {
                              hour: time.getHours(),
                              minute: time.getMinutes()
                            }
                          },
                          sound: null,
                          attachments: null,
                          actionTypeId: '',
                          extra: null
                        }]
                      });

                    case 3:
                      notifs = _context2.sent;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "goToDashboard",
          value: function goToDashboard() {
            var _this2 = this;

            this.isStart = true;
            this.sharedService.setNativeStorage('isOnBoarding', true);
            setTimeout(function () {
              _this2.navController.setDirection('root');

              _this2.router.navigate(['/dashboard']);
            }, 5000);
          }
        }]);

        return OnBoardingReminderPage;
      }();

      OnBoardingReminderPage.ctorParameters = function () {
        return [{
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      OnBoardingReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-on-boarding-reminder',
        template: _raw_loader_on_boarding_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_boarding_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], OnBoardingReminderPage);
      /***/
    },

    /***/
    "K8PE":
    /*!*********************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-reminder/on-boarding-reminder.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function K8PE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toggle {\n  --background-checked: var(--color-orange);\n}\n\na,\nimg {\n  display: block;\n}\n\nimg {\n  margin: 0 auto;\n}\n\nh4 {\n  font-weight: 400;\n}\n\n.on-boarding-text {\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uLWJvYXJkaW5nLXJlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0YiLCJmaWxlIjoib24tYm9hcmRpbmctcmVtaW5kZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xufVxuYSxcbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ub24tYm9hcmRpbmctdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "PN5Z":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding/on-boarding-reminder/on-boarding-reminder.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PN5Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"h-100\">\n    <ion-row class=\"h-100 ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\" *ngIf=\"isStart === false; else notStarted\">\n        <ion-row *ngIf=\"reminderTime === undefined; else gotReminder\"\n          class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <h3 class=\"ion-text-center ion-margin-bottom\">\n              3 ) Would you like to receive a reminder?\n            </h3>\n            <p class=\"ion-text-center ion-margin-bottom\">\n              It's most effective <br />\n              if you make it your habit\n            </p>\n          </ion-col>\n        </ion-row>\n        <ng-template #gotReminder>\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n              <h3 class=\"ion-text-center ion-margin-bottom\">\n                We will send you a nudge <br />\n                at\n                <ion-text class=\"c-orange\">\n                  {{ reminderTime | date: 'shortTime' }}\n                </ion-text>\n                everyday\n              </h3>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n        <ion-row *ngIf=\"reminderTime === undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"10\" sizeSm=\"10\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">Yes, set a reminder. <br />\n                <ion-text color=\"medium\">(Push notification)</ion-text>\n              </ion-label>\n              <ion-toggle mode=\"ios\" checked=\"false\" (ionChange)=\"onChangeReminder($event)\"></ion-toggle>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"reminderTime !== undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"3\" sizeSm=\"3\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-text-center ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-toggle mode=\"ios\" checked=\"true\" (ionChange)=\"onChangeReminder($event)\"></ion-toggle>\n            </ion-item>\n            <a class=\"c-orange ion-margin-top\" (click)=\"setReminder()\">Edit</a>\n\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row *ngIf=\"reminderTime !== undefined\" class=\"mt-45 ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <p class=\"ion-text-center c-orange\">\n              If you can’t fly, then run, if you can’t run, then walk, if you can’t walk, then crawl, but whatever you\n              do you have to keep moving forward. - Martin Luther King, Jr.\n            </p>\n          </ion-col>\n        </ion-row> -->\n        <ion-row class=\"mt-45 ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" (click)=\"goToDashboard()\">\n              OKAY, NEXT QUESTION</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ng-template #notStarted>\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <ion-row class=\"ion-justify-content-center ion-margin-bottom\">\n            <ion-col sizeXs=\"7\" sizeSm=\"7\" sizeLg=\"2\" sizeXl=\"2\" sizeMd=\"2\" class=\"ion-align-self-center\">\n              <img src=\"../../../assets/images/loading.gif\" width=\"75%\" />\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"4\" sizeXl=\"4\" sizeMd=\"6\"\n              class=\"ion-text-center ion-align-self-center\">\n              <h1 class=\"on-boarding-text\">\n                Just a moment... <br />while we’re developing<br />\n                your personalized lessons\n              </h1>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ng-template>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-boarding-on-boarding-reminder-on-boarding-reminder-module-es5.js.map