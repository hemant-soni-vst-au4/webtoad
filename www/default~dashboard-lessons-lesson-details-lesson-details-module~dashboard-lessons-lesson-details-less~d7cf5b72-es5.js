(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"], {
    /***/
    "k4ps":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-c3ff7f2e.js ***!
      \*************************************************************/

    /*! exports provided: L, a, b, c, d, e, g, l, s, t */

    /***/
    function k4ps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return LIFECYCLE_WILL_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return LIFECYCLE_DID_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return LIFECYCLE_WILL_LEAVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return LIFECYCLE_DID_LEAVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return LIFECYCLE_WILL_UNLOAD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return deepReady;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getIonPageElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return lifecycle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return setPageHidden;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return transition;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
      var LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
      var LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
      var LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
      var LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

      var iosTransitionAnimation = function iosTransitionAnimation() {
        return Promise.all(
        /*! import() | ios-transition-48010460-js */
        [__webpack_require__.e(0), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72")]).then(__webpack_require__.bind(null,
        /*! ./ios.transition-48010460.js */
        "lTIg"));
      };

      var mdTransitionAnimation = function mdTransitionAnimation() {
        return Promise.all(
        /*! import() | md-transition-464fd4a8-js */
        [__webpack_require__.e(0), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("md-transition-464fd4a8-js")]).then(__webpack_require__.bind(null,
        /*! ./md.transition-464fd4a8.js */
        "RQGG"));
      };

      var transition = function transition(opts) {
        return new Promise(function (resolve, reject) {
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
              if (result.animation) {
                result.animation.destroy();
              }

              afterTransition(opts);
              resolve(result);
            }, function (error) {
              afterTransition(opts);
              reject(error);
            });
          });
        });
      };

      var beforeTransition = function beforeTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        setZIndex(enteringEl, leavingEl, opts.direction);

        if (opts.showGoBack) {
          enteringEl.classList.add('can-go-back');
        } else {
          enteringEl.classList.remove('can-go-back');
        }

        setPageHidden(enteringEl, false);

        if (leavingEl) {
          setPageHidden(leavingEl, false);
        }
      };

      var runTransition = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
          var animationBuilder, ani;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getAnimationBuilder(opts);

                case 2:
                  animationBuilder = _context.sent;
                  ani = animationBuilder && _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["B"].isBrowser ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                  return _context.abrupt("return", ani);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function runTransition(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var afterTransition = function afterTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        enteringEl.classList.remove('ion-page-invisible');

        if (leavingEl !== undefined) {
          leavingEl.classList.remove('ion-page-invisible');
        }
      };

      var getAnimationBuilder = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts) {
          var getAnimation;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", undefined);

                case 2:
                  if (!opts.animationBuilder) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt("return", opts.animationBuilder);

                case 4:
                  if (!(opts.mode === 'ios')) {
                    _context2.next = 10;
                    break;
                  }

                  _context2.next = 7;
                  return iosTransitionAnimation();

                case 7:
                  _context2.t0 = _context2.sent.iosTransitionAnimation;
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.next = 12;
                  return mdTransitionAnimation();

                case 12:
                  _context2.t0 = _context2.sent.mdTransitionAnimation;

                case 13:
                  getAnimation = _context2.t0;
                  return _context2.abrupt("return", getAnimation);

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getAnimationBuilder(_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      var animation = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(animationBuilder, opts) {
          var trans, didComplete;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return waitForReady(opts, true);

                case 2:
                  trans = animationBuilder(opts.baseEl, opts);
                  fireWillEvents(opts.enteringEl, opts.leavingEl);
                  _context3.next = 6;
                  return playTransition(trans, opts);

                case 6:
                  didComplete = _context3.sent;

                  if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                  }

                  if (didComplete) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                  }

                  return _context3.abrupt("return", {
                    hasCompleted: didComplete,
                    animation: trans
                  });

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function animation(_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }();

      var noAnimation = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts) {
          var enteringEl, leavingEl;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  enteringEl = opts.enteringEl;
                  leavingEl = opts.leavingEl;
                  _context4.next = 4;
                  return waitForReady(opts, false);

                case 4:
                  fireWillEvents(enteringEl, leavingEl);
                  fireDidEvents(enteringEl, leavingEl);
                  return _context4.abrupt("return", {
                    hasCompleted: true
                  });

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function noAnimation(_x5) {
          return _ref4.apply(this, arguments);
        };
      }();

      var waitForReady = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(opts, defaultDeep) {
          var deep, promises;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                  promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                  _context5.next = 4;
                  return Promise.all(promises);

                case 4:
                  _context5.next = 6;
                  return notifyViewReady(opts.viewIsReady, opts.enteringEl);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function waitForReady(_x6, _x7) {
          return _ref5.apply(this, arguments);
        };
      }();

      var notifyViewReady = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(viewIsReady, enteringEl) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!viewIsReady) {
                    _context6.next = 3;
                    break;
                  }

                  _context6.next = 3;
                  return viewIsReady(enteringEl);

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function notifyViewReady(_x8, _x9) {
          return _ref6.apply(this, arguments);
        };
      }();

      var playTransition = function playTransition(trans, opts) {
        var progressCallback = opts.progressCallback;
        var promise = new Promise(function (resolve) {
          trans.onFinish(function (currentStep) {
            return resolve(currentStep === 1);
          });
        }); // cool, let's do this, start the transition

        if (progressCallback) {
          // this is a swipe to go back, just get the transition progress ready
          // kick off the swipe animation start
          trans.progressStart(true);
          progressCallback(trans);
        } else {
          // only the top level transition should actually start "play"
          // kick it off and let it play through
          // ******** DOM WRITE ****************
          trans.play();
        } // create a callback for when the animation is done


        return promise;
      };

      var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
        lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
        lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
      };

      var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
        lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
        lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
      };

      var lifecycle = function lifecycle(el, eventName) {
        if (el) {
          var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false
          });
          el.dispatchEvent(ev);
        }
      };

      var shallowReady = function shallowReady(el) {
        if (el) {
          return new Promise(function (resolve) {
            return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(el, resolve);
          });
        }

        return Promise.resolve();
      };

      var deepReady = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(el) {
          var element, stencilEl;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  element = el;

                  if (!element) {
                    _context7.next = 10;
                    break;
                  }

                  if (!(element.componentOnReady != null)) {
                    _context7.next = 8;
                    break;
                  }

                  _context7.next = 5;
                  return element.componentOnReady();

                case 5:
                  stencilEl = _context7.sent;

                  if (!(stencilEl != null)) {
                    _context7.next = 8;
                    break;
                  }

                  return _context7.abrupt("return");

                case 8:
                  _context7.next = 10;
                  return Promise.all(Array.from(element.children).map(deepReady));

                case 10:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function deepReady(_x10) {
          return _ref7.apply(this, arguments);
        };
      }();

      var setPageHidden = function setPageHidden(el, hidden) {
        if (hidden) {
          el.setAttribute('aria-hidden', 'true');
          el.classList.add('ion-page-hidden');
        } else {
          el.hidden = false;
          el.removeAttribute('aria-hidden');
          el.classList.remove('ion-page-hidden');
        }
      };

      var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
        if (enteringEl !== undefined) {
          enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
        }

        if (leavingEl !== undefined) {
          leavingEl.style.zIndex = '100';
        }
      };

      var getIonPageElement = function getIonPageElement(element) {
        if (element.classList.contains('ion-page')) {
          return element;
        }

        var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

        if (ionPage) {
          return ionPage;
        } // idk, return the original element so at least something animates and we don't have a null pointer


        return element;
      };
      /***/

    },

    /***/
    "lTIg":
    /*!**********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ios.transition-48010460.js ***!
      \**********************************************************************/

    /*! exports provided: iosTransitionAnimation, shadow */

    /***/
    function lTIg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function () {
        return iosTransitionAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shadow", function () {
        return shadow;
      });
      /* harmony import */


      var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./animation-096c6391.js */
      "meiF");
      /* harmony import */


      var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-c3ff7f2e.js */
      "k4ps");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");

      var DURATION = 540;

      var getClonedElement = function getClonedElement(tagName) {
        return document.querySelector("".concat(tagName, ".ion-cloned-element"));
      };

      var shadow = function shadow(el) {
        return el.shadowRoot || el;
      };

      var getLargeTitle = function getLargeTitle(refEl) {
        var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
        var query = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';

        if (tabs != null) {
          var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
          return activeTab != null ? activeTab.querySelector(query) : null;
        }

        return refEl.querySelector(query);
      };

      var getBackButton = function getBackButton(refEl, backDirection) {
        var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
        var buttonsList = [];

        if (tabs != null) {
          var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');

          if (activeTab != null) {
            buttonsList = activeTab.querySelectorAll('ion-buttons');
          }
        } else {
          buttonsList = refEl.querySelectorAll('ion-buttons');
        }

        var _iterator = _createForOfIteratorHelper(buttonsList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var buttons = _step.value;
            var parentHeader = buttons.closest('ion-header');
            var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
            var backButton = buttons.querySelector('ion-back-button');
            var buttonsCollapse = buttons.classList.contains('buttons-collapse');
            var startSlot = buttons.slot === 'start' || buttons.slot === '';

            if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
              return backButton;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return null;
      };

      var createLargeTitleTransition = function createLargeTitleTransition(rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
        var enteringBackButton = getBackButton(enteringEl, backDirection);
        var leavingLargeTitle = getLargeTitle(leavingEl);
        var enteringLargeTitle = getLargeTitle(enteringEl);
        var leavingBackButton = getBackButton(leavingEl, backDirection);
        var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
        var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;

        if (shouldAnimationForward) {
          var leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
          var enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
          animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, enteringBackButtonBox);
          animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, leavingLargeTitleBox, enteringBackButtonBox);
        } else if (shouldAnimationBackward) {
          var enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
          var leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
          animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, leavingBackButtonBox);
          animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, enteringLargeTitleBox, leavingBackButtonBox);
        }

        return {
          forward: shouldAnimationForward,
          backward: shouldAnimationBackward
        };
      };

      var animateBackButton = function animateBackButton(rootAnimation, rtl, backDirection, backButtonEl, largeTitleBox, backButtonBox) {
        var BACK_BUTTON_START_OFFSET = rtl ? "calc(100% - ".concat(backButtonBox.right + 4, "px)") : "".concat(backButtonBox.left - 4, "px");
        var START_TEXT_TRANSLATE = rtl ? '7px' : '-7px';
        var END_TEXT_TRANSLATE = rtl ? '-4px' : '4px';
        var ICON_TRANSLATE = rtl ? '-4px' : '4px';
        var TEXT_ORIGIN_X = rtl ? 'right' : 'left';
        var ICON_ORIGIN_X = rtl ? 'left' : 'right';
        var FORWARD_TEXT_KEYFRAMES = [{
          offset: 0,
          opacity: 0,
          transform: "translate3d(".concat(START_TEXT_TRANSLATE, ", ").concat(largeTitleBox.top - 40, "px, 0) scale(2.1)")
        }, {
          offset: 1,
          opacity: 1,
          transform: "translate3d(".concat(END_TEXT_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
        }];
        var BACKWARD_TEXT_KEYFRAMES = [{
          offset: 0,
          opacity: 1,
          transform: "translate3d(".concat(END_TEXT_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
        }, {
          offset: 0.6,
          opacity: 0
        }, {
          offset: 1,
          opacity: 0,
          transform: "translate3d(".concat(START_TEXT_TRANSLATE, ", ").concat(largeTitleBox.top - 40, "px, 0) scale(2.1)")
        }];
        var TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
        var FORWARD_ICON_KEYFRAMES = [{
          offset: 0,
          opacity: 0,
          transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
        }, {
          offset: 1,
          opacity: 1,
          transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
        }];
        var BACKWARD_ICON_KEYFRAMES = [{
          offset: 0,
          opacity: 1,
          transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 46, "px, 0) scale(1)")
        }, {
          offset: 0.2,
          opacity: 0,
          transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
        }, {
          offset: 1,
          opacity: 0,
          transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(backButtonBox.top - 41, "px, 0) scale(0.6)")
        }];
        var ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
        var enteringBackButtonTextAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        var enteringBackButtonIconAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        var clonedBackButtonEl = getClonedElement('ion-back-button');
        var backButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
        var backButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
        clonedBackButtonEl.text = backButtonEl.text;
        clonedBackButtonEl.mode = backButtonEl.mode;
        clonedBackButtonEl.icon = backButtonEl.icon;
        clonedBackButtonEl.color = backButtonEl.color;
        clonedBackButtonEl.disabled = backButtonEl.disabled;
        clonedBackButtonEl.style.setProperty('display', 'block');
        clonedBackButtonEl.style.setProperty('position', 'fixed');
        enteringBackButtonIconAnimation.addElement(backButtonIconEl);
        enteringBackButtonTextAnimation.addElement(backButtonTextEl);
        enteringBackButtonTextAnimation.beforeStyles({
          'transform-origin': "".concat(TEXT_ORIGIN_X, " center")
        }).beforeAddWrite(function () {
          backButtonEl.style.setProperty('display', 'none');
          clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
        }).afterAddWrite(function () {
          backButtonEl.style.setProperty('display', '');
          clonedBackButtonEl.style.setProperty('display', 'none');
          clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
        }).keyframes(TEXT_KEYFRAMES);
        enteringBackButtonIconAnimation.beforeStyles({
          'transform-origin': "".concat(ICON_ORIGIN_X, " center")
        }).keyframes(ICON_KEYFRAMES);
        rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
      };

      var animateLargeTitle = function animateLargeTitle(rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, backButtonBox) {
        var TITLE_START_OFFSET = rtl ? "calc(100% - ".concat(largeTitleBox.right, "px)") : "".concat(largeTitleBox.left, "px");
        var START_TRANSLATE = rtl ? '-18px' : '18px';
        var ORIGIN_X = rtl ? 'right' : 'left';
        var BACKWARDS_KEYFRAMES = [{
          offset: 0,
          opacity: 0,
          transform: "translate3d(".concat(START_TRANSLATE, ", ").concat(backButtonBox.top - 4, "px, 0) scale(0.49)")
        }, {
          offset: 0.1,
          opacity: 0
        }, {
          offset: 1,
          opacity: 1,
          transform: "translate3d(0, ".concat(largeTitleBox.top - 2, "px, 0) scale(1)")
        }];
        var FORWARDS_KEYFRAMES = [{
          offset: 0,
          opacity: 0.99,
          transform: "translate3d(0, ".concat(largeTitleBox.top - 2, "px, 0) scale(1)")
        }, {
          offset: 0.6,
          opacity: 0
        }, {
          offset: 1,
          opacity: 0,
          transform: "translate3d(".concat(START_TRANSLATE, ", ").concat(backButtonBox.top - 4, "px, 0) scale(0.5)")
        }];
        var KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
        var clonedTitleEl = getClonedElement('ion-title');
        var clonedLargeTitleAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        clonedTitleEl.innerText = largeTitleEl.innerText;
        clonedTitleEl.size = largeTitleEl.size;
        clonedTitleEl.color = largeTitleEl.color;
        clonedLargeTitleAnimation.addElement(clonedTitleEl);
        clonedLargeTitleAnimation.beforeStyles(_defineProperty({
          'transform-origin': "".concat(ORIGIN_X, " center"),
          'height': '46px',
          'display': '',
          'position': 'relative'
        }, ORIGIN_X, TITLE_START_OFFSET)).beforeAddWrite(function () {
          largeTitleEl.style.setProperty('display', 'none');
        }).afterAddWrite(function () {
          largeTitleEl.style.setProperty('display', '');
          clonedTitleEl.style.setProperty('display', 'none');
        }).keyframes(KEYFRAMES);
        rootAnimation.addAnimation(clonedLargeTitleAnimation);
      };

      var iosTransitionAnimation = function iosTransitionAnimation(navEl, opts) {
        try {
          var EASING = 'cubic-bezier(0.32,0.72,0,1)';
          var OPACITY = 'opacity';
          var TRANSFORM = 'transform';
          var CENTER = '0%';
          var OFF_OPACITY = 0.8;
          var isRTL = navEl.ownerDocument.dir === 'rtl';
          var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
          var OFF_LEFT = isRTL ? '33%' : '-33%';
          var enteringEl = opts.enteringEl;
          var leavingEl = opts.leavingEl;
          var backDirection = opts.direction === 'back';
          var contentEl = enteringEl.querySelector(':scope > ion-content');
          var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
          var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
          var rootAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          var enteringContentAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          rootAnimation.addElement(enteringEl).duration(opts.duration || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');

          if (leavingEl && navEl) {
            var navDecorAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            navDecorAnimation.addElement(navEl);
            rootAnimation.addAnimation(navDecorAnimation);
          }

          if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
            enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
          } else {
            enteringContentAnimation.addElement(contentEl); // REVIEW

            enteringContentAnimation.addElement(headerEls);
          }

          rootAnimation.addAnimation(enteringContentAnimation);

          if (backDirection) {
            enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, OFF_OPACITY, 1);
          } else {
            // entering content, forward direction
            enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
          }

          if (contentEl) {
            var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');

            if (enteringTransitionEffectEl) {
              var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
              var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
              var enteringTransitionEffect = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var enteringTransitionCover = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var enteringTransitionShadow = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
                opacity: '1',
                display: 'block'
              }).afterStyles({
                opacity: '',
                display: ''
              });
              enteringTransitionCover.addElement(enteringTransitionCoverEl) // REVIEW
              .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
              enteringTransitionShadow.addElement(enteringTransitionShadowEl) // REVIEW
              .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.70);
              enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
              enteringContentAnimation.addAnimation([enteringTransitionEffect]);
            }
          }

          var enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');

          var _createLargeTitleTran = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl),
              forward = _createLargeTitleTran.forward,
              backward = _createLargeTitleTran.backward;

          enteringToolBarEls.forEach(function (enteringToolBarEl) {
            var enteringToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            enteringToolBar.addElement(enteringToolBarEl);
            rootAnimation.addAnimation(enteringToolBar);
            var enteringTitle = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW

            var enteringToolBarButtons = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            var parentHeader = enteringToolBarEl.closest('ion-header');
            var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            var buttonsToAnimate;

            if (backDirection) {
              buttonsToAnimate = buttons.filter(function (button) {
                var isCollapseButton = button.classList.contains('buttons-collapse');
                return isCollapseButton && !inactiveHeader || !isCollapseButton;
              });
            } else {
              buttonsToAnimate = buttons.filter(function (button) {
                return !button.classList.contains('buttons-collapse');
              });
            }

            enteringToolBarButtons.addElement(buttonsToAnimate);
            var enteringToolBarItems = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
            var enteringToolBarBg = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW

            var enteringBackButton = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');

            if (backButtonEl) {
              enteringBackButton.addElement(backButtonEl);
            }

            enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
            enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
            enteringToolBarItems.fromTo(OPACITY, 0.01, 1);

            if (backDirection) {
              if (!inactiveHeader) {
                enteringTitle.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
              }

              enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")); // back direction, entering page has a back button

              enteringBackButton.fromTo(OPACITY, 0.01, 1);
            } else {
              // entering toolbar, forward direction
              if (!enteringContentHasLargeTitle) {
                enteringTitle.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
              }

              enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
              enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
              var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;

              if (!translucentHeader) {
                enteringToolBarBg.fromTo(OPACITY, 0.01, 'var(--opacity)');
              } else {
                enteringToolBarBg.fromTo('transform', isRTL ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)');
              } // forward direction, entering page has a back button


              if (!forward) {
                enteringBackButton.fromTo(OPACITY, 0.01, 1);
              }

              if (backButtonEl && !forward) {
                var enteringBackBtnText = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                .fromTo("transform", isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
                enteringToolBar.addAnimation(enteringBackBtnText);
              }
            }
          }); // setup leaving view

          if (leavingEl) {
            var leavingContent = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
            var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            var leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');

            if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
              leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
            } else {
              leavingContent.addElement(leavingContentEl); // REVIEW

              leavingContent.addElement(leavingHeaderEls);
            }

            rootAnimation.addAnimation(leavingContent);

            if (backDirection) {
              // leaving content, back direction
              leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
              var leavingPage = Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(leavingEl);
              rootAnimation.afterAddWrite(function () {
                if (rootAnimation.getDirection() === 'normal') {
                  leavingPage.style.setProperty('display', 'none');
                }
              });
            } else {
              // leaving content, forward direction
              leavingContent.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 1, OFF_OPACITY);
            }

            if (leavingContentEl) {
              var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');

              if (leavingTransitionEffectEl) {
                var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                var leavingTransitionEffect = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                var leavingTransitionCover = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                var leavingTransitionShadow = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
                  opacity: '1',
                  display: 'block'
                }).afterStyles({
                  opacity: '',
                  display: ''
                });
                leavingTransitionCover.addElement(leavingTransitionCoverEl) // REVIEW
                .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
                leavingTransitionShadow.addElement(leavingTransitionShadowEl) // REVIEW
                .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.70, 0.03);
                leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                leavingContent.addAnimation([leavingTransitionEffect]);
              }
            }

            leavingToolBarEls.forEach(function (leavingToolBarEl) {
              var leavingToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              leavingToolBar.addElement(leavingToolBarEl);
              var leavingTitle = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW

              var leavingToolBarButtons = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
              var parentHeader = leavingToolBarEl.closest('ion-header');
              var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
              var buttonsToAnimate = Array.from(buttons).filter(function (button) {
                var isCollapseButton = button.classList.contains('buttons-collapse');
                return isCollapseButton && !inactiveHeader || !isCollapseButton;
              });
              leavingToolBarButtons.addElement(buttonsToAnimate);
              var leavingToolBarItems = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');

              if (leavingToolBarItemEls.length > 0) {
                leavingToolBarItems.addElement(leavingToolBarItemEls);
              }

              var leavingToolBarBg = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW

              var leavingBackButton = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');

              if (backButtonEl) {
                leavingBackButton.addElement(backButtonEl);
              }

              leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
              rootAnimation.addAnimation(leavingToolBar); // fade out leaving toolbar items

              leavingBackButton.fromTo(OPACITY, 0.99, 0);
              leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
              leavingToolBarItems.fromTo(OPACITY, 0.99, 0);

              if (backDirection) {
                if (!inactiveHeader) {
                  // leaving toolbar, back direction
                  leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)').fromTo(OPACITY, 0.99, 0);
                }

                leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
                leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']); // leaving toolbar, back direction, and there's no entering toolbar
                // should just slide out, no fading out

                var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;

                if (!translucentHeader) {
                  leavingToolBarBg.fromTo(OPACITY, 'var(--opacity)', 0);
                } else {
                  leavingToolBarBg.fromTo('transform', 'translateX(0px)', isRTL ? 'translateX(-100%)' : 'translateX(100%)');
                }

                if (backButtonEl && !backward) {
                  var leavingBackBtnText = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                  leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                  .fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat((isRTL ? -124 : 124) + 'px', ")"));
                  leavingToolBar.addAnimation(leavingBackBtnText);
                }
              } else {
                // leaving toolbar, forward direction
                if (!inactiveHeader) {
                  leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
                }

                leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM, OPACITY]);
                leavingBackButton.afterClearStyles([OPACITY]);
                leavingTitle.afterClearStyles([OPACITY]);
                leavingToolBarButtons.afterClearStyles([OPACITY]);
              }
            });
          }

          return rootAnimation;
        } catch (err) {
          throw err;
        }
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72-es5.js.map