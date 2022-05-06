"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socials";
exports.ids = ["pages/api/socials"];
exports.modules = {

/***/ "(api)/./pages/api/data/socials.ts":
/*!***********************************!*\
  !*** ./pages/api/data/socials.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socials\": () => (/* binding */ socials)\n/* harmony export */ });\nconst socials = [\n    {\n        id: 1,\n        icon: 'linkedin',\n        path: 'https://www.linkedin.com/in/aliaksei-hryhoryeu-15a3a6219/'\n    },\n    {\n        id: 2,\n        icon: 'vk',\n        path: 'https://vk.com/id252586865'\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS9zb2NpYWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxLQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ3RCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLENBQVU7UUFDaEJDLElBQUksRUFBRSxDQUEyRDtJQUNuRSxDQUFDO0lBQ0QsQ0FBQztRQUNDRixFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsQ0FBSTtRQUNWQyxJQUFJLEVBQUUsQ0FBNEI7SUFDcEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLy4vcGFnZXMvYXBpL2RhdGEvc29jaWFscy50cz8yNzg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzb2NpYWxzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaWNvbjogJ2xpbmtlZGluJyxcclxuICAgIHBhdGg6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxpYWtzZWktaHJ5aG9yeWV1LTE1YTNhNjIxOS8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpY29uOiAndmsnLFxyXG4gICAgcGF0aDogJ2h0dHBzOi8vdmsuY29tL2lkMjUyNTg2ODY1JyxcclxuICB9XHJcbl07XHJcbiJdLCJuYW1lcyI6WyJzb2NpYWxzIiwiaWQiLCJpY29uIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/data/socials.ts\n");

/***/ }),

/***/ "(api)/./pages/api/socials.ts":
/*!******************************!*\
  !*** ./pages/api/socials.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/socials */ \"(api)/./pages/api/data/socials.ts\");\n\nfunction handler(req, res) {\n    if (req.method === 'GET') {\n        res.status(200).json(_data_socials__WEBPACK_IMPORTED_MODULE_0__.socials);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29jaWFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV3QztBQUV6QixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBQzFFLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDekJELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTixrREFBTztJQUM5QixDQUFDO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMvLi9wYWdlcy9hcGkvc29jaWFscy50cz9jM2YzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQgeyBzb2NpYWxzIH0gZnJvbSBcIi4vZGF0YS9zb2NpYWxzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNvY2lhbHMpXHJcbiAgfVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsic29jaWFscyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/socials.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socials.ts"));
module.exports = __webpack_exports__;

})();