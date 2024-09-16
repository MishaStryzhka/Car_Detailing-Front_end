/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _js_setlanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/setlanguage */ \"./src/js/setlanguage.js\");\n/* harmony import */ var _js_setlanguage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_setlanguage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/burger-menu */ \"./src/js/burger-menu.js\");\n/* harmony import */ var _js_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_burger_menu__WEBPACK_IMPORTED_MODULE_2__);\n\nconsole.log('Hello from JavaScript!');\n\n\n\n//# sourceURL=webpack://car_detailing-front_end/./src/index.js?");

/***/ }),

/***/ "./src/js/burger-menu.js":
/*!*******************************!*\
  !*** ./src/js/burger-menu.js ***!
  \*******************************/
/***/ (() => {

eval("(function () {\n  var refs = {\n    openMenuBtn: document.querySelector('[data-menu-open]'),\n    closeMenuBtn: document.querySelector('[data-menu-close]'),\n    menu: document.querySelector('[data-menu]')\n    // body: document.querySelector('body'),\n  };\n  refs.openMenuBtn.addEventListener('click', toggleMenu);\n  refs.closeMenuBtn.addEventListener('click', toggleMenu);\n  function toggleMenu() {\n    refs.menu.classList.toggle('is-hidden');\n    // refs.body.classList.toggle('no-scroll');\n  }\n})();\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/burger-menu.js?");

/***/ }),

