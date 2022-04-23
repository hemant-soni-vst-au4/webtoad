(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9Tx":
/*!***********************************!*\
  !*** ./src/reactapp/useStore.tsx ***!
  \***********************************/
/*! exports provided: useStore, useProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfile", function() { return useProfile; });
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-http */ "tFdz");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "lKb0");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apollo-client */ "0GY7");



const useStore = Object(zustand__WEBPACK_IMPORTED_MODULE_1__["default"])((set) => ({
    // bears: 0,
    deviceInfo: null,
    client: _apollo_client__WEBPACK_IMPORTED_MODULE_2__["client"],
    navController: null,
    platform: null,
    sharedService: null,
    route: null,
    profile: null,
    setProfile: (profile) => set({ profile }),
}));
function useProfile() {
    const profile = useStore((store) => store.profile);
    const setProfile = useStore((store) => store.setProfile);
    const { get, loading, error, cache } = Object(use_http__WEBPACK_IMPORTED_MODULE_0__["default"])('/user/get-profile', {
        cachePolicy: use_http__WEBPACK_IMPORTED_MODULE_0__["CachePolicies"].NO_CACHE,
        cacheLife: 1000,
        onNewData: (curData, newData) => {
            setProfile(newData === null || newData === void 0 ? void 0 : newData.data);
        },
    }, []);
    function refetch() {
        get();
    }
    // const profile = data?.data
    return { profile, loading, error, get, cache, refetch };
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hemantsoni/Documents/GitHub/speakypeaky/Hybrid-Start-English-Now/src/main.ts */"zUnb");


/***/ }),

/***/ "0GY7":
/*!***************************************!*\
  !*** ./src/reactapp/apollo-client.ts ***!
  \***************************************/
/*! exports provided: currentLessonIdVar, dictationsVar, recordsVar, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "VX74");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ "HuS5");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _typePolicies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typePolicies */ "pdqN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentLessonIdVar", function() { return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["currentLessonIdVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictationsVar", function() { return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["dictationsVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recordsVar", function() { return _typePolicies__WEBPACK_IMPORTED_MODULE_6__["recordsVar"]; });









const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
function getNativeStorage(key) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const ret = yield Storage.get({ key });
        let value = JSON.parse(ret.value);
        if (!value) {
            value = { data: null };
        }
        return value;
    });
}
const errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});
const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
    // uri: 'http://localhost:4044/',
    // uri: 'http://192.168.0.3:4044/',
    uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].GRAPHQL_URL,
});
const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, { headers }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    // get the authentication token from local storage if it exists
    const token = yield getNativeStorage('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: Object.assign(Object.assign({}, headers), { authorization: (token === null || token === void 0 ? void 0 : token.data) ? token.data : '' }),
    };
}));
const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
    typePolicies: _typePolicies__WEBPACK_IMPORTED_MODULE_6__["typePolicies"],
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    link: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["from"])([authLink, errorLink, httpLink]),
    cache,
    typeDefs: _typePolicies__WEBPACK_IMPORTED_MODULE_6__["localTypeDefs"],
});


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "35Ww":
/*!******************************************!*\
  !*** ./src/reactapp/types-and-hooks.tsx ***!
  \******************************************/
