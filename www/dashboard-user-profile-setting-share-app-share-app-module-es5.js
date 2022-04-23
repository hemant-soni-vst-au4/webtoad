(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-share-app-share-app-module"], {
    /***/
    "CjQN":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic-native/social-sharing/ngx/index.js ***!
      \****************************************************************/

    /*! exports provided: SocialSharing */

    /***/
    function CjQN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialSharing", function () {
        return SocialSharing;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "a3Cf");

      var SocialSharing =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SocialSharing, _super);

        function SocialSharing() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        SocialSharing.prototype.share = function (message, subject, file, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "share", {
            "successIndex": 4,
            "errorIndex": 5
          }, arguments);
        };

        SocialSharing.prototype.shareWithOptions = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareWithOptions", {
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareVia", {
            "successIndex": 5,
            "errorIndex": 6,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaTwitter = function (message, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaTwitter", {
            "successIndex": 3,
            "errorIndex": 4,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaFacebook = function (message, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebook", {
            "successIndex": 3,
            "errorIndex": 4,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", {
            "successIndex": 4,
            "errorIndex": 5,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaInstagram = function (message, image) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaInstagram", {
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsApp", {
            "successIndex": 3,
            "errorIndex": 4,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToReceiver", {
            "successIndex": 4,
            "errorIndex": 5,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaSMS", {
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.canShareViaEmail = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareViaEmail", {
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaEmail", {
            "platforms": ["iOS", "Android"],
            "successIndex": 6,
            "errorIndex": 7
          }, arguments);
        };

        SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareVia", {
            "successIndex": 5,
            "errorIndex": 6,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setIPadPopupCoordinates", {
            "sync": true,
            "platforms": ["iOS"]
          }, arguments);
        };

        SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "saveToPhotoAlbum", {
            "platforms": ["iOS"]
          }, arguments);
        };

        SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToPhone", {
            "successIndex": 5,
            "errorIndex": 6,
            "platforms": ["iOS", "Android"]
          }, arguments);
        };

        SocialSharing.pluginName = "SocialSharing";
        SocialSharing.plugin = "cordova-plugin-x-socialsharing";
        SocialSharing.pluginRef = "plugins.socialsharing";
        SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
        SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
        SocialSharing.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }];
        return SocialSharing;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDckMsaUNBQWlCOzs7O0lBYWxELDZCQUFLLGFBQUMsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLElBQXdCLEVBQUUsR0FBWTtJQVloRix3Q0FBZ0IsYUFBQyxPQU1oQjtJQWtCRCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFnQjdGLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFpQjlELDREQUFvQyxhQUNsQyxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVksRUFDWixnQkFBeUI7SUFjM0IseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7SUFnQmhELHdDQUFnQixhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsR0FBWTtJQWlCOUQsa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFhMUYsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7SUFXL0Msd0NBQWdCO0lBbUJoQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7SUFtQjNCLGdDQUFRLGFBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFnQixFQUFFLEtBQWMsRUFBRSxHQUFZO0lBWXpGLCtDQUF1QixhQUFDLFlBQW9CO0lBVTVDLHdDQUFnQixhQUFDLGVBQWtDO0lBaUJuRCwrQ0FBdUIsYUFBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLGVBQWtDLEVBQUUsR0FBWTs7Ozs7OztnQkFqUXpHLFVBQVU7O3dCQXpDWDtFQTBDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTb2NpYWwgU2hhcmluZ1xuICogQHByZW1pZXIgc29jaWFsLXNoYXJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hhcmUgdGV4dCwgZmlsZXMsIGltYWdlcywgYW5kIGxpbmtzIHZpYSBzb2NpYWwgbmV0d29ya3MsIHNtcywgYW5kIGVtYWlsLlxuICpcbiAqIEZvciBCcm93c2VyIHVzYWdlIGNoZWNrIG91dCB0aGUgV2ViIFNoYXJlIEFQSSBkb2NzOiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4jNS13ZWItc2hhcmUtYXBpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zb2NpYWwtc2hhcmluZy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc29jaWFsU2hhcmluZzogU29jaWFsU2hhcmluZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gQ2hlY2sgaWYgc2hhcmluZyB2aWEgZW1haWwgaXMgc3VwcG9ydGVkXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuY2FuU2hhcmVWaWFFbWFpbCgpLnRoZW4oKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBwb3NzaWJsZVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBub3QgcG9zc2libGVcbiAqIH0pO1xuICpcbiAqIC8vIFNoYXJlIHZpYSBlbWFpbFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLnNoYXJlVmlhRW1haWwoJ0JvZHknLCAnU3ViamVjdCcsIFsncmVjaXBpZW50QGV4YW1wbGUub3JnJ10pLnRoZW4oKCkgPT4ge1xuICogICAvLyBTdWNjZXNzIVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBFcnJvciFcbiAqIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU29jaWFsU2hhcmluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXgtc29jaWFsc2hhcmluZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc29jaWFsc2hhcmluZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2hhcmluZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gVGhlIG1lc3NhZ2UgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUuXG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9IFRoZSBzdWJqZWN0XG4gICAqIEBwYXJhbSBmaWxlIHtzdHJpbmd8c3RyaW5nW119IFVSTChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBsb2NhbCBwYXRoKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIG9yIGJhc2U2NCBkYXRhIG9mIGFuIGltYWdlLiBPbmx5IHRoZSBmaXJzdCBmaWxlL2ltYWdlIHdpbGwgYmUgdXNlZCBvbiBXaW5kb3dzIFBob25lLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IEEgVVJMIHRvIHNoYXJlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIHNoYXJlKG1lc3NhZ2U/OiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGZpbGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3Qgb3IgYW4gZXJyb3IgbWVzc2FnZSAocmVxdWlyZXMgcGx1Z2luIHZlcnNpb24gNS4xLjArKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7b2JqZWN0fSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgbWVzc2FnZSwgc3ViamVjdCwgZmlsZXMsIHVybCBhbmQgY2hvb3NlclRpdGxlIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlV2l0aE9wdGlvbnMob3B0aW9uczoge1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHVybD86IHN0cmluZztcbiAgICBjaG9vc2VyVGl0bGU/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgYSBzcGVjaWZpYyBhcHAuXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBUd2l0dGVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhVHdpdHRlcihtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFGYWNlYm9vayhtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2sgd2l0aCBhIHBhc3RlIG1lc3NhZ2UgaGludFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGFzdGVNZXNzYWdlSGludCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rV2l0aFBhc3RlTWVzc2FnZUhpbnQoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBwYXN0ZU1lc3NhZ2VIaW50Pzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBJbnN0YWdyYW1cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhSW5zdGFncmFtKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBXaGF0c0FwcFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3RcbiAgICogQHBhcmFtIHJlY2VpdmVyIHtzdHJpbmd9IFBhc3MgcGhvbmUgbnVtYmVyIG9uIEFuZHJvaWQsIGFuZCBBZGRyZXNzYm9vayBJRCAoYWJpZCkgb24gaU9TXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ30gSW1hZ2UgdG8gc2VuZCAoZG9lcyBub3Qgd29yayBvbiBpT1NcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBMaW5rIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcFRvUmVjZWl2ZXIocmVjZWl2ZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIFNNU1xuICAgKiBAcGFyYW0gbWVzc2dlIHtzdHJpbmd9IG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ30gTnVtYmVyIG9yIG11bHRpcGxlIG51bWJlcnMgc2VwZXJhdGVkIGJ5IGNvbW1hc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVNNUyhtZXNzZ2U6IHN0cmluZywgcGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBlbWFpbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjYW5TaGFyZVZpYUVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBFbWFpbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdG8ge3N0cmluZ1tdfVxuICAgKiBAcGFyYW0gY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gYmNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGZpbGVzIHtzdHJpbmd8c3RyaW5nW119IE9wdGlvbmFsIFVSTCBvciBsb2NhbCBwYXRoIHRvIGZpbGUocykgdG8gYXR0YWNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gICAgc3VjY2Vzc0luZGV4OiA2LFxuICAgIGVycm9ySW5kZXg6IDcsXG4gIH0pXG4gIHNoYXJlVmlhRW1haWwoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nW10sXG4gICAgY2M/OiBzdHJpbmdbXSxcbiAgICBiY2M/OiBzdHJpbmdbXSxcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBBcHBOYW1lXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZGVmaW5lcyB0aGUgcG9wdXAgcG9zaXRpb24gYmVmb3JlIGNhbGwgdGhlIHNoYXJlIG1ldGhvZC5cbiAgICogQHBhcmFtIHRhcmdldEJvdW5kcyB7c3RyaW5nfSBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2V0SVBhZFBvcHVwQ29vcmRpbmF0ZXModGFyZ2V0Qm91bmRzOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNhdmUgYW4gYXJyYXkgb2YgaW1hZ2VzIHRvIHRoZSBjYW1lcmEgcm9sbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8c3RyaW5nW119IGZpbGVPckZpbGVBcnJheSBTaW5nbGUgb3IgbXVsdGlwbGUgZmlsZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55PiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzYXZlVG9QaG90b0FsYnVtKGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3Qgd2l0aCBwaG9uZSBudW1iZXIuXG4gICAqIEBwYXJhbSBwaG9uZSB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGZpbGVPckZpbGVBcnJheSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1Bob25lKHBob25lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "P4dN":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/share-app/share-app.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ShareAppPage */

    /***/
    function P4dN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareAppPage", function () {
        return ShareAppPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_share_app_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./share-app.page.html */
      "xDPv");
      /* harmony import */


      var _share_app_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./share-app.page.scss */
      "xOJ4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "CjQN");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "w6Z3");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Share = _capacitor_core__WEBP.Share,
          Device = _capacitor_core__WEBP.Device;

      var ShareAppPage = /*#__PURE__*/function () {
        function ShareAppPage(router, sharedService, navController, socialSharing, clipboard, platform) {
          var _this = this;

          _classCallCheck(this, ShareAppPage);

          this.router = router;
          this.sharedService = sharedService;
          this.navController = navController;
          this.socialSharing = socialSharing;
          this.clipboard = clipboard;
          this.platform = platform;
          this.appURL = 'https://speakypeaky.page.link/home';
          this.isMobile = false;
          this.shareAvailable = true;
          sharedService.getDeviceInfo().then(function (info) {
            var _a;

            if (info.platform === 'web') {
              //@ts-ignore
              _this.shareAvailable = !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.share);
            }

            _this.isMobile = info.isApp;
          });
        }

        _createClass(ShareAppPage, [{
          key: "home",
          value: function home() {
            this.router.navigate(['/dashboard/lessons']);
            this.navController.setDirection('root');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/setting']);
          }
        }, {
          key: "shareApp",
          value: function shareApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var shareRet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Share.share({
                        title: 'Speaky Peaky',
                        text: 'Speaky Peaky',
                        url: this.appURL,
                        dialogTitle: 'Share with buddies'
                      });

                    case 2:
                      shareRet = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onCopyAppLink",
          value: function onCopyAppLink(appURL) {
            var _this2 = this;

            if (this.isMobile) {
              this.clipboard.copy(appURL).then(function () {
                _this2.sharedService.presentToast('It’s copied!');
              });
            } else {
              navigator.clipboard.writeText(appURL).then(function (res) {
                _this2.sharedService.presentToast('It’s copied!');

                console.log('Async: Copying to clipboard was successful!');
              }, function (err) {
                console.error('Async: Could not copy text: ', err);
              });
            }
          }
        }]);

        return ShareAppPage;
      }();

      ShareAppPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
        }, {
          type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      ShareAppPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-share-app',
        template: _raw_loader_share_app_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_share_app_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], ShareAppPage);
      /***/
    },

    /***/
    "mMqh":
    /*!******************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/share-app/share-app.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ShareAppPageModule */

    /***/
    function mMqh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareAppPageModule", function () {
        return ShareAppPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "CjQN");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _share_app_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./share-app.page */
      "P4dN");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "w6Z3");

      var routes = [{
        path: '',
        component: _share_app_page__WEBPACK_IMPORTED_MODULE_7__["ShareAppPage"]
      }];

      var ShareAppPageModule = function ShareAppPageModule() {
        _classCallCheck(this, ShareAppPageModule);
      };

      ShareAppPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_share_app_page__WEBPACK_IMPORTED_MODULE_7__["ShareAppPage"]],
        providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"]]
      })], ShareAppPageModule);
      /***/
    },

    /***/
    "w6Z3":
    /*!***********************************************************!*\
      !*** ./node_modules/@ionic-native/clipboard/ngx/index.js ***!
      \***********************************************************/

    /*! exports provided: Clipboard */

    /***/
    function w6Z3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return Clipboard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "a3Cf");

      var Clipboard =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Clipboard, _super);

        function Clipboard() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Clipboard.prototype.copy = function (text) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "copy", {}, arguments);
        };

        Clipboard.prototype.paste = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "paste", {}, arguments);
        };

        Clipboard.prototype.clear = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {}, arguments);
        };

        Clipboard.pluginName = "Clipboard";
        Clipboard.plugin = "cordova-clipboard";
        Clipboard.pluginRef = "cordova.plugins.clipboard";
        Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
        Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
        Clipboard.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }];
        return Clipboard;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7OztnQkExQk4sVUFBVTs7b0JBdkNYO0VBd0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBDbGlwYm9hcmRcbiAqIEBwcmVtaWVyIGNsaXBib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBDbGlwYm9hcmQgbWFuYWdlbWVudCBwbHVnaW4gZm9yIENvcmRvdmEgdGhhdCBzdXBwb3J0cyBpT1MsIEFuZHJvaWQsIGFuZCBXaW5kb3dzIFBob25lIDguXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jbGlwYm9hcmQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZDogQ2xpcGJvYXJkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jbGlwYm9hcmQuY29weSgnSGVsbG8gd29ybGQnKTtcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5wYXN0ZSgpLnRoZW4oXG4gKiAgICAocmVzb2x2ZTogc3RyaW5nKSA9PiB7XG4gKiAgICAgICBhbGVydChyZXNvbHZlKTtcbiAqICAgICB9LFxuICogICAgIChyZWplY3Q6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQoJ0Vycm9yOiAnICsgcmVqZWN0KTtcbiAqICAgICB9XG4gKiAgICk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQuY2xlYXIoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NsaXBib2FyZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtY2xpcGJvYXJkJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmNsaXBib2FyZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9jb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29waWVzIHRoZSBnaXZlbiB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdGhhdCBnZXRzIGNvcGllZCBvbiB0aGUgc3lzdGVtIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjb3BpZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXN0ZXMgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBwYXN0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGFzdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjbGVhbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

      /***/

    },

    /***/
    "xDPv":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/share-app/share-app.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xDPv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" (click)=\"home()\">\n        <ion-icon color=\"dark\" mode=\"md\" slot=\"icon-only\" src=\"../../../../../assets/images/home.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"padding: 16px 16px 0px 16px;\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <h1 class=\"ion-no-margin\"><strong>Share This App</strong></h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"padding: 0px 16px 16px 16px;\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-align-self-center\">\n        <!-- <ul>\n          <li>\n            If you share this app and the invited person signs up for this app and verified, both you and the invited\n            person will <ion-text color=\"danger\">get 5 more free lessons</ion-text> that you can use any time per share.\n          </li>\n          <li>\n            If the invited person purchases any types of subscription, both you and the invited person will get\n            <ion-text color=\"danger\">one free month with 30 lessons</ion-text>.\n          </li>\n        </ul> -->\n        <p>\n          Because you can help your friends and family improve their English skills and live their best lives speaking\n          English fluently!\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"share-app ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeLg=\"6\" sizeXl=\"4\" class=\"ion-no-padding ion-align-self-center\">\n        <img src=\"../../../../../assets/images/share.svg\" alt=\"share\" />\n        <ion-button\n          *ngIf=\"shareAvailable === true\"\n          mode=\"ios\"\n          color=\"danger\"\n          shape=\"round\"\n          expand=\"block\"\n          type=\"button\"\n          (click)=\"shareApp()\"\n        >\n          <strong>SHARE NOW</strong></ion-button\n        >\n        <p *ngIf=\"shareAvailable === true\" class=\"ion-text-center\">or copy link</p>\n        <ion-row class=\"copy-link ion-align-items-center ion-justify-content-center\">\n          <ion-col\n            sizeXs=\"12\"\n            sizeSm=\"12\"\n            sizeMd=\"7\"\n            sizeLg=\"6\"\n            sizeXl=\"4\"\n            class=\"ion-no-padding ion-align-self-center\"\n          >\n            <ion-row>\n              <ion-col id=\"app-link\" class=\"ion-no-padding link\" size=\"10\">\n                {{ appURL }}\n              </ion-col>\n              <ion-col class=\"ion-no-padding ion-text-right c-red pointer\" size=\"2\" (click)=\"onCopyAppLink(appURL)\">\n                <strong>COPY</strong>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "xOJ4":
    /*!******************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/share-app/share-app.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function xOJ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content #share-icons {\n  display: block;\n  margin: 0 auto;\n}\nion-content ul {\n  -webkit-padding-start: 20px;\n          padding-inline-start: 20px;\n}\nion-content ul li:first-child {\n  margin-bottom: 1em;\n}\nion-content .copy-link {\n  display: block;\n  background: white;\n  padding: 15px;\n  border: 2px solid lightgrey;\n  border-radius: 3px;\n}\nion-content .copy-link .link {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlLWFwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtVQUFBLDBCQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNOIiwiZmlsZSI6InNoYXJlLWFwcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICNzaGFyZS1pY29ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgdWwge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xuICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4gIH1cbiAgLmNvcHktbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC5saW5rIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-share-app-share-app-module-es5.js.map