/***/ "./src/js/setlanguage.js":
/*!*******************************!*\
  !*** ./src/js/setlanguage.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var currentPath = window.location.pathname;\n  var lastSegment = currentPath.split('/').pop();\n  var languageLinks = document.querySelectorAll('.wrap-languages a');\n  languageLinks.forEach(function (link) {\n    var baseHref = link.getAttribute('href');\n    if (currentPath === baseHref + lastSegment) {\n      link.classList.add('active');\n      return;\n    }\n    link.setAttribute('href', baseHref + lastSegment);\n  });\n});\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/setlanguage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/burger.svg */ \"./src/images/icons/burger.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/instagram.svg */ \"./src/images/icons/instagram.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/tiktok.svg */ \"./src/images/icons/tiktok.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero_auto.jpg */ \"./src/images/hero_auto.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/smoke.png */ \"./src/images/smoke.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/image_about-us.png */ \"./src/images/image_about-us.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/polish.svg */ \"./src/images/icons/polish.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/ceramic.svg */ \"./src/images/icons/ceramic.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/colors.svg */ \"./src/images/icons/colors.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/professionalism.svg */ \"./src/images/icons/professionalism.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/complex.svg */ \"./src/images/icons/complex.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/material.svg */ \"./src/images/icons/material.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/individual.svg */ \"./src/images/icons/individual.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/service.svg */ \"./src/images/icons/service.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/garantee.svg */ \"./src/images/icons/garantee.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/marker.svg */ \"./src/images/icons/marker.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/icon-btn-next.svg */ \"./src/images/icons/icon-btn-next.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/car-form.png */ \"./src/images/car-form.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/photo-bg-form.png */ \"./src/images/photo-bg-form.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-hand-wash-car.png */ \"./src/images/bg-hand-wash-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-dry-cleaning.png */ \"./src/images/bg-dry-cleaning.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-hard-wax.png */ \"./src/images/bg-photo-hard-wax.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-polishing.png */ \"./src/images/bg-photo-polishing.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-disk-restoration.png */ \"./src/images/bg-photo-disk-restoration.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-ceramic-coating.png */ \"./src/images/bg-photo-ceramic-coating.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-window-tinting.png */ \"./src/images/bg-photo-window-tinting.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-headlight-tinting.png */ \"./src/images/bg-photo-headlight-tinting.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/arrow.svg */ \"./src/images/icons/arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hand-wash-mob-car.png */ \"./src/images/hand-wash-mob-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hand-wash-tablet-car.png */ \"./src/images/hand-wash-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hand-wash-car.png */ \"./src/images/hand-wash-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dry-cleaning-mob-car.png */ \"./src/images/dry-cleaning-mob-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dry-cleaning-tablet-car.png */ \"./src/images/dry-cleaning-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dry-cleaning-car.png */ \"./src/images/dry-cleaning-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hard-wax-car.png */ \"./src/images/hard-wax-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hard-wax-tablet-car.png */ \"./src/images/hard-wax-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../images/polishing-car.png */ \"./src/images/polishing-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../images/polishing-tablet-car.png */ \"./src/images/polishing-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../images/disk-restoration-car.png */ \"./src/images/disk-restoration-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../images/disk-restoration-tablet-car.png */ \"./src/images/disk-restoration-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../images/window-tinting-car.png */ \"./src/images/window-tinting-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../images/window-tinting-tablet-car.png */ \"./src/images/window-tinting-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../images/headlight-tinting-car.png */ \"./src/images/headlight-tinting-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ../images/headlight-tinting-tablet-car.png */ \"./src/images/headlight-tinting-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ceramic-coating-car.png */ \"./src/images/ceramic-coating-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ceramic-coating-tablet-car.png */ \"./src/images/ceramic-coating-tablet-car.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-footer-mobile.png */ \"./src/images/bg-footer-mobile.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-footer-tablet.png */ \"./src/images/bg-footer-tablet.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer-photo.png */ \"./src/images/footer-photo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/phone.svg */ \"./src/images/icons/phone.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/location-pin.svg */ \"./src/images/icons/location-pin.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/email.svg */ \"./src/images/icons/email.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/calendar-clock.svg */ \"./src/images/icons/calendar-clock.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/more-save.svg */ \"./src/images/icons/more-save.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/design.svg */ \"./src/images/icons/design.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/protection.svg */ \"./src/images/icons/protection.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-photo-prices.png */ \"./src/images/bg-photo-prices.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/icon-close.svg */ \"./src/images/icons/icon-close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);\nvar ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);\nvar ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);\nvar ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);\nvar ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);\nvar ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);\nvar ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);\nvar ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);\nvar ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);\nvar ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);\nvar ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);\nvar ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);\nvar ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___);\nvar ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___);\nvar ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_46___);\nvar ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_47___);\nvar ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___);\nvar ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_49___);\nvar ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___);\nvar ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_51___);\nvar ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_52___);\nvar ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_53___);\nvar ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_54___);\nvar ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_55___);\nvar ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_56___);\nvar ___CSS_LOADER_URL_REPLACEMENT_57___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_57___);\nvar ___CSS_LOADER_URL_REPLACEMENT_58___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_58___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size (opinionated).\n*/\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  tab-size: 4;\n  /* 3 */\n}\n\n/*\nSections\n========\n*/\n/**\n1. Remove the margin in all browsers.\n2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  margin: 0;\n  /* 1 */\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  /* 2 */\n}\n\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n}\n\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n\n.advantages-services-ceramic-list, .advantages-services-list, .footer-list, .work-examples-list, .services-item-description, .service-list, .advantage-list, .features {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.wrap-languages .language, .footer-text, .footer-title, .examples-box-inst_btn, .contact-btn, .site-nav__link, .logo {\n  text-decoration: none;\n}\n\n.prices-section, .container-adventiges-services, .hand-wash .hand-wash-container, .footer .footer-container, .work-examples .container, .container-headlight-tinting, .container-window-tinting, .container-ceramic-coating, .container-disk-restoration, .container-polishing, .container-hard-wax, .container-dry-cleaning, .container-hand-wash, .contact .contact-container, .examples .examples-container, .services-container, .advantages .container, .about-us .container, .hero .container, .header__container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\n@media screen and (min-width: 390px) {\n  .prices-section, .container-adventiges-services, .hand-wash .hand-wash-container, .footer .footer-container, .work-examples .container, .container-headlight-tinting, .container-window-tinting, .container-ceramic-coating, .container-disk-restoration, .container-polishing, .container-hard-wax, .container-dry-cleaning, .container-hand-wash, .contact .contact-container, .examples .examples-container, .services-container, .advantages .container, .about-us .container, .hero .container, .header__container {\n    width: 390px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .prices-section, .container-adventiges-services, .hand-wash .hand-wash-container, .footer .footer-container, .work-examples .container, .container-headlight-tinting, .container-window-tinting, .container-ceramic-coating, .container-disk-restoration, .container-polishing, .container-hard-wax, .container-dry-cleaning, .container-hand-wash, .contact .contact-container, .examples .examples-container, .services-container, .advantages .container, .about-us .container, .hero .container, .header__container {\n    width: 1024px;\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .prices-section, .container-adventiges-services, .hand-wash .hand-wash-container, .footer .footer-container, .work-examples .container, .container-headlight-tinting, .container-window-tinting, .container-ceramic-coating, .container-disk-restoration, .container-polishing, .container-hard-wax, .container-dry-cleaning, .container-hand-wash, .contact .contact-container, .examples .examples-container, .services-container, .advantages .container, .about-us .container, .hero .container, .header__container {\n    width: 1440px;\n    padding-left: 80px;\n    padding-right: 80px;\n  }\n}\n\n.about-us_header, .contact-box, .header__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  height: 60px;\n  padding: 12px 24px;\n  cursor: pointer;\n  border-radius: 3px;\n  border: 1px solid #b8875c;\n  background-color: transparent;\n  color: #d9d9d9;\n  font-family: Montserrat;\n  font-size: var(--sds-typography-body-size-medium);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 100%; /* 16px */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n}\n.contact-btn:hover {\n  background-color: rgba(217, 217, 217, 0.1019607843);\n}\n.contact-btn:active {\n  background-color: #b8875c;\n}\n\n.examples-title, .services-title, .about-us_title {\n  margin: 0;\n  color: #ffffff;\n  font-family: \"Noto Serif Display\";\n  font-size: 44px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 56px; /* 127.273% */\n  letter-spacing: 2.2px;\n}\n\n.btn-back-all-services, .form-btn, .services-btn, .services-item {\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nbody {\n  background-color: #000000;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n}\n\nbody.modal-open {\n  overflow: hidden;\n}\n\n@media screen and (max-width: 1023px) {\n  body.menu-open {\n    overflow: hidden;\n  }\n}\n\n.header__container {\n  position: relative;\n  justify-content: space-between;\n  height: 76px;\n}\n@media screen and (min-width: 1024px) {\n  .header__container {\n    height: 92px;\n  }\n}\n\n.header-pages {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #000000;\n}\n\n.logo {\n  width: 60px;\n  height: 60px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: 60px 60px;\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logo:hover {\n  scale: 1.2;\n}\n.logo img {\n  width: 60px;\n  height: 60px;\n}\n.logo--footer {\n  width: 100px;\n  height: 100px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: 100px 100px;\n  display: inline-block;\n  margin-bottom: 16px;\n  color: #ffffff;\n}\n@media screen and (min-width: 1024px) {\n  .logo--footer {\n    margin-bottom: 20px;\n  }\n}\n\n.logo__web {\n  color: #b8875c;\n}\n\n.site-nav {\n  display: none;\n}\n@media screen and (min-width: 1440px) {\n  .site-nav {\n    display: block;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n  }\n}\n\n.site-nav__item {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n  padding: 8px;\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.site-nav__item:hover {\n  scale: 1.1;\n}\n.site-nav__item:hover .site-nav__link {\n  color: #b8875c;\n}\n\n.site-nav__link {\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: #f3f3f3;\n}\n.site-nav__link--current {\n  color: #b8875c;\n}\n\n.wrap-box {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n\n.contact-btn {\n  display: none;\n}\n@media screen and (min-width: 1024px) {\n  .contact-btn {\n    display: flex;\n  }\n}\n\n.button-burger {\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border: none;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  cursor: pointer;\n}\n@media screen and (min-width: 1440px) {\n  .button-burger {\n    display: none;\n  }\n}\n\n.contact-box {\n  gap: 16px;\n}\n\n.contact-link {\n  display: none;\n}\n@media screen and (min-width: 1440px) {\n  .contact-link {\n    display: block;\n    width: 40px;\n    height: 40px;\n    padding: 8px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n  }\n  .contact-link.ins {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  }\n  .contact-link.tiktok {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  }\n}\n\n.hero {\n  height: 900px;\n}\n.hero .container {\n  position: relative;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat;\n  background-size: 1050px 700px;\n  background-position: 433px 108px;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); /* Фоновий колір з прозорістю */\n  background-blend-mode: overlay;\n}\n\n.hero-title {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  margin: 0;\n  padding-top: 185px;\n  padding-left: 80px;\n  font-family: \"Noto Serif Display\";\n  font-size: 80px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 100%; /* 80px */\n  letter-spacing: 4.8px;\n  text-transform: uppercase;\n  user-select: none;\n  pointer-events: none;\n  color: #fff;\n}\n.hero-title .hero-description {\n  color: #b8875c;\n}\n\n.hero-smoke {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat center center;\n  background-size: cover;\n}\n\n.about-us {\n  margin-top: 120px;\n}\n.about-us_header {\n  margin-top: 56px;\n}\n\n.image_about-us {\n  width: 400px;\n  height: 400px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n  background-size: 400px;\n}\n\n.about-us_description {\n  width: 1064px;\n  text-align: center;\n}\n\n.about-us_title {\n  text-transform: uppercase;\n}\n\n.about-us_text {\n  color: #feffff;\n  margin: 0;\n  margin-top: 40px;\n  /* Main text */\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.16px;\n  text-align: center;\n}\n\n.features {\n  display: flex;\n  justify-content: space-between;\n}\n\n.features-item {\n  width: 413px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.features-item .features-icon {\n  width: 60px;\n  height: 60px;\n  background-size: 60px;\n}\n.features-item .icon-polish {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\n}\n.features-item .icon-ceramic {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n}\n.features-item .icon-colors {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\n}\n\n.features-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 36px; /* 163.636% */\n  letter-spacing: 1.54px;\n}\n\n.features-text {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.16px;\n  text-align: center;\n}\n\n.advantages {\n  margin-top: 120px;\n}\n.advantages-title {\n  margin: 0;\n  text-align: center;\n  font-family: \"Noto Serif Display\";\n  font-size: 44px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 56px; /* 127.273% */\n  letter-spacing: 2.2px;\n  text-transform: uppercase;\n}\n\n.advantage-list {\n  margin-top: 56px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 40px;\n  column-gap: 80px;\n}\n\n.advantages-item {\n  display: flex;\n  gap: 24px;\n}\n\n.advantages-icon {\n  width: 60px;\n  height: 60px;\n  background-size: 60px;\n}\n.advantages-icon.icon-professionalism {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\n}\n.advantages-icon.icon-complex {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});\n}\n.advantages-icon.icon-material {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\n}\n.advantages-icon.icon-individual {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\n}\n.advantages-icon.icon-service {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\n}\n.advantages-icon.icon-garantee {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\n}\n\n.advantages-item_title {\n  margin: 0;\n  font-family: \"Noto Serif Display\";\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 36px; /* 163.636% */\n  letter-spacing: 1.54px;\n}\n\n.advantages-item_text {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.16px;\n  width: 516px;\n}\n\n.services {\n  margin-top: 140px;\n}\n\n.service-list {\n  margin-top: 56px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\n.services-item {\n  width: 413px;\n  height: 500px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(75px);\n  text-align: center;\n}\n.services-item:hover {\n  box-shadow: 0px 0px 1px 3px #b8875c;\n  scale: 1.01;\n}\n\n.wrap-description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 36px 0;\n}\n\n.services-description {\n  margin: 11px 16px 0;\n}\n\n.services-item-title {\n  margin: 0;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.services-item-description {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 12px;\n}\n.services-item-description li {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.services-item-description li .services-marker {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\n  background-repeat: no-repeat;\n  background-size: 8px;\n  width: 8px;\n  height: 8px;\n}\n.services-item-description li p {\n  margin: 0;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.16px;\n}\n\n.services-btn {\n  margin-top: 40px;\n  background-color: transparent;\n  display: inline-flex;\n  height: 60px;\n  padding: 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  border-radius: 3px;\n  border: 1px solid #b8875c;\n  color: #d9d9d9;\n  font-family: Montserrat;\n  font-size: var(--sds-typography-body-size-medium);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 100%; /* 16px */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n}\n.services-btn .icon-btn-next {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});\n  background-repeat: no-repeat;\n  background-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.services-btn:hover {\n  background-color: rgba(217, 217, 217, 0.2);\n  scale: 1.01;\n}\n.services-btn:active {\n  background-color: #b8875c;\n}\n\n.examples {\n  margin-top: 120px;\n}\n.examples-list {\n  margin-top: 56px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 20px;\n  width: 100%;\n}\n\n.examples-list .tall {\n  grid-row: span 2;\n}\n\n.examples-box-inst {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 40px;\n}\n\n.examples-box-ins_title {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n}\n\n.examples-box-ins_desctiption {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 28px; /* 175% */\n  letter-spacing: 0.16px;\n}\n\n.examples-box-inst_btn {\n  display: flex;\n  width: 296px;\n  height: 60px;\n  padding: 24px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  border: 1px solid #b8875c;\n  color: #d9d9d9;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 100%; /* 16px */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n}\n\n.contact {\n  padding-top: 80px;\n  padding-bottom: 100px;\n}\n@media screen and (min-width: 1024px) {\n  .contact {\n    padding-top: 100px;\n    padding-bottom: 180px;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .contact {\n    padding-top: 120px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .contact .contact-container {\n    padding: 0;\n    display: flex;\n    gap: 78px;\n    height: 600px;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .contact .contact-container {\n    gap: 246px;\n  }\n}\n\n.contact-first-wrap {\n  display: none;\n}\n@media screen and (min-width: 1024px) {\n  .contact-first-wrap {\n    display: block;\n    width: 400px;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_18___});\n    background-size: 364px 574px;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n}\n\n.contact-second-wrap {\n  display: block;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_19___});\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media screen and (min-width: 1440px) {\n  .contact-second-wrap {\n    width: 1020px;\n  }\n}\n\n.contact-wrap {\n  max-width: 522px;\n  padding-top: 20px;\n  padding-bottom: 58px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contact-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 1.6;\n  letter-spacing: 0.07em;\n  text-align: center;\n}\n\n.contact-text {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.75;\n  letter-spacing: 0.16px;\n  opacity: 0.5;\n  margin-bottom: 32px;\n  text-align: center;\n  color: #feffff;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.contact-form input, .contact-form textarea {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.7;\n  background: transparent;\n  width: 100%;\n  padding: 8px 16px;\n  color: rgb(255, 255, 255);\n  outline: none;\n  border: 0.5px solid rgba(255, 255, 255, 0.7);\n  border-radius: 5px;\n}\n.contact-form input ::placeholder, .contact-form textarea ::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.box-recaptcha {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  background-color: transparent;\n  display: inline-flex;\n  height: 60px;\n  padding: 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  border-radius: 3px;\n  border: 1px solid #b8875c;\n  color: #d9d9d9;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: var(--sds-typography-body-size-medium);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 100%; /* 16px */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n}\n.form-btn:hover {\n  background-color: rgba(217, 217, 217, 0.2);\n  scale: 1.01;\n}\n.form-btn:active {\n  background-color: #b8875c;\n}\n\n.container-headlight-tinting, .container-window-tinting, .container-ceramic-coating, .container-disk-restoration, .container-polishing, .container-hard-wax, .container-dry-cleaning, .container-hand-wash {\n  background-repeat: no-repeat;\n  background-position: cover;\n  position: relative;\n  height: 900px;\n  padding-top: 116px;\n}\n\n.container-hand-wash {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\n}\n\n.container-dry-cleaning {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___});\n}\n\n.container-hard-wax {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___});\n}\n\n.container-polishing {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___});\n}\n\n.container-disk-restoration {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___});\n}\n\n.container-ceramic-coating {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});\n}\n\n.container-window-tinting {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___});\n}\n\n.container-headlight-tinting {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___});\n}\n\n.type-services-link-back {\n  display: flex;\n  padding: 8px;\n  gap: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #d9d9d9;\n  text-decoration: none;\n}\n\n.icon-btn-next {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_28___});\n  background-repeat: no-repeat;\n  width: 24px;\n  height: 24px;\n}\n\n.type-services-wrap {\n  display: flex;\n  flex-direction: column-reverse;\n  margin-top: 24px;\n  align-items: center;\n  gap: 40px;\n}\n@media screen and (min-width: 1024px) {\n  .type-services-wrap {\n    align-items: stretch;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .type-services-wrap {\n    margin-top: 80px;\n    flex-direction: row;\n    gap: 20px;\n  }\n}\n\n@media screen and (min-width: 1440px) {\n  .type-services-wrap-text {\n    max-width: 630px;\n  }\n}\n\n.type-services-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.25;\n  letter-spacing: 0.06em;\n  text-align: left;\n  margin: 0;\n  margin-bottom: 40px;\n  color: #feffff;\n}\n@media screen and (min-width: 1440px) {\n  .type-services-title {\n    font-size: 44px;\n    line-height: 1.27;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .type-services-title {\n    font-size: 50px;\n    font-weight: 700;\n    line-height: 1;\n  }\n}\n\n.type-services-description {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.75;\n  letter-spacing: 0.01em;\n  text-align: left;\n  margin: 0;\n  margin-bottom: 16px;\n  color: #feffff;\n}\n\n.ceramic-coating-photo, .headlight-tinting-photo, .window-tinting-photo, .disk-restoration-photo, .polishing-photo, .hard-wax-photo, .dry-cleaning-photo, .hand-wash-photo {\n  width: 333px;\n  height: 212px;\n  box-shadow: 18px 18px 80px 6px rgba(184, 135, 92, 0.5);\n}\n@media screen and (min-width: 1024px) {\n  .ceramic-coating-photo, .headlight-tinting-photo, .window-tinting-photo, .disk-restoration-photo, .polishing-photo, .hard-wax-photo, .dry-cleaning-photo, .hand-wash-photo {\n    width: 476px;\n    height: 302px;\n    margin: 0 auto;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .ceramic-coating-photo, .headlight-tinting-photo, .window-tinting-photo, .disk-restoration-photo, .polishing-photo, .hard-wax-photo, .dry-cleaning-photo, .hand-wash-photo {\n    width: 630px;\n    height: 400px;\n    margin: 0;\n  }\n}\n\n.hand-wash-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_29___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .hand-wash-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_30___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .hand-wash-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_31___}), no-repeat;\n  }\n}\n\n.dry-cleaning-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_32___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .dry-cleaning-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_33___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .dry-cleaning-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_34___}), no-repeat;\n  }\n}\n\n.hard-wax-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_35___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .hard-wax-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_36___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .hard-wax-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_35___}), no-repeat;\n  }\n}\n\n.polishing-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_37___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .polishing-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_38___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .polishing-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_37___}), no-repeat;\n  }\n}\n\n.disk-restoration-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_39___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .disk-restoration-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_40___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .disk-restoration-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_39___}), no-repeat;\n  }\n}\n\n.window-tinting-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_41___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .window-tinting-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_42___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .window-tinting-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_41___}), no-repeat;\n  }\n}\n\n.headlight-tinting-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_43___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .headlight-tinting-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_44___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .headlight-tinting-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_43___}), no-repeat;\n  }\n}\n\n.ceramic-coating-photo {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_45___}), no-repeat;\n}\n@media screen and (min-width: 1024px) {\n  .ceramic-coating-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_46___}), no-repeat;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .ceramic-coating-photo {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_45___}), no-repeat;\n  }\n}\n\n.work-examples {\n  padding-top: 40px;\n}\n@media screen and (min-width: 1024px) {\n  .work-examples {\n    padding-top: 64px;\n  }\n}\n.work-examples .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.work-examples-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.25;\n  letter-spacing: 0.05em;\n  margin: 0;\n  margin-bottom: 32px;\n  color: #feffff;\n}\n@media screen and (min-width: 1024px) {\n  .work-examples-title {\n    font-size: 44px;\n    line-height: 1.27;\n    margin-bottom: 40px;\n  }\n}\n\n.work-examples-list {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 64px;\n}\n\n.btn-back-all-services {\n  padding: 16px 32px;\n  margin: 64px auto 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: #d9d9d9;\n  border-radius: 3px;\n  background-color: rgba(217, 217, 217, 0.2);\n  color: #feffff;\n  border: none;\n}\n.btn-back-all-services:hover {\n  background-color: rgba(184, 135, 92, 0.2);\n  color: #b8875c;\n}\n\n.footer .footer-container {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  justify-content: space-between;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_47___});\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media screen and (min-width: 1024px) {\n  .footer .footer-container {\n    flex-direction: row;\n    padding-top: 0px;\n    padding-bottom: 14px;\n    gap: 120.5px;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_48___});\n  }\n}\n@media screen and (min-width: 1440px) {\n  .footer .footer-container {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_49___});\n    padding-top: 66px;\n    padding-bottom: 66px;\n    gap: 150px;\n  }\n}\n\n.footer-right,\n.footer-left {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n@media screen and (min-width: 1440px) {\n  .footer-right,\n  .footer-left {\n    flex-direction: row;\n    gap: 154px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .footer-left {\n    flex-direction: row;\n    gap: 120.5px;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .footer-left {\n    gap: 154px;\n  }\n}\n\n.footer-right-second {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n@media screen and (min-width: 1024px) {\n  .footer-right-second {\n    gap: 40px;\n  }\n}\n\n.footer-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  margin: 0;\n  color: #f3f3f3;\n}\n\n.title-menu {\n  padding: 8px;\n}\n\n.footer-text {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 26px;\n  letter-spacing: 0.02em;\n  margin: 0;\n  color: #f3f3f3;\n}\n\n.footer-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 24px;\n}\n@media screen and (min-width: 1024px) {\n  .footer-list {\n    margin-top: 40px;\n    gap: 24px;\n  }\n}\n\n.footer-item {\n  display: flex;\n  gap: 8px;\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.footer-item:hover a {\n  color: #b8875c;\n}\n\n.footer-icon {\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n}\n.footer-icon.icon-phone {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_50___});\n}\n.footer-icon.location-pin {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_51___});\n}\n.footer-icon.icon-email {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_52___});\n}\n.footer-icon.calendar-clock {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_53___});\n}\n\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.wrap-link {\n  display: flex;\n  gap: 16px;\n}\n\n.wrap-text {\n  width: 297px;\n  padding: 8px;\n  border-bottom: 1px solid #d9d9d9;\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.wrap-text:hover a {\n  color: #b8875c;\n}\n\n.wrap-languages {\n  display: flex;\n  gap: 8px;\n}\n.wrap-languages .language {\n  color: #fff;\n  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.wrap-languages .language:hover {\n  scale: 1.1;\n  color: #b8875c;\n}\n\n.language.active {\n  pointer-events: none;\n  color: gray; /* або будь-який інший стиль для неклікабельного посилання */\n  cursor: default; /* зміна курсора на звичайний */\n}\n\n.hand-wash .hand-wash-container {\n  height: 808px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\n  background-repeat: no-repeat;\n  background-position: cover;\n}\n\n.hand-wash-link-back {\n  display: flex;\n  padding: 8px;\n  gap: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #d9d9d9;\n  text-decoration: none;\n}\n\n.icon-btn-next {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_28___});\n  background-repeat: no-repeat;\n  width: 24px;\n  height: 24px;\n}\n\n.hand-wash-wrap {\n  margin-top: 80px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.hand-wash-wrap-text {\n  max-width: 630px;\n}\n\n.hand-wash-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 50px;\n  letter-spacing: 0.06em;\n  text-align: left;\n  margin-bottom: 40px;\n  color: #feffff;\n}\n\n.hand-wash-description {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: 0.01em;\n  text-align: left;\n  margin-bottom: 16px;\n  color: #feffff;\n}\n\n.hand-wash-picture {\n  width: 630px;\n  height: 400px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_31___}), no-repeat;\n  box-shadow: 18px 18px 80px 6px rgba(184, 135, 92, 0.5);\n}\n\n.section-adventiges-services {\n  padding: 64px 0 28px;\n}\n\n.adventiges-services-title {\n  font-family: \"Noto Serif Display\";\n  font-size: 44px;\n  font-weight: 600;\n  line-height: 56px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 40px;\n  color: #feffff;\n}\n\n.advantages-services-list {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.advantages-services-item {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  max-width: 413px;\n}\n\n.advantages-services-item_title {\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 26px;\n  letter-spacing: 0.07em;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 16px;\n  color: #feffff;\n}\n\n.advantages-services-item_text {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  margin: 0;\n  color: #feffff;\n}\n\n.icon-protection, .icon-design, .icon-save-more {\n  display: block;\n  height: 60px;\n  width: 60px;\n  background-size: 60px;\n  margin: 0 auto;\n  margin-bottom: 24px;\n}\n\n.icon-save-more {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_54___});\n}\n\n.icon-design {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_55___});\n}\n\n.icon-protection {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_56___});\n}\n\n.advantages-services-ceramic-list {\n  display: grid;\n  grid-template-columns: repeat(3, 413px); /* 3 стовпці рівної ширини */\n  grid-template-rows: repeat(2, 1fr); /* 2 рядки */\n  column-gap: 20px; /* Відступ між стовпцями */\n  row-gap: 64px; /* Відступ між рядками */\n  justify-content: center;\n}\n\n.prices-section {\n  padding-top: 80px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_57___}), no-repeat;\n  background-size: 1440px 7334px;\n}\n\n.price-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.price-boximg {\n  display: block;\n}\n\nswiper-container {\n  width: 100%;\n  height: 100%;\n}\n\nswiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nswiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nswiper-container::part(button-prev),\nswiper-container::part(button-next) {\n  box-sizing: border-box;\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5019607843);\n  color: goldenrod;\n}\n\nswiper-container::part(bullet) {\n  background: goldenrod;\n}\n\nswiper-container::part(bullet-active) {\n  background: goldenrod;\n}\n\n.box-burger-menu {\n  display: flex;\n  width: 390px;\n  height: 520px;\n  background-color: #000000;\n  margin: 0 auto;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n}\n\n.site-nav-burger-menu {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.menu-close-btn {\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_58___});\n}\n\n.contact-box-burger-menu {\n  display: flex;\n  flex-direction: column;\n  width: 170px;\n}\n\n.wrap-links {\n  margin-top: 16px;\n  display: flex;\n  gap: 18px;\n}\n\n.title-link-burger-menu {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.link-burger-menu {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 24px;\n}\n.link-burger-menu.ins {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n.link-burger-menu.tiktok {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.is-hidden {\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://car_detailing-front_end/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://car_detailing-front_end/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://car_detailing-front_end/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/bg-dry-cleaning.png":
