(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"], {
    /***/
    "JwR5":
    /*!************************************************************************!*\
      !*** ./src/app/dashboard/lessons/lesson-details/comments/Comments.tsx ***!
      \************************************************************************/

    /*! exports provided: Comments */

    /***/
    function JwR5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Comments", function () {
        return Comments;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! react */
      "q1tI");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/react */
      "eP13");
      /* harmony import */


      var ionicons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ionicons/icons */
      "/3n0");
      /* harmony import */


      var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! clsx */
      "iuhU");
      /* harmony import */


      var use_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! use-http */
      "tFdz");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns/fp */
      "XqfF");
      /* harmony import */


      var date_fns_fp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_7__); // TODO: merge into  /src/reactapp/components/Comments.tsx


      window['React'] = react__WEBPACK_IMPORTED_MODULE_1__;
      var formatDate = Object(date_fns_fp__WEBPACK_IMPORTED_MODULE_7__["format"])('MMM d, y');
      var Keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Keyboard;

      function Reply(_ref) {
        var comment = _ref.comment,
            onPresentCommentActionsPopover = _ref.onPresentCommentActionsPopover;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          lines: "none",
          className: "comment ion-no-padding pointer"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], {
          slot: "start",
          className: "reply-avatar"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg'
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], {
          className: "comment-user"
        }, comment.userName, " . ", formatDate(new Date(comment.createdAt))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "comment-description"
        }, comment.reply, comment.isOwner && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "ion-float-right",
          onClick: function onClick(e) {
            return onPresentCommentActionsPopover(e, comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"]
        })))));
      }

      function OnlyComment(_ref2) {
        var comment = _ref2.comment;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          lines: "none",
          className: "comment ion-no-padding pointer"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], {
          slot: "start"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg'
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], {
          className: "comment-user"
        }, comment.userName, " . ", formatDate(new Date(comment.createdAt))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "comment-description"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, comment.comment))));
      }

      function Comment(_ref3) {
        var comment = _ref3.comment,
            isComment = _ref3.isComment,
            isReply = _ref3.isReply,
            onPresentCommentRepliesModal = _ref3.onPresentCommentRepliesModal,
            onDisLikeComment = _ref3.onDisLikeComment,
            onPresentCommentActionsPopover = _ref3.onPresentCommentActionsPopover,
            onLikeComment = _ref3.onLikeComment;

        function handlePopover(e, comment) {
          e.persist(); // setShowPopover(e)

          onPresentCommentActionsPopover(e, comment);
        }

        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          lines: "none",
          className: "comment ion-no-padding pointer"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], {
          slot: "start",
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(true && !isComment)
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg'
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], {
          className: "comment-user"
        }, comment.userName, " . ", formatDate(new Date(comment.createdAt))), isComment ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "comment-description"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          onClick: function onClick() {
            return onPresentCommentRepliesModal(comment);
          }
        }, comment.comment), comment.isOwner && !isComment && isReply && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "ion-float-right",
          onClick: function onClick(e) {
            return handlePopover(e, comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"]
        }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "comment-description"
        }, comment.reply, comment.isOwner && !isComment && isReply && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "ion-float-right",
          onClick: function onClick(e) {
            return handlePopover(e, comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"]
        }))), isComment && isReply && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "comment-like",
          onClick: function onClick(e) {
            return onLikeComment(comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], {
          src: comment.isCurrentUserlike ? '/assets/images/thumb-up-filled.png' : '/assets/images/thumb-up.png'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalLike)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "comment-disLike",
          onClick: function onClick(e) {
            return onDisLikeComment(comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], {
          src: comment.isCurrentUserDislike ? '/assets/images/thumb-down-filled.png' : '/assets/images/thumb-down.png'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalDislike)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          onClick: function onClick() {
            return onPresentCommentRepliesModal(comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], {
          src: "/assets/images/black-bubble.png"
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalReply)), comment.isOwner && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "ion-float-right pointer",
          onClick: function onClick(e) {
            return handlePopover(e, comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"]
        }))), comment.totalReply > 0 && isComment && isReply && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "view-replies c-orange",
          onClick: function onClick() {
            return onPresentCommentRepliesModal(comment);
          }
        }, "VIEW ", comment.totalReply, " REPLIES")));
      }

      function presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var toast;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  toast = document.createElement('ion-toast');
                  toast.message = message;
                  toast.duration = 500;
                  document.body.appendChild(toast);
                  return _context.abrupt("return", toast.present());

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }

      var PER_PAGE = 10;

      function CommentReply(_ref4) {
        var comment = _ref4.comment,
            lessonId = _ref4.lessonId,
            subLessonId = _ref4.subLessonId,
            platform = _ref4.platform,
            onDismiss = _ref4.onDismiss,
            profile = _ref4.profile;

        var _react__WEBPACK_IMPOR = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
            _react__WEBPACK_IMPOR2 = _slicedToArray(_react__WEBPACK_IMPOR, 2),
            reply = _react__WEBPACK_IMPOR2[0],
            setReply = _react__WEBPACK_IMPOR2[1];

        var _react__WEBPACK_IMPOR3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1),
            _react__WEBPACK_IMPOR4 = _slicedToArray(_react__WEBPACK_IMPOR3, 2),
            page = _react__WEBPACK_IMPOR4[0],
            setPage = _react__WEBPACK_IMPOR4[1];

        var _react__WEBPACK_IMPOR5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
            _react__WEBPACK_IMPOR6 = _slicedToArray(_react__WEBPACK_IMPOR5, 2),
            replies = _react__WEBPACK_IMPOR6[0],
            setReplies = _react__WEBPACK_IMPOR6[1];

        var _react__WEBPACK_IMPOR7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
            _react__WEBPACK_IMPOR8 = _slicedToArray(_react__WEBPACK_IMPOR7, 2),
            noMore = _react__WEBPACK_IMPOR8[0],
            setNoMore = _react__WEBPACK_IMPOR8[1];

        var _react__WEBPACK_IMPOR9 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
            _react__WEBPACK_IMPOR10 = _slicedToArray(_react__WEBPACK_IMPOR9, 2),
            event = _react__WEBPACK_IMPOR10[0],
            setEvent = _react__WEBPACK_IMPOR10[1];

        var _react__WEBPACK_IMPOR11 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR12 = _slicedToArray(_react__WEBPACK_IMPOR11, 2),
            replyToEdit = _react__WEBPACK_IMPOR12[0],
            setReplyToEdit = _react__WEBPACK_IMPOR12[1];

        var commentId = comment._id;

        var _react__WEBPACK_IMPOR13 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR14 = _slicedToArray(_react__WEBPACK_IMPOR13, 2),
            replyToDelete = _react__WEBPACK_IMPOR14[0],
            setReplyToDelete = _react__WEBPACK_IMPOR14[1];

        var _react__WEBPACK_IMPOR15 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR16 = _slicedToArray(_react__WEBPACK_IMPOR15, 2),
            showPopover = _react__WEBPACK_IMPOR16[0],
            setShowPopover = _react__WEBPACK_IMPOR16[1];

        var _Object = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/reply-list"),
            post = _Object.post,
            response = _Object.response,
            loading = _Object.loading;

        function getReplies() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return post("/".concat(page), {
                      commentId: commentId
                    });

                  case 2:
                    data = _context2.sent;

                    if (response.ok) {
                      if (data.total <= page) {
                        setNoMore(true);
                      }

                      if (page === 1) {
                        setReplies(_toConsumableArray(data.data));
                      } else {
                        setReplies(function (l) {
                          return [].concat(_toConsumableArray(l), _toConsumableArray(data.data));
                        });
                      }
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }

        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          getReplies();
        }, [page]);

        var _Object2 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/user/reply"),
            postReply = _Object2.post,
            replyLoading = _Object2.loading;

        var _Object3 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/reply-delete"),
            postDelete = _Object3.post,
            deleteLoading = _Object3.loading;

        function reload() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    setPage(1);
                    setNoMore(false);
                    getReplies();

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }

        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          if (event) {
            event.target.complete();
            setEvent(null);
          }
        }, [event, setEvent]); // console.log({data, loading})

        function saveReply() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(reply === undefined || reply.trim() === '')) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 2:
                    _context4.prev = 2;
                    _context4.next = 5;
                    return postReply({
                      lessonId: lessonId,
                      subLessonId: subLessonId,
                      commentId: commentId,
                      reply: reply.trim()
                    });

                  case 5:
                    res = _context4.sent;
                    console.log(res);

                    if (res.message) {
                      presentToast(res.message);
                    }

                    if (platform.is('capacitor')) {
                      Keyboard.hide();
                    }

                    _context4.next = 11;
                    return reload();

                  case 11:
                    setReply('');
                    _context4.next = 17;
                    break;

                  case 14:
                    _context4.prev = 14;
                    _context4.t0 = _context4["catch"](2);
                    console.log(_context4.t0);

                  case 17:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[2, 14]]);
          }));
        }

        function deleteReply() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(replyToDelete === undefined)) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    _context5.prev = 2;
                    _context5.next = 5;
                    return postDelete({
                      replyId: replyToDelete === null || replyToDelete === void 0 ? void 0 : replyToDelete._id
                    });

                  case 5:
                    res = _context5.sent;
                    console.log(res);

                    if (res.message) {
                      presentToast(res.message);
                    }

                    _context5.next = 10;
                    return reload();

                  case 10:
                    _context5.next = 15;
                    break;

                  case 12:
                    _context5.prev = 12;
                    _context5.t0 = _context5["catch"](2);
                    console.log(_context5.t0);

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[2, 12]]);
          }));
        }

        var showLoading = replyLoading; // const {loading, error, data, get, cache} = useFetch('/payments/get-stripe-user', {}, [])

        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Replies"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], {
          slot: "end"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], {
          mode: "md",
          //  (click)="dismiss()"
          onClick: onDismiss
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          color: "dark",
          slot: "icon-only",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"]
        }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"] // cssClass="my-custom-class"
        , {
          // cssClass="my-custom-class"
          isOpen: showLoading,
          // onDidDismiss={() => setShowLoading(false)}
          message: 'Please wait...'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](OnlyComment, {
          comment: comment
        }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, {
          comment: reply,
          placeholder: "Add a reply",
          onCommentChange: function onCommentChange(e) {
            return setReply(e.detail.value);
          },
          profile: profile,
          platform: platform,
          onSubmit: saveReply
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], {
          className: "ml-16"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null, replies.map(function (comment, i) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Reply, {
            key: i,
            comment: comment,
            onPresentCommentActionsPopover: function onPresentCommentActionsPopover(e, comment) {
              e.persist();
              setShowPopover({
                event: e,
                comment: comment
              });
            }
          });
        })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], {
          threshold: "100px",
          disabled: noMore,
          onIonInfinite: function onIonInfinite(e) {
            setPage(function (p) {
              return p + 1;
            });
            setEvent(e);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          style: {
            textAlign: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], {
          name: "crescent"
        }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonPopover"], {
          isOpen: !!showPopover,
          event: showPopover === null || showPopover === void 0 ? void 0 : showPopover.event,
          mode: "md",
          onDidDismiss: function onDidDismiss() {
            return setShowPopover(null);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], {
          lines: "none"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          onClick: function onClick() {
            setShowPopover(null);
            setReplyToEdit(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Edit")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          onClick: function onClick() {
            setShowPopover(null);
            setReplyToDelete(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Delete")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAlert"], {
          isOpen: !!replyToDelete,
          onDidDismiss: function onDidDismiss() {
            return setReplyToDelete(null);
          },
          header: 'Delete reply',
          message: 'Delete your reply permanently?',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function handler(blah) {}
          }, {
            text: 'Delete',
            handler: deleteReply
          }]
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], {
          mode: "ios",
          isOpen: !!replyToEdit,
          cssClass: "comment-replies-modal",
          onWillDismiss: function onWillDismiss() {
            return setReplyToEdit(undefined);
          }
        }, replyToEdit && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditReply, {
          profile: profile,
          platform: platform,
          reply: replyToEdit,
          onDismiss: function onDismiss() {
            setReplyToEdit(undefined);
            reload();
          }
        })));
      }

      function EditReply(_ref5) {
        var reply = _ref5.reply,
            platform = _ref5.platform,
            onDismiss = _ref5.onDismiss,
            profile = _ref5.profile;

        var _react__WEBPACK_IMPOR17 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](reply.reply),
            _react__WEBPACK_IMPOR18 = _slicedToArray(_react__WEBPACK_IMPOR17, 2),
            newReply = _react__WEBPACK_IMPOR18[0],
            setNewReply = _react__WEBPACK_IMPOR18[1];

        var _react__WEBPACK_IMPOR19 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
            _react__WEBPACK_IMPOR20 = _slicedToArray(_react__WEBPACK_IMPOR19, 2),
            event = _react__WEBPACK_IMPOR20[0],
            setEvent = _react__WEBPACK_IMPOR20[1];

        var _Object4 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/reply-edit"),
            postEdit = _Object4.post,
            editLoading = _Object4.loading;

        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          if (event) {
            event.target.complete();
            setEvent(null);
          }
        }, [event, setEvent]);

        function editComment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var res;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(newReply === undefined || newReply.trim() === '')) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    _context6.prev = 2;
                    _context6.next = 5;
                    return postEdit({
                      replyId: reply._id,
                      reply: newReply.trim()
                    });

                  case 5:
                    res = _context6.sent;
                    console.log(res);

                    if (res.message) {
                      presentToast(res.message);
                    }

                    if (platform.is('capacitor')) {
                      Keyboard.hide();
                    }

                    setNewReply('');
                    onDismiss();
                    _context6.next = 16;
                    break;

                  case 13:
                    _context6.prev = 13;
                    _context6.t0 = _context6["catch"](2);
                    console.log(_context6.t0);

                  case 16:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, null, [[2, 13]]);
          }));
        }

        var showLoading = editLoading;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Edit Reply"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], {
          slot: "end"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], {
          mode: "md",
          onClick: onDismiss
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          color: "dark",
          slot: "icon-only",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"]
        }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"], {
          isOpen: showLoading,
          message: 'Please wait...'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, {
          comment: newReply,
          placeholder: "Edit a reply",
          onCommentChange: function onCommentChange(e) {
            return setNewReply(e.detail.value);
          },
          profile: profile,
          platform: platform,
          onSubmit: editComment
        }))));
      }

      function EditComment(_ref6) {
        var comment = _ref6.comment,
            platform = _ref6.platform,
            onDismiss = _ref6.onDismiss,
            profile = _ref6.profile;

        var _react__WEBPACK_IMPOR21 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](comment.comment),
            _react__WEBPACK_IMPOR22 = _slicedToArray(_react__WEBPACK_IMPOR21, 2),
            newComment = _react__WEBPACK_IMPOR22[0],
            setNewComment = _react__WEBPACK_IMPOR22[1];

        var _react__WEBPACK_IMPOR23 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
            _react__WEBPACK_IMPOR24 = _slicedToArray(_react__WEBPACK_IMPOR23, 2),
            event = _react__WEBPACK_IMPOR24[0],
            setEvent = _react__WEBPACK_IMPOR24[1];

        var _Object5 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/edit"),
            postEdit = _Object5.post,
            editLoading = _Object5.loading;

        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          if (event) {
            event.target.complete();
            setEvent(null);
          }
        }, [event, setEvent]);

        function editComment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var res;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(newComment === undefined || newComment.trim() === '')) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 2:
                    _context7.prev = 2;
                    _context7.next = 5;
                    return postEdit({
                      commentId: comment._id,
                      comment: newComment.trim()
                    });

                  case 5:
                    res = _context7.sent;
                    console.log(res);

                    if (res.message) {
                      presentToast(res.message);
                    }

                    if (platform.is('capacitor')) {
                      Keyboard.hide();
                    }

                    setNewComment('');
                    onDismiss();
                    _context7.next = 16;
                    break;

                  case 13:
                    _context7.prev = 13;
                    _context7.t0 = _context7["catch"](2);
                    console.log(_context7.t0);

                  case 16:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, null, [[2, 13]]);
          }));
        }

        var showLoading = editLoading;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Edit Comment"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], {
          slot: "end"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], {
          mode: "md",
          onClick: onDismiss
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          color: "dark",
          slot: "icon-only",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"]
        }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"], {
          isOpen: showLoading,
          message: 'Please wait...'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, {
          comment: newComment,
          placeholder: "Edit a comment",
          onCommentChange: function onCommentChange(e) {
            return setNewComment(e.detail.value);
          },
          profile: profile,
          platform: platform,
          onSubmit: editComment
        }))));
      }

      function Comments(_ref7) {
        var _this = this;

        var lessonId = _ref7.lessonId,
            subLessonId = _ref7.subLessonId,
            profile = _ref7.profile,
            platform = _ref7.platform;

        var _react__WEBPACK_IMPOR25 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR26 = _slicedToArray(_react__WEBPACK_IMPOR25, 2),
            selectedComment = _react__WEBPACK_IMPOR26[0],
            setSelectedComment = _react__WEBPACK_IMPOR26[1];

        var _react__WEBPACK_IMPOR27 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR28 = _slicedToArray(_react__WEBPACK_IMPOR27, 2),
            commentToEdit = _react__WEBPACK_IMPOR28[0],
            setCommentToEdit = _react__WEBPACK_IMPOR28[1];

        var _react__WEBPACK_IMPOR29 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR30 = _slicedToArray(_react__WEBPACK_IMPOR29, 2),
            commentToDelete = _react__WEBPACK_IMPOR30[0],
            setCommentToDelete = _react__WEBPACK_IMPOR30[1];

        var _react__WEBPACK_IMPOR31 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
            _react__WEBPACK_IMPOR32 = _slicedToArray(_react__WEBPACK_IMPOR31, 2),
            showPopover = _react__WEBPACK_IMPOR32[0],
            setShowPopover = _react__WEBPACK_IMPOR32[1];

        var _react__WEBPACK_IMPOR33 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
            _react__WEBPACK_IMPOR34 = _slicedToArray(_react__WEBPACK_IMPOR33, 2),
            comment = _react__WEBPACK_IMPOR34[0],
            setComment = _react__WEBPACK_IMPOR34[1];

        var _react__WEBPACK_IMPOR35 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1),
            _react__WEBPACK_IMPOR36 = _slicedToArray(_react__WEBPACK_IMPOR35, 2),
            page = _react__WEBPACK_IMPOR36[0],
            setPage = _react__WEBPACK_IMPOR36[1];

        var _react__WEBPACK_IMPOR37 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
            _react__WEBPACK_IMPOR38 = _slicedToArray(_react__WEBPACK_IMPOR37, 2),
            noMore = _react__WEBPACK_IMPOR38[0],
            setNoMore = _react__WEBPACK_IMPOR38[1];

        var _react__WEBPACK_IMPOR39 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
            _react__WEBPACK_IMPOR40 = _slicedToArray(_react__WEBPACK_IMPOR39, 2),
            event = _react__WEBPACK_IMPOR40[0],
            setEvent = _react__WEBPACK_IMPOR40[1];

        var _react__WEBPACK_IMPOR41 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
            _react__WEBPACK_IMPOR42 = _slicedToArray(_react__WEBPACK_IMPOR41, 2),
            ts = _react__WEBPACK_IMPOR42[0],
            setTs = _react__WEBPACK_IMPOR42[1];

        var _react__WEBPACK_IMPOR43 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
          data: [],
          loading: true
        }),
            _react__WEBPACK_IMPOR44 = _slicedToArray(_react__WEBPACK_IMPOR43, 2),
            _react__WEBPACK_IMPOR45 = _react__WEBPACK_IMPOR44[0],
            _react__WEBPACK_IMPOR46 = _react__WEBPACK_IMPOR45.data,
            data = _react__WEBPACK_IMPOR46 === void 0 ? [] : _react__WEBPACK_IMPOR46,
            loading = _react__WEBPACK_IMPOR45.loading,
            setResult = _react__WEBPACK_IMPOR44[1];

        var _Object6 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/user/save"),
            postSave = _Object6.post,
            saveLoading = _Object6.loading;

        var _Object7 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/user/like"),
            postLike = _Object7.post,
            likeLoading = _Object7.loading;

        var _Object8 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/user/dislike"),
            postDislike = _Object8.post,
            dislikeLoading = _Object8.loading;

        var _Object9 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/delete"),
            postDelete = _Object9.post,
            deleteLoading = _Object9.loading;

        var _Object10 = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])("/comments/list"),
            post = _Object10.post;

        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          console.log('reload effect');
          post("/".concat(page), {
            subLessonId: subLessonId
          }).then(function (res) {
            if (res.total <= page || res.data.length === 0) {
              setNoMore(true);
            }

            if (page === 1) {
              return setResult({
                data: res.data,
                loading: false
              });
            }

            var newData = [].concat(_toConsumableArray(data), _toConsumableArray(res.data));
            return setResult({
              data: newData,
              loading: false
            });
          })["catch"](function (err) {
            console.log({
              err: err
            });
          });
        }, [page, subLessonId, setNoMore, ts]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
          if (event) {
            event.target.complete();
            setEvent(null);
          }
        }, [event, setEvent]);

        function reload() {
          setNoMore(false);
          setPage(1);
          setTs(+new Date());
          console.log('reload');
        }

        function likeComment(comment) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var res;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return postLike({
                      lessonId: lessonId,
                      subLessonId: subLessonId,
                      commentId: comment._id
                    });

                  case 3:
                    res = _context8.sent;

                    if (res.message) {
                      presentToast(res.message);
                    }

                    reload();
                    _context8.next = 11;
                    break;

                  case 8:
                    _context8.prev = 8;
                    _context8.t0 = _context8["catch"](0);
                    console.log(_context8.t0);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, null, [[0, 8]]);
          }));
        }

        function dislikeComment(comment) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var res;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return postDislike({
                      lessonId: lessonId,
                      subLessonId: subLessonId,
                      commentId: comment._id
                    });

                  case 3:
                    res = _context9.sent;

                    if (res.message) {
                      presentToast(res.message);
                    }

                    reload();
                    _context9.next = 11;
                    break;

                  case 8:
                    _context9.prev = 8;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, null, [[0, 8]]);
          }));
        }

        function saveComment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var res;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!(comment === undefined || comment.trim() === '')) {
                      _context10.next = 2;
                      break;
                    }

                    return _context10.abrupt("return");

                  case 2:
                    _context10.prev = 2;
                    _context10.next = 5;
                    return postSave({
                      lessonId: lessonId,
                      subLessonId: subLessonId,
                      comment: comment.trim()
                    });

                  case 5:
                    res = _context10.sent;
                    console.log(res);

                    if (res.message) {
                      presentToast(res.message);
                    }

                    if (platform.is('capacitor')) {
                      Keyboard.hide();
                    }

                    reload();
                    setComment('');
                    _context10.next = 16;
                    break;

                  case 13:
                    _context10.prev = 13;
                    _context10.t0 = _context10["catch"](2);
                    console.log(_context10.t0);

                  case 16:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, null, [[2, 13]]);
          }));
        }

        var showLoading = likeLoading || dislikeLoading || saveLoading || deleteLoading;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "comments-component"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"] // cssClass="my-custom-class"
        , {
          // cssClass="my-custom-class"
          isOpen: showLoading,
          // onDidDismiss={() => setShowLoading(false)}
          message: 'Please wait...'
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, {
          comment: comment,
          onCommentChange: function onCommentChange(e) {
            return setComment(e.detail.value);
          },
          profile: profile,
          platform: platform,
          onSubmit: saveComment
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], {
          className: "ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], {
          sizeXs: "12",
          sizeSm: "12",
          className: "ion-align-self-center"
        }, data.map(function (comment, i) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Comment, {
            key: i,
            isComment: true,
            isReply: true,
            comment: comment,
            onPresentCommentRepliesModal: function onPresentCommentRepliesModal(comment) {
              return setSelectedComment(comment);
            },
            onPresentCommentActionsPopover: function onPresentCommentActionsPopover(e, comment) {
              e.persist();
              setShowPopover({
                event: e,
                comment: comment
              });
            },
            onLikeComment: likeComment,
            onDisLikeComment: dislikeComment
          });
        }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], {
          threshold: "100px",
          disabled: noMore,
          onIonInfinite: function onIonInfinite(e) {
            setPage(function (p) {
              return p + 1;
            });
            setEvent(e);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          style: {
            textAlign: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], {
          name: "crescent"
        })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], {
          mode: "ios",
          isOpen: !!commentToEdit,
          cssClass: "comment-replies-modal",
          onWillDismiss: function onWillDismiss() {
            return setCommentToEdit(undefined);
          }
        }, commentToEdit && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditComment, {
          profile: profile,
          platform: platform,
          comment: commentToEdit,
          onDismiss: function onDismiss() {
            setCommentToEdit(undefined);
            reload();
          }
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], {
          mode: "ios",
          isOpen: !!selectedComment,
          cssClass: "comment-replies-modal",
          onWillDismiss: function onWillDismiss() {
            return setSelectedComment(undefined);
          }
        }, selectedComment && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CommentReply, {
          lessonId: lessonId,
          subLessonId: subLessonId,
          profile: profile,
          platform: platform,
          comment: selectedComment,
          onDismiss: function onDismiss() {
            setSelectedComment(undefined);
            reload();
          }
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonPopover"], {
          isOpen: !!showPopover,
          event: showPopover === null || showPopover === void 0 ? void 0 : showPopover.event,
          mode: "md",
          onDidDismiss: function onDidDismiss() {
            return setShowPopover(null);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], {
          lines: "none"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          onClick: function onClick() {
            setShowPopover(null);
            setCommentToEdit(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Edit")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          onClick: function onClick() {
            setShowPopover(null);
            setCommentToDelete(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Delete")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAlert"], {
          isOpen: !!commentToDelete,
          onDidDismiss: function onDidDismiss() {
            return setCommentToDelete(null);
          },
          header: 'Delete comment',
          message: 'Delete your comment permanently?',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function handler(blah) {}
          }, {
            text: 'Delete',
            handler: function handler() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!commentToDelete) {
                          _context11.next = 4;
                          break;
                        }

                        _context11.next = 3;
                        return postDelete({
                          commentId: commentToDelete === null || commentToDelete === void 0 ? void 0 : commentToDelete._id
                        });

                      case 3:
                        reload();

                      case 4:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
            }
          }]
        }));
      }

      function AddComment(_ref8) {
        var _onSubmit = _ref8.onSubmit,
            profile = _ref8.profile,
            comment = _ref8.comment,
            onCommentChange = _ref8.onCommentChange,
            platform = _ref8.platform,
            _ref8$placeholder = _ref8.placeholder,
            placeholder = _ref8$placeholder === void 0 ? 'Add a comment' : _ref8$placeholder;

        var _react__WEBPACK_IMPOR47 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
            _react__WEBPACK_IMPOR48 = _slicedToArray(_react__WEBPACK_IMPOR47, 2),
            cnt = _react__WEBPACK_IMPOR48[0],
            setCnt = _react__WEBPACK_IMPOR48[1]; // React.useEffect(() => {
        //   console.log({comment})
        //   if (!comment || comment === '') {
        //     setCnt((c) => c + 1)
        //   }
        // }, [comment, setCnt])
        // function saveCommentsBySubLessonId() {
        // }


        function showKeyBoard() {
          if (platform.is('capacitor')) {
            Keyboard.show();
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], {
          className: "add-comment ion-align-items-center ion-justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], {
          size: "12",
          className: "ion-align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();

            _onSubmit();
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], {
          lines: "none",
          mode: "ios",
          className: " ion-no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], {
          slot: "start"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: (profile === null || profile === void 0 ? void 0 : profile.profilePic) || '/assets/images/defaultProfile.svg'
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInput"], {
          key: cnt,
          type: "text",
          placeholder: placeholder,
          id: "comment",
          name: "comment",
          autofocus: true,
          value: comment || '',
          onIonChange: onCommentChange,
          onIonFocus: showKeyBoard
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], {
          slot: "end",
          icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["send"],
          onClick: _onSubmit
        })))));
      }
      /***/

    },

    /***/
    "hFQc":
    /*!*************************************************************************!*\
      !*** ./src/app/dashboard/lessons/lesson-details/comments/Comments.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function hFQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".comments-component .add-comment ion-item {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 7px;\n}\n.comments-component ion-item.comment {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 7px;\n}\n.comments-component .comment {\n  border-bottom: 1px solid #d8d8d8;\n}\n.comments-component .comment ion-label {\n  margin: 8px 0px 8px 0px;\n}\n.comments-component .comment .comment-user {\n  font-size: 15px;\n  color: #828080;\n}\n.comments-component .comment .comment-description {\n  color: #212121;\n  white-space: initial;\n}\n.comments-component .comment p {\n  margin-top: 15px;\n  color: #828080;\n}\n.comments-component .comment p ion-img {\n  width: 18px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.comments-component .comment p ion-text {\n  font-size: 14px;\n  margin-right: 10px;\n}\n.comments-component .comment p .comment-like,\n.comments-component .comment p .comment-disLike {\n  margin-right: 10px;\n}\n.comments-component .comment p ion-icon {\n  font-size: 24px;\n}\n.comments-component .comment .view-replies {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0NvbW1lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBRE47QUFJRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlFO0VBQ0UsZ0NBQUE7QUFGSjtBQUdJO0VBQ0UsdUJBQUE7QUFETjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBRE47QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUROO0FBRU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRU07O0VBRUUsa0JBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBR0k7RUFDRSxtQkFBQTtBQUROIiwiZmlsZSI6IkNvbW1lbnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudHMtY29tcG9uZW50IHtcbiAgLmFkZC1jb21tZW50IHtcbiAgICBpb24taXRlbSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLmNvbW1lbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIH1cbiAgLmNvbW1lbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDhweCAwcHggOHB4IDBweDtcbiAgICB9XG4gICAgLmNvbW1lbnQtdXNlciB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzgyODA4MDtcbiAgICB9XG4gICAgLmNvbW1lbnQtZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgY29sb3I6ICM4MjgwODA7XG4gICAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtbGlrZSxcbiAgICAgIC5jb21tZW50LWRpc0xpa2Uge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZpZXctcmVwbGllcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "iuhU":
    /*!******************************************!*\
      !*** ./node_modules/clsx/dist/clsx.m.js ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function iuhU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function toVal(mix) {
        var k,
            y,
            str = '';

        if (typeof mix === 'string' || typeof mix === 'number') {
          str += mix;
        } else if (typeof mix === 'object') {
          if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
              if (mix[k]) {
                if (y = toVal(mix[k])) {
                  str && (str += ' ');
                  str += y;
                }
              }
            }
          } else {
            for (k in mix) {
              if (mix[k]) {
                str && (str += ' ');
                str += k;
              }
            }
          }
        }

        return str;
      }
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var i = 0,
            tmp,
            x,
            str = '';

        while (i < arguments.length) {
          if (tmp = arguments[i++]) {
            if (x = toVal(tmp)) {
              str && (str += ' ');
              str += x;
            }
          }
        }

        return str;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90-es5.js.map