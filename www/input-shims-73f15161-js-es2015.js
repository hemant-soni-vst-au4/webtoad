(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-shims-73f15161-js"],{

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

/***/ "3Iwd":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/input-shims-73f15161.js ***!
  \*******************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const cloneMap = new WeakMap();
const relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY);
  }
  else {
    removeClone(componentEl, inputEl);
  }
};
const isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
const addClone = (componentEl, inputEl, inputRelativeY) => {
  // this allows for the actual input to receive the focus from
  // the user's touch event, but before it receives focus, it
  // moves the actual input to a location that will not screw
  // up the app's layout, and does not allow the native browser
  // to attempt to scroll the input into place (messing up headers/footers)
  // the cloned input fills the area of where native input should be
  // while the native input fakes out the browser by relocating itself
  // before it receives the actual focus event
  // We hide the focused input (with the visible caret) invisible by making it scale(0),
  const parentEl = inputEl.parentNode;
  // DOM WRITES
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add('cloned-input');
  clonedEl.tabIndex = -1;
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc = componentEl.ownerDocument;
  const tx = doc.dir === 'rtl' ? 9999 : -9999;
  componentEl.style.pointerEvents = 'none';
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
const removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = '';
  inputEl.style.transform = '';
};

const enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => { return; };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollStart', hideCaret);
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollEnd', showCaret);
  inputEl.addEventListener('blur', onBlur);
  return () => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollStart', hideCaret);
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollEnd', showCaret);
    inputEl.addEventListener('ionBlur', onBlur);
  };
};

const SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';
const enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    // if app did scroll return early
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc.activeElement;
    if (!active) {
      return;
    }
    // only blur if the active element is a text-input or a textarea
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    // if the selected target is the active element, do not blur
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    // TODO: find a better way, why 50ms?
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(doc, 'ionScrollStart', onScroll);
  doc.addEventListener('focusin', onFocusin, true);
  doc.addEventListener('touchend', onTouchend, false);
  return () => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(doc, 'ionScrollStart', onScroll, true);
    doc.removeEventListener('focusin', onFocusin, true);
    doc.removeEventListener('touchend', onTouchend, false);
  };
};

const SCROLL_ASSIST_SPEED = 0.3;
const getScrollData = (componentEl, contentEl, keyboardHeight) => {
  const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
};
const calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  // compute input's Y values relative to the body
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  // compute visible area
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  // compute safe area
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom * 0.75;
  // figure out if each edge of the input is within the safe area
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  // desiredScrollAmount is the negated distance to the safe area according to our calculations.
  const desiredScrollAmount = Math.round((distanceToBottom < 0)
    ? -distanceToBottom
    : (distanceToTop > 0)
      ? -distanceToTop
      : 0);
  // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
  // gets focus, so make sure we don't scroll the input above the visible area
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};

const enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight) => {
  let coord;
  const touchStart = (ev) => {
    coord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
  };
  const touchEnd = (ev) => {
    // input cover touchend/mouseup
    if (!coord) {
      return;
    }
    // get where the touchend/mouseup ended
    const endCoord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    // focus this input if the pointer hasn't moved XX pixels
    // and the input doesn't already have focus
    if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
      ev.stopPropagation();
      // begin the input focus process
      jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
    }
  };
  componentEl.addEventListener('touchstart', touchStart, true);
  componentEl.addEventListener('touchend', touchEnd, true);
  return () => {
    componentEl.removeEventListener('touchstart', touchStart, true);
    componentEl.removeEventListener('touchend', touchEnd, true);
  };
};
const jsSetFocus = async (componentEl, inputEl, contentEl, footerEl, keyboardHeight) => {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, (contentEl || footerEl), keyboardHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    // the text input is in a safe position that doesn't
    // require it to be scrolled into view, just set focus now
    inputEl.focus();
    return;
  }
  // temporarily move the focus to the focus holder so the browser
  // doesn't freak out while it's trying to get the input in place
  // at this point the native text input still does not have focus
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
  inputEl.focus();
  /**
   * Relocating/Focusing input causes the
   * click event to be cancelled, so
   * manually fire one here.
   */
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => componentEl.click());
  /* tslint:disable-next-line */
  if (typeof window !== 'undefined') {
    let scrollContentTimeout;
    const scrollContent = async () => {
      // clean up listeners and timeouts
      if (scrollContentTimeout !== undefined) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.removeEventListener('ionKeyboardDidShow', scrollContent);
      // scroll the input into place
      if (contentEl) {
        await contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      // the scroll view is in the correct position now
      // give the native text input focus
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      // ensure this is the focused input
      inputEl.focus();
    };
    const doubleKeyboardEventListener = () => {
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.addEventListener('ionKeyboardDidShow', scrollContent);
    };
    if (contentEl) {
      const scrollEl = await contentEl.getScrollElement();
      /**
       * scrollData will only consider the amount we need
       * to scroll in order to properly bring the input
       * into view. It will not consider the amount
       * we can scroll in the content element.
       * As a result, scrollData may request a greater
       * scroll position than is currently available
       * in the DOM. If this is the case, we need to
       * wait for the webview to resize/the keyboard
       * to show in order for additional scroll
       * bandwidth to become available.
       */
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (scrollData.scrollAmount > (totalScrollAmount - scrollEl.scrollTop)) {
        /**
         * On iOS devices, the system will show a "Passwords" bar above the keyboard
         * after the initial keyboard is shown. This prevents the webview from resizing
         * until the "Passwords" bar is shown, so we need to wait for that to happen first.
         */
        if (inputEl.type === 'password') {
          // Add 50px to account for the "Passwords" bar
          scrollData.scrollAmount += 50;
          window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
        }
        else {
          window.addEventListener('ionKeyboardDidShow', scrollContent);
        }
        /**
         * This should only fire in 2 instances:
         * 1. The app is very slow.
         * 2. The app is running in a browser on an old OS
         * that does not support Ionic Keyboard Events
         */
        scrollContentTimeout = setTimeout(scrollContent, 1000);
        return;
      }
    }
    scrollContent();
  }
};
const hasPointerMoved = (threshold, startCoord, endCoord) => {
  if (startCoord && endCoord) {
    const deltaX = (startCoord.x - endCoord.x);
    const deltaY = (startCoord.y - endCoord.y);
    const distance = deltaX * deltaX + deltaY * deltaY;
    return distance > (threshold * threshold);
  }
  return false;
};

const PADDING_TIMER_KEY = '$ionPaddingTimer';
const enableScrollPadding = (keyboardHeight) => {
  const doc = document;
  const onFocusin = (ev) => {
    setScrollPadding(ev.target, keyboardHeight);
  };
  const onFocusout = (ev) => {
    setScrollPadding(ev.target, 0);
  };
  doc.addEventListener('focusin', onFocusin);
  doc.addEventListener('focusout', onFocusout);
  return () => {
    doc.removeEventListener('focusin', onFocusin);
    doc.removeEventListener('focusout', onFocusout);
  };
};
const setScrollPadding = (input, keyboardHeight) => {
  if (input.tagName !== 'INPUT') {
    return;
  }
  if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
    return;
  }
  if (input.parentElement &&
    input.parentElement.parentElement &&
    input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
    return;
  }
  const el = input.closest('ion-content');
  if (el === null) {
    return;
  }
  const timer = el[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (keyboardHeight > 0) {
    el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
  }
  else {
    el[PADDING_TIMER_KEY] = setTimeout(() => {
      el.style.setProperty('--keyboard-offset', '0px');
    }, 120);
  }
};

const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
const startInputShims = (config) => {
  const doc = document;
  const keyboardHeight = config.getNumber('keyboardHeight', 290);
  const scrollAssist = config.getBoolean('scrollAssist', true);
  const hideCaret = config.getBoolean('hideCaretOnScroll', true);
  const inputBlurring = config.getBoolean('inputBlurring', true);
  const scrollPadding = config.getBoolean('scrollPadding', true);
  const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
  const hideCaretMap = new WeakMap();
  const scrollAssistMap = new WeakMap();
  const registerInput = async (componentEl) => {
    await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
    const scrollEl = componentEl.closest('ion-content');
    const footerEl = (!scrollEl) ? componentEl.closest('ion-footer') : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    if ((!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight);
      scrollAssistMap.set(componentEl, rmFn);
    }
  };
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  if (scrollPadding && SCROLL_PADDING) {
    enableScrollPadding(keyboardHeight);
  }
  // Input might be already loaded in the DOM before ion-device-hacks did.
  // At this point we need to look for all of the inputs not registered yet
  // and register them.
  for (const input of inputs) {
    registerInput(input);
  }
  doc.addEventListener('ionInputDidLoad', ((ev) => {
    registerInput(ev.detail);
  }));
  doc.addEventListener('ionInputDidUnload', ((ev) => {
    unregisterInput(ev.detail);
  }));
};




