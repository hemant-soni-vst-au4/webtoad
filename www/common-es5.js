(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+hBF":
    /*!*********************************************************!*\
      !*** ./src/reactapp/pages/lessonSteps/useHelpGuide.tsx ***!
      \*********************************************************/

    /*! exports provided: useHelpGuide */

    /***/
    function hBF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useHelpGuide", function () {
        return useHelpGuide;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/reactapp/useStore */
      "+9Tx");

      function useHelpGuide(storageKey, steps) {
        var sharedService = Object(src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"])(function (state) {
          return state.sharedService;
        });

        function showHelpGuide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return sharedService.getNativeStorage(storageKey);

                  case 2:
                    data = _context.sent;

                    if (!((data === null || data === void 0 ? void 0 : data.data) !== true)) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      sharedService.showHelpGuide({
                        steps: steps,
                        onClose: function onClose() {
                          sharedService.setNativeStorage(storageKey, true).then(function () {
                            var el = document.getElementById('ion-content'); //@ts-ignore

                            el.scrollToTop();
                            resolve(true);
                          });
                        },
                        delay: 200
                      });
                    }));

                  case 5:
                    return _context.abrupt("return", null);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }

        return {
          showHelpGuide: showHelpGuide
        };
      }
      /***/

    },

    /***/
    "1uqf":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***************************************************************************************************/

    /*! exports provided: S */

    /***/
    function uqf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "2TGb":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic-native/text-to-speech/ngx/index.js ***!
      \****************************************************************/

    /*! exports provided: TextToSpeech */

    /***/
    function TGb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextToSpeech", function () {
        return TextToSpeech;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "a3Cf");

      var TextToSpeech =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextToSpeech, _super);

        function TextToSpeech() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        TextToSpeech.prototype.speak = function (textOrOptions) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "speak", {
            "successIndex": 1,
            "errorIndex": 2
          }, arguments);
        };

        TextToSpeech.prototype.stop = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments);
        };

        TextToSpeech.pluginName = "Text To Speech";
        TextToSpeech.plugin = "cordova-plugin-tts";
        TextToSpeech.pluginRef = "TTS";
        TextToSpeech.repo = "https://github.com/vilic/cordova-plugin-tts";
        TextToSpeech.platforms = ["Android", "iOS", "Windows Phone 8"];
        TextToSpeech.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }];
        return TextToSpeech;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RleHQtdG8tc3BlZWNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDdEMsZ0NBQWlCOzs7O0lBVWpELDRCQUFLLGFBQUMsYUFBa0M7SUFTeEMsMkJBQUk7Ozs7Ozs7Z0JBcEJMLFVBQVU7O3VCQXhDWDtFQXlDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUVFNPcHRpb25zIHtcbiAgLyoqIHRleHQgdG8gc3BlYWsgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogYSBzdHJpbmcgbGlrZSAnZW4tVVMnLCAnemgtQ04nLCBldGMgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xuICAvKiogc3BlZWQgcmF0ZSwgMCB+IDEgKi9cbiAgcmF0ZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBUZXh0IFRvIFNwZWVjaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUZXh0IHRvIFNwZWVjaCBwbHVnaW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGV4dC10by1zcGVlY2gvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHR0czogVGV4dFRvU3BlZWNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnR0cy5zcGVhaygnSGVsbG8gV29ybGQnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpKVxuICogICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiBjb25zb2xlLmxvZyhyZWFzb24pKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBUVFNPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGV4dCBUbyBTcGVlY2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10dHMnLFxuICBwbHVnaW5SZWY6ICdUVFMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpbGljL2NvcmRvdmEtcGx1Z2luLXR0cycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGV4dFRvU3BlZWNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzcGVha3NcbiAgICogQHBhcmFtIHRleHRPck9wdGlvbnMge3N0cmluZyB8IFRUU09wdGlvbnN9IFRleHQgdG8gc3BlYWsgb3IgVFRTT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3BlYWtpbmcgZmluaXNoZXNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3BlYWsodGV4dE9yT3B0aW9uczogc3RyaW5nIHwgVFRTT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYW55IGN1cnJlbnQgVFRTIHBsYXliYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "9XHJ":
    /*!*******************************************!*\
      !*** ./src/app/pipes/filter-faqs.pipe.ts ***!
      \*******************************************/

    /*! exports provided: FilterFaqsPipe */

    /***/
    function XHJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterFaqsPipe", function () {
        return FilterFaqsPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FilterFaqsPipe = /*#__PURE__*/function () {
        function FilterFaqsPipe() {
          _classCallCheck(this, FilterFaqsPipe);
        }

        _createClass(FilterFaqsPipe, [{
          key: "transform",
          value: function transform(items, filter) {
            if (!items || !filter) {
              return items;
            } // filter items array, items which match and return true will be
            // kept, false will be filtered out


            return items.filter(function (item) {
              return item.question.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            });
          }
        }]);

        return FilterFaqsPipe;
      }();

      FilterFaqsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterFaqs'
      })], FilterFaqsPipe);
      /***/
    },

    /***/
    "JbSX":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function JbSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "LUQC":
    /*!************************************************************!*\
      !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function LUQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var isProduction = "development" === 'production';

      function warning(condition, message) {
        if (!isProduction) {
          if (condition) {
            return;
          }

          var text = "Warning: " + message;

          if (typeof console !== 'undefined') {
            console.warn(text);
          }

          try {
            throw Error(text);
          } catch (x) {}
        }
      }
      /* harmony default export */


      __webpack_exports__["default"] = warning;
      /***/
    },

    /***/
    "aVpl":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*************************************************************************************************/

    /*! exports provided: c */

    /***/
    function aVpl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "ZAw0");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "lVrF");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "Gmhi");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "acej":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function acej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!delegate) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context3.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context3.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context3.abrupt("return", el);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "ahGQ":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*****************************************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function ahGQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context4.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context4.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context4.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context4.abrupt("return", false);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function openURL(_x10, _x11, _x12, _x13) {
          return _ref3.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "cBgN":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic-native/date-picker/ngx/index.js ***!
      \*************************************************************/

    /*! exports provided: DatePicker */

    /***/
    function cBgN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePicker", function () {
        return DatePicker;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "a3Cf");

      var DatePicker =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatePicker, _super);

        function DatePicker() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * @hidden
           */


          _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5
          };
          return _this;
        }

        DatePicker.prototype.show = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {}, arguments);
        };

        DatePicker.pluginName = "DatePicker";
        DatePicker.plugin = "cordova-plugin-datepicker";
        DatePicker.pluginRef = "datePicker";
        DatePicker.repo = "https://github.com/VitaliiBlagodir/cordova-plugin-datepicker";
        DatePicker.platforms = ["Android", "iOS", "Windows"];
        DatePicker.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }];
        return DatePicker;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RhdGUtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTBKeEMsOEJBQWlCOzs7UUFDL0M7O1dBRUc7UUFDSCxvQkFBYyxHQUFHO1lBQ2YsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixFQUFFLENBQUM7WUFDNUIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QixDQUFDOzs7SUFRRix5QkFBSSxhQUFDLE9BQTBCOzs7Ozs7O2dCQW5CaEMsVUFBVTs7cUJBMUpYO0VBMkpnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBtb2RlIG9mIHRoZSBkYXRlIHBpY2tlclxuICAgKiBWYWx1ZXM6IGRhdGUgfCB0aW1lIHwgZGF0ZXRpbWVcbiAgICovXG4gIG1vZGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0ZWQgZGF0ZVxuICAgKi9cbiAgZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogTWluaW11bSBkYXRlXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZVxuICAgKiBEZWZhdWx0OiBlbXB0eSBTdHJpbmdcbiAgICovXG4gIG1heERhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgdGhlIGRpYWxvZyB0aXRsZS4gSWYgZW1wdHksIHVzZXMgYW5kcm9pZCBkZWZhdWx0IChTZXQgZGF0ZS9TZXQgdGltZSkuXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgdGl0bGVUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBCVVRUT05fUE9TSVRJVkUgKGRvbmUgYnV0dG9uKSBvbiBBbmRyb2lkXG4gICAqL1xuICBva1RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIEJVVFRPTl9ORUdBVElWRSAoY2FuY2VsIGJ1dHRvbikuIElmIGVtcHR5LCB1c2VzIGFuZHJvaWQuUi5zdHJpbmcuY2FuY2VsLlxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2YgdG9kYXkgYnV0dG9uLiBJZiBlbXB0eSwgZG9lc24ndCBzaG93IHRoZSBvcHRpb24gdG8gc2VsZWN0IGN1cnJlbnQgZGF0ZS5cbiAgICovXG4gIHRvZGF5VGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2Ygbm93IGJ1dHRvbi4gSWYgZW1wdHksIGRvZXNuJ3Qgc2hvdyB0aGUgb3B0aW9uIHRvIHNlbGVjdCBjdXJyZW50IHRpbWUuXG4gICAqL1xuICBub3dUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aW1lIGRpYWxvZyBpbiAyNCBob3VycyBmb3JtYXQuXG4gICAqL1xuICBpczI0SG91cj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgQW5kcm9pZCB0aGVtZSBmb3IgdGhlIHBpY2tlci4gWW91IGNhbiB1c2UgdGhlIERhdGVQaWNrZXIuQU5EUk9JRF9USEVNRVMgcHJvcGVydHkuXG4gICAqIFZhbHVlczogMTogVEhFTUVfVFJBRElUSU9OQUwgfCAyOiBUSEVNRV9IT0xPX0RBUksgfCAzOiBUSEVNRV9IT0xPX0xJR0hUIHwgNDogVEhFTUVfREVWSUNFX0RFRkFVTFRfREFSSyB8IDU6IFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUXG4gICAqL1xuICBhbmRyb2lkVGhlbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3dzIG9yIGhpZGUgZGF0ZXMgZWFybGllciB0aGVuIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBhbGxvd09sZERhdGVzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvd3Mgb3IgaGlkZSBkYXRlcyBhZnRlciBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgYWxsb3dGdXR1cmVEYXRlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGRvbmUgYnV0dG9uLlxuICAgKi9cbiAgZG9uZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIZXggY29sb3Igb2YgZG9uZSBidXR0b24uXG4gICAqL1xuICBkb25lQnV0dG9uQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogSGV4IGNvbG9yIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25Db2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogWCBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKipcbiAgICogWSBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeT86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBvcHRpb25zIGluIHRoZSBtaW51dGUgc2VjdGlvbiBvZiB0aGUgZGF0ZSBwaWNrZXIuXG4gICAqL1xuICBtaW51dGVJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogRm9yY2UgdGhlIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGVudW0uIFRoZSB2YWx1ZSBhbnkgd2lsbCByZXZlcnQgdG8gZGVmYXVsdCBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbkFueSBhbmQgbGV0IHRoZSBhcHAgY2hvb3NlIHRoZSBwcm9wZXIgZGlyZWN0aW9uIGl0c2VsZi5cbiAgICovXG4gIHBvcG92ZXJBcnJvd0RpcmVjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogRm9yY2UgbG9jYWxlIGZvciBkYXRlUGlja2VyLlxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIERhdGUgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBEYXRlUGlja2VyIHBsdWdpbiBhbGxvd3MgdGhlIHVzZXIgdG8gZmV0Y2ggZGF0ZSBvciB0aW1lIHVzaW5nIG5hdGl2ZSBkaWFsb2dzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kYXRlUGlja2VyLnNob3coe1xuICogICBkYXRlOiBuZXcgRGF0ZSgpLFxuICogICBtb2RlOiAnZGF0ZScsXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5kYXRlUGlja2VyLkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSS1xuICogfSkudGhlbihcbiAqICAgZGF0ZSA9PiBjb25zb2xlLmxvZygnR290IGRhdGU6ICcsIGRhdGUpLFxuICogICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGdldHRpbmcgZGF0ZTogJywgZXJyKVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERhdGVQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGF0ZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRhdGVwaWNrZXInLFxuICBwbHVnaW5SZWY6ICdkYXRlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaXRhbGlpQmxhZ29kaXIvY29yZG92YS1wbHVnaW4tZGF0ZXBpY2tlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBBTkRST0lEX1RIRU1FUyA9IHtcbiAgICBUSEVNRV9UUkFESVRJT05BTDogMSxcbiAgICBUSEVNRV9IT0xPX0RBUks6IDIsXG4gICAgVEhFTUVfSE9MT19MSUdIVDogMyxcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiA0LFxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUOiA1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgZGF0ZSBhbmQvb3IgdGltZSBwaWNrZXIgZGlhbG9nKHMpXG4gICAqIEBwYXJhbSB7RGF0ZVBpY2tlck9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGRhdGUgcGlja2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEYXRlPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBwaWNrZWQgZGF0ZSBhbmQvb3IgdGltZSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KG9wdGlvbnM6IERhdGVQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxEYXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

      /***/

    },

    /***/
    "dI71":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function dI71(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return _inheritsLoose;
      });

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _filter_faqs_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./filter-faqs.pipe */
      "9XHJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_filter_faqs_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterFaqsPipe"]],
        exports: [_filter_faqs_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterFaqsPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "kK0b":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \******************************************************************************************************/

    /*! exports provided: a, d */

    /***/
    function kK0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "qRyU");

      var attachComponent = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!delegate) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context5.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context5.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context5.abrupt("return", el);

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function attachComponent(_x14, _x15, _x16, _x17, _x18) {
          return _ref4.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "l3hs":
    /*!********************************************!*\
      !*** ./src/app/services/search.service.ts ***!
      \********************************************/

    /*! exports provided: SearchService */

    /***/
    function l3hs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchService", function () {
        return SearchService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");

      var SearchService = /*#__PURE__*/function () {
        function SearchService(apiService) {
          _classCallCheck(this, SearchService);

          this.apiService = apiService;
        }

        _createClass(SearchService, [{
          key: "getSuggestedCurriculums",
          value: function getSuggestedCurriculums() {
            return this.apiService.get('/lesson/suggested-curriculum/');
          }
        }, {
          key: "getTopicLessonsByUserLevel",
          value: function getTopicLessonsByUserLevel(page, data) {
            return this.apiService.post("/lesson/get-lessons/".concat(page), data);
          }
        }, {
          key: "searchLessons",
          value: function searchLessons(page, data) {
            return this.apiService.post("/lesson/search-lessons/".concat(page), data);
          }
        }]);

        return SearchService;
      }();

      SearchService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      };

      SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], SearchService);
      /***/
    },

    /***/
    "lNtg":
    /*!**********************************!*\
      !*** ./src/reactapp/useSpeak.ts ***!
      \**********************************/

    /*! exports provided: default */

    /***/
    function lNtg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return useSpeak;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/text-to-speech */
      "2TGb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT"); // import {isPlatform} from '@ionic/react'
      // import Speech from 'speak-tts'


      var Accessibility = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Accessibility;

      function useSpeak() {
        // const tts = new TextToSpeech()
        function speak(text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform === 'ios')) {
                      _context6.next = 11;
                      break;
                    }

                    _context6.prev = 1;
                    _context6.next = 4;
                    return _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_1__["TextToSpeech"].speak({
                      text: text,
                      locale: 'en',
                      rate: 1.5
                    });

                  case 4:
                    _context6.next = 9;
                    break;

                  case 6:
                    _context6.prev = 6;
                    _context6.t0 = _context6["catch"](1);
                    console.error('An error occured while initializing : ', _context6.t0);

                  case 9:
                    _context6.next = 13;
                    break;

                  case 11:
                    _context6.next = 13;
                    return Accessibility.speak({
                      value: text,
                      language: 'en'
                    });

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, null, [[1, 6]]);
          }));
        }

        return speak;
      } // export default function useSpeak() {
      //   const [speech, setSpeech] = React.useState<any>()
      //   function speak(text) {
      //     Accessibility.speak({value: text, language: 'en'})
      //     if (isPlatform('capacitor')) {
      //       // TextToSpeech.speak(text)
      //       Accessibility.speak({value: text})
      //     } else if (speech) {
      //       console.log({speech, text})
      //       speech.speak({text})
      //     }
      //   }
      //   React.useEffect(() => {
      //     const speech = new Speech() // will throw an exception if not browser supported
      //     if (speech.hasBrowserSupport()) {
      //       speech.init({lang: 'en-US'}).then((data) => {
      //         // const voices = data.voices.filter((v) => v.lang === 'en-US')
      //         // const v = voices.find((v) => v.name === 'Samantha')
      //         // speech.setVoice(v.name)
      //         setSpeech(speech)
      //       })
      //       // speech.init({lang: 'en-US', voice: 'Samantha'}).then((data) => {
      //       //   const voices = data.voices.filter((v) => v.lang === 'en-US')
      //       //   const v = voices.find((v) => v.name === 'Samantha')
      //       //   speech.setVoice(v.name)
      //       //   setSpeech(speech)
      //       // })
      //     }
      //   }, [])
      //   return speak
      // }

      /***/

    },

    /***/
    "lVrF":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \******************************************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function lVrF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map