/*! exports provided: LevelName, LessonFieldsFragmentDoc, DashboardLessonFieldsFragmentDoc, GetProfileDocument, useGetProfileQuery, useGetProfileLazyQuery, PopularLessonsDocument, usePopularLessonsQuery, usePopularLessonsLazyQuery, MyCoursesDocument, useMyCoursesQuery, useMyCoursesLazyQuery, GetDashboardDocument, useGetDashboardQuery, useGetDashboardLazyQuery, GetDashboardDraftLessonsDocument, useGetDashboardDraftLessonsQuery, useGetDashboardDraftLessonsLazyQuery, GetLessonDeatilDocument, useGetLessonDeatilQuery, useGetLessonDeatilLazyQuery, SetLessonSavedDocument, useSetLessonSavedMutation, SetLessonCompletedDocument, useSetLessonCompletedMutation, GetCourseDocument, useGetCourseQuery, useGetCourseLazyQuery, AddToMyLessonDocument, useAddToMyLessonMutation, SetNoteDocument, useSetNoteMutation, ReportLessonIssueDocument, useReportLessonIssueMutation, SearchDictionaryDocument, useSearchDictionaryQuery, useSearchDictionaryLazyQuery, GetDictationDocument, useGetDictationQuery, useGetDictationLazyQuery, GetRecordsDocument, useGetRecordsQuery, useGetRecordsLazyQuery, GetNotesDocument, useGetNotesQuery, useGetNotesLazyQuery, MoreNotesDocument, useMoreNotesQuery, useMoreNotesLazyQuery, DeleteNoteDocument, useDeleteNoteMutation, GerReviewCompletedLessonsDocument, useGerReviewCompletedLessonsQuery, useGerReviewCompletedLessonsLazyQuery, UploadProfilePictureDocument, useUploadProfilePictureMutation, GetUserProgressDocument, useGetUserProgressQuery, useGetUserProgressLazyQuery, GetLevelsDocument, useGetLevelsQuery, useGetLevelsLazyQuery, SetLevelDocument, useSetLevelMutation, GetUserGuideDocument, useGetUserGuideQuery, useGetUserGuideLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelName", function() { return LevelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonFieldsFragmentDoc", function() { return LessonFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLessonFieldsFragmentDoc", function() { return DashboardLessonFieldsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileDocument", function() { return GetProfileDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetProfileQuery", function() { return useGetProfileQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetProfileLazyQuery", function() { return useGetProfileLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularLessonsDocument", function() { return PopularLessonsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopularLessonsQuery", function() { return usePopularLessonsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopularLessonsLazyQuery", function() { return usePopularLessonsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesDocument", function() { return MyCoursesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMyCoursesQuery", function() { return useMyCoursesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMyCoursesLazyQuery", function() { return useMyCoursesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDashboardDocument", function() { return GetDashboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDashboardQuery", function() { return useGetDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDashboardLazyQuery", function() { return useGetDashboardLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDashboardDraftLessonsDocument", function() { return GetDashboardDraftLessonsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDashboardDraftLessonsQuery", function() { return useGetDashboardDraftLessonsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDashboardDraftLessonsLazyQuery", function() { return useGetDashboardDraftLessonsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLessonDeatilDocument", function() { return GetLessonDeatilDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLessonDeatilQuery", function() { return useGetLessonDeatilQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLessonDeatilLazyQuery", function() { return useGetLessonDeatilLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLessonSavedDocument", function() { return SetLessonSavedDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetLessonSavedMutation", function() { return useSetLessonSavedMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLessonCompletedDocument", function() { return SetLessonCompletedDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetLessonCompletedMutation", function() { return useSetLessonCompletedMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCourseDocument", function() { return GetCourseDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetCourseQuery", function() { return useGetCourseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetCourseLazyQuery", function() { return useGetCourseLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToMyLessonDocument", function() { return AddToMyLessonDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToMyLessonMutation", function() { return useAddToMyLessonMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNoteDocument", function() { return SetNoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetNoteMutation", function() { return useSetNoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportLessonIssueDocument", function() { return ReportLessonIssueDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportLessonIssueMutation", function() { return useReportLessonIssueMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDictionaryDocument", function() { return SearchDictionaryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchDictionaryQuery", function() { return useSearchDictionaryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchDictionaryLazyQuery", function() { return useSearchDictionaryLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDictationDocument", function() { return GetDictationDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDictationQuery", function() { return useGetDictationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetDictationLazyQuery", function() { return useGetDictationLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRecordsDocument", function() { return GetRecordsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetRecordsQuery", function() { return useGetRecordsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetRecordsLazyQuery", function() { return useGetRecordsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesDocument", function() { return GetNotesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetNotesQuery", function() { return useGetNotesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetNotesLazyQuery", function() { return useGetNotesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreNotesDocument", function() { return MoreNotesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMoreNotesQuery", function() { return useMoreNotesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMoreNotesLazyQuery", function() { return useMoreNotesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNoteDocument", function() { return DeleteNoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteNoteMutation", function() { return useDeleteNoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerReviewCompletedLessonsDocument", function() { return GerReviewCompletedLessonsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGerReviewCompletedLessonsQuery", function() { return useGerReviewCompletedLessonsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGerReviewCompletedLessonsLazyQuery", function() { return useGerReviewCompletedLessonsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProfilePictureDocument", function() { return UploadProfilePictureDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUploadProfilePictureMutation", function() { return useUploadProfilePictureMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProgressDocument", function() { return GetUserProgressDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserProgressQuery", function() { return useGetUserProgressQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserProgressLazyQuery", function() { return useGetUserProgressLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLevelsDocument", function() { return GetLevelsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLevelsQuery", function() { return useGetLevelsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLevelsLazyQuery", function() { return useGetLevelsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLevelDocument", function() { return SetLevelDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetLevelMutation", function() { return useSetLevelMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserGuideDocument", function() { return GetUserGuideDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserGuideQuery", function() { return useGetUserGuideQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserGuideLazyQuery", function() { return useGetUserGuideLazyQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "VX74");


const defaultOptions = {};
var LevelName;
(function (LevelName) {
    LevelName["UpperBeginner"] = "UpperBeginner";
    LevelName["Intermediate"] = "Intermediate";
    LevelName["Advanced"] = "Advanced";
})(LevelName || (LevelName = {}));
const LessonFieldsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  fragment LessonFields on Lesson {
    _id
    subLessonId
    lessonName
    srtFile
    startTime
    endTime
    createdAt
    updatedAt
    lessonId
    videoLevel
    videoLevelLabel @client
    videoType
    youtubeId
    title
    introduction
    tags
    isSingle
    day
    savedCreatedAt
    isCompleted
  }
`;
const DashboardLessonFieldsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  fragment DashboardLessonFields on Lesson {
    _id
    lessonName
    videoLevel
    videoLevelLabel @client
    videoType
    youtubeId
  }
`;
const GetProfileDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getProfile {
    profile {
      _id
      status
      completedLesson
      subscriptionLesson
      currentPackage
      subscriptionType
      trialLessonLimit
      isLevel
      isAdmin
      signupType
      fullName
      email
      platform
      userLevelId
      userLevelName
      stripeSandBoxCustomerId
      stripeLiveCustomerId
      extraSubscriptionLesson
      subscriptionProductId
      subTitleLanguage
      userSubscriptionStartDate
      userSubscriptionEndDate
      profilePic
      nativeLanguage {
        _id
        languageKey
        languageName
      }
      total
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetProfileDocument, options);
}
function useGetProfileLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetProfileDocument, options);
}
const PopularLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query popularLessons {
    popularLessons {
      total
      totalLessons
      data {
        subLessonId
        lessonName
        srtFile
        startTime
        endTime
        createdAt
        updatedAt
        lessonId
        videoLevel
        videoLevelLabel @client
        youtubeId
        title
        introduction
        tags
        isSingle
        day
        savedCreatedAt
        isCompleted
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](PopularLessonsDocument, options);
}
function usePopularLessonsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](PopularLessonsDocument, options);
}
const MyCoursesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query myCourses($page: Int!) {
    myCourses(page: $page) {
      _id
      title
      introduction
      youtubeId
      videoLevel
      videoLevelLabel @client
      topicTitle
      lessonCount
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MyCoursesDocument, options);
}
function useMyCoursesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MyCoursesDocument, options);
}
const GetDashboardDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getDashboard($day: String!, $videoLevel: LevelName!) {
    todayLesson(day: $day) {
      ...DashboardLessonFields
    }
    popularLessons {
      total
      totalLessons
      data {
        ...DashboardLessonFields
      }
    }
    savedLessons {
      total
      totalLessons
      data {
        ...DashboardLessonFields
      }
    }
    myCourses(size: 3) {
      _id
      title
      introduction
      youtubeId
      videoLevel
      videoLevelLabel @client
      topicTitle
      lessonCount
    }
    newUploadLessons(day: $day, videoLevel: $videoLevel) {
      total
      totalLessons
      data {
        ...DashboardLessonFields
      }
    }
  }
  ${DashboardLessonFieldsFragmentDoc}
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDashboardDocument, options);
}
function useGetDashboardLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDashboardDocument, options);
}
const GetDashboardDraftLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getDashboardDraftLessons {
    draftLessons {
      total
      totalLessons
      data {
        ...LessonFields
      }
    }
  }
  ${LessonFieldsFragmentDoc}
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDashboardDraftLessonsDocument, options);
}
function useGetDashboardDraftLessonsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDashboardDraftLessonsDocument, options);
}
const GetLessonDeatilDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getLessonDeatil($id: String!) {
    currentLessonId @client
    lesson(id: $id) {
      _id
      lessonId
      courseId
      youtubeId
      lessonName
      isSaved
      isCompleted
      title
      tags
      videoLevel
      videoLevelLabel @client
      introduction
      isMy
      scenes {
        start
        end
        langs
      }
      phrases {
        word
        meaning
        meanings {
          lang
          meaning
        }
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetLessonDeatilDocument, options);
}
function useGetLessonDeatilLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetLessonDeatilDocument, options);
}
const SetLessonSavedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation setLessonSaved($id: String!, $isSave: Boolean!) {
    setLessonSaved(lessonId: $id, isSave: $isSave) {
      _id
      isSaved
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLessonSavedDocument, options);
}
const SetLessonCompletedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation setLessonCompleted($lessonId: String!) {
    setLessonCompleted(lessonId: $lessonId) {
      _id
      isCompleted
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLessonCompletedDocument, options);
}
const GetCourseDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getCourse($id: String!) {
    course(id: $id) {
      _id
      tags
      title
      introduction
      topicTitle
      videoLevel
      videoLevelLabel @client
      youtubeId
      lessons {
        _id
        lessonName
        completedAt
        scenes {
          start
          end
        }
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetCourseDocument, options);
}
function useGetCourseLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetCourseDocument, options);
}
const AddToMyLessonDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation addToMyLesson($lessonId: String!) {
    addToMyLesson(lessonId: $lessonId) {
      _id
      isMy
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](AddToMyLessonDocument, options);
}
const SetNoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation setNote($wordData: WordData!) {
    setNote(wordData: $wordData)
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetNoteDocument, options);
}
const ReportLessonIssueDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation reportLessonIssue($report: LessonReport!) {
    reportLessonIssue(report: $report)
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ReportLessonIssueDocument, options);
}
const SearchDictionaryDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query searchDictionary($search: String!) {
    dictionary(search: $search) {
      entry
      meaning {
        korean
        noun
        verb
        adverb
        adjective
      }
      ipa
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](SearchDictionaryDocument, options);
}
function useSearchDictionaryLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](SearchDictionaryDocument, options);
}
const GetDictationDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getDictation($sceneIdx: Int!) {
    dictation(sceneIdx: $sceneIdx) @client
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetDictationDocument, options);
}
function useGetDictationLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetDictationDocument, options);
}
const GetRecordsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getRecords($sceneIdx: Int!) {
    records(sceneIdx: $sceneIdx) @client {
      audioAsBase64
      audioUrl
      sampleRate
      stt {
        error
        confidence
        transcript
        percent
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetRecordsDocument, options);
}
function useGetRecordsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetRecordsDocument, options);
}
const GetNotesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getNotes($size: Int!, $page: Int!) {
    getNotes(size: $size, page: $page) {
      page
      size
      total
      totalPage
      data {
        _id
        word
        meaning
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetNotesDocument, options);
}
function useGetNotesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetNotesDocument, options);
}
const MoreNotesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query moreNotes($cursor: String, $size: Int!) {
    moreNotes(cursor: $cursor, size: $size) {
      cursor
      hasMore @client
      nodes {
        _id
        word
        meaning
        kor
        noun
        verb
        adv
        adj
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MoreNotesDocument, options);
}
function useMoreNotesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MoreNotesDocument, options);
}
const DeleteNoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation deleteNote($id: String!) {
    deleteNote(id: $id)
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteNoteDocument, options);
}
const GerReviewCompletedLessonsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query gerReviewCompletedLessons($cursor: String, $size: Int!) {
    moreCompletedLessons(cursor: $cursor, size: $size) {
      cursor
      hasMore @client
      nodes {
        _id
        lessonName
        completedAt
        videoLevel
        videoLevelLabel @client
        videoType
        youtubeId
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GerReviewCompletedLessonsDocument, options);
}
function useGerReviewCompletedLessonsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GerReviewCompletedLessonsDocument, options);
}
const UploadProfilePictureDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation uploadProfilePicture($imageBase64: String!) {
    uploadProfilePicture(imageBase64: $imageBase64) {
      _id
      profilePic
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UploadProfilePictureDocument, options);
}
const GetUserProgressDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getUserProgress {
    progressState {
      totalCount
      datetimes
      counts {
        type
        count
      }
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetUserProgressDocument, options);
}
function useGetUserProgressLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetUserProgressDocument, options);
}
const GetLevelsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getLevels {
    levels {
      _id
      name
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetLevelsDocument, options);
}
function useGetLevelsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetLevelsDocument, options);
}
const SetLevelDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation setLevel($levelName: LevelName!) {
    setLevel(levelName: $levelName) {
      _id
      userLevelId
      userLevelName
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](SetLevelDocument, options);
}
const GetUserGuideDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query getUserGuide {
    userGuide {
      introduction
      youtubeId
    }
  }
`;
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
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetUserGuideDocument, options);
}
function useGetUserGuideLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetUserGuideDocument, options);
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
        appId: '1:73688891988:web:74a17a3e4bf8a063',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DkPS":
/*!*************************************************!*\
  !*** ./src/app/services/on-boarding.service.ts ***!
  \*************************************************/
