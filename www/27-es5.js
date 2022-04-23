(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
    /***/
    "0tOe":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js ***!
      \*********************************************************************/

    /*! exports provided: ion_progress_bar */

    /***/
    function tOe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_progress_bar", function () {
        return ProgressBar;
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

      var progressBarIosCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}";
      var progressBarMdCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:4px}";

      var ProgressBar = /*#__PURE__*/function () {
        function ProgressBar(hostRef) {
          _classCallCheck(this, ProgressBar);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * The state of the progress bar, based on if the time the process takes is known or not.
           * Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).
           */

          this.type = 'determinate';
          /**
           * If true, reverse the progress bar direction.
           */

          this.reversed = false;
          /**
           * The value determines how much of the active bar should display when the
           * `type` is `"determinate"`.
           * The value should be between [0, 1].
           */

          this.value = 0;
          /**
           * If the buffer and value are smaller than 1, the buffer circles will show.
           * The buffer should be between [0, 1].
           */

          this.buffer = 1;
        }

        _createClass(ProgressBar, [{
          key: "render",
          value: function render() {
            var _Object;

            var color = this.color,
                type = this.type,
                reversed = this.reversed,
                value = this.value,
                buffer = this.buffer;

            var paused = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('_testing');

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "progressbar",
              "aria-valuenow": type === 'determinate' ? value : null,
              "aria-valuemin": "0",
              "aria-valuemax": "1",
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color, (_Object = {}, _defineProperty(_Object, mode, true), _defineProperty(_Object, "progress-bar-".concat(type), true), _defineProperty(_Object, 'progress-paused', paused), _defineProperty(_Object, 'progress-bar-reversed', document.dir === 'rtl' ? !reversed : reversed), _Object))
            }, type === 'indeterminate' ? renderIndeterminate() : renderProgress(value, buffer));
          }
        }]);

        return ProgressBar;
      }();

      var renderIndeterminate = function renderIndeterminate() {
        return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          part: "track",
          "class": "progress-buffer-bar"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "indeterminate-bar-primary"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          part: "progress",
          "class": "progress-indeterminate"
        })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "indeterminate-bar-secondary"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          part: "progress",
          "class": "progress-indeterminate"
        })));
      };

      var renderProgress = function renderProgress(value, buffer) {
        var finalValue = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["j"])(0, value, 1);
        var finalBuffer = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["j"])(0, buffer, 1);
        return [Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          part: "progress",
          "class": "progress",
          style: {
            transform: "scaleX(".concat(finalValue, ")")
          }
        }),
        /**
         * Buffer circles with two container to move
         * the circles behind the buffer progress
         * with respecting the animation.
         * When finalBuffer === 1, we use display: none
         * instead of removing the element to avoid flickering.
         */
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": {
            'buffer-circles-container': true,
            'ion-hide': finalBuffer === 1
          },
          style: {
            transform: "translateX(".concat(finalBuffer * 100, "%)")
          }
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "buffer-circles-container",
          style: {
            transform: "translateX(-".concat(finalBuffer * 100, "%)")
          }
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          part: "stream",
          "class": "buffer-circles"
        }))), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          part: "track",
          "class": "progress-buffer-bar",
          style: {
            transform: "scaleX(".concat(finalBuffer, ")")
          }
        })];
      };

      ProgressBar.style = {
        ios: progressBarIosCss,
        md: progressBarMdCss
      };
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

    }
  }]);
})();
//# sourceMappingURL=27-es5.js.map