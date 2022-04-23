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

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handlerRegister) {
              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;

                      if (!(handlerRegister && handlerRegister.handler)) {
                        _context.next = 6;
                        break;
                      }

                      result = handlerRegister.handler(processHandlers);

                      if (!(result != null)) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 6;
                      return result;

                    case 6:
                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[0, 8]]);
            }));

            return function executeAction(_x) {
              return _ref.apply(this, arguments);
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
        }).map(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          return [decodeURIComponent(key), decodeURIComponent(value)];
        }).filter(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 1),
              key = _ref5[0];

          return startsWith(key, IONIC_PREFIX);
        }).map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          return [key.slice(IONIC_PREFIX.length), value];
        }).forEach(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              key = _ref9[0],
              value = _ref9[1];

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
    "kyFE":
    /*!***************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js ***!
      \***************************************************************/

    /*! exports provided: ion_menu, ion_menu_button, ion_menu_toggle */

    /***/
    function kyFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu", function () {
        return Menu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu_button", function () {
        return MenuButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function () {
        return MenuToggle;
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


      var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gesture-controller-31cb6bb9.js */
      "y08P");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-0d58a5bf.js */
      "r7QR");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");
      /* harmony import */


      var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./animation-096c6391.js */
      "meiF");

      var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
      var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
      var iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
      var mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
      var iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
      var mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';

      var Menu = /*#__PURE__*/function () {
        function Menu(hostRef) {
          _classCallCheck(this, Menu);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionWillOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionWillOpen", 7);
          this.ionWillClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionWillClose", 7);
          this.ionDidOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDidOpen", 7);
          this.ionDidClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDidClose", 7);
          this.ionMenuChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionMenuChange", 7);
          this.lastOnEnd = 0;
          this.blocker = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__["G"].createBlocker({
            disableScroll: true
          });
          this.isAnimating = false;
          this._isOpen = false;
          this.isPaneVisible = false;
          this.isEndSide = false;
          /**
           * If `true`, the menu is disabled.
           */

          this.disabled = false;
          /**
           * Which side of the view the menu should be placed.
           */

          this.side = 'start';
          /**
           * If `true`, swiping the menu is enabled.
           */

          this.swipeGesture = true;
          /**
           * The edge threshold for dragging the menu open.
           * If a drag/swipe happens over this value, the menu is not triggered.
           */

          this.maxEdgeStart = 50;
        }

        _createClass(Menu, [{
          key: "typeChanged",
          value: function typeChanged(type, oldType) {
            var contentEl = this.contentEl;

            if (contentEl) {
              if (oldType !== undefined) {
                contentEl.classList.remove("menu-content-".concat(oldType));
              }

              contentEl.classList.add("menu-content-".concat(type));
              contentEl.removeAttribute('style');
            }

            if (this.menuInnerEl) {
              // Remove effects of previous animations
              this.menuInnerEl.removeAttribute('style');
            }

            this.animation = undefined;
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            this.updateState();
            this.ionMenuChange.emit({
              disabled: this.disabled,
              open: this._isOpen
            });
          }
        }, {
          key: "sideChanged",
          value: function sideChanged() {
            this.isEndSide = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["m"])(this.side);
          }
        }, {
          key: "swipeGestureChanged",
          value: function swipeGestureChanged() {
            this.updateState();
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var el, parent, content;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.type === undefined) {
                        this.type = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('menuType', 'overlay');
                      }

                      el = this.el;
                      parent = el.parentNode;

                      if (this.contentId === undefined) {
                        console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"main-content\"></ion-menu>\n  <div id=\"main-content\">...</div>\n");
                      }

                      content = this.contentId !== undefined ? document.getElementById(this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                      if (!(!content || !content.tagName)) {
                        _context2.next = 8;
                        break;
                      }

                      // requires content element
                      console.error('Menu: must have a "content" element to listen for drag events on.');
                      return _context2.abrupt("return");

                    case 8:
                      this.contentEl = content; // add menu's content classes

                      content.classList.add('menu-content');
                      this.typeChanged(this.type, undefined);
                      this.sideChanged(); // register this menu with the app's menu controller

                      _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._register(this);

                      _context2.next = 15;
                      return __webpack_require__.e(
                      /*! import() | index-f49d994d-js */
                      2).then(__webpack_require__.bind(null,
                      /*! ./index-f49d994d.js */
                      "iWo5"));

                    case 15:
                      this.gesture = _context2.sent.createGesture({
                        el: document,
                        gestureName: 'menu-swipe',
                        gesturePriority: 30,
                        threshold: 10,
                        blurOnStart: true,
                        canStart: function canStart(ev) {
                          return _this.canStart(ev);
                        },
                        onWillStart: function onWillStart() {
                          return _this.onWillStart();
                        },
                        onStart: function onStart() {
                          return _this.onStart();
                        },
                        onMove: function onMove(ev) {
                          return _this.onMove(ev);
                        },
                        onEnd: function onEnd(ev) {
                          return _this.onEnd(ev);
                        }
                      });
                      this.updateState();

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
          }()
        }, {
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.ionMenuChange.emit({
                        disabled: this.disabled,
                        open: this._isOpen
                      });
                      this.updateState();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function componentDidLoad() {
              return _componentDidLoad.apply(this, arguments);
            }

            return componentDidLoad;
          }()
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.blocker.destroy();

            _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._unregister(this);

            if (this.animation) {
              this.animation.destroy();
            }

            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            }

            this.animation = undefined;
            this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
          }
        }, {
          key: "onSplitPaneChanged",
          value: function onSplitPaneChanged(ev) {
            this.isPaneVisible = ev.detail.isPane(this.el);
            this.updateState();
          }
        }, {
          key: "onBackdropClick",
          value: function onBackdropClick(ev) {
            if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
              var shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

              if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
              }
            }
          }
          /**
           * Returns `true` is the menu is open.
           */

        }, {
          key: "isOpen",
          value: function isOpen() {
            return Promise.resolve(this._isOpen);
          }
          /**
           * Returns `true` is the menu is active.
           *
           * A menu is active when it can be opened or closed, meaning it's enabled
           * and it's not part of a `ion-split-pane`.
           */

        }, {
          key: "isActive",
          value: function isActive() {
            return Promise.resolve(this._isActive());
          }
          /**
           * Opens the menu. If the menu is already open or it can't be opened,
           * it returns `false`.
           */

        }, {
          key: "open",
          value: function open() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(true, animated);
          }
          /**
           * Closes the menu. If the menu is already closed or it can't be closed,
           * it returns `false`.
           */

        }, {
          key: "close",
          value: function close() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(false, animated);
          }
          /**
           * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
           * If the operation can't be completed successfully, it returns `false`.
           */

        }, {
          key: "toggle",
          value: function toggle() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(!this._isOpen, animated);
          }
          /**
           * Opens or closes the button.
           * If the operation can't be completed successfully, it returns `false`.
           */

        }, {
          key: "setOpen",
          value: function setOpen(shouldOpen) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setOpen(this, shouldOpen, animated);
          }
        }, {
          key: "_setOpen",
          value: function () {
            var _setOpen2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(shouldOpen) {
              var animated,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      animated = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;

                      if (!(!this._isActive() || this.isAnimating || shouldOpen === this._isOpen)) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", false);

                    case 3:
                      this.beforeAnimation(shouldOpen);
                      _context4.next = 6;
                      return this.loadAnimation();

                    case 6:
                      _context4.next = 8;
                      return this.startAnimation(shouldOpen, animated);

                    case 8:
                      this.afterAnimation(shouldOpen);
                      return _context4.abrupt("return", true);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _setOpen(_x2) {
              return _setOpen2.apply(this, arguments);
            }

            return _setOpen;
          }()
        }, {
          key: "loadAnimation",
          value: function () {
            var _loadAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var width;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      // Menu swipe animation takes the menu's inner width as parameter,
                      // If `offsetWidth` changes, we need to create a new animation.
                      width = this.menuInnerEl.offsetWidth;

                      if (!(width === this.width && this.animation !== undefined)) {
                        _context5.next = 3;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 3:
                      this.width = width; // Destroy existing animation

                      if (this.animation) {
                        this.animation.destroy();
                        this.animation = undefined;
                      } // Create new animation


                      _context5.next = 7;
                      return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._createAnimation(this.type, this);

                    case 7:
                      this.animation = _context5.sent;

                      if (!_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true)) {
                        this.animation.duration(0);
                      }

                      this.animation.fill('both');

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function loadAnimation() {
              return _loadAnimation.apply(this, arguments);
            }

            return loadAnimation;
          }()
        }, {
          key: "startAnimation",
          value: function () {
            var _startAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(shouldOpen, animated) {
              var isReversed, mode, easing, easingReverse, ani;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      isReversed = !shouldOpen;
                      mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                      easing = mode === 'ios' ? iosEasing : mdEasing;
                      easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
                      ani = this.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? easingReverse : easing).onFinish(function () {
                        if (ani.getDirection() === 'reverse') {
                          ani.direction('normal');
                        }
                      });

                      if (!animated) {
                        _context6.next = 10;
                        break;
                      }

                      _context6.next = 8;
                      return ani.play();

                    case 8:
                      _context6.next = 11;
                      break;

                    case 10:
                      ani.play({
                        sync: true
                      });

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function startAnimation(_x3, _x4) {
              return _startAnimation.apply(this, arguments);
            }

            return startAnimation;
          }()
        }, {
          key: "_isActive",
          value: function _isActive() {
            return !this.disabled && !this.isPaneVisible;
          }
        }, {
          key: "canSwipe",
          value: function canSwipe() {
            return this.swipeGesture && !this.isAnimating && this._isActive();
          }
        }, {
          key: "canStart",
          value: function canStart(detail) {
            // Do not allow swipe gesture if a modal is open
            var isModalPresented = !!document.querySelector('ion-modal.show-modal');

            if (isModalPresented || !this.canSwipe()) {
              return false;
            }

            if (this._isOpen) {
              return true; // TODO error
            } else if (_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._getOpenSync()) {
              return false;
            }

            return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
          }
        }, {
          key: "onWillStart",
          value: function onWillStart() {
            this.beforeAnimation(!this._isOpen);
            return this.loadAnimation();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            } // the cloned animation should not use an easing curve during seek


            this.animation.progressStart(true, this._isOpen ? 1 : 0);
          }
        }, {
          key: "onMove",
          value: function onMove(detail) {
            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            }

            var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
            var stepValue = delta / this.width;
            this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
          }
        }, {
          key: "onEnd",
          value: function onEnd(detail) {
            var _this2 = this;

            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            }

            var isOpen = this._isOpen;
            var isEndSide = this.isEndSide;
            var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
            var width = this.width;
            var stepValue = delta / width;
            var velocity = detail.velocityX;
            var z = width / 2.0;
            var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
            var shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
            var shouldOpen = !isOpen && shouldComplete;

            if (isOpen && !shouldComplete) {
              shouldOpen = true;
            }

            this.lastOnEnd = detail.currentTime; // Account for rounding errors in JS

            var newStepValue = shouldComplete ? 0.001 : -0.001;
            /**
             * TODO: stepValue can sometimes return a negative
             * value, but you can't have a negative time value
             * for the cubic bezier curve (at least with web animations)
             * Not sure if the negative step value is an error or not
             */

            var adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
            /**
             * Animation will be reversed here, so need to
             * reverse the easing curve as well
             *
             * Additionally, we need to account for the time relative
             * to the new easing curve, as `stepValue` is going to be given
             * in terms of a linear curve.
             */

            newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [0.4, 0], [0.6, 1], [1, 1], Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["j"])(0, adjustedStepValue, 0.9999))[0] || 0;
            var playTo = this._isOpen ? !shouldComplete : shouldComplete;
            this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(function () {
              return _this2.afterAnimation(shouldOpen);
            }, {
              oneTimeCallback: true
            }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
          }
        }, {
          key: "beforeAnimation",
          value: function beforeAnimation(shouldOpen) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
            // this css class doesn't actually kick off any animations

            this.el.classList.add(SHOW_MENU);

            if (this.backdropEl) {
              this.backdropEl.classList.add(SHOW_BACKDROP);
            }

            this.blocker.block();
            this.isAnimating = true;

            if (shouldOpen) {
              this.ionWillOpen.emit();
            } else {
              this.ionWillClose.emit();
            }
          }
        }, {
          key: "afterAnimation",
          value: function afterAnimation(isOpen) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
            // only add listeners/css if it's enabled and isOpen
            // and only remove listeners/css if it's not open
            // emit opened/closed events

            this._isOpen = isOpen;
            this.isAnimating = false;

            if (!this._isOpen) {
              this.blocker.unblock();
            }

            if (isOpen) {
              // add css class
              if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
              } // emit open event


              this.ionDidOpen.emit();
            } else {
              // remove css classes
              this.el.classList.remove(SHOW_MENU);

              if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
              }

              if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
              }

              if (this.animation) {
                this.animation.stop();
              } // emit close event


              this.ionDidClose.emit();
            }
          }
        }, {
          key: "updateState",
          value: function updateState() {
            var isActive = this._isActive();

            if (this.gesture) {
              this.gesture.enable(isActive && this.swipeGesture);
            } // Close menu immediately


            if (!isActive && this._isOpen) {
              // close if this menu is open, and should not be enabled
              this.forceClosing();
            }

            if (!this.disabled) {
              _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setActiveMenu(this);
            }

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(!this.isAnimating, 'can not be animating');
          }
        }, {
          key: "forceClosing",
          value: function forceClosing() {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this._isOpen, 'menu cannot be closed');
            this.isAnimating = true;
            var ani = this.animation.direction('reverse');
            ani.play({
              sync: true
            });
            this.afterAnimation(false);
          }
        }, {
          key: "render",
          value: function render() {
            var _class,
                _this3 = this;

            var isEndSide = this.isEndSide,
                type = this.type,
                disabled = this.disabled,
                isPaneVisible = this.isPaneVisible;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "navigation",
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "menu-type-".concat(type), true), _defineProperty(_class, 'menu-enabled', !disabled), _defineProperty(_class, 'menu-side-end', isEndSide), _defineProperty(_class, 'menu-side-start', !isEndSide), _defineProperty(_class, 'menu-pane-visible', isPaneVisible), _class)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "menu-inner",
              part: "container",
              ref: function ref(el) {
                return _this3.menuInnerEl = el;
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
              ref: function ref(el) {
                return _this3.backdropEl = el;
              },
              "class": "menu-backdrop",
              tappable: false,
              stopPropagation: false,
              part: "backdrop"
            }));
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
              "type": ["typeChanged"],
              "disabled": ["disabledChanged"],
              "side": ["sideChanged"],
              "swipeGesture": ["swipeGestureChanged"]
            };
          }
        }]);

        return Menu;
      }();

      var computeDelta = function computeDelta(deltaX, isOpen, isEndSide) {
        return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
      };

      var checkEdgeSide = function checkEdgeSide(win, posX, isEndSide, maxEdgeStart) {
        if (isEndSide) {
          return posX >= win.innerWidth - maxEdgeStart;
        } else {
          return posX <= maxEdgeStart;
        }
      };

      var SHOW_MENU = 'show-menu';
      var SHOW_BACKDROP = 'show-backdrop';
      var MENU_CONTENT_OPEN = 'menu-content-open';
      Menu.style = {
        ios: menuIosCss,
        md: menuMdCss
      }; // Given a menu, return whether or not the menu toggle should be visible

      var updateVisibility = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(menu) {
          var menuEl;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);

                case 2:
                  menuEl = _context7.sent;
                  _context7.t0 = menuEl;

                  if (!_context7.t0) {
                    _context7.next = 8;
                    break;
                  }

                  _context7.next = 7;
                  return menuEl.isActive();

                case 7:
                  _context7.t0 = _context7.sent;

                case 8:
                  return _context7.abrupt("return", !!_context7.t0);

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function updateVisibility(_x5) {
          return _ref10.apply(this, arguments);
        };
      }();

      var menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
      var menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";

      var MenuButton = /*#__PURE__*/function () {
        function MenuButton(hostRef) {
          var _this4 = this;

          _classCallCheck(this, MenuButton);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.visible = false;
          /**
           * If `true`, the user cannot interact with the menu button.
           */

          this.disabled = false;
          /**
           * Automatically hides the menu button when the corresponding menu is not active
           */

          this.autoHide = true;
          /**
           * The type of the button.
           */

          this.type = 'button';
          this.onClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this4.menu));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }

        _createClass(MenuButton, [{
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.visibilityChanged();
          }
        }, {
          key: "visibilityChanged",
          value: function () {
            var _visibilityChanged = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return updateVisibility(this.menu);

                    case 2:
                      this.visible = _context9.sent;

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function visibilityChanged() {
              return _visibilityChanged.apply(this, arguments);
            }

            return visibilityChanged;
          }()
        }, {
          key: "render",
          value: function render() {
            var _Object;

            var color = this.color,
                disabled = this.disabled;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

            var menuIcon = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');

            var hidden = this.autoHide && !this.visible;
            var attrs = {
              type: this.type
            };
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "aria-disabled": disabled ? 'true' : null,
              "aria-hidden": hidden ? 'true' : null,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color, (_Object = {}, _defineProperty(_Object, mode, true), _defineProperty(_Object, 'button', true), _defineProperty(_Object, 'menu-button-hidden', hidden), _defineProperty(_Object, 'menu-button-disabled', disabled), _defineProperty(_Object, 'in-toolbar', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-toolbar', this.el)), _defineProperty(_Object, 'in-toolbar-color', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-toolbar[color]', this.el)), _defineProperty(_Object, 'ion-activatable', true), _defineProperty(_Object, 'ion-focusable', true), _Object))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, {
              disabled: disabled,
              "class": "button-native",
              part: "native",
              "aria-label": "menu"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              part: "icon",
              icon: menuIcon,
              mode: mode,
              lazy: false,
              "aria-hidden": "true"
            }))), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
              type: "unbounded"
            })));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);

        return MenuButton;
      }();

      MenuButton.style = {
        ios: menuButtonIosCss,
        md: menuButtonMdCss
      };
      var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

      var MenuToggle = /*#__PURE__*/function () {
        function MenuToggle(hostRef) {
          var _this5 = this;

          _classCallCheck(this, MenuToggle);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.visible = false;
          /**
           * Automatically hides the content when the corresponding menu is not active.
           *
           * By default, it's `true`. Change it to `false` in order to
           * keep `ion-menu-toggle` always visible regardless the state of the menu.
           */

          this.autoHide = true;

          this.onClick = function () {
            return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this5.menu);
          };
        }

        _createClass(MenuToggle, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            this.visibilityChanged();
          }
        }, {
          key: "visibilityChanged",
          value: function () {
            var _visibilityChanged2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return updateVisibility(this.menu);

                    case 2:
                      this.visible = _context10.sent;

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function visibilityChanged() {
              return _visibilityChanged2.apply(this, arguments);
            }

            return visibilityChanged;
          }()
        }, {
          key: "render",
          value: function render() {
            var _class2;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var hidden = this.autoHide && !this.visible;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "aria-hidden": hidden ? 'true' : null,
              "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'menu-toggle-hidden', hidden), _class2)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);

        return MenuToggle;
      }();

      MenuToggle.style = menuToggleCss;
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
//# sourceMappingURL=7-es5.js.map