/*! exports provided: OnBoardingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingService", function() { return OnBoardingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "H+bZ");





let OnBoardingService = class OnBoardingService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    userGuid(data) {
        return this.apiService.post('/static/user-guide', data);
    }
    levelList() {
        return this.apiService.get('/changelevel/list');
    }
    changeLevel(data) {
        return this.apiService.post('/changelevel/update', data);
    }
    getUserProfile(noCache = false) {
        const self = this;
        const req = this.apiService.get('/user/get-profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((e) => {
            self.profileCache = {
                timestamp: +new Date(),
                profile: e.data,
            };
        }));
        if (noCache) {
            return req;
        }
        if (this.profileCache) {
            if (+new Date() - this.profileCache.timestamp < 5000) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data: this.profileCache.profile });
            }
        }
        return req;
    }
    verifyEmail(email) {
        return this.apiService.post('/user/resend-email', { email });
    }
    updateUserName(data) {
        return this.apiService.post('/user/update-name', data);
    }
    updateUserEmail(data) {
        return this.apiService.post('/user/update-email', data);
    }
    updateUserPassword(data) {
        return this.apiService.post('/user/update-password', data);
    }
    contactToAdmin(data) {
        return this.apiService.post('/contactus/user/set-contact-us', data);
    }
    getSubTitleLanguages() {
        return this.apiService.get('/subTitleLanguages/list');
    }
    setUserSubTitleLanguage(data) {
        return this.apiService.post('/user/set-subtitleLanguage', data);
    }
    uploadProfilePicture(data) {
        return this.apiService.post('/user/uploadProfilePicture', data);
    }
    getUserSubTitleLanguage(subTitleLanguageId) {
        return this.apiService.get('/subTitleLanguages/details/' + subTitleLanguageId);
    }
};
OnBoardingService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
OnBoardingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], OnBoardingService);



/***/ }),

/***/ "GY70":
/*!*******************************************************************************!*\
  !*** ./src/app/components/channel-io-mobile/channel-io-mobile.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat {\n  z-index: 10;\n  display: inline;\n  position: fixed;\n  bottom: 1%;\n  right: 1%;\n}\n.chat.hasTabbar {\n  bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5uZWwtaW8tbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6ImNoYW5uZWwtaW8tbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQge1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMSU7XG4gIHJpZ2h0OiAxJTtcbiAgJi5oYXNUYWJiYXIge1xuICAgIGJvdHRvbTogMTAlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service */ "zuHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








let ApiService = class ApiService {
    constructor(router, httpClient, sharedService) {
        this.router = router;
        this.httpClient = httpClient;
        this.sharedService = sharedService;
    }
    post(path, data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sharedService.getNativeStorage('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((token) => {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
            return this.httpClient.post(url, data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    accesstoken: token === null || token === void 0 ? void 0 : token.data,
                }),
            });
        }), 
        // shareReplay(1),
        // map((res) => res),
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            console.log(err);
            this.sharedService.presentAlert('Alert', err.error);
            if (err.error.status === 502) {
                this.sharedService.removeNativeStorage('token');
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            }
        }));
    }
    postWithoutToken(path, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
        return this.httpClient
            .post(url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            // this.sharedService.presentAlert('Alert', err.error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
        }));
    }
    get(path, data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sharedService.getNativeStorage('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((token) => {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    accesstoken: token === null || token === void 0 ? void 0 : token.data,
                }),
                data,
            };
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
            return this.httpClient.get(url, options);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            this.sharedService.presentAlert('Alert', '', err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            // if (err.error.status === 502 || err.error.error === ERR_TOKEN_EXP) {
            //   // this.sharedService.removeNativeStorage('token')
            //   // this.router.navigate(['/login'])
            //   return throwError(err.error)
            // } else {
            //   return throwError(err.error)
            // }
        }));
    }
    getWithoutToken(path, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            data,
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + path;
        return this.httpClient.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            console.log(err);
            // this.sharedService.presentAlert('Alert', err.error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
        }));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
], ApiService);



/***/ }),