/***/ }),

/***/ "4+5D":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/input-shims-73f15161.js ***!
  \***********************************************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "qRyU");


const cloneMap = new WeakMap();
const relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY);
  }
  else {
    removeClone(componentEl, inputEl);
  }
};
const isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
const addClone = (componentEl, inputEl, inputRelativeY) => {
  // this allows for the actual input to receive the focus from
  // the user's touch event, but before it receives focus, it
  // moves the actual input to a location that will not screw
  // up the app's layout, and does not allow the native browser
  // to attempt to scroll the input into place (messing up headers/footers)
  // the cloned input fills the area of where native input should be
  // while the native input fakes out the browser by relocating itself
  // before it receives the actual focus event
  // We hide the focused input (with the visible caret) invisible by making it scale(0),
  const parentEl = inputEl.parentNode;
  // DOM WRITES
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add('cloned-input');
  clonedEl.tabIndex = -1;
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc = componentEl.ownerDocument;
  const tx = doc.dir === 'rtl' ? 9999 : -9999;
  componentEl.style.pointerEvents = 'none';
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
const removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = '';
  inputEl.style.transform = '';
};

const enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => { return; };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollStart', hideCaret);
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollEnd', showCaret);
  inputEl.addEventListener('blur', onBlur);
  return () => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollStart', hideCaret);
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollEnd', showCaret);
    inputEl.addEventListener('ionBlur', onBlur);
  };
};

const SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';
const enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    // if app did scroll return early
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc.activeElement;
    if (!active) {
      return;
    }
    // only blur if the active element is a text-input or a textarea
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    // if the selected target is the active element, do not blur
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    // TODO: find a better way, why 50ms?
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["a"])(doc, 'ionScrollStart', onScroll);
  doc.addEventListener('focusin', onFocusin, true);
  doc.addEventListener('touchend', onTouchend, false);
  return () => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(doc, 'ionScrollStart', onScroll, true);
    doc.removeEventListener('focusin', onFocusin, true);
    doc.removeEventListener('touchend', onTouchend, false);
  };
};

const SCROLL_ASSIST_SPEED = 0.3;
const getScrollData = (componentEl, contentEl, keyboardHeight) => {
  const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
};
const calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  // compute input's Y values relative to the body
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  // compute visible area
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  // compute safe area
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom * 0.75;
  // figure out if each edge of the input is within the safe area
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  // desiredScrollAmount is the negated distance to the safe area according to our calculations.
  const desiredScrollAmount = Math.round((distanceToBottom < 0)
    ? -distanceToBottom
    : (distanceToTop > 0)
      ? -distanceToTop
      : 0);
  // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
  // gets focus, so make sure we don't scroll the input above the visible area
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};

const enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight) => {
  let coord;
  const touchStart = (ev) => {
    coord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
  };
  const touchEnd = (ev) => {
    // input cover touchend/mouseup
    if (!coord) {
      return;
    }
    // get where the touchend/mouseup ended
    const endCoord = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    // focus this input if the pointer hasn't moved XX pixels
    // and the input doesn't already have focus
    if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
      ev.stopPropagation();
      // begin the input focus process
      jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
    }
  };
  componentEl.addEventListener('touchstart', touchStart, true);
  componentEl.addEventListener('touchend', touchEnd, true);
  return () => {
    componentEl.removeEventListener('touchstart', touchStart, true);
    componentEl.removeEventListener('touchend', touchEnd, true);
  };
};
const jsSetFocus = async (componentEl, inputEl, contentEl, footerEl, keyboardHeight) => {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, (contentEl || footerEl), keyboardHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    // the text input is in a safe position that doesn't
    // require it to be scrolled into view, just set focus now
    inputEl.focus();
    return;
  }
  // temporarily move the focus to the focus holder so the browser
  // doesn't freak out while it's trying to get the input in place
  // at this point the native text input still does not have focus
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
  inputEl.focus();
  /**
   * Relocating/Focusing input causes the
   * click event to be cancelled, so
   * manually fire one here.
   */
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => componentEl.click());
  /* tslint:disable-next-line */
  if (typeof window !== 'undefined') {
    let scrollContentTimeout;
    const scrollContent = async () => {
      // clean up listeners and timeouts
      if (scrollContentTimeout !== undefined) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.removeEventListener('ionKeyboardDidShow', scrollContent);
      // scroll the input into place
      if (contentEl) {
        await contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      // the scroll view is in the correct position now
      // give the native text input focus
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      // ensure this is the focused input
      inputEl.focus();
    };
    const doubleKeyboardEventListener = () => {
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.addEventListener('ionKeyboardDidShow', scrollContent);
    };
    if (contentEl) {
      const scrollEl = await contentEl.getScrollElement();
      /**
       * scrollData will only consider the amount we need
       * to scroll in order to properly bring the input
       * into view. It will not consider the amount
       * we can scroll in the content element.
       * As a result, scrollData may request a greater
       * scroll position than is currently available
       * in the DOM. If this is the case, we need to
       * wait for the webview to resize/the keyboard
       * to show in order for additional scroll
       * bandwidth to become available.
       */
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (scrollData.scrollAmount > (totalScrollAmount - scrollEl.scrollTop)) {
        /**
         * On iOS devices, the system will show a "Passwords" bar above the keyboard
         * after the initial keyboard is shown. This prevents the webview from resizing
         * until the "Passwords" bar is shown, so we need to wait for that to happen first.
         */
        if (inputEl.type === 'password') {
          // Add 50px to account for the "Passwords" bar
          scrollData.scrollAmount += 50;
          window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
        }
        else {
          window.addEventListener('ionKeyboardDidShow', scrollContent);
        }
        /**
         * This should only fire in 2 instances:
         * 1. The app is very slow.
         * 2. The app is running in a browser on an old OS
         * that does not support Ionic Keyboard Events
         */
        scrollContentTimeout = setTimeout(scrollContent, 1000);
        return;
      }
    }
    scrollContent();
  }
};
const hasPointerMoved = (threshold, startCoord, endCoord) => {
  if (startCoord && endCoord) {
    const deltaX = (startCoord.x - endCoord.x);
    const deltaY = (startCoord.y - endCoord.y);
    const distance = deltaX * deltaX + deltaY * deltaY;
    return distance > (threshold * threshold);
  }
  return false;
};

const PADDING_TIMER_KEY = '$ionPaddingTimer';
const enableScrollPadding = (keyboardHeight) => {
  const doc = document;
  const onFocusin = (ev) => {
    setScrollPadding(ev.target, keyboardHeight);
  };
  const onFocusout = (ev) => {
    setScrollPadding(ev.target, 0);
  };
  doc.addEventListener('focusin', onFocusin);
  doc.addEventListener('focusout', onFocusout);
  return () => {
    doc.removeEventListener('focusin', onFocusin);
    doc.removeEventListener('focusout', onFocusout);
  };
};
const setScrollPadding = (input, keyboardHeight) => {
  if (input.tagName !== 'INPUT') {
    return;
  }
  if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
    return;
  }
  if (input.parentElement &&
    input.parentElement.parentElement &&
    input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
    return;
  }
  const el = input.closest('ion-content');
  if (el === null) {
    return;
  }
  const timer = el[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (keyboardHeight > 0) {
    el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
  }
  else {
    el[PADDING_TIMER_KEY] = setTimeout(() => {
      el.style.setProperty('--keyboard-offset', '0px');
    }, 120);
  }
};

const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
const startInputShims = (config) => {
  const doc = document;
  const keyboardHeight = config.getNumber('keyboardHeight', 290);
  const scrollAssist = config.getBoolean('scrollAssist', true);
  const hideCaret = config.getBoolean('hideCaretOnScroll', true);
  const inputBlurring = config.getBoolean('inputBlurring', true);
  const scrollPadding = config.getBoolean('scrollPadding', true);
  const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
  const hideCaretMap = new WeakMap();
  const scrollAssistMap = new WeakMap();
  const registerInput = async (componentEl) => {
    await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
    const scrollEl = componentEl.closest('ion-content');
    const footerEl = (!scrollEl) ? componentEl.closest('ion-footer') : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    if ((!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight);
      scrollAssistMap.set(componentEl, rmFn);
    }
  };
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  if (scrollPadding && SCROLL_PADDING) {
    enableScrollPadding(keyboardHeight);
  }
  // Input might be already loaded in the DOM before ion-device-hacks did.
  // At this point we need to look for all of the inputs not registered yet
  // and register them.
  for (const input of inputs) {
    registerInput(input);
  }
  doc.addEventListener('ionInputDidLoad', ((ev) => {
    registerInput(ev.detail);
  }));
  doc.addEventListener('ionInputDidUnload', ((ev) => {
    unregisterInput(ev.detail);
  }));
};




/***/ })

}]);
//# sourceMappingURL=input-shims-73f15161-js-es2015.js.map