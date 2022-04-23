(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lessons-lessons-module"],{

/***/ "SrrV":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/lessons/lessons.module.ts ***!
  \*****************************************************/
/*! exports provided: LessonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPageModule", function() { return LessonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _lessons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lessons.page */ "k21C");







const routes = [
    {
        path: '',
        component: _lessons_page__WEBPACK_IMPORTED_MODULE_6__["LessonsPage"],
    },
];
let LessonsPageModule = class LessonsPageModule {
};
LessonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_lessons_page__WEBPACK_IMPORTED_MODULE_6__["LessonsPage"]],
        providers: [],
    })
], LessonsPageModule);



/***/ }),

/***/ "WpKt":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/lessons/lessons.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lessons-page .logo {\n  display: block;\n  margin: 0 auto;\n}\n.lessons-page .todaysLessonsHeading {\n  font-weight: 600;\n  font-size: 22px;\n}\n.lessons-page .today-lesson {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n.lessons-page ion-thumbnail {\n  width: 95%;\n  height: 145px;\n  --border-radius: 10px;\n}\n.lessons-page .video-title {\n  line-height: 1.3em;\n  font-weight: 400;\n  height: 2.5em;\n  overflow: hidden;\n}\n.lessons-page .lessons-horizontal {\n  margin: 8px auto;\n  padding-bottom: 2px;\n}\n.lessons-page ul {\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  -webkit-margin-before: 0;\n  margin-block-start: 0;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n  overflow-x: scroll !important;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  padding-bottom: 14px;\n}\n.lessons-page ul li {\n  flex: 0 0 auto;\n  list-style-type: none;\n  display: inline-block;\n  margin-right: 14px;\n  width: 200px;\n}\n.lessons-page ul li h5 {\n  margin: 7px 0px 0px;\n}\n.lessons-page hr {\n  background: #d8d8d8;\n  margin: 0px 15px;\n}\n.lessons-page ion-list ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.lessons-page ion-list ion-item ion-thumbnail {\n  width: 150px;\n  height: 100px;\n  --border-radius: 10px;\n}\n.lessons-page ion-list ion-item h2.ion-text-wrap {\n  line-height: 1.35em;\n  max-height: 2.7em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lessons-page ion-list ion-item ion-icon {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n.lessons-page .video-category-label {\n  margin: 5px 0px 0px 0px;\n  font-size: 14.5px;\n}\n.lessons-page ion-button.btn-share-now {\n  --background: white;\n  --color: #e22d2d;\n  --border-color: #f51515;\n  --border-width: 1px;\n  --border-style: solid;\n  --background-activated: #f5eeee;\n  --background-hover: #f5eeee;\n  margin: 0 24px;\n}\n@media only screen and (max-width: 414px) {\n  .lessons-page ion-thumbnail {\n    height: 130px;\n  }\n  .lessons-page ion-list ion-item ion-thumbnail {\n    width: 120px;\n    height: 90px;\n  }\n  .lessons-page ul li {\n    width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlc3NvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQUtJO0VBRUUsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFITjtBQUlNO0VBQ0UsbUJBQUE7QUFGUjtBQU1FO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0k7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBTE47QUFNTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1NO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFKUjtBQU1NO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtBQUpSO0FBUUU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBTko7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0U7RUFDRTtJQUNFLGFBQUE7RUFQSjtFQVlNO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFWUjtFQWdCSTtJQUNFLFlBQUE7RUFkTjtBQUNGIiwiZmlsZSI6Imxlc3NvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlc3NvbnMtcGFnZSB7XG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAudG9kYXlzTGVzc29uc0hlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC50b2RheS1sZXNzb24ge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMTQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC52aWRlby10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAvLyBtaW4taGVpZ2h0OiAyLjVlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmxlc3NvbnMtaG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB9XG5cbiAgdWwge1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICBsaSB7XG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogN3B4IDBweCAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xuICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICBoMi5pb24tdGV4dC13cmFwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzVlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMi43ZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudmlkZW8tY2F0ZWdvcnktbGFiZWwge1xuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xuICB9XG4gIGlvbi1idXR0b24uYnRuLXNoYXJlLW5vdyB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWNvbG9yOiAjZTIyZDJkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZjUxNTE1O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmNWVlZWU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZjVlZWVlO1xuICAgIG1hcmdpbjogMCAyNHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBsaSB7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "k21C":
/*!****************************************************!*\
  !*** ./src/app/dashboard/lessons/lessons.page.tsx ***!
  \****************************************************/
/*! exports provided: LessonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPage", function() { return LessonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _lessons_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessons.page.scss */ "WpKt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/react */ "eP13");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! driver.js */ "wkzA");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/reactapp/AppProvider */ "mxLC");
/* harmony import */ var src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/reactapp/types-and-hooks */ "35Ww");
/* harmony import */ var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/reactapp/useStore */ "+9Tx");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/shared.service */ "zuHl");











