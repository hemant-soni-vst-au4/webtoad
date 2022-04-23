(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "E/Mt":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, g, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return initialize; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");


const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win = window) => {
  if (typeof win === 'undefined') {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  // iOS 13+
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return (smallest > 390 && smallest < 520) &&
    (largest > 620 && largest < 800);
};
const isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return (isIpad(win) ||
    isAndroidTablet(win) ||
    ((smallest > 460 && smallest < 820) &&
      (largest > 780 && largest < 1400)));
};
const isMobile = (win) => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
  const capacitor = win['Capacitor'];
  return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => win.matchMedia(query).matches;
const PLATFORMS_MAP = {
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

class Config {
  constructor() {
    this.m = new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === undefined) {
      return fallback;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
}
const config = /*@__PURE__*/ new Config();
const configFromSession = (win) => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  }
  catch (e) {
    return {};
  }
};
const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  }
  catch (e) {
    return;
  }
};
const configFromURL = (win) => {
  const configObj = {};
  win.location.search
    .slice(1)
    .split('&')
    .map(entry => entry.split('='))
    .map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
    .filter(([key]) => startsWith(key, IONIC_PREFIX))
    .map(([key, value]) => [key.slice(IONIC_PREFIX.length), value])
    .forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
const startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';

let defaultMode;
const getIonMode = (ref) => {
  return (ref && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(ref)) || defaultMode;
};
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  // Setup platforms
  setupPlatforms(win);
  // create the Ionic.config from raw config object (if it exists)
  // and convert Ionic.config into a ConfigApi that has a get() fn
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), { persistConfig: false }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean('persistConfig')) {
    saveConfig(win, configObj);
  }
  // first see if the mode was set as an attribute on <html>
  // which could have been set by the user, or by pre-rendering
  // otherwise get the mode via config settings, and fallback to md
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get('mode', (doc.documentElement.getAttribute('mode')) || (isPlatform(win, 'ios') ? 'ios' : 'md'));
  config.set('mode', defaultMode);
  doc.documentElement.setAttribute('mode', defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean('_testing')) {
    config.set('animated', false);
  }
  const isIonicElement = (elm) => elm.tagName && elm.tagName.startsWith('ION-');
  const isAllowedIonicModeValue = (elmMode) => ['ios', 'md'].includes(elmMode);
  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["s"])((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        }
        else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};




/***/ }),

/***/ "czK9":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-chip.entry.js ***!
  \*************************************************************/
/*! exports provided: ion_chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_chip", function() { return Chip; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");




const chipIosCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(0, 0, 0, 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0, 0, 0, 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(0, 0, 0, 0.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0, 0, 0, 0.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}";

const chipMdCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(0, 0, 0, 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0, 0, 0, 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(0, 0, 0, 0.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0, 0, 0, 0.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}";

const Chip = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Display an outline style button.
     */
    this.outline = false;
    /**
     * If `true`, the user cannot interact with the chip.
     */
    this.disabled = false;
  }
  render() {
    const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, {
        [mode]: true,
        'chip-outline': this.outline,
        'chip-disabled': this.disabled,
        'ion-activatable': true,
      }) }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
  }
};
Chip.style = {
  ios: chipIosCss,
  md: chipMdCss
};




/***/ })

}]);
//# sourceMappingURL=20-es2015.js.map