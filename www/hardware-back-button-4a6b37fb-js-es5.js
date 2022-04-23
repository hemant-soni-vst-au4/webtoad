(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-4a6b37fb-js"], {
    /***/
    "B4Jq":
    /*!****************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js ***!
      \****************************************************************************/

    /*! exports provided: MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, blockHardwareBackButton, startHardwareBackButton */

    /***/
    function B4Jq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MENU_BACK_BUTTON_PRIORITY", function () {
        return MENU_BACK_BUTTON_PRIORITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OVERLAY_BACK_BUTTON_PRIORITY", function () {
        return OVERLAY_BACK_BUTTON_PRIORITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blockHardwareBackButton", function () {
        return blockHardwareBackButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function () {
        return startHardwareBackButton;
      });
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


      var blockHardwareBackButton = function blockHardwareBackButton() {
        document.addEventListener('backbutton', function () {}); // tslint:disable-line
      };

      var startHardwareBackButton = function startHardwareBackButton() {
        var doc = document;
        var busy = false;
        doc.addEventListener('backbutton', function () {
          if (busy) {
            return;
          }

          var index = 0;
          var handlers = [];
          var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
              register: function register(priority, handler) {
                handlers.push({
                  priority: priority,
                  handler: handler,
                  id: index++
                });
              }
            }
          });
          doc.dispatchEvent(ev);

          var executeAction = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handlerRegister) {
              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;

                      if (!(handlerRegister && handlerRegister.handler)) {
                        _context.next = 6;
                        break;
                      }

                      result = handlerRegister.handler(processHandlers);

                      if (!(result != null)) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 6;
                      return result;

                    case 6:
                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[0, 8]]);
            }));

            return function executeAction(_x) {
              return _ref.apply(this, arguments);
            };
          }();

          var processHandlers = function processHandlers() {
            if (handlers.length > 0) {
              var selectedHandler = {
                priority: Number.MIN_SAFE_INTEGER,
                handler: function handler() {
                  return undefined;
                },
                id: -1
              };
              handlers.forEach(function (handler) {
                if (handler.priority >= selectedHandler.priority) {
                  selectedHandler = handler;
                }
              });
              busy = true;
              handlers = handlers.filter(function (handler) {
                return handler.id !== selectedHandler.id;
              });
              executeAction(selectedHandler).then(function () {
                return busy = false;
              });
            }
          };

          processHandlers();
        });
      };

      var OVERLAY_BACK_BUTTON_PRIORITY = 100;
      var MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays

      /***/
    }
  }]);
})();
//# sourceMappingURL=hardware-back-button-4a6b37fb-js-es5.js.map