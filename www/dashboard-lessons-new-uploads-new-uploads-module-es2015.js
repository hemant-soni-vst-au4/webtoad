(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-new-uploads-new-uploads-module"],{

/***/ "51GO":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/new-uploads/new-uploads.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>New Uploads</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item\n            *ngFor=\"let item of sharedService.removeDuplicatesByProperty(newUploadsLessons, '_id')\"\n            mode=\"md\"\n            [routerLink]=\"['/lesson-details', item.subLessonId, false, false]\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"{{ item.thumbnail }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">{{ item.lessonName }}</h2>\n              <p>\n                {{ item.videoLevel }}\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"isNewUploadLessons\" mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item mode=\"md\" *ngFor=\"let item of [0, 1, 2, 3, 4, 5]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">\n                <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 75%;\"></ion-skeleton-text>\n              </h2>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "BB7H":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/lessons/new-uploads/new-uploads.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewUploadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUploadsPageModule", function() { return NewUploadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _new_uploads_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-uploads.page */ "NaL6");









const routes = [
    {
        path: '',
        component: _new_uploads_page__WEBPACK_IMPORTED_MODULE_8__["NewUploadsPage"],
    },
];
let NewUploadsPageModule = class NewUploadsPageModule {
};
NewUploadsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_new_uploads_page__WEBPACK_IMPORTED_MODULE_8__["NewUploadsPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_2__["LessonsService"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]],
    })
], NewUploadsPageModule);



/***/ }),

/***/ "NaL6":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/lessons/new-uploads/new-uploads.page.ts ***!
  \*******************************************************************/
/*! exports provided: NewUploadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUploadsPage", function() { return NewUploadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_uploads_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-uploads.page.html */ "51GO");
/* harmony import */ var _new_uploads_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-uploads.page.scss */ "qwXd");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../global/global.service */ "Nrpk");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");










let NewUploadsPage = class NewUploadsPage {
    constructor(router, sharedService, onBoardingService, navController, lessonsService, globalService) {
        this.router = router;
        this.sharedService = sharedService;
        this.onBoardingService = onBoardingService;
        this.navController = navController;
        this.lessonsService = lessonsService;
        this.globalService = globalService;
        this.newUploadsLessons = [];
        this.total = 0;
        this.nextPage = 1;
        this.isNewUploadLessons = false;
        this.sharedService.gaTrackView('New Uploaded Lessons Screen');
        this.isNewUploadLessons = true;
        this.today = this.globalService.weekdays[new Date().getDay()];
    }
    ionViewWillEnter() {
        this.getUserProfile();
    }
    ngOnInit() { }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    getUserProfile() {
        try {
            this.onBoardingService.getUserProfile().subscribe((res) => {
                this.profile = res.data;
                if (this.profile) {
                    if (this.profile.userLevelId === '5b117087602e39d075e7cfcc') {
                        this.userLevel = 'Elementary';
                    }
                    else if (this.profile.userLevelId === '5b117088602e39d075e7cfcd') {
                        this.userLevel = 'Advanced';
                    }
                    else {
                        this.userLevel = 'Intermediate';
                    }
                    this.getNewUploadsLessons();
                }
            }, (error) => { });
        }
        catch (error) {
            console.log(error);
        }
    }
    getNewUploadsLessons(event) {
        if (this.today === 'Saturday' || this.today === 'Sunday') {
            this.today = 'Weekend';
        }
        try {
            this.lessonsService.getNewUploadsLessons(this.nextPage).subscribe((res) => {
                if (this.nextPage === 1) {
                    this.newUploadsLessons = [];
                }
                if (res.data.length) {
                    res.data.forEach((ele) => {
                        if (ele['videoLevel'] === 'Elementary') {
                            ele['videoLevel'] = 'Upper-beginner';
                        }
                        ele['thumbnail'] =
                            'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';
                        this.newUploadsLessons.push(ele);
                    });
                    this.nextPage++;
                    this.total = res.total;
                }
                if (event) {
                    event.target.complete();
                }
                this.isNewUploadLessons = false;
            }, (error) => { });
        }
        catch (error) {
            this.isNewUploadLessons = false;
            console.log(error);
        }
    }
    back() {
        this.navController.setDirection('back');
        this.router.navigate(['/dashboard/lessons']);
    }
    loadData(event) {
        setTimeout(() => {
            if (this.nextPage === this.total) {
                event.target.disabled = true;
            }
            this.isNewUploadLessons = true;
            this.getNewUploadsLessons(event);
        }, 500);
    }
};
NewUploadsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_5__["LessonsService"] },
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
NewUploadsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
NewUploadsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-new-uploads',
        template: _raw_loader_new_uploads_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_uploads_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _services_lessons_service__WEBPACK_IMPORTED_MODULE_5__["LessonsService"],
        _global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], NewUploadsPage);



/***/ }),

/***/ "qwXd":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/lessons/new-uploads/new-uploads.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 170px;\n  height: 120px;\n  --border-radius: 10px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n@media only screen and (max-width: 414px) {\n  ion-content ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy11cGxvYWRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUVNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRU07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRU07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FBQVI7QUFLQTtFQUlRO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFMUjtBQUNGIiwiZmlsZSI6Im5ldy11cGxvYWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICBoMi5pb24tdGV4dC13cmFwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzVlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMi43ZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICBpb24tY29udGVudCB7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=dashboard-lessons-new-uploads-new-uploads-module-es2015.js.map