/*!****************************************!*\
  !*** ./src/images/bg-dry-cleaning.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31b4288db6f8fd24ab55.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-dry-cleaning.png?");

/***/ }),

/***/ "./src/images/bg-footer-mobile.png":
/*!*****************************************!*\
  !*** ./src/images/bg-footer-mobile.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b816afad6980cee50fd3.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-footer-mobile.png?");

/***/ }),

/***/ "./src/images/bg-footer-tablet.png":
/*!*****************************************!*\
  !*** ./src/images/bg-footer-tablet.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"63c0802aa41b4aa876d0.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-footer-tablet.png?");

/***/ }),

/***/ "./src/images/bg-hand-wash-car.png":
/*!*****************************************!*\
  !*** ./src/images/bg-hand-wash-car.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5425bbcad41d3a84e5a3.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-hand-wash-car.png?");

/***/ }),

/***/ "./src/images/bg-photo-ceramic-coating.png":
/*!*************************************************!*\
  !*** ./src/images/bg-photo-ceramic-coating.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"efe1245d5fba89e20cae.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-ceramic-coating.png?");

/***/ }),

/***/ "./src/images/bg-photo-disk-restoration.png":
/*!**************************************************!*\
  !*** ./src/images/bg-photo-disk-restoration.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3059c8e424f5baffc6dd.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-disk-restoration.png?");

/***/ }),

