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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/keycloak */ \"next-auth/providers/keycloak\");\n/* harmony import */ var next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_keycloak__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.KEYCLOAK_ID,\n            clientSecret: process.env.KEYCLOAK_SECRET,\n            issuer: process.env.KEYCLOAK_ISSUER\n        })\n    ],\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {},\n    pages: {},\n    callbacks: {},\n    // Events are useful for logging\n    // https://next-auth.js.org/configuration/events\n    events: {},\n    // Enable debug messages in the console if you are having problems\n    debug: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUMyQjtBQUUzRCxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDdEJFLFdBQVc7UUFFVEQsbUVBQWdCQSxDQUFDO1lBQ2JFLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztZQUNqQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxlQUFlO1lBQ3pDQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGVBQWU7UUFDckM7S0FDSDtJQUVEQyxRQUFRUCxRQUFRQyxHQUFHLENBQUNPLE1BQU07SUFFMUJDLFNBQVM7UUFFUEMsVUFBVTtJQUNaO0lBQ0FDLEtBQUssQ0FDTDtJQUNBQyxPQUFPLENBQ1A7SUFDQUMsV0FBVyxDQUNYO0lBRUEsZ0NBQWdDO0lBQ2hDLGdEQUFnRDtJQUNoREMsUUFBUSxDQUFDO0lBRVQsa0VBQWtFO0lBQ2xFQyxPQUFPLElBQUk7QUFDYixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5Y2xvYWstcHJhY3RpY2UvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEtleWNsb2FrUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMva2V5Y2xvYWtcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICBcclxuICAgIEtleWNsb2FrUHJvdmlkZXIoe1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5LRVlDTE9BS19JRCEsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5LRVlDTE9BS19TRUNSRVQhLFxyXG4gICAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuS0VZQ0xPQUtfSVNTVUVSLFxyXG4gICAgICB9KVxyXG4gIF0sXHJcbiAgXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXHJcblxyXG4gIHNlc3Npb246IHtcclxuICAgIFxyXG4gICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICB9LFxyXG5cclxuICAvLyBFdmVudHMgYXJlIHVzZWZ1bCBmb3IgbG9nZ2luZ1xyXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL2V2ZW50c1xyXG4gIGV2ZW50czoge30sXHJcblxyXG4gIC8vIEVuYWJsZSBkZWJ1ZyBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBpZiB5b3UgYXJlIGhhdmluZyBwcm9ibGVtc1xyXG4gIGRlYnVnOiB0cnVlLFxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIktleWNsb2FrUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJLRVlDTE9BS19JRCIsImNsaWVudFNlY3JldCIsIktFWUNMT0FLX1NFQ1JFVCIsImlzc3VlciIsIktFWUNMT0FLX0lTU1VFUiIsInNlY3JldCIsIlNFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInBhZ2VzIiwiY2FsbGJhY2tzIiwiZXZlbnRzIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

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