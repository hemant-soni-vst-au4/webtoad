(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-transition-464fd4a8-js"], {
    /***/
    "RQGG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/md.transition-464fd4a8.js ***!
      \*********************************************************************/

    /*! exports provided: mdTransitionAnimation */

    /***/
    function RQGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function () {
        return mdTransitionAnimation;
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

      var mdTransitionAnimation = function mdTransitionAnimation(_, opts) {
        var OFF_BOTTOM = '40px';
        var CENTER = '0px';
        var backDirection = opts.direction === 'back';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var ionPageElement = Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(enteringEl);
        var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
        var rootTransition = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible'); // animate the component itself

        if (backDirection) {
          rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        } else {
          rootTransition.duration(opts.duration || 280).easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('transform', "translateY(".concat(OFF_BOTTOM, ")"), "translateY(".concat(CENTER, ")")).fromTo('opacity', 0.01, 1);
        } // Animate toolbar if it's there


        if (enteringToolbarEle) {
          var enteringToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringToolBar.addElement(enteringToolbarEle);
          rootTransition.addAnimation(enteringToolBar);
        } // setup leaving view


        if (leavingEl && backDirection) {
          // leaving content
          rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
          var leavingPage = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          leavingPage.addElement(Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(leavingEl)).onFinish(function (currentStep) {
            if (currentStep === 1 && leavingPage.elements.length > 0) {
              leavingPage.elements[0].style.setProperty('display', 'none');
            }
          }).fromTo('transform', "translateY(".concat(CENTER, ")"), "translateY(".concat(OFF_BOTTOM, ")")).fromTo('opacity', 1, 0);
          rootTransition.addAnimation(leavingPage);
        }

        return rootTransition;
      };
      /***/

    },

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

    }
  }]);
})();
//# sourceMappingURL=md-transition-464fd4a8-js-es5.js.map