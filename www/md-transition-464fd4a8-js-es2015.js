(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-transition-464fd4a8-js"],{

/***/ "RQGG":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/md.transition-464fd4a8.js ***!
  \*********************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony import */ var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-c3ff7f2e.js */ "k4ps");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");





const mdTransitionAnimation = (_, opts) => {
  const OFF_BOTTOM = '40px';
  const CENTER = '0px';
  const backDirection = (opts.direction === 'back');
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(enteringEl);
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  const rootTransition = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
  rootTransition
    .addElement(ionPageElement)
    .fill('both')
    .beforeRemoveClass('ion-page-invisible');
  // animate the component itself
  if (backDirection) {
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');
  }
  else {
    rootTransition
      .duration(opts.duration || 280)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)
      .fromTo('opacity', 0.01, 1);
  }
  // Animate toolbar if it's there
  if (enteringToolbarEle) {
    const enteringToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.addAnimation(enteringToolBar);
  }
  // setup leaving view
  if (leavingEl && backDirection) {
    // leaving content
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    leavingPage
      .addElement(Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(leavingEl))
      .onFinish(currentStep => {
      if (currentStep === 1 && leavingPage.elements.length > 0) {
        leavingPage.elements[0].style.setProperty('display', 'none');
      }
    })
      .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)
      .fromTo('opacity', 1, 0);
    rootTransition.addAnimation(leavingPage);
  }
  return rootTransition;
};




/***/ }),

/***/ "k4ps":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-c3ff7f2e.js ***!
  \*************************************************************/
/*! exports provided: L, a, b, c, d, e, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_WILL_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");



const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

const iosTransitionAnimation = () => Promise.all(/*! import() | ios-transition-48010460-js */[__webpack_require__.e(0), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72")]).then(__webpack_require__.bind(null, /*! ./ios.transition-48010460.js */ "lTIg"));
const mdTransitionAnimation = () => Promise.all(/*! import() | md-transition-464fd4a8-js */[__webpack_require__.e(0), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("md-transition-464fd4a8-js")]).then(__webpack_require__.bind(null, /*! ./md.transition-464fd4a8.js */ "RQGG"));
const transition = (opts) => {
  return new Promise((resolve, reject) => {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
      beforeTransition(opts);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
const beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  }
  else {
    enteringEl.classList.remove('can-go-back');
  }
  setPageHidden(enteringEl, false);
  if (leavingEl) {
    setPageHidden(leavingEl, false);
  }
};
const runTransition = async (opts) => {
  const animationBuilder = await getAnimationBuilder(opts);
  const ani = (animationBuilder && _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["B"].isBrowser)
    ? animation(animationBuilder, opts)
    : noAnimation(opts); // fast path for no animation
  return ani;
};
const afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
  }
};
const getAnimationBuilder = async (opts) => {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return undefined;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = (opts.mode === 'ios')
    ? (await iosTransitionAnimation()).iosTransitionAnimation
    : (await mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
};
const animation = async (animationBuilder, opts) => {
  await waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = await playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(undefined);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
};
const noAnimation = async (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  await waitForReady(opts, false);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
};
const waitForReady = async (opts, defaultDeep) => {
  const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
  const promises = deep ? [
    deepReady(opts.enteringEl),
    deepReady(opts.leavingEl),
  ] : [
    shallowReady(opts.enteringEl),
    shallowReady(opts.leavingEl),
  ];
  await Promise.all(promises);
  await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
  if (viewIsReady) {
    await viewIsReady(enteringEl);
  }
};
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  // cool, let's do this, start the transition
  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  }
  else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  }
  // create a callback for when the animation is done
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false,
    });
    el.dispatchEvent(ev);
  }
};
const shallowReady = (el) => {
  if (el) {
    return new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(el, resolve));
  }
  return Promise.resolve();
};
const deepReady = async (el) => {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = await element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    }
    await Promise.all(Array.from(element.children).map(deepReady));
  }
};
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  }
  else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = (direction === 'back')
      ? '99'
      : '101';
  }
  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};
const getIonPageElement = (element) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};




/***/ })

}]);
//# sourceMappingURL=md-transition-464fd4a8-js-es2015.js.map