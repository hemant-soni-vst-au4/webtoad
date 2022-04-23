(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "B3xu":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color-selected: #e22d2d;\n}\nion-tab-button ion-label#user-name {\n  width: 140px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.swipe-area {\n  height: 100%;\n  width: 100%;\n}\nion-toolbar {\n  --min-height: 65px !important;\n}\n.speaky-peaky-logo {\n  cursor: pointer;\n  height: 60px !important;\n  margin: 0 auto;\n}\n.speaky-peaky-logo:focus {\n  outline: none;\n}\n.speaky-peaky-logo ion-img {\n  height: 60px;\n}\n@media only screen and (max-width: 414px) {\n  ion-tab-button ion-label#user-name {\n    width: 78px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUo7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUY7QUFBQTtFQUNFLDZCQUFBO0FBR0Y7QUFEQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFJRjtBQUZFO0VBQ0UsYUFBQTtBQUlKO0FBRkU7RUFFRSxZQUFBO0FBR0o7QUFBQTtFQUVJO0lBQ0UsV0FBQTtFQUVKO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2UyMmQyZDtcbiAgaW9uLWxhYmVsI3VzZXItbmFtZSB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuLnN3aXBlLWFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cbi5zcGVha3ktcGVha3ktbG9nbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgLy8gd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIGlvbi1sYWJlbCN1c2VyLW5hbWUge1xuICAgICAgd2lkdGg6IDc4cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "KR73":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"isDesktop === true\">\n  <ion-toolbar>\n    <div fill=\"none\" class=\"speaky-peaky-logo\" [routerLink]=\"['/dashboard/lessons']\"\n      routerLinkActive=\"router-link-active\">\n      <ion-img src=\"../../assets/images/speaky-peaky_logo.png\"></ion-img>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n\n    <ion-tabs (ionTabsDidChange)=\"tabChanged($event)\" (tabChange)=\"onTabChange($event)\" #tab\n      *ngIf=\"isDesktop === true; else mobile\">\n      <ion-tab-bar class=\"desktop-tab-bar\" slot=\"top\">\n        <ng-container *ngTemplateOutlet=\"tabs\"></ng-container>\n      </ion-tab-bar>\n    </ion-tabs>\n\n    <ng-template #mobile>\n      <ion-tabs appSwipeTab (ionTabsDidChange)=\"tabChanged($event)\" (tabChange)=\"onTabChange($event)\" #tab>\n        <ion-tab-bar class=\"desktop-tab-bar\" slot=\"bottom\">\n          <ng-container *ngTemplateOutlet=\"tabs\"></ng-container>\n        </ion-tab-bar>\n      </ion-tabs>\n    </ng-template>\n\n    <ng-template #tabs>\n      <ion-tab-button tab=\"lessons\">\n        <ion-icon\n          [src]=\"selected === 'lessons' ? '../../assets/images/bottom-tab/lesson-active.svg': '../../assets/images/bottom-tab/lessons.svg'\">\n        </ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"search-lessons\">\n        <ion-icon\n          [src]=\"selected === 'search-lessons' ? '../../assets/images/bottom-tab/search-active.svg': '../../assets/images/bottom-tab/search.svg'\">\n        </ion-icon>\n        <ion-label>Library</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"review\">\n        <ion-icon\n          [src]=\"selected === 'review' ? '../../assets/images/bottom-tab/review-active.svg': '../../assets/images/bottom-tab/review.svg'\">\n        </ion-icon>\n        <ion-label>Review</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"profile\">\n        <ion-icon\n          [src]=\"selected === 'profile' ? '../../assets/images/bottom-tab/profile-active.svg': '../../assets/images/bottom-tab/profile.svg'\">\n        </ion-icon>\n        <ion-label id=\"user-name\" *ngIf=\"profile; else noProfile\">{{ profile?.fullName | titlecase }}</ion-label>\n        <ng-template #noProfile>\n          <ion-label id=\"user-name\">Profile</ion-label>\n        </ng-template>\n      </ion-tab-button>\n    </ng-template>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "NcNw":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "KR73");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "B3xu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/lessons.service */ "s1uX");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









let DashboardPage = class DashboardPage {
    constructor(sharedService, platform, lessonsService, router, navController, toastController, loadingController, actionSheetController, onBoardingService) {
        this.sharedService = sharedService;
        this.platform = platform;
        this.lessonsService = lessonsService;
        this.router = router;
        this.navController = navController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.onBoardingService = onBoardingService;
        this.isDesktop = false;
        this.selected = 'lessons';
        sharedService.getDeviceInfo().then((info) => {
            this.isDesktop = info.isDesktop;
            this.getUserProfile();
            this.sharedService.gaTrackView('Dashboard Screen');
        });
    }
    ngOnInit() {
        this.sharedService
            .getNativeStorage('leftOfData')
            .then((leftOfData) => {
            if (leftOfData === null || leftOfData === void 0 ? void 0 : leftOfData.data) {
                this.showQuickActions(leftOfData.data);
            }
        })
            .catch((error) => {
            console.log(error);
        });
        // loads channel.io script when device is desktop
        if (this.platform.is('desktop')) {
            this.loadScripts();
        }
    }
    showQuickActions(details) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [
                    {
                        text: 'Resume where I left off',
                        handler: () => {
                            this.navController.setDirection('forward');
                            this.router.navigate(['/lesson-steps', details.lessonID, false, 'resume']);
                        },
                    },
                    {
                        text: "Begin today's recommended lesson",
                        handler: () => {
                            this.gotoTodaysLesson();
                        },
                    },
                    {
                        text: 'Explore other lessons',
                        handler: () => {
                            this.router.navigate(['/dashboard/search-lessons']);
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    gotoTodaysLesson() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Please wait...' });
            try {
                yield loading.present();
                const res = yield this.lessonsService.getTodaysLesson().toPromise();
                loading.dismiss();
                this.navController.setDirection('forward');
                this.router.navigate(['/lesson-details', res.data.subLessonId, false, false]);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                loading.dismiss();
            }
        });
    }
    tabChanged(event) {
        this.sharedService.gaTrackEvent('TabChangedDashBoard', event);
        if (event.tab !== 'profile') {
            if (this.sharedService.video.value.target) {
                this.sharedService.video.value.target.stopVideo();
            }
        }
        this.getUserProfile();
        this.selected = this.tabRef.getSelected();
    }
    onTabChange($event) {
        this.tabRef.select($event);
    }
    getUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.onBoardingService.getUserProfile().toPromise();
                this.profile = res.data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // loades channel.io widget on desktop size devices only
    loadScripts() {
        const dynamicScripts = '../../../../assets/js/channel.js';
        const node = document.createElement('script');
        node.src = dynamicScripts;
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__["LessonsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"] }
];
DashboardPage.propDecorators = {
    tabRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['tab', { static: false },] }]
};
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__["LessonsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_5__["OnBoardingService"]])
], DashboardPage);