/***/ "HtUY":
/*!**************************************************!*\
  !*** ./src/app/services/subscription.service.ts ***!
  \**************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "H+bZ");



let SubscriptionService = class SubscriptionService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllStripePlans() {
        return this.apiService.get('/payments/get_all_plans');
    }
    getCustomerDetails(customerId) {
        return this.apiService.get('/payments/get_user/' + customerId);
    }
    createStripeCustomer(data) {
        return this.apiService.post('/payments/create_user', data);
    }
    attachSourceToCustomer(data) {
        return this.apiService.post('/payments/create_card_method', data);
    }
    getCustomerAllPaymentMethods(data) {
        return this.apiService.post('/payments/get_payment_methods', data);
    }
    processedToPayUsingStripe(data) {
        return this.apiService.post('/payments/create_subscription', data);
    }
    turnOffAutoRenewalForStripe(subscriptionId) {
        return this.apiService.get('/payments/updateSubscription/' + subscriptionId);
    }
    getStripeSubscriptionDetails(subscriptionId) {
        return this.apiService.get('/payments/subscription-details/' + subscriptionId);
    }
    setUserSubscription(data) {
        return this.apiService.post('/userSubscription/setUserSubscription', data);
    }
    getUserSubscription(data) {
        return this.apiService.post('/userSubscription/getUserSubscription', data);
    }
    verifySubscription(data) {
        return this.apiService.post('/userSubscription/userV2', data);
    }
    setStripeCustomerId(data) {
        return this.apiService.post('/user/setStripeCustomerId', data);
    }
};
SubscriptionService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], SubscriptionService);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		90
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		91
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		92
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		93
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		94
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "MYXF":
/*!**************************************************************************!*\
  !*** ./src/app/components/channel-io-mobile/channel-io-mobile.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChannelIoMobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelIoMobileModule", function() { return ChannelIoMobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel-io-mobile.component */ "xW20");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");





let ChannelIoMobileModule = class ChannelIoMobileModule {
};
ChannelIoMobileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__["ChannelIoMobileComponent"]],
        exports: [_channel_io_mobile_component__WEBPACK_IMPORTED_MODULE_1__["ChannelIoMobileComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ChannelIoMobileModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/shared.service */ "zuHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "p46w");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/reactapp/useStore */ "+9Tx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");










const { SplashScreen, StatusBar, App, Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];




let AppComponent = class AppComponent {
    constructor(platform, sharedService, authService, navController, modalCtrl, alertController, onBoardingService, router, route, swUpdate, swPush) {
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
        this.swPush = swPush;
        // isOnBoarding = false
        // set up hardware back button event.
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        SplashScreen.show({
            showDuration: 3000,
            autoHide: true,
        });
        sharedService.getDeviceInfo().then((info) => {
            src_reactapp_useStore__WEBPACK_IMPORTED_MODULE_11__["useStore"].setState({ navController, route, deviceInfo: info, platform, sharedService });
            if (info.platform === 'web') {
                if (document.location.hostname !== 'localhost' &&
                    document.location.protocol === 'http:') {
                    // document.location.href = document.location.href.replace('http:', 'https:')
                }
            }
            window.addEventListener('beforeinstallprompt', (e) => {
                console.log('beforeinstallprompt Event fired');
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                this.deferredPrompt = e;
                this.addToHome();
            });
            this.initializeApp();
            this.platform.backButton.subscribe(this.handleBackButton);
            SplashScreen.hide();
        });
    }
    handleBackButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // close modal
            try {
                const element = yield this.modalCtrl.getTop();
                if (element) {
                    element.dismiss();
                    return;
                }
            }
            catch (error) { }
            if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                this.routerOutlet.pop();
            }
            else if (this.router.url === '/dashboard/lessons' || this.router.url === '/login') {
                if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                    // navigator.app.exitApp(); // work for ionic 4
                }
                else {
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    }
    updateServiceWorker() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('New version available. Load New Version?')) {
                    window.location.reload();
                }
            });
            this.swPush.notificationClicks.subscribe(({ action, notification }) => {
                console.log('====================================');
                console.log(action);
                console.log(notification);
                console.log('====================================');
                // TODO: Do something in response to notification click.
            });
        }
    }
    suggestDownload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Hey there,',
                message: 'For better experience, would you like to download the Speaky Peaky app?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('did-suggest-app', 'yes', { expires: 7 });
                        },
                    },
                    {
                        text: 'Download',
                        handler: () => {
                            js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('did-suggest-app', 'yes', { expires: 7 });
                            window.open('https://speakypeaky.page.link/home');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    initializeApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateServiceWorker();
            const info = yield this.sharedService.getDeviceInfo();
            if (info.isApp) {
                StatusBar.setStyle({
                    style: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["StatusBarStyle"].Dark,
                });
            }
            if (info.isMobileWeb && !js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('did-suggest-app')) {
                this.suggestDownload();
            }
            try {
                const token = yield this.sharedService.getNativeStorage('token');
                if (token === null || token === void 0 ? void 0 : token.data) {
                    try {
                        const profile = yield this.getUserProfile();
                        console.log({ profile });
                        if (profile.data) {
                            if (info.isApp) {
                                // if(|| document.location.hostname !== 'localhost')
                            }
                            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production) {
                                this.navController.navigateRoot('/dashboard');
                            }
                            else {
                                // this.navController.navigateRoot('/dashboard')
                            }
                            return;
                        }
                    }
                    catch (_a) { }
                    this.authService.authSubject.next(false);
                    this.navController.navigateRoot('/login');
                }
                else {
                    const isOnBoarding = yield this.sharedService.getNativeStorage('isOnBoarding');
                    if ((isOnBoarding === null || isOnBoarding === void 0 ? void 0 : isOnBoarding.data) === true) {
                        this.authService.authSubject.next(false);
                        this.navController.navigateRoot('/login');
                        return;
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
            this.authService.authSubject.next(false);
            this.navController.navigateRoot('/on-boarding');
        });
    }
    ionViewWillEnter() {
        // button click event to show the promt
        window.addEventListener('appinstalled', (event) => {
            alert('installed');
        });
        if (window.matchMedia('(display-mode: standalone)').matches) {
            alert('display-mode is standalone');
        }
    }
    addToHome() {
        if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
            // Show the prompt
            this.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                }
                else {
                    console.log('User dismissed the A2HS prompt');
                }
                // We no longer need the prompt.  Clear it up.
                this.deferredPrompt = null;
            });
        }
    }
    getUserProfile() {
        return this.onBoardingService.getUserProfile().toPromise();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"] }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRouterOutlet"], { static: false },] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"],
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <app-channel-io-mobile></app-channel-io-mobile>\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/lessons.service */ "s1uX");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/subscription.service */ "HtUY");
/* harmony import */ var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/on-boarding.service */ "DkPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-push */ "N5Cv");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "m4HQ");
/* harmony import */ var _components_channel_io_mobile_channel_io_mobile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/channel-io-mobile/channel-io-mobile.module */ "MYXF");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "jcOq");

















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
            ng_push__WEBPACK_IMPORTED_MODULE_13__["PushNotificationsModule"],
            _components_channel_io_mobile_channel_io_mobile_module__WEBPACK_IMPORTED_MODULE_15__["ChannelIoMobileModule"],
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] },
            _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_3__["OnBoardingService"],
            _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"],
            _services_lessons_service__WEBPACK_IMPORTED_MODULE_1__["LessonsService"],
            _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_14__["GoogleAnalytics"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__["Base64"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZNya":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dBYC",
		"common",
		42
	],
	"./ion-alert.entry.js": [
		"dd9K",
		"common",
		43
	],
	"./ion-app_8.entry.js": [
		"w3/4",
		"common",
		44
	],
	"./ion-avatar_3.entry.js": [
		"IJvw",
		"common",
		45
	],
	"./ion-back-button.entry.js": [
		"Bzea",
		"common",
		46
	],
	"./ion-backdrop.entry.js": [
		"XUvO",
		47
	],
	"./ion-button_2.entry.js": [
		"EZXS",
		"common",
		48
	],
	"./ion-card_5.entry.js": [
		"35tz",
		"common",
		49
	],
	"./ion-checkbox.entry.js": [
		"CwRq",
		"common",
		50
	],
	"./ion-chip.entry.js": [
		"13mQ",
		"common",
		51
	],
	"./ion-col_3.entry.js": [
		"Vw/N",
		52
	],
	"./ion-datetime_3.entry.js": [
		"FaZn",
		"common",
		53
	],
	"./ion-fab_3.entry.js": [
		"4jfp",
		"common",
		54
	],
	"./ion-img.entry.js": [
		"Fmwn",
		55
	],
	"./ion-infinite-scroll_2.entry.js": [
		"pVu2",
		56
	],
	"./ion-input.entry.js": [
		"osmV",
		"common",
		57
	],
	"./ion-item-option_3.entry.js": [
		"BeVK",
		"common",
		58
	],
	"./ion-item_8.entry.js": [
		"0sPl",
		"common",
		59
	],
	"./ion-loading.entry.js": [
		"L19J",
		"common",
		60
	],
	"./ion-menu_3.entry.js": [
		"/uLI",
		"common",
		61
	],
	"./ion-modal.entry.js": [
		"Tfpq",
		"common",
		62
	],
	"./ion-nav_2.entry.js": [
		"a/9b",
		"common",
		63
	],
	"./ion-popover.entry.js": [
		"PLk7",
		"common",
		64
	],
	"./ion-progress-bar.entry.js": [
		"9iIR",
		"common",
		65
	],
	"./ion-radio_2.entry.js": [
		"NkB0",
		"common",
		66
	],
	"./ion-range.entry.js": [
		"+K8/",
		"common",
		67
	],
	"./ion-refresher_2.entry.js": [
		"XcmX",
		"common",
		68
	],
	"./ion-reorder_2.entry.js": [
		"Up0A",
		"common",
		69
	],
	"./ion-ripple-effect.entry.js": [
		"vQEB",
		70
	],
	"./ion-route_4.entry.js": [
		"DXEm",
		"common",
		71
	],
	"./ion-searchbar.entry.js": [
		"tv4E",
		"common",
		72
	],
	"./ion-segment_2.entry.js": [
		"q+qH",
		"common",
		73
	],
	"./ion-select_3.entry.js": [
		"pS87",
		"common",
		74
	],
	"./ion-slide_2.entry.js": [
		"dLII",
		75
	],
	"./ion-spinner.entry.js": [
		"Lnq6",
		"common",
		76
	],
	"./ion-split-pane.entry.js": [
		"n4jw",
		77
	],
	"./ion-tab-bar_2.entry.js": [
		"+gxd",
		"common",
		78
	],
	"./ion-tab_2.entry.js": [
		"DdnD",
		"common",
		79
	],
	"./ion-text.entry.js": [
		"zwDB",
		"common",
		80
	],
	"./ion-textarea.entry.js": [
		"RwqG",
		"common",
		81
	],
	"./ion-toast.entry.js": [
		"CHyx",
		"common",
		82
	],
	"./ion-toggle.entry.js": [
		"8yey",
		"common",
		83
	],
	"./ion-virtual-scroll.entry.js": [
		"A/r9",
		84
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "ZNya";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "zuHl");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "H+bZ");






