(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tap-click-cc1ae2b2-js"], {
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
    "cg4z":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/tap-click-cc1ae2b2.js ***!
      \*****************************************************************/

    /*! exports provided: startTapClick */

    /***/
    function cg4z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startTapClick", function () {
        return startTapClick;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var startTapClick = function startTapClick(config) {
        var lastTouch = -MOUSE_WAIT * 10;
        var lastActivated = 0;
        var scrollingEl;
        var activatableEle;
        var activeRipple;
        var activeDefer;
        var useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
        var clearDefers = new WeakMap();

        var isScrolling = function isScrolling() {
          return scrollingEl !== undefined && scrollingEl.parentElement !== null;
        }; // Touch Events


        var onTouchStart = function onTouchStart(ev) {
          lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
          pointerDown(ev);
        };

        var onTouchEnd = function onTouchEnd(ev) {
          lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
          pointerUp(ev);
        };

        var onMouseDown = function onMouseDown(ev) {
          var t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;

          if (lastTouch < t) {
            pointerDown(ev);
          }
        };

        var onMouseUp = function onMouseUp(ev) {
          var t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;

          if (lastTouch < t) {
            pointerUp(ev);
          }
        };

        var cancelActive = function cancelActive() {
          clearTimeout(activeDefer);
          activeDefer = undefined;

          if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
          }
        };

        var pointerDown = function pointerDown(ev) {
          if (activatableEle || isScrolling()) {
            return;
          }

          scrollingEl = undefined;
          setActivatedElement(getActivatableTarget(ev), ev);
        };

        var pointerUp = function pointerUp(ev) {
          setActivatedElement(undefined, ev);
        };

        var setActivatedElement = function setActivatedElement(el, ev) {
          // do nothing
          if (el && el === activatableEle) {
            return;
          }

          clearTimeout(activeDefer);
          activeDefer = undefined;

          var _Object = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev),
              x = _Object.x,
              y = _Object.y; // deactivate selected


          if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
              throw new Error('internal error');
            }

            if (!activatableEle.classList.contains(ACTIVATED)) {
              addActivated(activatableEle, x, y);
            }

            removeActivated(true);
          } // activate


          if (el) {
            var deferId = clearDefers.get(el);

            if (deferId) {
              clearTimeout(deferId);
              clearDefers["delete"](el);
            }

            var delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(function () {
              addActivated(el, x, y);
              activeDefer = undefined;
            }, delay);
          }

          activatableEle = el;
        };

        var addActivated = function addActivated(el, x, y) {
          lastActivated = Date.now();
          el.classList.add(ACTIVATED);
          var rippleEffect = useRippleEffect && getRippleEffect(el);

          if (rippleEffect && rippleEffect.addRipple) {
            removeRipple();
            activeRipple = rippleEffect.addRipple(x, y);
          }
        };

        var removeRipple = function removeRipple() {
          if (activeRipple !== undefined) {
            activeRipple.then(function (remove) {
              return remove();
            });
            activeRipple = undefined;
          }
        };

        var removeActivated = function removeActivated(smooth) {
          removeRipple();
          var active = activatableEle;

          if (!active) {
            return;
          }

          var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;

          if (smooth && time > 0 && !isInstant(active)) {
            var deferId = setTimeout(function () {
              active.classList.remove(ACTIVATED);
              clearDefers["delete"](active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
          } else {
            active.classList.remove(ACTIVATED);
          }
        };

        var doc = document;
        doc.addEventListener('ionScrollStart', function (ev) {
          scrollingEl = ev.target;
          cancelActive();
        });
        doc.addEventListener('ionScrollEnd', function () {
          scrollingEl = undefined;
        });
        doc.addEventListener('ionGestureCaptured', cancelActive);
        doc.addEventListener('touchstart', onTouchStart, true);
        doc.addEventListener('touchcancel', onTouchEnd, true);
        doc.addEventListener('touchend', onTouchEnd, true);
        doc.addEventListener('mousedown', onMouseDown, true);
        doc.addEventListener('mouseup', onMouseUp, true);
      };

      var getActivatableTarget = function getActivatableTarget(ev) {
        if (ev.composedPath) {
          var path = ev.composedPath();

          for (var i = 0; i < path.length - 2; i++) {
            var el = path[i];

            if (el.classList && el.classList.contains('ion-activatable')) {
              return el;
            }
          }
        } else {
          return ev.target.closest('.ion-activatable');
        }
      };

      var isInstant = function isInstant(el) {
        return el.classList.contains('ion-activatable-instant');
      };

      var getRippleEffect = function getRippleEffect(el) {
        if (el.shadowRoot) {
          var ripple = el.shadowRoot.querySelector('ion-ripple-effect');

          if (ripple) {
            return ripple;
          }
        }

        return el.querySelector('ion-ripple-effect');
      };

      var ACTIVATED = 'ion-activated';
      var ADD_ACTIVATED_DEFERS = 200;
      var CLEAR_STATE_DEFERS = 200;
      var MOUSE_WAIT = 2500;
      /***/
    },

    /***/
    "eK4A":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/tap-click-cc1ae2b2.js ***!
      \*********************************************************************************************/

    /*! exports provided: startTapClick */

    /***/
    function eK4A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startTapClick", function () {
        return startTapClick;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "qRyU");

      var startTapClick = function startTapClick(config) {
        var lastTouch = -MOUSE_WAIT * 10;
        var lastActivated = 0;
        var scrollingEl;
        var activatableEle;
        var activeRipple;
        var activeDefer;
        var useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
        var clearDefers = new WeakMap();

        var isScrolling = function isScrolling() {
          return scrollingEl !== undefined && scrollingEl.parentElement !== null;
        }; // Touch Events


        var onTouchStart = function onTouchStart(ev) {
          lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
          pointerDown(ev);
        };

        var onTouchEnd = function onTouchEnd(ev) {
          lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
          pointerUp(ev);
        };

        var onMouseDown = function onMouseDown(ev) {
          var t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;

          if (lastTouch < t) {
            pointerDown(ev);
          }
        };

        var onMouseUp = function onMouseUp(ev) {
          var t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;

          if (lastTouch < t) {
            pointerUp(ev);
          }
        };

        var cancelActive = function cancelActive() {
          clearTimeout(activeDefer);
          activeDefer = undefined;

          if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
          }
        };

        var pointerDown = function pointerDown(ev) {
          if (activatableEle || isScrolling()) {
            return;
          }

          scrollingEl = undefined;
          setActivatedElement(getActivatableTarget(ev), ev);
        };

        var pointerUp = function pointerUp(ev) {
          setActivatedElement(undefined, ev);
        };

        var setActivatedElement = function setActivatedElement(el, ev) {
          // do nothing
          if (el && el === activatableEle) {
            return;
          }

          clearTimeout(activeDefer);
          activeDefer = undefined;

          var _Object2 = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev),
              x = _Object2.x,
              y = _Object2.y; // deactivate selected


          if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
              throw new Error('internal error');
            }

            if (!activatableEle.classList.contains(ACTIVATED)) {
              addActivated(activatableEle, x, y);
            }

            removeActivated(true);
          } // activate


          if (el) {
            var deferId = clearDefers.get(el);

            if (deferId) {
              clearTimeout(deferId);
              clearDefers["delete"](el);
            }

            var delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(function () {
              addActivated(el, x, y);
              activeDefer = undefined;
            }, delay);
          }

          activatableEle = el;
        };

        var addActivated = function addActivated(el, x, y) {
          lastActivated = Date.now();
          el.classList.add(ACTIVATED);
          var rippleEffect = useRippleEffect && getRippleEffect(el);

          if (rippleEffect && rippleEffect.addRipple) {
            removeRipple();
            activeRipple = rippleEffect.addRipple(x, y);
          }
        };

        var removeRipple = function removeRipple() {
          if (activeRipple !== undefined) {
            activeRipple.then(function (remove) {
              return remove();
            });
            activeRipple = undefined;
          }
        };

        var removeActivated = function removeActivated(smooth) {
          removeRipple();
          var active = activatableEle;

          if (!active) {
            return;
          }

          var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;

          if (smooth && time > 0 && !isInstant(active)) {
            var deferId = setTimeout(function () {
              active.classList.remove(ACTIVATED);
              clearDefers["delete"](active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
          } else {
            active.classList.remove(ACTIVATED);
          }
        };

        var doc = document;
        doc.addEventListener('ionScrollStart', function (ev) {
          scrollingEl = ev.target;
          cancelActive();
        });
        doc.addEventListener('ionScrollEnd', function () {
          scrollingEl = undefined;
        });
        doc.addEventListener('ionGestureCaptured', cancelActive);
        doc.addEventListener('touchstart', onTouchStart, true);
        doc.addEventListener('touchcancel', onTouchEnd, true);
        doc.addEventListener('touchend', onTouchEnd, true);
        doc.addEventListener('mousedown', onMouseDown, true);
        doc.addEventListener('mouseup', onMouseUp, true);
      };

      var getActivatableTarget = function getActivatableTarget(ev) {
        if (ev.composedPath) {
          var path = ev.composedPath();

          for (var i = 0; i < path.length - 2; i++) {
            var el = path[i];

            if (el.classList && el.classList.contains('ion-activatable')) {
              return el;
            }
          }
        } else {
          return ev.target.closest('.ion-activatable');
        }
      };

      var isInstant = function isInstant(el) {
        return el.classList.contains('ion-activatable-instant');
      };

      var getRippleEffect = function getRippleEffect(el) {
        if (el.shadowRoot) {
          var ripple = el.shadowRoot.querySelector('ion-ripple-effect');

          if (ripple) {
            return ripple;
          }
        }

        return el.querySelector('ion-ripple-effect');
      };

      var ACTIVATED = 'ion-activated';
      var ADD_ACTIVATED_DEFERS = 200;
      var CLEAR_STATE_DEFERS = 200;
      var MOUSE_WAIT = 2500;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tap-click-cc1ae2b2-js-es5.js.map