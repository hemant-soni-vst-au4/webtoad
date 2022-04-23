(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-reminder-reminder-module"],{

/***/ "3uKr":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/reminder/reminder.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Reminder</strong></h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"reminder-block ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row *ngIf=\"reminderTime === undefined; else gotReminder\"\n          class=\"ion-align-items-center ion-justify-content-center ion-text-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-icon class=\"alarm\" src=\"../../../../../assets/images/alarm.svg\"></ion-icon>\n            <h3 class=\"ion-text-center ion-margin-bottom\">\n              Would you like to receive a reminder?\n            </h3>\n          </ion-col>\n        </ion-row>\n        <ng-template #gotReminder>\n          <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeLg=\"6\" sizeMd=\"7\" sizeXl=\"4\"\n              class=\"ion-align-self-center ion-text-center ion-margin-top\">\n              <ion-icon class=\"alarm\" src=\"../../../../../assets/images/alarm.svg\"></ion-icon>\n              <h3 class=\"ion-text-center ion-margin-bottom\">\n                We will send you a nudge <br />\n                at\n                <ion-text class=\"c-orange\">\n                  {{ reminderTime | date: 'shortTime' }}\n                </ion-text>\n                everyday\n              </h3>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n\n        <ion-row *ngIf=\"reminderTime === undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"10\" sizeSm=\"10\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">Yes, set a reminder. <br />\n                <ion-text color=\"medium\">(Push notification)</ion-text>\n              </ion-label>\n              <ion-toggle mode=\"ios\" checked=\"false\" (ionChange)=\"onChangeReminder($event)\">\n              </ion-toggle>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"reminderTime !== undefined\" class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"4\" sizeSm=\"4\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-text-center ion-align-self-center\">\n            <ion-item lines=\"none\">\n              <ion-toggle mode=\"ios\" checked=\"true\" (ionChange)=\"onChangeReminder($event)\"></ion-toggle>\n            </ion-item>\n            <a class=\"c-orange ion-margin-top\" (click)=\"setReminder()\">Edit</a>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "7wzL":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reminder-block {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.reminder-block ion-toggle {\n  --background-checked: var(--color-orange);\n  margin: 0 auto;\n}\n.reminder-block .alarm {\n  font-size: 30px;\n}\n.reminder-block h3 {\n  margin-top: 5px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJyZW1pbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtaW5kZXItYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24tdG9nZ2xlIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tY29sb3Itb3JhbmdlKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuYWxhcm0ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "hu06":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReminderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPageModule", function() { return ReminderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "cBgN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _reminder_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reminder.page */ "k6v6");








const routes = [
    {
        path: '',
        component: _reminder_page__WEBPACK_IMPORTED_MODULE_7__["ReminderPage"],
    },
];
let ReminderPageModule = class ReminderPageModule {
};
ReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_reminder_page__WEBPACK_IMPORTED_MODULE_7__["ReminderPage"]],
        providers: [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
    })
], ReminderPageModule);



/***/ }),

/***/ "k6v6":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user-profile/setting/reminder/reminder.page.ts ***!
  \**************************************************************************/
/*! exports provided: ReminderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPage", function() { return ReminderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reminder.page.html */ "3uKr");
/* harmony import */ var _reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminder.page.scss */ "7wzL");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "cBgN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");










const { LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let ReminderPage = class ReminderPage {
    constructor(router, alertController, datePicker, datePipe, platform, sharedService, navController) {
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
    ngOnInit() { }
    ionViewWillEnter() {
        LocalNotifications.requestPermission();
        Promise.all([this.sharedService.getNativeStorage('reminder')]).then(([reminder]) => {
            if (reminder === null || reminder === void 0 ? void 0 : reminder.data) {
                this.reminderTime = new Date(reminder.data).toISOString();
                this.reminder = true;
                this.setReminderTime(new Date(reminder.data));
            }
        });
    }
    setReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const date = yield this.datePicker.show({
                    date: new Date(),
                    mode: 'time',
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
                });
                this.sharedService.setNativeStorage('reminder', date.getTime());
                yield this.setReminderTime(date);
                this.reminderTime = date.getTime();
                this.reminder = true;
                const alert = yield this.alertController.create({
                    header: 'Reminder is set!',
                    message: 'Perfect. We will send you a nudge at <strong>' +
                        this.datePipe.transform(date, 'h:mm a') +
                        '</strong> everyday',
                    cssClass: 'user-level-alert',
                    buttons: ['OK'],
                });
                yield alert.present();
            }
            catch (err) {
                console.log('Error occurred while getting date: ', err);
            }
        });
    }
    onChangeReminder(event) {
        console.log(event);
        if (event.detail.checked === false) {
            this.sharedService.removeNativeStorage('reminder');
            this.reminder = false;
            this.reminderTime = undefined;
            LocalNotifications.cancel({ notifications: [{ id: '42' }] });
        }
        else if (event.detail.checked) {
            this.setReminder();
        }
        else {
            this.sharedService.removeNativeStorage('reminder');
            this.reminderTime = undefined;
            LocalNotifications.cancel({ notifications: [{ id: '42' }] });
        }
    }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/setting']);
    }
    setReminderTime(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const time = new Date(date.getTime());
            const notifs = yield LocalNotifications.schedule({
                notifications: [
                    {
                        id: 42,
                        title: 'SpeakyPeaky',
                        body: '20 mins a day = big gains in 3 months',
                        schedule: {
                            repeats: true,
                            every: 'day',
                            on: {
                                hour: time.getHours(),
                                minute: time.getMinutes(),
                            },
                        },
                        sound: null,
                        attachments: null,
                        actionTypeId: '',
                        extra: null,
                    },
                ],
            });
            console.log('scheduled notifications', notifs);
        });
    }
};
ReminderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-reminder',
        template: _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], ReminderPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-user-profile-setting-reminder-reminder-module-es2015.js.map