let AuthService = class AuthService {
    constructor(sharedService, apiService) {
        this.sharedService = sharedService;
        this.apiService = apiService;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    login(user) {
        return this.apiService.postWithoutToken('/user/authenticate', user);
    }
    signUp(user) {
        return this.apiService.postWithoutToken('/user/signup', user);
    }
    forgotPassword(email) {
        return this.apiService.postWithoutToken('/user/requestPasswordURL', email);
    }
    get isLoggedIn() {
        return this.authSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
};
AuthService.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], AuthService);



/***/ }),

/***/ "pdqN":
/*!**************************************!*\
  !*** ./src/reactapp/typePolicies.ts ***!
  \**************************************/
/*! exports provided: localTypeDefs, currentLessonIdVar, dictationsVar, recordsVar, typePolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localTypeDefs", function() { return localTypeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLessonIdVar", function() { return currentLessonIdVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictationsVar", function() { return dictationsVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordsVar", function() { return recordsVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typePolicies", function() { return typePolicies; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "VX74");
/* harmony import */ var _types_and_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types-and-hooks */ "35Ww");


const localTypeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  extend type Query {
    currentLessonId: String
    dictation(lessonId: Int!, sceneIdx: Int!): String
  }
  extend type Mutation {
    updateDictation(id: ID!): String
  }
  extend type WordNoteCursorPage {
    hasMore: Boolean
  }
  extend type LessonCursorPage {
    hasMore: Boolean
  }
  extend type Lesson {
    videoLevelLabel: String
  }
  extend type Course {
    videoLevelLabel: String
  }
