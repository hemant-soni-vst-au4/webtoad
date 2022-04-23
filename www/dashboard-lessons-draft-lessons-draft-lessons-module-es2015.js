(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-draft-lessons-draft-lessons-module"],{

/***/ "fsP7":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/lessons/draft-lessons/draft-lessons-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DraftLessonsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftLessonsPageRoutingModule", function() { return DraftLessonsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _draft_lessons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draft-lessons.page */ "pW3g");




const routes = [
    {
        path: '',
        component: _draft_lessons_page__WEBPACK_IMPORTED_MODULE_3__["DraftLessonsPage"],
    },
];
let DraftLessonsPageRoutingModule = class DraftLessonsPageRoutingModule {
};
DraftLessonsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DraftLessonsPageRoutingModule);



/***/ }),

/***/ "jg/9":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/lessons/draft-lessons/draft-lessons.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 170px;\n  height: 120px;\n  --border-radius: 10px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n@media only screen and (max-width: 414px) {\n  ion-content ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RyYWZ0LWxlc3NvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUROO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUFBUjtBQUtBO0VBSVE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUxSO0FBQ0YiLCJmaWxlIjoiZHJhZnQtbGVzc29ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgaDIuaW9uLXRleHQtd3JhcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1ZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "jg6N":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/lessons/draft-lessons/draft-lessons.module.ts ***!
  \*************************************************************************/
/*! exports provided: DraftLessonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftLessonsPageModule", function() { return DraftLessonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _draft_lessons_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draft-lessons-routing.module */ "fsP7");
/* harmony import */ var _draft_lessons_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draft-lessons.page */ "pW3g");








let DraftLessonsPageModule = class DraftLessonsPageModule {
};
DraftLessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _draft_lessons_routing_module__WEBPACK_IMPORTED_MODULE_6__["DraftLessonsPageRoutingModule"]],
        declarations: [_draft_lessons_page__WEBPACK_IMPORTED_MODULE_7__["DraftLessonsPage"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"]],
    })
], DraftLessonsPageModule);



/***/ }),

/***/ "lvxz":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/draft-lessons/draft-lessons.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Draft Lessons</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding ion-align-self-center\" sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\">\n        <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item\n            *ngFor=\"let item of draftLessons\"\n            mode=\"md\"\n            [routerLink]=\"['/lesson-details', item.subLessonId, false, true]\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"{{ item.thumbnail }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">{{ item.lessonName }}</h2>\n              <p>\n                {{ item.videoLevel }}\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"isDraftLessons\" mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n          <ion-item mode=\"md\" *ngFor=\"let item of [0, 1, 2, 3, 4, 5]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../../../../assets/images/thumbnail-youtube.jpg\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2 class=\"ion-text-wrap\">\n                <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 75%;\"></ion-skeleton-text>\n              </h2>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n            <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "pW3g":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/lessons/draft-lessons/draft-lessons.page.ts ***!
  \***********************************************************************/
/*! exports provided: DraftLessonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftLessonsPage", function() { return DraftLessonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_draft_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./draft-lessons.page.html */ "lvxz");
/* harmony import */ var _draft_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draft-lessons.page.scss */ "jg/9");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/lessons.service */ "s1uX");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/shared.service */ "zuHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");








let DraftLessonsPage = class DraftLessonsPage {
    constructor(router, sharedService, navController, lessonsService) {
        this.router = router;
        this.sharedService = sharedService;
        this.navController = navController;
        this.lessonsService = lessonsService;
        this.draftLessons = [];
        this.total = 0;
        this.nextPage = 1;
        this.isDraftLessons = false;
        this.isDraftLessons = true;
        this.sharedService.gaTrackView('Popular Lessons Screen');
    }
    ionViewWillEnter() {
        this.getDraftLessons();
    }
    ngOnInit() { }
    home() {
        this.router.navigate(['/dashboard/lessons']);
        this.navController.setDirection('root');
    }
    getDraftLessons(event) {
        try {
            this.lessonsService.getDraftLessonsForAdmin(this.nextPage).subscribe((res) => {
                if (this.nextPage === 1) {
                    this.draftLessons = [];
                }
                if (res.data.length) {
                    res.data.map((ele) => {
                        if (ele.videoLevel === 'Elementary') {
                            ele.videoLevel = 'Upper-beginner';
                        }
                        ele.thumbnail =
                            'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';
                        this.draftLessons.push(ele);
                    });
                    this.nextPage++;
                    this.total = res.total;
                }
                if (event) {
                    event.target.complete();
                }
                this.isDraftLessons = false;
            }, (error) => { });
        }
        catch (error) {
            this.isDraftLessons = false;
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
            this.isDraftLessons = true;
            this.getDraftLessons(event);
        }, 500);
    }
};
DraftLessonsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"] }
];
DraftLessonsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
DraftLessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-draft-lessons',
        template: _raw_loader_draft_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_draft_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _services_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]])
], DraftLessonsPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-lessons-draft-lessons-draft-lessons-module-es2015.js.map