/***/ "./src/images/bg-photo-hard-wax.png":
/*!******************************************!*\
  !*** ./src/images/bg-photo-hard-wax.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"57029a134a9ce919be4d.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-hard-wax.png?");

/***/ }),

/***/ "./src/images/bg-photo-headlight-tinting.png":
/*!***************************************************!*\
  !*** ./src/images/bg-photo-headlight-tinting.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"199a25ac1ebf4e970844.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-headlight-tinting.png?");

/***/ }),

/***/ "./src/images/bg-photo-polishing.png":
/*!*******************************************!*\
  !*** ./src/images/bg-photo-polishing.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"12d27efb02869a19f5c8.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-polishing.png?");

/***/ }),

/***/ "./src/images/bg-photo-prices.png":
/*!****************************************!*\
  !*** ./src/images/bg-photo-prices.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"563cba6994375749775c.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-prices.png?");

/***/ }),

/***/ "./src/images/bg-photo-window-tinting.png":
/*!************************************************!*\
  !*** ./src/images/bg-photo-window-tinting.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"81a32f8e986a2697cd59.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/bg-photo-window-tinting.png?");

/***/ }),

/***/ "./src/images/car-form.png":
/*!*********************************!*\
  !*** ./src/images/car-form.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1ff847019b7c1ab59455.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/car-form.png?");

/***/ }),

