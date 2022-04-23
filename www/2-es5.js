(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "iWo5":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-f49d994d.js ***!
      \*************************************************************/

    /*! exports provided: GESTURE_CONTROLLER, createGesture */

    /***/
    function iWo5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGesture", function () {
        return createGesture;
      });
      /* harmony import */


      var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gesture-controller-31cb6bb9.js */
      "y08P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GESTURE_CONTROLLER", function () {
        return _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__["G"];
      });

      var addEventListener = function addEventListener(el, eventName, callback, opts) {
        // use event listener options when supported
        // otherwise it's just a boolean for the "capture" arg
        var listenerOpts = supportsPassive(el) ? {
          'capture': !!opts.capture,
          'passive': !!opts.passive
        } : !!opts.capture;
        var add;
        var remove;

        if (el['__zone_symbol__addEventListener']) {
          add = '__zone_symbol__addEventListener';
          remove = '__zone_symbol__removeEventListener';
        } else {
          add = 'addEventListener';
          remove = 'removeEventListener';
        }

        el[add](eventName, callback, listenerOpts);
        return function () {
          el[remove](eventName, callback, listenerOpts);
        };
      };

      var supportsPassive = function supportsPassive(node) {
        if (_sPassive === undefined) {
          try {
            var opts = Object.defineProperty({}, 'passive', {
              get: function get() {
                _sPassive = true;
              }
            });
            node.addEventListener('optsTest', function () {
              return;
            }, opts);
          } catch (e) {
            _sPassive = false;
          }
        }

        return !!_sPassive;
      };

      var _sPassive;

      var MOUSE_WAIT = 2000;

      var createPointerEvents = function createPointerEvents(el, pointerDown, pointerMove, pointerUp, options) {
        var rmTouchStart;
        var rmTouchMove;
        var rmTouchEnd;
        var rmTouchCancel;
        var rmMouseStart;
        var rmMouseMove;
        var rmMouseUp;
        var lastTouchEvent = 0;

        var handleTouchStart = function handleTouchStart(ev) {
          lastTouchEvent = Date.now() + MOUSE_WAIT;

          if (!pointerDown(ev)) {
            return;
          }

          if (!rmTouchMove && pointerMove) {
            rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
          }

          if (!rmTouchEnd) {
            rmTouchEnd = addEventListener(el, 'touchend', handleTouchEnd, options);
          }

          if (!rmTouchCancel) {
            rmTouchCancel = addEventListener(el, 'touchcancel', handleTouchEnd, options);
          }
        };

        var handleMouseDown = function handleMouseDown(ev) {
          if (lastTouchEvent > Date.now()) {
            return;
          }

          if (!pointerDown(ev)) {
            return;
          }

          if (!rmMouseMove && pointerMove) {
            rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
          }

          if (!rmMouseUp) {
            rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
          }
        };

        var handleTouchEnd = function handleTouchEnd(ev) {
          stopTouch();

          if (pointerUp) {
            pointerUp(ev);
          }
        };

        var handleMouseUp = function handleMouseUp(ev) {
          stopMouse();

          if (pointerUp) {
            pointerUp(ev);
          }
        };

        var stopTouch = function stopTouch() {
          if (rmTouchMove) {
            rmTouchMove();
          }

          if (rmTouchEnd) {
            rmTouchEnd();
          }

          if (rmTouchCancel) {
            rmTouchCancel();
          }

          rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
        };

        var stopMouse = function stopMouse() {
          if (rmMouseMove) {
            rmMouseMove();
          }

          if (rmMouseUp) {
            rmMouseUp();
          }

          rmMouseMove = rmMouseUp = undefined;
        };

        var stop = function stop() {
          stopTouch();
          stopMouse();
        };

        var enable = function enable() {
          var isEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (!isEnabled) {
            if (rmTouchStart) {
              rmTouchStart();
            }

            if (rmMouseStart) {
              rmMouseStart();
            }

            rmTouchStart = rmMouseStart = undefined;
            stop();
          } else {
            if (!rmTouchStart) {
              rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
            }

            if (!rmMouseStart) {
              rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
            }
          }
        };

        var destroy = function destroy() {
          enable(false);
          pointerUp = pointerMove = pointerDown = undefined;
        };

        return {
          enable: enable,
          stop: stop,
          destroy: destroy
        };
      };

      var getDocument = function getDocument(node) {
        return node instanceof Document ? node : node.ownerDocument;
      };

      var createPanRecognizer = function createPanRecognizer(direction, thresh, maxAngle) {
        var radians = maxAngle * (Math.PI / 180);
        var isDirX = direction === 'x';
        var maxCosine = Math.cos(radians);
        var threshold = thresh * thresh;
        var startX = 0;
        var startY = 0;
        var dirty = false;
        var isPan = 0;
        return {
          start: function start(x, y) {
            startX = x;
            startY = y;
            isPan = 0;
            dirty = true;
          },
          detect: function detect(x, y) {
            if (!dirty) {
              return false;
            }

            var deltaX = x - startX;
            var deltaY = y - startY;
            var distance = deltaX * deltaX + deltaY * deltaY;

            if (distance < threshold) {
              return false;
            }

            var hypotenuse = Math.sqrt(distance);
            var cosine = (isDirX ? deltaX : deltaY) / hypotenuse;

            if (cosine > maxCosine) {
              isPan = 1;
            } else if (cosine < -maxCosine) {
              isPan = -1;
            } else {
              isPan = 0;
            }

            dirty = false;
            return true;
          },
          isGesture: function isGesture() {
            return isPan !== 0;
          },
          getDirection: function getDirection() {
            return isPan;
          }
        };
      };

      var createGesture = function createGesture(config) {
        var hasCapturedPan = false;
        var hasStartedPan = false;
        var hasFiredStart = true;
        var isMoveQueued = false;
        var finalConfig = Object.assign({
          disableScroll: false,
          direction: 'x',
          gesturePriority: 0,
          passive: true,
          maxAngle: 40,
          threshold: 10
        }, config);
        var canStart = finalConfig.canStart;
        var onWillStart = finalConfig.onWillStart;
        var onStart = finalConfig.onStart;
        var onEnd = finalConfig.onEnd;
        var notCaptured = finalConfig.notCaptured;
        var onMove = finalConfig.onMove;
        var threshold = finalConfig.threshold;
        var passive = finalConfig.passive;
        var blurOnStart = finalConfig.blurOnStart;
        var detail = {
          type: 'pan',
          startX: 0,
          startY: 0,
          startTime: 0,
          currentX: 0,
          currentY: 0,
          velocityX: 0,
          velocityY: 0,
          deltaX: 0,
          deltaY: 0,
          currentTime: 0,
          event: undefined,
          data: undefined
        };
        var pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);

        var gesture = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__["G"].createGesture({
          name: config.gestureName,
          priority: config.gesturePriority,
          disableScroll: config.disableScroll
        });

        var pointerDown = function pointerDown(ev) {
          var timeStamp = now(ev);

          if (hasStartedPan || !hasFiredStart) {
            return false;
          }

          updateDetail(ev, detail);
          detail.startX = detail.currentX;
          detail.startY = detail.currentY;
          detail.startTime = detail.currentTime = timeStamp;
          detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
          detail.event = ev; // Check if gesture can start

          if (canStart && canStart(detail) === false) {
            return false;
          } // Release fallback


          gesture.release(); // Start gesture

          if (!gesture.start()) {
            return false;
          }

          hasStartedPan = true;

          if (threshold === 0) {
            return tryToCapturePan();
          }

          pan.start(detail.startX, detail.startY);
          return true;
        };

        var pointerMove = function pointerMove(ev) {
          // fast path, if gesture is currently captured
          // do minimum job to get user-land even dispatched
          if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
              isMoveQueued = true;
              calcGestureData(detail, ev);
              requestAnimationFrame(fireOnMove);
            }

            return;
          } // gesture is currently being detected


          calcGestureData(detail, ev);

          if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
              abortGesture();
            }
          }
        };

        var fireOnMove = function fireOnMove() {
          // Since fireOnMove is called inside a RAF, onEnd() might be called,
          // we must double check hasCapturedPan
          if (!hasCapturedPan) {
            return;
          }

          isMoveQueued = false;

          if (onMove) {
            onMove(detail);
          }
        };

        var tryToCapturePan = function tryToCapturePan() {
          if (gesture && !gesture.capture()) {
            return false;
          }

          hasCapturedPan = true;
          hasFiredStart = false; // reset start position since the real user-land event starts here
          // If the pan detector threshold is big, not resetting the start position
          // will cause a jump in the animation equal to the detector threshold.
          // the array of positions used to calculate the gesture velocity does not
          // need to be cleaned, more points in the positions array always results in a
          // more accurate value of the velocity.

          detail.startX = detail.currentX;
          detail.startY = detail.currentY;
          detail.startTime = detail.currentTime;

          if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
          } else {
            fireOnStart();
          }

          return true;
        };

        var blurActiveElement = function blurActiveElement() {
          /* tslint:disable-next-line */
          if (typeof document !== 'undefined') {
            var activeElement = document.activeElement;

            if (activeElement !== null && activeElement.blur) {
              activeElement.blur();
            }
          }
        };

        var fireOnStart = function fireOnStart() {
          if (blurOnStart) {
            blurActiveElement();
          }

          if (onStart) {
            onStart(detail);
          }

          hasFiredStart = true;
        };

        var reset = function reset() {
          hasCapturedPan = false;
          hasStartedPan = false;
          isMoveQueued = false;
          hasFiredStart = true;
          gesture.release();
        }; // END *************************


        var pointerUp = function pointerUp(ev) {
          var tmpHasCaptured = hasCapturedPan;
          var tmpHasFiredStart = hasFiredStart;
          reset();

          if (!tmpHasFiredStart) {
            return;
          }

          calcGestureData(detail, ev); // Try to capture press

          if (tmpHasCaptured) {
            if (onEnd) {
              onEnd(detail);
            }

            return;
          } // Not captured any event


          if (notCaptured) {
            notCaptured(detail);
          }
        };

        var pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
          capture: false,
          passive: passive
        });

        var abortGesture = function abortGesture() {
          reset();
          pointerEvents.stop();

          if (notCaptured) {
            notCaptured(detail);
          }
        };

        return {
          enable: function enable() {
            var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (!enable) {
              if (hasCapturedPan) {
                pointerUp(undefined);
              }

              reset();
            }

            pointerEvents.enable(enable);
          },
          destroy: function destroy() {
            gesture.destroy();
            pointerEvents.destroy();
          }
        };
      };

      var calcGestureData = function calcGestureData(detail, ev) {
        if (!ev) {
          return;
        }

        var prevX = detail.currentX;
        var prevY = detail.currentY;
        var prevT = detail.currentTime;
        updateDetail(ev, detail);
        var currentX = detail.currentX;
        var currentY = detail.currentY;
        var timestamp = detail.currentTime = now(ev);
        var timeDelta = timestamp - prevT;

        if (timeDelta > 0 && timeDelta < 100) {
          var velocityX = (currentX - prevX) / timeDelta;
          var velocityY = (currentY - prevY) / timeDelta;
          detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
          detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
        }

        detail.deltaX = currentX - detail.startX;
        detail.deltaY = currentY - detail.startY;
        detail.event = ev;
      };

      var updateDetail = function updateDetail(ev, detail) {
        // get X coordinates for either a mouse click
        // or a touch depending on the given event
        var x = 0;
        var y = 0;

        if (ev) {
          var changedTouches = ev.changedTouches;

          if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
          } else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
          }
        }

        detail.currentX = x;
        detail.currentY = y;
      };

      var now = function now(ev) {
        return ev.timeStamp || Date.now();
      };
      /***/

    },

    /***/
    "y08P":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/gesture-controller-31cb6bb9.js ***!
      \**************************************************************************/

    /*! exports provided: G */

    /***/
    function y08P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return GESTURE_CONTROLLER;
      });

      var GestureController = /*#__PURE__*/function () {
        function GestureController() {
          _classCallCheck(this, GestureController);

          this.gestureId = 0;
          this.requestedStart = new Map();
          this.disabledGestures = new Map();
          this.disabledScroll = new Set();
        }
        /**
         * Creates a gesture delegate based on the GestureConfig passed
         */


        _createClass(GestureController, [{
          key: "createGesture",
          value: function createGesture(config) {
            return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
          }
          /**
           * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
           */

        }, {
          key: "createBlocker",
          value: function createBlocker() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
          }
        }, {
          key: "start",
          value: function start(gestureName, id, priority) {
            if (!this.canStart(gestureName)) {
              this.requestedStart["delete"](id);
              return false;
            }

            this.requestedStart.set(id, priority);
            return true;
          }
        }, {
          key: "capture",
          value: function capture(gestureName, id, priority) {
            if (!this.start(gestureName, id, priority)) {
              return false;
            }

            var requestedStart = this.requestedStart;
            var maxPriority = -10000;
            requestedStart.forEach(function (value) {
              maxPriority = Math.max(maxPriority, value);
            });

            if (maxPriority === priority) {
              this.capturedId = id;
              requestedStart.clear();
              var event = new CustomEvent('ionGestureCaptured', {
                detail: {
                  gestureName: gestureName
                }
              });
              document.dispatchEvent(event);
              return true;
            }

            requestedStart["delete"](id);
            return false;
          }
        }, {
          key: "release",
          value: function release(id) {
            this.requestedStart["delete"](id);

            if (this.capturedId === id) {
              this.capturedId = undefined;
            }
          }
        }, {
          key: "disableGesture",
          value: function disableGesture(gestureName, id) {
            var set = this.disabledGestures.get(gestureName);

            if (set === undefined) {
              set = new Set();
              this.disabledGestures.set(gestureName, set);
            }

            set.add(id);
          }
        }, {
          key: "enableGesture",
          value: function enableGesture(gestureName, id) {
            var set = this.disabledGestures.get(gestureName);

            if (set !== undefined) {
              set["delete"](id);
            }
          }
        }, {
          key: "disableScroll",
          value: function disableScroll(id) {
            this.disabledScroll.add(id);

            if (this.disabledScroll.size === 1) {
              document.body.classList.add(BACKDROP_NO_SCROLL);
            }
          }
        }, {
          key: "enableScroll",
          value: function enableScroll(id) {
            this.disabledScroll["delete"](id);

            if (this.disabledScroll.size === 0) {
              document.body.classList.remove(BACKDROP_NO_SCROLL);
            }
          }
        }, {
          key: "canStart",
          value: function canStart(gestureName) {
            if (this.capturedId !== undefined) {
              // a gesture already captured
              return false;
            }

            if (this.isDisabled(gestureName)) {
              return false;
            }

            return true;
          }
        }, {
          key: "isCaptured",
          value: function isCaptured() {
            return this.capturedId !== undefined;
          }
        }, {
          key: "isScrollDisabled",
          value: function isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(gestureName) {
            var disabled = this.disabledGestures.get(gestureName);

            if (disabled && disabled.size > 0) {
              return true;
            }

            return false;
          }
        }, {
          key: "newID",
          value: function newID() {
            this.gestureId++;
            return this.gestureId;
          }
        }]);

        return GestureController;
      }();

      var GestureDelegate = /*#__PURE__*/function () {
        function GestureDelegate(ctrl, id, name, priority, disableScroll) {
          _classCallCheck(this, GestureDelegate);

          this.id = id;
          this.name = name;
          this.disableScroll = disableScroll;
          this.priority = priority * 1000000 + id;
          this.ctrl = ctrl;
        }

        _createClass(GestureDelegate, [{
          key: "canStart",
          value: function canStart() {
            if (!this.ctrl) {
              return false;
            }

            return this.ctrl.canStart(this.name);
          }
        }, {
          key: "start",
          value: function start() {
            if (!this.ctrl) {
              return false;
            }

            return this.ctrl.start(this.name, this.id, this.priority);
          }
        }, {
          key: "capture",
          value: function capture() {
            if (!this.ctrl) {
              return false;
            }

            var captured = this.ctrl.capture(this.name, this.id, this.priority);

            if (captured && this.disableScroll) {
              this.ctrl.disableScroll(this.id);
            }

            return captured;
          }
        }, {
          key: "release",
          value: function release() {
            if (this.ctrl) {
              this.ctrl.release(this.id);

              if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
              }
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.release();
            this.ctrl = undefined;
          }
        }]);

        return GestureDelegate;
      }();

      var BlockerDelegate = /*#__PURE__*/function () {
        function BlockerDelegate(ctrl, id, disable, disableScroll) {
          _classCallCheck(this, BlockerDelegate);

          this.id = id;
          this.disable = disable;
          this.disableScroll = disableScroll;
          this.ctrl = ctrl;
        }

        _createClass(BlockerDelegate, [{
          key: "block",
          value: function block() {
            if (!this.ctrl) {
              return;
            }

            if (this.disable) {
              var _iterator = _createForOfIteratorHelper(this.disable),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var gesture = _step.value;
                  this.ctrl.disableGesture(gesture, this.id);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (this.disableScroll) {
              this.ctrl.disableScroll(this.id);
            }
          }
        }, {
          key: "unblock",
          value: function unblock() {
            if (!this.ctrl) {
              return;
            }

            if (this.disable) {
              var _iterator2 = _createForOfIteratorHelper(this.disable),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var gesture = _step2.value;
                  this.ctrl.enableGesture(gesture, this.id);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (this.disableScroll) {
              this.ctrl.enableScroll(this.id);
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.unblock();
            this.ctrl = undefined;
          }
        }]);

        return BlockerDelegate;
      }();

      var BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
      var GESTURE_CONTROLLER = new GestureController();
      /***/
    }
  }]);
})();
//# sourceMappingURL=2-es5.js.map