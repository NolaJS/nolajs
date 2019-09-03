webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/scheduler.js/Calendar.js":
/*!*********************************************!*\
  !*** ./components/scheduler.js/Calendar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");
/* harmony import */ var rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-calendar/assets/index.css */ "./node_modules/rc-calendar/assets/index.css");
/* harmony import */ var rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/steven/Documents/Sites/nolajs/components/scheduler.js/Calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MyCalendar = function MyCalendar() {
  return __jsx(rc_calendar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSelect: function onSelect(date) {
      return console.log(date);
    },
    disabledDate: function disabledDate(date) {
      return date.diff(new Date(), 'days') <= 0;
    },
    showToday: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyCalendar);

/***/ })

})
//# sourceMappingURL=index.js.5d4b71352806a530484c.hot-update.js.map