/***/ "./src/images/ceramic-coating-car.png":
/*!********************************************!*\
  !*** ./src/images/ceramic-coating-car.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b369e60198ebd8345767.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/ceramic-coating-car.png?");

/***/ }),

/***/ "./src/images/ceramic-coating-tablet-car.png":
/*!***************************************************!*\
  !*** ./src/images/ceramic-coating-tablet-car.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"344adbb5d7dca0750a16.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/ceramic-coating-tablet-car.png?");

/***/ }),

/***/ "./src/images/disk-restoration-car.png":
/*!*********************************************!*\
  !*** ./src/images/disk-restoration-car.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0da386c3a6b0b9c90a63.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/disk-restoration-car.png?");

/***/ }),

/***/ "./src/images/disk-restoration-tablet-car.png":
/*!****************************************************!*\
  !*** ./src/images/disk-restoration-tablet-car.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"63977fdd01b8834629db.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/disk-restoration-tablet-car.png?");

/***/ }),

/***/ "./src/images/dry-cleaning-car.png":
/*!*****************************************!*\
  !*** ./src/images/dry-cleaning-car.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"369affc309ae594a50ac.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/dry-cleaning-car.png?");

/***/ }),

/***/ "./src/images/dry-cleaning-mob-car.png":
/*!*********************************************!*\
  !*** ./src/images/dry-cleaning-mob-car.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f2f1abc21ae80ce8748a.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/dry-cleaning-mob-car.png?");

/***/ }),

