(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-lessons-search-lessons-module"],{

/***/ "6Sn1":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/search-lessons/search-lessons.page.ts ***!
  \*****************************************************************/
/*! exports provided: SearchLessonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLessonsPage", function() { return SearchLessonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-lessons.page.html */ "kva4");
/* harmony import */ var _search_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-lessons.page.scss */ "DbQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../global/global.service */ "Nrpk");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/shared.service */ "zuHl");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/search.service */ "l3hs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");











const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
const weeklyImages = {
    Monday: '../../../assets/images/search/news.png',
    Tuesday: '../../../assets/images/search/general-english.png',
    Wednesday: '../../../assets/images/search/tv-shows-movies.png',
    Thursday: '../../../assets/images/search/business-english.png',
    Friday: '../../../assets/images/search/speech.png',
    Weekend: '../../../assets/images/search/pop-songs.png',
};
// It's UGLY!!! duplicated with lessons.page.ts
const userLevelIds = {
    '5b117087602e39d075e7cfcc': 'Elementary',
    '5b117088602e39d075e7cfcd': 'Advanced',
};
let SearchLessonsPage = class SearchLessonsPage {
    constructor(searchService, globalService, platform, navController, router, sharedService, alertController, onBoardingService) {
        this.searchService = searchService;
        this.globalService = globalService;
        this.platform = platform;
        this.navController = navController;
        this.router = router;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.onBoardingService = onBoardingService;
        this.suggestedCurriculums = [];
        this.nextPage = 1;
        this.lessons = [];
        this.totalPages = 0;
        this.isSearch = false;
        this.searchNotFound = false;
        this.isFocus = false;
        this.isDesktop = false;
        this.platform
            .ready()
            .then(() => {
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.isDesktop = false;
            }
            else {
                this.isDesktop = true;
            }
            this.sharedService.gaTrackView('Search Lessons Screen');
        })
            .catch((error) => {
            console.log(error);
        });
    }
    handleKeyboardEvent(event) {
        if (this.searchKeyWord !== undefined && event.key === 'Enter') {
            this.getLessons();
        }
    }
    ionViewWillEnter() {
        this.searchKeyWord = undefined;
        this.isFocus = false;
        this.today = this.globalService.weekdays[new Date().getDay()];
        if (this.today === 'Saturday' || this.today === 'Sunday') {
            this.today = 'Weekend';
        }
        this.getUserProfile();
        this.getSuggestedCurriculums();
    }
    ngOnInit() { }
    getUserProfile() {
        try {
            this.onBoardingService.getUserProfile().subscribe((res) => {
                this.profile = res.data;
                if (this.profile) {
                    this.profile.trialLessonsLeft =
                        this.profile.trialLessonLimit - this.profile.completedLesson;
                    this.userLevel = userLevelIds[this.profile.userLevelId] || 'Intermediate';
                }
                // console.log( this.profile );
            }, (error) => { });
        }
        catch (error) {
            console.log(error);
        }
    }
    trackById(i, item) {
        return item._id;
    }
    getSuggestedCurriculums() {
        try {
            this.searchService.getSuggestedCurriculums().subscribe((res) => {
                const suggestedCurriculums = res.data.map((el) => (Object.assign(Object.assign({}, el), { icon: weeklyImages[el.day] })));
                this.suggestedCurriculums = suggestedCurriculums;
            }, (error) => { });
        }
        catch (error) {
            console.log(error);
        }
    }
    getLessons(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.searchKeyWord === undefined ||
                this.searchKeyWord === '' ||
                this.userLevel === undefined) {
                return;
            }
            else if (event === undefined) {
                this.lessons = [];
                this.nextPage = 1;
            }
            if (event) {
                this.isSearch = false;
            }
            else {
                this.isSearch = true;
            }
            const obj = {
                videoLevel: this.userLevel,
                day: this.today,
                searchKeyWord: this.searchKeyWord.trim(),
            };
            try {
                const page = this.nextPage;
                const res = yield this.searchService.searchLessons(page, obj).toPromise();
                if (page === 1) {
                    this.lessons = [];
                }
                if (res.data.length > 0) {
                    this.searchNotFound = false;
                    res.data.forEach((ele) => {
                        if (ele.videoLevel === 'Elementary') {
                            ele.videoLevel = 'Upper-beginner';
                        }
                        ele.thumbnail = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg';
                        this.lessons.push(ele);
                    });
                    this.nextPage = page + 1;
                    this.totalPages = res.total;
                    if (event) {
                        event.target.complete();
                    }
                    this.isSearch = false;
                }
                else {
                    if (event) {
                        event.target.complete();
                    }
                    this.searchNotFound = true;
                    this.isSearch = false;
                    if (event === undefined) {
                        this.lessons = [];
                    }
                }
            }
            catch (error) {
                if (event) {
                    event.target.complete();
                }
                this.isSearch = false;
                this.searchNotFound = true;
            }
        });
    }
    onCancel() {
        this.isFocus = false;
        this.searchKeyWord = undefined;
    }
    clearInput() {
        this.lessons = [];
        this.searchKeyWord = undefined;
        this.nextPage = 1;
    }
    onSearch(searchKeyWord) {
        this.nextPage = 1;
        if (this.platform.is('capacitor')) {
            Keyboard.show();
        }
        if (searchKeyWord !== undefined || searchKeyWord !== '') {
            this.getLessons();
        }
        else {
            this.focusOnSearch(true);
        }
    }
    loadData(event) {
        this.getLessons(event);
        setTimeout(() => {
            if (this.nextPage >= this.totalPages) {
                event.target.disabled = true;
            }
        }, 500);
    }
    shareNow() { }
    focusOnSearch(isFocus) {
        this.searchKeyWord = undefined;
        this.isFocus = isFocus;
    }
    ionViewWillLeave() {
        this.lessons = [];
        this.isSearch = false;
        this.searchKeyWord = undefined;
        this.nextPage = 1;
    }
    onLessonDetails(subLessonId) {
        this.navController.setDirection('forward');
        this.router.navigate(['/lesson-details', subLessonId, false, false]);
    }
    onSubscription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navController.setDirection('forward');
            this.router.navigate(['/subscription']);
        });
    }
};
SearchLessonsPage.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"] },
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"] }
];
SearchLessonsPage.propDecorators = {
    handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostListener"], args: ['document:keypress', ['$event'],] }]
};
SearchLessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-search-lessons',
        template: _raw_loader_search_lessons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_lessons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
        _global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"]])
], SearchLessonsPage);



