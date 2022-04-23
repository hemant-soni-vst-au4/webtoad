(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "meiF":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/animation-096c6391.js ***!
      \*****************************************************************/

    /*! exports provided: c */

    /***/
    function meiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createAnimation;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var animationPrefix;
      /**
       * Web Animations requires hyphenated CSS properties
       * to be written in camelCase when animating
       */

      var processKeyframes = function processKeyframes(keyframes) {
        keyframes.forEach(function (keyframe) {
          for (var key in keyframe) {
            if (keyframe.hasOwnProperty(key)) {
              var value = keyframe[key];

              if (key === 'easing') {
                var newKey = 'animation-timing-function';
                keyframe[newKey] = value;
                delete keyframe[key];
              } else {
                var _newKey = convertCamelCaseToHypen(key);

                if (_newKey !== key) {
                  keyframe[_newKey] = value;
                  delete keyframe[key];
                }
              }
            }
          }
        });
        return keyframes;
      };

      var convertCamelCaseToHypen = function convertCamelCaseToHypen(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      };

      var getAnimationPrefix = function getAnimationPrefix(el) {
        if (animationPrefix === undefined) {
          var supportsUnprefixed = el.style.animationName !== undefined;
          var supportsWebkitPrefix = el.style.webkitAnimationName !== undefined;
          animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? '-webkit-' : '';
        }

        return animationPrefix;
      };

      var setStyleProperty = function setStyleProperty(element, propertyName, value) {
        var prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
        element.style.setProperty(prefix + propertyName, value);
      };

      var removeStyleProperty = function removeStyleProperty(element, propertyName) {
        var prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
        element.style.removeProperty(prefix + propertyName);
      };

      var animationEnd = function animationEnd(el, callback) {
        var unRegTrans;
        var opts = {
          passive: true
        };

        var unregister = function unregister() {
          if (unRegTrans) {
            unRegTrans();
          }
        };

        var onTransitionEnd = function onTransitionEnd(ev) {
          if (el === ev.target) {
            unregister();
            callback(ev);
          }
        };

        if (el) {
          el.addEventListener('webkitAnimationEnd', onTransitionEnd, opts);
          el.addEventListener('animationend', onTransitionEnd, opts);

          unRegTrans = function unRegTrans() {
            el.removeEventListener('webkitAnimationEnd', onTransitionEnd, opts);
            el.removeEventListener('animationend', onTransitionEnd, opts);
          };
        }

        return unregister;
      };

      var generateKeyframeRules = function generateKeyframeRules() {
        var keyframes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return keyframes.map(function (keyframe) {
          var offset = keyframe.offset;
          var frameString = [];

          for (var property in keyframe) {
            if (keyframe.hasOwnProperty(property) && property !== 'offset') {
              frameString.push("".concat(property, ": ").concat(keyframe[property], ";"));
            }
          }

          return "".concat(offset * 100, "% { ").concat(frameString.join(' '), " }");
        }).join(' ');
      };

      var keyframeIds = [];

      var generateKeyframeName = function generateKeyframeName(keyframeRules) {
        var index = keyframeIds.indexOf(keyframeRules);

        if (index < 0) {
          index = keyframeIds.push(keyframeRules) - 1;
        }

        return "ion-animation-".concat(index);
      };

      var getStyleContainer = function getStyleContainer(element) {
        var rootNode = element.getRootNode();
        return rootNode.head || rootNode;
      };

      var createKeyframeStylesheet = function createKeyframeStylesheet(keyframeName, keyframeRules, element) {
        var styleContainer = getStyleContainer(element);
        var keyframePrefix = getAnimationPrefix(element);
        var existingStylesheet = styleContainer.querySelector('#' + keyframeName);

        if (existingStylesheet) {
          return existingStylesheet;
        }

        var stylesheet = (element.ownerDocument || document).createElement('style');
        stylesheet.id = keyframeName;
        stylesheet.textContent = "@".concat(keyframePrefix, "keyframes ").concat(keyframeName, " { ").concat(keyframeRules, " } @").concat(keyframePrefix, "keyframes ").concat(keyframeName, "-alt { ").concat(keyframeRules, " }");
        styleContainer.appendChild(stylesheet);
        return stylesheet;
      };

      var addClassToArray = function addClassToArray() {
        var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var className = arguments.length > 1 ? arguments[1] : undefined;

        if (className !== undefined) {
          var classNameToAppend = Array.isArray(className) ? className : [className];
          return [].concat(_toConsumableArray(classes), _toConsumableArray(classNameToAppend));
        }

        return classes;
      };

      var createAnimation = function createAnimation(animationId) {
        var _delay;

        var _duration;

        var _easing;

        var _iterations;

        var _fill;

        var _direction;

        var _keyframes = [];
        var beforeAddClasses = [];
        var beforeRemoveClasses = [];
        var initialized = false;
        var parentAnimation;
        var beforeStylesValue = {};
        var afterAddClasses = [];
        var afterRemoveClasses = [];
        var afterStylesValue = {};
        var numAnimationsRunning = 0;
        var shouldForceLinearEasing = false;
        var shouldForceSyncPlayback = false;
        var cssAnimationsTimerFallback;
        var forceDirectionValue;
        var forceDurationValue;
        var forceDelayValue;
        var willComplete = true;
        var finished = false;
        var shouldCalculateNumAnimations = true;
        var keyframeName;
        var ani;
        var id = animationId;
        var onFinishCallbacks = [];
        var onFinishOneTimeCallbacks = [];
        var elements = [];
        var childAnimations = [];
        var stylesheets = [];
        var _beforeAddReadFunctions = [];
        var _beforeAddWriteFunctions = [];
        var _afterAddReadFunctions = [];
        var _afterAddWriteFunctions = [];
        var webAnimations = [];
        var supportsAnimationEffect = typeof AnimationEffect === 'function' || typeof window.AnimationEffect === 'function';
        var supportsWebAnimations = typeof Element === 'function' && typeof Element.prototype.animate === 'function' && supportsAnimationEffect;
        var ANIMATION_END_FALLBACK_PADDING_MS = 100;

        var getWebAnimations = function getWebAnimations() {
          return webAnimations;
        };

        var destroy = function destroy(clearStyleSheets) {
          childAnimations.forEach(function (childAnimation) {
            childAnimation.destroy(clearStyleSheets);
          });
          cleanUp(clearStyleSheets);
          elements.length = 0;
          childAnimations.length = 0;
          _keyframes.length = 0;
          clearOnFinish();
          initialized = false;
          shouldCalculateNumAnimations = true;
          return ani;
        };
        /**
         * Cancels any Web Animations, removes
         * any animation properties from the
         * animation's elements, and removes the
         * animation's stylesheets from the DOM.
         */


        var cleanUp = function cleanUp(clearStyleSheets) {
          cleanUpElements();

          if (clearStyleSheets) {
            cleanUpStyleSheets();
          }
        };

        var resetFlags = function resetFlags() {
          shouldForceLinearEasing = false;
          shouldForceSyncPlayback = false;
          shouldCalculateNumAnimations = true;
          forceDirectionValue = undefined;
          forceDurationValue = undefined;
          forceDelayValue = undefined;
          numAnimationsRunning = 0;
          finished = false;
          willComplete = true;
        };

        var onFinish = function onFinish(callback, opts) {
          var callbacks = opts && opts.oneTimeCallback ? onFinishOneTimeCallbacks : onFinishCallbacks;
          callbacks.push({
            c: callback,
            o: opts
          });
          return ani;
        };

        var clearOnFinish = function clearOnFinish() {
          onFinishCallbacks.length = 0;
          onFinishOneTimeCallbacks.length = 0;
          return ani;
        };
        /**
         * Cancels any Web Animations and removes
         * any animation properties from the
         * the animation's elements.
         */


        var cleanUpElements = function cleanUpElements() {
          if (supportsWebAnimations) {
            webAnimations.forEach(function (animation) {
              animation.cancel();
            });
            webAnimations.length = 0;
          } else {
            var elementsArray = elements.slice();
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
              elementsArray.forEach(function (element) {
                removeStyleProperty(element, 'animation-name');
                removeStyleProperty(element, 'animation-duration');
                removeStyleProperty(element, 'animation-timing-function');
                removeStyleProperty(element, 'animation-iteration-count');
                removeStyleProperty(element, 'animation-delay');
                removeStyleProperty(element, 'animation-play-state');
                removeStyleProperty(element, 'animation-fill-mode');
                removeStyleProperty(element, 'animation-direction');
              });
            });
          }
        };
        /**
         * Removes the animation's stylesheets
         * from the DOM.
         */


        var cleanUpStyleSheets = function cleanUpStyleSheets() {
          stylesheets.forEach(function (stylesheet) {
            /**
             * When sharing stylesheets, it's possible
             * for another animation to have already
             * cleaned up a particular stylesheet
             */
            if (stylesheet && stylesheet.parentNode) {
              stylesheet.parentNode.removeChild(stylesheet);
            }
          });
          stylesheets.length = 0;
        };

        var beforeAddRead = function beforeAddRead(readFn) {
          _beforeAddReadFunctions.push(readFn);

          return ani;
        };

        var beforeAddWrite = function beforeAddWrite(writeFn) {
          _beforeAddWriteFunctions.push(writeFn);

          return ani;
        };

        var afterAddRead = function afterAddRead(readFn) {
          _afterAddReadFunctions.push(readFn);

          return ani;
        };

        var afterAddWrite = function afterAddWrite(writeFn) {
          _afterAddWriteFunctions.push(writeFn);

          return ani;
        };

        var beforeAddClass = function beforeAddClass(className) {
          beforeAddClasses = addClassToArray(beforeAddClasses, className);
          return ani;
        };

        var beforeRemoveClass = function beforeRemoveClass(className) {
          beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
          return ani;
        };
        /**
         * Set CSS inline styles to the animation's
         * elements before the animation begins.
         */


        var beforeStyles = function beforeStyles() {
          var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          beforeStylesValue = styles;
          return ani;
        };
        /**
         * Clear CSS inline styles from the animation's
         * elements before the animation begins.
         */


        var beforeClearStyles = function beforeClearStyles() {
          var propertyNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          var _iterator = _createForOfIteratorHelper(propertyNames),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var property = _step.value;
              beforeStylesValue[property] = '';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return ani;
        };

        var afterAddClass = function afterAddClass(className) {
          afterAddClasses = addClassToArray(afterAddClasses, className);
          return ani;
        };

        var afterRemoveClass = function afterRemoveClass(className) {
          afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
          return ani;
        };

        var afterStyles = function afterStyles() {
          var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          afterStylesValue = styles;
          return ani;
        };

        var afterClearStyles = function afterClearStyles() {
          var propertyNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          var _iterator2 = _createForOfIteratorHelper(propertyNames),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var property = _step2.value;
              afterStylesValue[property] = '';
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return ani;
        };

        var getFill = function getFill() {
          if (_fill !== undefined) {
            return _fill;
          }

          if (parentAnimation) {
            return parentAnimation.getFill();
          }

          return 'both';
        };

        var getDirection = function getDirection() {
          if (forceDirectionValue !== undefined) {
            return forceDirectionValue;
          }

          if (_direction !== undefined) {
            return _direction;
          }

          if (parentAnimation) {
            return parentAnimation.getDirection();
          }

          return 'normal';
        };

        var getEasing = function getEasing() {
          if (shouldForceLinearEasing) {
            return 'linear';
          }

          if (_easing !== undefined) {
            return _easing;
          }

          if (parentAnimation) {
            return parentAnimation.getEasing();
          }

          return 'linear';
        };

        var getDuration = function getDuration() {
          if (shouldForceSyncPlayback) {
            return 0;
          }

          if (forceDurationValue !== undefined) {
            return forceDurationValue;
          }

          if (_duration !== undefined) {
            return _duration;
          }

          if (parentAnimation) {
            return parentAnimation.getDuration();
          }

          return 0;
        };

        var getIterations = function getIterations() {
          if (_iterations !== undefined) {
            return _iterations;
          }

          if (parentAnimation) {
            return parentAnimation.getIterations();
          }

          return 1;
        };

        var getDelay = function getDelay() {
          if (forceDelayValue !== undefined) {
            return forceDelayValue;
          }

          if (_delay !== undefined) {
            return _delay;
          }

          if (parentAnimation) {
            return parentAnimation.getDelay();
          }

          return 0;
        };

        var getKeyframes = function getKeyframes() {
          return _keyframes;
        };

        var direction = function direction(animationDirection) {
          _direction = animationDirection;
          update(true);
          return ani;
        };

        var fill = function fill(animationFill) {
          _fill = animationFill;
          update(true);
          return ani;
        };

        var delay = function delay(animationDelay) {
          _delay = animationDelay;
          update(true);
          return ani;
        };

        var easing = function easing(animationEasing) {
          _easing = animationEasing;
          update(true);
          return ani;
        };

        var duration = function duration(animationDuration) {
          /**
           * CSS Animation Durations of 0ms work fine on Chrome
           * but do not run on Safari, so force it to 1ms to
           * get it to run on both platforms.
           */
          if (!supportsWebAnimations && animationDuration === 0) {
            animationDuration = 1;
          }

          _duration = animationDuration;
          update(true);
          return ani;
        };

        var iterations = function iterations(animationIterations) {
          _iterations = animationIterations;
          update(true);
          return ani;
        };

        var parent = function parent(animation) {
          parentAnimation = animation;
          return ani;
        };

        var addElement = function addElement(el) {
          if (el != null) {
            if (el.nodeType === 1) {
              elements.push(el);
            } else if (el.length >= 0) {
              for (var i = 0; i < el.length; i++) {
                elements.push(el[i]);
              }
            } else {
              console.error('Invalid addElement value');
            }
          }

          return ani;
        };

        var addAnimation = function addAnimation(animationToAdd) {
          if (animationToAdd != null) {
            if (Array.isArray(animationToAdd)) {
              var _iterator3 = _createForOfIteratorHelper(animationToAdd),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var animation = _step3.value;
                  animation.parent(ani);
                  childAnimations.push(animation);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } else {
              animationToAdd.parent(ani);
              childAnimations.push(animationToAdd);
            }
          }

          return ani;
        };

        var keyframes = function keyframes(keyframeValues) {
          _keyframes = keyframeValues;
          return ani;
        };
        /**
         * Run all "before" animation hooks.
         */


        var beforeAnimation = function beforeAnimation() {
          // Runs all before read callbacks
          _beforeAddReadFunctions.forEach(function (callback) {
            return callback();
          }); // Runs all before write callbacks


          _beforeAddWriteFunctions.forEach(function (callback) {
            return callback();
          }); // Updates styles and classes before animation runs


          var addClasses = beforeAddClasses;
          var removeClasses = beforeRemoveClasses;
          var styles = beforeStylesValue;
          elements.forEach(function (el) {
            var elementClassList = el.classList;
            addClasses.forEach(function (c) {
              return elementClassList.add(c);
            });
            removeClasses.forEach(function (c) {
              return elementClassList.remove(c);
            });

            for (var property in styles) {
              if (styles.hasOwnProperty(property)) {
                setStyleProperty(el, property, styles[property]);
              }
            }
          });
        };
        /**
         * Run all "after" animation hooks.
         */


        var afterAnimation = function afterAnimation() {
          clearCSSAnimationsTimeout(); // Runs all after read callbacks

          _afterAddReadFunctions.forEach(function (callback) {
            return callback();
          }); // Runs all after write callbacks


          _afterAddWriteFunctions.forEach(function (callback) {
            return callback();
          }); // Updates styles and classes before animation ends


          var currentStep = willComplete ? 1 : 0;
          var addClasses = afterAddClasses;
          var removeClasses = afterRemoveClasses;
          var styles = afterStylesValue;
          elements.forEach(function (el) {
            var elementClassList = el.classList;
            addClasses.forEach(function (c) {
              return elementClassList.add(c);
            });
            removeClasses.forEach(function (c) {
              return elementClassList.remove(c);
            });

            for (var property in styles) {
              if (styles.hasOwnProperty(property)) {
                setStyleProperty(el, property, styles[property]);
              }
            }
          });
          onFinishCallbacks.forEach(function (onFinishCallback) {
            return onFinishCallback.c(currentStep, ani);
          });
          onFinishOneTimeCallbacks.forEach(function (onFinishCallback) {
            return onFinishCallback.c(currentStep, ani);
          });
          onFinishOneTimeCallbacks.length = 0;
          shouldCalculateNumAnimations = true;

          if (willComplete) {
            finished = true;
          }

          willComplete = true;
        };

        var animationFinish = function animationFinish() {
          if (numAnimationsRunning === 0) {
            return;
          }

          numAnimationsRunning--;

          if (numAnimationsRunning === 0) {
            afterAnimation();

            if (parentAnimation) {
              parentAnimation.animationFinish();
            }
          }
        };

        var initializeCSSAnimation = function initializeCSSAnimation() {
          var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          cleanUpStyleSheets();
          var processedKeyframes = processKeyframes(_keyframes);
          elements.forEach(function (element) {
            if (processedKeyframes.length > 0) {
              var keyframeRules = generateKeyframeRules(processedKeyframes);
              keyframeName = animationId !== undefined ? animationId : generateKeyframeName(keyframeRules);
              var stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
              stylesheets.push(stylesheet);
              setStyleProperty(element, 'animation-duration', "".concat(getDuration(), "ms"));
              setStyleProperty(element, 'animation-timing-function', getEasing());
              setStyleProperty(element, 'animation-delay', "".concat(getDelay(), "ms"));
              setStyleProperty(element, 'animation-fill-mode', getFill());
              setStyleProperty(element, 'animation-direction', getDirection());
              var iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
              setStyleProperty(element, 'animation-iteration-count', iterationsCount);
              setStyleProperty(element, 'animation-play-state', 'paused');

              if (toggleAnimationName) {
                setStyleProperty(element, 'animation-name', "".concat(stylesheet.id, "-alt"));
              }

              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                setStyleProperty(element, 'animation-name', stylesheet.id || null);
              });
            }
          });
        };

        var initializeWebAnimation = function initializeWebAnimation() {
          elements.forEach(function (element) {
            var animation = element.animate(_keyframes, {
              id: id,
              delay: getDelay(),
              duration: getDuration(),
              easing: getEasing(),
              iterations: getIterations(),
              fill: getFill(),
              direction: getDirection()
            });
            animation.pause();
            webAnimations.push(animation);
          });

          if (webAnimations.length > 0) {
            webAnimations[0].onfinish = function () {
              animationFinish();
            };
          }
        };

        var initializeAnimation = function initializeAnimation() {
          var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          beforeAnimation();

          if (_keyframes.length > 0) {
            if (supportsWebAnimations) {
              initializeWebAnimation();
            } else {
              initializeCSSAnimation(toggleAnimationName);
            }
          }

          initialized = true;
        };

        var setAnimationStep = function setAnimationStep(step) {
          step = Math.min(Math.max(step, 0), 0.9999);

          if (supportsWebAnimations) {
            webAnimations.forEach(function (animation) {
              animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
              animation.pause();
            });
          } else {
            var animationDuration = "-".concat(getDuration() * step, "ms");
            elements.forEach(function (element) {
              if (_keyframes.length > 0) {
                setStyleProperty(element, 'animation-delay', animationDuration);
                setStyleProperty(element, 'animation-play-state', 'paused');
              }
            });
          }
        };

        var updateWebAnimation = function updateWebAnimation(step) {
          webAnimations.forEach(function (animation) {
            animation.effect.updateTiming({
              delay: getDelay(),
              duration: getDuration(),
              easing: getEasing(),
              iterations: getIterations(),
              fill: getFill(),
              direction: getDirection()
            });
          });

          if (step !== undefined) {
            setAnimationStep(step);
          }
        };

        var updateCSSAnimation = function updateCSSAnimation() {
          var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var step = arguments.length > 1 ? arguments[1] : undefined;
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
            elements.forEach(function (element) {
              setStyleProperty(element, 'animation-name', keyframeName || null);
              setStyleProperty(element, 'animation-duration', "".concat(getDuration(), "ms"));
              setStyleProperty(element, 'animation-timing-function', getEasing());
              setStyleProperty(element, 'animation-delay', step !== undefined ? "-".concat(step * getDuration(), "ms") : "".concat(getDelay(), "ms"));
              setStyleProperty(element, 'animation-fill-mode', getFill() || null);
              setStyleProperty(element, 'animation-direction', getDirection() || null);
              var iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
              setStyleProperty(element, 'animation-iteration-count', iterationsCount);

              if (toggleAnimationName) {
                setStyleProperty(element, 'animation-name', "".concat(keyframeName, "-alt"));
              }

              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                setStyleProperty(element, 'animation-name', keyframeName || null);
              });
            });
          });
        };

        var update = function update() {
          var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var toggleAnimationName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var step = arguments.length > 2 ? arguments[2] : undefined;

          if (deep) {
            childAnimations.forEach(function (animation) {
              animation.update(deep, toggleAnimationName, step);
            });
          }

          if (supportsWebAnimations) {
            updateWebAnimation(step);
          } else {
            updateCSSAnimation(toggleAnimationName, step);
          }

          return ani;
        };

        var progressStart = function progressStart() {
          var forceLinearEasing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var step = arguments.length > 1 ? arguments[1] : undefined;
          childAnimations.forEach(function (animation) {
            animation.progressStart(forceLinearEasing, step);
          });
          pauseAnimation();
          shouldForceLinearEasing = forceLinearEasing;

          if (!initialized) {
            initializeAnimation();
          } else {
            update(false, true, step);
          }

          return ani;
        };

        var progressStep = function progressStep(step) {
          childAnimations.forEach(function (animation) {
            animation.progressStep(step);
          });
          setAnimationStep(step);
          return ani;
        };

        var progressEnd = function progressEnd(playTo, step, dur) {
          shouldForceLinearEasing = false;
          childAnimations.forEach(function (animation) {
            animation.progressEnd(playTo, step, dur);
          });

          if (dur !== undefined) {
            forceDurationValue = dur;
          }

          finished = false; // tslint:disable-next-line: strict-boolean-conditions

          willComplete = true;

          if (playTo === 0) {
            forceDirectionValue = getDirection() === 'reverse' ? 'normal' : 'reverse';

            if (forceDirectionValue === 'reverse') {
              willComplete = false;
            }

            if (supportsWebAnimations) {
              update();
              setAnimationStep(1 - step);
            } else {
              forceDelayValue = (1 - step) * getDuration() * -1;
              update(false, false);
            }
          } else if (playTo === 1) {
            if (supportsWebAnimations) {
              update();
              setAnimationStep(step);
            } else {
              forceDelayValue = step * getDuration() * -1;
              update(false, false);
            }
          }

          if (playTo !== undefined) {
            onFinish(function () {
              forceDurationValue = undefined;
              forceDirectionValue = undefined;
              forceDelayValue = undefined;
            }, {
              oneTimeCallback: true
            });

            if (!parentAnimation) {
              play();
            }
          }

          return ani;
        };

        var pauseAnimation = function pauseAnimation() {
          if (initialized) {
            if (supportsWebAnimations) {
              webAnimations.forEach(function (animation) {
                animation.pause();
              });
            } else {
              elements.forEach(function (element) {
                setStyleProperty(element, 'animation-play-state', 'paused');
              });
            }
          }
        };

        var pause = function pause() {
          childAnimations.forEach(function (animation) {
            animation.pause();
          });
          pauseAnimation();
          return ani;
        };

        var onAnimationEndFallback = function onAnimationEndFallback() {
          cssAnimationsTimerFallback = undefined;
          animationFinish();
        };

        var clearCSSAnimationsTimeout = function clearCSSAnimationsTimeout() {
          if (cssAnimationsTimerFallback) {
            clearTimeout(cssAnimationsTimerFallback);
          }
        };

        var playCSSAnimations = function playCSSAnimations() {
          clearCSSAnimationsTimeout();
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
            elements.forEach(function (element) {
              if (_keyframes.length > 0) {
                setStyleProperty(element, 'animation-play-state', 'running');
              }
            });
          });

          if (_keyframes.length === 0 || elements.length === 0) {
            animationFinish();
          } else {
            /**
             * This is a catchall in the event that a CSS Animation did not finish.
             * The Web Animations API has mechanisms in place for preventing this.
             * CSS Animations will not fire an `animationend` event
             * for elements with `display: none`. The Web Animations API
             * accounts for this, but using raw CSS Animations requires
             * this workaround.
             */
            var animationDelay = getDelay() || 0;
            var animationDuration = getDuration() || 0;
            var animationIterations = getIterations() || 1; // No need to set a timeout when animation has infinite iterations

            if (isFinite(animationIterations)) {
              cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + animationDuration * animationIterations + ANIMATION_END_FALLBACK_PADDING_MS);
            }

            animationEnd(elements[0], function () {
              clearCSSAnimationsTimeout();
              /**
               * Ensure that clean up
               * is always done a frame
               * before the onFinish handlers
               * are fired. Otherwise, there
               * may be flickering if a new
               * animation is started on the same
               * element too quickly
               *
               * TODO: Is there a cleaner way to do this?
               */

              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                clearCSSAnimationPlayState();
                Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(animationFinish);
              });
            });
          }
        };

        var clearCSSAnimationPlayState = function clearCSSAnimationPlayState() {
          elements.forEach(function (element) {
            removeStyleProperty(element, 'animation-duration');
            removeStyleProperty(element, 'animation-delay');
            removeStyleProperty(element, 'animation-play-state');
          });
        };

        var playWebAnimations = function playWebAnimations() {
          webAnimations.forEach(function (animation) {
            animation.play();
          });

          if (_keyframes.length === 0 || elements.length === 0) {
            animationFinish();
          }
        };

        var resetAnimation = function resetAnimation() {
          if (supportsWebAnimations) {
            setAnimationStep(0);
            updateWebAnimation();
          } else {
            updateCSSAnimation();
          }
        };

        var play = function play(opts) {
          return new Promise(function (resolve) {
            if (opts && opts.sync) {
              shouldForceSyncPlayback = true;
              onFinish(function () {
                return shouldForceSyncPlayback = false;
              }, {
                oneTimeCallback: true
              });
            }

            if (!initialized) {
              initializeAnimation();
            }

            if (finished) {
              resetAnimation();
              finished = false;
            }

            if (shouldCalculateNumAnimations) {
              numAnimationsRunning = childAnimations.length + 1;
              shouldCalculateNumAnimations = false;
            }

            onFinish(function () {
              return resolve();
            }, {
              oneTimeCallback: true
            });
            childAnimations.forEach(function (animation) {
              animation.play();
            });

            if (supportsWebAnimations) {
              playWebAnimations();
            } else {
              playCSSAnimations();
            }
          });
        };

        var stop = function stop() {
          childAnimations.forEach(function (animation) {
            animation.stop();
          });

          if (initialized) {
            cleanUpElements();
            initialized = false;
          }

          resetFlags();
        };

        var from = function from(property, value) {
          var firstFrame = _keyframes[0];

          if (firstFrame !== undefined && (firstFrame.offset === undefined || firstFrame.offset === 0)) {
            firstFrame[property] = value;
          } else {
            _keyframes = [_defineProperty({
              offset: 0
            }, property, value)].concat(_toConsumableArray(_keyframes));
          }

          return ani;
        };

        var to = function to(property, value) {
          var lastFrame = _keyframes[_keyframes.length - 1];

          if (lastFrame !== undefined && (lastFrame.offset === undefined || lastFrame.offset === 1)) {
            lastFrame[property] = value;
          } else {
            _keyframes = [].concat(_toConsumableArray(_keyframes), [_defineProperty({
              offset: 1
            }, property, value)]);
          }

          return ani;
        };

        var fromTo = function fromTo(property, fromValue, toValue) {
          return from(property, fromValue).to(property, toValue);
        };

        return ani = {
          parentAnimation: parentAnimation,
          elements: elements,
          childAnimations: childAnimations,
          id: id,
          animationFinish: animationFinish,
          from: from,
          to: to,
          fromTo: fromTo,
          parent: parent,
          play: play,
          pause: pause,
          stop: stop,
          destroy: destroy,
          keyframes: keyframes,
          addAnimation: addAnimation,
          addElement: addElement,
          update: update,
          fill: fill,
          direction: direction,
          iterations: iterations,
          duration: duration,
          easing: easing,
          delay: delay,
          getWebAnimations: getWebAnimations,
          getKeyframes: getKeyframes,
          getFill: getFill,
          getDirection: getDirection,
          getDelay: getDelay,
          getIterations: getIterations,
          getEasing: getEasing,
          getDuration: getDuration,
          afterAddRead: afterAddRead,
          afterAddWrite: afterAddWrite,
          afterClearStyles: afterClearStyles,
          afterStyles: afterStyles,
          afterRemoveClass: afterRemoveClass,
          afterAddClass: afterAddClass,
          beforeAddRead: beforeAddRead,
          beforeAddWrite: beforeAddWrite,
          beforeClearStyles: beforeClearStyles,
          beforeStyles: beforeStyles,
          beforeRemoveClass: beforeRemoveClass,
          beforeAddClass: beforeAddClass,
          onFinish: onFinish,
          progressStart: progressStart,
          progressStep: progressStep,
          progressEnd: progressEnd
        };
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=0-es5.js.map