/***/ "./src/images/dry-cleaning-tablet-car.png":
/*!************************************************!*\
  !*** ./src/images/dry-cleaning-tablet-car.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f6c7397d7c7a7e16901b.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/dry-cleaning-tablet-car.png?");

/***/ }),

/***/ "./src/images/footer-photo.png":
/*!*************************************!*\
  !*** ./src/images/footer-photo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"822d15597969de5c6f99.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/footer-photo.png?");

/***/ }),

/***/ "./src/images/hand-wash-car.png":
/*!**************************************!*\
  !*** ./src/images/hand-wash-car.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2c7aacca0d66977de3d2.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hand-wash-car.png?");

/***/ }),

/***/ "./src/images/hand-wash-mob-car.png":
/*!******************************************!*\
  !*** ./src/images/hand-wash-mob-car.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c8aca84c81dd37929654.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hand-wash-mob-car.png?");

/***/ }),

/***/ "./src/images/hand-wash-tablet-car.png":
/*!*********************************************!*\
  !*** ./src/images/hand-wash-tablet-car.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7915b76c0e3abda48f8a.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hand-wash-tablet-car.png?");

/***/ }),

/***/ "./src/images/hard-wax-car.png":
/*!*************************************!*\
  !*** ./src/images/hard-wax-car.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9b4f175f010dfae04d1e.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hard-wax-car.png?");

/***/ }),

