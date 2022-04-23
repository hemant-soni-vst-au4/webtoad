(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-boarding-on-boarding-level-on-boarding-level-module"], {
    /***/
    "FuWY":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding/on-boarding-level/on-boarding-level.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FuWY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"ion-margin-top\">\n    <ion-row *ngIf=\"isDesktop === true\" class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size-md=\"1\" size-xl=\"1\" class=\"ion-align-self-center\">\n        <img src=\"../../../assets/images/logo.png\" alt=\"start english now\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-xl=\"8\" size-lg=\"8\" class=\"ion-align-self-center\">\n        <h5 [ngClass]=\"{'ion-text-center': isDesktop === true}\" class=\"\">\n          I have\n          <strong>3 questions</strong>\n          for you to personalize your learning.\n        </h5>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"on-boarding-level ion-align-items-center ion-justify-content-center\" #container>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-xl=\"8\" size-lg=\"8\" class=\"ion-align-self-center\">\n        <h3 class=\"ion-text-center ion-margin-bottom\">\n          1 ) How much you can understand from the below?\n        </h3>\n        <ion-row class=\"lesson ion-align-items-center ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"10\"\n            sizeLg=\"8\"\n            sizeXl=\"8\"\n            class=\"ion-align-self-center ion-no-padding youtube-container\"\n          >\n            <ngx-y2-player\n              *ngIf=\"youTubeId !== undefined; else noYouTubeId\"\n              #video\n              [videoId]=\"youTubeId\"\n              [playerOptions]=\"playerOptions\"\n              [container]=\"container\"\n              (ready)=\"onReady($event)\"\n              (stateChange)=\"onStateChange($event)\"\n              style=\"pointer-events: all;\"\n            >\n            </ngx-y2-player>\n            <ng-template #noYouTubeId>\n              <!-- <ion-spinner></ion-spinner> -->\n            </ng-template>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-xl=\"4\" size-lg=\"4\" class=\"ion-align-self-center\">\n        <ion-radio-group [(ngModel)]=\"selectedLevel\" (ionChange)=\"selectLevel(selectedLevel)\">\n          <ion-item lines=\"none\" *ngFor=\"let level of levels\">\n            <ion-label *ngIf=\"level.name === 'Elementary'\">Not much (0-40%)</ion-label>\n            <ion-label *ngIf=\"level.name === 'Intermediate'\">About half (40-70%)</ion-label>\n            <ion-label *ngIf=\"level.name === 'Advanced'\">Quite a lot (70% or more)</ion-label>\n            <ion-radio color=\"danger\" mode=\"md\" slot=\"end\" [value]=\"level._id\"> </ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-col>\n    </ion-row>\n    <ion-row\n      class=\"ion-align-items-center ion-justify-content-center ion-margin-top\"\n      *ngIf=\"currentLevel !== undefined && currentLevel?.name !== undefined\"\n    >\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-xl=\"4\" size-lg=\"4\" class=\"ion-align-self-center\">\n        <ion-card class=\"ion-no-margin\" mode=\"ios\">\n          <ion-card-content>\n            Cool, we'll recommend\n            <ion-text color=\"danger\"> {{ currentLevel.name | lowercase }} lessons </ion-text>\n            for you. You can always change your level in settings.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      class=\"ion-align-items-center ion-justify-content-center ion-margin-top\"\n      *ngIf=\"currentLevel !== undefined && currentLevel?.name !== undefined\"\n    >\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-xl=\"4\" size-lg=\"4\" class=\"ion-align-self-center\">\n        <ion-button mode=\"ios\" color=\"danger\" shape=\"round\" expand=\"block\" (click)=\"nextQuestion()\">\n          <strong>OKAY, NEXT QUESTION</strong>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "iC4g":
    /*!***************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-level/on-boarding-level.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function iC4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content h3 {\n  font-weight: 400;\n}\nion-content ion-spinner {\n  display: block;\n  margin: 0 auto;\n  height: 170px;\n}\nion-content ion-card {\n  border: 1.2px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uLWJvYXJkaW5nLWxldmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FBQUo7QUFFRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtBQUFKIiwiZmlsZSI6Im9uLWJvYXJkaW5nLWxldmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgI2Q4ZDhkODtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "lhpY":
    /*!***************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-level/on-boarding-level.module.ts ***!
      \***************************************************************************/

    /*! exports provided: OnBoardingLevelPageModule */

    /***/
    function lhpY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingLevelPageModule", function () {
        return OnBoardingLevelPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ngx_y2_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-y2-player */
      "k9H9");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/on-boarding.service */
      "DkPS");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _on_boarding_level_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./on-boarding-level.page */
      "sgi/");

      var routes = [{
        path: '',
        component: _on_boarding_level_page__WEBPACK_IMPORTED_MODULE_8__["OnBoardingLevelPage"]
      }];

      var OnBoardingLevelPageModule = function OnBoardingLevelPageModule() {
        _classCallCheck(this, OnBoardingLevelPageModule);
      };

      OnBoardingLevelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), ngx_y2_player__WEBPACK_IMPORTED_MODULE_1__["NgxY2PlayerModule"]],
        declarations: [_on_boarding_level_page__WEBPACK_IMPORTED_MODULE_8__["OnBoardingLevelPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__["OnBoardingService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], OnBoardingLevelPageModule);
      /***/
    },

    /***/
    "sgi/":
    /*!*************************************************************************!*\
      !*** ./src/app/on-boarding/on-boarding-level/on-boarding-level.page.ts ***!
      \*************************************************************************/

    /*! exports provided: OnBoardingLevelPage */

    /***/
    function sgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingLevelPage", function () {
        return OnBoardingLevelPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_on_boarding_level_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./on-boarding-level.page.html */
      "FuWY");
      /* harmony import */


      var _on_boarding_level_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./on-boarding-level.page.scss */
      "iC4g");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_y2_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-y2-player */
      "k9H9");

      var OnBoardingLevelPage = /*#__PURE__*/function () {
        function OnBoardingLevelPage(onBoardingService, router, alertController, navController, platform, sharedService) {
          var _this = this;

          _classCallCheck(this, OnBoardingLevelPage);

          this.onBoardingService = onBoardingService;
          this.router = router;
          this.alertController = alertController;
          this.navController = navController;
          this.platform = platform;
          this.sharedService = sharedService;
          this.isDesktop = false;
          this.playerOptions = {
            playerVars: {
              autohide: 1,
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              showinfo: 0
            }
          };
          this.levels = [];
          sharedService.getDeviceInfo().then(function (info) {
            _this.isDesktop = info.isDesktop;
          });
          this.sharedService.gaTrackView('On-Boarding Select Level Screen');
        }

        _createClass(OnBoardingLevelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userGuid();
            this.levelList();
          }
        }, {
          key: "userGuid",
          value: function userGuid() {
            var _this2 = this;

            try {
              this.onBoardingService.userGuid({
                language: 'eng'
              }).subscribe(function (res) {
                var youtubeId = res.data.youtubeId;
                _this2.youTubeId = youtubeId;
              }, function (error) {// this.sharedService.presentToast( error );
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "levelList",
          value: function levelList() {
            var _this3 = this;

            try {
              this.onBoardingService.levelList().subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var alert;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // console.log( res );
                          this.levels = res.data; // this.currentLevel = res.levelId;
                          // this.selectedLevel = this.currentLevel.userLevelId;

                          _context.next = 3;
                          return this.alertController.create({
                            subHeader: 'Welcome! Your account has been successfully created.',
                            message: "<div><strong>Notes:</strong><div><div>1) We've have given you 5 free trial lessons.</div><div>2) Check your email to verify that you're real.</div>",
                            cssClass: 'on-boarding-alert',
                            buttons: ['OK']
                          });

                        case 3:
                          alert = _context.sent;
                          _context.next = 6;
                          return alert.present();

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, function (error) {
                console.log(error);
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "selectLevel",
          value: function selectLevel(event) {
            var _this4 = this;

            if (event) {
              this.currentLevel = {};
              this.currentLevel['userLevelId'] = event;
              var findLevel = this.levels.find(function (level) {
                return level.id === _this4.currentLevel['userLevelId'];
              });
              this.sharedService.gaTrackEvent('SelectedLevel', findLevel.name);

              if (findLevel.name === 'Elementary') {
                this.currentLevel['name'] = 'Upper-beginner';
              } else {
                this.currentLevel['name'] = findLevel.name;
              }
            }
          }
        }, {
          key: "onChangeLevel",
          value: function onChangeLevel(level) {
            if (level.name === 'Elementary') {
              this.currentLevel['name'] = 'Upper-beginner';
            } else {
              this.currentLevel['name'] = level.name;
            }
          }
        }, {
          key: "nextQuestion",
          value: function nextQuestion() {
            var _this5 = this;

            this.video.videoPlayer.pauseVideo();

            try {
              this.onBoardingService.changeLevel(this.currentLevel).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.navController.setDirection('forward');
                          this.router.navigate(['/on-boarding-language']);
                          this.sharedService.gaTrackEvent('LevelNextQuestion', '{"Screen":"Select Level Screen","selection":"Next"}');

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }, function (error) {
                console.log(error);
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "onReady",
          value: function onReady(event) {
            if (event.target) {// event.target.playVideo();
            }
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(event) {// console.log( event );
          }
        }]);

        return OnBoardingLevelPage;
      }();

      OnBoardingLevelPage.ctorParameters = function () {
        return [{
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }];
      };

      OnBoardingLevelPage.propDecorators = {
        video: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: ['video', {
            "static": false
          }]
        }]
      };
      OnBoardingLevelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-on-boarding-level',
        template: _raw_loader_on_boarding_level_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_boarding_level_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])], OnBoardingLevelPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-boarding-on-boarding-level-on-boarding-level-module-es5.js.map