`;
const currentLessonIdVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])(null);
const dictationsVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])({});
const recordsVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])({});
const typePolicies = {
    Query: {
        fields: {
            currentLessonId: {
                read(_, { variables }) {
                    if (variables.id) {
                        return variables.id;
                    }
                    return currentLessonIdVar();
                },
            },
            dictation: {
                read(_, { variables }) {
                    console.log({ variables });
                    const { sceneIdx } = variables;
                    const lessonId = currentLessonIdVar();
                    return dictationsVar()[`${lessonId}:${sceneIdx}`] || '';
                },
            },
            records: {
                read(_, { variables }) {
                    console.log({ variables });
                    const { sceneIdx } = variables;
                    const lessonId = currentLessonIdVar();
                    return recordsVar()[`${lessonId}:${sceneIdx}`] || [];
                },
            },
            moreNotes: {
                merge(existing, incoming, { readField, args }) {
                    const nodes = args.cursor && existing ? Object.assign({}, existing.nodes) : {};
                    incoming.nodes.forEach((node) => {
                        const idx = readField('_id', node);
                        nodes[idx] = node;
                    });
                    return {
                        cursor: incoming.cursor,
                        hasMore: incoming.nodes.length === args.size,
                        nodes,
                    };
                },
                read(existing) {
                    if (existing) {
                        return {
                            cursor: existing.cursor,
                            hasMore: existing.hasMore,
                            nodes: Object.values(existing.nodes),
                        };
                    }
                },
            },
            moreCompletedLessons: {
                merge(existing, incoming, { readField, args }) {
                    const nodes = args.cursor && existing ? Object.assign({}, existing.nodes) : {};
                    incoming.nodes.forEach((node) => {
                        const idx = readField('_id', node);
                        nodes[idx] = node;
                    });
                    return {
                        cursor: incoming.cursor,
                        hasMore: incoming.nodes.length === args.size,
                        nodes,
                    };
                },
                read(existing) {
                    if (existing) {
                        return {
                            cursor: existing.cursor,
                            hasMore: existing.hasMore,
                            nodes: Object.values(existing.nodes),
                        };
                    }
                },
            },
        },
    },
    Mutation: {
        fields: {
            updateDictation: {
                read(...args) {
                    console.log('read', args);
                },
                merge(...args) {
                    console.log('merge', args);
                },
            },
        },
    },
    LessonProgress: {
        fields: {
            datetimes: {
                read(datetimes) {
                    return datetimes.map((d) => new Date(d));
                },
            },
        },
    },
    User: {
        fields: {
        // userLevelName: {
        //   read(userLevelName) {
        //     return levelMap[userLevelName]
        //   },
        // },
        },
    },
    Lesson: {
        fields: {
            videoLevelLabel: {
                read(_, { readField }) {
                    const level = readField('videoLevel');
                    return levelLabel[level];
                    // return levelLabel[userLevelName]
                },
            },
        },
    },
    Course: {
        fields: {
            videoLevelLabel: {
                read(_, { readField }) {
                    const level = readField('videoLevel');
                    return levelLabel[level];
                },
            },
        },
    },
};
const levelMap = {
    UpperBeginner: 'UpperBeginner',
    'Upper-beginner': 'UpperBeginner',
    Elementary: 'UpperBeginner',
    Intermediate: 'Intermediate',
    Advanced: 'Advanced',
};
const levelLabel = {
    [_types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].UpperBeginner]: 'Upper-beginner',
    [_types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].Intermediate]: 'Intermediate',
    [_types_and_hooks__WEBPACK_IMPORTED_MODULE_1__["LevelName"].Advanced]: 'Advanced',
};


/***/ }),

/***/ "s1uX":
/*!*********************************************!*\
  !*** ./src/app/services/lessons.service.ts ***!
  \*********************************************/
/*! exports provided: LessonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsService", function() { return LessonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding.service */ "DkPS");







let LessonsService = class LessonsService {
    constructor(httpClient, apiService, onBoardingService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
        this.onBoardingService = onBoardingService;
        this.weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    }
    getTodaysLessons(data) {
        return this.apiService.get(`/lesson/recommendation/${data}`);
    }
    getNewUploadsLessons(page) {
        const today = this.weekdays[new Date().getDay()];
        const profile = this.onBoardingService.profileCache.profile;
        const payload = {
            day: today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today,
            videoLevel: profile.userLevelName,
        };
        return this.apiService.post(`/lesson/get-newUploadLessons/${page}`, payload);
    }
    getTodaysLesson() {
        const day = this.weekdays[new Date().getDay()];
        return this.getSubLessonDetails({ day }, false);
    }
    getSubLessonDetails(data, isDraft) {
        if (isDraft === true) {
            return this.apiService.post(`/lesson/drafted-lesson-details`, data);
        }
        else {
            return this.apiService.post(`/lesson/details-lessons`, data);
        }
    }
    getDraftLessonsForAdmin(page) {
        return this.apiService.get(`/lesson/drafted-lessons/${page}`);
    }
    getDraftSubLessonDetails(data) {
        return this.apiService.get(`/lesson/drafted-lesson-details`, data);
    }
    saveLesson(data) {
        return this.apiService.post(`/lesson/add-savedLesson`, data);
    }
    removeSavedLesson(data) {
        return this.apiService.post(`/lesson/remove-savedLesson`, data);
    }
    getSavedLessons(page) {
        return this.apiService.get(`/lesson/savedLessons/${page}`);
    }
    getPopularLessons(page) {
        return this.apiService.get(`/lesson/popularLessons/${page}`);
    }
    getCourseList(page, data) {
        return this.apiService.post(`/lesson/course-list/${page}`, data);
    }
    getMyCourse() {
        return this.apiService.get(`/lesson/my-course`);
    }
    getCompletedLessons() {
        return this.apiService.get(`/lesson/completedLessons`);
    }
    getCourseDetails(lessonId, type) {
        return this.apiService.get(`/lesson/course-details/${lessonId}/${type}`);
    }
    completeLesson(data) {
        return this.apiService.post(`/lesson/completed`, data);
    }
    addMyCourseLesson(data) {
        return this.apiService.post(`/lesson/add-course-lesson`, data);
    }
    completedLessonsWithTimeRange(data) {
        return this.apiService.post(`/lesson/completedLessons-within-timeRange`, data);
    }
    reportAnIssueToAdmin(data) {
        return this.apiService.post(`/reportIssues/user/set-report-issue`, data);
    }
    setUserNotes(data) {
        return this.apiService.post(`/user/set-notes`, data);
    }
    getUserNotes(page) {
        return this.apiService.get(`/user/get-notes/${page}`);
    }
    deleteUserNotes(data) {
        return this.apiService.post(`/user/delete-notes`, data);
    }
    getAcronymsList() {
        return this.apiService.get(`/user/acronyms-list`);
    }
    // Find a meaning for word
    findWordMeaning(entry) {
        const url = `https://twinword-word-graph-dictionary.p.rapidapi.com/definition_kr/?entry=${entry}`;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-rapidapi-key': 'cRKV2Kl60tmshr5Yw1eForDx52Fdp19YCpQjsn0SpP4r1sNWol',
            }),
        };
        return this.httpClient.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
};
LessonsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"] }
];
LessonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"]])
], LessonsService);



