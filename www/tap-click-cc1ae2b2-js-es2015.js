(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tap-click-cc1ae2b2-js"],{

/***/ "1vRN":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return componentOnReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAriaLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElementRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return inheritAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return raf; });
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
  }
  else {
    raf(() => callback(el));
  }
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const addEventListener = (el, eventName, callback, opts) => {
  if (typeof window !== 'undefined') {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const ael = config.get('_ael');
      if (ael) {
        return ael(el, eventName, callback, opts);
      }
      else if (config._ael) {
        return config._ael(el, eventName, callback, opts);
      }
    }
  }
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  if (typeof window !== 'undefined') {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const rel = config.get('_rel');
      if (rel) {
        return rel(el, eventName, callback, opts);
      }
      else if (config._rel) {
        return config._rel(el, eventName, callback, opts);
      }
    }
  }
  return el.removeEventListener(eventName, callback, opts);
};
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('ion-item');
  if (itemEl) {
    return itemEl.querySelector('ion-label');
  }
  return null;
};
/**
 * This method is used for Ionic's input components that use Shadow DOM. In
 * order to properly label the inputs to work with screen readers, we need
 * to get the text content of the label outside of the shadow root and pass
 * it to the input inside of the shadow root.
 *
 * Referencing label elements by id from outside of the component is
 * impossible due to the shadow boundary, read more here:
 * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
 *
 * @param componentEl The shadow element that needs the aria label
 * @param inputId The unique identifier for the input
 */
const getAriaLabel = (componentEl, inputId) => {
  let labelText;
  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label
  const labelledBy = componentEl.getAttribute('aria-labelledby');
  // Grab the id off of the component in case they are using
  // a custom label using the label element
  const componentId = componentEl.id;
  let labelId = labelledBy !== null && labelledBy.trim() !== ''
    ? labelledBy
    : inputId + '-lbl';
  let label = labelledBy !== null && labelledBy.trim() !== ''
    ? document.getElementById(labelledBy)
    : findItemLabel(componentEl);
  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }
    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true');
    // if there is no label, check to see if the user has provided
    // one by setting an id on the component and using the label element
  }
  else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);
    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      }
      else {
        label.id = labelId = `${componentId}-lbl`;
      }
      labelText = label.textContent;
    }
  }
  return { label, labelId, labelText };
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};
const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // tslint:disable-line
    throw new Error(message);
  }
};
const now = (ev) => {
  return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (ev.pageX !== undefined) {
      return { x: ev.pageX, y: ev.pageY };
    }
  }
  return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = (side) => {
  const isRTL = document.dir === 'rtl';
  switch (side) {
    case 'start': return isRTL;
    case 'end': return !isRTL;
    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};
const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};




/***/ }),

