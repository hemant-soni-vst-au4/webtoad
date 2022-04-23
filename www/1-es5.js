(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
    /***/
    "7OTs":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/overlays-28c23c35.js ***!
      \****************************************************************/

    /*! exports provided: B, a, b, c, d, e, f, g, h, i, l, m, p, s, t */

    /***/
    function OTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return BACKDROP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return alertController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return actionSheetController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return popoverController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return present;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return prepareOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return dismiss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return eventMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return activeAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return isCancel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return loadingController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return modalController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return pickerController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return safeCall;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return toastController;
      });
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var lastId = 0;
      var activeAnimations = new WeakMap();

      var createController = function createController(tagName) {
        return {
          create: function create(options) {
            return createOverlay(tagName, options);
          },
          dismiss: function dismiss(data, role, id) {
            return dismissOverlay(document, data, role, tagName, id);
          },
          getTop: function getTop() {
            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", getOverlay(document, tagName));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        };
      };

      var alertController = /*@__PURE__*/createController('ion-alert');
      var actionSheetController = /*@__PURE__*/createController('ion-action-sheet');
      var loadingController = /*@__PURE__*/createController('ion-loading');
      var modalController = /*@__PURE__*/createController('ion-modal');
      var pickerController = /*@__PURE__*/createController('ion-picker');
      var popoverController = /*@__PURE__*/createController('ion-popover');
      var toastController = /*@__PURE__*/createController('ion-toast');

      var prepareOverlay = function prepareOverlay(el) {
        /* tslint:disable-next-line */
        if (typeof document !== 'undefined') {
          connectListeners(document);
        }

        var overlayIndex = lastId++;
        el.overlayIndex = overlayIndex;

        if (!el.hasAttribute('id')) {
          el.id = "ion-overlay-".concat(overlayIndex);
        }
      };

      var createOverlay = function createOverlay(tagName, opts) {
        /* tslint:disable-next-line */
        if (typeof customElements !== 'undefined') {
          return customElements.whenDefined(tagName).then(function () {
            var element = document.createElement(tagName);
            element.classList.add('overlay-hidden'); // convert the passed in overlay options into props
            // that get passed down into the new overlay

            Object.assign(element, opts); // append the overlay element to the document body

            getAppRoot(document).appendChild(element);
            return new Promise(function (resolve) {
              return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(element, resolve);
            });
          });
        }

        return Promise.resolve();
      };

      var focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';
      var innerFocusableQueryString = 'input:not([type=hidden]), textarea, button, select';

      var focusFirstDescendant = function focusFirstDescendant(ref, overlay) {
        var firstInput = ref.querySelector(focusableQueryString);
        var shadowRoot = firstInput && firstInput.shadowRoot;

        if (shadowRoot) {
          // If there are no inner focusable elements, just focus the host element.
          firstInput = shadowRoot.querySelector(innerFocusableQueryString) || firstInput;
        }

        if (firstInput) {
          firstInput.focus();
        } else {
          // Focus overlay instead of letting focus escape
          overlay.focus();
        }
      };

      var focusLastDescendant = function focusLastDescendant(ref, overlay) {
        var inputs = Array.from(ref.querySelectorAll(focusableQueryString));
        var lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
        var shadowRoot = lastInput && lastInput.shadowRoot;

        if (shadowRoot) {
          // If there are no inner focusable elements, just focus the host element.
          lastInput = shadowRoot.querySelector(innerFocusableQueryString) || lastInput;
        }

        if (lastInput) {
          lastInput.focus();
        } else {
          // Focus overlay instead of letting focus escape
          overlay.focus();
        }
      };
      /**
       * Traps keyboard focus inside of overlay components.
       * Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
       * This includes the following components: Action Sheet, Alert, Loading, Modal,
       * Picker, and Popover.
       * Should NOT include: Toast
       */


      var trapKeyboardFocus = function trapKeyboardFocus(ev, doc) {
        var lastOverlay = getOverlay(doc);
        var target = ev.target; // If no active overlay, ignore this event

        if (!lastOverlay || !target) {
          return;
        }
        /**
         * If we are focusing the overlay, clear
         * the last focused element so that hitting
         * tab activates the first focusable element
         * in the overlay wrapper.
         */


        if (lastOverlay === target) {
          lastOverlay.lastFocus = undefined;
          /**
           * Otherwise, we must be focusing an element
           * inside of the overlay. The two possible options
           * here are an input/button/etc or the ion-focus-trap
           * element. The focus trap element is used to prevent
           * the keyboard focus from leaving the overlay when
           * using Tab or screen assistants.
           */
        } else {
          /**
           * We do not want to focus the traps, so get the overlay
           * wrapper element as the traps live outside of the wrapper.
           */
          var overlayRoot = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["g"])(lastOverlay);

          if (!overlayRoot.contains(target)) {
            return;
          }

          var overlayWrapper = overlayRoot.querySelector('.ion-overlay-wrapper');

          if (!overlayWrapper) {
            return;
          }
          /**
           * If the target is inside the wrapper, let the browser
           * focus as normal and keep a log of the last focused element.
           */


          if (overlayWrapper.contains(target)) {
            lastOverlay.lastFocus = target;
          } else {
            /**
             * Otherwise, we must have focused one of the focus traps.
             * We need to wrap the focus to either the first element
             * or the last element.
             */

            /**
             * Once we call `focusFirstDescendant` and focus the first
             * descendant, another focus event will fire which will
             * cause `lastOverlay.lastFocus` to be updated before
             * we can run the code after that. We will cache the value
             * here to avoid that.
             */
            var lastFocus = lastOverlay.lastFocus; // Focus the first element in the overlay wrapper

            focusFirstDescendant(overlayWrapper, lastOverlay);
            /**
             * If the cached last focused element is the
             * same as the active element, then we need
             * to wrap focus to the last descendant. This happens
             * when the first descendant is focused, and the user
             * presses Shift + Tab. The previous line will focus
             * the same descendant again (the first one), causing
             * last focus to equal the active element.
             */

            if (lastFocus === doc.activeElement) {
              focusLastDescendant(overlayWrapper, lastOverlay);
            }

            lastOverlay.lastFocus = doc.activeElement;
          }
        }
      };

      var connectListeners = function connectListeners(doc) {
        if (lastId === 0) {
          lastId = 1;
          doc.addEventListener('focus', function (ev) {
            return trapKeyboardFocus(ev, doc);
          }, true); // handle back-button click

          doc.addEventListener('ionBackButton', function (ev) {
            var lastOverlay = getOverlay(doc);

            if (lastOverlay && lastOverlay.backdropDismiss) {
              ev.detail.register(_hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_1__["OVERLAY_BACK_BUTTON_PRIORITY"], function () {
                return lastOverlay.dismiss(undefined, BACKDROP);
              });
            }
          }); // handle ESC to close overlay

          doc.addEventListener('keyup', function (ev) {
            if (ev.key === 'Escape') {
              var lastOverlay = getOverlay(doc);

              if (lastOverlay && lastOverlay.backdropDismiss) {
                lastOverlay.dismiss(undefined, BACKDROP);
              }
            }
          });
        }
      };

      var dismissOverlay = function dismissOverlay(doc, data, role, overlayTag, id) {
        var overlay = getOverlay(doc, overlayTag, id);

        if (!overlay) {
          return Promise.reject('overlay does not exist');
        }

        return overlay.dismiss(data, role);
      };

      var getOverlays = function getOverlays(doc, selector) {
        if (selector === undefined) {
          selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast';
        }

        return Array.from(doc.querySelectorAll(selector)).filter(function (c) {
          return c.overlayIndex > 0;
        });
      };

      var getOverlay = function getOverlay(doc, overlayTag, id) {
        var overlays = getOverlays(doc, overlayTag);
        return id === undefined ? overlays[overlays.length - 1] : overlays.find(function (o) {
          return o.id === id;
        });
      };

      var present = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
          var mode, animationBuilder, completed;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!overlay.presented) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  overlay.presented = true;
                  overlay.willPresent.emit();
                  mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["b"])(overlay); // get the user's animation fn if one was provided

                  animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get(name, mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
                  _context2.next = 8;
                  return overlayAnimation(overlay, animationBuilder, overlay.el, opts);

                case 8:
                  completed = _context2.sent;

                  if (completed) {
                    overlay.didPresent.emit();
                  }
                  /**
                   * When an overlay that steals focus
                   * is dismissed, focus should be returned
                   * to the element that was focused
                   * prior to the overlay opening. Toast
                   * does not steal focus and is excluded
                   * from returning focus as a result.
                   */


                  if (overlay.el.tagName !== 'ION-TOAST') {
                    focusPreviousElementOnDismiss(overlay.el);
                  }

                  if (overlay.keyboardClose) {
                    overlay.el.focus();
                  }

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function present(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * When an overlay component is dismissed,
       * focus should be returned to the element
       * that presented the overlay. Otherwise
       * focus will be set on the body which
       * means that people using screen readers
       * or tabbing will need to re-navigate
       * to where they were before they
       * opened the overlay.
       */


      var focusPreviousElementOnDismiss = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(overlayEl) {
          var previousElement, shadowRoot;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  previousElement = document.activeElement;

                  if (previousElement) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  shadowRoot = previousElement && previousElement.shadowRoot;

                  if (shadowRoot) {
                    // If there are no inner focusable elements, just focus the host element.
                    previousElement = shadowRoot.querySelector(innerFocusableQueryString) || previousElement;
                  }

                  _context3.next = 7;
                  return overlayEl.onDidDismiss();

                case 7:
                  previousElement.focus();

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function focusPreviousElementOnDismiss(_x6) {
          return _ref2.apply(this, arguments);
        };
      }();

      var dismiss = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
          var mode, animationBuilder;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (overlay.presented) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", false);

                case 2:
                  overlay.presented = false;
                  _context4.prev = 3;
                  // Overlay contents should not be clickable during dismiss
                  overlay.el.style.setProperty('pointer-events', 'none');
                  overlay.willDismiss.emit({
                    data: data,
                    role: role
                  });
                  mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["b"])(overlay);
                  animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get(name, mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation); // If dismissed via gesture, no need to play leaving animation again

                  if (!(role !== 'gesture')) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 11;
                  return overlayAnimation(overlay, animationBuilder, overlay.el, opts);

                case 11:
                  overlay.didDismiss.emit({
                    data: data,
                    role: role
                  });
                  activeAnimations["delete"](overlay);
                  _context4.next = 18;
                  break;

                case 15:
                  _context4.prev = 15;
                  _context4.t0 = _context4["catch"](3);
                  console.error(_context4.t0);

                case 18:
                  overlay.el.remove();
                  return _context4.abrupt("return", true);

                case 20:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[3, 15]]);
        }));

        return function dismiss(_x7, _x8, _x9, _x10, _x11, _x12, _x13) {
          return _ref3.apply(this, arguments);
        };
      }();

      var getAppRoot = function getAppRoot(doc) {
        return doc.querySelector('ion-app') || doc.body;
      };

      var overlayAnimation = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(overlay, animationBuilder, baseEl, opts) {
          var aniRoot, animation, activeAni;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // Make overlay visible in case it's hidden
                  baseEl.classList.remove('overlay-hidden');
                  aniRoot = baseEl.shadowRoot || overlay.el;
                  animation = animationBuilder(aniRoot, opts);

                  if (!overlay.animated || !_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].getBoolean('animated', true)) {
                    animation.duration(0);
                  }

                  if (overlay.keyboardClose) {
                    animation.beforeAddWrite(function () {
                      var activeElement = baseEl.ownerDocument.activeElement;

                      if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                        activeElement.blur();
                      }
                    });
                  }

                  activeAni = activeAnimations.get(overlay) || [];
                  activeAnimations.set(overlay, [].concat(_toConsumableArray(activeAni), [animation]));
                  _context5.next = 9;
                  return animation.play();

                case 9:
                  return _context5.abrupt("return", true);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function overlayAnimation(_x14, _x15, _x16, _x17) {
          return _ref4.apply(this, arguments);
        };
      }();

      var eventMethod = function eventMethod(element, eventName) {
        var resolve;
        var promise = new Promise(function (r) {
          return resolve = r;
        });
        onceEvent(element, eventName, function (event) {
          resolve(event.detail);
        });
        return promise;
      };

      var onceEvent = function onceEvent(element, eventName, callback) {
        var handler = function handler(ev) {
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["b"])(element, eventName, handler);
          callback(ev);
        };

        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["a"])(element, eventName, handler);
      };

      var isCancel = function isCancel(role) {
        return role === 'cancel' || role === BACKDROP;
      };

      var defaultGate = function defaultGate(h) {
        return h();
      };

      var safeCall = function safeCall(handler, arg) {
        if (typeof handler === 'function') {
          var jmp = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get('_zoneGate', defaultGate);

          return jmp(function () {
            try {
              return handler(arg);
            } catch (e) {
              console.error(e);
            }
          });
        }

        return undefined;
      };

      var BACKDROP = 'backdrop';
      /***/
    },

    /***/
    "B4Jq":
    /*!****************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js ***!
      \****************************************************************************/

    /*! exports provided: MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, blockHardwareBackButton, startHardwareBackButton */

    /***/
    function B4Jq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MENU_BACK_BUTTON_PRIORITY", function () {
        return MENU_BACK_BUTTON_PRIORITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OVERLAY_BACK_BUTTON_PRIORITY", function () {
        return OVERLAY_BACK_BUTTON_PRIORITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blockHardwareBackButton", function () {
        return blockHardwareBackButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function () {
        return startHardwareBackButton;
      });
      /**
       * When hardwareBackButton: false in config,
       * we need to make sure we also block the default
       * webview behavior. If we don't then it will be
       * possible for users to navigate backward while
       * an overlay is still open. Additionally, it will
       * give the appearance that the hardwareBackButton
       * config is not working as the page transition
       * will still happen.
       */


      var blockHardwareBackButton = function blockHardwareBackButton() {
        document.addEventListener('backbutton', function () {}); // tslint:disable-line
      };

      var startHardwareBackButton = function startHardwareBackButton() {
        var doc = document;
        var busy = false;
        doc.addEventListener('backbutton', function () {
          if (busy) {
            return;
          }

          var index = 0;
          var handlers = [];
          var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
              register: function register(priority, handler) {
                handlers.push({
                  priority: priority,
                  handler: handler,
                  id: index++
                });
              }
            }
          });
          doc.dispatchEvent(ev);

          var executeAction = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(handlerRegister) {
              var result;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;

                      if (!(handlerRegister && handlerRegister.handler)) {
                        _context6.next = 6;
                        break;
                      }

                      result = handlerRegister.handler(processHandlers);

                      if (!(result != null)) {
                        _context6.next = 6;
                        break;
                      }

                      _context6.next = 6;
                      return result;

                    case 6:
                      _context6.next = 11;
                      break;

                    case 8:
                      _context6.prev = 8;
                      _context6.t0 = _context6["catch"](0);
                      console.error(_context6.t0);

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, null, [[0, 8]]);
            }));

            return function executeAction(_x18) {
              return _ref5.apply(this, arguments);
            };
          }();

          var processHandlers = function processHandlers() {
            if (handlers.length > 0) {
              var selectedHandler = {
                priority: Number.MIN_SAFE_INTEGER,
                handler: function handler() {
                  return undefined;
                },
                id: -1
              };
              handlers.forEach(function (handler) {
                if (handler.priority >= selectedHandler.priority) {
                  selectedHandler = handler;
                }
              });
              busy = true;
              handlers = handlers.filter(function (handler) {
                return handler.id !== selectedHandler.id;
              });
              executeAction(selectedHandler).then(function () {
                return busy = false;
              });
            }
          };

          processHandlers();
        });
      };

      var OVERLAY_BACK_BUTTON_PRIORITY = 100;
      var MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays

      /***/
    },

    /***/
    "E/Mt":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js ***!
      \********************************************************************/

    /*! exports provided: a, b, c, g, i */

    /***/
    function EMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return isPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return getIonMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return config;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getPlatforms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return initialize;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");

      var getPlatforms = function getPlatforms(win) {
        return setupPlatforms(win);
      };

      var isPlatform = function isPlatform(winOrPlatform, platform) {
        if (typeof winOrPlatform === 'string') {
          platform = winOrPlatform;
          winOrPlatform = undefined;
        }

        return getPlatforms(winOrPlatform).includes(platform);
      };

      var setupPlatforms = function setupPlatforms() {
        var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

        if (typeof win === 'undefined') {
          return [];
        }

        win.Ionic = win.Ionic || {};
        var platforms = win.Ionic.platforms;

        if (platforms == null) {
          platforms = win.Ionic.platforms = detectPlatforms(win);
          platforms.forEach(function (p) {
            return win.document.documentElement.classList.add("plt-".concat(p));
          });
        }

        return platforms;
      };

      var detectPlatforms = function detectPlatforms(win) {
        return Object.keys(PLATFORMS_MAP).filter(function (p) {
          return PLATFORMS_MAP[p](win);
        });
      };

      var isMobileWeb = function isMobileWeb(win) {
        return isMobile(win) && !isHybrid(win);
      };

      var isIpad = function isIpad(win) {
        // iOS 12 and below
        if (testUserAgent(win, /iPad/i)) {
          return true;
        } // iOS 13+


        if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
          return true;
        }

        return false;
      };

      var isIphone = function isIphone(win) {
        return testUserAgent(win, /iPhone/i);
      };

      var isIOS = function isIOS(win) {
        return testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
      };

      var isAndroid = function isAndroid(win) {
        return testUserAgent(win, /android|sink/i);
      };

      var isAndroidTablet = function isAndroidTablet(win) {
        return isAndroid(win) && !testUserAgent(win, /mobile/i);
      };

      var isPhablet = function isPhablet(win) {
        var width = win.innerWidth;
        var height = win.innerHeight;
        var smallest = Math.min(width, height);
        var largest = Math.max(width, height);
        return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
      };

      var isTablet = function isTablet(win) {
        var width = win.innerWidth;
        var height = win.innerHeight;
        var smallest = Math.min(width, height);
        var largest = Math.max(width, height);
        return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
      };

      var isMobile = function isMobile(win) {
        return matchMedia(win, '(any-pointer:coarse)');
      };

      var isDesktop = function isDesktop(win) {
        return !isMobile(win);
      };

      var isHybrid = function isHybrid(win) {
        return isCordova(win) || isCapacitorNative(win);
      };

      var isCordova = function isCordova(win) {
        return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
      };

      var isCapacitorNative = function isCapacitorNative(win) {
        var capacitor = win['Capacitor'];
        return !!(capacitor && capacitor.isNative);
      };

      var isElectron = function isElectron(win) {
        return testUserAgent(win, /electron/i);
      };

      var isPWA = function isPWA(win) {
        return !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
      };

      var testUserAgent = function testUserAgent(win, expr) {
        return expr.test(win.navigator.userAgent);
      };

      var matchMedia = function matchMedia(win, query) {
        return win.matchMedia(query).matches;
      };

      var PLATFORMS_MAP = {
        'ipad': isIpad,
        'iphone': isIphone,
        'ios': isIOS,
        'android': isAndroid,
        'phablet': isPhablet,
        'tablet': isTablet,
        'cordova': isCordova,
        'capacitor': isCapacitorNative,
        'electron': isElectron,
        'pwa': isPWA,
        'mobile': isMobile,
        'mobileweb': isMobileWeb,
        'desktop': isDesktop,
        'hybrid': isHybrid
      };

      var Config = /*#__PURE__*/function () {
        function Config() {
          _classCallCheck(this, Config);

          this.m = new Map();
        }

        _createClass(Config, [{
          key: "reset",
          value: function reset(configObj) {
            this.m = new Map(Object.entries(configObj));
          }
        }, {
          key: "get",
          value: function get(key, fallback) {
            var value = this.m.get(key);
            return value !== undefined ? value : fallback;
          }
        }, {
          key: "getBoolean",
          value: function getBoolean(key) {
            var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var val = this.m.get(key);

            if (val === undefined) {
              return fallback;
            }

            if (typeof val === 'string') {
              return val === 'true';
            }

            return !!val;
          }
        }, {
          key: "getNumber",
          value: function getNumber(key, fallback) {
            var val = parseFloat(this.m.get(key));
            return isNaN(val) ? fallback !== undefined ? fallback : NaN : val;
          }
        }, {
          key: "set",
          value: function set(key, value) {
            this.m.set(key, value);
          }
        }]);

        return Config;
      }();

      var config = /*@__PURE__*/new Config();

      var configFromSession = function configFromSession(win) {
        try {
          var configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
          return configStr !== null ? JSON.parse(configStr) : {};
        } catch (e) {
          return {};
        }
      };

      var saveConfig = function saveConfig(win, c) {
        try {
          win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
        } catch (e) {
          return;
        }
      };

      var configFromURL = function configFromURL(win) {
        var configObj = {};
        win.location.search.slice(1).split('&').map(function (entry) {
          return entry.split('=');
        }).map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          return [decodeURIComponent(key), decodeURIComponent(value)];
        }).filter(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 1),
              key = _ref9[0];

          return startsWith(key, IONIC_PREFIX);
        }).map(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              key = _ref11[0],
              value = _ref11[1];

          return [key.slice(IONIC_PREFIX.length), value];
        }).forEach(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              key = _ref13[0],
              value = _ref13[1];

          configObj[key] = value;
        });
        return configObj;
      };

      var startsWith = function startsWith(input, search) {
        return input.substr(0, search.length) === search;
      };

      var IONIC_PREFIX = 'ionic:';
      var IONIC_SESSION_KEY = 'ionic-persist-config';
      var defaultMode;

      var getIonMode = function getIonMode(ref) {
        return ref && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(ref) || defaultMode;
      };

      var initialize = function initialize() {
        var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (typeof window === 'undefined') {
          return;
        }

        var doc = window.document;
        var win = window;
        var Ionic = win.Ionic = win.Ionic || {}; // Setup platforms

        setupPlatforms(win); // create the Ionic.config from raw config object (if it exists)
        // and convert Ionic.config into a ConfigApi that has a get() fn

        var configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), {
          persistConfig: false
        }), Ionic.config), configFromURL(win)), userConfig);
        config.reset(configObj);

        if (config.getBoolean('persistConfig')) {
          saveConfig(win, configObj);
        } // first see if the mode was set as an attribute on <html>
        // which could have been set by the user, or by pre-rendering
        // otherwise get the mode via config settings, and fallback to md


        Ionic.config = config;
        Ionic.mode = defaultMode = config.get('mode', doc.documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md'));
        config.set('mode', defaultMode);
        doc.documentElement.setAttribute('mode', defaultMode);
        doc.documentElement.classList.add(defaultMode);

        if (config.getBoolean('_testing')) {
          config.set('animated', false);
        }

        var isIonicElement = function isIonicElement(elm) {
          return elm.tagName && elm.tagName.startsWith('ION-');
        };

        var isAllowedIonicModeValue = function isAllowedIonicModeValue(elmMode) {
          return ['ios', 'md'].includes(elmMode);
        };

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["s"])(function (elm) {
          while (elm) {
            var elmMode = elm.mode || elm.getAttribute('mode');

            if (elmMode) {
              if (isAllowedIonicModeValue(elmMode)) {
                return elmMode;
              } else if (isIonicElement(elm)) {
                console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
              }
            }

            elm = elm.parentElement;
          }

          return defaultMode;
        });
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=1-es5.js.map