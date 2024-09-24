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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setlanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/setlanguage */ \"./src/js/setlanguage.js\");\n/* harmony import */ var _js_setlanguage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_setlanguage__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger-menu */ \"./src/js/burger-menu.js\");\n/* harmony import */ var _js_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _js_set_slide_per_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/set-slide-per-view */ \"./src/js/set-slide-per-view.js\");\n/* harmony import */ var _js_set_slide_per_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_set_slide_per_view__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_setParamsReviewsSwiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/setParamsReviewsSwiper */ \"./src/js/setParamsReviewsSwiper.js\");\n/* harmony import */ var _js_setParamsReviewsSwiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_setParamsReviewsSwiper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_setOpenLanguageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/setOpenLanguageList */ \"./src/js/setOpenLanguageList.js\");\n/* harmony import */ var _js_setOpenLanguageList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_setOpenLanguageList__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://car_detailing-front_end/./src/index.js?");

/***/ }),

/***/ "./src/js/burger-menu.js":
/*!*******************************!*\
  !*** ./src/js/burger-menu.js ***!
  \*******************************/
/***/ (() => {

eval("(function () {\n  var refs = {\n    openMenuBtn: document.querySelector('[data-menu-open]'),\n    closeMenuBtn: document.querySelector('[data-menu-close]'),\n    menu: document.querySelector('[data-menu]'),\n    body: document.querySelector('body'),\n    listlink: document.querySelector('.site-nav-burger-menu')\n  };\n  refs.openMenuBtn.addEventListener('click', toggleMenu);\n  refs.closeMenuBtn.addEventListener('click', toggleMenu);\n  refs.listlink.addEventListener('click', handleClickMenulink);\n  document.addEventListener('click', handleClickOutside);\n  function toggleMenu() {\n    refs.menu.classList.toggle('is-hidden');\n    refs.body.classList.toggle('no-scroll');\n  }\n  function handleClickMenulink(event) {\n    if (event.target.tagName === 'A') {\n      toggleMenu();\n    }\n  }\n  function handleClickOutside(event) {\n    var isClickInside = refs.menu.contains(event.target) || refs.openMenuBtn.contains(event.target);\n    if (!isClickInside && !refs.menu.classList.contains('is-hidden')) {\n      toggleMenu();\n    }\n  }\n})();\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/burger-menu.js?");

/***/ }),

/***/ "./src/js/set-slide-per-view.js":
/*!**************************************!*\
  !*** ./src/js/set-slide-per-view.js ***!
  \**************************************/
/***/ (() => {

eval("// swiper element\nvar swiperEl = document.querySelector('[data-swiper-second]');\nif (swiperEl) {\n  // swiper parameters\n  var swiperParams = {\n    slidesPerView: 1,\n    breakpoints: {\n      390: {\n        slidesPerView: 1.3\n      },\n      1024: {\n        slidesPerView: 2.3\n      },\n      1440: {\n        slidesPerView: 3\n      }\n    }\n  };\n\n  // now we need to assign all parameters to Swiper element\n  Object.assign(swiperEl, swiperParams);\n\n  // and now initialize it\n  swiperEl.initialize();\n}\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/set-slide-per-view.js?");

/***/ }),

/***/ "./src/js/setOpenLanguageList.js":
/*!***************************************!*\
  !*** ./src/js/setOpenLanguageList.js ***!
  \***************************************/
/***/ (() => {

eval("(function () {\n  function setupLanguageToggle(version) {\n    var refs = {\n      openListBtn: document.querySelector(\"[data-language-toggle=\\\"\".concat(version, \"\\\"]\")),\n      list: document.querySelector(\"[data-language-list=\\\"\".concat(version, \"\\\"]\")),\n      arrow: document.querySelector(\"[data-arrow=\\\"\".concat(version, \"\\\"]\"))\n    };\n    if (refs.openListBtn && refs.list && refs.arrow) {\n      refs.openListBtn.addEventListener('click', function () {\n        toggleMenu(refs);\n      });\n    } else {\n      console.error(\"\\u0415\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u0438 \\u043D\\u0435 \\u0437\\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0456 \\u0434\\u043B\\u044F \\u0432\\u0435\\u0440\\u0441\\u0456\\u0457: \".concat(version), refs);\n    }\n  }\n  function toggleMenu(refs) {\n    refs.list.classList.toggle('hidden');\n    refs.arrow.classList.toggle('rotate');\n  }\n\n  // Налаштування для десктопної та мобільної версій\n  setupLanguageToggle('desktop');\n  setupLanguageToggle('burger');\n})();\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/setOpenLanguageList.js?");

/***/ }),

/***/ "./src/js/setParamsReviewsSwiper.js":
/*!******************************************!*\
  !*** ./src/js/setParamsReviewsSwiper.js ***!
  \******************************************/
/***/ (() => {

eval("var swiperEl = document.querySelector('.reviews-swiper');\nif (swiperEl) {\n  // swiper parameters\n  var swiperParams = {\n    slidesPerView: 1,\n    breakpoints: {\n      390: {\n        slidesPerView: 1\n      },\n      1024: {\n        slidesPerView: 2\n      },\n      1440: {\n        slidesPerView: 3\n      }\n    }\n  };\n\n  // now we need to assign all parameters to Swiper element\n  Object.assign(swiperEl, swiperParams);\n\n  // and now initialize it\n  swiperEl.initialize();\n}\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/setParamsReviewsSwiper.js?");

/***/ }),

/***/ "./src/js/setlanguage.js":
/*!*******************************!*\
  !*** ./src/js/setlanguage.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var currentPath = window.location.pathname;\n  var lastSegment = currentPath.split('/').pop();\n  var languageLinks = document.querySelectorAll('.wrap-languages a');\n  var languageMenuLinks = document.querySelectorAll('.language-list a');\n  languageLinks.forEach(function (link) {\n    var baseHref = link.getAttribute('href');\n    if (currentPath === baseHref + lastSegment) {\n      link.classList.add('active');\n      return;\n    }\n    link.setAttribute('href', baseHref + lastSegment);\n  });\n  languageMenuLinks.forEach(function (link) {\n    var baseHref = link.getAttribute('href');\n    if (currentPath === baseHref + lastSegment) {\n      link.classList.add('active');\n      return;\n    }\n    link.setAttribute('href', baseHref + lastSegment);\n  });\n});\n\n//# sourceURL=webpack://car_detailing-front_end/./src/js/setlanguage.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://car_detailing-front_end/./src/styles/main.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;