/***/ "cg4z":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/tap-click-cc1ae2b2.js ***!
  \*****************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const startTapClick = (config) => {
  let lastTouch = -MOUSE_WAIT * 10;
  let lastActivated = 0;
  let scrollingEl;
  let activatableEle;
  let activeRipple;
  let activeDefer;
  const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
  const clearDefers = new WeakMap();
  const isScrolling = () => {
    return scrollingEl !== undefined && scrollingEl.parentElement !== null;
  };
  // Touch Events
  const onTouchStart = (ev) => {
    lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
    pointerDown(ev);
  };
  const onTouchEnd = (ev) => {
    lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
    pointerUp(ev);
  };
  const onMouseDown = (ev) => {
    const t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerDown(ev);
    }
  };
  const onMouseUp = (ev) => {
    const t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerUp(ev);
    }
  };
  const cancelActive = () => {
    clearTimeout(activeDefer);
    activeDefer = undefined;
    if (activatableEle) {
      removeActivated(false);
      activatableEle = undefined;
    }
  };
  const pointerDown = (ev) => {
    if (activatableEle || isScrolling()) {
      return;
    }
    scrollingEl = undefined;
    setActivatedElement(getActivatableTarget(ev), ev);
  };
  const pointerUp = (ev) => {
    setActivatedElement(undefined, ev);
  };
  const setActivatedElement = (el, ev) => {
    // do nothing
    if (el && el === activatableEle) {
      return;
    }
    clearTimeout(activeDefer);
    activeDefer = undefined;
    const { x, y } = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    // deactivate selected
    if (activatableEle) {
      if (clearDefers.has(activatableEle)) {
        throw new Error('internal error');
      }
      if (!activatableEle.classList.contains(ACTIVATED)) {
        addActivated(activatableEle, x, y);
      }
      removeActivated(true);
    }
    // activate
    if (el) {
      const deferId = clearDefers.get(el);
      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(el);
      }
      const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
      el.classList.remove(ACTIVATED);
      activeDefer = setTimeout(() => {
        addActivated(el, x, y);
        activeDefer = undefined;
      }, delay);
    }
    activatableEle = el;
  };
  const addActivated = (el, x, y) => {
    lastActivated = Date.now();
    el.classList.add(ACTIVATED);
    const rippleEffect = useRippleEffect && getRippleEffect(el);
    if (rippleEffect && rippleEffect.addRipple) {
      removeRipple();
      activeRipple = rippleEffect.addRipple(x, y);
    }
  };
  const removeRipple = () => {
    if (activeRipple !== undefined) {
      activeRipple.then(remove => remove());
      activeRipple = undefined;
    }
  };
  const removeActivated = (smooth) => {
    removeRipple();
    const active = activatableEle;
    if (!active) {
      return;
    }
    const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
    if (smooth && time > 0 && !isInstant(active)) {
      const deferId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearDefers.delete(active);
      }, CLEAR_STATE_DEFERS);
      clearDefers.set(active, deferId);
    }
    else {
      active.classList.remove(ACTIVATED);
    }
  };
  const doc = document;
  doc.addEventListener('ionScrollStart', ev => {
    scrollingEl = ev.target;
    cancelActive();
  });
  doc.addEventListener('ionScrollEnd', () => {
    scrollingEl = undefined;
  });
  doc.addEventListener('ionGestureCaptured', cancelActive);
  doc.addEventListener('touchstart', onTouchStart, true);
  doc.addEventListener('touchcancel', onTouchEnd, true);
  doc.addEventListener('touchend', onTouchEnd, true);
  doc.addEventListener('mousedown', onMouseDown, true);
  doc.addEventListener('mouseup', onMouseUp, true);
};
const getActivatableTarget = (ev) => {
  if (ev.composedPath) {
    const path = ev.composedPath();
    for (let i = 0; i < path.length - 2; i++) {
      const el = path[i];
      if (el.classList && el.classList.contains('ion-activatable')) {
        return el;
      }
    }
  }
  else {
    return ev.target.closest('.ion-activatable');
  }
};
const isInstant = (el) => {
  return el.classList.contains('ion-activatable-instant');
};
const getRippleEffect = (el) => {
  if (el.shadowRoot) {
    const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
    if (ripple) {
      return ripple;
    }
  }
  return el.querySelector('ion-ripple-effect');
};
const ACTIVATED = 'ion-activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;




/***/ }),

/***/ "eK4A":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/tap-click-cc1ae2b2.js ***!
  \*********************************************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "qRyU");


