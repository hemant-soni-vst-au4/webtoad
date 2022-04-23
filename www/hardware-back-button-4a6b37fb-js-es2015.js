(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-4a6b37fb-js"],{

/***/ "B4Jq":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js ***!
  \****************************************************************************/
/*! exports provided: MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, blockHardwareBackButton, startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BACK_BUTTON_PRIORITY", function() { return MENU_BACK_BUTTON_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_BACK_BUTTON_PRIORITY", function() { return OVERLAY_BACK_BUTTON_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockHardwareBackButton", function() { return blockHardwareBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/**
 * When hardwareBackButton: false in config,
 * we need to make sure we also block the default
 * webview behavior. If we don't then it will be
 * possible for users to navigate backward while
 * an overlay is still open. Additionally, it will
 * give the appearance that the hardwareBackButton
 * config is not working as the page transition
 * will still happen.
 */
const blockHardwareBackButton = () => {
  document.addEventListener('backbutton', () => { }); // tslint:disable-line
};
const startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  doc.addEventListener('backbutton', () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent('ionBackButton', {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({ priority, handler, id: index++ });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = async (handlerRegister) => {
      try {
        if (handlerRegister && handlerRegister.handler) {
          const result = handlerRegister.handler(processHandlers);
          if (result != null) {
            await result;
          }
        }
      }
      catch (e) {
        console.error(e);
      }
    };
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => undefined,
          id: -1
        };
        handlers.forEach(handler => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter(handler => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  });
};
const OVERLAY_BACK_BUTTON_PRIORITY = 100;
const MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays




/***/ })

}]);
//# sourceMappingURL=hardware-back-button-4a6b37fb-js-es2015.js.map