/***/ "./src/images/hard-wax-tablet-car.png":
/*!********************************************!*\
  !*** ./src/images/hard-wax-tablet-car.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"489b9501cd2f2a9640c0.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hard-wax-tablet-car.png?");

/***/ }),

/***/ "./src/images/headlight-tinting-car.png":
/*!**********************************************!*\
  !*** ./src/images/headlight-tinting-car.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b482de7d6f2438035a71.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/headlight-tinting-car.png?");

/***/ }),

/***/ "./src/images/headlight-tinting-tablet-car.png":
/*!*****************************************************!*\
  !*** ./src/images/headlight-tinting-tablet-car.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3bd0fa1b224229b450b6.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/headlight-tinting-tablet-car.png?");

/***/ }),

/***/ "./src/images/hero_auto.jpg":
/*!**********************************!*\
  !*** ./src/images/hero_auto.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bb4fec733db11b1617bf.jpg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/hero_auto.jpg?");

/***/ }),

/***/ "./src/images/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/images/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"08a8429e307c2b516f9b.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/arrow.svg?");

/***/ }),

/***/ "./src/images/icons/burger.svg":
/*!*************************************!*\
  !*** ./src/images/icons/burger.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9d34226ed7724e44637c.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/burger.svg?");

/***/ }),

/***/ "./src/images/icons/calendar-clock.svg":
/*!*********************************************!*\
  !*** ./src/images/icons/calendar-clock.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56350676440f9519b923.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/calendar-clock.svg?");

/***/ }),

