(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90"],{

/***/ "JwR5":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/lessons/lesson-details/comments/Comments.tsx ***!
  \************************************************************************/
/*! exports provided: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/react */ "eP13");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons/icons */ "/3n0");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "iuhU");
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-http */ "tFdz");
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/fp */ "XqfF");
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_7__);

// TODO: merge into  /src/reactapp/components/Comments.tsx







window['React'] = react__WEBPACK_IMPORTED_MODULE_1__;
const formatDate = Object(date_fns_fp__WEBPACK_IMPORTED_MODULE_7__["format"])('MMM d, y');
const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
function Reply({ comment, onPresentCommentActionsPopover }) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { lines: "none", className: "comment ion-no-padding pointer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], { slot: "start", className: "reply-avatar" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg' })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { className: "comment-user" },
                comment.userName,
                " . ",
                formatDate(new Date(comment.createdAt))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "comment-description" },
                comment.reply,
                comment.isOwner && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ion-float-right", onClick: (e) => onPresentCommentActionsPopover(e, comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"] })))))));
}
function OnlyComment({ comment }) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { lines: "none", className: "comment ion-no-padding pointer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], { slot: "start" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg' })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { className: "comment-user" },
                comment.userName,
                " . ",
                formatDate(new Date(comment.createdAt))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "comment-description" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, comment.comment)))));
}
function Comment({ comment, isComment, isReply, onPresentCommentRepliesModal, onDisLikeComment, onPresentCommentActionsPopover, onLikeComment, }) {
    function handlePopover(e, comment) {
        e.persist();
        // setShowPopover(e)
        onPresentCommentActionsPopover(e, comment);
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { lines: "none", className: "comment ion-no-padding pointer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], { slot: "start", className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])( true && !isComment) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: (comment === null || comment === void 0 ? void 0 : comment.userProfile) || '../../../assets/images/defaultProfile.svg' })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], { className: "comment-user" },
                comment.userName,
                " . ",
                formatDate(new Date(comment.createdAt))),
            isComment ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "comment-description" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { onClick: () => onPresentCommentRepliesModal(comment) }, comment.comment),
                comment.isOwner && !isComment && isReply && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ion-float-right", onClick: (e) => handlePopover(e, comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"] }))))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "comment-description" },
                comment.reply,
                comment.isOwner && !isComment && isReply && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ion-float-right", onClick: (e) => handlePopover(e, comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"] }))))),
            isComment && isReply && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "comment-like", onClick: (e) => onLikeComment(comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { src: comment.isCurrentUserlike
                            ? '/assets/images/thumb-up-filled.png'
                            : '/assets/images/thumb-up.png' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalLike)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "comment-disLike", onClick: (e) => onDisLikeComment(comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { src: comment.isCurrentUserDislike
                            ? '/assets/images/thumb-down-filled.png'
                            : '/assets/images/thumb-down.png' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalDislike)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { onClick: () => onPresentCommentRepliesModal(comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonImg"], { src: "/assets/images/black-bubble.png" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonText"], null, comment.totalReply)),
                comment.isOwner && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ion-float-right pointer", onClick: (e) => handlePopover(e, comment) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["ellipsisVertical"] }))))),
            comment.totalReply > 0 && isComment && isReply && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "view-replies c-orange", onClick: () => onPresentCommentRepliesModal(comment) },
                "VIEW ",
                comment.totalReply,
                " REPLIES")))));
}
function presentToast(message) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const toast = document.createElement('ion-toast');
        toast.message = message;
        toast.duration = 500;
        document.body.appendChild(toast);
        return toast.present();
    });
}
const PER_PAGE = 10;
function CommentReply({ comment, lessonId, subLessonId, platform, onDismiss, profile }) {
    const [reply, setReply] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1);
    const [replies, setReplies] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [noMore, setNoMore] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [event, setEvent] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const [replyToEdit, setReplyToEdit] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const commentId = comment._id;
    const [replyToDelete, setReplyToDelete] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const [showPopover, setShowPopover] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const { post, response, loading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/reply-list`);
    function getReplies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield post(`/${page}`, { commentId });
            if (response.ok) {
                if (data.total <= page) {
                    setNoMore(true);
                }
                if (page === 1) {
                    setReplies([...data.data]);
                }
                else {
                    setReplies((l) => [...l, ...data.data]);
                }
            }
        });
    }
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        getReplies();
    }, [page]);
    const { post: postReply, loading: replyLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/user/reply`);
    const { post: postDelete, loading: deleteLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/reply-delete`);
    function reload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setPage(1);
            setNoMore(false);
            getReplies();
        });
    }
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        if (event) {
            event.target.complete();
            setEvent(null);
        }
    }, [event, setEvent]);
    // console.log({data, loading})
    function saveReply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (reply === undefined || reply.trim() === '') {
                return;
            }
            // this.sharedService.presentLoader('Please wait...')
            try {
                const res = yield postReply({
                    lessonId: lessonId,
                    subLessonId: subLessonId,
                    commentId: commentId,
                    reply: reply.trim(),
                });
                console.log(res);
                if (res.message) {
                    presentToast(res.message);
                }
                if (platform.is('capacitor')) {
                    Keyboard.hide();
                }
                yield reload();
                setReply('');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    function deleteReply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (replyToDelete === undefined) {
                return;
            }
            // this.sharedService.presentLoader('Please wait...')
            try {
                const res = yield postDelete({ replyId: replyToDelete === null || replyToDelete === void 0 ? void 0 : replyToDelete._id });
                console.log(res);
                if (res.message) {
                    presentToast(res.message);
                }
                yield reload();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const showLoading = replyLoading;
    // const {loading, error, data, get, cache} = useFetch('/payments/get-stripe-user', {}, [])
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Replies"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], { slot: "end" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], { mode: "md", 
                        //  (click)="dismiss()"
                        onClick: onDismiss },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { color: "dark", slot: "icon-only", icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"] }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"]
            // cssClass="my-custom-class"
            , { 
                // cssClass="my-custom-class"
                isOpen: showLoading, 
                // onDidDismiss={() => setShowLoading(false)}
                message: 'Please wait...' }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](OnlyComment, { comment: comment }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, { comment: reply, placeholder: "Add a reply", onCommentChange: (e) => setReply(e.detail.value), profile: profile, platform: platform, onSubmit: saveReply }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "ml-16" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], null, replies.map((comment, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Reply, { key: i, comment: comment, onPresentCommentActionsPopover: (e, comment) => {
                            e.persist();
                            setShowPopover({ event: e, comment });
                        } })))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { threshold: "100px", disabled: noMore, onIonInfinite: (e) => {
                    setPage((p) => p + 1);
                    setEvent(e);
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { textAlign: 'center' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], { name: "crescent" }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonPopover"], { isOpen: !!showPopover, event: showPopover === null || showPopover === void 0 ? void 0 : showPopover.event, mode: "md", onDidDismiss: () => setShowPopover(null) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], { lines: "none" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { onClick: () => {
                        setShowPopover(null);
                        setReplyToEdit(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Edit")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { onClick: () => {
                        setShowPopover(null);
                        setReplyToDelete(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Delete")))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAlert"], { isOpen: !!replyToDelete, onDidDismiss: () => setReplyToDelete(null), header: 'Delete reply', message: 'Delete your reply permanently?', buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => { },
                },
                {
                    text: 'Delete',
                    handler: deleteReply,
                },
            ] }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], { mode: "ios", isOpen: !!replyToEdit, cssClass: "comment-replies-modal", onWillDismiss: () => setReplyToEdit(undefined) }, replyToEdit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditReply, { profile: profile, platform: platform, reply: replyToEdit, onDismiss: () => {
                setReplyToEdit(undefined);
                reload();
            } })))));
}
function EditReply({ reply, platform, onDismiss, profile }) {
    const [newReply, setNewReply] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](reply.reply);
    const [event, setEvent] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const { post: postEdit, loading: editLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/reply-edit`);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        if (event) {
            event.target.complete();
            setEvent(null);
        }
    }, [event, setEvent]);
    function editComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (newReply === undefined || newReply.trim() === '') {
                return;
            }
            try {
                const res = yield postEdit({
                    replyId: reply._id,
                    reply: newReply.trim(),
                });
                console.log(res);
                if (res.message) {
                    presentToast(res.message);
                }
                if (platform.is('capacitor')) {
                    Keyboard.hide();
                }
                setNewReply('');
                onDismiss();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const showLoading = editLoading;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Edit Reply"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], { slot: "end" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], { mode: "md", onClick: onDismiss },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { color: "dark", slot: "icon-only", icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"] }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"], { isOpen: showLoading, message: 'Please wait...' }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, { comment: newReply, placeholder: "Edit a reply", onCommentChange: (e) => setNewReply(e.detail.value), profile: profile, platform: platform, onSubmit: editComment })))));
}
function EditComment({ comment, platform, onDismiss, profile }) {
    const [newComment, setNewComment] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](comment.comment);
    const [event, setEvent] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const { post: postEdit, loading: editLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/edit`);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        if (event) {
            event.target.complete();
            setEvent(null);
        }
    }, [event, setEvent]);
    function editComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (newComment === undefined || newComment.trim() === '') {
                return;
            }
            try {
                const res = yield postEdit({
                    commentId: comment._id,
                    comment: newComment.trim(),
                });
                console.log(res);
                if (res.message) {
                    presentToast(res.message);
                }
                if (platform.is('capacitor')) {
                    Keyboard.hide();
                }
                setNewComment('');
                onDismiss();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const showLoading = editLoading;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], null, "Edit Comment"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], { slot: "end" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonButton"], { mode: "md", onClick: onDismiss },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { color: "dark", slot: "icon-only", icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["close"] }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"], { isOpen: showLoading, message: 'Please wait...' }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, { comment: newComment, placeholder: "Edit a comment", onCommentChange: (e) => setNewComment(e.detail.value), profile: profile, platform: platform, onSubmit: editComment })))));
}
function Comments({ lessonId, subLessonId, profile, platform }) {
    const [selectedComment, setSelectedComment] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const [commentToEdit, setCommentToEdit] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const [commentToDelete, setCommentToDelete] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const [showPopover, setShowPopover] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const [comment, setComment] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1);
    const [noMore, setNoMore] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [event, setEvent] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const [ts, setTs] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0);
    const [{ data = [], loading }, setResult] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({ data: [], loading: true });
    const { post: postSave, loading: saveLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/user/save`);
    const { post: postLike, loading: likeLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/user/like`);
    const { post: postDislike, loading: dislikeLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/user/dislike`);
    const { post: postDelete, loading: deleteLoading } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/delete`);
    const { post } = Object(use_http__WEBPACK_IMPORTED_MODULE_6__["default"])(`/comments/list`);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        console.log('reload effect');
        post(`/${page}`, { subLessonId })
            .then((res) => {
            if (res.total <= page || res.data.length === 0) {
                setNoMore(true);
            }
            if (page === 1) {
                return setResult({ data: res.data, loading: false });
            }
            const newData = [...data, ...res.data];
            return setResult({ data: newData, loading: false });
        })
            .catch((err) => {
            console.log({ err });
        });
    }, [page, subLessonId, setNoMore, ts]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield postLike({
                    lessonId: lessonId,
                    subLessonId: subLessonId,
                    commentId: comment._id,
                });
                if (res.message) {
                    presentToast(res.message);
                }
                reload();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    function dislikeComment(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield postDislike({
                    lessonId: lessonId,
                    subLessonId: subLessonId,
                    commentId: comment._id,
                });
                if (res.message) {
                    presentToast(res.message);
                }
                reload();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    function saveComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (comment === undefined || comment.trim() === '') {
                return;
            }
            // this.sharedService.presentLoader('Please wait...')
            try {
                const res = yield postSave({
                    lessonId: lessonId,
                    subLessonId: subLessonId,
                    comment: comment.trim(),
                });
                console.log(res);
                if (res.message) {
                    presentToast(res.message);
                }
                if (platform.is('capacitor')) {
                    Keyboard.hide();
                }
                reload();
                setComment('');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const showLoading = likeLoading || dislikeLoading || saveLoading || deleteLoading;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "comments-component" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLoading"]
        // cssClass="my-custom-class"
        , { 
            // cssClass="my-custom-class"
            isOpen: showLoading, 
            // onDidDismiss={() => setShowLoading(false)}
            message: 'Please wait...' }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AddComment, { comment: comment, onCommentChange: (e) => setComment(e.detail.value), profile: profile, platform: platform, onSubmit: saveComment }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "ion-align-items-center ion-justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { sizeXs: "12", sizeSm: "12", className: "ion-align-self-center" }, data.map((comment, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Comment, { key: i, isComment: true, isReply: true, comment: comment, onPresentCommentRepliesModal: (comment) => setSelectedComment(comment), onPresentCommentActionsPopover: (e, comment) => {
                    e.persist();
                    setShowPopover({ event: e, comment });
                }, onLikeComment: likeComment, onDisLikeComment: dislikeComment }))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { threshold: "100px", disabled: noMore, onIonInfinite: (e) => {
                setPage((p) => p + 1);
                setEvent(e);
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { textAlign: 'center' } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], { name: "crescent" })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], { mode: "ios", isOpen: !!commentToEdit, cssClass: "comment-replies-modal", onWillDismiss: () => setCommentToEdit(undefined) }, commentToEdit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditComment, { profile: profile, platform: platform, comment: commentToEdit, onDismiss: () => {
                setCommentToEdit(undefined);
                reload();
            } }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonModal"], { mode: "ios", isOpen: !!selectedComment, cssClass: "comment-replies-modal", onWillDismiss: () => setSelectedComment(undefined) }, selectedComment && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CommentReply, { lessonId: lessonId, subLessonId: subLessonId, profile: profile, platform: platform, comment: selectedComment, onDismiss: () => {
                setSelectedComment(undefined);
                reload();
            } }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonPopover"], { isOpen: !!showPopover, event: showPopover === null || showPopover === void 0 ? void 0 : showPopover.event, mode: "md", onDidDismiss: () => setShowPopover(null) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonList"], { lines: "none" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { onClick: () => {
                        setShowPopover(null);
                        setCommentToEdit(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Edit")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { onClick: () => {
                        setShowPopover(null);
                        setCommentToDelete(showPopover === null || showPopover === void 0 ? void 0 : showPopover.comment);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], null, "Delete")))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAlert"], { isOpen: !!commentToDelete, onDidDismiss: () => setCommentToDelete(null), header: 'Delete comment', message: 'Delete your comment permanently?', buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => { },
                },
                {
                    text: 'Delete',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (commentToDelete) {
                            yield postDelete({ commentId: commentToDelete === null || commentToDelete === void 0 ? void 0 : commentToDelete._id });
                            reload();
                        }
                        ///comments/delete/, {commentId}
                        // this.deleteComment(this.commentObj.comment._id)
                    }),
                },
            ] })));
}
function AddComment({ onSubmit, profile, comment, onCommentChange, platform, placeholder = 'Add a comment', }) {
    const [cnt, setCnt] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0);
    // React.useEffect(() => {
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
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonRow"], { className: "add-comment ion-align-items-center ion-justify-content-center" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonCol"], { size: "12", className: "ion-align-self-center" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: (e) => {
                    e.preventDefault();
                    onSubmit();
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonItem"], { lines: "none", mode: "ios", className: " ion-no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], { slot: "start" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: (profile === null || profile === void 0 ? void 0 : profile.profilePic) || '/assets/images/defaultProfile.svg' })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonInput"], { key: cnt, type: "text", placeholder: placeholder, id: "comment", name: "comment", autofocus: true, value: comment || '', onIonChange: onCommentChange, onIonFocus: showKeyBoard }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ionic_react__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], { slot: "end", icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__["send"], onClick: onSubmit }))))));
}


/***/ }),

/***/ "hFQc":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/lessons/lesson-details/comments/Comments.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comments-component .add-comment ion-item {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 7px;\n}\n.comments-component ion-item.comment {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 7px;\n}\n.comments-component .comment {\n  border-bottom: 1px solid #d8d8d8;\n}\n.comments-component .comment ion-label {\n  margin: 8px 0px 8px 0px;\n}\n.comments-component .comment .comment-user {\n  font-size: 15px;\n  color: #828080;\n}\n.comments-component .comment .comment-description {\n  color: #212121;\n  white-space: initial;\n}\n.comments-component .comment p {\n  margin-top: 15px;\n  color: #828080;\n}\n.comments-component .comment p ion-img {\n  width: 18px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.comments-component .comment p ion-text {\n  font-size: 14px;\n  margin-right: 10px;\n}\n.comments-component .comment p .comment-like,\n.comments-component .comment p .comment-disLike {\n  margin-right: 10px;\n}\n.comments-component .comment p ion-icon {\n  font-size: 24px;\n}\n.comments-component .comment .view-replies {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0NvbW1lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBRE47QUFJRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlFO0VBQ0UsZ0NBQUE7QUFGSjtBQUdJO0VBQ0UsdUJBQUE7QUFETjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBRE47QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUROO0FBRU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRU07O0VBRUUsa0JBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBR0k7RUFDRSxtQkFBQTtBQUROIiwiZmlsZSI6IkNvbW1lbnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudHMtY29tcG9uZW50IHtcbiAgLmFkZC1jb21tZW50IHtcbiAgICBpb24taXRlbSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLmNvbW1lbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIH1cbiAgLmNvbW1lbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDhweCAwcHggOHB4IDBweDtcbiAgICB9XG4gICAgLmNvbW1lbnQtdXNlciB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzgyODA4MDtcbiAgICB9XG4gICAgLmNvbW1lbnQtZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgY29sb3I6ICM4MjgwODA7XG4gICAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtbGlrZSxcbiAgICAgIC5jb21tZW50LWRpc0xpa2Uge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZpZXctcmVwbGllcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "iuhU":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ })

}]);
//# sourceMappingURL=default~dashboard-lessons-lesson-details-lesson-details-module~dashboard-lessons-lesson-details-less~3e9f8a90-es2015.js.map