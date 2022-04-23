(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
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
        }).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return [decodeURIComponent(key), decodeURIComponent(value)];
        }).filter(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              key = _ref4[0];

          return startsWith(key, IONIC_PREFIX);
        }).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          return [key.slice(IONIC_PREFIX.length), value];
        }).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              key = _ref8[0],
              value = _ref8[1];

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

    },

    /***/
    "Q2Bp":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js ***!
      \*****************************************************************/

    /*! exports provided: ion_backdrop */

    /***/
    function Q2Bp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_backdrop", function () {
        return Backdrop;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gesture-controller-31cb6bb9.js */
      "y08P");

      var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
      var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

      var Backdrop = /*#__PURE__*/function () {
        function Backdrop(hostRef) {
          _classCallCheck(this, Backdrop);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionBackdropTap = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBackdropTap", 7);
          this.blocker = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__["G"].createBlocker({
            disableScroll: true
          });
          /**
           * If `true`, the backdrop will be visible.
           */

          this.visible = true;
          /**
           * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
           */

          this.tappable = true;
          /**
           * If `true`, the backdrop will stop propagation on tap.
           */

          this.stopPropagation = true;
        }

        _createClass(Backdrop, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            if (this.stopPropagation) {
              this.blocker.block();
            }
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.blocker.unblock();
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(ev) {
            this.emitTap(ev);
          }
        }, {
          key: "emitTap",
          value: function emitTap(ev) {
            if (this.stopPropagation) {
              ev.preventDefault();
              ev.stopPropagation();
            }

            if (this.tappable) {
              this.ionBackdropTap.emit();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _class;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              tabindex: "-1",
              "aria-hidden": "true",
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'backdrop-hide', !this.visible), _defineProperty(_class, 'backdrop-no-tappable', !this.tappable), _class)
            });
          }
        }]);

        return Backdrop;
      }();

      Backdrop.style = {
        ios: backdropIosCss,
        md: backdropMdCss
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
//# sourceMappingURL=9-es5.js.map