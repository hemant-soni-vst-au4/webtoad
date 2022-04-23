(function () {
  var _templateObject;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["review-review-module"], {
    /***/
    "6gaI":
    /*!*********************************************************************!*\
      !*** ./src/app/dashboard/review/user-note/user-note.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function gaI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW5vdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "MDBD":
    /*!***************************************************!*\
      !*** ./src/app/dashboard/review/review.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function MDBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".review-page h1 {\n  margin: 10px 0px 0px 15px;\n}\n.review-page .completed-lessons .titleMargin {\n  margin: 13px 13px 0 13px;\n}\n.review-page .completed-lessons ion-note {\n  margin: 0px 13px 0px 13px;\n  font-size: 22px;\n  line-height: 1.6;\n  text-align: center;\n  color: #747474;\n}\n.review-page .completed-lessons ion-thumbnail {\n  min-height: 100px;\n  width: 30%;\n  max-width: 180px;\n  margin-right: 16px;\n}\n.review-page .completed-lessons ion-thumbnail img {\n  border-radius: 10px;\n}\n@media only screen and (max-width: 414px) {\n  .review-page .completed-lessons ion-thumbnail {\n    min-height: auto;\n    height: 64px;\n  }\n}\n.review-page .completed-lessons .lesson-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 18px;\n}\n.review-page .completed-lessons .lesson-level {\n  color: #f47d3e;\n}\n.review-page .completed-lessons .lesson-level,\n.review-page .completed-lessons .lesson-completed-date {\n  font-size: 12.5px;\n}\n.review-page .completed-lessons .lesson-completed-date {\n  color: #212121;\n}\n.review-page .completed-lessons ion-icon {\n  font-size: 25px;\n}\n.review-page .border-bottom {\n  border-bottom: 1px solid #efefef;\n}\n.review-page .phrase-n-vocab .usernote-word {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 18px;\n  margin: 0 16px;\n}\n.review-page .phrase-n-vocab .play-icon {\n  min-height: 100px;\n  width: 30%;\n}\n@media only screen and (max-width: 414px) {\n  .review-page .phrase-n-vocab .play-icon {\n    min-height: auto;\n    height: 64px;\n    width: 55%;\n  }\n}\n.userNoteModal {\n  --border-radius: 10px;\n  --width: 360px;\n  --height: 260px;\n}\n.userNoteModal .usernote-content {\n  position: relative;\n  padding: 15px;\n  overflow: scroll;\n}\n.userNoteModal .usernote-content .modal-header {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 1;\n  align-items: center;\n}\n.userNoteModal .usernote-content .modal-header .title-word {\n  flex: 1;\n  padding-left: 15px;\n  text-align: left;\n  font-weight: 700;\n}\n.userNoteModal .usernote-content .modal-header .play-icon {\n  height: 2em;\n}\n.userNoteModal .usernote-content .modal-header .modal-dismiss {\n  font-size: 25px;\n}\n.userNoteModal .usernote-content .modal-body {\n  margin-top: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQUFKO0FBR0k7RUFDRSx3QkFBQTtBQUROO0FBSUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZOO0FBSUk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFHTTtFQUVFLG1CQUFBO0FBRlI7QUFJTTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxZQUFBO0VBRE47QUFDRjtBQUdJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUROO0FBSUk7RUFDRSxjQUFBO0FBRk47QUFJSTs7RUFFRSxpQkFBQTtBQUZOO0FBSUk7RUFDRSxjQUFBO0FBRk47QUFJSTtFQUNFLGVBQUE7QUFGTjtBQUtFO0VBQ0UsZ0NBQUE7QUFISjtBQU1JO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKTjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBSk47QUFNSTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQUpOO0FBQ0Y7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtBQUxOO0FBTU07RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFNTTtFQUNFLFdBQUE7QUFKUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBT0k7RUFDRSxnQkFBQTtBQUxOIiwiZmlsZSI6InJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3LXBhZ2Uge1xuICBoMSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTVweDtcbiAgfVxuICAuY29tcGxldGVkLWxlc3NvbnMge1xuICAgIC50aXRsZU1hcmdpbiB7XG4gICAgICBtYXJnaW46IDEzcHggMTNweCAwIDEzcHg7XG4gICAgfVxuXG4gICAgaW9uLW5vdGUge1xuICAgICAgbWFyZ2luOiAwcHggMTNweCAwcHggMTNweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICB9XG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubGVzc29uLW5hbWUge1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAubGVzc29uLWxldmVsIHtcbiAgICAgIGNvbG9yOiAjZjQ3ZDNlO1xuICAgIH1cbiAgICAubGVzc29uLWxldmVsLFxuICAgIC5sZXNzb24tY29tcGxldGVkLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgfVxuICAgIC5sZXNzb24tY29tcGxldGVkLWRhdGUge1xuICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gIH1cbiAgLmJvcmRlci1ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICB9XG4gIC5waHJhc2Utbi12b2NhYiB7XG4gICAgLnVzZXJub3RlLXdvcmQge1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIH1cbiAgICAucGxheS1pY29uIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgLnBsYXktaWNvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnVzZXJOb3RlTW9kYWwge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0td2lkdGg6IDM2MHB4O1xuICAtLWhlaWdodDogMjYwcHg7XG4gIC51c2Vybm90ZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnRpdGxlLXdvcmQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgICAucGxheS1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICB9XG4gICAgICAubW9kYWwtZGlzbWlzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "OCRg":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/review/user-note/user-note.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OCRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row>\n  <ion-col>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"9\" class=\"ion-align-self-center\">\n        <h5 class=\"ion-no-margin c-red\">\n          <strong>{{ userNote?.word }}</strong>\n        </h5>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-align-self-center ion-text-right\">\n        <ion-icon mode=\"md\" name=\"close\" class=\"pointer\" id=\"modal-dismiss\" (click)=\"onDismiss()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"12\" class=\"ion-align-self-center\">\n        <ng-container *ngIf=\"userNote?.meaning; else noMeaning\">\n          <p><strong class=\"c-orange\">English: </strong> {{ userNote?.meaning }}</p>\n          <p>{{ userNote?.kor }}</p>\n        </ng-container>\n        <ng-template #noMeaning>\n          <p *ngIf=\"userNote?.kor\"><b class=\"c-orange\">(Korean):</b> {{ userNote?.kor }}</p>\n\n          <p *ngIf=\"userNote?.noun\"><b class=\"c-orange\">(Noun):</b> {{ userNote?.noun }}</p>\n\n          <p *ngIf=\"userNote?.verb\"><b class=\"c-orange\">(Verb):</b> {{ userNote?.verb }}</p>\n\n          <p *ngIf=\"userNote?.adv\"><b class=\"c-orange\">(Adverb):</b> {{ userNote?.adv }}</p>\n\n          <p *ngIf=\"userNote?.adj\"><b class=\"c-orange\">(Adjective):</b> {{ userNote?.adj }}</p>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>\n";
      /***/
    },

    /***/
    "bZRo":
    /*!***************************************************!*\
      !*** ./src/app/dashboard/review/review.module.ts ***!
      \***************************************************/

    /*! exports provided: ReviewPageModule */

    /***/
    function bZRo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function () {
        return ReviewPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _user_note_user_note_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-note/user-note.component */
      "vDyq");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/lessons.service */
      "s1uX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_native_text_to_speech_ngx___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/text-to-speech/ngx/ */
      "2TGb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _review_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./review.page */
      "waYZ");

      var routes = [{
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_9__["ReviewPage"]
      }];

      var ReviewPageModule = function ReviewPageModule() {
        _classCallCheck(this, ReviewPageModule);
      };

      ReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_review_page__WEBPACK_IMPORTED_MODULE_9__["ReviewPage"], _user_note_user_note_component__WEBPACK_IMPORTED_MODULE_1__["UserNoteComponent"]],
        entryComponents: [_user_note_user_note_component__WEBPACK_IMPORTED_MODULE_1__["UserNoteComponent"]],
        providers: [_services_lessons_service__WEBPACK_IMPORTED_MODULE_2__["LessonsService"], _ionic_native_text_to_speech_ngx___WEBPACK_IMPORTED_MODULE_7__["TextToSpeech"]]
      })], ReviewPageModule);
      /***/
    },

    /***/
    "vDyq":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard/review/user-note/user-note.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UserNoteComponent */

    /***/
    function vDyq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserNoteComponent", function () {
        return UserNoteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_note_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-note.component.html */
      "OCRg");
      /* harmony import */


      var _user_note_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-note.component.scss */
      "6gaI");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UserNoteComponent = /*#__PURE__*/function () {
        function UserNoteComponent(modalController, navParams) {
          _classCallCheck(this, UserNoteComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.userNote = this.navParams.get('userNote');
        }

        _createClass(UserNoteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onDismiss",
          value: function onDismiss() {
            this.modalController.dismiss();
          }
        }]);

        return UserNoteComponent;
      }();

      UserNoteComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      };

      UserNoteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-note',
        template: _raw_loader_user_note_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_note_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], UserNoteComponent);
      /***/
    },

    /***/
    "waYZ":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/review/review.page.tsx ***!
      \**************************************************/

    /*! exports provided: ReviewPage */

    /***/
    function waYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewPage", function () {
        return ReviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _review_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./review.page.scss */
      "MDBD");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! react */
      "q1tI");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @apollo/client */
      "VX74");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/react */
      "eP13");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns/fp */
      "XqfF");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ionicons_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ionicons/icons */
      "/3n0");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! react-dom */
      "i8i4");
      /* harmony import */


      var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/shared.service */
      "zuHl");
      /* harmony import */


      var src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/reactapp/AppProvider */
      "mxLC");
      /* harmony import */


      var src_reactapp_pages_lessonSteps_useHelpGuide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/reactapp/pages/lessonSteps/useHelpGuide */
      "+hBF");
      /* harmony import */


      var src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/reactapp/types-and-hooks */
      "35Ww");
      /* harmony import */


      var src_reactapp_useSpeak__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/reactapp/useSpeak */
      "lNtg");
      /* harmony import */


      var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/reactapp/useStore */
      "+9Tx");

      var containerElementName = 'rcReviewPage';

      var ReviewPage = /*#__PURE__*/function () {
        // selectedSegment = 'lesson'
        // completedLessons = new Array()
        // completedLessonsPage = 1
        // completedLessonsLoaded = false
        // completedLessonsTotal: number = null
        // userNotes = new Array()
        // userNotesPage = 0
        // userNotesLoaded = false
        // userNotesTotal: number = null
        // isDesktop = false
        // isCompletedLessons = false
        // speech: Speech = null
        function ReviewPage(router, alertController, sharedService, navController, platform, modalController) {
          _classCallCheck(this, ReviewPage);

          this.router = router;
          this.alertController = alertController;
          this.sharedService = sharedService;
          this.navController = navController;
          this.platform = platform;
          this.modalController = modalController;
          this.sharedService.gaTrackView('Review Screen'); // this.platform
          //   .ready()
          //   .then(() => {
          //     if (this.platform.is('android') || this.platform.is('ios')) {
          //       if (this.platform.is('pwa')) {
          //         this.isDesktop = true
          //       } else {
          //         this.isDesktop = false
          //       }
          //       if (this.platform.is('mobileweb')) {
          //         this.isDesktop = true
          //       } else {
          //         this.isDesktop = false
          //       }
          //     } else {
          //       this.isDesktop = true
          //     }
          //     if (this.isDesktop === true) {
          //       const speech = new Speech() // will throw an exception if not browser supported
          //       if (speech.hasBrowserSupport()) {
          //         speech
          //           .init({lang: 'en-US'})
          //           .then(() => {
          //             this.speech = speech
          //           })
          //           .catch((e) => {
          //             console.error('An error occured while initializing : ', e)
          //           })
          //       }
          //     }
          //   })
          //   .catch((error) => {
          //     console.log(error)
          //   })
        }

        _createClass(ReviewPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.render();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.render();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.render();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["unmountComponentAtNode"])(this.containerRef.nativeElement);
          }
        }, {
          key: "render",
          value: function render() {
            if (this.containerRef) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(src_reactapp_AppProvider__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReactReviewPage, null)), this.containerRef.nativeElement);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/dashboard/review']);
          }
        }]);

        return ReviewPage;
      }();

      ReviewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      ReviewPage.propDecorators = {
        containerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [containerElementName, {
            "static": false
          }]
        }]
      };
      ReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review',
        // templateUrl: './review.page.html',
        template: "<div #".concat(containerElementName, "></div>"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_review_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], ReviewPage);

      function useReviewHelpGuide() {
        return Object(src_reactapp_pages_lessonSteps_useHelpGuide__WEBPACK_IMPORTED_MODULE_14__["useHelpGuide"])('isReviewHelpModeDone', [{
          element: '#completedLessons',
          popover: {
            title: 'Review past lessons',
            description: "Past lessons you've completed. You can re-study them as much as you like",
            position: 'bottom'
          }
        }, {
          element: '#phrases',
          popover: {
            title: 'Review saves words',
            description: 'Save words and expressions while you study lessons.',
            position: 'bottom'
          }
        }]);
      }

      function getThumnailUrl(youtubeId) {
        return "https://img.youtube.com/vi/".concat(youtubeId, "/mqdefault.jpg");
      }

      function UserNote(_ref) {
        var userNote = _ref.userNote,
            onDismiss = _ref.onDismiss;
        var speak = Object(src_reactapp_useSpeak__WEBPACK_IMPORTED_MODULE_16__["default"])();

        function handleSpeak() {
          speak(userNote.word);
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "usernote-content"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "modal-header"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "title ion-no-margin c-red"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          onClick: handleSpeak,
          className: "play play-icon",
          src: "/assets/images/icon_play.svg",
          alt: "speak word"
        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "title-word  c-red"
        }, userNote === null || userNote === void 0 ? void 0 : userNote.word), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], {
          mode: "md",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__["close"],
          className: "modal-dismiss pointer",
          onClick: onDismiss
        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "modal-body ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, (userNote === null || userNote === void 0 ? void 0 : userNote.meaning) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
          className: "c-orange"
        }, "English: "), " ", userNote === null || userNote === void 0 ? void 0 : userNote.meaning), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, userNote === null || userNote === void 0 ? void 0 : userNote.kor)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, (userNote === null || userNote === void 0 ? void 0 : userNote.kor) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
          className: "c-orange"
        }, "(Korean):"), " ", userNote === null || userNote === void 0 ? void 0 : userNote.kor), (userNote === null || userNote === void 0 ? void 0 : userNote.noun) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
          className: "c-orange"
        }, "(Noun):"), " ", userNote === null || userNote === void 0 ? void 0 : userNote.noun), (userNote === null || userNote === void 0 ? void 0 : userNote.verb) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
          className: "c-orange"
        }, "(Verb):"), " ", userNote === null || userNote === void 0 ? void 0 : userNote.verb), (userNote === null || userNote === void 0 ? void 0 : userNote.adv) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
          className: "c-orange"
        }, "(Adverb):"), " ", userNote === null || userNote === void 0 ? void 0 : userNote.adv), (userNote === null || userNote === void 0 ? void 0 : userNote.adj) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
          className: "c-orange"
        }, "(Adjective):"), " ", userNote === null || userNote === void 0 ? void 0 : userNote.adj))))));
      }

      var formatDate = Object(date_fns_fp__WEBPACK_IMPORTED_MODULE_8__["format"])('MMM d, y');
      var PAGE_SIZE = 20;

      var GET_COMPLETED_LESSONS = _apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query completedLessons($page: Int) {\n    completedLessons(page: $page, limit: 20) {\n      _id\n      courseId\n      lessonName\n      completedAt\n      course {\n        _id\n        videoLevel\n        thumbnail\n        topic {\n          title\n        }\n      }\n    }\n  }\n"])));

      function Lesson() {
        var _Object = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_15__["useGerReviewCompletedLessonsQuery"])({
          variables: {
            size: PAGE_SIZE
          }
        }),
            loading = _Object.loading,
            error = _Object.error,
            data = _Object.data,
            fetchMore = _Object.fetchMore;

        var navCtrl = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_17__["useStore"])(function (state) {
          return state.navController;
        }); // const {loading, error, data, fetchMore} = useQuery(GET_COMPLETED_LESSONS, {
        //   variables: {page: 1},
        //   // fetchPolicy: 'cache-and-network',
        //   fetchPolicy: 'cache-first',
        //   onCompleted: (data) => {
        //     if (data.completedLessons.length < PAGE_SIZE) {
        //       setNoMore(true)
        //     }
        //   },
        // })

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "ion-text-center ion-padding-top"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], {
            name: "dots"
          }));
        }

        if (error) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Error...");
        }

        function handleInfinite(e) {
          // const nextPage = Math.round(data?.completedLessons.length / 10) + 1
          fetchMore({
            variables: {
              cursor: data.moreCompletedLessons.cursor
            }
          });
          e.target.complete();
        }

        var completedLessons = data.moreCompletedLessons.nodes || [];
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonList"], {
          className: "completed-lessons"
        }, completedLessons.map(function (lesson, i) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonItem"], {
            key: lesson._id,
            button: true,
            onClick: function onClick() {
              navCtrl.navigateForward("/lesson-details/".concat(lesson._id, "/true/false"));
            },
            className: "ion-align-self-center",
            detail: false,
            lines: "none"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonNote"], {
            className: "review-num ion-align-self-center ion-text-center"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, i + 1)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonThumbnail"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            src: getThumnailUrl(lesson.youtubeId),
            alt: lesson.lessonName
          })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], {
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "lesson-level"
          }, lesson.videoLevelLabel, " - ", lesson.videoType), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "lesson-name"
          }, " ", lesson.lessonName, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "lesson-completed-date"
          }, "Studied on ", formatDate(new Date(lesson.completedAt)))));
        })), completedLessons.length === 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          className: "ion-text-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "You haven\u2019t studied any lessons yet.")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], {
          disabled: !data.moreCompletedLessons.hasMore,
          onIonInfinite: handleInfinite,
          threshold: "200px"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScrollContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], null))));
      }

      function PhraseAndVocab() {
        var speak = Object(src_reactapp_useSpeak__WEBPACK_IMPORTED_MODULE_16__["default"])();

        var _Object2 = Object(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["useIonToast"])(),
            _Object3 = _slicedToArray(_Object2, 1),
            presentToast = _Object3[0];

        var _react__WEBPACK_IMPOR = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
            _react__WEBPACK_IMPOR2 = _slicedToArray(_react__WEBPACK_IMPOR, 2),
            userNote = _react__WEBPACK_IMPOR2[0],
            setUserNote = _react__WEBPACK_IMPOR2[1];

        var _Object4 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_15__["useDeleteNoteMutation"])({
          onCompleted: function onCompleted(data) {
            presentToast('Delete successfully.', 2000);
          },
          onError: function onError(err) {
            presentToast('Oops! Something went wrong. Please try again.', 2000);
          },
          update: function update(cache, _ref2) {
            var data = _ref2.data;

            if (data.deleteNote) {
              var idToRemove = data.deleteNote;
              cache.modify({
                fields: {
                  moreNotes: function moreNotes(existing, _ref3) {
                    var readField = _ref3.readField;
                    var nodes = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["omit"])(existing.nodes, idToRemove);
                    console.log({
                      existing: existing
                    });
                    return Object.assign(Object.assign({}, existing), {
                      nodes: nodes
                    });
                  }
                }
              });
            }
          }
        }),
            _Object5 = _slicedToArray(_Object4, 1),
            deleteNote = _Object5[0];

        var _react__WEBPACK_IMPOR3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
            _react__WEBPACK_IMPOR4 = _slicedToArray(_react__WEBPACK_IMPOR3, 2),
            deleteUserNote = _react__WEBPACK_IMPOR4[0],
            setDeleteUserNote = _react__WEBPACK_IMPOR4[1];

        var _Object6 = Object(src_reactapp_types_and_hooks__WEBPACK_IMPORTED_MODULE_15__["useMoreNotesQuery"])({
          variables: {
            size: PAGE_SIZE
          },
          fetchPolicy: 'cache-and-network',
          nextFetchPolicy: 'cache-first'
        }),
            loading = _Object6.loading,
            error = _Object6.error,
            data = _Object6.data,
            fetchMore = _Object6.fetchMore;

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "ion-text-center ion-padding-top"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], {
            name: "dots"
          }));
        }

        if (error) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Error...");
        }

        function handleInfinite(e) {
          fetchMore({
            variables: {
              cursor: data.moreNotes.cursor
            }
          })["finally"](function () {
            e.target.complete && e.target.complete();
          });
        }

        var userNotes = data.moreNotes.nodes;

        function handleSpeak(userNote) {
          speak(userNote.word);
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          className: "phrase-n-vocab"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          className: "ion-align-self-center",
          "size-xs": "12",
          "size-sm": "12",
          "size-md": "10",
          "size-lg": "9",
          "size-xl": "9"
        }, userNotes.map(function (userNote) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
            key: userNote._id,
            className: "hover-pointer  ripple-parent ion-align-items-center ion-justify-content-center completed-lessons border-bottom"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
            "size-xs": "9",
            "size-sm": "9",
            "size-md": "9",
            "size-lg": "9",
            "size-xl": "9",
            className: "ion-align-self-center ",
            onClick: function onClick() {
              return setUserNote(userNote);
            }
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "usernote-word"
          }, userNote.word)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
            size: "3",
            className: "ion-align-self-center ion-no-padding"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
            className: "ion-align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
            size: "6",
            className: "ion-align-self-center",
            // (click)="onSpeakNote(userNote)"
            onClick: function onClick() {
              return handleSpeak(userNote);
            }
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            className: "play-icon",
            src: "/assets/images/icon_play.svg",
            alt: "speak word"
          })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
            size: "6",
            className: "ion-align-self-center"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], {
            onClick: function onClick() {
              return setDeleteUserNote(userNote);
            },
            icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__["close"],
            color: "medium",
            mode: "md"
          })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRippleEffect"], null));
        }), loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], null))) : userNotes.length === 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          className: "ion-text-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "You haven\u2019t saved any words yet.")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], {
          disabled: !data.moreNotes.hasMore,
          onIonInfinite: handleInfinite,
          threshold: "100px"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScrollContent"], {
          loadingSpinner: "circular"
        }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonModal"], {
          mode: "ios",
          isOpen: !!userNote,
          cssClass: "userNoteModal",
          onDidDismiss: function onDidDismiss() {
            return setUserNote(undefined);
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserNote, {
          userNote: userNote,
          onDismiss: function onDismiss() {
            return setUserNote(undefined);
          }
        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonAlert"], {
          isOpen: !!deleteUserNote,
          onDidDismiss: function onDidDismiss() {
            return setDeleteUserNote(undefined);
          },
          // cssClass='my-custom-class'
          // header={'Alert'}
          // subHeader={'Subtitle'}
          message: 'Are you sure you want to delete this?',
          buttons: [{
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function handler(blah) {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: function handler() {
              deleteNote({
                variables: {
                  id: deleteUserNote._id
                }
              }).then(function (data) {})["catch"](function (err) {
                console.log(err);
              });
            }
          }]
        })));
      }

      function ReactReviewPage() {
        var _react__WEBPACK_IMPOR5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('lesson'),
            _react__WEBPACK_IMPOR6 = _slicedToArray(_react__WEBPACK_IMPOR5, 2),
            segment = _react__WEBPACK_IMPOR6[0],
            setSegment = _react__WEBPACK_IMPOR6[1]; // const [segment, setSegment] = React.useState('phrasesAndVocab')


        var _useReviewHelpGuide = useReviewHelpGuide(),
            showHelpGuide = _useReviewHelpGuide.showHelpGuide;

        react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
          showHelpGuide();
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonPage"], {
          className: "review-page"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonContent"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], {
          className: "ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "9",
          sizeLg: "8",
          sizeXl: "8",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Review")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          className: "ion-no-padding ion-align-self-center",
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "9",
          sizeXl: "9"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSegment"], {
          value: segment,
          onIonChange: function onIonChange(e) {
            return setSegment(e.detail.value);
          },
          // value="lesson"
          color: "danger",
          mode: "md"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSegmentButton"], {
          id: "completedLessons",
          mode: "md",
          value: "lesson"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], null, "Lesson")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonSegmentButton"], {
          id: "phrases",
          mode: "md",
          value: "phrasesAndVocab"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], null, 'Phrase & Vocab'))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_7__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          sizeMd: "10",
          sizeLg: "9",
          sizeXl: "9",
          className: "ion-align-self-center ion-no-padding"
        }, segment === 'lesson' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Lesson, null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PhraseAndVocab, null))))));
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=review-review-module-es5.js.map