(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

  function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+9Tx":
    /*!***********************************!*\
      !*** ./src/reactapp/useStore.tsx ***!
      \***********************************/

    /*! exports provided: useStore, useProfile */

    /***/
    function Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useStore", function () {
        return useStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useProfile", function () {
        return useProfile;
      });
      /* harmony import */


      var use_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! use-http */
      "tFdz");
      /* harmony import */


      var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! zustand */
      "lKb0");
      /* harmony import */


      var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apollo-client */
      "0GY7");

      var useStore = Object(zustand__WEBPACK_IMPORTED_MODULE_1__["default"])(function (set) {
        return {
          // bears: 0,
          deviceInfo: null,
          client: _apollo_client__WEBPACK_IMPORTED_MODULE_2__["client"],
          navController: null,
          platform: null,
          sharedService: null,
          route: null,
          profile: null,
          setProfile: function setProfile(profile) {
            return set({
              profile: profile
            });
          }
        };
      });

      function useProfile() {
        var profile = useStore(function (store) {
          return store.profile;
        });
        var setProfile = useStore(function (store) {
          return store.setProfile;
        });

        var _Object = Object(use_http__WEBPACK_IMPORTED_MODULE_0__["default"])('/user/get-profile', {
          cachePolicy: use_http__WEBPACK_IMPORTED_MODULE_0__["CachePolicies"].NO_CACHE,
          cacheLife: 1000,
          onNewData: function onNewData(curData, newData) {
            setProfile(newData === null || newData === void 0 ? void 0 : newData.data);
          }
        }, []),
            get = _Object.get,
            loading = _Object.loading,
            error = _Object.error,
            cache = _Object.cache;

        function refetch() {
          get();
        } // const profile = data?.data


        return {
          profile: profile,
          loading: loading,
          error: error,
          get: get,
          cache: cache,
          refetch: refetch
        };
      }
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/hemantsoni/Documents/GitHub/speakypeaky/Hybrid-Start-English-Now/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0GY7":
    /*!***************************************!*\
      !*** ./src/reactapp/apollo-client.ts ***!
      \***************************************/

    /*! exports provided: currentLessonIdVar, dictationsVar, recordsVar, client */

    /***/
    function GY7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "client", function () {
        return client;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @apollo/client */
      "VX74");
      /* harmony import */


      var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @apollo/client/link/context */
      "MWEN");
      /* harmony import */


      var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @apollo/client/link/error */
      "HuS5");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _typePolicies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./typePolicies */
      "pdqN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "currentLessonIdVar", function () {
        return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["currentLessonIdVar"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dictationsVar", function () {
        return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["dictationsVar"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "recordsVar", function () {
        return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["recordsVar"];
      });

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;

      function getNativeStorage(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var ret, value;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Storage.get({
                    key: key
                  });

                case 2:
                  ret = _context.sent;
                  value = JSON.parse(ret.value);

                  if (!value) {
                    value = {
                      data: null
                    };
                  }

                  return _context.abrupt("return", value);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }

      var errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(function (_ref) {
        var graphQLErrors = _ref.graphQLErrors,
            networkError = _ref.networkError;
        if (graphQLErrors) graphQLErrors.map(function (_ref2) {
          var message = _ref2.message,
              locations = _ref2.locations,
              path = _ref2.path;
          return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
        });
        if (networkError) console.log("[Network error]: ".concat(networkError));
      });
      var httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
        // uri: 'http://localhost:4044/',
        // uri: 'http://192.168.0.3:4044/',
        uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].GRAPHQL_URL
      });
      var authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])(function (_, _ref3) {
        var headers = _ref3.headers;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var token;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return getNativeStorage('token');

                case 2:
                  token = _context2.sent;
                  return _context2.abrupt("return", {
                    headers: Object.assign(Object.assign({}, headers), {
                      authorization: (token === null || token === void 0 ? void 0 : token.data) ? token.data : ''
                    })
                  });

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      });
      var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
        typePolicies: _typePolicies__WEBPACK_IMPORTED_MODULE_6__["typePolicies"]
      });
      var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
        link: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["from"])([authLink, errorLink, httpLink]),
        cache: cache,
        typeDefs: _typePolicies__WEBPACK_IMPORTED_MODULE_6__["localTypeDefs"]
      });
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "35Ww":
    /*!******************************************!*\
      !*** ./src/reactapp/types-and-hooks.tsx ***!
      \******************************************/

    /*! exports provided: LevelName, LessonFieldsFragmentDoc, DashboardLessonFieldsFragmentDoc, GetProfileDocument, useGetProfileQuery, useGetProfileLazyQuery, PopularLessonsDocument, usePopularLessonsQuery, usePopularLessonsLazyQuery, MyCoursesDocument, useMyCoursesQuery, useMyCoursesLazyQuery, GetDashboardDocument, useGetDashboardQuery, useGetDashboardLazyQuery, GetDashboardDraftLessonsDocument, useGetDashboardDraftLessonsQuery, useGetDashboardDraftLessonsLazyQuery, GetLessonDeatilDocument, useGetLessonDeatilQuery, useGetLessonDeatilLazyQuery, SetLessonSavedDocument, useSetLessonSavedMutation, SetLessonCompletedDocument, useSetLessonCompletedMutation, GetCourseDocument, useGetCourseQuery, useGetCourseLazyQuery, AddToMyLessonDocument, useAddToMyLessonMutation, SetNoteDocument, useSetNoteMutation, ReportLessonIssueDocument, useReportLessonIssueMutation, SearchDictionaryDocument, useSearchDictionaryQuery, useSearchDictionaryLazyQuery, GetDictationDocument, useGetDictationQuery, useGetDictationLazyQuery, GetRecordsDocument, useGetRecordsQuery, useGetRecordsLazyQuery, GetNotesDocument, useGetNotesQuery, useGetNotesLazyQuery, MoreNotesDocument, useMoreNotesQuery, useMoreNotesLazyQuery, DeleteNoteDocument, useDeleteNoteMutation, GerReviewCompletedLessonsDocument, useGerReviewCompletedLessonsQuery, useGerReviewCompletedLessonsLazyQuery, UploadProfilePictureDocument, useUploadProfilePictureMutation, GetUserProgressDocument, useGetUserProgressQuery, useGetUserProgressLazyQuery, GetLevelsDocument, useGetLevelsQuery, useGetLevelsLazyQuery, SetLevelDocument, useSetLevelMutation, GetUserGuideDocument, useGetUserGuideQuery, useGetUserGuideLazyQuery */

    /***/
    function Ww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelName", function () {
        return LevelName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LessonFieldsFragmentDoc", function () {
        return LessonFieldsFragmentDoc;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardLessonFieldsFragmentDoc", function () {
        return DashboardLessonFieldsFragmentDoc;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetProfileDocument", function () {
        return GetProfileDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetProfileQuery", function () {
        return useGetProfileQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetProfileLazyQuery", function () {
        return useGetProfileLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularLessonsDocument", function () {
        return PopularLessonsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "usePopularLessonsQuery", function () {
        return usePopularLessonsQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "usePopularLessonsLazyQuery", function () {
        return usePopularLessonsLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCoursesDocument", function () {
        return MyCoursesDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useMyCoursesQuery", function () {
        return useMyCoursesQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useMyCoursesLazyQuery", function () {
        return useMyCoursesLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDashboardDocument", function () {
        return GetDashboardDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDashboardQuery", function () {
        return useGetDashboardQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDashboardLazyQuery", function () {
        return useGetDashboardLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDashboardDraftLessonsDocument", function () {
        return GetDashboardDraftLessonsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDashboardDraftLessonsQuery", function () {
        return useGetDashboardDraftLessonsQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDashboardDraftLessonsLazyQuery", function () {
        return useGetDashboardDraftLessonsLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetLessonDeatilDocument", function () {
        return GetLessonDeatilDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetLessonDeatilQuery", function () {
        return useGetLessonDeatilQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetLessonDeatilLazyQuery", function () {
        return useGetLessonDeatilLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetLessonSavedDocument", function () {
        return SetLessonSavedDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSetLessonSavedMutation", function () {
        return useSetLessonSavedMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetLessonCompletedDocument", function () {
        return SetLessonCompletedDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSetLessonCompletedMutation", function () {
        return useSetLessonCompletedMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCourseDocument", function () {
        return GetCourseDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetCourseQuery", function () {
        return useGetCourseQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetCourseLazyQuery", function () {
        return useGetCourseLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddToMyLessonDocument", function () {
        return AddToMyLessonDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useAddToMyLessonMutation", function () {
        return useAddToMyLessonMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetNoteDocument", function () {
        return SetNoteDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSetNoteMutation", function () {
        return useSetNoteMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportLessonIssueDocument", function () {
        return ReportLessonIssueDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useReportLessonIssueMutation", function () {
        return useReportLessonIssueMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchDictionaryDocument", function () {
        return SearchDictionaryDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSearchDictionaryQuery", function () {
        return useSearchDictionaryQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSearchDictionaryLazyQuery", function () {
        return useSearchDictionaryLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDictationDocument", function () {
        return GetDictationDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDictationQuery", function () {
        return useGetDictationQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetDictationLazyQuery", function () {
        return useGetDictationLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetRecordsDocument", function () {
        return GetRecordsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetRecordsQuery", function () {
        return useGetRecordsQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetRecordsLazyQuery", function () {
        return useGetRecordsLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetNotesDocument", function () {
        return GetNotesDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetNotesQuery", function () {
        return useGetNotesQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetNotesLazyQuery", function () {
        return useGetNotesLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoreNotesDocument", function () {
        return MoreNotesDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useMoreNotesQuery", function () {
        return useMoreNotesQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useMoreNotesLazyQuery", function () {
        return useMoreNotesLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteNoteDocument", function () {
        return DeleteNoteDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useDeleteNoteMutation", function () {
        return useDeleteNoteMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GerReviewCompletedLessonsDocument", function () {
        return GerReviewCompletedLessonsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGerReviewCompletedLessonsQuery", function () {
        return useGerReviewCompletedLessonsQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGerReviewCompletedLessonsLazyQuery", function () {
        return useGerReviewCompletedLessonsLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadProfilePictureDocument", function () {
        return UploadProfilePictureDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useUploadProfilePictureMutation", function () {
        return useUploadProfilePictureMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserProgressDocument", function () {
        return GetUserProgressDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetUserProgressQuery", function () {
        return useGetUserProgressQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetUserProgressLazyQuery", function () {
        return useGetUserProgressLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetLevelsDocument", function () {
        return GetLevelsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetLevelsQuery", function () {
        return useGetLevelsQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetLevelsLazyQuery", function () {
        return useGetLevelsLazyQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetLevelDocument", function () {
        return SetLevelDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useSetLevelMutation", function () {
        return useSetLevelMutation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserGuideDocument", function () {
        return GetUserGuideDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetUserGuideQuery", function () {
        return useGetUserGuideQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useGetUserGuideLazyQuery", function () {
        return useGetUserGuideLazyQuery;
      });
      /* harmony import */


      var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @apollo/client */
      "VX74");

      var defaultOptions = {};
      var LevelName;

      (function (LevelName) {
        LevelName["UpperBeginner"] = "UpperBeginner";
        LevelName["Intermediate"] = "Intermediate";
        LevelName["Advanced"] = "Advanced";
      })(LevelName || (LevelName = {}));

      var LessonFieldsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment LessonFields on Lesson {\n    _id\n    subLessonId\n    lessonName\n    srtFile\n    startTime\n    endTime\n    createdAt\n    updatedAt\n    lessonId\n    videoLevel\n    videoLevelLabel @client\n    videoType\n    youtubeId\n    title\n    introduction\n    tags\n    isSingle\n    day\n    savedCreatedAt\n    isCompleted\n  }\n"])));

      var DashboardLessonFieldsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  fragment DashboardLessonFields on Lesson {\n    _id\n    lessonName\n    videoLevel\n    videoLevelLabel @client\n    videoType\n    youtubeId\n  }\n"])));

      var GetProfileDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  query getProfile {\n    profile {\n      _id\n      status\n      completedLesson\n      subscriptionLesson\n      currentPackage\n      subscriptionType\n      trialLessonLimit\n      isLevel\n      isAdmin\n      signupType\n      fullName\n      email\n      platform\n      userLevelId\n      userLevelName\n      stripeSandBoxCustomerId\n      stripeLiveCustomerId\n      extraSubscriptionLesson\n      subscriptionProductId\n      subTitleLanguage\n      userSubscriptionStartDate\n      userSubscriptionEndDate\n      profilePic\n      nativeLanguage {\n        _id\n        languageKey\n        languageName\n      }\n      total\n    }\n  }\n"])));
      /**
       * __useGetProfileQuery__
       *
       * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetProfileQuery({
       *   variables: {
       *   },
       * });
       */


      function useGetProfileQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetProfileDocument, options);
      }

      function useGetProfileLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetProfileDocument, options);
      }

      var PopularLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  query popularLessons {\n    popularLessons {\n      total\n      totalLessons\n      data {\n        subLessonId\n        lessonName\n        srtFile\n        startTime\n        endTime\n        createdAt\n        updatedAt\n        lessonId\n        videoLevel\n        videoLevelLabel @client\n        youtubeId\n        title\n        introduction\n        tags\n        isSingle\n        day\n        savedCreatedAt\n        isCompleted\n      }\n    }\n  }\n"])));
      /**
       * __usePopularLessonsQuery__
       *
       * To run a query within a React component, call `usePopularLessonsQuery` and pass it any options that fit your needs.
       * When your component renders, `usePopularLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = usePopularLessonsQuery({
       *   variables: {
       *   },
       * });
       */


      function usePopularLessonsQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](PopularLessonsDocument, options);
      }

      function usePopularLessonsLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](PopularLessonsDocument, options);
      }

      var MyCoursesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  query myCourses($page: Int!) {\n    myCourses(page: $page) {\n      _id\n      title\n      introduction\n      youtubeId\n      videoLevel\n      videoLevelLabel @client\n      topicTitle\n      lessonCount\n    }\n  }\n"])));
      /**
       * __useMyCoursesQuery__
       *
       * To run a query within a React component, call `useMyCoursesQuery` and pass it any options that fit your needs.
       * When your component renders, `useMyCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useMyCoursesQuery({
       *   variables: {
       *      page: // value for 'page'
       *   },
       * });
       */


      function useMyCoursesQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MyCoursesDocument, options);
      }

      function useMyCoursesLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MyCoursesDocument, options);
      }

      var GetDashboardDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  query getDashboard($day: String!, $videoLevel: LevelName!) {\n    todayLesson(day: $day) {\n      ...DashboardLessonFields\n    }\n    popularLessons {\n      total\n      totalLessons\n      data {\n        ...DashboardLessonFields\n      }\n    }\n    savedLessons {\n      total\n      totalLessons\n      data {\n        ...DashboardLessonFields\n      }\n    }\n    myCourses(size: 3) {\n      _id\n      title\n      introduction\n      youtubeId\n      videoLevel\n      videoLevelLabel @client\n      topicTitle\n      lessonCount\n    }\n    newUploadLessons(day: $day, videoLevel: $videoLevel) {\n      total\n      totalLessons\n      data {\n        ...DashboardLessonFields\n      }\n    }\n  }\n  ", "\n"])), DashboardLessonFieldsFragmentDoc);
      /**
       * __useGetDashboardQuery__
       *
       * To run a query within a React component, call `useGetDashboardQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetDashboardQuery({
       *   variables: {
       *      day: // value for 'day'
       *      videoLevel: // value for 'videoLevel'
       *   },
       * });
       */


      function useGetDashboardQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDashboardDocument, options);
      }

      function useGetDashboardLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDashboardDocument, options);
      }

      var GetDashboardDraftLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  query getDashboardDraftLessons {\n    draftLessons {\n      total\n      totalLessons\n      data {\n        ...LessonFields\n      }\n    }\n  }\n  ", "\n"])), LessonFieldsFragmentDoc);
      /**
       * __useGetDashboardDraftLessonsQuery__
       *
       * To run a query within a React component, call `useGetDashboardDraftLessonsQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetDashboardDraftLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetDashboardDraftLessonsQuery({
       *   variables: {
       *   },
       * });
       */


      function useGetDashboardDraftLessonsQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDashboardDraftLessonsDocument, options);
      }

      function useGetDashboardDraftLessonsLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDashboardDraftLessonsDocument, options);
      }

      var GetLessonDeatilDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  query getLessonDeatil($id: String!) {\n    currentLessonId @client\n    lesson(id: $id) {\n      _id\n      lessonId\n      courseId\n      youtubeId\n      lessonName\n      isSaved\n      isCompleted\n      title\n      tags\n      videoLevel\n      videoLevelLabel @client\n      introduction\n      isMy\n      scenes {\n        start\n        end\n        langs\n      }\n      phrases {\n        word\n        meaning\n        meanings {\n          lang\n          meaning\n        }\n      }\n    }\n  }\n"])));
      /**
       * __useGetLessonDeatilQuery__
       *
       * To run a query within a React component, call `useGetLessonDeatilQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetLessonDeatilQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetLessonDeatilQuery({
       *   variables: {
       *      id: // value for 'id'
       *   },
       * });
       */


      function useGetLessonDeatilQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetLessonDeatilDocument, options);
      }

      function useGetLessonDeatilLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetLessonDeatilDocument, options);
      }

      var SetLessonSavedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  mutation setLessonSaved($id: String!, $isSave: Boolean!) {\n    setLessonSaved(lessonId: $id, isSave: $isSave) {\n      _id\n      isSaved\n    }\n  }\n"])));
      /**
       * __useSetLessonSavedMutation__
       *
       * To run a mutation, you first call `useSetLessonSavedMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useSetLessonSavedMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [setLessonSavedMutation, { data, loading, error }] = useSetLessonSavedMutation({
       *   variables: {
       *      id: // value for 'id'
       *      isSave: // value for 'isSave'
       *   },
       * });
       */


      function useSetLessonSavedMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLessonSavedDocument, options);
      }

      var SetLessonCompletedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  mutation setLessonCompleted($lessonId: String!) {\n    setLessonCompleted(lessonId: $lessonId) {\n      _id\n      isCompleted\n    }\n  }\n"])));
      /**
       * __useSetLessonCompletedMutation__
       *
       * To run a mutation, you first call `useSetLessonCompletedMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useSetLessonCompletedMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [setLessonCompletedMutation, { data, loading, error }] = useSetLessonCompletedMutation({
       *   variables: {
       *      lessonId: // value for 'lessonId'
       *   },
       * });
       */


      function useSetLessonCompletedMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLessonCompletedDocument, options);
      }

      var GetCourseDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  query getCourse($id: String!) {\n    course(id: $id) {\n      _id\n      tags\n      title\n      introduction\n      topicTitle\n      videoLevel\n      videoLevelLabel @client\n      youtubeId\n      lessons {\n        _id\n        lessonName\n        completedAt\n        scenes {\n          start\n          end\n        }\n      }\n    }\n  }\n"])));
      /**
       * __useGetCourseQuery__
       *
       * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetCourseQuery({
       *   variables: {
       *      id: // value for 'id'
       *   },
       * });
       */


      function useGetCourseQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetCourseDocument, options);
      }

      function useGetCourseLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetCourseDocument, options);
      }

      var AddToMyLessonDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  mutation addToMyLesson($lessonId: String!) {\n    addToMyLesson(lessonId: $lessonId) {\n      _id\n      isMy\n    }\n  }\n"])));
      /**
       * __useAddToMyLessonMutation__
       *
       * To run a mutation, you first call `useAddToMyLessonMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useAddToMyLessonMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [addToMyLessonMutation, { data, loading, error }] = useAddToMyLessonMutation({
       *   variables: {
       *      lessonId: // value for 'lessonId'
       *   },
       * });
       */


      function useAddToMyLessonMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](AddToMyLessonDocument, options);
      }

      var SetNoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  mutation setNote($wordData: WordData!) {\n    setNote(wordData: $wordData)\n  }\n"])));
      /**
       * __useSetNoteMutation__
       *
       * To run a mutation, you first call `useSetNoteMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useSetNoteMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [setNoteMutation, { data, loading, error }] = useSetNoteMutation({
       *   variables: {
       *      wordData: // value for 'wordData'
       *   },
       * });
       */


      function useSetNoteMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetNoteDocument, options);
      }

      var ReportLessonIssueDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  mutation reportLessonIssue($report: LessonReport!) {\n    reportLessonIssue(report: $report)\n  }\n"])));
      /**
       * __useReportLessonIssueMutation__
       *
       * To run a mutation, you first call `useReportLessonIssueMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useReportLessonIssueMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [reportLessonIssueMutation, { data, loading, error }] = useReportLessonIssueMutation({
       *   variables: {
       *      report: // value for 'report'
       *   },
       * });
       */


      function useReportLessonIssueMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ReportLessonIssueDocument, options);
      }

      var SearchDictionaryDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  query searchDictionary($search: String!) {\n    dictionary(search: $search) {\n      entry\n      meaning {\n        korean\n        noun\n        verb\n        adverb\n        adjective\n      }\n      ipa\n    }\n  }\n"])));
      /**
       * __useSearchDictionaryQuery__
       *
       * To run a query within a React component, call `useSearchDictionaryQuery` and pass it any options that fit your needs.
       * When your component renders, `useSearchDictionaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useSearchDictionaryQuery({
       *   variables: {
       *      search: // value for 'search'
       *   },
       * });
       */


      function useSearchDictionaryQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](SearchDictionaryDocument, options);
      }

      function useSearchDictionaryLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](SearchDictionaryDocument, options);
      }

      var GetDictationDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  query getDictation($sceneIdx: Int!) {\n    dictation(sceneIdx: $sceneIdx) @client\n  }\n"])));
      /**
       * __useGetDictationQuery__
       *
       * To run a query within a React component, call `useGetDictationQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetDictationQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetDictationQuery({
       *   variables: {
       *      sceneIdx: // value for 'sceneIdx'
       *   },
       * });
       */


      function useGetDictationQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDictationDocument, options);
      }

      function useGetDictationLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDictationDocument, options);
      }

      var GetRecordsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  query getRecords($sceneIdx: Int!) {\n    records(sceneIdx: $sceneIdx) @client {\n      audioAsBase64\n      audioUrl\n      sampleRate\n      stt {\n        error\n        confidence\n        transcript\n        percent\n      }\n    }\n  }\n"])));
      /**
       * __useGetRecordsQuery__
       *
       * To run a query within a React component, call `useGetRecordsQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetRecordsQuery({
       *   variables: {
       *      sceneIdx: // value for 'sceneIdx'
       *   },
       * });
       */


      function useGetRecordsQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetRecordsDocument, options);
      }

      function useGetRecordsLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetRecordsDocument, options);
      }

      var GetNotesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  query getNotes($size: Int!, $page: Int!) {\n    getNotes(size: $size, page: $page) {\n      page\n      size\n      total\n      totalPage\n      data {\n        _id\n        word\n        meaning\n      }\n    }\n  }\n"])));
      /**
       * __useGetNotesQuery__
       *
       * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetNotesQuery({
       *   variables: {
       *      size: // value for 'size'
       *      page: // value for 'page'
       *   },
       * });
       */


      function useGetNotesQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetNotesDocument, options);
      }

      function useGetNotesLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetNotesDocument, options);
      }

      var MoreNotesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  query moreNotes($cursor: String, $size: Int!) {\n    moreNotes(cursor: $cursor, size: $size) {\n      cursor\n      hasMore @client\n      nodes {\n        _id\n        word\n        meaning\n        kor\n        noun\n        verb\n        adv\n        adj\n      }\n    }\n  }\n"])));
      /**
       * __useMoreNotesQuery__
       *
       * To run a query within a React component, call `useMoreNotesQuery` and pass it any options that fit your needs.
       * When your component renders, `useMoreNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useMoreNotesQuery({
       *   variables: {
       *      cursor: // value for 'cursor'
       *      size: // value for 'size'
       *   },
       * });
       */


      function useMoreNotesQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MoreNotesDocument, options);
      }

      function useMoreNotesLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MoreNotesDocument, options);
      }

      var DeleteNoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  mutation deleteNote($id: String!) {\n    deleteNote(id: $id)\n  }\n"])));
      /**
       * __useDeleteNoteMutation__
       *
       * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
       *   variables: {
       *      id: // value for 'id'
       *   },
       * });
       */


      function useDeleteNoteMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteNoteDocument, options);
      }

      var GerReviewCompletedLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  query gerReviewCompletedLessons($cursor: String, $size: Int!) {\n    moreCompletedLessons(cursor: $cursor, size: $size) {\n      cursor\n      hasMore @client\n      nodes {\n        _id\n        lessonName\n        completedAt\n        videoLevel\n        videoLevelLabel @client\n        videoType\n        youtubeId\n      }\n    }\n  }\n"])));
      /**
       * __useGerReviewCompletedLessonsQuery__
       *
       * To run a query within a React component, call `useGerReviewCompletedLessonsQuery` and pass it any options that fit your needs.
       * When your component renders, `useGerReviewCompletedLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGerReviewCompletedLessonsQuery({
       *   variables: {
       *      cursor: // value for 'cursor'
       *      size: // value for 'size'
       *   },
       * });
       */


      function useGerReviewCompletedLessonsQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GerReviewCompletedLessonsDocument, options);
      }

      function useGerReviewCompletedLessonsLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GerReviewCompletedLessonsDocument, options);
      }

      var UploadProfilePictureDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  mutation uploadProfilePicture($imageBase64: String!) {\n    uploadProfilePicture(imageBase64: $imageBase64) {\n      _id\n      profilePic\n    }\n  }\n"])));
      /**
       * __useUploadProfilePictureMutation__
       *
       * To run a mutation, you first call `useUploadProfilePictureMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useUploadProfilePictureMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [uploadProfilePictureMutation, { data, loading, error }] = useUploadProfilePictureMutation({
       *   variables: {
       *      imageBase64: // value for 'imageBase64'
       *   },
       * });
       */


      function useUploadProfilePictureMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UploadProfilePictureDocument, options);
      }

      var GetUserProgressDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  query getUserProgress {\n    progressState {\n      totalCount\n      datetimes\n      counts {\n        type\n        count\n      }\n    }\n  }\n"])));
      /**
       * __useGetUserProgressQuery__
       *
       * To run a query within a React component, call `useGetUserProgressQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetUserProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetUserProgressQuery({
       *   variables: {
       *   },
       * });
       */


      function useGetUserProgressQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetUserProgressDocument, options);
      }

      function useGetUserProgressLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetUserProgressDocument, options);
      }

      var GetLevelsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  query getLevels {\n    levels {\n      _id\n      name\n    }\n  }\n"])));
      /**
       * __useGetLevelsQuery__
       *
       * To run a query within a React component, call `useGetLevelsQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetLevelsQuery({
       *   variables: {
       *   },
       * });
       */


      function useGetLevelsQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetLevelsDocument, options);
      }

      function useGetLevelsLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetLevelsDocument, options);
      }

      var SetLevelDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  mutation setLevel($levelName: LevelName!) {\n    setLevel(levelName: $levelName) {\n      _id\n      userLevelId\n      userLevelName\n    }\n  }\n"])));
      /**
       * __useSetLevelMutation__
       *
       * To run a mutation, you first call `useSetLevelMutation` within a React component and pass it any options that fit your needs.
       * When your component renders, `useSetLevelMutation` returns a tuple that includes:
       * - A mutate function that you can call at any time to execute the mutation
       * - An object with fields that represent the current status of the mutation's execution
       *
       * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
       *
       * @example
       * const [setLevelMutation, { data, loading, error }] = useSetLevelMutation({
       *   variables: {
       *      levelName: // value for 'levelName'
       *   },
       * });
       */


      function useSetLevelMutation(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLevelDocument, options);
      }

      var GetUserGuideDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  query getUserGuide {\n    userGuide {\n      introduction\n      youtubeId\n    }\n  }\n"])));
      /**
       * __useGetUserGuideQuery__
       *
       * To run a query within a React component, call `useGetUserGuideQuery` and pass it any options that fit your needs.
       * When your component renders, `useGetUserGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
       * you can use to render your UI.
       *
       * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { data, loading, error } = useGetUserGuideQuery({
       *   variables: {
       *   },
       * });
       */


      function useGetUserGuideQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetUserGuideDocument, options);
      }

      function useGetUserGuideLazyQuery(baseOptions) {
        var options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
        return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetUserGuideDocument, options);
      }
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API_URL: 'https://api.speakypeaky.com/api/v1',
        GRAPHQL_URL: 'https://api.speakypeaky.com/graphql',
        // API_URL: 'https://api-dev.speakypeaky.com/api/v1',
        // GRAPHQL_URL: 'https://api-dev.speakypeaky.com/graphql',
        // GRAPHQL_URL: 'http://localhost:4044/',
        // GRAPHQL_URL: 'http://192.168.0.3:4044/',
        // API_URL: 'http://localhost:4043/api/v1',
        // API_URL: 'http://localhost:4044/dev/api/v1',
        // S3 Bucket
        accessKeyId: 'AKIAIQV2FPU2ROUJB2QA',
        secretAccessKey: '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',
        region: 'us-east-1',
        bucket: 'start-english-learning',
        assetBaseUrl: 'https://asset.speakypeaky.com/',
        // This is for Speaky Peaky
        validatorURL: 'https://validator.fovea.cc/v1/validate?appName=com.summer.startenglishnow&apiKey=f8ba72c1-7125-4f97-9c57-da5ae62fbc45',
        stripePublicKey: 'pk_test_J2UsK5W9xq4swWJN0ZdhEn0W00uGeII06q',
        firebase: {
          apiKey: 'AIzaSyBcuf15jDOG-Q6pIyc2ZNYCjiV1u5pTLHU',
          authDomain: 'start-english-now-android.firebaseapp.com',
          databaseURL: 'https://start-english-now-android.firebaseio.com',
          projectId: 'start-english-now-android',
          storageBucket: 'start-english-now-android.appspot.com',
          messagingSenderId: '73688891988',
          appId: '1:73688891988:web:74a17a3e4bf8a063'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DkPS":
    /*!*************************************************!*\
      !*** ./src/app/services/on-boarding.service.ts ***!
      \*************************************************/

    /*! exports provided: OnBoardingService */

    /***/
    function DkPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingService", function () {
        return OnBoardingService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");

      var OnBoardingService = /*#__PURE__*/function () {
        function OnBoardingService(apiService) {
          _classCallCheck(this, OnBoardingService);

          this.apiService = apiService;
        }

        _createClass(OnBoardingService, [{
          key: "userGuid",
          value: function userGuid(data) {
            return this.apiService.post('/static/user-guide', data);
          }
        }, {
          key: "levelList",
          value: function levelList() {
            return this.apiService.get('/changelevel/list');
          }
        }, {
          key: "changeLevel",
          value: function changeLevel(data) {
            return this.apiService.post('/changelevel/update', data);
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            var noCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var self = this;
            var req = this.apiService.get('/user/get-profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (e) {
              self.profileCache = {
                timestamp: +new Date(),
                profile: e.data
              };
            }));

            if (noCache) {
              return req;
            }

            if (this.profileCache) {
              if (+new Date() - this.profileCache.timestamp < 5000) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                  data: this.profileCache.profile
                });
              }
            }

            return req;
          }
        }, {
          key: "verifyEmail",
          value: function verifyEmail(email) {
            return this.apiService.post('/user/resend-email', {
              email: email
            });
          }
        }, {
          key: "updateUserName",
          value: function updateUserName(data) {
            return this.apiService.post('/user/update-name', data);
          }
        }, {
          key: "updateUserEmail",
          value: function updateUserEmail(data) {
            return this.apiService.post('/user/update-email', data);
          }
        }, {
          key: "updateUserPassword",
          value: function updateUserPassword(data) {
            return this.apiService.post('/user/update-password', data);
          }
        }, {
          key: "contactToAdmin",
          value: function contactToAdmin(data) {
            return this.apiService.post('/contactus/user/set-contact-us', data);
          }
        }, {
          key: "getSubTitleLanguages",
          value: function getSubTitleLanguages() {
            return this.apiService.get('/subTitleLanguages/list');
          }
        }, {
          key: "setUserSubTitleLanguage",
          value: function setUserSubTitleLanguage(data) {
            return this.apiService.post('/user/set-subtitleLanguage', data);
          }
        }, {
          key: "uploadProfilePicture",
          value: function uploadProfilePicture(data) {
            return this.apiService.post('/user/uploadProfilePicture', data);
          }
        }, {
          key: "getUserSubTitleLanguage",
          value: function getUserSubTitleLanguage(subTitleLanguageId) {
            return this.apiService.get('/subTitleLanguages/details/' + subTitleLanguageId);
          }
        }]);

        return OnBoardingService;
      }();

      OnBoardingService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      };

      OnBoardingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], OnBoardingService);
      /***/
    },

    /***/
    "GY70":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/channel-io-mobile/channel-io-mobile.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function GY70(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chat {\n  z-index: 10;\n  display: inline;\n  position: fixed;\n  bottom: 1%;\n  right: 1%;\n}\n.chat.hasTabbar {\n  bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5uZWwtaW8tbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6ImNoYW5uZWwtaW8tbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQge1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMSU7XG4gIHJpZ2h0OiAxJTtcbiAgJi5oYXNUYWJiYXIge1xuICAgIGJvdHRvbTogMTAlO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared.service */
      "zuHl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(router, httpClient, sharedService) {
          _classCallCheck(this, ApiService);

          this.router = router;
          this.httpClient = httpClient;
          this.sharedService = sharedService;
        }

        _createClass(ApiService, [{
          key: "post",
          value: function post(path, data) {
            var _this = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sharedService.getNativeStorage('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (token) {
              var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
              return _this.httpClient.post(url, data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  accesstoken: token === null || token === void 0 ? void 0 : token.data
                })
              });
            }), // shareReplay(1),
            // map((res) => res),
            // retry(1),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              console.log(err);

              _this.sharedService.presentAlert('Alert', err.error);

              if (err.error.status === 502) {
                _this.sharedService.removeNativeStorage('token');

                _this.router.navigate(['/login']);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
              }
            }));
          }
        }, {
          key: "postWithoutToken",
          value: function postWithoutToken(path, data) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
            return this.httpClient.post(url, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              // this.sharedService.presentAlert('Alert', err.error)
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            }));
          }
        }, {
          key: "get",
          value: function get(path, data) {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sharedService.getNativeStorage('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (token) {
              var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  accesstoken: token === null || token === void 0 ? void 0 : token.data
                }),
                data: data
              };
              var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
              return _this2.httpClient.get(url, options);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this2.sharedService.presentAlert('Alert', '', err.error.error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error); // if (err.error.status === 502 || err.error.error === ERR_TOKEN_EXP) {
              //   // this.sharedService.removeNativeStorage('token')
              //   // this.router.navigate(['/login'])
              //   return throwError(err.error)
              // } else {
              //   return throwError(err.error)
              // }
            }));
          }
        }, {
          key: "getWithoutToken",
          value: function getWithoutToken(path, data) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              data: data
            };
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
            return this.httpClient.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              console.log(err); // this.sharedService.presentAlert('Alert', err.error)

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])], ApiService);
      /***/
    },

    /***/
    "HtUY":
    /*!**************************************************!*\
      !*** ./src/app/services/subscription.service.ts ***!
      \**************************************************/

    /*! exports provided: SubscriptionService */

    /***/
    function HtUY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionService", function () {
        return SubscriptionService;
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


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");

      var SubscriptionService = /*#__PURE__*/function () {
        function SubscriptionService(apiService) {
          _classCallCheck(this, SubscriptionService);

          this.apiService = apiService;
        }

        _createClass(SubscriptionService, [{
          key: "getAllStripePlans",
          value: function getAllStripePlans() {
            return this.apiService.get('/payments/get_all_plans');
          }
        }, {
          key: "getCustomerDetails",
          value: function getCustomerDetails(customerId) {
            return this.apiService.get('/payments/get_user/' + customerId);
          }
        }, {
          key: "createStripeCustomer",
          value: function createStripeCustomer(data) {
            return this.apiService.post('/payments/create_user', data);
          }
        }, {
          key: "attachSourceToCustomer",
          value: function attachSourceToCustomer(data) {
            return this.apiService.post('/payments/create_card_method', data);
          }
        }, {
          key: "getCustomerAllPaymentMethods",
          value: function getCustomerAllPaymentMethods(data) {
            return this.apiService.post('/payments/get_payment_methods', data);
          }
        }, {
          key: "processedToPayUsingStripe",
          value: function processedToPayUsingStripe(data) {
            return this.apiService.post('/payments/create_subscription', data);
          }
        }, {
          key: "turnOffAutoRenewalForStripe",
          value: function turnOffAutoRenewalForStripe(subscriptionId) {
            return this.apiService.get('/payments/updateSubscription/' + subscriptionId);
          }
        }, {
          key: "getStripeSubscriptionDetails",
          value: function getStripeSubscriptionDetails(subscriptionId) {
            return this.apiService.get('/payments/subscription-details/' + subscriptionId);
          }
        }, {
          key: "setUserSubscription",
          value: function setUserSubscription(data) {
            return this.apiService.post('/userSubscription/setUserSubscription', data);
          }
        }, {
          key: "getUserSubscription",
          value: function getUserSubscription(data) {
            return this.apiService.post('/userSubscription/getUserSubscription', data);
          }
        }, {
          key: "verifySubscription",
          value: function verifySubscription(data) {
            return this.apiService.post('/userSubscription/userV2', data);
          }
        }, {
          key: "setStripeCustomerId",
          value: function setStripeCustomerId(data) {
            return this.apiService.post('/user/setStripeCustomerId', data);
          }
        }]);

        return SubscriptionService;
      }();

      SubscriptionService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      };

      SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], SubscriptionService);
      /***/
    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 90],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 91],
        "./pwa-camera-modal.entry.js": ["cJxf", 92],
        "./pwa-camera.entry.js": ["eGHz", 93],
        "./pwa-toast.entry.js": ["fHjd", 94]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "MYXF":
    /*!**************************************************************************!*\
      !*** ./src/app/components/channel-io-mobile/channel-io-mobile.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ChannelIoMobileModule */

    /***/
    function MYXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelIoMobileModule", function () {
        return ChannelIoMobileModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./channel-io-mobile.component */
      "xW20");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var ChannelIoMobileModule = function ChannelIoMobileModule() {
        _classCallCheck(this, ChannelIoMobileModule);
      };

      ChannelIoMobileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__["ChannelIoMobileComponent"]],
        exports: [_channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__["ChannelIoMobileComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ChannelIoMobileModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/service-worker */
      "3pDu");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! js-cookie */
      "p46w");
      /* harmony import */


      var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/reactapp/useStore */
      "+9Tx");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          SplashScreen = _capacitor_core__WEBP.SplashScreen,
          StatusBar = _capacitor_core__WEBP.StatusBar,
          App = _capacitor_core__WEBP.App,
          Device = _capacitor_core__WEBP.Device;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, sharedService, authService, navController, modalCtrl, alertController, onBoardingService, router, route, swUpdate, swPush) {
          var _this3 = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.sharedService = sharedService;
          this.authService = authService;
          this.navController = navController;
          this.modalCtrl = modalCtrl;
          this.alertController = alertController;
          this.onBoardingService = onBoardingService;
          this.router = router;
          this.route = route;
          this.swUpdate = swUpdate;
          this.swPush = swPush; // isOnBoarding = false
          // set up hardware back button event.

          this.lastTimeBackPress = 0;
          this.timePeriodToExit = 2000;
          SplashScreen.show({
            showDuration: 3000,
            autoHide: true
          });
          sharedService.getDeviceInfo().then(function (info) {
            src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_11__["useStore"].setState({
              navController: navController,
              route: route,
              deviceInfo: info,
              platform: platform,
              sharedService: sharedService
            });

            if (info.platform === 'web') {
              if (document.location.hostname !== 'localhost' && document.location.protocol === 'http:') {// document.location.href = document.location.href.replace('http:', 'https:')
              }
            }

            window.addEventListener('beforeinstallprompt', function (e) {
              console.log('beforeinstallprompt Event fired'); // Prevent Chrome 67 and earlier from automatically showing the prompt

              e.preventDefault(); // Stash the event so it can be triggered later.

              _this3.deferredPrompt = e;

              _this3.addToHome();
            });

            _this3.initializeApp();

            _this3.platform.backButton.subscribe(_this3.handleBackButton);

            SplashScreen.hide();
          });
        }

        _createClass(AppComponent, [{
          key: "handleBackButton",
          value: function handleBackButton() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var element;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.modalCtrl.getTop();

                    case 3:
                      element = _context3.sent;

                      if (!element) {
                        _context3.next = 7;
                        break;
                      }

                      element.dismiss();
                      return _context3.abrupt("return");

                    case 7:
                      _context3.next = 11;
                      break;

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](0);

                    case 11:
                      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                        this.routerOutlet.pop();
                      } else if (this.router.url === '/dashboard/lessons' || this.router.url === '/login') {
                        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {// navigator.app.exitApp(); // work for ionic 4
                        } else {
                          this.lastTimeBackPress = new Date().getTime();
                        }
                      }

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 9]]);
            }));
          }
        }, {
          key: "updateServiceWorker",
          value: function updateServiceWorker() {
            if (this.swUpdate.isEnabled) {
              this.swUpdate.available.subscribe(function () {
                if (confirm('New version available. Load New Version?')) {
                  window.location.reload();
                }
              });
              this.swPush.notificationClicks.subscribe(function (_ref4) {
                var action = _ref4.action,
                    notification = _ref4.notification;
                console.log('====================================');
                console.log(action);
                console.log(notification);
                console.log('===================================='); // TODO: Do something in response to notification click.
              });
            }
          }
        }, {
          key: "suggestDownload",
          value: function suggestDownload() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Hey there,',
                        message: 'For better experience, would you like to download the Speaky Peaky app?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          handler: function handler() {
                            js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('did-suggest-app', 'yes', {
                              expires: 7
                            });
                          }
                        }, {
                          text: 'Download',
                          handler: function handler() {
                            js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('did-suggest-app', 'yes', {
                              expires: 7
                            });
                            window.open('https://speakypeaky.page.link/home');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var info, token, profile, isOnBoarding;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.updateServiceWorker();
                      _context5.next = 3;
                      return this.sharedService.getDeviceInfo();

                    case 3:
                      info = _context5.sent;

                      if (info.isApp) {
                        StatusBar.setStyle({
                          style: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["StatusBarStyle"].Dark
                        });
                      }

                      if (info.isMobileWeb && !js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('did-suggest-app')) {
                        this.suggestDownload();
                      }

                      _context5.prev = 6;
                      _context5.next = 9;
                      return this.sharedService.getNativeStorage('token');

                    case 9:
                      token = _context5.sent;

                      if (!(token === null || token === void 0 ? void 0 : token.data)) {
                        _context5.next = 28;
                        break;
                      }

                      _context5.prev = 11;
                      _context5.next = 14;
                      return this.getUserProfile();

                    case 14:
                      profile = _context5.sent;
                      console.log({
                        profile: profile
                      });

                      if (!profile.data) {
                        _context5.next = 20;
                        break;
                      }

                      if (info.isApp) {// if(|| document.location.hostname !== 'localhost')
                      }

                      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production) {
                        this.navController.navigateRoot('/dashboard');
                      } else {// this.navController.navigateRoot('/dashboard')
                      }

                      return _context5.abrupt("return");

                    case 20:
                      _context5.next = 24;
                      break;

                    case 22:
                      _context5.prev = 22;
                      _context5.t0 = _context5["catch"](11);

                    case 24:
                      this.authService.authSubject.next(false);
                      this.navController.navigateRoot('/login');
                      _context5.next = 35;
                      break;

                    case 28:
                      _context5.next = 30;
                      return this.sharedService.getNativeStorage('isOnBoarding');

                    case 30:
                      isOnBoarding = _context5.sent;

                      if (!((isOnBoarding === null || isOnBoarding === void 0 ? void 0 : isOnBoarding.data) === true)) {
                        _context5.next = 35;
                        break;
                      }

                      this.authService.authSubject.next(false);
                      this.navController.navigateRoot('/login');
                      return _context5.abrupt("return");

                    case 35:
                      _context5.next = 40;
                      break;

                    case 37:
                      _context5.prev = 37;
                      _context5.t1 = _context5["catch"](6);
                      console.error(_context5.t1);

                    case 40:
                      this.authService.authSubject.next(false);
                      this.navController.navigateRoot('/on-boarding');

                    case 42:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[6, 37], [11, 22]]);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // button click event to show the promt
            window.addEventListener('appinstalled', function (event) {
              alert('installed');
            });

            if (window.matchMedia('(display-mode: standalone)').matches) {
              alert('display-mode is standalone');
            }
          }
        }, {
          key: "addToHome",
          value: function addToHome() {
            var _this4 = this;

            if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
              // Show the prompt
              this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

              this.deferredPrompt.userChoice.then(function (choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt');
                } else {
                  console.log('User dismissed the A2HS prompt');
                } // We no longer need the prompt.  Clear it up.


                _this4.deferredPrompt = null;
              });
            }
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            return this.onBoardingService.getUserProfile().toPromise();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]
        }, {
          type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRouterOutlet"], {
            "static": false
          }]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <app-channel-io-mobile></app-channel-io-mobile>\n</ion-app>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/lessons.service */
      "s1uX");
      /* harmony import */


      var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/subscription.service */
      "HtUY");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/service-worker */
      "3pDu");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var ng_push__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-push */
      "N5Cv");
      /* harmony import */


      var ng_push__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/google-analytics/ngx */
      "m4HQ");
      /* harmony import */


      var _components_channel_io_mobile_channel_io_mobile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/channel-io-mobile/channel-io-mobile.module */
      "MYXF");
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      "jcOq");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
        }), ng_push__WEBPACK_IMPORTED_MODULE_13__["PushNotificationsModule"], _components_channel_io_mobile_channel_io_mobile_module__WEBPACK_IMPORTED_MODULE_15__["ChannelIoMobileModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }, _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"], _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"], _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_14__["GoogleAnalytics"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__["Base64"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZNya":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*********************************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function ZNya(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dBYC", "common", 42],
        "./ion-alert.entry.js": ["dd9K", "common", 43],
        "./ion-app_8.entry.js": ["w3/4", "common", 44],
        "./ion-avatar_3.entry.js": ["IJvw", "common", 45],
        "./ion-back-button.entry.js": ["Bzea", "common", 46],
        "./ion-backdrop.entry.js": ["XUvO", 47],
        "./ion-button_2.entry.js": ["EZXS", "common", 48],
        "./ion-card_5.entry.js": ["35tz", "common", 49],
        "./ion-checkbox.entry.js": ["CwRq", "common", 50],
        "./ion-chip.entry.js": ["13mQ", "common", 51],
        "./ion-col_3.entry.js": ["Vw/N", 52],
        "./ion-datetime_3.entry.js": ["FaZn", "common", 53],
        "./ion-fab_3.entry.js": ["4jfp", "common", 54],
        "./ion-img.entry.js": ["Fmwn", 55],
        "./ion-infinite-scroll_2.entry.js": ["pVu2", 56],
        "./ion-input.entry.js": ["osmV", "common", 57],
        "./ion-item-option_3.entry.js": ["BeVK", "common", 58],
        "./ion-item_8.entry.js": ["0sPl", "common", 59],
        "./ion-loading.entry.js": ["L19J", "common", 60],
        "./ion-menu_3.entry.js": ["/uLI", "common", 61],
        "./ion-modal.entry.js": ["Tfpq", "common", 62],
        "./ion-nav_2.entry.js": ["a/9b", "common", 63],
        "./ion-popover.entry.js": ["PLk7", "common", 64],
        "./ion-progress-bar.entry.js": ["9iIR", "common", 65],
        "./ion-radio_2.entry.js": ["NkB0", "common", 66],
        "./ion-range.entry.js": ["+K8/", "common", 67],
        "./ion-refresher_2.entry.js": ["XcmX", "common", 68],
        "./ion-reorder_2.entry.js": ["Up0A", "common", 69],
        "./ion-ripple-effect.entry.js": ["vQEB", 70],
        "./ion-route_4.entry.js": ["DXEm", "common", 71],
        "./ion-searchbar.entry.js": ["tv4E", "common", 72],
        "./ion-segment_2.entry.js": ["q+qH", "common", 73],
        "./ion-select_3.entry.js": ["pS87", "common", 74],
        "./ion-slide_2.entry.js": ["dLII", 75],
        "./ion-spinner.entry.js": ["Lnq6", "common", 76],
        "./ion-split-pane.entry.js": ["n4jw", 77],
        "./ion-tab-bar_2.entry.js": ["+gxd", "common", 78],
        "./ion-tab_2.entry.js": ["DdnD", "common", 79],
        "./ion-text.entry.js": ["zwDB", "common", 80],
        "./ion-textarea.entry.js": ["RwqG", "common", 81],
        "./ion-toast.entry.js": ["CHyx", "common", 82],
        "./ion-toggle.entry.js": ["8yey", "common", 83],
        "./ion-virtual-scroll.entry.js": ["A/r9", 84]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "ZNya";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared.service */
      "zuHl");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(sharedService, apiService) {
          _classCallCheck(this, AuthService);

          this.sharedService = sharedService;
          this.apiService = apiService;
          this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(user) {
            return this.apiService.postWithoutToken('/user/authenticate', user);
          }
        }, {
          key: "signUp",
          value: function signUp(user) {
            return this.apiService.postWithoutToken('/user/signup', user);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return this.apiService.postWithoutToken('/user/requestPasswordURL', email);
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            return this.authSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], AuthService);
      /***/
    },

    /***/
    "pdqN":
    /*!**************************************!*\
      !*** ./src/reactapp/typePolicies.ts ***!
      \**************************************/

    /*! exports provided: localTypeDefs, currentLessonIdVar, dictationsVar, recordsVar, typePolicies */

    /***/
    function pdqN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _levelLabel;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "localTypeDefs", function () {
        return localTypeDefs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "currentLessonIdVar", function () {
        return currentLessonIdVar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dictationsVar", function () {
        return dictationsVar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "recordsVar", function () {
        return recordsVar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "typePolicies", function () {
        return typePolicies;
      });
      /* harmony import */


      var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @apollo/client */
      "VX74");
      /* harmony import */


      var _types_and_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./types-and-hooks */
      "35Ww");

      var localTypeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  extend type Query {\n    currentLessonId: String\n    dictation(lessonId: Int!, sceneIdx: Int!): String\n  }\n  extend type Mutation {\n    updateDictation(id: ID!): String\n  }\n  extend type WordNoteCursorPage {\n    hasMore: Boolean\n  }\n  extend type LessonCursorPage {\n    hasMore: Boolean\n  }\n  extend type Lesson {\n    videoLevelLabel: String\n  }\n  extend type Course {\n    videoLevelLabel: String\n  }\n"])));

      var currentLessonIdVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])(null);
      var dictationsVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])({});
      var recordsVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])({});
      var typePolicies = {
        Query: {
          fields: {
            currentLessonId: {
              read: function read(_, _ref5) {
                var variables = _ref5.variables;

                if (variables.id) {
                  return variables.id;
                }

                return currentLessonIdVar();
              }
            },
            dictation: {
              read: function read(_, _ref6) {
                var variables = _ref6.variables;
                console.log({
                  variables: variables
                });
                var sceneIdx = variables.sceneIdx;
                var lessonId = currentLessonIdVar();
                return dictationsVar()["".concat(lessonId, ":").concat(sceneIdx)] || '';
              }
            },
            records: {
              read: function read(_, _ref7) {
                var variables = _ref7.variables;
                console.log({
                  variables: variables
                });
                var sceneIdx = variables.sceneIdx;
                var lessonId = currentLessonIdVar();
                return recordsVar()["".concat(lessonId, ":").concat(sceneIdx)] || [];
              }
            },
            moreNotes: {
              merge: function merge(existing, incoming, _ref8) {
                var readField = _ref8.readField,
                    args = _ref8.args;
                var nodes = args.cursor && existing ? Object.assign({}, existing.nodes) : {};
                incoming.nodes.forEach(function (node) {
                  var idx = readField('_id', node);
                  nodes[idx] = node;
                });
                return {
                  cursor: incoming.cursor,
                  hasMore: incoming.nodes.length === args.size,
                  nodes: nodes
                };
              },
              read: function read(existing) {
                if (existing) {
                  return {
                    cursor: existing.cursor,
                    hasMore: existing.hasMore,
                    nodes: Object.values(existing.nodes)
                  };
                }
              }
            },
            moreCompletedLessons: {
              merge: function merge(existing, incoming, _ref9) {
                var readField = _ref9.readField,
                    args = _ref9.args;
                var nodes = args.cursor && existing ? Object.assign({}, existing.nodes) : {};
                incoming.nodes.forEach(function (node) {
                  var idx = readField('_id', node);
                  nodes[idx] = node;
                });
                return {
                  cursor: incoming.cursor,
                  hasMore: incoming.nodes.length === args.size,
                  nodes: nodes
                };
              },
              read: function read(existing) {
                if (existing) {
                  return {
                    cursor: existing.cursor,
                    hasMore: existing.hasMore,
                    nodes: Object.values(existing.nodes)
                  };
                }
              }
            }
          }
        },
        Mutation: {
          fields: {
            updateDictation: {
              read: function read() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                console.log('read', args);
              },
              merge: function merge() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                console.log('merge', args);
              }
            }
          }
        },
        LessonProgress: {
          fields: {
            datetimes: {
              read: function read(datetimes) {
                return datetimes.map(function (d) {
                  return new Date(d);
                });
              }
            }
          }
        },
        User: {
          fields: {// userLevelName: {
            //   read(userLevelName) {
            //     return levelMap[userLevelName]
            //   },
            // },
          }
        },
        Lesson: {
          fields: {
            videoLevelLabel: {
              read: function read(_, _ref10) {
                var readField = _ref10.readField;
                var level = readField('videoLevel');
                return levelLabel[level]; // return levelLabel[userLevelName]
              }
            }
          }
        },
        Course: {
          fields: {
            videoLevelLabel: {
              read: function read(_, _ref11) {
                var readField = _ref11.readField;
                var level = readField('videoLevel');
                return levelLabel[level];
              }
            }
          }
        }
      };
      var levelMap = {
        UpperBeginner: 'UpperBeginner',
        'Upper-beginner': 'UpperBeginner',
        Elementary: 'UpperBeginner',
        Intermediate: 'Intermediate',
        Advanced: 'Advanced'
      };
      var levelLabel = (_levelLabel = {}, _defineProperty(_levelLabel, _types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].UpperBeginner, 'Upper-beginner'), _defineProperty(_levelLabel, _types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].Intermediate, 'Intermediate'), _defineProperty(_levelLabel, _types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].Advanced, 'Advanced'), _levelLabel);
      /***/
    },

    /***/
    "s1uX":
    /*!*********************************************!*\
      !*** ./src/app/services/lessons.service.ts ***!
      \*********************************************/

    /*! exports provided: LessonsService */

    /***/
    function s1uX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LessonsService", function () {
        return LessonsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api.service */
      "H+bZ");
      /* harmony import */


      var _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./on-boarding.service */
      "DkPS");

      var LessonsService = /*#__PURE__*/function () {
        function LessonsService(httpClient, apiService, onBoardingService) {
          _classCallCheck(this, LessonsService);

          this.httpClient = httpClient;
          this.apiService = apiService;
          this.onBoardingService = onBoardingService;
          this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        }

        _createClass(LessonsService, [{
          key: "getTodaysLessons",
          value: function getTodaysLessons(data) {
            return this.apiService.get("/lesson/recommendation/".concat(data));
          }
        }, {
          key: "getNewUploadsLessons",
          value: function getNewUploadsLessons(page) {
            var today = this.weekdays[new Date().getDay()];
            var profile = this.onBoardingService.profileCache.profile;
            var payload = {
              day: today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today,
              videoLevel: profile.userLevelName
            };
            return this.apiService.post("/lesson/get-newUploadLessons/".concat(page), payload);
          }
        }, {
          key: "getTodaysLesson",
          value: function getTodaysLesson() {
            var day = this.weekdays[new Date().getDay()];
            return this.getSubLessonDetails({
              day: day
            }, false);
          }
        }, {
          key: "getSubLessonDetails",
          value: function getSubLessonDetails(data, isDraft) {
            if (isDraft === true) {
              return this.apiService.post("/lesson/drafted-lesson-details", data);
            } else {
              return this.apiService.post("/lesson/details-lessons", data);
            }
          }
        }, {
          key: "getDraftLessonsForAdmin",
          value: function getDraftLessonsForAdmin(page) {
            return this.apiService.get("/lesson/drafted-lessons/".concat(page));
          }
        }, {
          key: "getDraftSubLessonDetails",
          value: function getDraftSubLessonDetails(data) {
            return this.apiService.get("/lesson/drafted-lesson-details", data);
          }
        }, {
          key: "saveLesson",
          value: function saveLesson(data) {
            return this.apiService.post("/lesson/add-savedLesson", data);
          }
        }, {
          key: "removeSavedLesson",
          value: function removeSavedLesson(data) {
            return this.apiService.post("/lesson/remove-savedLesson", data);
          }
        }, {
          key: "getSavedLessons",
          value: function getSavedLessons(page) {
            return this.apiService.get("/lesson/savedLessons/".concat(page));
          }
        }, {
          key: "getPopularLessons",
          value: function getPopularLessons(page) {
            return this.apiService.get("/lesson/popularLessons/".concat(page));
          }
        }, {
          key: "getCourseList",
          value: function getCourseList(page, data) {
            return this.apiService.post("/lesson/course-list/".concat(page), data);
          }
        }, {
          key: "getMyCourse",
          value: function getMyCourse() {
            return this.apiService.get("/lesson/my-course");
          }
        }, {
          key: "getCompletedLessons",
          value: function getCompletedLessons() {
            return this.apiService.get("/lesson/completedLessons");
          }
        }, {
          key: "getCourseDetails",
          value: function getCourseDetails(lessonId, type) {
            return this.apiService.get("/lesson/course-details/".concat(lessonId, "/").concat(type));
          }
        }, {
          key: "completeLesson",
          value: function completeLesson(data) {
            return this.apiService.post("/lesson/completed", data);
          }
        }, {
          key: "addMyCourseLesson",
          value: function addMyCourseLesson(data) {
            return this.apiService.post("/lesson/add-course-lesson", data);
          }
        }, {
          key: "completedLessonsWithTimeRange",
          value: function completedLessonsWithTimeRange(data) {
            return this.apiService.post("/lesson/completedLessons-within-timeRange", data);
          }
        }, {
          key: "reportAnIssueToAdmin",
          value: function reportAnIssueToAdmin(data) {
            return this.apiService.post("/reportIssues/user/set-report-issue", data);
          }
        }, {
          key: "setUserNotes",
          value: function setUserNotes(data) {
            return this.apiService.post("/user/set-notes", data);
          }
        }, {
          key: "getUserNotes",
          value: function getUserNotes(page) {
            return this.apiService.get("/user/get-notes/".concat(page));
          }
        }, {
          key: "deleteUserNotes",
          value: function deleteUserNotes(data) {
            return this.apiService.post("/user/delete-notes", data);
          }
        }, {
          key: "getAcronymsList",
          value: function getAcronymsList() {
            return this.apiService.get("/user/acronyms-list");
          } // Find a meaning for word

        }, {
          key: "findWordMeaning",
          value: function findWordMeaning(entry) {
            var url = "https://twinword-word-graph-dictionary.p.rapidapi.com/definition_kr/?entry=".concat(entry);
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-rapidapi-key': 'cRKV2Kl60tmshr5Yw1eForDx52Fdp19YCpQjsn0SpP4r1sNWol'
              })
            };
            return this.httpClient.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              console.log(err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
          }
        }]);

        return LessonsService;
      }();

      LessonsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"]
        }];
      };

      LessonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"]])], LessonsService);
      /***/
    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(navController, router, authService) {
          _classCallCheck(this, AuthGuard);

          this.navController = navController;
          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this5 = this;

            return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
              if (res) {
                return true;
              } else {
                _this5.navController.setDirection('root');

                _this5.router.navigate(['/login']);

                return false;
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGuard);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [// {
      //   path: '',
      //   redirectTo: 'on-boarding',
      //   pathMatch: 'full',
      // },
      {
        path: 'sign-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sign-up-sign-up-module */
          "sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ./sign-up/sign-up.module */
          "kEuc")).then(function (m) {
            return m.SignUpPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "TDBs")).then(function (m) {
            return m.DashboardPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'on-boarding',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | on-boarding-on-boarding-module */
          [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("common"), __webpack_require__.e("on-boarding-on-boarding-module")]).then(__webpack_require__.bind(null,
          /*! ./on-boarding/on-boarding.module */
          "/a8e")).then(function (m) {
            return m.OnBoardingPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'on-boarding-level',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | on-boarding-on-boarding-level-on-boarding-level-module */
          [__webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("on-boarding-on-boarding-level-on-boarding-level-module")]).then(__webpack_require__.bind(null,
          /*! ./on-boarding/on-boarding-level/on-boarding-level.module */
          "lhpY")).then(function (m) {
            return m.OnBoardingLevelPageModule;
          });
        }
      }, {
        path: 'on-boarding-language',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | on-boarding-on-boarding-language-on-boarding-language-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("on-boarding-on-boarding-language-on-boarding-language-module")]).then(__webpack_require__.bind(null,
          /*! ./on-boarding/on-boarding-language/on-boarding-language.module */
          "WIsk")).then(function (m) {
            return m.OnBoardingLanguagePageModule;
          });
        }
      }, {
        path: 'on-boarding-reminder',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | on-boarding-on-boarding-reminder-on-boarding-reminder-module */
          [__webpack_require__.e("common"), __webpack_require__.e("on-boarding-on-boarding-reminder-on-boarding-reminder-module")]).then(__webpack_require__.bind(null,
          /*! ./on-boarding/on-boarding-reminder/on-boarding-reminder.module */
          "1Ggr")).then(function (m) {
            return m.OnBoardingReminderPageModule;
          });
        }
      }, {
        path: 'lesson-details/:subLessonId/:isCompleted/:isDraft',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-lessons-lesson-details-lesson-details-module */
          [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~bc0d1c68"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-details-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/lesson-details/lesson-details.module */
          "+nZI")).then(function (m) {
            return m.LessonDetailsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'lesson-steps/:subLessonId/:isDraft',
        pathMatch: 'prefix',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module */
          [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module~dashboard-lessons-my-cours~c122b7d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~dashboard-lessons-le~e58e7fb1"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/lesson-details/lesson-steps/lesson-steps.module */
          "auUv")).then(function (m) {
            return m.LessonStepsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'lesson-complete',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module */
          [__webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~user-profile-user-pr~652bf6cb"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~dashboard-lessons-le~e58e7fb1"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/lesson-details/lesson-complete/lesson-complete.module */
          "03RU")).then(function (m) {
            return m.LessonCompletePageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'payment/manage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module */
          "dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.module */
          "4vM4")).then(function (m) {
            return m.StripeManagePageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'payment/:productId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module */
          "dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.module */
          "PABW")).then(function (m) {
            return m.StripePaymentPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'popular',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-lessons-popular-lessons-popular-lessons-module */
          "dashboard-lessons-popular-lessons-popular-lessons-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/popular-lessons/popular-lessons.module */
          "Hh7y")).then(function (m) {
            return m.PopularLessonsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'new-uploads',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-lessons-new-uploads-new-uploads-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("dashboard-lessons-new-uploads-new-uploads-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/new-uploads/new-uploads.module */
          "BB7H")).then(function (m) {
            return m.NewUploadsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'draft-lessons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-lessons-draft-lessons-draft-lessons-module */
          "dashboard-lessons-draft-lessons-draft-lessons-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/draft-lessons/draft-lessons.module */
          "jg6N")).then(function (m) {
            return m.DraftLessonsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'saved-lessons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-lessons-saved-lessons-saved-lessons-module */
          "dashboard-lessons-saved-lessons-saved-lessons-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/saved-lessons/saved-lessons.module */
          "mSkJ")).then(function (m) {
            return m.SavedLessonsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'search-list/:suggestedCurriculumId/:suggestedCurriculumTitle/:suggestedCurriculumDay',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-search-lessons-search-list-search-list-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-search-lessons-search-list-search-list-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/search-lessons/search-list/search-list.module */
          "DxXz")).then(function (m) {
            return m.SearchListPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'my-courses',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-lessons-my-courses-my-courses-module */
          "dashboard-lessons-my-courses-my-courses-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/my-courses/my-courses.module */
          "VIXX")).then(function (m) {
            return m.MyCoursesPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'course-details/:lessonId/:type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-lessons-my-courses-course-details-course-details-module */
          [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~bc0d1c68"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module~dashboard-lessons-my-cours~c122b7d0"), __webpack_require__.e("dashboard-lessons-my-courses-course-details-course-details-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/lessons/my-courses/course-details/course-details.module */
          "MdVw")).then(function (m) {
            return m.CourseDetailsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'setting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-setting-module */
          "dashboard-user-profile-setting-setting-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/setting.module */
          "M/Ir")).then(function (m) {
            return m.SettingPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-account-module */
          "dashboard-user-profile-setting-account-account-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/account.module */
          "MOrc")).then(function (m) {
            return m.AccountPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'edit-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-edit-email-edit-email-module */
          "dashboard-user-profile-setting-account-edit-email-edit-email-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/edit-email/edit-email.module */
          "EzUz")).then(function (m) {
            return m.EditEmailPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'edit-name',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-edit-name-edit-name-module */
          "dashboard-user-profile-setting-account-edit-name-edit-name-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/edit-name/edit-name.module */
          "BdSh")).then(function (m) {
            return m.EditNamePageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'edit-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-edit-password-edit-password-module */
          "dashboard-user-profile-setting-account-edit-password-edit-password-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/edit-password/edit-password.module */
          "/daA")).then(function (m) {
            return m.EditPasswordPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'reminder',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-user-profile-setting-reminder-reminder-module */
          [__webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-reminder-reminder-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/reminder/reminder.module */
          "hu06")).then(function (m) {
            return m.ReminderPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'delete-account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-delete-account-delete-account-module */
          "dashboard-user-profile-setting-account-delete-account-delete-account-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/delete-account/delete-account.module */
          "hNuj")).then(function (m) {
            return m.DeleteAccountPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'support',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-user-profile-setting-support-support-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-support-support-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/support/support.module */
          "DrT3")).then(function (m) {
            return m.SupportPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'language',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-user-profile-setting-account-language-language-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("dashboard-user-profile-setting-account-language-language-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/language/language.module */
          "SUiO")).then(function (m) {
            return m.LanguagePageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'share-app',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-share-app-share-app-module */
          "dashboard-user-profile-setting-share-app-share-app-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/share-app/share-app.module */
          "mMqh")).then(function (m) {
            return m.ShareAppPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'app-info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-app-info-app-info-module */
          "dashboard-user-profile-setting-app-info-app-info-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/app-info/app-info.module */
          "g5FP")).then(function (m) {
            return m.AppInfoPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'subscription',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-subscription-subscription-module */
          "dashboard-user-profile-setting-account-subscription-subscription-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/subscription/subscription.module */
          "sHxE")).then(function (m) {
            return m.SubscriptionPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'subscriptionplans',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module */
          "dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/user-profile/setting/account/subscription-plans/subscription-plans.module */
          "ZarT")).then(function (m) {
            return m.SubscriptionPlansPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'faqs/:type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-user-profile-setting-support-faqs-faqs-module */
          [__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-support-faqs-faqs-module")]).then(__webpack_require__.bind(null,
          /*! ././dashboard/user-profile/setting/support/faqs/faqs.module */
          "pJ5k")).then(function (m) {
            return m.FaqsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'email-the-team',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-user-profile-setting-support-email-the-team-email-the-team-module */
          "dashboard-user-profile-setting-support-email-the-team-email-the-team-module").then(__webpack_require__.bind(null,
          /*! ././dashboard/user-profile/setting/support/email-the-team/email-the-team.module */
          "3MGO")).then(function (m) {
            return m.EmailTheTeamPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xW20":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/channel-io-mobile/channel-io-mobile.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ChannelIoMobileComponent */

    /***/
    function xW20(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelIoMobileComponent", function () {
        return ChannelIoMobileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_channel_io_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./channel-io-mobile.component.html */
      "zo0y");
      /* harmony import */


      var _channel_io_mobile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./channel-io-mobile.component.scss */
      "GY70");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var ChannelIoMobileComponent = /*#__PURE__*/function () {
        function ChannelIoMobileComponent(platform, router) {
          var _this6 = this;

          _classCallCheck(this, ChannelIoMobileComponent);

          this.platform = platform;
          this.router = router;
          this.showChat = false;
          this.hasTabbar = false;
          this.paths = ['/dashboard/profile', '/setting', '/account', '/edit-email', '/edit-name', '/edit-password', '/reminder', '/delete-account', '/support', '/language', '/share-app', '/app-info', '/subscription', '/subscriptionplans', '/faqs/', '/email-the-team'];
          router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
              if (_this6.platform.is('mobileweb') || _this6.platform.is('ios') || _this6.platform.is('android')) {
                _this6.showChat = _this6.paths.some(function (path) {
                  return val.url.startsWith(path);
                });
                _this6.hasTabbar = val.url.startsWith('/dashboard/profile');
              } else if (_this6.platform.is('desktop')) {
                _this6.showChat = false;
              }
            }
          });
        } // triggers redirect to channel.io on mobile and tablet devices only


        _createClass(ChannelIoMobileComponent, [{
          key: "viewChat",
          value: function viewChat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      window.location.href = 'https://speakypeaky.channel.io/';

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return ChannelIoMobileComponent;
      }();

      ChannelIoMobileComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ChannelIoMobileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-io-mobile',
        template: _raw_loader_channel_io_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_io_mobile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ChannelIoMobileComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__); // HAMMER TIME


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zo0y":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/channel-io-mobile/channel-io-mobile.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zo0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Floating chat widget -->\n<div *ngIf=\"showChat\" class=\"chat ion-text-end\" [class.hasTabbar]=\"hasTabbar\">\n  <img src=\"../../../../assets/images/user-progress/chat.svg\" alt=\"chat\" (click)=\"viewChat()\" />\n</div>";
      /***/
    },

    /***/
    "zuHl":
    /*!********************************************!*\
      !*** ./src/app/services/shared.service.ts ***!
      \********************************************/

    /*! exports provided: SharedService */

    /***/
    function zuHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! aws-sdk/clients/s3 */
      "tegk");
      /* harmony import */


      var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/google-analytics/ngx */
      "m4HQ");
      /* harmony import */


      var driver_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! driver.js */
      "wkzA");
      /* harmony import */


      var driver_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_10__);

      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"],
          Storage = _capacitor_core__WEBP2.Storage,
          Toast = _capacitor_core__WEBP2.Toast,
          Device = _capacitor_core__WEBP2.Device;
      var ERR_TOKEN_EXP = 'Your session has expired, please login again';

      var SharedService = /*#__PURE__*/function () {
        function SharedService(loadingController, alertController, router, platform, toastController, actionSheetController, navController, ga) {
          _classCallCheck(this, SharedService);

          this.loadingController = loadingController;
          this.alertController = alertController;
          this.router = router;
          this.platform = platform;
          this.toastController = toastController;
          this.actionSheetController = actionSheetController;
          this.navController = navController;
          this.ga = ga;
          this.video = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({});
          this.storageCache = {};
          this.alertShow = false;
          this.getDeviceInfo().then(function (info) {
            return console.log({
              info: info
            });
          });
          this.rnWebview = window['ReactNativeWebView'];
        }

        _createClass(SharedService, [{
          key: "getDeviceInfo",
          value: function getDeviceInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var info, isApp, isMobileWeb, isDesktop;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this.deviceInfo) {
                        _context7.next = 8;
                        break;
                      }

                      _context7.next = 3;
                      return Device.getInfo();

                    case 3:
                      info = _context7.sent;
                      isApp = ['ios', 'android'].includes(info.platform);
                      isMobileWeb = info.platform === 'web' && ['ios', 'android'].includes(info.operatingSystem);
                      isDesktop = info.platform === 'web' && !isMobileWeb;
                      this.deviceInfo = Object.assign(Object.assign({}, info), {
                        isApp: isApp,
                        isMobileWeb: isMobileWeb,
                        isDesktop: isDesktop
                      });

                    case 8:
                      return _context7.abrupt("return", this.deviceInfo);

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "gaTrackView",
          value: function gaTrackView(title) {
            var _this7 = this;

            this.getDeviceInfo().then(function (info) {
              if (info.isApp) {
                _this7.ga.startTrackerWithId('UA-118705303-1').then(function () {
                  console.log('Google analytics is ready now');

                  _this7.ga.trackView(title);
                })["catch"](function (e) {
                  return console.log('Error starting GoogleAnalytics', e);
                });
              }
            });
          }
        }, {
          key: "gaTrackEvent",
          value: function gaTrackEvent(category, action) {
            var _this8 = this;

            this.getDeviceInfo().then(function (info) {
              if (info.isApp) {
                _this8.ga.trackEvent(category, action);
              }
            });
          }
        }, {
          key: "presentLoader",
          value: function presentLoader(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this.loading) {
                        _context8.next = 8;
                        break;
                      }

                      this.loadingPromise = this.loadingController.create({
                        message: message
                      });
                      _context8.next = 4;
                      return this.loadingPromise;

                    case 4:
                      this.loading = _context8.sent;
                      this.loadingPromise = null;
                      _context8.next = 8;
                      return this.loading.present();

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            var _this9 = this;

            if (this.loading) {
              return this.loading.dismiss().then(function () {
                _this9.loading = null;
              });
            }

            if (!this.loading && this.loadingPromise) {
              return this.loadingPromise.then(function (loading) {
                loading.dismiss().then(function () {
                  _this9.loading = null;
                });
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.platform.is('capacitor')) {
                        _context9.next = 5;
                        break;
                      }

                      _context9.next = 3;
                      return Toast.show({
                        text: text,
                        duration: 'long'
                      });

                    case 3:
                      _context9.next = 9;
                      break;

                    case 5:
                      _context9.next = 7;
                      return this.toastController.create({
                        message: text,
                        duration: 2000
                      });

                    case 7:
                      toast = _context9.sent;
                      toast.present();

                    case 9:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "setNativeStorage",
          value: function setNativeStorage(key, value) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      (_a = this.rnWebview) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify({
                        method: 'set',
                        key: key,
                        value: value
                      }));
                      this.storageCache[key] = {
                        data: value
                      };
                      _context10.next = 4;
                      return Storage.set({
                        key: key,
                        value: JSON.stringify({
                          data: value
                        })
                      });

                    case 4:
                      return _context10.abrupt("return", _context10.sent);

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getNativeStorage",
          value: function getNativeStorage(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var ret, value;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!this.storageCache[key]) {
                        _context11.next = 2;
                        break;
                      }

                      return _context11.abrupt("return", this.storageCache[key]);

                    case 2:
                      _context11.next = 4;
                      return Storage.get({
                        key: key
                      });

                    case 4:
                      ret = _context11.sent;
                      value = JSON.parse(ret.value);

                      if (!value) {
                        value = {
                          data: null
                        };
                      }

                      this.storageCache[key] = value;
                      return _context11.abrupt("return", value);

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "removeNativeStorage",
          value: function removeNativeStorage(key) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      (_a = this.rnWebview) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify({
                        method: 'remove',
                        key: key
                      }));
                      delete this.storageCache[key];
                      _context12.next = 4;
                      return Storage.remove({
                        key: key
                      });

                    case 4:
                      return _context12.abrupt("return", _context12.sent);

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, subHeader, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this10 = this;

              var self, _alert;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      self = this;
                      console.log({
                        message: message
                      });

                      if (self.alertShow) {
                        _context13.next = 9;
                        break;
                      }

                      self.alertShow = true;
                      _context13.next = 6;
                      return this.alertController.create({
                        header: header,
                        subHeader: subHeader,
                        message: message,
                        buttons: [{
                          text: 'Ok',
                          handler: function handler() {
                            self.alertShow = false;

                            if (message === ERR_TOKEN_EXP) {
                              _this10.removeNativeStorage('token');

                              _this10.router.navigate(['/login']);
                            }
                          }
                        }]
                      });

                    case 6:
                      _alert = _context13.sent;
                      _context13.next = 9;
                      return _alert.present();

                    case 9:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "removeDuplicatesByProperty",
          value: function removeDuplicatesByProperty(myArr, prop) {
            return myArr.filter(function (obj, pos, arr) {
              return arr.map(function (mapObj) {
                return mapObj[prop];
              }).indexOf(obj[prop]) === pos;
            });
          }
        }, {
          key: "getS3Bucket",
          value: function getS3Bucket() {
            var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__({
              accessKeyId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accessKeyId,
              secretAccessKey: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].secretAccessKey,
              region: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].region
            });
            return bucket;
          }
        }, {
          key: "acronymsWordParser",
          value: function acronymsWordParser(subTitle) {
            var meaning = subTitle;

            var _meaning$split$map = meaning.split( /*#__PURE__*/_wrapRegExp(/\(([A-Z][a-z]{2})\)/, {
              key: 1
            })).map(function (s) {
              return s.trim();
            }),
                _meaning$split$map2 = _toArray(_meaning$split$map),
                _ = _meaning$split$map2[0],
                rs = _meaning$split$map2.slice(1);

            var obj = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["fromPairs"])(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(rs, 2));
            return obj;
          }
        }, {
          key: "compareAndHighlight",
          value: function compareAndHighlight(newElem, oldElem) {
            var old = oldElem.text().trim().split(' ');
            var text = '';
            newElem.text().trim().split(' ').forEach(function (word, i) {
              var oldText = old[i].toLowerCase().replace(/[^a-zA-Z ]/g, '');
              var newText = word.toLowerCase().replace(/[^a-zA-Z ]/g, '');

              if (newText !== oldText) {
                text += " <span class='highlight-difference'>" + word + '</span>';
              } else {
                text += ' ' + word;
              }
            });
            newElem.html(text);
          }
        }, {
          key: "showHelpGuide",
          value: function showHelpGuide(_ref12) {
            var steps = _ref12.steps,
                onClose = _ref12.onClose,
                _ref12$delay = _ref12.delay,
                delay = _ref12$delay === void 0 ? 1000 : _ref12$delay;
            setTimeout(function () {
              var driver = new driver_js__WEBPACK_IMPORTED_MODULE_10__({
                // animate: false, // Whether to animate or not
                // opacity: 0,
                allowClose: false,
                overlayClickNext: true,
                doneBtnText: 'Done',
                closeBtnText: 'Skip',
                // stageBackground: '#ffffff', // Background color for the staged behind highlighted element
                nextBtnText: 'Next',
                prevBtnText: 'Previous',
                keyboardControl: false,
                // onNext: (Element) => {},
                onHighlightStarted: function onHighlightStarted(Element) {
                  var node = Element.getNode();
                  node.scrollIntoView(false);
                },
                onDeselected: function onDeselected(Element) {
                  console.log('onDeselected');

                  if (!driver.isActivated) {
                    onClose();
                  }
                }
              });
              driver.defineSteps(steps);
              driver.start();
            }, delay);
          }
        }]);

        return SharedService;
      }();

      SharedService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalytics"]
        }];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalytics"]])], SharedService);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map