/***/ }),

/***/ "DbQ/":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/search-lessons/search-lessons.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-thumbnail {\n  width: 120px;\n  height: 90px;\n  --border-radius: 15px;\n}\nion-content ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\nion-content ion-card {\n  font-weight: 500;\n}\nion-content ion-spinner {\n  display: block;\n  margin: 0 auto;\n}\n.search-categories {\n  padding: 7px 20px;\n}\n.search-categories .search-categories-icon {\n  width: 40%;\n  height: 60px;\n  float: right;\n}\n@media only screen and (max-width: 414px) {\n  .search-categories .search-categories-icon {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1sZXNzb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRU07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRU07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FBQVI7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBRko7QUFLQTtFQUNFLGlCQUFBO0FBRkY7QUFHRTtFQUNFLFVBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0E7RUFFSTtJQUNFLFVBQUE7RUFISjtBQUNGIiwiZmlsZSI6InNlYXJjaC1sZXNzb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIH1cbiAgICAgIGgyLmlvbi10ZXh0LXdyYXAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNWVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlvbi1zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLnNlYXJjaC1jYXRlZ29yaWVzIHtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIC5zZWFyY2gtY2F0ZWdvcmllcy1pY29uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIC8vIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLnNlYXJjaC1jYXRlZ29yaWVzIHtcbiAgICAuc2VhcmNoLWNhdGVnb3JpZXMtaWNvbiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "jSAL":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/search-lessons/search-lessons.module.ts ***!
  \*******************************************************************/
/*! exports provided: SearchLessonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLessonsPageModule", function() { return SearchLessonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/search.service */ "l3hs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _search_lessons_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-lessons.page */ "6Sn1");









const routes = [
    {
        path: '',
        component: _search_lessons_page__WEBPACK_IMPORTED_MODULE_8__["SearchLessonsPage"],
    },
];
let SearchLessonsPageModule = class SearchLessonsPageModule {
};
SearchLessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_search_lessons_page__WEBPACK_IMPORTED_MODULE_8__["SearchLessonsPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"], _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]],
    })
], SearchLessonsPageModule);



/***/ }),

