(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "TvZU":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-modal.entry.js ***!
  \**************************************************************/
/*! exports provided: ion_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function() { return Modal; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework-delegate-4392cd63.js */ "acej");
/* harmony import */ var _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-28c23c35.js */ "7OTs");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");
/* harmony import */ var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-c3ff7f2e.js */ "k4ps");
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "bC4P");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "y08P");













// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.93,
};
const createSwipeToCloseGesture = (el, animation, onDismiss) => {
  const height = el.offsetHeight;
  let isOpen = false;
  const canStart = (detail) => {
    const target = detail.event.target;
    if (target === null ||
      !target.closest) {
      return true;
    }
    const content = target.closest('ion-content');
    if (content === null) {
      return true;
    }
    // Target is in the content so we don't start the gesture.
    // We could be more nuanced here and allow it for content that
    // does not need to scroll.
    return false;
  };
  const onStart = () => {
    animation.progressStart(true, (isOpen) ? 1 : 0);
  };
  const onMove = (detail) => {
    const step = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["j"])(0.0001, detail.deltaY / height, 0.9999);
    animation.progressStep(step);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const step = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["j"])(0.0001, detail.deltaY / height, 0.9999);
    const threshold = (detail.deltaY + velocity * 1000) / height;
    const shouldComplete = threshold >= 0.5;
    let newStepValue = (shouldComplete) ? -0.001 : 0.001;
    if (!shouldComplete) {
      animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
      newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
    }
    else {
      animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
      newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
    }
    const duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    animation
      .onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    })
      .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);
    if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_8__["createGesture"])({
    el,
    gestureName: 'modalSwipeToClose',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
const computeDuration = (remaining, velocity) => {
  return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["j"])(400, remaining / Math.abs(velocity * 1.1), 500);
};

/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, presentingEl) => {
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  const wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
  const baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(500)
    .addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
    const presentingAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
      .beforeStyles({
      'transform': 'translateY(0)',
      'transform-origin': 'top center',
      'overflow': 'hidden'
    });
    const bodyEl = document.body;
    if (isMobile) {
      /**
       * Fallback for browsers that does not support `max()` (ex: Firefox)
       * No need to worry about statusbar padding since engines like Gecko
       * are not used as the engine for standlone Cordova/Capacitor apps
       */
      const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation
        .afterStyles({
        'transform': finalTransform
      })
        .beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black'))
        .addElement(presentingEl)
        .keyframes([
        { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
        { offset: 1, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    }
    else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '0', '1');
      }
      else {
        const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation
          .afterStyles({
          'transform': finalTransform
        })
          .addElement(presentingEl.querySelector('.modal-wrapper'))
          .keyframes([
          { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
          { offset: 1, filter: 'contrast(0.85)', transform: finalTransform }
        ]);
        const shadowAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
          .afterStyles({
          'transform': finalTransform
        })
          .addElement(presentingEl.querySelector('.modal-shadow'))
          .keyframes([
          { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
          { offset: 1, opacity: '0', transform: finalTransform }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  }
  else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};

/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
  const wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
  const baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(duration)
    .addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
    const presentingAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
      .beforeClearStyles(['transform'])
      .afterClearStyles(['transform'])
      .onFinish(currentStep => {
      // only reset background color if this is the last card-style modal
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty('overflow', '');
      const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty('background-color', '');
      }
    });
    const bodyEl = document.body;
    if (isMobile) {
      const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation
        .addElement(presentingEl)
        .keyframes([
        { offset: 0, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' },
        { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    }
    else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '1', '0');
      }
      else {
        const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation
          .addElement(presentingEl.querySelector('.modal-wrapper'))
          .afterStyles({
          'transform': 'translate3d(0, 0, 0)'
        })
          .keyframes([
          { offset: 0, filter: 'contrast(0.85)', transform: finalTransform },
          { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' }
        ]);
        const shadowAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])()
          .addElement(presentingEl.querySelector('.modal-shadow'))
          .afterStyles({
          'transform': 'translateY(0) scale(1)'
        })
          .keyframes([
          { offset: 0, opacity: '0', transform: finalTransform },
          { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  }
  else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
  const baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  const wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  wrapperAnimation
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .keyframes([
    { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
  ]);
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(280)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
  const baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  const wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
  const wrapperEl = baseEl.querySelector('.modal-wrapper');
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
  wrapperAnimation
    .addElement(wrapperEl)
    .keyframes([
    { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
    { offset: 1, opacity: 0, transform: 'translateY(40px)' }
  ]);
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.47,0,0.745,0.715)')
    .duration(200)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const modalIosCss = ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";

const modalMdCss = ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";

const Modal = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidPresent", 7);
    this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillPresent", 7);
    this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillDismiss", 7);
    this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidDismiss", 7);
    // Whether or not modal is being dismissed via gesture
    this.gestureAnimationDismissing = false;
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = true;
    /**
     * If `true`, the modal will be dismissed when the backdrop is clicked.
     */
    this.backdropDismiss = true;
    /**
     * If `true`, a backdrop will be displayed behind the modal.
     */
    this.showBackdrop = true;
    /**
     * If `true`, the modal will animate.
     */
    this.animated = true;
    /**
     * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
     */
    this.swipeToClose = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
    };
    this.onDismiss = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.dismiss();
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
  }
  swipeToCloseChanged(enable) {
    if (this.gesture) {
      this.gesture.enable(enable);
    }
    else if (enable) {
      this.initSwipeToClose();
    }
  }
  connectedCallback() {
    Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
  }
  /**
   * Present the modal overlay after it has been created.
   */
  async present() {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector(`.modal-wrapper`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
    this.usersElement = await Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);
    await Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this.usersElement);
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => this.el.classList.add('show-modal'));
    await Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);
    if (this.swipeToClose) {
      this.initSwipeToClose();
    }
  }
  initSwipeToClose() {
    if (Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) !== 'ios') {
      return;
    }
    // All of the elements needed for the swipe gesture
    // should be in the DOM and referenced by now, except
    // for the presenting el
    const animationBuilder = this.leaveAnimation || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('modalLeave', iosLeaveAnimation);
    const ani = this.animation = animationBuilder(this.el, this.presentingElement);
    this.gesture = createSwipeToCloseGesture(this.el, ani, () => {
      /**
       * While the gesture animation is finishing
       * it is possible for a user to tap the backdrop.
       * This would result in the dismiss animation
       * being played again. Typically this is avoided
       * by setting `presented = false` on the overlay
       * component; however, we cannot do that here as
       * that would prevent the element from being
       * removed from the DOM.
       */
      this.gestureAnimationDismissing = true;
      this.animation.onFinish(async () => {
        await this.dismiss(undefined, 'gesture');
        this.gestureAnimationDismissing = false;
      });
    });
    this.gesture.enable(true);
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   */
  async dismiss(data, role) {
    if (this.gestureAnimationDismissing && role !== 'gesture') {
      return false;
    }
    const enteringAnimation = _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["h"].get(this) || [];
    const dismissed = await Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);
    if (dismissed) {
      await Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.delegate, this.usersElement);
      if (this.animation) {
        this.animation.destroy();
      }
      enteringAnimation.forEach(ani => ani.destroy());
    }
    this.animation = undefined;
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalDidDismiss');
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalWillDismiss');
  }
  render() {
    const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "no-router": true, "aria-modal": "true", tabindex: "-1", class: Object.assign({ [mode]: true, [`modal-card`]: this.presentingElement !== undefined && mode === 'ios' }, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)), style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), mode === 'ios' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-shadow" }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { tabindex: "0" }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", class: "modal-wrapper ion-overlay-wrapper" }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { tabindex: "0" })));
  }
  get el() { return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this); }
  static get watchers() { return {
    "swipeToClose": ["swipeToCloseChanged"]
  }; }
};
const LIFECYCLE_MAP = {
  'ionModalDidPresent': 'ionViewDidEnter',
  'ionModalWillPresent': 'ionViewWillEnter',
  'ionModalWillDismiss': 'ionViewWillLeave',
  'ionModalDidDismiss': 'ionViewDidLeave',
};
Modal.style = {
  ios: modalIosCss,
  md: modalMdCss
};




/***/ }),

/***/ "bC4P":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-eea9a7a9.js ***!
  \********************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(tValue => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = (3 * p1) * Math.pow(t - 1, 2);
  const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }
  else {
    return [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    ];
  }
};
const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  }
  else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  }
  else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [
    s * Math.cos(phi / 3) - b / 3,
    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
  ];
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
//# sourceMappingURL=8-es2015.js.map