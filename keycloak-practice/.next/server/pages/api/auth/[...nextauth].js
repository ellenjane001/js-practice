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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/keycloak":
/*!***********************************************!*\
  !*** external "next-auth/providers/keycloak" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/keycloak");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/keycloak */ \"next-auth/providers/keycloak\");\n/* harmony import */ var next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.KEYCLOAK_ID,\n            clientSecret: process.env.KEYCLOAK_SECRET,\n            issuer: process.env.KEYCLOAK_ISSUER\n        })\n    ],\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {},\n    pages: {},\n    callbacks: {},\n    events: {},\n    // Enable debug messages in the console if you are having problems\n    debug: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUMyQjtBQUUzRCxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDdEJFLFdBQVc7UUFDVEQsbUVBQWdCQSxDQUFDO1lBQ2JFLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztZQUNqQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxlQUFlO1lBQ3pDQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGVBQWU7UUFDckM7S0FDSDtJQUNEQyxRQUFRUCxRQUFRQyxHQUFHLENBQUNPLE1BQU07SUFDMUJDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLEtBQUssQ0FBQztJQUNOQyxPQUFPLENBQUM7SUFDUkMsV0FBVyxDQUFDO0lBQ1pDLFFBQVEsQ0FBQztJQUNULGtFQUFrRTtJQUNsRUMsT0FBTyxLQUFLO0FBQ2QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2tleWNsb2FrLXByYWN0aWNlLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBLZXljbG9ha1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2tleWNsb2FrXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEtleWNsb2FrUHJvdmlkZXIoe1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5LRVlDTE9BS19JRCEsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5LRVlDTE9BS19TRUNSRVQhLFxyXG4gICAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuS0VZQ0xPQUtfSVNTVUVSLFxyXG4gICAgICB9KVxyXG4gIF0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgfSxcclxuICBqd3Q6IHt9LFxyXG4gIHBhZ2VzOiB7fSxcclxuICBjYWxsYmFja3M6IHt9LFxyXG4gIGV2ZW50czoge30sXHJcbiAgLy8gRW5hYmxlIGRlYnVnIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIGlmIHlvdSBhcmUgaGF2aW5nIHByb2JsZW1zXHJcbiAgZGVidWc6IGZhbHNlLFxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIktleWNsb2FrUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJLRVlDTE9BS19JRCIsImNsaWVudFNlY3JldCIsIktFWUNMT0FLX1NFQ1JFVCIsImlzc3VlciIsIktFWUNMT0FLX0lTU1VFUiIsInNlY3JldCIsIlNFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInBhZ2VzIiwiY2FsbGJhY2tzIiwiZXZlbnRzIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();