const startTapClick = (config) => {
  let lastTouch = -MOUSE_WAIT * 10;
  let lastActivated = 0;
  let scrollingEl;
  let activatableEle;
  let activeRipple;
  let activeDefer;
  const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
  const clearDefers = new WeakMap();
  const isScrolling = () => {
    return scrollingEl !== undefined && scrollingEl.parentElement !== null;
  };
  // Touch Events
  const onTouchStart = (ev) => {
    lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
    pointerDown(ev);
  };
  const onTouchEnd = (ev) => {
    lastTouch = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev);
    pointerUp(ev);
  };
  const onMouseDown = (ev) => {
    const t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerDown(ev);
    }
  };
  const onMouseUp = (ev) => {
    const t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerUp(ev);
    }
  };
  const cancelActive = () => {
    clearTimeout(activeDefer);
    activeDefer = undefined;
    if (activatableEle) {
      removeActivated(false);
      activatableEle = undefined;
    }
  };
  const pointerDown = (ev) => {
    if (activatableEle || isScrolling()) {
      return;
    }
    scrollingEl = undefined;
    setActivatedElement(getActivatableTarget(ev), ev);
  };
  const pointerUp = (ev) => {
    setActivatedElement(undefined, ev);
  };
  const setActivatedElement = (el, ev) => {
    // do nothing
    if (el && el === activatableEle) {
      return;
    }
    clearTimeout(activeDefer);
    activeDefer = undefined;
    const { x, y } = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    // deactivate selected
    if (activatableEle) {
      if (clearDefers.has(activatableEle)) {
        throw new Error('internal error');
      }
      if (!activatableEle.classList.contains(ACTIVATED)) {
        addActivated(activatableEle, x, y);
      }
      removeActivated(true);
    }
    // activate
    if (el) {
      const deferId = clearDefers.get(el);
      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(el);
      }
      const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
      el.classList.remove(ACTIVATED);
      activeDefer = setTimeout(() => {
        addActivated(el, x, y);
        activeDefer = undefined;
      }, delay);
    }
    activatableEle = el;
  };
  const addActivated = (el, x, y) => {
    lastActivated = Date.now();
    el.classList.add(ACTIVATED);
    const rippleEffect = useRippleEffect && getRippleEffect(el);
    if (rippleEffect && rippleEffect.addRipple) {
      removeRipple();
      activeRipple = rippleEffect.addRipple(x, y);
    }
  };
  const removeRipple = () => {
    if (activeRipple !== undefined) {
      activeRipple.then(remove => remove());
      activeRipple = undefined;
    }
  };
  const removeActivated = (smooth) => {
    removeRipple();
    const active = activatableEle;
    if (!active) {
      return;
    }
    const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
    if (smooth && time > 0 && !isInstant(active)) {
      const deferId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearDefers.delete(active);
      }, CLEAR_STATE_DEFERS);
      clearDefers.set(active, deferId);
    }
    else {
      active.classList.remove(ACTIVATED);
    }
  };
  const doc = document;
  doc.addEventListener('ionScrollStart', ev => {
    scrollingEl = ev.target;
    cancelActive();
  });
  doc.addEventListener('ionScrollEnd', () => {
    scrollingEl = undefined;
  });
  doc.addEventListener('ionGestureCaptured', cancelActive);
  doc.addEventListener('touchstart', onTouchStart, true);
  doc.addEventListener('touchcancel', onTouchEnd, true);
  doc.addEventListener('touchend', onTouchEnd, true);
  doc.addEventListener('mousedown', onMouseDown, true);
  doc.addEventListener('mouseup', onMouseUp, true);
};
const getActivatableTarget = (ev) => {
  if (ev.composedPath) {
    const path = ev.composedPath();
    for (let i = 0; i < path.length - 2; i++) {
      const el = path[i];
      if (el.classList && el.classList.contains('ion-activatable')) {
        return el;
      }
    }
  }
  else {
    return ev.target.closest('.ion-activatable');
  }
};
const isInstant = (el) => {
  return el.classList.contains('ion-activatable-instant');
};
const getRippleEffect = (el) => {
  if (el.shadowRoot) {
    const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
    if (ripple) {
      return ripple;
    }
  }
  return el.querySelector('ion-ripple-effect');
};
const ACTIVATED = 'ion-activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;




/***/ })

}]);
//# sourceMappingURL=tap-click-cc1ae2b2-js-es2015.js.map