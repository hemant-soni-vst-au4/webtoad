(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40], {
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
    "U7LX":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js ***!
      \*****************************************************************/

    /*! exports provided: ion_textarea */

    /***/
    function U7LX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_textarea", function () {
        return Textarea;
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


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");

      var textareaIosCss = ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
      var textareaMdCss = ".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}";

      var Textarea = /*#__PURE__*/function () {
        function Textarea(hostRef) {
          var _this = this;

          _classCallCheck(this, Textarea);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
          this.ionInput = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionInput", 7);
          this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
          this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
          this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
          this.inputId = "ion-textarea-".concat(textareaIds++);
          this.didBlurAfterEdit = false;
          this.inheritedAttributes = {};
          /**
           * This is required for a WebKit bug which requires us to
           * blur and focus an input to properly focus the input in
           * an item with delegatesFocus. It will no longer be needed
           * with iOS 14.
           *
           * @internal
           */

          this.fireFocusEvents = true;
          this.hasFocus = false;
          /**
           * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
           */

          this.autocapitalize = 'none';
          /**
           * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
           */

          this.autofocus = false;
          /**
           * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
           */

          this.clearOnEdit = false;
          /**
           * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
           */

          this.debounce = 0;
          /**
           * If `true`, the user cannot interact with the textarea.
           */

          this.disabled = false;
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the user cannot modify the value.
           */

          this.readonly = false;
          /**
           * If `true`, the user must fill in a value before submitting a form.
           */

          this.required = false;
          /**
           * If `true`, the element will have its spelling and grammar checked.
           */

          this.spellcheck = false;
          /**
           * If `true`, the element height will increase based on the value.
           */

          this.autoGrow = false;
          /**
           * The value of the textarea.
           */

          this.value = '';

          this.onInput = function (ev) {
            if (_this.nativeInput) {
              _this.value = _this.nativeInput.value;
            }

            _this.emitStyle();

            _this.ionInput.emit(ev);
          };

          this.onFocus = function (ev) {
            _this.hasFocus = true;

            _this.focusChange();

            if (_this.fireFocusEvents) {
              _this.ionFocus.emit(ev);
            }
          };

          this.onBlur = function (ev) {
            _this.hasFocus = false;

            _this.focusChange();

            if (_this.fireFocusEvents) {
              _this.ionBlur.emit(ev);
            }
          };

          this.onKeyDown = function () {
            _this.checkClearOnEdit();
          };
        }

        _createClass(Textarea, [{
          key: "debounceChanged",
          value: function debounceChanged() {
            this.ionChange = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.ionChange, this.debounce);
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            this.emitStyle();
          }
          /**
           * Update the native input element when the value changes
           */

        }, {
          key: "valueChanged",
          value: function valueChanged() {
            var nativeInput = this.nativeInput;
            var value = this.getValue();

            if (nativeInput && nativeInput.value !== value) {
              nativeInput.value = value;
            }

            this.runAutoGrow();
            this.emitStyle();
            this.ionChange.emit({
              value: value
            });
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this.emitStyle();
            this.debounceChanged();
            {
              document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
                detail: this.el
              }));
            }
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            {
              document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
                detail: this.el
              }));
            }
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.inheritedAttributes = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.el, ['title']);
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            var _this2 = this;

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["r"])(function () {
              return _this2.runAutoGrow();
            });
          }
        }, {
          key: "runAutoGrow",
          value: function runAutoGrow() {
            var _this3 = this;

            var nativeInput = this.nativeInput;

            if (nativeInput && this.autoGrow) {
              Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                nativeInput.style.height = 'auto';
                nativeInput.style.height = nativeInput.scrollHeight + 'px';

                if (_this3.textareaWrapper) {
                  _this3.textareaWrapper.style.height = nativeInput.scrollHeight + 'px';
                }
              });
            }
          }
          /**
           * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
           * `textarea.focus()`.
           */

        }, {
          key: "setFocus",
          value: function () {
            var _setFocus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.nativeInput) {
                        this.nativeInput.focus();
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setFocus() {
              return _setFocus.apply(this, arguments);
            }

            return setFocus;
          }()
          /**
           * Sets blur on the native `textarea` in `ion-textarea`. Use this method instead of the global
           * `textarea.blur()`.
           * @internal
           */

        }, {
          key: "setBlur",
          value: function () {
            var _setBlur = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.nativeInput) {
                        this.nativeInput.blur();
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function setBlur() {
              return _setBlur.apply(this, arguments);
            }

            return setBlur;
          }()
          /**
           * Returns the native `<textarea>` element used under the hood.
           */

        }, {
          key: "getInputElement",
          value: function getInputElement() {
            return Promise.resolve(this.nativeInput);
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'interactive': true,
              'textarea': true,
              'input': true,
              'interactive-disabled': this.disabled,
              'has-placeholder': this.placeholder != null,
              'has-value': this.hasValue(),
              'has-focus': this.hasFocus
            });
          }
          /**
           * Check if we need to clear the text input if clearOnEdit is enabled
           */

        }, {
          key: "checkClearOnEdit",
          value: function checkClearOnEdit() {
            if (!this.clearOnEdit) {
              return;
            } // Did the input value change after it was blurred and edited?


            if (this.didBlurAfterEdit && this.hasValue()) {
              // Clear the input
              this.value = '';
            } // Reset the flag


            this.didBlurAfterEdit = false;
          }
        }, {
          key: "focusChange",
          value: function focusChange() {
            // If clearOnEdit is enabled and the input blurred but has a value, set a flag
            if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
              this.didBlurAfterEdit = true;
            }

            this.emitStyle();
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.getValue() !== '';
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value || '';
          }
        }, {
          key: "render",
          value: function render() {
            var _this4 = this;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var value = this.getValue();
            var labelId = this.inputId + '-lbl';
            var label = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.el);

            if (label) {
              label.id = labelId;
            }

            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-disabled": this.disabled ? 'true' : null,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, _defineProperty({}, mode, true))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "textarea-wrapper",
              ref: function ref(el) {
                return _this4.textareaWrapper = el;
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", Object.assign({
              "class": "native-textarea",
              "aria-labelledby": labelId,
              ref: function ref(el) {
                return _this4.nativeInput = el;
              },
              autoCapitalize: this.autocapitalize,
              autoFocus: this.autofocus,
              enterKeyHint: this.enterkeyhint,
              inputMode: this.inputmode,
              disabled: this.disabled,
              maxLength: this.maxlength,
              minLength: this.minlength,
              name: this.name,
              placeholder: this.placeholder || '',
              readOnly: this.readonly,
              required: this.required,
              spellcheck: this.spellcheck,
              cols: this.cols,
              rows: this.rows,
              wrap: this.wrap,
              onInput: this.onInput,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              onKeyDown: this.onKeyDown
            }, this.inheritedAttributes), value)));
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
              "debounce": ["debounceChanged"],
              "disabled": ["disabledChanged"],
              "value": ["valueChanged"]
            };
          }
        }]);

        return Textarea;
      }();

      var textareaIds = 0;
      Textarea.style = {
        ios: textareaIosCss,
        md: textareaMdCss
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=40-es5.js.map