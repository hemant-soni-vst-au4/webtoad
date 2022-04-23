(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "CfoV":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");




const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

const Avatar = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};

const badgeIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}";

const badgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";

const Badge = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, {
        [mode]: true,
      }) }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
Badge.style = {
  ios: badgeIosCss,
  md: badgeMdCss
};

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
Thumbnail.style = thumbnailCss;




/***/ }),

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




/***/ })

}]);
//# sourceMappingURL=15-es2015.js.map