/***/ "kva4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/search-lessons/search-lessons.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-margin-top ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n        <ion-searchbar\n          mode=\"md\"\n          id=\"searchKeyWord\"\n          name=\"searchKeyWord\"\n          [(ngModel)]=\"searchKeyWord\"\n          showCancelButton=\"focus\"\n          clear-icon=\"close-circle\"\n          (ionFocus)=\"focusOnSearch(true)\"\n          animated\n          placeholder=\"Search your lesson\"\n          (ionClear)=\"clearInput()\"\n          (ionCancel)=\"onCancel()\"\n          (ionChange)=\"onSearch(searchKeyWord)\"\n        >\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!isFocus && searchKeyWord === undefined; else searchLessonsFound\">\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"suggestedCurriculums.length\">\n        <ion-row\n          class=\"ion-align-items-center ion-justify-content-center\"\n          *ngFor=\"let suggestedCurriculum of suggestedCurriculums; trackBy: trackById\"\n        >\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"8\"\n            sizeXl=\"4\"\n            sizeLg=\"6\"\n            class=\"ion-align-self-center pointer\"\n            [routerLink]=\"[\n              '/search-list',\n              suggestedCurriculum.lessonTopicId,\n              suggestedCurriculum.title,\n              suggestedCurriculum.day\n            ]\"\n            routerLinkActive=\"router-link-active\"\n          >\n            <ion-card mode=\"ios\" class=\"card\">\n              <ion-card-content class=\"search-categories\" mode=\"ios\">\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                  <ion-col size=\"8\" class=\"ion-align-self-center ion-text-left\">\n                    <ion-text color=\"dark\">\n                      <strong>{{ suggestedCurriculum.title }}</strong>\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-img class=\"search-categories-icon\" [src]=\"suggestedCurriculum.icon\"></ion-img>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf=\"profile?.currentPackage === 'Trial' || profile?.currentPackage === 'SubscriptionExpired'; else pro\"\n          class=\"ion-justify-content-center\"\n        >\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n            <p *ngIf=\"profile?.trialLessonsLeft <= 1\" class=\"ion-text-center\">\n              {{ profile?.trialLessonsLeft }} free lesson is left. <br />\n              Subscribe to unlock more lessons.\n            </p>\n            <p *ngIf=\"profile?.trialLessonsLeft > 1\" class=\"ion-text-center\">\n              {{ profile?.trialLessonsLeft }} free lessons are left. <br />\n              Subscribe to unlock more lessons.\n            </p>\n            <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" (click)=\"onSubscription()\">\n              <strong>SUBSCRIBE NOW</strong>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ng-template #pro>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"8\" sizeXl=\"4\" sizeLg=\"6\" class=\"ion-align-self-center\">\n              <p class=\"ion-text-center\">Help friends improve English</p>\n              <ion-button\n                mode=\"ios\"\n                color=\"danger\"\n                shape=\"round\"\n                expand=\"block\"\n                [routerLink]=\"['/share-app']\"\n                routerLinkActive=\"router-link-active\"\n              >\n                <strong>SHARE NOW</strong></ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n    <ng-template #searchLessonsFound>\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-row *ngIf=\"isSearch === false\" class=\"ion-justify-content-center\">\n            <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"10\" sizeLg=\"9\" sizeXl=\"9\" class=\"ion-align-self-center\">\n              <ion-list mode=\"md\" class=\"ion-no-padding\" list=\"none\">\n                <ion-item\n                  class=\"pointer\"\n                  *ngFor=\"let lesson of lessons\"\n                  mode=\"md\"\n                  (click)=\"onLessonDetails(lesson._id)\"\n                >\n                  <ion-thumbnail slot=\"start\">\n                    <ion-img src=\"{{ lesson.thumbnail }}\"></ion-img>\n                  </ion-thumbnail>\n                  <ion-label>\n                    <h2 class=\"ion-text-wrap\">{{ lesson.lessonName }}</h2>\n                    <p>\n                      <ion-text>\n                        {{ lesson.videoLevel }}\n                      </ion-text>\n                    </p>\n                  </ion-label>\n                  <ion-icon mode=\"ios\" name=\"chevron-forward\" slot=\"end\"></ion-icon>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ng-container *ngIf=\"isSearch === true\">\n            <ion-spinner></ion-spinner>\n          </ng-container>\n\n          <ion-row\n            *ngIf=\"isSearch === false && lessons.length === 0\"\n            class=\"ion-text-center ion-align-items-center ion-justify-content-center ion-margin-top\"\n          >\n            <ion-col\n              *ngIf=\"searchKeyWord !== undefined && searchNotFound\"\n              sizeXs=\"12\"\n              sizeSm=\"12\"\n              sizeMd=\"6\"\n              sizeXl=\"4\"\n              sizeLg=\"4\"\n              class=\"ion-align-self-center\"\n            >\n              <img class=\"ion-margin-bottom\" src=\"../../../assets/images/search-lessons-not-found.png\" width=\"30%\" />\n              <h3 style=\"font-weight: 400;\">\n                No results for <b>\"{{ searchKeyWord }}\"</b><br />\n                Try again using different spelling or keywords\n              </h3>\n            </ion-col>\n            <ion-col\n              *ngIf=\"searchKeyWord === undefined\"\n              sizeXs=\"12\"\n              sizeSm=\"12\"\n              sizeMd=\"6\"\n              sizeXl=\"4\"\n              sizeLg=\"4\"\n              class=\"ion-align-self-center\"\n            >\n              <img class=\"ion-margin-bottom\" src=\"../../../assets/images/search-lessons.png\" width=\"30%\" />\n              <h3>\n                Explore the lessons\n              </h3>\n              <ion-text>\n                Search for keywords, accents, topics, and genres.\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n  <ion-infinite-scroll *ngIf=\"searchKeyWord\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=search-lessons-search-lessons-module-es2015.js.map