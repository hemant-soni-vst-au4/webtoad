(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
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
    "bC4P":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-eea9a7a9.js ***!
      \********************************************************************/

    /*! exports provided: g */

    /***/
    function bC4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getTimeGivenProgression;
      });
      /**
       * Based on:
       * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
       * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
       * TODO: Reduce rounding error
       */

      /**
       * EXPERIMENTAL
       * Given a cubic-bezier curve, get the x value (time) given
       * the y value (progression).
       * Ex: cubic-bezier(0.32, 0.72, 0, 1);
       * P0: (0, 0)
       * P1: (0.32, 0.72)
       * P2: (0, 1)
       * P3: (1, 1)
       *
       * If you give a cubic bezier curve that never reaches the
       * provided progression, this function will return an empty array.
       */


      var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
        return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(function (tValue) {
          return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
        });
      };
      /**
       * Solve a cubic equation in one dimension (time)
       */


      var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
        var partA = 3 * p1 * Math.pow(t - 1, 2);
        var partB = -3 * p2 * t + 3 * p2 + p3 * t;
        var partC = p0 * Math.pow(t - 1, 3);
        return t * (partA + t * partB) - partC;
      };
      /**
       * Find the `t` value for a cubic bezier using Cardano's formula
       */


      var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
        p0 -= refPoint;
        p1 -= refPoint;
        p2 -= refPoint;
        p3 -= refPoint;
        var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
        return roots.filter(function (root) {
          return root >= 0 && root <= 1;
        });
      };

      var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
        var discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
          return [];
        } else {
          return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
        }
      };

      var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
        if (a === 0) {
          return solveQuadraticEquation(b, c, d);
        }

        b /= a;
        c /= a;
        d /= a;
        var p = (3 * c - b * b) / 3;
        var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

        if (p === 0) {
          return [Math.pow(-q, 1 / 3)];
        } else if (q === 0) {
          return [Math.sqrt(-p), -Math.sqrt(-p)];
        }

        var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

        if (discriminant === 0) {
          return [Math.pow(q / 2, 1 / 2) - b / 3];
        } else if (discriminant > 0) {
          return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
        }

        var r = Math.sqrt(Math.pow(-(p / 3), 3));
        var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
        var s = 2 * Math.pow(r, 1 / 3);
        return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
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
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
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
          return _ref9.apply(this, arguments);
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
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts) {
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
          return _ref10.apply(this, arguments);
        };
      }();

      var animation = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(animationBuilder, opts) {
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
          return _ref11.apply(this, arguments);
        };
      }();

      var noAnimation = /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts) {
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
          return _ref12.apply(this, arguments);
        };
      }();

      var waitForReady = /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(opts, defaultDeep) {
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
          return _ref13.apply(this, arguments);
        };
      }();

      var notifyViewReady = /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(viewIsReady, enteringEl) {
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
          return _ref14.apply(this, arguments);
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
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(el) {
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
          return _ref15.apply(this, arguments);
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
    "vnES":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_nav, ion_nav_link */

    /***/
    function vnES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_nav", function () {
        return Nav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_nav_link", function () {
        return NavLink;
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


      var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cubic-bezier-eea9a7a9.js */
      "bC4P");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index-c3ff7f2e.js */
      "k4ps");
      /* harmony import */


      var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./framework-delegate-4392cd63.js */
      "acej");

      var VIEW_STATE_NEW = 1;
      var VIEW_STATE_ATTACHED = 2;
      var VIEW_STATE_DESTROYED = 3;

      var ViewController = /*#__PURE__*/function () {
        function ViewController(component, params) {
          _classCallCheck(this, ViewController);

          this.component = component;
          this.params = params;
          this.state = VIEW_STATE_NEW;
        }

        _createClass(ViewController, [{
          key: "init",
          value: function () {
            var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(container) {
              var component;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.state = VIEW_STATE_ATTACHED;

                      if (this.element) {
                        _context8.next = 6;
                        break;
                      }

                      component = this.component;
                      _context8.next = 5;
                      return Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);

                    case 5:
                      this.element = _context8.sent;

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function init(_x11) {
              return _init.apply(this, arguments);
            }

            return init;
          }()
          /**
           * DOM WRITE
           */

        }, {
          key: "_destroy",
          value: function _destroy() {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
            var element = this.element;

            if (element) {
              if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
              } else {
                element.remove();
              }
            }

            this.nav = undefined;
            this.state = VIEW_STATE_DESTROYED;
          }
        }]);

        return ViewController;
      }();

      var matches = function matches(view, id, params) {
        if (!view) {
          return false;
        }

        if (view.component !== id) {
          return false;
        }

        var currentParams = view.params;

        if (currentParams === params) {
          return true;
        }

        if (!currentParams && !params) {
          return true;
        }

        if (!currentParams || !params) {
          return false;
        }

        var keysA = Object.keys(currentParams);
        var keysB = Object.keys(params);

        if (keysA.length !== keysB.length) {
          return false;
        } // Test for A's keys different from B.


        for (var _i2 = 0, _keysA = keysA; _i2 < _keysA.length; _i2++) {
          var key = _keysA[_i2];

          if (currentParams[key] !== params[key]) {
            return false;
          }
        }

        return true;
      };

      var convertToView = function convertToView(page, params) {
        if (!page) {
          return null;
        }

        if (page instanceof ViewController) {
          return page;
        }

        return new ViewController(page, params);
      };

      var convertToViews = function convertToViews(pages) {
        return pages.map(function (page) {
          if (page instanceof ViewController) {
            return page;
          }

          if ('component' in page) {
            /**
             * TODO Ionic 6:
             * Consider switching to just using `undefined` here
             * as well as on the public interfaces and on
             * `NavComponentWithProps`. Previously `pages` was
             * of type `any[]` so TypeScript did not catch this.
             */
            return convertToView(page.component, page.componentProps === null ? undefined : page.componentProps);
          }

          return convertToView(page, undefined);
        }).filter(function (v) {
          return v !== null;
        });
      };

      var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

      var Nav = /*#__PURE__*/function () {
        function Nav(hostRef) {
          _classCallCheck(this, Nav);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionNavWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillLoad", 7);
          this.ionNavWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillChange", 3);
          this.ionNavDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavDidChange", 3);
          this.transInstr = [];
          this.animationEnabled = true;
          this.useRouter = false;
          this.isTransitioning = false;
          this.destroyed = false;
          this.views = [];
          /**
           * If `true`, the nav should animate the transition of components.
           */

          this.animated = true;
        }

        _createClass(Nav, [{
          key: "swipeGestureChanged",
          value: function swipeGestureChanged() {
            if (this.gesture) {
              this.gesture.enable(this.swipeGesture === true);
            }
          }
        }, {
          key: "rootChanged",
          value: function rootChanged() {
            if (this.root !== undefined) {
              if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
              }
            }
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');

            if (this.swipeGesture === undefined) {
              var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
              this.swipeGesture = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('swipeBackEnabled', mode === 'ios');
            }

            this.ionNavWillLoad.emit();
          }
        }, {
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.rootChanged();
                      _context9.next = 3;
                      return Promise.all(
                      /*! import() | swipe-back-ee838cf8-js */
                      [__webpack_require__.e(2), __webpack_require__.e("swipe-back-ee838cf8-js")]).then(__webpack_require__.bind(null,
                      /*! ./swipe-back-ee838cf8.js */
                      "IYAk"));

                    case 3:
                      this.gesture = _context9.sent.createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                      this.swipeGestureChanged();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function componentDidLoad() {
              return _componentDidLoad.apply(this, arguments);
            }

            return componentDidLoad;
          }()
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var _iterator = _createForOfIteratorHelper(this.views),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var view = _step.value;
                Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["l"])(view.element, _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["d"]);

                view._destroy();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            } // release swipe back gesture and transition


            this.transInstr.length = this.views.length = 0;
            this.destroyed = true;
          }
          /**
           * Push a new component onto the current navigation stack. Pass any additional
           * information along as an object. This additional information is accessible
           * through NavParams.
           *
           * @param component The component to push onto the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "push",
          value: function push(component, componentProps, opts, done) {
            return this.queueTrns({
              insertStart: -1,
              insertViews: [{
                component: component,
                componentProps: componentProps
              }],
              opts: opts
            }, done);
          }
          /**
           * Inserts a component into the navigation stack at the specified index.
           * This is useful to add a component at any point in the navigation stack.
           *
           * @param insertIndex The index to insert the component at in the stack.
           * @param component The component to insert into the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "insert",
          value: function insert(insertIndex, component, componentProps, opts, done) {
            return this.queueTrns({
              insertStart: insertIndex,
              insertViews: [{
                component: component,
                componentProps: componentProps
              }],
              opts: opts
            }, done);
          }
          /**
           * Inserts an array of components into the navigation stack at the specified index.
           * The last component in the array will become instantiated as a view, and animate
           * in to become the active view.
           *
           * @param insertIndex The index to insert the components at in the stack.
           * @param insertComponents The components to insert into the navigation stack.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "insertPages",
          value: function insertPages(insertIndex, insertComponents, opts, done) {
            return this.queueTrns({
              insertStart: insertIndex,
              insertViews: insertComponents,
              opts: opts
            }, done);
          }
          /**
           * Pop a component off of the navigation stack. Navigates back from the current
           * component.
           *
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "pop",
          value: function pop(opts, done) {
            return this.queueTrns({
              removeStart: -1,
              removeCount: 1,
              opts: opts
            }, done);
          }
          /**
           * Pop to a specific index in the navigation stack.
           *
           * @param indexOrViewCtrl The index or view controller to pop to.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "popTo",
          value: function popTo(indexOrViewCtrl, opts, done) {
            var tiConfig = {
              removeStart: -1,
              removeCount: -1,
              opts: opts
            };

            if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
              tiConfig.removeView = indexOrViewCtrl;
              tiConfig.removeStart = 1;
            } else if (typeof indexOrViewCtrl === 'number') {
              tiConfig.removeStart = indexOrViewCtrl + 1;
            }

            return this.queueTrns(tiConfig, done);
          }
          /**
           * Navigate back to the root of the stack, no matter how far back that is.
           *
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "popToRoot",
          value: function popToRoot(opts, done) {
            return this.queueTrns({
              removeStart: 1,
              removeCount: -1,
              opts: opts
            }, done);
          }
          /**
           * Removes a component from the navigation stack at the specified index.
           *
           * @param startIndex The number to begin removal at.
           * @param removeCount The number of components to remove.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "removeIndex",
          value: function removeIndex(startIndex) {
            var removeCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var opts = arguments.length > 2 ? arguments[2] : undefined;
            var done = arguments.length > 3 ? arguments[3] : undefined;
            return this.queueTrns({
              removeStart: startIndex,
              removeCount: removeCount,
              opts: opts
            }, done);
          }
          /**
           * Set the root for the current navigation stack to a component.
           *
           * @param component The component to set as the root of the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "setRoot",
          value: function setRoot(component, componentProps, opts, done) {
            return this.setPages([{
              component: component,
              componentProps: componentProps
            }], opts, done);
          }
          /**
           * Set the views of the current navigation stack and navigate to the last view.
           * By default animations are disabled, but they can be enabled by passing options
           * to the navigation controller. Navigation parameters can also be passed to the
           * individual pages in the array.
           *
           * @param views The list of views to set as the navigation stack.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "setPages",
          value: function setPages(views, opts, done) {
            if (opts == null) {
              opts = {};
            } // if animation wasn't set to true then default it to NOT animate


            if (opts.animated !== true) {
              opts.animated = false;
            }

            return this.queueTrns({
              insertStart: 0,
              insertViews: views,
              removeStart: 0,
              removeCount: -1,
              opts: opts
            }, done);
          }
          /** @internal */

        }, {
          key: "setRouteId",
          value: function setRouteId(id, params, direction, animation) {
            var active = this.getActiveSync();

            if (matches(active, id, params)) {
              return Promise.resolve({
                changed: false,
                element: active.element
              });
            }

            var resolve;
            var promise = new Promise(function (r) {
              return resolve = r;
            });
            var finish;
            var commonOpts = {
              updateURL: false,
              viewIsReady: function viewIsReady(enteringEl) {
                var mark;
                var p = new Promise(function (r) {
                  return mark = r;
                });
                resolve({
                  changed: true,
                  element: enteringEl,
                  markVisible: function () {
                    var _markVisible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              mark();
                              _context10.next = 3;
                              return finish;

                            case 3:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    function markVisible() {
                      return _markVisible.apply(this, arguments);
                    }

                    return markVisible;
                  }()
                });
                return p;
              }
            };

            if (direction === 'root') {
              finish = this.setRoot(id, params, commonOpts);
            } else {
              var viewController = this.views.find(function (v) {
                return matches(v, id, params);
              });

              if (viewController) {
                finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
                  direction: 'back',
                  animationBuilder: animation
                }));
              } else if (direction === 'forward') {
                finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), {
                  animationBuilder: animation
                }));
              } else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
                  direction: 'back',
                  animated: true,
                  animationBuilder: animation
                }));
              }
            }

            return promise;
          }
          /** @internal */

        }, {
          key: "getRouteId",
          value: function () {
            var _getRouteId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var active;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      active = this.getActiveSync();
                      return _context11.abrupt("return", active ? {
                        id: active.element.tagName,
                        params: active.params,
                        element: active.element
                      } : undefined);

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function getRouteId() {
              return _getRouteId.apply(this, arguments);
            }

            return getRouteId;
          }()
          /**
           * Get the active view.
           */

        }, {
          key: "getActive",
          value: function getActive() {
            return Promise.resolve(this.getActiveSync());
          }
          /**
           * Get the view at the specified index.
           *
           * @param index The index of the view.
           */

        }, {
          key: "getByIndex",
          value: function getByIndex(index) {
            return Promise.resolve(this.views[index]);
          }
          /**
           * Returns `true` if the current view can go back.
           *
           * @param view The view to check.
           */

        }, {
          key: "canGoBack",
          value: function canGoBack(view) {
            return Promise.resolve(this.canGoBackSync(view));
          }
          /**
           * Get the previous view.
           *
           * @param view The view to get.
           */

        }, {
          key: "getPrevious",
          value: function getPrevious(view) {
            return Promise.resolve(this.getPreviousSync(view));
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.views.length;
          }
        }, {
          key: "getActiveSync",
          value: function getActiveSync() {
            return this.views[this.views.length - 1];
          }
        }, {
          key: "canGoBackSync",
          value: function canGoBackSync() {
            var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();
            return !!(view && this.getPreviousSync(view));
          }
        }, {
          key: "getPreviousSync",
          value: function getPreviousSync() {
            var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();

            if (!view) {
              return undefined;
            }

            var views = this.views;
            var index = views.indexOf(view);
            return index > 0 ? views[index - 1] : undefined;
          } // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
          // 1. _nextTrns(): consumes the next transition in the queue
          // 2. _viewInit(): initializes enteringView if required
          // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
          // 4. _postViewInit(): add/remove the views from the navigation stack
          // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
          // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
          // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
          // 8. _transitionFinish(): called once the transition finishes
          // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.

        }, {
          key: "queueTrns",
          value: function () {
            var _queueTrns = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(ti, done) {
              var promise, router, canTransition;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy)) {
                        _context12.next = 2;
                        break;
                      }

                      return _context12.abrupt("return", Promise.resolve(false));

                    case 2:
                      promise = new Promise(function (resolve, reject) {
                        ti.resolve = resolve;
                        ti.reject = reject;
                      });
                      ti.done = done;
                      /**
                       * If using router, check to see if navigation hooks
                       * will allow us to perform this transition. This
                       * is required in order for hooks to work with
                       * the ion-back-button or swipe to go back.
                       */

                      if (!(ti.opts && ti.opts.updateURL !== false && this.useRouter)) {
                        _context12.next = 17;
                        break;
                      }

                      router = document.querySelector('ion-router');

                      if (!router) {
                        _context12.next = 17;
                        break;
                      }

                      _context12.next = 9;
                      return router.canTransition();

                    case 9:
                      canTransition = _context12.sent;

                      if (!(canTransition === false)) {
                        _context12.next = 14;
                        break;
                      }

                      return _context12.abrupt("return", Promise.resolve(false));

                    case 14:
                      if (!(typeof canTransition === 'string')) {
                        _context12.next = 17;
                        break;
                      }

                      router.push(canTransition, ti.opts.direction || 'back');
                      return _context12.abrupt("return", Promise.resolve(false));

                    case 17:
                      // Normalize empty
                      if (ti.insertViews && ti.insertViews.length === 0) {
                        ti.insertViews = undefined;
                      } // Enqueue transition instruction


                      this.transInstr.push(ti); // if there isn't a transition already happening
                      // then this will kick off this transition

                      this.nextTrns();
                      return _context12.abrupt("return", promise);

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function queueTrns(_x12, _x13) {
              return _queueTrns.apply(this, arguments);
            }

            return queueTrns;
          }()
        }, {
          key: "success",
          value: function success(result, ti) {
            if (this.destroyed) {
              this.fireError('nav controller was destroyed', ti);
              return;
            }

            if (ti.done) {
              ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
            }

            ti.resolve(result.hasCompleted);

            if (ti.opts.updateURL !== false && this.useRouter) {
              var router = document.querySelector('ion-router');

              if (router) {
                var direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
              }
            }
          }
        }, {
          key: "failed",
          value: function failed(rejectReason, ti) {
            if (this.destroyed) {
              this.fireError('nav controller was destroyed', ti);
              return;
            }

            this.transInstr.length = 0;
            this.fireError(rejectReason, ti);
          }
        }, {
          key: "fireError",
          value: function fireError(rejectReason, ti) {
            if (ti.done) {
              ti.done(false, false, rejectReason);
            }

            if (ti.reject && !this.destroyed) {
              ti.reject(rejectReason);
            } else {
              ti.resolve(false);
            }
          }
        }, {
          key: "nextTrns",
          value: function nextTrns() {
            // this is the framework's bread 'n butta function
            // only one transition is allowed at any given time
            if (this.isTransitioning) {
              return false;
            } // there is no transition happening right now
            // get the next instruction


            var ti = this.transInstr.shift();

            if (!ti) {
              return false;
            }

            this.runTransition(ti);
            return true;
          }
        }, {
          key: "runTransition",
          value: function () {
            var _runTransition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(ti) {
              var leavingView, enteringView, requiresTransition, isBackDirection, result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      // set that this nav is actively transitioning
                      this.ionNavWillChange.emit();
                      this.isTransitioning = true;
                      this.prepareTI(ti);
                      leavingView = this.getActiveSync();
                      enteringView = this.getEnteringView(ti, leavingView);

                      if (!(!leavingView && !enteringView)) {
                        _context13.next = 8;
                        break;
                      }

                      throw new Error('no views in the stack to be removed');

                    case 8:
                      if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) {
                        _context13.next = 11;
                        break;
                      }

                      _context13.next = 11;
                      return enteringView.init(this.el);

                    case 11:
                      this.postViewInit(enteringView, leavingView, ti); // Needs transition?

                      requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;

                      if (requiresTransition && ti.opts && leavingView) {
                        isBackDirection = ti.opts.direction === 'back';
                        /**
                         * If heading back, use the entering page's animation
                         * unless otherwise specified by the developer.
                         */

                        if (isBackDirection) {
                          ti.opts.animationBuilder = ti.opts.animationBuilder || enteringView && enteringView.animationBuilder;
                        }

                        leavingView.animationBuilder = ti.opts.animationBuilder;
                      }

                      if (!requiresTransition) {
                        _context13.next = 20;
                        break;
                      }

                      _context13.next = 17;
                      return this.transition(enteringView, leavingView, ti);

                    case 17:
                      _context13.t0 = _context13.sent;
                      _context13.next = 21;
                      break;

                    case 20:
                      _context13.t0 = {
                        // transition is not required, so we are already done!
                        // they're inserting/removing the views somewhere in the middle or
                        // beginning, so visually nothing needs to animate/transition
                        // resolve immediately because there's no animation that's happening
                        hasCompleted: true,
                        requiresTransition: false
                      };

                    case 21:
                      result = _context13.t0;
                      this.success(result, ti);
                      this.ionNavDidChange.emit();
                      _context13.next = 29;
                      break;

                    case 26:
                      _context13.prev = 26;
                      _context13.t1 = _context13["catch"](0);
                      this.failed(_context13.t1, ti);

                    case 29:
                      this.isTransitioning = false;
                      this.nextTrns();

                    case 31:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 26]]);
            }));

            function runTransition(_x14) {
              return _runTransition.apply(this, arguments);
            }

            return runTransition;
          }()
        }, {
          key: "prepareTI",
          value: function prepareTI(ti) {
            var viewsLength = this.views.length;
            ti.opts = ti.opts || {};

            if (ti.opts.delegate === undefined) {
              ti.opts.delegate = this.delegate;
            }

            if (ti.removeView !== undefined) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.removeStart !== undefined, 'removeView needs removeStart');
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.removeCount !== undefined, 'removeView needs removeCount');
              var index = this.views.indexOf(ti.removeView);

              if (index < 0) {
                throw new Error('removeView was not found');
              }

              ti.removeStart += index;
            }

            if (ti.removeStart !== undefined) {
              if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
              }

              if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
              }

              ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
            }

            if (ti.insertViews) {
              // allow -1 to be passed in to auto push it on the end
              // and clean up the index if it's larger then the size of the stack
              if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
              }

              ti.enteringRequiresTransition = ti.insertStart === viewsLength;
            }

            var insertViews = ti.insertViews;

            if (!insertViews) {
              return;
            }

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(insertViews.length > 0, 'length can not be zero');
            var viewControllers = convertToViews(insertViews);

            if (viewControllers.length === 0) {
              throw new Error('invalid views to insert');
            } // Check all the inserted view are correct


            var _iterator2 = _createForOfIteratorHelper(viewControllers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var view = _step2.value;
                view.delegate = ti.opts.delegate;
                var nav = view.nav;

                if (nav && nav !== this) {
                  throw new Error('inserted view was already inserted');
                }

                if (view.state === VIEW_STATE_DESTROYED) {
                  throw new Error('inserted view was already destroyed');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            ti.insertViews = viewControllers;
          }
        }, {
          key: "getEnteringView",
          value: function getEnteringView(ti, leavingView) {
            var insertViews = ti.insertViews;

            if (insertViews !== undefined) {
              // grab the very last view of the views to be inserted
              // and initialize it as the new entering view
              return insertViews[insertViews.length - 1];
            }

            var removeStart = ti.removeStart;

            if (removeStart !== undefined) {
              var views = this.views;
              var removeEnd = removeStart + ti.removeCount;

              for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];

                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                  return view;
                }
              }
            }

            return undefined;
          }
        }, {
          key: "postViewInit",
          value: function postViewInit(enteringView, leavingView, ti) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.resolve, 'resolve must be valid');
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.reject, 'reject must be valid');
            var opts = ti.opts;
            var insertViews = ti.insertViews;
            var removeStart = ti.removeStart;
            var removeCount = ti.removeCount;
            var destroyQueue; // there are views to remove

            if (removeStart !== undefined && removeCount !== undefined) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(removeStart >= 0, 'removeStart can not be negative');
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(removeCount >= 0, 'removeCount can not be negative');
              destroyQueue = [];

              for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];

                if (view && view !== enteringView && view !== leavingView) {
                  destroyQueue.push(view);
                }
              } // default the direction to "back"


              opts.direction = opts.direction || 'back';
            }

            var finalBalance = this.views.length + (insertViews !== undefined ? insertViews.length : 0) - (removeCount !== undefined ? removeCount : 0);
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(finalBalance >= 0, 'final balance can not be negative');

            if (finalBalance === 0) {
              console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
              throw new Error('navigation stack needs at least one root page');
            } // At this point the transition can not be rejected, any throw should be an error
            // there are views to insert


            if (insertViews) {
              // add the views to the
              var insertIndex = ti.insertStart;

              var _iterator3 = _createForOfIteratorHelper(insertViews),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _view = _step3.value;
                  this.insertViewAt(_view, insertIndex);
                  insertIndex++;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
              }
            } // if the views to be removed are in the beginning or middle
            // and there is not a view that needs to visually transition out
            // then just destroy them and don't transition anything
            // batch all of lifecycles together
            // let's make sure, callbacks are zoned


            if (destroyQueue && destroyQueue.length > 0) {
              var _iterator4 = _createForOfIteratorHelper(destroyQueue),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _view2 = _step4.value;
                  Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["b"]);
                  Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["c"]);
                  Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
                } // once all lifecycle events has been delivered, we can safely detroy the views

              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(destroyQueue),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _view3 = _step5.value;
                  this.destroyView(_view3);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        }, {
          key: "transition",
          value: function () {
            var _transition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(enteringView, leavingView, ti) {
              var _this = this;

              var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, _yield$Object, hasCompleted;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      // we should animate (duration > 0) if the pushed page is not the first one (startup)
                      // or if it is a portal (modal, actionsheet, etc.)
                      opts = ti.opts;
                      progressCallback = opts.progressAnimation ? function (ani) {
                        return _this.sbAni = ani;
                      } : undefined;
                      mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                      enteringEl = enteringView.element;
                      leavingEl = leavingView && leavingView.element;
                      animationOpts = Object.assign({
                        mode: mode,
                        showGoBack: this.canGoBackSync(enteringView),
                        baseEl: this.el,
                        animationBuilder: this.animation || opts.animationBuilder || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('navAnimation'),
                        progressCallback: progressCallback,
                        animated: this.animated && _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true),
                        enteringEl: enteringEl,
                        leavingEl: leavingEl
                      }, opts);
                      _context14.next = 8;
                      return Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["t"])(animationOpts);

                    case 8:
                      _yield$Object = _context14.sent;
                      hasCompleted = _yield$Object.hasCompleted;
                      return _context14.abrupt("return", this.transitionFinish(hasCompleted, enteringView, leavingView, opts));

                    case 11:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function transition(_x15, _x16, _x17) {
              return _transition.apply(this, arguments);
            }

            return transition;
          }()
        }, {
          key: "transitionFinish",
          value: function transitionFinish(hasCompleted, enteringView, leavingView, opts) {
            var cleanupView = hasCompleted ? enteringView : leavingView;

            if (cleanupView) {
              this.cleanup(cleanupView);
            }

            return {
              hasCompleted: hasCompleted,
              requiresTransition: true,
              enteringView: enteringView,
              leavingView: leavingView,
              direction: opts.direction
            };
          }
        }, {
          key: "insertViewAt",
          value: function insertViewAt(view, index) {
            var views = this.views;
            var existingIndex = views.indexOf(view);

            if (existingIndex > -1) {
              // this view is already in the stack!!
              // move it to its new location
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(view.nav === this, 'view is not part of the nav');
              views.splice(index, 0, views.splice(existingIndex, 1)[0]);
            } else {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(!view.nav, 'nav is used'); // this is a new view to add to the stack
              // create the new entering view

              view.nav = this; // insert the entering view into the correct index in the stack

              views.splice(index, 0, view);
            }
          }
        }, {
          key: "removeView",
          value: function removeView(view) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
            var views = this.views;
            var index = views.indexOf(view);
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(index > -1, 'view must be part of the stack');

            if (index >= 0) {
              views.splice(index, 1);
            }
          }
        }, {
          key: "destroyView",
          value: function destroyView(view) {
            view._destroy();

            this.removeView(view);
          }
          /**
           * DOM WRITE
           */

        }, {
          key: "cleanup",
          value: function cleanup(activeView) {
            // ok, cleanup time!! Destroy all of the views that are
            // INACTIVE and come after the active view
            // only do this if the views exist, though
            if (this.destroyed) {
              return;
            }

            var views = this.views;
            var activeViewIndex = views.indexOf(activeView);

            for (var i = views.length - 1; i >= 0; i--) {
              var view = views[i];
              /**
               * When inserting multiple views via insertPages
               * the last page will be transitioned to, but the
               * others will not be. As a result, a DOM element
               * will only be created for the last page inserted.
               * As a result, it is possible to have views in the
               * stack that do not have `view.element` yet.
               */

              var element = view.element;

              if (element) {
                if (i > activeViewIndex) {
                  // this view comes after the active view
                  // let's unload it
                  Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["l"])(element, _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
                  this.destroyView(view);
                } else if (i < activeViewIndex) {
                  // this view comes before the active view
                  // and it is not a portal then ensure it is hidden
                  Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_4__["s"])(element, true);
                }
              }
            }
          }
        }, {
          key: "canStart",
          value: function canStart() {
            return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            this.queueTrns({
              removeStart: -1,
              removeCount: 1,
              opts: {
                direction: 'back',
                progressAnimation: true
              }
            }, undefined);
          }
        }, {
          key: "onMove",
          value: function onMove(stepValue) {
            if (this.sbAni) {
              this.sbAni.progressStep(stepValue);
            }
          }
        }, {
          key: "onEnd",
          value: function onEnd(shouldComplete, stepValue, dur) {
            var _this2 = this;

            if (this.sbAni) {
              this.animationEnabled = false;
              this.sbAni.onFinish(function () {
                _this2.animationEnabled = true;
              }, {
                oneTimeCallback: true
              }); // Account for rounding errors in JS

              var newStepValue = shouldComplete ? -0.001 : 0.001;
              /**
               * Animation will be reversed here, so need to
               * reverse the easing curve as well
               *
               * Additionally, we need to account for the time relative
               * to the new easing curve, as `stepValue` is going to be given
               * in terms of a linear curve.
               */

              if (!shouldComplete) {
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
              } else {
                newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
              }

              this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "swipeGesture": ["swipeGestureChanged"],
              "root": ["rootChanged"]
            };
          }
        }]);

        return Nav;
      }();

      Nav.style = navCss;

      var navLink = function navLink(el, routerDirection, component, componentProps, routerAnimation) {
        var nav = el.closest('ion-nav');

        if (nav) {
          if (routerDirection === 'forward') {
            if (component !== undefined) {
              return nav.push(component, componentProps, {
                skipIfBusy: true,
                animationBuilder: routerAnimation
              });
            }
          } else if (routerDirection === 'root') {
            if (component !== undefined) {
              return nav.setRoot(component, componentProps, {
                skipIfBusy: true,
                animationBuilder: routerAnimation
              });
            }
          } else if (routerDirection === 'back') {
            return nav.pop({
              skipIfBusy: true,
              animationBuilder: routerAnimation
            });
          }
        }

        return Promise.resolve(false);
      };

      var NavLink = /*#__PURE__*/function () {
        function NavLink(hostRef) {
          var _this3 = this;

          _classCallCheck(this, NavLink);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * The transition direction when navigating to another page.
           */

          this.routerDirection = 'forward';

          this.onClick = function () {
            return navLink(_this3.el, _this3.routerDirection, _this3.component, _this3.componentProps, _this3.routerAnimation);
          };
        }

        _createClass(NavLink, [{
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick
            });
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);

        return NavLink;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=6-es5.js.map