/***/ "./src/images/icons/ceramic.svg":
/*!**************************************!*\
  !*** ./src/images/icons/ceramic.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65f887ae59994526e8e4.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/ceramic.svg?");

/***/ }),

/***/ "./src/images/icons/colors.svg":
/*!*************************************!*\
  !*** ./src/images/icons/colors.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4c04038a6e1dc8e55d1d.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/colors.svg?");

/***/ }),

/***/ "./src/images/icons/complex.svg":
/*!**************************************!*\
  !*** ./src/images/icons/complex.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b5fc3ae594562ac1c98d.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/complex.svg?");

/***/ }),

/***/ "./src/images/icons/design.svg":
/*!*************************************!*\
  !*** ./src/images/icons/design.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"513c345d13ad01d0d01e.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/design.svg?");

/***/ }),

/***/ "./src/images/icons/email.svg":
/*!************************************!*\
  !*** ./src/images/icons/email.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bbe6835dd668852eef26.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/email.svg?");

/***/ }),

/***/ "./src/images/icons/garantee.svg":
/*!***************************************!*\
  !*** ./src/images/icons/garantee.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc97a6c2ecbde33b7683.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/garantee.svg?");

/***/ }),

/***/ "./src/images/icons/icon-btn-next.svg":
/*!********************************************!*\
  !*** ./src/images/icons/icon-btn-next.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0f413e6f8c97ab32d3e3.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/icon-btn-next.svg?");

/***/ }),

/***/ "./src/images/icons/icon-close.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/icon-close.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2228b79bba7a1bbb6a08.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/icon-close.svg?");

/***/ }),

/***/ "./src/images/icons/individual.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/individual.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65895cb7c8d3839df666.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/individual.svg?");

/***/ }),

/***/ "./src/images/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/images/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6e2d5f3842c95a41dbd5.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/instagram.svg?");

/***/ }),

/***/ "./src/images/icons/location-pin.svg":
/*!*******************************************!*\
  !*** ./src/images/icons/location-pin.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65126dabc46bc9a05438.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/location-pin.svg?");

/***/ }),

/***/ "./src/images/icons/marker.svg":
/*!*************************************!*\
  !*** ./src/images/icons/marker.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dd54b43f5ab865c94aaa.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/marker.svg?");

/***/ }),

/***/ "./src/images/icons/material.svg":
/*!***************************************!*\
  !*** ./src/images/icons/material.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fb794ee05bba8c419e68.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/material.svg?");

/***/ }),

/***/ "./src/images/icons/more-save.svg":
/*!****************************************!*\
  !*** ./src/images/icons/more-save.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"78466f76dca178b0b8f1.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/more-save.svg?");

/***/ }),

/***/ "./src/images/icons/phone.svg":
/*!************************************!*\
  !*** ./src/images/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d8189765b9641a89bed6.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/phone.svg?");

/***/ }),

/***/ "./src/images/icons/polish.svg":
/*!*************************************!*\
  !*** ./src/images/icons/polish.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d0ae1112604838afdd82.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/polish.svg?");

/***/ }),

/***/ "./src/images/icons/professionalism.svg":
/*!**********************************************!*\
  !*** ./src/images/icons/professionalism.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"79f85246b29bc162f681.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/professionalism.svg?");

/***/ }),

/***/ "./src/images/icons/protection.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/protection.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b1a9702cda5bf23ab171.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/protection.svg?");

/***/ }),

/***/ "./src/images/icons/service.svg":
/*!**************************************!*\
  !*** ./src/images/icons/service.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c7c87572ddbadc38d2c4.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/service.svg?");

/***/ }),

/***/ "./src/images/icons/tiktok.svg":
/*!*************************************!*\
  !*** ./src/images/icons/tiktok.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"57d95a0b448f6b37d682.svg\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/icons/tiktok.svg?");

/***/ }),

/***/ "./src/images/image_about-us.png":
/*!***************************************!*\
  !*** ./src/images/image_about-us.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5f637ba5821ba3f1e23a.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/image_about-us.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a84478d0346f356a83a7.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/photo-bg-form.png":
/*!**************************************!*\
  !*** ./src/images/photo-bg-form.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dd4b70a777f7b8e69cff.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/photo-bg-form.png?");

/***/ }),

/***/ "./src/images/polishing-car.png":
/*!**************************************!*\
  !*** ./src/images/polishing-car.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fecc49649eba993aaf25.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/polishing-car.png?");

/***/ }),

/***/ "./src/images/polishing-tablet-car.png":
/*!*********************************************!*\
  !*** ./src/images/polishing-tablet-car.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"55386373c616822d72cb.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/polishing-tablet-car.png?");

/***/ }),

/***/ "./src/images/smoke.png":
/*!******************************!*\
  !*** ./src/images/smoke.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d33aecce785b91c7f50c.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/smoke.png?");

/***/ }),

/***/ "./src/images/window-tinting-car.png":
/*!*******************************************!*\
  !*** ./src/images/window-tinting-car.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5b34b386c884611b2a6.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/window-tinting-car.png?");

/***/ }),

/***/ "./src/images/window-tinting-tablet-car.png":
/*!**************************************************!*\
  !*** ./src/images/window-tinting-tablet-car.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bbfd4d2f6c1b8c91575e.png\";\n\n//# sourceURL=webpack://car_detailing-front_end/./src/images/window-tinting-tablet-car.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;