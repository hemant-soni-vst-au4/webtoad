(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module"],{

/***/ "03RU":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/lessons/lesson-details/lesson-complete/lesson-complete.module.ts ***!
  \********************************************************************************************/
/*! exports provided: LessonCompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonCompletePageModule", function() { return LessonCompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/lessons.service */ "s1uX");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _lesson_complete_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lesson-complete.page */ "VixQ");
/* harmony import */ var _ionic_native_media_ngx___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media/ngx/ */ "Ioyb");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "IzT6");











const routes = [
    {
        path: '',
        component: _lesson_complete_page__WEBPACK_IMPORTED_MODULE_8__["LessonCompletePage"],
    },
];
let LessonCompletePageModule = class LessonCompletePageModule {
};
LessonCompletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_lesson_complete_page__WEBPACK_IMPORTED_MODULE_8__["LessonCompletePage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__["OnBoardingService"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"], _ionic_native_media_ngx___WEBPACK_IMPORTED_MODULE_9__["Media"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeAudio"]],
    })
], LessonCompletePageModule);



/***/ }),

/***/ "IzT6":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/native-audio/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: NativeAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAudio", function() { return NativeAudio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "a3Cf");



var NativeAudio = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
    NativeAudio.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return NativeAudio;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3ZDLCtCQUFpQjs7OztJQVFoRCxtQ0FBYSxhQUFDLEVBQVUsRUFBRSxTQUFpQjtJQWMzQyxvQ0FBYyxhQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtJQWMzRiwwQkFBSSxhQUFDLEVBQVUsRUFBRSxnQkFBMkI7SUFVNUMsMEJBQUksYUFBQyxFQUFVO0lBVWYsMEJBQUksYUFBQyxFQUFVO0lBVWYsNEJBQU0sYUFBQyxFQUFVO0lBV2pCLDhDQUF3QixhQUFDLEVBQVUsRUFBRSxNQUFjOzs7Ozs7O2dCQTlFcEQsVUFBVTs7c0JBdENYO0VBdUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBOYXRpdmUgQXVkaW9cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgQXVkaW8gUGxheWJhY2tcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlQXVkaW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1hdWRpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlQXVkaW86IE5hdGl2ZUF1ZGlvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkQ29tcGxleCgndW5pcXVlSWQyJywgJ3BhdGgvdG8vZmlsZTIubXAzJywgMSwgMSwgMCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBkb25lIHBsYXlpbmdcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5sb29wKCd1bmlxdWVJZDInKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoJ3VuaXF1ZUlkMicsIDAuNikudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnVubG9hZCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlQXVkaW8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlQXVkaW8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIHNob3J0IGNsaXBzIC8gc2luZ2xlIHNob3RzICh1cCB0byBmaXZlIHNlY29uZHMpLiBDYW5ub3QgYmUgc3RvcHBlZCAvIGxvb3BlZC5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRTaW1wbGUoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIGJhY2tncm91bmQgbXVzaWMgLyBhbWJpZW50IHNvdW5kLiBVc2VzIGhpZ2hsZXZlbCBuYXRpdmUgQVBJcyB3aXRoIGEgbGFyZ2VyIGZvb3RwcmludC4gKGlPUzogQVZBdWRpb1BsYXllcikuIENhbiBiZSBzdG9wcGVkIC8gbG9vcGVkIGFuZCB1c2VkIHdpdGggbXVsdGlwbGUgdm9pY2VzLiBDYW4gYmUgZmFkZWQgaW4gYW5kIG91dCB1c2luZyB0aGUgZGVsYXkgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBwcmVsb2FkZWQgc291bmQgKDAuMSB0byAxLjApXG4gICAqIEBwYXJhbSB2b2ljZXMge251bWJlcn0gdGhlIG51bWJlciBvZiBtdWx0aWNoYW5uZWwgdm9pY2VzIGF2YWlsYWJsZVxuICAgKiBAcGFyYW0gZGVsYXkge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZENvbXBsZXgoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCB2b2ljZXM6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGF1ZGlvIGFzc2V0XG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBjb21wbGV0ZUNhbGxiYWNrIHtGdW5jdGlvbn0gb3B0aW9uYWwuIENhbGxiYWNrIHRvIGJlIGludm9rZWQgd2hlbiBhdWRpbyBpcyBkb25lIHBsYXlpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgcGxheShpZDogc3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIGFuIGF1ZGlvIGFzc2V0IGluZmluaXRlbHksIHRoaXMgb25seSB3b3JrcyBmb3IgY29tcGxleCBhc3NldHNcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb29wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmxvYWRzIGFuIGF1ZGlvIGZpbGUgZnJvbSBtZW1vcnlcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5sb2FkKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB2b2x1bWUgZm9yIHByZWxvYWRlZCBjb21wbGV4IGFzc2V0cy5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBhdWRpbyBhc3NldCAoMC4xIHRvIDEuMClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KGlkOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "JiwA":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/lessons/lesson-details/lesson-complete/lesson-complete.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lesson-progress {\n  width: 55%;\n  margin: 0px auto;\n}\n\nh1 {\n  font-size: 40px;\n}\n\n.checkmark-grey {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.completed-lessons-count {\n  font-size: 26px;\n}\n\nsmall {\n  color: #747474;\n  font-size: 17px;\n}\n\n@media only screen and (max-width: 414px) {\n  .checkmark-grey {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xlc3Nvbi1jb21wbGV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJsZXNzb24tY29tcGxldGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlc3Nvbi1wcm9ncmVzcyB7XG4gIHdpZHRoOiA1NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jaGVja21hcmstZ3JleSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbXBsZXRlZC1sZXNzb25zLWNvdW50IHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuc21hbGwge1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuY2hlY2ttYXJrLWdyZXkge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "VixQ":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/lessons/lesson-details/lesson-complete/lesson-complete.page.ts ***!
  \******************************************************************************************/
/*! exports provided: LessonCompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonCompletePage", function() { return LessonCompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lesson_complete_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lesson-complete.page.html */ "ZunM");
/* harmony import */ var _lesson_complete_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson-complete.page.scss */ "JiwA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../environments/environment */ "AytR");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/lessons.service */ "s1uX");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/on-boarding.service */ "DkPS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_native_media_ngx___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx/ */ "Ioyb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "IzT6");













let LessonCompletePage = class LessonCompletePage {
    constructor(router, onBoardingService, navController, sharedService, alertController, lessonsService, nativeAudio, platform, media) {
        this.router = router;
        this.onBoardingService = onBoardingService;
        this.navController = navController;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.lessonsService = lessonsService;
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.media = media;
        this.subscriptionMonthCompletedLessons = [];
        this.currentMonthCompletedLessons = [];
        this.date = new Date();
        this.months = new Array();
        moment__WEBPACK_IMPORTED_MODULE_11__["locale"]('en');
        this.months = moment__WEBPACK_IMPORTED_MODULE_11__["months"]();
        this.currentMonth = this.months[new Date().getMonth()];
    }
    ngOnInit() {
        this.getUserProfile();
        const monthStartDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1).toISOString();
        const monthEndDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).toISOString();
        if (monthStartDate && monthEndDate) {
            this.getCompletedLessonsByCurrentMonth(monthStartDate, monthEndDate);
        }
    }
    getUserProfile() {
        try {
            this.sharedService.presentLoader('Please wait...');
            this.onBoardingService.getUserProfile().subscribe((res) => {
                this.profile = res.data;
                if (this.profile.currentPackage === 'Subscription') {
                    this.getCompletedLessonsInSubscriptionSchedule(this.profile.userSubscriptionStartDate, this.profile.userSubscriptionEndDate);
                }
                this.sharedService.dismissLoader();
                if (this.platform.is('ios')) {
                    const file = this.media.create(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assetBaseUrl + 'audioFile/SMALL_CROWD_APPLAUSE.wav');
                    // console.log( ' MediaObject ====================================' );
                    // console.log( file );
                    // console.log( ' MediaObject ====================================' );
                    file.play();
                }
                else {
                    const file = this.media.create(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assetBaseUrl + 'audioFile/SMALL_CROWD_APPLAUSE.mp3');
                    // console.log( ' MediaObject ====================================' );
                    // console.log( file );
                    // console.log( ' MediaObject ====================================' );
                    file.play();
                }
            }, (error) => {
                console.log(error);
                this.sharedService.dismissLoader();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getCompletedLessonsByCurrentMonth(startDate, endDate) {
        try {
            this.lessonsService.completedLessonsWithTimeRange({ startDate, endDate }).subscribe((res) => {
                this.currentMonthCompletedLessons = [];
                if (res.data.length) {
                    this.currentMonthCompletedLessons = res.data;
                    // console.log( this.currentMonthCompletedLessons.length )
                    if (this.currentMonthCompletedLessons.length === 2) {
                        if (this.platform.is('ios')) {
                            this.presentAlert('App Store', 'https://apps.apple.com/in/app/speaky-peaky/id1486127431');
                        }
                        else if (this.platform.is('android')) {
                            this.presentAlert('Play Store', 'https://play.google.com/store/apps/details?id=com.summer.startenglishnow');
                        }
                    }
                }
            }, (error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    presentAlert(store, storeUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Enjoying this app?',
                buttons: [
                    {
                        text: 'Not really',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'Yes!',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.presentAlertConfirm(store, storeUrl);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlertConfirm(store, storeUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'How about a rating on the <strong>' + store + '</strong>?',
                buttons: [
                    {
                        text: 'No, thanks',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'Okay, sure!',
                        handler: () => {
                            console.log('Confirm Okay');
                            window.open(storeUrl, '_blank');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    getCompletedLessonsInSubscriptionSchedule(startDate, endDate) {
        try {
            this.lessonsService.completedLessonsWithTimeRange({ startDate, endDate }).subscribe((res) => {
                this.subscriptionMonthCompletedLessons = [];
                if (res.data.length) {
                    this.subscriptionMonthCompletedLessons = res.data;
                }
            }, (error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    home() {
        this.navController.setDirection('root');
        this.router.navigate(['/dashboard/lessons']);
    }
    back() {
        this.navController.setDirection('root');
        this.router.navigate(['/dashboard/search']);
    }
};
LessonCompletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__["LessonsService"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeAudio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_media_ngx___WEBPACK_IMPORTED_MODULE_10__["Media"] }
];
LessonCompletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-lesson-complete',
        template: _raw_loader_lesson_complete_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lesson_complete_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _services_lessons_service__WEBPACK_IMPORTED_MODULE_4__["LessonsService"],
        _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeAudio"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_media_ngx___WEBPACK_IMPORTED_MODULE_10__["Media"]])
], LessonCompletePage);



/***/ }),

/***/ "ZunM":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/lessons/lesson-details/lesson-complete/lesson-complete.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <!-- <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"h-100 ion-no-padding\">\n    <ion-row class=\"h-100 auth-form ion-align-items-center\">\n      <ion-col class=\"ion-align-self-center\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"6\" sizeLg=\"4\" sizeXl=\"4\" class=\"ion-align-self-center\">\n            <ion-img\n              class=\"lesson-progress\"\n              src=\"../../../../../assets/images/lesson-completed-celebration.png\"\n              alt=\"lesson-progress\"\n            >\n            </ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"7\"\n            sizeLg=\"6\"\n            sizeXl=\"4\"\n            class=\"ion-align-self-center ion-text-center\"\n          >\n            <h1>\n              <strong\n                >Great job. <br />\n                You made it!</strong\n              >\n            </h1>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf=\"profile !== undefined\"\n          class=\"ion-align-items-center ion-justify-content-center ion-margin-top ion-margin-bottom\"\n        >\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"7\"\n            sizeLg=\"6\"\n            sizeXl=\"4\"\n            class=\"ion-align-self-center ion-no-padding\"\n          >\n            <ion-row *ngIf=\"currentMonth\" class=\"ion-align-items-center ion-justify-content-center\">\n              <ion-col\n                size-xs=\"2\"\n                size-sm=\"2\"\n                size-md=\"1\"\n                size-xl=\"1\"\n                size-lg=\"1\"\n                class=\"ion-align-self-center ion-no-padding\"\n              >\n                <ion-img src=\"../../../../../assets/images/checkmark-grey.png\" class=\"checkmark-grey\"></ion-img>\n              </ion-col>\n              <ion-col\n                size-xs=\"10\"\n                size-sm=\"10\"\n                size-md=\"11\"\n                size-xl=\"11\"\n                size-lg=\"11\"\n                class=\"ion-align-self-center ion-no-padding\"\n              >\n                <h2>\n                  <ion-text color=\"danger\">\n                    <strong class=\"completed-lessons-count\">{{ currentMonthCompletedLessons.length }}</strong>\n                  </ion-text>\n                  <small *ngIf=\"currentMonthCompletedLessons.length <= 1\">\n                    lesson in {{ currentMonth | titlecase }}</small\n                  >\n                  <small *ngIf=\"currentMonthCompletedLessons.length > 1\">\n                    lessons in {{ currentMonth | titlecase }}</small\n                  >\n                </h2>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n              <ion-col\n                size-xs=\"2\"\n                size-sm=\"2\"\n                size-md=\"1\"\n                size-xl=\"1\"\n                size-lg=\"1\"\n                class=\"ion-align-self-center ion-no-padding\"\n              >\n                <ion-img src=\"../../../../../assets/images/checkmark-grey.png\" class=\"checkmark-grey\"></ion-img>\n              </ion-col>\n              <ion-col\n                size-xs=\"10\"\n                size-sm=\"10\"\n                size-md=\"11\"\n                size-xl=\"11\"\n                size-lg=\"11\"\n                class=\"ion-align-self-center ion-no-padding\"\n              >\n                <h2 *ngIf=\"profile?.currentPackage === 'Subscription'; else freeTrial\">\n                  <ion-text color=\"danger\">\n                    <strong class=\"completed-lessons-count\">{{ subscriptionMonthCompletedLessons.length }}</strong>\n                  </ion-text>\n                  <small *ngIf=\"subscriptionMonthCompletedLessons.length <= 1\">\n                    lesson in subscription month (\n                    {{ profile?.userSubscriptionStartDate | date: 'mediumDate' }} -\n                    {{ profile?.userSubscriptionEndDate | date: 'mediumDate' }} )</small\n                  >\n                  <small *ngIf=\"subscriptionMonthCompletedLessons.length > 1\">\n                    lessons in subscription month (\n                    {{ profile?.userSubscriptionStartDate | date: 'mediumDate' }} -\n                    {{ profile?.userSubscriptionEndDate | date: 'mediumDate' }} )</small\n                  >\n                </h2>\n                <ng-template #freeTrial>\n                  <h2>\n                    <ion-text color=\"danger\">\n                      <strong class=\"completed-lessons-count\">{{ profile.completedLesson }}</strong>\n                    </ion-text>\n                    <small *ngIf=\"profile.completedLesson <= 1\"> lesson in Free Trial</small>\n                    <small *ngIf=\"profile.completedLesson > 1\"> lessons in Free Trial</small>\n                  </h2>\n                </ng-template>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-padding-top ion-align-items-center ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"7\"\n            sizeLg=\"6\"\n            sizeXl=\"4\"\n            class=\"ion-align-self-center ion-text-center\"\n          >\n            <ion-button\n              mode=\"ios\"\n              color=\"danger\"\n              shape=\"round\"\n              expand=\"block\"\n              [routerLink]=\"['/dashboard/search-lessons']\"\n              routerLinkActive=\"router-link-active\"\n            >\n              More lessons\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"7\"\n            sizeLg=\"6\"\n            sizeXl=\"4\"\n            class=\"ion-align-self-center ion-text-center\"\n          >\n            <ion-button\n              mode=\"ios\"\n              color=\"danger\"\n              fill=\"outline\"\n              shape=\"round\"\n              expand=\"block\"\n              [routerLink]=\"['/dashboard/review', true]\"\n              routerLinkActive=\"router-link-active\"\n            >\n              Review Saved Words / Expressions\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module-es2015.js.map