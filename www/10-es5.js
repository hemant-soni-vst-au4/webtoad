(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "2lz6":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js ***!
      \**************************************************************************/

    /*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */

    /***/
    function lz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function () {
        return InfiniteScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function () {
        return InfiniteScrollContent;
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


      var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-9e3fe806.js */
      "39oe");

      var infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";

      var InfiniteScroll = /*#__PURE__*/function () {
        function InfiniteScroll(hostRef) {
          var _this = this;

          _classCallCheck(this, InfiniteScroll);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionInfinite = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionInfinite", 7);
          this.thrPx = 0;
          this.thrPc = 0;
          this.didFire = false;
          this.isBusy = false;
          this.isLoading = false;
          /**
           * The threshold distance from the bottom
           * of the content to call the `infinite` output event when scrolled.
           * The threshold value can be either a percent, or
           * in pixels. For example, use the value of `10%` for the `infinite`
           * output event to get called when the user has scrolled 10%
           * from the bottom of the page. Use the value `100px` when the
           * scroll is within 100 pixels from the bottom of the page.
           */

          this.threshold = '15%';
          /**
           * If `true`, the infinite scroll will be hidden and scroll event listeners
           * will be removed.
           *
           * Set this to true to disable the infinite scroll from actively
           * trying to receive new data while scrolling. This is useful
           * when it is known that there is no more data that can be added, and
           * the infinite scroll is no longer needed.
           */

          this.disabled = false;
          /**
           * The position of the infinite scroll element.
           * The value can be either `top` or `bottom`.
           */

          this.position = 'bottom';

          this.onScroll = function () {
            var scrollEl = _this.scrollEl;

            if (!scrollEl || !_this.canStart()) {
              return 1;
            }

            var infiniteHeight = _this.el.offsetHeight;

            if (infiniteHeight === 0) {
              // if there is no height of this element then do nothing
              return 2;
            }

            var scrollTop = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;
            var height = scrollEl.offsetHeight;
            var threshold = _this.thrPc !== 0 ? height * _this.thrPc : _this.thrPx;
            var distanceFromInfinite = _this.position === 'bottom' ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;

            if (distanceFromInfinite < 0) {
              if (!_this.didFire) {
                _this.isLoading = true;
                _this.didFire = true;

                _this.ionInfinite.emit();

                return 3;
              }
            } else {
              _this.didFire = false;
            }

            return 4;
          };
        }

        _createClass(InfiniteScroll, [{
          key: "thresholdChanged",
          value: function thresholdChanged() {
            var val = this.threshold;

            if (val.lastIndexOf('%') > -1) {
              this.thrPx = 0;
              this.thrPc = parseFloat(val) / 100;
            } else {
              this.thrPx = parseFloat(val);
              this.thrPc = 0;
            }
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            var disabled = this.disabled;

            if (disabled) {
              this.isLoading = false;
              this.isBusy = false;
            }

            this.enableScrollEvents(!disabled);
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var contentEl;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      contentEl = this.el.closest('ion-content');

                      if (contentEl) {
                        _context.next = 4;
                        break;
                      }

                      console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
                      return _context.abrupt("return");

                    case 4:
                      _context.next = 6;
                      return contentEl.getScrollElement();

                    case 6:
                      this.scrollEl = _context.sent;
                      this.thresholdChanged();
                      this.disabledChanged();

                      if (this.position === 'top') {
                        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                          if (_this2.scrollEl) {
                            _this2.scrollEl.scrollTop = _this2.scrollEl.scrollHeight - _this2.scrollEl.clientHeight;
                          }
                        });
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
          }()
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.enableScrollEvents(false);
            this.scrollEl = undefined;
          }
          /**
           * Call `complete()` within the `ionInfinite` output event handler when
           * your async operation has completed. For example, the `loading`
           * state is while the app is performing an asynchronous operation,
           * such as receiving more data from an AJAX request to add more items
           * to a data list. Once the data has been received and UI updated, you
           * then call this method to signify that the loading has completed.
           * This method will change the infinite scroll's state from `loading`
           * to `enabled`.
           */

        }, {
          key: "complete",
          value: function () {
            var _complete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var scrollEl, prev;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      scrollEl = this.scrollEl;

                      if (!(!this.isLoading || !scrollEl)) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 3:
                      this.isLoading = false;

                      if (this.position === 'top') {
                        /**
                         * New content is being added at the top, but the scrollTop position stays the same,
                         * which causes a scroll jump visually. This algorithm makes sure to prevent this.
                         * (Frame 1)
                         *    - complete() is called, but the UI hasn't had time to update yet.
                         *    - Save the current content dimensions.
                         *    - Wait for the next frame using _dom.read, so the UI will be updated.
                         * (Frame 2)
                         *    - Read the new content dimensions.
                         *    - Calculate the height difference and the new scroll position.
                         *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
                         * (Still frame 2, if I'm correct)
                         *    - Change the scroll position (= visually maintain the scroll position).
                         *    - Change the state to re-enable the InfiniteScroll.
                         *    - This should be after changing the scroll position, or it could
                         *    cause the InfiniteScroll to be triggered again immediately.
                         * (Frame 3)
                         *    Done.
                         */
                        this.isBusy = true; // ******** DOM READ ****************
                        // Save the current content dimensions before the UI updates

                        prev = scrollEl.scrollHeight - scrollEl.scrollTop; // ******** DOM READ ****************

                        requestAnimationFrame(function () {
                          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                            // UI has updated, save the new content dimensions
                            var scrollHeight = scrollEl.scrollHeight; // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around

                            var newScrollTop = scrollHeight - prev; // ******** DOM WRITE ****************

                            requestAnimationFrame(function () {
                              Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                                scrollEl.scrollTop = newScrollTop;
                                _this3.isBusy = false;
                              });
                            });
                          });
                        });
                      }

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function complete() {
              return _complete.apply(this, arguments);
            }

            return complete;
          }()
        }, {
          key: "canStart",
          value: function canStart() {
            return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
          }
        }, {
          key: "enableScrollEvents",
          value: function enableScrollEvents(shouldListen) {
            if (this.scrollEl) {
              if (shouldListen) {
                this.scrollEl.addEventListener('scroll', this.onScroll);
              } else {
                this.scrollEl.removeEventListener('scroll', this.onScroll);
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _class;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var disabled = this.disabled;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'infinite-scroll-loading', this.isLoading), _defineProperty(_class, 'infinite-scroll-enabled', !disabled), _class)
            });
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
              "threshold": ["thresholdChanged"],
              "disabled": ["disabledChanged"]
            };
          }
        }]);

        return InfiniteScroll;
      }();

      InfiniteScroll.style = infiniteScrollCss;
      var infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
      var infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

      var InfiniteScrollContent = /*#__PURE__*/function () {
        function InfiniteScrollContent(hostRef) {
          _classCallCheck(this, InfiniteScrollContent);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(InfiniteScrollContent, [{
          key: "componentDidLoad",
          value: function componentDidLoad() {
            if (this.loadingSpinner === undefined) {
              var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
              this.loadingSpinner = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('infiniteLoadingSpinner', _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _class2;

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, "infinite-scroll-content-".concat(mode), true), _class2)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading"
            }, this.loadingSpinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading-spinner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
              name: this.loadingSpinner
            })), this.loadingText && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading-text",
              innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.loadingText)
            })));
          }
        }]);

        return InfiniteScrollContent;
      }();

      InfiniteScrollContent.style = {
        ios: infiniteScrollContentIosCss,
        md: infiniteScrollContentMdCss
      };
      /***/
    },

    /***/
    "39oe":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-9e3fe806.js ***!
      \*************************************************************/

    /*! exports provided: I, s */

    /***/
    function oe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return IonicSafeString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return sanitizeDOMString;
      });
      /**
       * Does a simple sanitization of all elements
       * in an untrusted string
       */


      var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
        try {
          if (untrustedString instanceof IonicSafeString) {
            return untrustedString.value;
          }

          if (!isSanitizerEnabled() || typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
          }
          /**
           * Create a document fragment
           * separate from the main DOM,
           * create a div to do our work in
           */


          var documentFragment = document.createDocumentFragment();
          var workingDiv = document.createElement('div');
          documentFragment.appendChild(workingDiv);
          workingDiv.innerHTML = untrustedString;
          /**
           * Remove any elements
           * that are blocked
           */

          blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
              var element = getElementsToRemove[elementIndex];

              if (element.parentNode) {
                element.parentNode.removeChild(element);
              } else {
                documentFragment.removeChild(element);
              }
              /**
               * We still need to sanitize
               * the children of this element
               * as they are left behind
               */


              var childElements = getElementChildren(element);
              /* tslint:disable-next-line */

              for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                sanitizeElement(childElements[childIndex]);
              }
            }
          });
          /**
           * Go through remaining elements and remove
           * non-allowed attribs
           */
          // IE does not support .children on document fragments, only .childNodes

          var dfChildren = getElementChildren(documentFragment);
          /* tslint:disable-next-line */

          for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
          } // Append document fragment to div


          var fragmentDiv = document.createElement('div');
          fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

          var getInnerDiv = fragmentDiv.querySelector('div');
          return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
        } catch (err) {
          console.error(err);
          return '';
        }
      };
      /**
       * Clean up current element based on allowed attributes
       * and then recursively dig down into any child elements to
       * clean those up as well
       */


      var sanitizeElement = function sanitizeElement(element) {
        // IE uses childNodes, so ignore nodes that are not elements
        if (element.nodeType && element.nodeType !== 1) {
          return;
        }

        for (var i = element.attributes.length - 1; i >= 0; i--) {
          var attribute = element.attributes.item(i);
          var attributeName = attribute.name; // remove non-allowed attribs

          if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
          } // clean up any allowed attribs
          // that attempt to do any JS funny-business


          var attributeValue = attribute.value;
          /* tslint:disable-next-line */

          if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
          }
        }
        /**
         * Sanitize any nested children
         */


        var childElements = getElementChildren(element);
        /* tslint:disable-next-line */

        for (var _i = 0; _i < childElements.length; _i++) {
          sanitizeElement(childElements[_i]);
        }
      };
      /**
       * IE doesn't always support .children
       * so we revert to .childNodes instead
       */


      var getElementChildren = function getElementChildren(el) {
        return el.children != null ? el.children : el.childNodes;
      };

      var isSanitizerEnabled = function isSanitizerEnabled() {
        var win = window;
        var config = win && win.Ionic && win.Ionic.config;

        if (config) {
          if (config.get) {
            return config.get('sanitizerEnabled', true);
          } else {
            return config.sanitizerEnabled === true || config.sanitizerEnabled === undefined;
          }
        }

        return true;
      };

      var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
      var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];

      var IonicSafeString = function IonicSafeString(value) {
        _classCallCheck(this, IonicSafeString);

        this.value = value;
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
//# sourceMappingURL=10-es5.js.map