function getThumnailUrl(youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
}
function fixVideoLevel(videoLevel) {
    return videoLevel === 'Elementary' ? 'Upper-beginner' : videoLevel;
}
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const Section = ({ children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "ion-justify-content-center ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom" },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { sizeXs: "12", sizeSm: "12", sizeMd: "10", sizeLg: "9", sizeXl: "8", className: "ion-align-self-center" }, children)));
};
function TodayLessonView({ onClick, thumbnail, lessonName, videoLevel, videoType }) {
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "pointer today-lesson lesson pt-0 ion-justify-content-center", onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { className: "ion-align-self-center", sizeXs: "6", sizeSm: "6", sizeMd: "4", sizeLg: "4", sizeXl: "3" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { src: thumbnail, style: { width: '100%' } }))),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { className: "ion-align-self-center", sizeXs: "6", sizeSm: "6", sizeMd: "8", sizeLg: "8", sizeXl: "9" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", { className: "video-title mt-0 " }, lessonName),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "medium" },
                videoLevel && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" }, videoLevel),
                videoType && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" }, videoType)))));
}
const TodayLesson = ({ loading, todaysLesson }) => {
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TodayLessonView, { thumbnail: "../../../assets/images/thumbnail-youtube.jpg", lessonName: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '100%', height: 19 } })), videoLevel: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '50%' } }), videoType: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '40%' } }), onClick: () => { } }));
    }
    return todaysLesson ? (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TodayLessonView, { thumbnail: getThumnailUrl(todaysLesson.youtubeId), lessonName: todaysLesson.lessonName, videoLevel: todaysLesson.videoLevelLabel, videoType: todaysLesson.videoType, onClick: () => {
            navCtrl.navigateForward(['/lesson-details', todaysLesson._id, false, false]);
        } })) : (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TodayLessonView, { thumbnail: "../../../assets/images/movie.svg", lessonName: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Good job!"),
            " You've studied all the lessons prepared in 'Business English'. Feel free to explore other lessons."), videoLevel: null, videoType: null, onClick: () => { } }));
};
function MyCourseItem({ thumbnail, title, desc, onClick = null }) {
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { lines: "none", mode: "md", onClick: (e) => {
            e.preventDefault();
            onClick && onClick(e);
        }, 
        // className="pointer"
        routerLink: `link` },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], { slot: "start" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { src: thumbnail })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", { className: "ion-text-wrap" }, title),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "medium" }, desc))));
}
function MyCourseLoadingItem() {
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourseItem, { title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '80%' } })), thumbnail: "../../../../assets/images/thumbnail-youtube.jpg", desc: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '40%' } })),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '30%' } }))) }));
}
function MyCourses({ loading, myCourses = [] }) {
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], { mode: "md", className: "ion-no-padding" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourseLoadingItem, null),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourseLoadingItem, null),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourseLoadingItem, null)));
    }
    if (myCourses.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], { mode: "md", className: "ion-no-padding" }, myCourses.map((myCourse) => (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourseItem, { key: myCourse._id, onClick: () => {
                navCtrl.navigateForward(['/course-details', myCourse._id, 'myCourse']);
            }, title: myCourse.title || myCourse.introduction, thumbnail: getThumnailUrl(myCourse.youtubeId), desc: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, (myCourse === null || myCourse === void 0 ? void 0 : myCourse.lessonCount) === 1
                        ? 'Single -'
                        : `${myCourse === null || myCourse === void 0 ? void 0 : myCourse.lessonCount} episode - `),
                    myCourse.videoLevelLabel),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, myCourse.topicTitle)) }))))));
}
function HorizontalLessonLoadingItem() {
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", { className: "pointer ion-activatable" },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { style: { width: '100%' }, src: "../../../assets/images/thumbnail-youtube.jpg" })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", { className: " mt-0" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '90%' } }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '30%' } })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "medium" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '40%' } })),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], { animated: true, style: { width: '40%' } })))));
}
function ShareNow() {
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "pro-package-bg ion-justify-content-center ion-align-items-center" },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { className: "ion-no-padding ion-align-self-center", sizeXs: "12", sizeSm: "12", sizeMd: "7", sizeLg: "6", sizeXl: "4" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", { className: "ion-no-margin ion-text-center" }, "Help your friends learn English!"),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", { src: "/assets/images/share-now.svg", alt: "share" }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], { className: "btn-share-now", mode: "ios", 
                // color="danger"
                shape: "round", expand: "block", onClick: () => {
                    navCtrl.navigateForward('/share-app');
                } },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "SHARE NOW")))));
}
function SubscribeNow() {
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    const { data: { profile }, } = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_8__["useGetProfileQuery"])();
    // console.log({profile})
    if ((profile === null || profile === void 0 ? void 0 : profile.currentPackage) === 'Subscription') {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "trial-package-bg ion-justify-content-center ion-align-items-center" },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { "size-xs": "12", "size-sm": "12", "size-md": "7", "size-lg": "6", "size-xl": "4", className: "ion-no-padding ion-align-self-center" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", { className: "ion-no-margin ion-text-center" }, "Unlock your potential now!"),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", { src: "../../../assets/images/subscribe-now-bg.png", alt: "share" }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], { mode: "ios", color: "danger", shape: "round", expand: "block", onClick: () => {
                    navCtrl.navigateForward('/subscriptionplans');
                } },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "SUBSCRIBE NOW")))));
}
function HorizontalLessonList({ loading, lessons, isDraft = false }) {
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonLoadingItem, null),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonLoadingItem, null),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonLoadingItem, null)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, lessons.map((lesson) => (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", { key: lesson._id, className: "pointer ion-activatable", 
            // className="hover-pointer ion-activatable ripple-parent"
            onClick: () => navCtrl.navigateForward(`/lesson-details/${lesson._id}/false/${isDraft}`) },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { style: { width: '100%' }, src: getThumnailUrl(lesson.youtubeId) })),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", { className: "video-title mt-0" }, lesson.lessonName),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "medium" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" }, fixVideoLevel(lesson.videoLevelLabel)),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", { className: "video-category-label" }, lesson.videoType))))))));
}
const DraftLessonsSection = () => {
    var _a;
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    const { data, loading, error } = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_8__["useGetDashboardDraftLessonsQuery"])({
        fetchPolicy: 'network-only',
    });
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", { className: "mt-0 font-weight-400" },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Draft Lessons"))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "danger", className: "ion-float-right pointer", onClick: () => {
                        navCtrl.navigateForward('/draft-lessons');
                    } }, "See All"))),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonList, { loading: loading, lessons: (_a = data === null || data === void 0 ? void 0 : data.draftLessons) === null || _a === void 0 ? void 0 : _a.data, isDraft: true })));
};
const RLessonsPage = ({ ts }) => {
    var _a, _b, _c, _d;
    const today = weekdays[new Date(ts).getDay()];
    const { data: { profile }, } = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_8__["useGetProfileQuery"])();
    const dashboardRes = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_8__["useGetDashboardQuery"])({
        variables: {
            day: today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today,
            videoLevel: profile.userLevelName,
        },
        fetchPolicy: 'cache-and-network',
    });
    const { data, loading, error, refetch } = dashboardRes;
    const navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.navController);
    const sharedService = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_9__["useStore"])((state) => state.sharedService);
    // console.log({data, loading})
    const isLoading = !data && loading;
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        // refetch()
        console.log('useEffect');
    }, [ts]);
    function handleHelpGuide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('handleHelpGuide');
            const helpLog = yield sharedService.getNativeStorage('isTodayLessonHelpModeDone');
            console.log(helpLog);
            if (helpLog === null || helpLog === void 0 ? void 0 : helpLog.data) {
                return;
            }
            const steps = [
                {
                    element: '#today-lesson',
                    popover: {
                        title: 'Recommendation',
                        description: 'We recommend a new lesson each day based on your level and from different categories.',
                        position: 'bottom',
                    },
                },
            ];
            if (document.getElementById('my-course')) {
                steps.push({
                    element: '#my-course',
                    popover: {
                        title: 'My Course',
                        description: "Lessons you've started but not completed yet.",
                        position: 'top',
                    },
                });
            }
            showHelpGuide({
                steps,
                onClose: () => {
                    sharedService.setNativeStorage('isTodayLessonHelpModeDone', true);
                },
            });
        });
    }
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        // console.log({loading})
        if (!loading) {
            handleHelpGuide();
        }
    }, [loading]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], { className: "lessons-page ion-no-padding" },
        Object(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["isPlatform"])('mobile') && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "ion-justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { className: "ion-align-self-center ion-padding", sizeXs: "4", sizeSm: "4", sizeLg: "2", sizeMd: "3", sizeXl: "1" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", { src: "/assets/images/logo.png", width: "65%", className: "logo" })))),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
            Object(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["isPlatform"])('desktop') && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: "ion-margin-top" }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", { id: "today-lesson", className: "ion-no-margin todaysLessonsHeading" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Study Today's Lesson For You")),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", { className: "c-medium m-5" },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Recommendation")),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TodayLesson, { loading: isLoading, todaysLesson: data === null || data === void 0 ? void 0 : data.todayLesson })),
        ((_a = data === null || data === void 0 ? void 0 : data.myCourses) === null || _a === void 0 ? void 0 : _a.length) > 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", { id: "my-course", className: "mt-0 font-weight-400" },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "My Courses"))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "danger", className: "ion-float-right pointer", onClick: () => {
                            navCtrl.navigateForward('/my-courses');
                        } }, "See All"))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyCourses, { loading: isLoading, myCourses: data === null || data === void 0 ? void 0 : data.myCourses })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", { className: "mt-0 font-weight-400" },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Saved For Later"))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "danger", className: "ion-float-right pointer", onClick: () => {
                            navCtrl.navigateForward('/saved-lessons');
                        } }, "See All"))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonList, { loading: isLoading, lessons: (_b = data === null || data === void 0 ? void 0 : data.savedLessons) === null || _b === void 0 ? void 0 : _b.data })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ShareNow, null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { size: "auto" },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", { className: "mt-0 font-weight-400" },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Popular Lessons"))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "danger", className: "ion-float-right pointer", onClick: () => {
                            navCtrl.navigateForward('/popular');
                        } }, "See All"))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonList, { loading: isLoading, lessons: (_c = data === null || data === void 0 ? void 0 : data.popularLessons) === null || _c === void 0 ? void 0 : _c.data })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", { className: "mt-0 font-weight-400" },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "New Uploads"))),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { color: "danger", className: "ion-float-right pointer", onClick: () => {
                            navCtrl.navigateForward('/new-uploads');
                        } }, "See All"))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HorizontalLessonList, { loading: isLoading, lessons: (_d = data === null || data === void 0 ? void 0 : data.newUploadLessons) === null || _d === void 0 ? void 0 : _d.data })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null),
        profile.isAdmin && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DraftLessonsSection, null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubscribeNow, null)));
};
function showHelpGuide({ steps, onClose }) {
    setTimeout(() => {
        const driver = new driver_js__WEBPACK_IMPORTED_MODULE_4___default.a({
            // animate: false, // Whether to animate or not
            // opacity: 0,
            allowClose: false,
            overlayClickNext: true,
            doneBtnText: 'Done',
            closeBtnText: 'Skip',
            // stageBackground: '#ffffff', // Background color for the staged behind highlighted element
            nextBtnText: 'Next',
            prevBtnText: 'Previous',
            keyboardControl: false,
            // onNext: (Element) => {},
            onHighlightStarted: (Element) => {
                const node = Element.getNode();
                node.scrollIntoView(false);
            },
            onDeselected: (Element) => {
                console.log('onDeselected');
                if (!driver.isActivated) {
                    onClose();
                }
            },
        });
        driver.defineSteps(steps);
        driver.start();
    }, 1000);
}
const containerElementName = 'rcLessons';
let LessonsPage = class LessonsPage {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.ts = +new Date();
        console.log('constructor');
        this.sharedService.gaTrackView('Dashboard Screen');
    }
    ngOnChanges(changes) {
        console.log({ changes });
        this.render();
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.render();
    }
    ngOnDestroy() {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["unmountComponentAtNode"])(this.containerRef.nativeElement);
    }
    render() {
        if (this.containerRef) {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RLessonsPage, { ts: this.ts })), this.containerRef.nativeElement);
        }
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.ts = +new Date();
        this.render();
    }
    ngOnInit() { }
    ionViewWillLeave() {
        console.log('ionViewWillLeave');
        this.sharedService.setNativeStorage('isTodayLessonHelpModeDone', true);
    }
};
LessonsPage.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
];
LessonsPage.propDecorators = {
    containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [containerElementName, { static: false },] }]
};
LessonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lessons',
        template: '<ion-content #ionContent class="help-container"><div #rcLessons></div></ion-content>',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_lessons_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
], LessonsPage);



