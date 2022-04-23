(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-shims-73f15161-js"], {
    /***/
    "1vRN":
    /*!***************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js ***!
      \***************************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r */

    /***/
    function vRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return addEventListener;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return removeEventListener;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return componentOnReady;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return getAriaLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return renderHiddenInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return debounceEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getElementRoot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return findItemLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return inheritAttributes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return clamp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return hasShadowDom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return assert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return isEndSide;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return debounce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return now;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return pointerCoord;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return raf;
      });
      /**
       * Waits for a component to be ready for
       * both custom element and non-custom element builds.
       * If non-custom element build, el.componentOnReady
       * will be used.
       * For custom element builds, we wait a frame
       * so that the inner contents of the component
       * have a chance to render.
       *
       * Use this utility rather than calling
       * el.componentOnReady yourself.
       */


      var componentOnReady = function componentOnReady(el, callback) {
        if (el.componentOnReady) {
          el.componentOnReady().then(function (resolvedEl) {
            return callback(resolvedEl);
          });
        } else {
          raf(function () {
            return callback(el);
          });
        }
      };
      /**
       * Elements inside of web components sometimes need to inherit global attributes
       * set on the host. For example, the inner input in `ion-input` should inherit
       * the `title` attribute that developers set directly on `ion-input`. This
       * helper function should be called in componentWillLoad and assigned to a variable
       * that is later used in the render function.
       *
       * This does not need to be reactive as changing attributes on the host element
       * does not trigger a re-render.
       */


      var inheritAttributes = function inheritAttributes(el) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var attributeObject = {};
        attributes.forEach(function (attr) {
          if (el.hasAttribute(attr)) {
            var value = el.getAttribute(attr);

            if (value !== null) {
              attributeObject[attr] = el.getAttribute(attr);
            }

            el.removeAttribute(attr);
          }
        });
        return attributeObject;
      };

      var addEventListener = function addEventListener(el, eventName, callback, opts) {
        if (typeof window !== 'undefined') {
          var win = window;
          var config = win && win.Ionic && win.Ionic.config;

          if (config) {
            var ael = config.get('_ael');

            if (ael) {
              return ael(el, eventName, callback, opts);
            } else if (config._ael) {
              return config._ael(el, eventName, callback, opts);
            }
          }
        }

        return el.addEventListener(eventName, callback, opts);
      };

      var removeEventListener = function removeEventListener(el, eventName, callback, opts) {
        if (typeof window !== 'undefined') {
          var win = window;
          var config = win && win.Ionic && win.Ionic.config;

          if (config) {
            var rel = config.get('_rel');

            if (rel) {
              return rel(el, eventName, callback, opts);
            } else if (config._rel) {
              return config._rel(el, eventName, callback, opts);
            }
          }
        }

        return el.removeEventListener(eventName, callback, opts);
      };
      /**
       * Gets the root context of a shadow dom element
       * On newer browsers this will be the shadowRoot,
       * but for older browser this may just be the
       * element itself.
       *
       * Useful for whenever you need to explicitly
       * do "myElement.shadowRoot!.querySelector(...)".
       */


      var getElementRoot = function getElementRoot(el) {
        var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : el;
        return el.shadowRoot || fallback;
      };
      /**
       * Patched version of requestAnimationFrame that avoids ngzone
       * Use only when you know ngzone should not run
       */


      var raf = function raf(h) {
        if (typeof __zone_symbol__requestAnimationFrame === 'function') {
          return __zone_symbol__requestAnimationFrame(h);
        }

        if (typeof requestAnimationFrame === 'function') {
          return requestAnimationFrame(h);
        }

        return setTimeout(h);
      };

      var hasShadowDom = function hasShadowDom(el) {
        return !!el.shadowRoot && !!el.attachShadow;
      };

      var findItemLabel = function findItemLabel(componentEl) {
        var itemEl = componentEl.closest('ion-item');

        if (itemEl) {
          return itemEl.querySelector('ion-label');
        }

        return null;
      };
      /**
       * This method is used for Ionic's input components that use Shadow DOM. In
       * order to properly label the inputs to work with screen readers, we need
       * to get the text content of the label outside of the shadow root and pass
       * it to the input inside of the shadow root.
       *
       * Referencing label elements by id from outside of the component is
       * impossible due to the shadow boundary, read more here:
       * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
       *
       * @param componentEl The shadow element that needs the aria label
       * @param inputId The unique identifier for the input
       */


      var getAriaLabel = function getAriaLabel(componentEl, inputId) {
        var labelText; // If the user provides their own label via the aria-labelledby attr
        // we should use that instead of looking for an ion-label

        var labelledBy = componentEl.getAttribute('aria-labelledby'); // Grab the id off of the component in case they are using
        // a custom label using the label element

        var componentId = componentEl.id;
        var labelId = labelledBy !== null && labelledBy.trim() !== '' ? labelledBy : inputId + '-lbl';
        var label = labelledBy !== null && labelledBy.trim() !== '' ? document.getElementById(labelledBy) : findItemLabel(componentEl);

        if (label) {
          if (labelledBy === null) {
            label.id = labelId;
          }

          labelText = label.textContent;
          label.setAttribute('aria-hidden', 'true'); // if there is no label, check to see if the user has provided
          // one by setting an id on the component and using the label element
        } else if (componentId.trim() !== '') {
          label = document.querySelector("label[for=\"".concat(componentId, "\"]"));

          if (label) {
            if (label.id !== '') {
              labelId = label.id;
            } else {
              label.id = labelId = "".concat(componentId, "-lbl");
            }

            labelText = label.textContent;
          }
        }

        return {
          label: label,
          labelId: labelId,
          labelText: labelText
        };
      };
      /**
       * This method is used to add a hidden input to a host element that contains
       * a Shadow DOM. It does not add the input inside of the Shadow root which
       * allows it to be picked up inside of forms. It should contain the same
       * values as the host element.
       *
       * @param always Add a hidden input even if the container does not use Shadow
       * @param container The element where the input will be added
       * @param name The name of the input
       * @param value The value of the input
       * @param disabled If true, the input is disabled
       */


      var renderHiddenInput = function renderHiddenInput(always, container, name, value, disabled) {
        if (always || hasShadowDom(container)) {
          var input = container.querySelector('input.aux-input');

          if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
          }

          input.disabled = disabled;
          input.name = name;
          input.value = value || '';
        }
      };

      var clamp = function clamp(min, n, max) {
        return Math.max(min, Math.min(n, max));
      };

      var assert = function assert(actual, reason) {
        if (!actual) {
          var message = 'ASSERT: ' + reason;
          console.error(message);
          debugger; // tslint:disable-line

          throw new Error(message);
        }
      };

      var now = function now(ev) {
        return ev.timeStamp || Date.now();
      };

      var pointerCoord = function pointerCoord(ev) {
        // get X coordinates for either a mouse click
        // or a touch depending on the given event
        if (ev) {
          var changedTouches = ev.changedTouches;

          if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return {
              x: touch.clientX,
              y: touch.clientY
            };
          }

          if (ev.pageX !== undefined) {
            return {
              x: ev.pageX,
              y: ev.pageY
            };
          }
        }

        return {
          x: 0,
          y: 0
        };
      };
      /**
       * @hidden
       * Given a side, return if it should be on the end
       * based on the value of dir
       * @param side the side
       * @param isRTL whether the application dir is rtl
       */


      var isEndSide = function isEndSide(side) {
        var isRTL = document.dir === 'rtl';

        switch (side) {
          case 'start':
            return isRTL;

          case 'end':
            return !isRTL;

          default:
            throw new Error("\"".concat(side, "\" is not a valid value for [side]. Use \"start\" or \"end\" instead."));
        }
      };

      var debounceEvent = function debounceEvent(event, wait) {
        var original = event._original || event;
        return {
          _original: event,
          emit: debounce(original.emit.bind(original), wait)
        };
      };

      var debounce = function debounce(func) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var timer;
        return function () {
          clearTimeout(timer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          timer = setTimeout.apply(void 0, [func, wait].concat(args));
        };
      };
      /***/

    },

    /***/
    "3Iwd":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/input-shims-73f15161.js ***!
      \*******************************************************************/

    /*! exports provided: startInputShims */

    /***/
    function Iwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startInputShims", function () {
        return startInputShims;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var cloneMap = new WeakMap();

      var relocateInput = function relocateInput(componentEl, inputEl, shouldRelocate) {
        var inputRelativeY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        if (cloneMap.has(componentEl) === shouldRelocate) {
          return;
        }

        if (shouldRelocate) {
          addClone(componentEl, inputEl, inputRelativeY);
        } else {
          removeClone(componentEl, inputEl);
        }
      };

      var isFocused = function isFocused(input) {
        return input === input.getRootNode().activeElement;
      };

      var addClone = function addClone(componentEl, inputEl, inputRelativeY) {
        // this allows for the actual input to receive the focus from
        // the user's touch event, but before it receives focus, it
        // moves the actual input to a location that will not screw
        // up the app's layout, and does not allow the native browser
        // to attempt to scroll the input into place (messing up headers/footers)
        // the cloned input fills the area of where native input should be
        // while the native input fakes out the browser by relocating itself
        // before it receives the actual focus event
        // We hide the focused input (with the visible caret) invisible by making it scale(0),
        var parentEl = inputEl.parentNode; // DOM WRITES

        var clonedEl = inputEl.cloneNode(false);
        clonedEl.classList.add('cloned-input');
        clonedEl.tabIndex = -1;
        parentEl.appendChild(clonedEl);
        cloneMap.set(componentEl, clonedEl);
        var doc = componentEl.ownerDocument;
        var tx = doc.dir === 'rtl' ? 9999 : -9999;
        componentEl.style.pointerEvents = 'none';
        inputEl.style.transform = "translate3d(".concat(tx, "px,").concat(inputRelativeY, "px,0) scale(0)");
      };

      var removeClone = function removeClone(componentEl, inputEl) {
        var clone = cloneMap.get(componentEl);

        if (clone) {
          cloneMap["delete"](componentEl);
          clone.remove();
        }

        componentEl.style.pointerEvents = '';
        inputEl.style.transform = '';
      };

      var enableHideCaretOnScroll = function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
        if (!scrollEl || !inputEl) {
          return function () {
            return;
          };
        }

        var scrollHideCaret = function scrollHideCaret(shouldHideCaret) {
          if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
          }
        };

        var onBlur = function onBlur() {
          return relocateInput(componentEl, inputEl, false);
        };

        var hideCaret = function hideCaret() {
          return scrollHideCaret(true);
        };

        var showCaret = function showCaret() {
          return scrollHideCaret(false);
        };

        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollStart', hideCaret);
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollEnd', showCaret);
        inputEl.addEventListener('blur', onBlur);
        return function () {
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollStart', hideCaret);
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollEnd', showCaret);
          inputEl.addEventListener('ionBlur', onBlur);
        };
      };

      var SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';

      var enableInputBlurring = function enableInputBlurring() {
        var focused = true;
        var didScroll = false;
        var doc = document;

        var onScroll = function onScroll() {
          didScroll = true;
        };

        var onFocusin = function onFocusin() {
          focused = true;
        };

        var onTouchend = function onTouchend(ev) {
          // if app did scroll return early
          if (didScroll) {
            didScroll = false;
            return;
          }

          var active = doc.activeElement;

          if (!active) {
            return;
          } // only blur if the active element is a text-input or a textarea


          if (active.matches(SKIP_SELECTOR)) {
            return;
          } // if the selected target is the active element, do not blur


          var tapped = ev.target;

          if (tapped === active) {
            return;
          }

          if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
          }

          focused = false; // TODO: find a better way, why 50ms?

          setTimeout(function () {
            if (!focused) {
              active.blur();
            }
          }, 50);
        };

        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(doc, 'ionScrollStart', onScroll);
        doc.addEventListener('focusin', onFocusin, true);
        doc.addEventListener('touchend', onTouchend, false);
        return function () {
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(doc, 'ionScrollStart', onScroll, true);
          doc.removeEventListener('focusin', onFocusin, true);
          doc.removeEventListener('touchend', onTouchend, false);
        };
      };

      var SCROLL_ASSIST_SPEED = 0.3;

      var getScrollData = function getScrollData(componentEl, contentEl, keyboardHeight) {
        var itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
        return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
      };

      var calcScrollData = function calcScrollData(inputRect, contentRect, keyboardHeight, platformHeight) {
        // compute input's Y values relative to the body
        var inputTop = inputRect.top;
        var inputBottom = inputRect.bottom; // compute visible area

        var visibleAreaTop = contentRect.top;
        var visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight); // compute safe area

        var safeAreaTop = visibleAreaTop + 15;
        var safeAreaBottom = visibleAreaBottom * 0.75; // figure out if each edge of the input is within the safe area

        var distanceToBottom = safeAreaBottom - inputBottom;
        var distanceToTop = safeAreaTop - inputTop; // desiredScrollAmount is the negated distance to the safe area according to our calculations.

        var desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0); // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
        // gets focus, so make sure we don't scroll the input above the visible area

        var scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
        var distance = Math.abs(scrollAmount);
        var duration = distance / SCROLL_ASSIST_SPEED;
        var scrollDuration = Math.min(400, Math.max(150, duration));
        return {
          scrollAmount: scrollAmount,
          scrollDuration: scrollDuration,
          scrollPadding: keyboardHeight,
          inputSafeY: -(inputTop - safeAreaTop) + 4
        };
      };

      var enableScrollAssist = function enableScrollAssist(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
        var coord;

        var touchStart = function touchStart(ev) {
          coord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        };

        var touchEnd = function touchEnd(ev) {
          // input cover touchend/mouseup
          if (!coord) {
            return;
          } // get where the touchend/mouseup ended


          var endCoord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev); // focus this input if the pointer hasn't moved XX pixels
          // and the input doesn't already have focus

          if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.stopPropagation(); // begin the input focus process

            jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
          }
        };

        componentEl.addEventListener('touchstart', touchStart, true);
        componentEl.addEventListener('touchend', touchEnd, true);
        return function () {
          componentEl.removeEventListener('touchstart', touchStart, true);
          componentEl.removeEventListener('touchend', touchEnd, true);
        };
      };

      var jsSetFocus = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
          var scrollData, scrollContentTimeout, scrollContent, doubleKeyboardEventListener, scrollEl, totalScrollAmount;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!contentEl && !footerEl)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight);

                  if (!(contentEl && Math.abs(scrollData.scrollAmount) < 4)) {
                    _context2.next = 6;
                    break;
                  }

                  // the text input is in a safe position that doesn't
                  // require it to be scrolled into view, just set focus now
                  inputEl.focus();
                  return _context2.abrupt("return");

                case 6:
                  // temporarily move the focus to the focus holder so the browser
                  // doesn't freak out while it's trying to get the input in place
                  // at this point the native text input still does not have focus
                  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
                  inputEl.focus();
                  /**
                   * Relocating/Focusing input causes the
                   * click event to be cancelled, so
                   * manually fire one here.
                   */

                  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                    return componentEl.click();
                  });
                  /* tslint:disable-next-line */

                  if (!(typeof window !== 'undefined')) {
                    _context2.next = 22;
                    break;
                  }

                  scrollContent = /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              // clean up listeners and timeouts
                              if (scrollContentTimeout !== undefined) {
                                clearTimeout(scrollContentTimeout);
                              }

                              window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                              window.removeEventListener('ionKeyboardDidShow', scrollContent); // scroll the input into place

                              if (!contentEl) {
                                _context.next = 6;
                                break;
                              }

                              _context.next = 6;
                              return contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);

                            case 6:
                              // the scroll view is in the correct position now
                              // give the native text input focus
                              relocateInput(componentEl, inputEl, false, scrollData.inputSafeY); // ensure this is the focused input

                              inputEl.focus();

                            case 8:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function scrollContent() {
                      return _ref2.apply(this, arguments);
                    };
                  }();

                  doubleKeyboardEventListener = function doubleKeyboardEventListener() {
                    window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                    window.addEventListener('ionKeyboardDidShow', scrollContent);
                  };

                  if (!contentEl) {
                    _context2.next = 21;
                    break;
                  }

                  _context2.next = 15;
                  return contentEl.getScrollElement();

                case 15:
                  scrollEl = _context2.sent;

                  /**
                   * scrollData will only consider the amount we need
                   * to scroll in order to properly bring the input
                   * into view. It will not consider the amount
                   * we can scroll in the content element.
                   * As a result, scrollData may request a greater
                   * scroll position than is currently available
                   * in the DOM. If this is the case, we need to
                   * wait for the webview to resize/the keyboard
                   * to show in order for additional scroll
                   * bandwidth to become available.
                   */
                  totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;

                  if (!(scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop)) {
                    _context2.next = 21;
                    break;
                  }

                  /**
                   * On iOS devices, the system will show a "Passwords" bar above the keyboard
                   * after the initial keyboard is shown. This prevents the webview from resizing
                   * until the "Passwords" bar is shown, so we need to wait for that to happen first.
                   */
                  if (inputEl.type === 'password') {
                    // Add 50px to account for the "Passwords" bar
                    scrollData.scrollAmount += 50;
                    window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                  } else {
                    window.addEventListener('ionKeyboardDidShow', scrollContent);
                  }
                  /**
                   * This should only fire in 2 instances:
                   * 1. The app is very slow.
                   * 2. The app is running in a browser on an old OS
                   * that does not support Ionic Keyboard Events
                   */


                  scrollContentTimeout = setTimeout(scrollContent, 1000);
                  return _context2.abrupt("return");

                case 21:
                  scrollContent();

                case 22:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function jsSetFocus(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var hasPointerMoved = function hasPointerMoved(threshold, startCoord, endCoord) {
        if (startCoord && endCoord) {
          var deltaX = startCoord.x - endCoord.x;
          var deltaY = startCoord.y - endCoord.y;
          var distance = deltaX * deltaX + deltaY * deltaY;
          return distance > threshold * threshold;
        }

        return false;
      };

      var PADDING_TIMER_KEY = '$ionPaddingTimer';

      var enableScrollPadding = function enableScrollPadding(keyboardHeight) {
        var doc = document;

        var onFocusin = function onFocusin(ev) {
          setScrollPadding(ev.target, keyboardHeight);
        };

        var onFocusout = function onFocusout(ev) {
          setScrollPadding(ev.target, 0);
        };

        doc.addEventListener('focusin', onFocusin);
        doc.addEventListener('focusout', onFocusout);
        return function () {
          doc.removeEventListener('focusin', onFocusin);
          doc.removeEventListener('focusout', onFocusout);
        };
      };

      var setScrollPadding = function setScrollPadding(input, keyboardHeight) {
        if (input.tagName !== 'INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.parentElement && input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
          return;
        }

        var el = input.closest('ion-content');

        if (el === null) {
          return;
        }

        var timer = el[PADDING_TIMER_KEY];

        if (timer) {
          clearTimeout(timer);
        }

        if (keyboardHeight > 0) {
          el.style.setProperty('--keyboard-offset', "".concat(keyboardHeight, "px"));
        } else {
          el[PADDING_TIMER_KEY] = setTimeout(function () {
            el.style.setProperty('--keyboard-offset', '0px');
          }, 120);
        }
      };

      var INPUT_BLURRING = true;
      var SCROLL_PADDING = true;

      var startInputShims = function startInputShims(config) {
        var doc = document;
        var keyboardHeight = config.getNumber('keyboardHeight', 290);
        var scrollAssist = config.getBoolean('scrollAssist', true);
        var hideCaret = config.getBoolean('hideCaretOnScroll', true);
        var inputBlurring = config.getBoolean('inputBlurring', true);
        var scrollPadding = config.getBoolean('scrollPadding', true);
        var inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
        var hideCaretMap = new WeakMap();
        var scrollAssistMap = new WeakMap();

        var registerInput = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(componentEl) {
            var inputRoot, inputEl, scrollEl, footerEl, rmFn, _rmFn;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return new Promise(function (resolve) {
                      return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(componentEl, resolve);
                    });

                  case 2:
                    inputRoot = componentEl.shadowRoot || componentEl;
                    inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
                    scrollEl = componentEl.closest('ion-content');
                    footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;

                    if (inputEl) {
                      _context3.next = 8;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 8:
                    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
                      rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
                      hideCaretMap.set(componentEl, rmFn);
                    }

                    if ((!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
                      _rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight);
                      scrollAssistMap.set(componentEl, _rmFn);
                    }

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function registerInput(_x6) {
            return _ref3.apply(this, arguments);
          };
        }();

        var unregisterInput = function unregisterInput(componentEl) {
          if (hideCaret) {
            var fn = hideCaretMap.get(componentEl);

            if (fn) {
              fn();
            }

            hideCaretMap["delete"](componentEl);
          }

          if (scrollAssist) {
            var _fn = scrollAssistMap.get(componentEl);

            if (_fn) {
              _fn();
            }

            scrollAssistMap["delete"](componentEl);
          }
        };

        if (inputBlurring && INPUT_BLURRING) {
          enableInputBlurring();
        }

        if (scrollPadding && SCROLL_PADDING) {
          enableScrollPadding(keyboardHeight);
        } // Input might be already loaded in the DOM before ion-device-hacks did.
        // At this point we need to look for all of the inputs not registered yet
        // and register them.


        for (var _i = 0, _inputs = inputs; _i < _inputs.length; _i++) {
          var input = _inputs[_i];
          registerInput(input);
        }

        doc.addEventListener('ionInputDidLoad', function (ev) {
          registerInput(ev.detail);
        });
        doc.addEventListener('ionInputDidUnload', function (ev) {
          unregisterInput(ev.detail);
        });
      };
      /***/

    },

    /***/
    "4+5D":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/input-shims-73f15161.js ***!
      \***********************************************************************************************/

    /*! exports provided: startInputShims */

    /***/
    function D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startInputShims", function () {
        return startInputShims;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "qRyU");

      var cloneMap = new WeakMap();

      var relocateInput = function relocateInput(componentEl, inputEl, shouldRelocate) {
        var inputRelativeY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        if (cloneMap.has(componentEl) === shouldRelocate) {
          return;
        }

        if (shouldRelocate) {
          addClone(componentEl, inputEl, inputRelativeY);
        } else {
          removeClone(componentEl, inputEl);
        }
      };

      var isFocused = function isFocused(input) {
        return input === input.getRootNode().activeElement;
      };

      var addClone = function addClone(componentEl, inputEl, inputRelativeY) {
        // this allows for the actual input to receive the focus from
        // the user's touch event, but before it receives focus, it
        // moves the actual input to a location that will not screw
        // up the app's layout, and does not allow the native browser
        // to attempt to scroll the input into place (messing up headers/footers)
        // the cloned input fills the area of where native input should be
        // while the native input fakes out the browser by relocating itself
        // before it receives the actual focus event
        // We hide the focused input (with the visible caret) invisible by making it scale(0),
        var parentEl = inputEl.parentNode; // DOM WRITES

        var clonedEl = inputEl.cloneNode(false);
        clonedEl.classList.add('cloned-input');
        clonedEl.tabIndex = -1;
        parentEl.appendChild(clonedEl);
        cloneMap.set(componentEl, clonedEl);
        var doc = componentEl.ownerDocument;
        var tx = doc.dir === 'rtl' ? 9999 : -9999;
        componentEl.style.pointerEvents = 'none';
        inputEl.style.transform = "translate3d(".concat(tx, "px,").concat(inputRelativeY, "px,0) scale(0)");
      };

      var removeClone = function removeClone(componentEl, inputEl) {
        var clone = cloneMap.get(componentEl);

        if (clone) {
          cloneMap["delete"](componentEl);
          clone.remove();
        }

        componentEl.style.pointerEvents = '';
        inputEl.style.transform = '';
      };

      var enableHideCaretOnScroll = function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
        if (!scrollEl || !inputEl) {
          return function () {
            return;
          };
        }

        var scrollHideCaret = function scrollHideCaret(shouldHideCaret) {
          if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
          }
        };

        var onBlur = function onBlur() {
          return relocateInput(componentEl, inputEl, false);
        };

        var hideCaret = function hideCaret() {
          return scrollHideCaret(true);
        };

        var showCaret = function showCaret() {
          return scrollHideCaret(false);
        };

        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollStart', hideCaret);
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollEnd', showCaret);
        inputEl.addEventListener('blur', onBlur);
        return function () {
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollStart', hideCaret);
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollEnd', showCaret);
          inputEl.addEventListener('ionBlur', onBlur);
        };
      };

      var SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';

      var enableInputBlurring = function enableInputBlurring() {
        var focused = true;
        var didScroll = false;
        var doc = document;

        var onScroll = function onScroll() {
          didScroll = true;
        };

        var onFocusin = function onFocusin() {
          focused = true;
        };

        var onTouchend = function onTouchend(ev) {
          // if app did scroll return early
          if (didScroll) {
            didScroll = false;
            return;
          }

          var active = doc.activeElement;

          if (!active) {
            return;
          } // only blur if the active element is a text-input or a textarea


          if (active.matches(SKIP_SELECTOR)) {
            return;
          } // if the selected target is the active element, do not blur


          var tapped = ev.target;

          if (tapped === active) {
            return;
          }

          if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
          }

          focused = false; // TODO: find a better way, why 50ms?

          setTimeout(function () {
            if (!focused) {
              active.blur();
            }
          }, 50);
        };

        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(doc, 'ionScrollStart', onScroll);
        doc.addEventListener('focusin', onFocusin, true);
        doc.addEventListener('touchend', onTouchend, false);
        return function () {
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(doc, 'ionScrollStart', onScroll, true);
          doc.removeEventListener('focusin', onFocusin, true);
          doc.removeEventListener('touchend', onTouchend, false);
        };
      };

      var SCROLL_ASSIST_SPEED = 0.3;

      var getScrollData = function getScrollData(componentEl, contentEl, keyboardHeight) {
        var itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
        return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
      };

      var calcScrollData = function calcScrollData(inputRect, contentRect, keyboardHeight, platformHeight) {
        // compute input's Y values relative to the body
        var inputTop = inputRect.top;
        var inputBottom = inputRect.bottom; // compute visible area

        var visibleAreaTop = contentRect.top;
        var visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight); // compute safe area

        var safeAreaTop = visibleAreaTop + 15;
        var safeAreaBottom = visibleAreaBottom * 0.75; // figure out if each edge of the input is within the safe area

        var distanceToBottom = safeAreaBottom - inputBottom;
        var distanceToTop = safeAreaTop - inputTop; // desiredScrollAmount is the negated distance to the safe area according to our calculations.

        var desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0); // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
        // gets focus, so make sure we don't scroll the input above the visible area

        var scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
        var distance = Math.abs(scrollAmount);
        var duration = distance / SCROLL_ASSIST_SPEED;
        var scrollDuration = Math.min(400, Math.max(150, duration));
        return {
          scrollAmount: scrollAmount,
          scrollDuration: scrollDuration,
          scrollPadding: keyboardHeight,
          inputSafeY: -(inputTop - safeAreaTop) + 4
        };
      };

      var enableScrollAssist = function enableScrollAssist(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
        var coord;

        var touchStart = function touchStart(ev) {
          coord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        };

        var touchEnd = function touchEnd(ev) {
          // input cover touchend/mouseup
          if (!coord) {
            return;
          } // get where the touchend/mouseup ended


          var endCoord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev); // focus this input if the pointer hasn't moved XX pixels
          // and the input doesn't already have focus

          if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.stopPropagation(); // begin the input focus process

            jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
          }
        };

        componentEl.addEventListener('touchstart', touchStart, true);
        componentEl.addEventListener('touchend', touchEnd, true);
        return function () {
          componentEl.removeEventListener('touchstart', touchStart, true);
          componentEl.removeEventListener('touchend', touchEnd, true);
        };
      };

      var jsSetFocus = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
          var scrollData, scrollContentTimeout, _scrollContent, _doubleKeyboardEventListener, scrollEl, totalScrollAmount;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(!contentEl && !footerEl)) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return");

                case 2:
                  scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight);

                  if (!(contentEl && Math.abs(scrollData.scrollAmount) < 4)) {
                    _context5.next = 6;
                    break;
                  }

                  // the text input is in a safe position that doesn't
                  // require it to be scrolled into view, just set focus now
                  inputEl.focus();
                  return _context5.abrupt("return");

                case 6:
                  // temporarily move the focus to the focus holder so the browser
                  // doesn't freak out while it's trying to get the input in place
                  // at this point the native text input still does not have focus
                  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
                  inputEl.focus();
                  /**
                   * Relocating/Focusing input causes the
                   * click event to be cancelled, so
                   * manually fire one here.
                   */

                  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                    return componentEl.click();
                  });
                  /* tslint:disable-next-line */

                  if (!(typeof window !== 'undefined')) {
                    _context5.next = 22;
                    break;
                  }

                  _scrollContent = /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              // clean up listeners and timeouts
                              if (scrollContentTimeout !== undefined) {
                                clearTimeout(scrollContentTimeout);
                              }

                              window.removeEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                              window.removeEventListener('ionKeyboardDidShow', _scrollContent); // scroll the input into place

                              if (!contentEl) {
                                _context4.next = 6;
                                break;
                              }

                              _context4.next = 6;
                              return contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);

                            case 6:
                              // the scroll view is in the correct position now
                              // give the native text input focus
                              relocateInput(componentEl, inputEl, false, scrollData.inputSafeY); // ensure this is the focused input

                              inputEl.focus();

                            case 8:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function _scrollContent() {
                      return _ref5.apply(this, arguments);
                    };
                  }();

                  _doubleKeyboardEventListener = function _doubleKeyboardEventListener() {
                    window.removeEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                    window.addEventListener('ionKeyboardDidShow', _scrollContent);
                  };

                  if (!contentEl) {
                    _context5.next = 21;
                    break;
                  }

                  _context5.next = 15;
                  return contentEl.getScrollElement();

                case 15:
                  scrollEl = _context5.sent;

                  /**
                   * scrollData will only consider the amount we need
                   * to scroll in order to properly bring the input
                   * into view. It will not consider the amount
                   * we can scroll in the content element.
                   * As a result, scrollData may request a greater
                   * scroll position than is currently available
                   * in the DOM. If this is the case, we need to
                   * wait for the webview to resize/the keyboard
                   * to show in order for additional scroll
                   * bandwidth to become available.
                   */
                  totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;

                  if (!(scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop)) {
                    _context5.next = 21;
                    break;
                  }

                  /**
                   * On iOS devices, the system will show a "Passwords" bar above the keyboard
                   * after the initial keyboard is shown. This prevents the webview from resizing
                   * until the "Passwords" bar is shown, so we need to wait for that to happen first.
                   */
                  if (inputEl.type === 'password') {
                    // Add 50px to account for the "Passwords" bar
                    scrollData.scrollAmount += 50;
                    window.addEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                  } else {
                    window.addEventListener('ionKeyboardDidShow', _scrollContent);
                  }
                  /**
                   * This should only fire in 2 instances:
                   * 1. The app is very slow.
                   * 2. The app is running in a browser on an old OS
                   * that does not support Ionic Keyboard Events
                   */


                  scrollContentTimeout = setTimeout(_scrollContent, 1000);
                  return _context5.abrupt("return");

                case 21:
                  _scrollContent();

                case 22:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function jsSetFocus(_x7, _x8, _x9, _x10, _x11) {
          return _ref4.apply(this, arguments);
        };
      }();

      var hasPointerMoved = function hasPointerMoved(threshold, startCoord, endCoord) {
        if (startCoord && endCoord) {
          var deltaX = startCoord.x - endCoord.x;
          var deltaY = startCoord.y - endCoord.y;
          var distance = deltaX * deltaX + deltaY * deltaY;
          return distance > threshold * threshold;
        }

        return false;
      };

      var PADDING_TIMER_KEY = '$ionPaddingTimer';

      var enableScrollPadding = function enableScrollPadding(keyboardHeight) {
        var doc = document;

        var onFocusin = function onFocusin(ev) {
          setScrollPadding(ev.target, keyboardHeight);
        };

        var onFocusout = function onFocusout(ev) {
          setScrollPadding(ev.target, 0);
        };

        doc.addEventListener('focusin', onFocusin);
        doc.addEventListener('focusout', onFocusout);
        return function () {
          doc.removeEventListener('focusin', onFocusin);
          doc.removeEventListener('focusout', onFocusout);
        };
      };

      var setScrollPadding = function setScrollPadding(input, keyboardHeight) {
        if (input.tagName !== 'INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.parentElement && input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
          return;
        }

        var el = input.closest('ion-content');

        if (el === null) {
          return;
        }

        var timer = el[PADDING_TIMER_KEY];

        if (timer) {
          clearTimeout(timer);
        }

        if (keyboardHeight > 0) {
          el.style.setProperty('--keyboard-offset', "".concat(keyboardHeight, "px"));
        } else {
          el[PADDING_TIMER_KEY] = setTimeout(function () {
            el.style.setProperty('--keyboard-offset', '0px');
          }, 120);
        }
      };

      var INPUT_BLURRING = true;
      var SCROLL_PADDING = true;

      var startInputShims = function startInputShims(config) {
        var doc = document;
        var keyboardHeight = config.getNumber('keyboardHeight', 290);
        var scrollAssist = config.getBoolean('scrollAssist', true);
        var hideCaret = config.getBoolean('hideCaretOnScroll', true);
        var inputBlurring = config.getBoolean('inputBlurring', true);
        var scrollPadding = config.getBoolean('scrollPadding', true);
        var inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
        var hideCaretMap = new WeakMap();
        var scrollAssistMap = new WeakMap();

        var registerInput = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(componentEl) {
            var inputRoot, inputEl, scrollEl, footerEl, rmFn, _rmFn2;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return new Promise(function (resolve) {
                      return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(componentEl, resolve);
                    });

                  case 2:
                    inputRoot = componentEl.shadowRoot || componentEl;
                    inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
                    scrollEl = componentEl.closest('ion-content');
                    footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;

                    if (inputEl) {
                      _context6.next = 8;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 8:
                    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
                      rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
                      hideCaretMap.set(componentEl, rmFn);
                    }

                    if ((!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
                      _rmFn2 = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight);
                      scrollAssistMap.set(componentEl, _rmFn2);
                    }

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          return function registerInput(_x12) {
            return _ref6.apply(this, arguments);
          };
        }();

        var unregisterInput = function unregisterInput(componentEl) {
          if (hideCaret) {
            var fn = hideCaretMap.get(componentEl);

            if (fn) {
              fn();
            }

            hideCaretMap["delete"](componentEl);
          }

          if (scrollAssist) {
            var _fn2 = scrollAssistMap.get(componentEl);

            if (_fn2) {
              _fn2();
            }

            scrollAssistMap["delete"](componentEl);
          }
        };

        if (inputBlurring && INPUT_BLURRING) {
          enableInputBlurring();
        }

        if (scrollPadding && SCROLL_PADDING) {
          enableScrollPadding(keyboardHeight);
        } // Input might be already loaded in the DOM before ion-device-hacks did.
        // At this point we need to look for all of the inputs not registered yet
        // and register them.


        for (var _i2 = 0, _inputs2 = inputs; _i2 < _inputs2.length; _i2++) {
          var input = _inputs2[_i2];
          registerInput(input);
        }

        doc.addEventListener('ionInputDidLoad', function (ev) {
          registerInput(ev.detail);
        });
        doc.addEventListener('ionInputDidUnload', function (ev) {
          unregisterInput(ev.detail);
        });
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=input-shims-73f15161-js-es5.js.map