(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95], {
    /***/
    "cFlN":
    /*!**********************************************************!*\
      !*** ./node_modules/ionicons/dist/esm/ion-icon.entry.js ***!
      \**********************************************************/

    /*! exports provided: ion_icon */

    /***/
    function cFlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_icon", function () {
        return Icon;
      });
      /* harmony import */


      var _index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-468d974f.js */
      "/+Bs");
      /* harmony import */


      var _utils_4f847845_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils-4f847845.js */
      "+v99");

      var validateContent = function validateContent(svgContent) {
        var div = document.createElement('div');
        div.innerHTML = svgContent; // setup this way to ensure it works on our buddy IE

        for (var i = div.childNodes.length - 1; i >= 0; i--) {
          if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
            div.removeChild(div.childNodes[i]);
          }
        } // must only have 1 root element


        var svgElm = div.firstElementChild;

        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
          var svgClass = svgElm.getAttribute('class') || '';
          svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim()); // root element must be an svg
          // lets double check we've got valid elements
          // do not allow scripts

          if (isValid(svgElm)) {
            return div.innerHTML;
          }
        }

        return '';
      };

      var isValid = function isValid(elm) {
        if (elm.nodeType === 1) {
          if (elm.nodeName.toLowerCase() === 'script') {
            return false;
          }

          for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;

            if (Object(_utils_4f847845_js__WEBPACK_IMPORTED_MODULE_1__["i"])(val) && val.toLowerCase().indexOf('on') === 0) {
              return false;
            }
          }

          for (var _i = 0; _i < elm.childNodes.length; _i++) {
            if (!isValid(elm.childNodes[_i])) {
              return false;
            }
          }
        }

        return true;
      };

      var ioniconContent = new Map();
      var requests = new Map();

      var getSvgContent = function getSvgContent(url, sanitize) {
        // see if we already have a request for this url
        var req = requests.get(url);

        if (!req) {
          if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
            // we don't already have a request
            req = fetch(url).then(function (rsp) {
              if (rsp.ok) {
                return rsp.text().then(function (svgContent) {
                  if (svgContent && sanitize !== false) {
                    svgContent = validateContent(svgContent);
                  }

                  ioniconContent.set(url, svgContent || '');
                });
              }

              ioniconContent.set(url, '');
            }); // cache for the same requests

            requests.set(url, req);
          } else {
            // set to empty for ssr scenarios and resolve promise
            ioniconContent.set(url, '');
            return Promise.resolve();
          }
        }

        return req;
      };

      var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";

      var Icon = /*#__PURE__*/function () {
        function Icon(hostRef) {
          _classCallCheck(this, Icon);

          Object(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.iconName = null;
          this.isVisible = false;
          /**
           * The mode determines which platform styles to use.
           */

          this.mode = getIonMode();
          /**
           * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
           * Default, `false`.
           */

          this.lazy = false;
          /**
           * When set to `false`, SVG content that is HTTP fetched will not be checked
           * if the response SVG content has any `<script>` elements, or any attributes
           * that start with `on`, such as `onclick`.
           * @default true
           */

          this.sanitize = true;
        }

        _createClass(Icon, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var _this = this;

            // purposely do not return the promise here because loading
            // the svg file should not hold up loading the app
            // only load the svg if it's visible
            this.waitUntilVisible(this.el, '50px', function () {
              _this.isVisible = true;

              _this.loadIcon();
            });
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            if (this.io) {
              this.io.disconnect();
              this.io = undefined;
            }
          }
        }, {
          key: "waitUntilVisible",
          value: function waitUntilVisible(el, rootMargin, cb) {
            var _this2 = this;

            if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
              var io = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                  io.disconnect();
                  _this2.io = undefined;
                  cb();
                }
              }, {
                rootMargin: rootMargin
              });
              io.observe(el);
            } else {
              // browser doesn't support IntersectionObserver
              // so just fallback to always show it
              cb();
            }
          }
        }, {
          key: "loadIcon",
          value: function loadIcon() {
            var _this3 = this;

            if (this.isVisible) {
              var url = Object(_utils_4f847845_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this);

              if (url) {
                if (ioniconContent.has(url)) {
                  // sync if it's already loaded
                  this.svgContent = ioniconContent.get(url);
                } else {
                  // async if it hasn't been loaded
                  getSvgContent(url, this.sanitize).then(function () {
                    return _this3.svgContent = ioniconContent.get(url);
                  });
                }
              }
            }

            var label = this.iconName = Object(_utils_4f847845_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.name, this.icon, this.mode, this.ios, this.md);

            if (!this.ariaLabel && this.ariaHidden !== 'true') {
              // user did not provide a label
              // come up with the label based on the icon name
              if (label) {
                this.ariaLabel = label.replace(/\-/g, ' ');
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign2;

            var iconName = this.iconName;
            var mode = this.mode || 'md';
            var flipRtl = this.flipRtl || iconName && (iconName.indexOf('arrow') > -1 || iconName.indexOf('chevron') > -1) && this.flipRtl !== false;
            return Object(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "img",
              "class": Object.assign(Object.assign(_defineProperty({}, mode, true), createColorClasses(this.color)), (_Object$assign2 = {}, _defineProperty(_Object$assign2, "icon-".concat(this.size), !!this.size), _defineProperty(_Object$assign2, 'flip-rtl', !!flipRtl && this.el.ownerDocument.dir === 'rtl'), _Object$assign2))
            }, this.svgContent ? Object(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "icon-inner",
              innerHTML: this.svgContent
            }) : Object(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "icon-inner"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_468d974f_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this);
          }
        }], [{
          key: "assetsDirs",
          get: function get() {
            return ["svg"];
          }
        }, {
          key: "watchers",
          get: function get() {
            return {
              "name": ["loadIcon"],
              "src": ["loadIcon"],
              "icon": ["loadIcon"]
            };
          }
        }]);

        return Icon;
      }();

      var getIonMode = function getIonMode() {
        return typeof document !== 'undefined' && document.documentElement.getAttribute('mode') || 'md';
      };

      var createColorClasses = function createColorClasses(color) {
        return color ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : null;
      };

      Icon.style = iconCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=95-es5.js.map