/***/ }),

/***/ "mxLC":
/*!**************************************!*\
  !*** ./src/reactapp/AppProvider.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiProvider */ "qObj");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "VX74");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apollo-client */ "0GY7");
/* harmony import */ var _types_and_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types-and-hooks */ "35Ww");





const WithProfile = ({ children }) => {
    const { loading, data } = Object(_types_and_hooks__WEBPACK_IMPORTED_MODULE_4__["useGetProfileQuery"])();
    if (loading || !(data === null || data === void 0 ? void 0 : data.profile)) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children);
};
const AppProvider = ({ children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], { client: _apollo_client__WEBPACK_IMPORTED_MODULE_3__["client"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WithProfile, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApiProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, children)))));
};
/* harmony default export */ __webpack_exports__["default"] = (AppProvider);


/***/ }),

/***/ "qObj":
/*!**************************************!*\
  !*** ./src/reactapp/ApiProvider.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-http */ "tFdz");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
function getNativeStorage(key) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const ret = yield Storage.get({ key });
        let value = JSON.parse(ret.value);
        if (!value) {
            value = { data: null };
        }
        return value;
    });
}
const ApiProvider = ({ children }) => {
    const options = {
        cachePolicy: use_http__WEBPACK_IMPORTED_MODULE_2__["CachePolicies"].NO_CACHE,
        interceptors: {
            request: ({ options, url, path, route }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
                // console.log({url, path, options})
                const token = yield getNativeStorage('token');
                if (token === null || token === void 0 ? void 0 : token.data) {
                    options.headers.accesstoken = token.data;
                }
                // console.log({token1})
                // const token = JSON.parse(localStorage.getItem('_cap_token')).data
                return options;
            }),
        },
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](use_http__WEBPACK_IMPORTED_MODULE_2__["Provider"], { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, options: options }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (ApiProvider);


/***/ })

}]);
//# sourceMappingURL=lessons-lessons-module-es2015.js.map