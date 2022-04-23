(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-reminder-reminder-module"], {
    /***/
    "3uKr":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/reminder/reminder.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uKr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Reminder</strong></h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"reminder-block ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row *ngIf=\"reminderTime === undefined; else gotReminder\"\n          class=\"ion-align-items-center ion-justify-content-center ion-text-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-icon class=\"alarm\" src=\"../../../../../assets/images/alarm.svg\"></ion-icon>\n            <h3 class=\"ion-text-center ion-margin-bottom\">\n              Would you like to receive a reminder?\n            </h3>\n          </ion-col>\n        </ion-row>\n        <ng-template #gotReminder>\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\"\n              class=\"ion-align-self-center ion-text-center ion-margin-top\">\n              <ion-icon class=\"alarm\" src=\"../../../../../assets/images/alarm.svg\"></ion-icon>\n              <h3 class=\"ion-text-center ion-margin-bottom\">\n                We will send you a nudge <br />\n                at\n                <ion-text class=\"c-orange\">\n                  {{ reminderTime | date: 'shortTime' }}\n                </ion-text>\n                everyday\n              </h3>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n\n        <ion-row *ngIf=\"reminderTime === undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"10\" sizeSm=\"10\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">Yes, set a reminder. <br />\n                <ion-text color=\"medium\">(Push notification)</ion-text>\n              </ion-label>\n              <ion-toggle mode=\"ios\" checked=\"false\" (ionChange)=\"onChangeReminder($event)\">\n              </ion-toggle>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"reminderTime !== undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"4\" sizeSm=\"4\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-text-center ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-toggle mode=\"ios\" checked=\"true\" (ionChange)=\"onChangeReminder($event)\"></ion-toggle>\n            </ion-item>\n            <a class=\"c-orange ion-margin-top\" (click)=\"setReminder()\">Edit</a>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "7wzL":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function wzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".reminder-block {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.reminder-block ion-toggle {\n  --background-checked: var(--color-orange);\n  margin: 0 auto;\n}\n.reminder-block .alarm {\n  font-size: 30px;\n}\n.reminder-block h3 {\n  margin-top: 5px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJyZW1pbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtaW5kZXItYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24tdG9nZ2xlIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tY29sb3Itb3JhbmdlKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuYWxhcm0ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "hu06":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ReminderPageModule */

    /***/
    function hu06(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderPageModule", function () {
        return ReminderPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "cBgN");
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


      var _reminder_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./reminder.page */
      "k6v6");

      var routes = [{
        path: '',
        component: _reminder_page__WEBPACK_IMPORTED_MODULE_7__["ReminderPage"]
      }];

      var ReminderPageModule = function ReminderPageModule() {
        _classCallCheck(this, ReminderPageModule);
      };

      ReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_reminder_page__WEBPACK_IMPORTED_MODULE_7__["ReminderPage"]],
        providers: [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
      })], ReminderPageModule);
      /***/
    },

    /***/
    "k6v6":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.page.ts ***!
      \**************************************************************************/

    /*! exports provided: ReminderPage */

    /***/
    function k6v6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderPage", function () {
        return ReminderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reminder.page.html */
      "3uKr");
      /* harmony import */


      var _reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reminder.page.scss */
      "7wzL");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "cBgN");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].LocalNotifications;

      var ReminderPage = /*#__PURE__*/function () {
        function ReminderPage(router, alertController, datePicker, datePipe, platform, sharedService, navController) {
          _classCallCheck(this, ReminderPage);

          this.router = router;
          this.alertController = alertController;
          this.datePicker = datePicker;
          this.datePipe = datePipe;
          this.platform = platform;
          this.sharedService = sharedService;
          this.navController = navController;
          this.reminder = false;
          this.isDesktop = false;
          this.isStart = false;
        }

        _createClass(ReminderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            LocalNotifications.requestPermission();
            Promise.all([this.sharedService.getNativeStorage('reminder')]).then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  reminder = _ref2[0];

              if (reminder === null || reminder === void 0 ? void 0 : reminder.data) {
                _this.reminderTime = new Date(reminder.data).toISOString();
                _this.reminder = true;

                _this.setReminderTime(new Date(reminder.data));
              }
            });
          }
        }, {
          key: "setReminder",
          value: function setReminder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var date, alert;
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
                      _context.next = 11;
                      return this.alertController.create({
                        header: 'Reminder is set!',
                        message: 'Perfect. We will send you a nudge at <strong>' + this.datePipe.transform(date, 'h:mm a') + '</strong> everyday',
                        cssClass: 'user-level-alert',
                        buttons: ['OK']
                      });

                    case 11:
                      alert = _context.sent;
                      _context.next = 14;
                      return alert.present();

                    case 14:
                      _context.next = 19;
                      break;

                    case 16:
                      _context.prev = 16;
                      _context.t0 = _context["catch"](0);
                      console.log('Error occurred while getting date: ', _context.t0);

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 16]]);
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
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/setting']);
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
                      console.log('scheduled notifications', notifs);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return ReminderPage;
      }();

      ReminderPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      ReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-reminder',
        template: _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], ReminderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-reminder-reminder-module-es5.js.map