/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthGuard = class AuthGuard {
    constructor(navController, router, authService) {
        this.navController = navController;
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                return true;
            }
            else {
                this.navController.setDirection('root');
                this.router.navigate(['/login']);
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    // {
    //   path: '',
    //   redirectTo: 'on-boarding',
    //   pathMatch: 'full',
    // },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() | sign-up-sign-up-module */ "sign-up-sign-up-module").then(__webpack_require__.bind(null, /*! ./sign-up/sign-up.module */ "kEuc")).then((m) => m.SignUpPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((m) => m.DashboardPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'on-boarding',
        loadChildren: () => Promise.all(/*! import() | on-boarding-on-boarding-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("common"), __webpack_require__.e("on-boarding-on-boarding-module")]).then(__webpack_require__.bind(null, /*! ./on-boarding/on-boarding.module */ "/a8e")).then((m) => m.OnBoardingPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'on-boarding-level',
        loadChildren: () => Promise.all(/*! import() | on-boarding-on-boarding-level-on-boarding-level-module */[__webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("on-boarding-on-boarding-level-on-boarding-level-module")]).then(__webpack_require__.bind(null, /*! ./on-boarding/on-boarding-level/on-boarding-level.module */ "lhpY")).then((m) => m.OnBoardingLevelPageModule),
    },
    {
        path: 'on-boarding-language',
        loadChildren: () => Promise.all(/*! import() | on-boarding-on-boarding-language-on-boarding-language-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("on-boarding-on-boarding-language-on-boarding-language-module")]).then(__webpack_require__.bind(null, /*! ./on-boarding/on-boarding-language/on-boarding-language.module */ "WIsk")).then((m) => m.OnBoardingLanguagePageModule),
    },
    {
        path: 'on-boarding-reminder',
        loadChildren: () => Promise.all(/*! import() | on-boarding-on-boarding-reminder-on-boarding-reminder-module */[__webpack_require__.e("common"), __webpack_require__.e("on-boarding-on-boarding-reminder-on-boarding-reminder-module")]).then(__webpack_require__.bind(null, /*! ./on-boarding/on-boarding-reminder/on-boarding-reminder.module */ "1Ggr")).then((m) => m.OnBoardingReminderPageModule),
    },
    {
        path: 'lesson-details/:subLessonId/:isCompleted/:isDraft',
        loadChildren: () => Promise.all(/*! import() | dashboard-lessons-lesson-details-lesson-details-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~bc0d1c68"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-details-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/lessons/lesson-details/lesson-details.module */ "+nZI")).then((m) => m.LessonDetailsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'lesson-steps/:subLessonId/:isDraft',
        pathMatch: 'prefix',
        loadChildren: () => Promise.all(/*! import() | dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module~dashboard-lessons-my-cours~c122b7d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~dashboard-lessons-le~e58e7fb1"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/lessons/lesson-details/lesson-steps/lesson-steps.module */ "auUv")).then((m) => m.LessonStepsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'lesson-complete',
        loadChildren: () => Promise.all(/*! import() | dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module */[__webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~user-profile-user-pr~652bf6cb"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module~dashboard-lessons-le~e58e7fb1"), __webpack_require__.e("dashboard-lessons-lesson-details-lesson-complete-lesson-complete-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/lessons/lesson-details/lesson-complete/lesson-complete.module */ "03RU")).then((m) => m.LessonCompletePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'payment/manage',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module */ "dashboard-user-profile-setting-account-subscription-plans-stripe-manage-stripe-manage-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.module */ "4vM4")).then((m) => m.StripeManagePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'payment/:productId',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module */ "dashboard-user-profile-setting-account-subscription-plans-stripe-payment-stripe-payment-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.module */ "PABW")).then((m) => m.StripePaymentPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'popular',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-lessons-popular-lessons-popular-lessons-module */ "dashboard-lessons-popular-lessons-popular-lessons-module").then(__webpack_require__.bind(null, /*! ./dashboard/lessons/popular-lessons/popular-lessons.module */ "Hh7y")).then((m) => m.PopularLessonsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'new-uploads',
        loadChildren: () => Promise.all(/*! import() | dashboard-lessons-new-uploads-new-uploads-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("dashboard-lessons-new-uploads-new-uploads-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/lessons/new-uploads/new-uploads.module */ "BB7H")).then((m) => m.NewUploadsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'draft-lessons',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-lessons-draft-lessons-draft-lessons-module */ "dashboard-lessons-draft-lessons-draft-lessons-module").then(__webpack_require__.bind(null, /*! ./dashboard/lessons/draft-lessons/draft-lessons.module */ "jg6N")).then((m) => m.DraftLessonsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'saved-lessons',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-lessons-saved-lessons-saved-lessons-module */ "dashboard-lessons-saved-lessons-saved-lessons-module").then(__webpack_require__.bind(null, /*! ./dashboard/lessons/saved-lessons/saved-lessons.module */ "mSkJ")).then((m) => m.SavedLessonsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'search-list/:suggestedCurriculumId/:suggestedCurriculumTitle/:suggestedCurriculumDay',
        loadChildren: () => Promise.all(/*! import() | dashboard-search-lessons-search-list-search-list-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-search-lessons-search-list-search-list-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/search-lessons/search-list/search-list.module */ "DxXz")).then((m) => m.SearchListPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'my-courses',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-lessons-my-courses-my-courses-module */ "dashboard-lessons-my-courses-my-courses-module").then(__webpack_require__.bind(null, /*! ./dashboard/lessons/my-courses/my-courses.module */ "VIXX")).then((m) => m.MyCoursesPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'course-details/:lessonId/:type',
        loadChildren: () => Promise.all(/*! import() | dashboard-lessons-my-courses-course-details-course-details-module */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~7a81a0d9"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7cf5b72"), __webpack_require__.e(3), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~d7afd9d0"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~5dde3442"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~e303b970"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~113bbb17"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-my-courses-course-d~bc0d1c68"), __webpack_require__.e("default~dashboard-lessons-lesson-details-lesson-steps-lesson-steps-module~dashboard-lessons-my-cours~c122b7d0"), __webpack_require__.e("dashboard-lessons-my-courses-course-details-course-details-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/lessons/my-courses/course-details/course-details.module */ "MdVw")).then((m) => m.CourseDetailsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'setting',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-setting-module */ "dashboard-user-profile-setting-setting-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/setting.module */ "M/Ir")).then((m) => m.SettingPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-account-module */ "dashboard-user-profile-setting-account-account-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/account.module */ "MOrc")).then((m) => m.AccountPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'edit-email',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-edit-email-edit-email-module */ "dashboard-user-profile-setting-account-edit-email-edit-email-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/edit-email/edit-email.module */ "EzUz")).then((m) => m.EditEmailPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'edit-name',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-edit-name-edit-name-module */ "dashboard-user-profile-setting-account-edit-name-edit-name-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/edit-name/edit-name.module */ "BdSh")).then((m) => m.EditNamePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'edit-password',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-edit-password-edit-password-module */ "dashboard-user-profile-setting-account-edit-password-edit-password-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/edit-password/edit-password.module */ "/daA")).then((m) => m.EditPasswordPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'reminder',
        loadChildren: () => Promise.all(/*! import() | dashboard-user-profile-setting-reminder-reminder-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-reminder-reminder-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/reminder/reminder.module */ "hu06")).then((m) => m.ReminderPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'delete-account',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-delete-account-delete-account-module */ "dashboard-user-profile-setting-account-delete-account-delete-account-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/delete-account/delete-account.module */ "hNuj")).then((m) => m.DeleteAccountPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'support',
        loadChildren: () => Promise.all(/*! import() | dashboard-user-profile-setting-support-support-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-support-support-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/support/support.module */ "DrT3")).then((m) => m.SupportPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'language',
        loadChildren: () => Promise.all(/*! import() | dashboard-user-profile-setting-account-language-language-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("dashboard-user-profile-setting-account-language-language-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/language/language.module */ "SUiO")).then((m) => m.LanguagePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'share-app',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-share-app-share-app-module */ "dashboard-user-profile-setting-share-app-share-app-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/share-app/share-app.module */ "mMqh")).then((m) => m.ShareAppPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'app-info',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-app-info-app-info-module */ "dashboard-user-profile-setting-app-info-app-info-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/app-info/app-info.module */ "g5FP")).then((m) => m.AppInfoPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'subscription',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-subscription-subscription-module */ "dashboard-user-profile-setting-account-subscription-subscription-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/subscription/subscription.module */ "sHxE")).then((m) => m.SubscriptionPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'subscriptionplans',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module */ "dashboard-user-profile-setting-account-subscription-plans-subscription-plans-module").then(__webpack_require__.bind(null, /*! ./dashboard/user-profile/setting/account/subscription-plans/subscription-plans.module */ "ZarT")).then((m) => m.SubscriptionPlansPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'faqs/:type',
        loadChildren: () => Promise.all(/*! import() | dashboard-user-profile-setting-support-faqs-faqs-module */[__webpack_require__.e("default~dashboard-lessons-new-uploads-new-uploads-module~dashboard-search-lessons-search-list-search~bc67e8ae"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-user-profile-setting-support-faqs-faqs-module")]).then(__webpack_require__.bind(null, /*! ././dashboard/user-profile/setting/support/faqs/faqs.module */ "pJ5k")).then((m) => m.FaqsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'email-the-team',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-user-profile-setting-support-email-the-team-email-the-team-module */ "dashboard-user-profile-setting-support-email-the-team-email-the-team-module").then(__webpack_require__.bind(null, /*! ././dashboard/user-profile/setting/support/email-the-team/email-the-team.module */ "3MGO")).then((m) => m.EmailTheTeamPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    { path: '**', redirectTo: '' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "xW20":
/*!*****************************************************************************!*\
  !*** ./src/app/components/channel-io-mobile/channel-io-mobile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChannelIoMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelIoMobileComponent", function() { return ChannelIoMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_channel_io_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./channel-io-mobile.component.html */ "zo0y");
/* harmony import */ var _channel_io_mobile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-io-mobile.component.scss */ "GY70");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");






let ChannelIoMobileComponent = class ChannelIoMobileComponent {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.showChat = false;
        this.hasTabbar = false;
        this.paths = [
            '/dashboard/profile',
            '/setting',
            '/account',
            '/edit-email',
            '/edit-name',
            '/edit-password',
            '/reminder',
            '/delete-account',
            '/support',
            '/language',
            '/share-app',
            '/app-info',
            '/subscription',
            '/subscriptionplans',
            '/faqs/',
            '/email-the-team',
        ];
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (this.platform.is('mobileweb') ||
                    this.platform.is('ios') ||
                    this.platform.is('android')) {
                    this.showChat = this.paths.some((path) => val.url.startsWith(path));
                    this.hasTabbar = val.url.startsWith('/dashboard/profile');
                }
                else if (this.platform.is('desktop')) {
                    this.showChat = false;
                }
            }
        });
    }
    // triggers redirect to channel.io on mobile and tablet devices only
    viewChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.location.href = 'https://speakypeaky.channel.io/';
        });
    }
};
ChannelIoMobileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChannelIoMobileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-io-mobile',
        template: _raw_loader_channel_io_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_io_mobile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ChannelIoMobileComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);





 // HAMMER TIME
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zo0y":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/channel-io-mobile/channel-io-mobile.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Floating chat widget -->\n<div *ngIf=\"showChat\" class=\"chat ion-text-end\" [class.hasTabbar]=\"hasTabbar\">\n  <img src=\"../../../../assets/images/user-progress/chat.svg\" alt=\"chat\" (click)=\"viewChat()\" />\n</div>");

