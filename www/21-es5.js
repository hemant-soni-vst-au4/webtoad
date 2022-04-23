(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
    /***/
    "/CAe":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_col, ion_grid, ion_row */

    /***/
    function CAe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_col", function () {
        return Col;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_grid", function () {
        return Grid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_row", function () {
        return Row;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");

      var SIZE_TO_MEDIA = {
        'xs': '(min-width: 0px)',
        'sm': '(min-width: 576px)',
        'md': '(min-width: 768px)',
        'lg': '(min-width: 992px)',
        'xl': '(min-width: 1200px)'
      }; // Check if the window matches the media query
      // at the breakpoint passed
      // e.g. matchBreakpoint('sm') => true if screen width exceeds 576px

      var matchBreakpoint = function matchBreakpoint(breakpoint) {
        if (breakpoint === undefined || breakpoint === '') {
          return true;
        }

        if (window.matchMedia) {
          var mediaQuery = SIZE_TO_MEDIA[breakpoint];
          return window.matchMedia(mediaQuery).matches;
        }

        return false;
      };

      var colCss = ":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}}";
      var win = window;
      var SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
      var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

      var Col = /*#__PURE__*/function () {
        function Col(hostRef) {
          _classCallCheck(this, Col);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(Col, [{
          key: "onResize",
          value: function onResize() {
            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["j"])(this);
          } // Loop through all of the breakpoints to see if the media query
          // matches and grab the column value from the relevant prop if so

        }, {
          key: "getColumns",
          value: function getColumns(property) {
            var matched;

            var _iterator = _createForOfIteratorHelper(BREAKPOINTS),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var breakpoint = _step.value;
                var matches = matchBreakpoint(breakpoint); // Grab the value of the property, if it exists and our
                // media query matches we return the value

                var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

                if (matches && columns !== undefined) {
                  matched = columns;
                }
              } // Return the last matched columns since the breakpoints
              // increase in size and we want to return the largest match

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return matched;
          }
        }, {
          key: "calculateSize",
          value: function calculateSize() {
            var columns = this.getColumns('size'); // If size wasn't set for any breakpoint
            // or if the user set the size without a value
            // it means we need to stick with the default and return
            // e.g. <ion-col size-md>

            if (!columns || columns === '') {
              return;
            } // If the size is set to auto then don't calculate a size


            var colSize = columns === 'auto' ? 'auto' // If CSS supports variables we should use the grid columns var
            : SUPPORTS_VARS ? "calc(calc(".concat(columns, " / var(--ion-grid-columns, 12)) * 100%)") // Convert the columns to a percentage by dividing by the total number
            // of columns (12) and then multiplying by 100
            : columns / 12 * 100 + '%';
            return {
              'flex': "0 0 ".concat(colSize),
              'width': "".concat(colSize),
              'max-width': "".concat(colSize)
            };
          } // Called by push, pull, and offset since they use the same calculations

        }, {
          key: "calculatePosition",
          value: function calculatePosition(property, modifier) {
            var columns = this.getColumns(property);

            if (!columns) {
              return;
            } // If the number of columns passed are greater than 0 and less than
            // 12 we can position the column, else default to auto


            var amount = SUPPORTS_VARS // If CSS supports variables we should use the grid columns var
            ? "calc(calc(".concat(columns, " / var(--ion-grid-columns, 12)) * 100%)") // Convert the columns to a percentage by dividing by the total number
            // of columns (12) and then multiplying by 100
            : columns > 0 && columns < 12 ? columns / 12 * 100 + '%' : 'auto';
            return _defineProperty({}, modifier, amount);
          }
        }, {
          key: "calculateOffset",
          value: function calculateOffset(isRTL) {
            return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
          }
        }, {
          key: "calculatePull",
          value: function calculatePull(isRTL) {
            return this.calculatePosition('pull', isRTL ? 'left' : 'right');
          }
        }, {
          key: "calculatePush",
          value: function calculatePush(isRTL) {
            return this.calculatePosition('push', isRTL ? 'right' : 'left');
          }
        }, {
          key: "render",
          value: function render() {
            var isRTL = document.dir === 'rtl';
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty({}, mode, true),
              style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize())
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);

        return Col;
      }();

      Col.style = colCss;
      var gridCss = ":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";

      var Grid = /*#__PURE__*/function () {
        function Grid(hostRef) {
          _classCallCheck(this, Grid);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the grid will have a fixed width based on the screen size.
           */

          this.fixed = false;
        }

        _createClass(Grid, [{
          key: "render",
          value: function render() {
            var _class2;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'grid-fixed', this.fixed), _class2)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);

        return Grid;
      }();

      Grid.style = gridCss;
      var rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

      var Row = /*#__PURE__*/function () {
        function Row(hostRef) {
          _classCallCheck(this, Row);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(Row, [{
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);

        return Row;
      }();

      Row.style = rowCss;
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

    }
  }]);
})();
//# sourceMappingURL=21-es5.js.map