(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"], {
    /***/
    "bdgK":
    /*!*************************************************************************!*\
      !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bdgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * A collection of shims that provide minimal functionality of the ES6 collections.
       *
       * These implementations are not meant to be used outside of the ResizeObserver
       * modules as they cover only a limited range of use cases.
       */

      /* eslint-disable require-jsdoc, valid-jsdoc */


      var MapShim = function () {
        if (typeof Map !== 'undefined') {
          return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */


        function getIndex(arr, key) {
          var result = -1;
          arr.some(function (entry, index) {
            if (entry[0] === key) {
              result = index;
              return true;
            }

            return false;
          });
          return result;
        }

        return (
          /** @class */
          function () {
            function class_1() {
              this.__entries__ = [];
            }

            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function get() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */

            class_1.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */


            class_1.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                this.__entries__[index][1] = value;
              } else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype["delete"] = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */


            class_1.prototype.clear = function () {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */


            class_1.prototype.forEach = function (callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }

              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };

            return class_1;
          }()
        );
      }();
      /**
       * Detects whether window and document objects are available in current environment.
       */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

      var global$1 = function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
        } // eslint-disable-next-line no-new-func


        return Function('return this')();
      }();
      /**
       * A shim for the requestAnimationFrame which falls back to the setTimeout if
       * first one is not supported.
       *
       * @returns {number} Requests' identifier.
       */


      var requestAnimationFrame$1 = function () {
        if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
        }

        return function (callback) {
          return setTimeout(function () {
            return callback(Date.now());
          }, 1000 / 60);
        };
      }(); // Defines minimum timeout before adding a trailing call.


      var trailingTimeout = 2;
      /**
       * Creates a wrapper function which ensures that provided callback will be
       * invoked only once during the specified delay period.
       *
       * @param {Function} callback - Function to be invoked after the delay period.
       * @param {number} delay - Delay after which to invoke callback.
       * @returns {Function}
       */

      function throttle(callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */

        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }

          if (trailingCall) {
            proxy();
          }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */


        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */


        function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            } // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.


            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
        }

        return proxy;
      } // Minimum delay before invoking the update of observers.


      var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
      // might affect dimensions of observed elements.

      var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

      var mutationObserverSupported = typeof MutationObserver !== 'undefined';
      /**
       * Singleton controller class which handles updates of ResizeObserver instances.
       */

      var ResizeObserverController =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
          /**
           * Indicates whether DOM listeners have been added.
           *
           * @private {boolean}
           */
          this.connected_ = false;
          /**
           * Tells that controller has subscribed for Mutation Events.
           *
           * @private {boolean}
           */

          this.mutationEventsAdded_ = false;
          /**
           * Keeps reference to the instance of MutationObserver.
           *
           * @private {MutationObserver}
           */

          this.mutationsObserver_ = null;
          /**
           * A list of connected observers.
           *
           * @private {Array<ResizeObserverSPI>}
           */

          this.observers_ = [];
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */


        ResizeObserverController.prototype.addObserver = function (observer) {
          if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
          } // Add listeners if they haven't been added yet.


          if (!this.connected_) {
            this.connect_();
          }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */


        ResizeObserverController.prototype.removeObserver = function (observer) {
          var observers = this.observers_;
          var index = observers.indexOf(observer); // Remove observer if it's present in registry.

          if (~index) {
            observers.splice(index, 1);
          } // Remove listeners if controller has no connected observers.


          if (!observers.length && this.connected_) {
            this.disconnect_();
          }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */


        ResizeObserverController.prototype.refresh = function () {
          var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
          // be future ones caused by CSS transitions.

          if (changesDetected) {
            this.refresh();
          }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */


        ResizeObserverController.prototype.updateObservers_ = function () {
          // Collect observers that have active observations.
          var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
          }); // Deliver notifications in a separate cycle in order to avoid any
          // collisions between observers, e.g. when multiple instances of
          // ResizeObserver are tracking the same element and the callback of one
          // of them changes content dimensions of the observed target. Sometimes
          // this may result in notifications being blocked for the rest of observers.

          activeObservers.forEach(function (observer) {
            return observer.broadcastActive();
          });
          return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.connect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already added.
          if (!isBrowser || this.connected_) {
            return;
          } // Subscription to the "Transitionend" event is used as a workaround for
          // delayed transitions. This way it's possible to capture at least the
          // final state of an element.


          document.addEventListener('transitionend', this.onTransitionEnd_);
          window.addEventListener('resize', this.refresh);

          if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
          }

          this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.disconnect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already removed.
          if (!isBrowser || !this.connected_) {
            return;
          }

          document.removeEventListener('transitionend', this.onTransitionEnd_);
          window.removeEventListener('resize', this.refresh);

          if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
          }

          if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
          }

          this.mutationsObserver_ = null;
          this.mutationEventsAdded_ = false;
          this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */


        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
          var _b = _a.propertyName,
              propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

          var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
          });

          if (isReflowProperty) {
            this.refresh();
          }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */


        ResizeObserverController.getInstance = function () {
          if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
          }

          return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */


        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
      }();
      /**
       * Defines non-writable/enumerable properties of the provided target object.
       *
       * @param {Object} target - Object for which to define properties.
       * @param {Object} props - Properties to be defined.
       * @returns {Object} Target object.
       */


      var defineConfigurable = function defineConfigurable(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key = _a[_i];
          Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }

        return target;
      };
      /**
       * Returns the global object associated with provided element.
       *
       * @param {Object} target
       * @returns {Object}
       */


      var getWindowOf = function getWindowOf(target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
        // provided element.

        return ownerGlobal || global$1;
      }; // Placeholder of an empty content rectangle.


      var emptyRect = createRectInit(0, 0, 0, 0);
      /**
       * Converts provided string to a number.
       *
       * @param {number|string} value
       * @returns {number}
       */

      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      /**
       * Extracts borders size from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @param {...string} positions - Borders positions (top, right, ...)
       * @returns {number}
       */


      function getBordersSize(styles) {
        var positions = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }

        return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];
          return size + toFloat(value);
        }, 0);
      }
      /**
       * Extracts paddings sizes from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @returns {Object} Paddings box.
       */


      function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position = positions_1[_i];
          var value = styles['padding-' + position];
          paddings[position] = toFloat(value);
        }

        return paddings;
      }
      /**
       * Calculates content rectangle of provided SVG element.
       *
       * @param {SVGGraphicsElement} target - Element content rectangle of which needs
       *      to be calculated.
       * @returns {DOMRectInit}
       */


      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      /**
       * Calculates content rectangle of provided HTMLElement.
       *
       * @param {HTMLElement} target - Element for which to calculate the content rectangle.
       * @returns {DOMRectInit}
       */


      function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth,
            clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.

        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.

        var width = toFloat(styles.width),
            height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).

        if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
          }
        } // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.


        if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.

          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
      }
      /**
       * Checks whether provided element is an instance of the SVGGraphicsElement.
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      var isSVGGraphicsElement = function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        } // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens


        return function (target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
        };
      }();
      /**
       * Checks whether provided element is a document element (<html>).
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      /**
       * Calculates an appropriate content rectangle for provided html or svg element.
       *
       * @param {Element} target - Element content rectangle of which needs to be calculated.
       * @returns {DOMRectInit}
       */


      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
      }
      /**
       * Creates rectangle with an interface of the DOMRectReadOnly.
       * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
       *
       * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
       * @returns {DOMRectReadOnly}
       */


      function createReadOnlyRect(_a) {
        var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

        defineConfigurable(rect, {
          x: x,
          y: y,
          width: width,
          height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
        });
        return rect;
      }
      /**
       * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
       * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
       *
       * @param {number} x - X coordinate.
       * @param {number} y - Y coordinate.
       * @param {number} width - Rectangle's width.
       * @param {number} height - Rectangle's height.
       * @returns {DOMRectInit}
       */


      function createRectInit(x, y, width, height) {
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      }
      /**
       * Class that is responsible for computations of the content rectangle of
       * provided DOM element and for keeping track of it's changes.
       */


      var ResizeObservation =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
          /**
           * Broadcasted width of content rectangle.
           *
           * @type {number}
           */
          this.broadcastWidth = 0;
          /**
           * Broadcasted height of content rectangle.
           *
           * @type {number}
           */

          this.broadcastHeight = 0;
          /**
           * Reference to the last observed content rectangle.
           *
           * @private {DOMRectInit}
           */

          this.contentRect_ = createRectInit(0, 0, 0, 0);
          this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */


        ResizeObservation.prototype.isActive = function () {
          var rect = getContentRect(this.target);
          this.contentRect_ = rect;
          return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */


        ResizeObservation.prototype.broadcastRect = function () {
          var rect = this.contentRect_;
          this.broadcastWidth = rect.width;
          this.broadcastHeight = rect.height;
          return rect;
        };

        return ResizeObservation;
      }();

      var ResizeObserverEntry =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
          var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
          // and are also not enumerable in the native implementation.
          //
          // Property accessors are not being used as they'd require to define a
          // private WeakMap storage which may cause memory leaks in browsers that
          // don't support this type of collections.

          defineConfigurable(this, {
            target: target,
            contentRect: contentRect
          });
        }

        return ResizeObserverEntry;
      }();

      var ResizeObserverSPI =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
          /**
           * Collection of resize observations that have detected changes in dimensions
           * of elements.
           *
           * @private {Array<ResizeObservation>}
           */
          this.activeObservations_ = [];
          /**
           * Registry of the ResizeObservation instances.
           *
           * @private {Map<Element, ResizeObservation>}
           */

          this.observations_ = new MapShim();

          if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
          }

          this.callback_ = callback;
          this.controller_ = controller;
          this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.observe = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is already being observed.

          if (observations.has(target)) {
            return;
          }

          observations.set(target, new ResizeObservation(target));
          this.controller_.addObserver(this); // Force the update of observations.

          this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.unobserve = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is not being observed.

          if (!observations.has(target)) {
            return;
          }

          observations["delete"](target);

          if (!observations.size) {
            this.controller_.removeObserver(this);
          }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.disconnect = function () {
          this.clearActive();
          this.observations_.clear();
          this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.gatherActive = function () {
          var _this = this;

          this.clearActive();
          this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
              _this.activeObservations_.push(observation);
            }
          });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.broadcastActive = function () {
          // Do nothing if observer doesn't have active observations.
          if (!this.hasActive()) {
            return;
          }

          var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

          var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
          });
          this.callback_.call(ctx, entries, ctx);
          this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */


        ResizeObserverSPI.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        };

        return ResizeObserverSPI;
      }(); // Registry of internal observers. If WeakMap is not available use current shim
      // for the Map collection as it has all required methods and because WeakMap
      // can't be fully polyfilled anyway.


      var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
      /**
       * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
       * exposing only those methods and properties that are defined in the spec.
       */

      var ResizeObserver =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
          if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
          }

          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          }

          var controller = ResizeObserverController.getInstance();
          var observer = new ResizeObserverSPI(callback, controller, this);
          observers.set(this, observer);
        }

        return ResizeObserver;
      }(); // Expose public methods of ResizeObserver.


      ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
          var _a;

          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });

      var index = function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
        }

        return ResizeObserver;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = index;
      /***/
    },

    /***/
    "k9H9":
    /*!**************************************************************!*\
      !*** ./node_modules/ngx-y2-player/fesm2015/ngx-y2-player.js ***!
      \**************************************************************/

    /*! exports provided: NgxY2PlayerComponent, NgxY2PlayerModule, Y2PlayerService, getIdFromYoutubeUrl */

    /***/
    function k9H9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxY2PlayerComponent", function () {
        return NgxY2PlayerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxY2PlayerModule", function () {
        return NgxY2PlayerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y2PlayerService", function () {
        return Y2PlayerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIdFromYoutubeUrl", function () {
        return getIdFromYoutubeUrl;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "bdgK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Y2PlayerService = /*#__PURE__*/function () {
        /**
         * @param {?} platformId
         * @param {?} rendererFactory
         */
        function Y2PlayerService(platformId, rendererFactory) {
          _classCallCheck(this, Y2PlayerService);

          this.platformId = platformId;
          this.rendererFactory = rendererFactory;
          this.isLoadApi = false;
          this.loadComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this._render = this.rendererFactory.createRenderer(null, null);
        }
        /**
         * @return {?}
         */


        _createClass(Y2PlayerService, [{
          key: "ready",
          value: function ready() {
            return this.loadComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              return state === true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
          /**
           * @param {?} elm
           * @return {?}
           */

        }, {
          key: "loadY2Api",
          value: function loadY2Api(elm) {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var id = _this2.createVideoId();

              _this2._render.setAttribute(elm, 'id', id); // if this api is not load, load this api


              if (!_this2.isLoadApi) {
                _this2.isLoadApi = true;
                /** @type {?} */

                var tag = _this2._render.createElement('script');

                _this2._render.setAttribute(tag, 'src', 'https://www.youtube.com/player_api');
                /** @type {?} */


                var firstScriptTag = _this2._render.selectRootElement('script');

                _this2._render.insertBefore(firstScriptTag.parentNode, tag, firstScriptTag);

                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(_this2.platformId)) {
                  window['onYouTubeIframeAPIReady'] =
                  /**
                  * @return {?}
                  */
                  function () {
                    // console.log('api load!');
                    _this2.loadComplete.next(true);
                  };
                }
              }

              return id;
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "createVideoId",
          value: function createVideoId() {
            /** @type {?} */
            var len = 7;
            return Math.random().toString(35).substr(2, len);
          }
        }]);

        return Y2PlayerService;
      }();

      Y2PlayerService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }];
      /** @nocollapse */

      Y2PlayerService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
        }];
      };
      /** @nocollapse */


      Y2PlayerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"])({
        factory: function Y2PlayerService_Factory() {
          return new Y2PlayerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]));
        },
        token: Y2PlayerService,
        providedIn: "root"
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * An observable creator for element resize.
       * @param {?} elm the watch element.
       * @param {?} cb when resize complete, call back function.
       * @param {?=} time resize emit time, default is 200
       * @return {?}
       */

      function resizeObservable(elm, cb) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

        /** @type {?} */
        var elmObserve$;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          elmObserve$ = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"](
          /**
          * @param {?} entries
          * @param {?} obs
          * @return {?}
          */
          function (entries, obs) {
            observer.next(elmObserve$);
          });
          elmObserve$.observe(elm);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(time), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
        /**
        * @return {?}
        */
        function () {
          return cb();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(
        /**
        * @return {?}
        */
        function () {
          elmObserve$.unobserve(elm);
          elmObserve$.disconnect();
        }));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url

      /**
       * @param {?} url
       * @return {?}
       */


      function getIdFromYoutubeUrl(url) {
        /** @type {?} */
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        /** @type {?} */

        var match = url.match(regExp);
        return match && match[7].length === 11 ? match[7] : '';
      }
      /** @type {?} */


      var defaultRatio = 9 / 16;

      var NgxY2PlayerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} _y2
         * @param {?} _elm
         * @param {?} _render
         * @param {?} _zoun
         * @param {?} platformId
         */
        function NgxY2PlayerComponent(_y2, _elm, _render, _zoun, platformId) {
          _classCallCheck(this, NgxY2PlayerComponent);

          this._y2 = _y2;
          this._elm = _elm;
          this._render = _render;
          this._zoun = _zoun;
          this.platformId = platformId;
          this.onReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onPlaybackQualityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onPlaybackRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onApiChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.initHeight = 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NgxY2PlayerComponent, [{
          key: "videoUrl",
          set: function set(value) {
            if (value instanceof Array) {
              this.videoId = value.map(
              /**
              * @param {?} v
              * @return {?}
              */
              function (v) {
                return getIdFromYoutubeUrl(v);
              });
            } else {
              this.videoId = getIdFromYoutubeUrl(value);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "videoId",
          get: function get() {
            return this._videoId;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._videoId = value;

            if (this.videoPlayer) {
              if (this.videoPlayer.getPlayerState() === 1
              /* PLAYING */
              ) {
                  if (value instanceof Array) {
                    this.videoPlayer.loadPlaylist(value);
                  } else {
                    this.videoPlayer.loadVideoById(value);
                  }
                } else {
                if (value instanceof Array) {
                  this.videoPlayer.cuePlaylist(value);
                } else {
                  this.videoPlayer.cueVideoById(value);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "isAutoSize",
          get: function get() {
            return this.playerOptions.width === 'auto' || this.playerOptions.height === 'auto';
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.containerElm) {
              this.initHeight = this.containerElm.offsetHeight;
            }

            this.setInitStyle();

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
              return;
            }

            this.loadYoutube().subscribe();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
              return;
            }

            if (this.resize$) {
              this.resize$.unsubscribe();
            }

            if (this.videoPlayer) {
              this.videoPlayer.destroy();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setInitStyle",
          value: function setInitStyle() {
            if (this.isAutoSize) {
              this.setAutoSize();
            } else {
              this._render.setStyle(this._elm.nativeElement, 'width', "".concat(this.playerOptions.width, "px"));

              this._render.setStyle(this._elm.nativeElement, 'height', "".concat(this.playerOptions.height, "px"));
            }

            this._render.setStyle(this._elm.nativeElement, 'background-size', 'cover');

            this._render.setStyle(this._elm.nativeElement, 'background-position', 'center');

            if (this.playerOptions.thumbnail) {
              /** @type {?} */
              var id = this.videoId instanceof Array ? this.videoId[0] : this.videoId;

              this._render.setStyle(this._elm.nativeElement, 'background-image', "url('https://img.youtube.com/vi/".concat(id, "/").concat(this.playerOptions.thumbnail, "')"));
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setAutoSize",
          value: function setAutoSize() {
            if (+this.initHeight !== 0) {
              /** @type {?} */
              var width = this.initHeight / (this.playerOptions.aspectRatio || defaultRatio);

              if (!this.containerElm.offsetWidth || width < this.containerElm.offsetWidth) {
                this._render.setStyle(this._elm.nativeElement, 'height', "".concat(this.initHeight, "px"));

                this._render.setStyle(this._elm.nativeElement, 'width', "".concat(width, "px"));

                return;
              }
            }

            this._render.setStyle(this._elm.nativeElement, 'height', 0);

            this._render.setStyle(this._elm.nativeElement, 'padding-bottom', "".concat(100 * (this.playerOptions.aspectRatio || defaultRatio), "%"));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "loadYoutube",
          value: function loadYoutube() {
            var _this3 = this;

            return this._y2.loadY2Api(this._elm.nativeElement).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this3._y2.ready().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              /** @type {?} */
              var width;
              /** @type {?} */

              var height;

              if (_this3.isAutoSize) {
                var _this3$getNowWidthAnd = _this3.getNowWidthAndHeight();

                width = _this3$getNowWidthAnd.width;
                height = _this3$getNowWidthAnd.height;
                _this3.resize$ = resizeObservable(_this3.containerElm,
                /**
                * @return {?}
                */
                function () {
                  if (_this3.videoPlayer) {
                    var _this3$getNowWidthAnd2 = _this3.getNowWidthAndHeight();

                    width = _this3$getNowWidthAnd2.width;
                    height = _this3$getNowWidthAnd2.height;

                    _this3.videoPlayer.setSize(width, height);
                  }
                }, // default time is 200
                _this3.playerOptions.resizeDebounceTime !== undefined ? _this3.playerOptions.resizeDebounceTime : 200).subscribe();
              } else {
                width = _this3.playerOptions.width;
                height = _this3.playerOptions.height;
              }

              return {
                id: id,
                width: width,
                height: height
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref) {
              var id = _ref.id,
                  width = _ref.width,
                  height = _ref.height;

              /** @type {?} */
              var option = {
                width: width,
                height: height,
                playerVars: _this3.playerOptions.playerVars || {}
              };

              if (_this3.playerOptions.host) {
                option.host = _this3.playerOptions.host;
              }

              if (_this3.videoId instanceof Array) {
                option.playerVars.listType = 'player';
              } else {
                option.videoId = _this3.videoId;
              }

              _this3.videoPlayer = new YT.Player(id, option);
              _this3.iframeElement = _this3.videoPlayer.getIframe();

              _this3._render.setStyle(_this3.iframeElement, 'background-size', 'cover');

              _this3._render.setStyle(_this3.iframeElement, 'background-position', 'center');

              _this3.checkAddAllYTEvent();
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkAddAllYTEvent",
          value: function checkAddAllYTEvent() {
            var _this4 = this;

            // check ready event
            this.videoPlayer.addEventListener('onReady',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this4._render.removeStyle(_this4.iframeElement, 'padding-bottom');

              _this4._render.removeStyle(_this4.iframeElement, 'width');

              _this4._render.removeStyle(_this4.iframeElement, 'height');

              _this4._render.removeStyle(_this4.iframeElement, 'background-image');

              _this4._render.removeStyle(_this4.iframeElement, 'background-size');

              _this4._render.removeStyle(_this4.iframeElement, 'background-position');

              if (_this4.onReady.observers.length > 0) {
                // run in zone
                _this4._zoun.run(
                /**
                * @return {?}
                */
                function () {
                  return _this4.onReady.emit(e);
                });
              }

              if (_this4.videoId instanceof Array) {
                if (_this4.playerOptions.playerVars) {
                  if (_this4.playerOptions.playerVars.autoplay) {
                    _this4.videoPlayer.loadPlaylist(_this4.videoId);
                  } else {
                    _this4.videoPlayer.cuePlaylist(_this4.videoId);
                  }
                }
              }
            }); // check other event

            ['onStateChange', 'onPlaybackQualityChange', 'onPlaybackRateChange', 'onError', 'onApiChange'].forEach(
            /**
            * @param {?} eventId
            * @return {?}
            */
            function (eventId) {
              // check this output has bind event
              if (_this4[eventId].observers.length > 0) {
                // if true, bind event
                _this4.videoPlayer.addEventListener(eventId,
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  // run in zone
                  _this4._zoun.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this4[eventId].emit(e);
                  });
                });
              }
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getNowWidthAndHeight",
          value: function getNowWidthAndHeight() {
            /** @type {?} */
            var aspectRation = this.playerOptions.aspectRatio || defaultRatio;
            /** @type {?} */

            var width = this.containerElm.offsetWidth;
            /** @type {?} */

            var height = width * aspectRation;

            if (this.initHeight !== 0 && height > this.initHeight) {
              height = this.initHeight;
              width = height / aspectRation;
            } // when height is bigger than window height


            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId) && height > window.innerHeight) {
              height = window.innerHeight;
              width = window.innerWidth;
            }

            return {
              width: width,
              height: height
            };
          }
        }]);

        return NgxY2PlayerComponent;
      }();

      NgxY2PlayerComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-y2-player',
          template: "",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [":host{display:block;width:100%;background:black}"]
        }]
      }];
      /** @nocollapse */

      NgxY2PlayerComponent.ctorParameters = function () {
        return [{
          type: Y2PlayerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      NgxY2PlayerComponent.propDecorators = {
        playerOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['playerOptions']
        }],
        containerElm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['container']
        }],
        videoUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['videoUrl']
        }],
        videoId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['videoId']
        }],
        onReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['ready']
        }],
        onStateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['stateChange']
        }],
        onPlaybackQualityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['playbackQualityChange']
        }],
        onPlaybackRateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['playbackRateChange']
        }],
        onError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['error']
        }],
        onApiChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['apiChange']
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var NgxY2PlayerModule = function NgxY2PlayerModule() {
        _classCallCheck(this, NgxY2PlayerModule);
      };

      NgxY2PlayerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          declarations: [NgxY2PlayerComponent],
          exports: [NgxY2PlayerComponent]
        }]
      }]; //# sourceMappingURL=ngx-y2-player.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17-es5.js.map