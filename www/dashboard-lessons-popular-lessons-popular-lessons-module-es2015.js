(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-popular-lessons-popular-lessons-module"],{

/***/ "G6q8":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/lessons/popular-lessons/popular-lessons.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 170px;\n  height: 120px;\n  --border-radius: 10px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n@media only screen and (max-width: 414px) {\n  ion-content ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BvcHVsYXItbGVzc29ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBRE47QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUVNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVNO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtBQUFSO0FBS0E7RUFJUTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBTFI7QUFDRiIsImZpbGUiOiJwb3B1bGFyLWxlc3NvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIGgyLmlvbi10ZXh0LXdyYXAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNWVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBpb24tbGlzdCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "Hh7y":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/lessons/popular-lessons/popular-lessons.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PopularLessonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularLessonsPageModule", function() { return PopularLessonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _popular_lessons_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popular-lessons.page */ "MAJ5");








const routes = [
    {
        path: '',
        component: _popular_lessons_page__WEBPACK_IMPORTED_MODULE_7__["PopularLessonsPage"],
    },
];
let PopularLessonsPageModule = class PopularLessonsPageModule {
};
PopularLessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_popular_lessons_page__WEBPACK_IMPORTED_MODULE_7__["PopularLessonsPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"]],
    })
], PopularLessonsPageModule);



/***/ }),

/***/ "MAJ5":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/lessons/popular-lessons/popular-lessons.page.ts ***!
  \***************************************************************************/
/*! exports provided: PopularLessonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularLessonsPage", function() { return PopularLessonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popular_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popular-lessons.page.html */ "fFBO");
/* harmony import */ var _popular_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popular-lessons.page.scss */ "G6q8");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








let PopularLessonsPage = class PopularLessonsPage {
    constructor(router, sharedService, navController, lessonsService) {
        this.router = router;
        this.sharedService = sharedService;
        this.navController = navController;
        this.lessonsService = lessonsService;
        this.popularLessons = [];
        this.total = 0;
        this.nextPage = 1;
        this.isPopularLessons = false;
        this.isPopularLessons = true;
        this.sharedService.gaTrackView('Popular Lessons Screen');
    }
    ionViewWillEnter() {
        this.getPopularLessons();
    }
    ngOnInit() { }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    getPopularLessons(event) {
        try {
            this.lessonsService.getPopularLessons(this.nextPage).subscribe((res) => {
                if (this.nextPage === 1) {
                    this.popularLessons = [];
                }
                if (res.data.length) {
                    res.data.forEach((ele) => {
                        if (ele['videoLevel'] === 'Elementary') {
                            ele['videoLevel'] = 'Upper-beginner';
                        }
                        ele['thumbnail'] =
                            'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';
                        this.popularLessons.push(ele);
                    });
                    this.nextPage++;
                    this.total = res.total;
                }
                if (event) {
                    event.target.complete();
                }
                this.isPopularLessons = false;
            }, (error) => { });
        }
        catch (error) {
            this.isPopularLessons = false;
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
            this.isPopularLessons = true;
            this.getPopularLessons(event);
        }, 500);
    }
};
PopularLessonsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"] }
];
PopularLessonsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
PopularLessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-popular-lessons',
        template: _raw_loader_popular_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popular_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]])
], PopularLessonsPage);



/***/ }),

/***/ "fFBO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/popular-lessons/popular-lessons.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Popular Lessons</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item\n            *ngFor=\"let item of popularLessons\"\n            mode=\"md\"\n            [routerLink]=\"['/lesson-details', item.subLessonId, false, false]\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"{{ item.thumbnail }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">{{ item.lessonName }}</h2>\n              <p>\n                {{ item.videoLevel }}\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"isPopularLessons\" mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item mode=\"md\" *ngFor=\"let item of [0, 1, 2, 3, 4, 5]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">\n                <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 75%;\"></ion-skeleton-text>\n              </h2>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=dashboard-lessons-popular-lessons-popular-lessons-module-es2015.js.map