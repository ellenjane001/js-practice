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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session.user?.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ejmcababaro\\\\my_projects\\\\practices\\\\js-practice\\\\keycloak-practice\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 42\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ejmcababaro\\\\my_projects\\\\practices\\\\js-practice\\\\keycloak-practice\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ejmcababaro\\\\my_projects\\\\practices\\\\js-practice\\\\keycloak-practice\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ejmcababaro\\\\my_projects\\\\practices\\\\js-practice\\\\keycloak-practice\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdNQTtBQUh1RDtBQUs5QyxTQUFTSSxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsTUFBTUMsUUFBTyxFQUFFLEdBQUdILDJEQUFVQTtJQUNwQyxJQUFHRyxTQUFTO1FBQ1YscUJBQU87O2dCQUFFO2dCQUNPQSxRQUFRQyxJQUFJLEVBQUVDO2dCQUFNOzhCQUFDLDhEQUFDQzs7Ozs7OEJBQ3BDLDhEQUFDQztvQkFBT0MsU0FBUyxJQUFNVCx3REFBT0E7OEJBQUk7Ozs7Ozs7O0lBRXRDLENBQUM7SUFDRCxxQkFBTzs7WUFBRTswQkFDTyw4REFBQ087Ozs7OzBCQUNmLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNVix1REFBTUE7MEJBQUk7Ozs7Ozs7O0FBRXJDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXljbG9hay1wcmFjdGljZS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcbiAgaWYoc2Vzc2lvbikge1xuICAgIHJldHVybiA8PlxuICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXI/LmVtYWlsfSA8YnIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgPC8+XG4gIH1cbiAgcmV0dXJuIDw+XG4gICAgTm90IHNpZ25lZCBpbiA8YnIvPlxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgPC8+XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();