/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"],
        children: [
            {
                path: 'lessons',
                loadChildren: () => Promise.all(/*! import() | lessons-lessons-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("lessons-lessons-module")]).then(__webpack_require__.bind(null, /*! ./lessons/lessons.module */ "SrrV")).then((m) => m.LessonsPageModule),
            },
            {
                path: 'search-lessons',
                loadChildren: () => Promise.all(/*! import() | search-lessons-search-lessons-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("search-lessons-search-lessons-module")]).then(__webpack_require__.bind(null, /*! ./search-lessons/search-lessons.module */ "jSAL")).then((m) => m.SearchLessonsPageModule),
            },
            {
                path: 'review',
                loadChildren: () => Promise.all(/*! import() | review-review-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("common"), __webpack_require__.e("review-review-module")]).then(__webpack_require__.bind(null, /*! ./review/review.module */ "bZRo")).then((m) => m.ReviewPageModule),
            },
            {
                path: 'review/:isCompleted',
                loadChildren: () => Promise.all(/*! import() | review-review-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("common"), __webpack_require__.e("review-review-module")]).then(__webpack_require__.bind(null, /*! ./review/review.module */ "bZRo")).then((m) => m.ReviewPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~bc0d1c68"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~user-profile-user-pr~652bf6cb"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./user-profile/user-profile.module */ "CjAk")).then((m) => m.UserProfilePageModule),
            },
            {
                path: '',
                redirectTo: '/dashboard/lessons',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/dashboard/lessons',
        pathMatch: 'full',
    },
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], DashboardPageModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map