/***/ }),

/***/ "zuHl":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "m4HQ");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! driver.js */ "wkzA");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_10__);







const { Storage, Toast, Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];






const ERR_TOKEN_EXP = 'Your session has expired, please login again';
let SharedService = class SharedService {
    constructor(loadingController, alertController, router, platform, toastController, actionSheetController, navController, ga) {
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
        this.getDeviceInfo().then((info) => console.log({ info }));
        this.rnWebview = window['ReactNativeWebView'];
    }
    getDeviceInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.deviceInfo) {
                const info = yield Device.getInfo();
                const isApp = ['ios', 'android'].includes(info.platform);
                const isMobileWeb = info.platform === 'web' && ['ios', 'android'].includes(info.operatingSystem);
                const isDesktop = info.platform === 'web' && !isMobileWeb;
                this.deviceInfo = Object.assign(Object.assign({}, info), { isApp, isMobileWeb, isDesktop });
            }
            return this.deviceInfo;
        });
    }
    gaTrackView(title) {
        this.getDeviceInfo().then((info) => {
            if (info.isApp) {
                this.ga
                    .startTrackerWithId('UA-118705303-1')
                    .then(() => {
                    console.log('Google analytics is ready now');
                    this.ga.trackView(title);
                })
                    .catch((e) => console.log('Error starting GoogleAnalytics', e));
            }
        });
    }
    gaTrackEvent(category, action) {
        this.getDeviceInfo().then((info) => {
            if (info.isApp) {
                this.ga.trackEvent(category, action);
            }
        });
    }
    presentLoader(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loading) {
                this.loadingPromise = this.loadingController.create({ message });
                this.loading = yield this.loadingPromise;
                this.loadingPromise = null;
                yield this.loading.present();
            }
        });
    }
    dismissLoader() {
        if (this.loading) {
            return this.loading.dismiss().then(() => {
                this.loading = null;
            });
        }
        if (!this.loading && this.loadingPromise) {
            return this.loadingPromise.then((loading) => {
                loading.dismiss().then(() => {
                    this.loading = null;
                });
            });
        }
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.platform.is('capacitor')) {
                yield Toast.show({
                    text,
                    duration: 'long',
                });
            }
            else {
                const toast = yield this.toastController.create({
                    message: text,
                    duration: 2000,
                });
                toast.present();
            }
        });
    }
    setNativeStorage(key, value) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.rnWebview) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify({ method: 'set', key, value }));
            this.storageCache[key] = { data: value };
            return yield Storage.set({
                key,
                value: JSON.stringify({
                    data: value,
                }),
            });
        });
    }
    getNativeStorage(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.storageCache[key]) {
                return this.storageCache[key];
            }
            const ret = yield Storage.get({ key });
            let value = JSON.parse(ret.value);
            if (!value) {
                value = { data: null };
            }
            this.storageCache[key] = value;
            return value;
        });
    }
    removeNativeStorage(key) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.rnWebview) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify({ method: 'remove', key }));
            delete this.storageCache[key];
            return yield Storage.remove({ key });
        });
    }
    presentAlert(header, subHeader, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const self = this;
            console.log({ message });
            if (!self.alertShow) {
                self.alertShow = true;
                const alert = yield this.alertController.create({
                    header,
                    subHeader,
                    message,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                self.alertShow = false;
                                if (message === ERR_TOKEN_EXP) {
                                    this.removeNativeStorage('token');
                                    this.router.navigate(['/login']);
                                }
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    removeDuplicatesByProperty(myArr, prop) {
        return myArr.filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
    getS3Bucket() {
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_8__({
            accessKeyId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accessKeyId,
            secretAccessKey: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].secretAccessKey,
            region: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].region,
        });
        return bucket;
    }
    acronymsWordParser(subTitle) {
        const meaning = subTitle;
        let [_, ...rs] = meaning.split(/\((?<key>[A-Z][a-z]{2})\)/).map((s) => s.trim());
        let obj = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["fromPairs"])(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(rs, 2));
        return obj;
    }
    compareAndHighlight(newElem, oldElem) {
        const old = oldElem.text().trim().split(' ');
        let text = '';
        newElem
            .text()
            .trim()
            .split(' ')
            .forEach((word, i) => {
            const oldText = old[i].toLowerCase().replace(/[^a-zA-Z ]/g, '');
            const newText = word.toLowerCase().replace(/[^a-zA-Z ]/g, '');
            if (newText !== oldText) {
                text += " <span class='highlight-difference'>" + word + '</span>';
            }
            else {
                text += ' ' + word;
            }
        });
        newElem.html(text);
    }
    showHelpGuide({ steps, onClose, delay = 1000 }) {
        setTimeout(() => {
            const driver = new driver_js__WEBPACK_IMPORTED_MODULE_10__({
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
                onHighlightStarted: (Element) => {
                    const node = Element.getNode();
                    node.scrollIntoView(false);
                },
                onDeselected: (Element) => {
                    console.log('onDeselected');
                    if (!driver.isActivated) {
                        onClose();
                    }
                },
            });
            driver.defineSteps(steps);
            driver.start();
        }, delay);
    }
};
SharedService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalytics"] }
];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalytics"]])
], SharedService);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map