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

/***/ "./js/theme.js":
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/
/***/ (() => {

eval("/* =============== PRELOADER =============== */\nvar preloader = document.querySelector('#preloader');\nvar body = document.querySelector('body');\nwindow.addEventListener('load', function () {\n  preloader.classList.add('deleted');\n  body.removeChild(preloader);\n});\n/*=============== MODAL ===============*/\n\nvar modal_View = document.querySelectorAll('.portfolio__modal');\nvar modal_Button = document.querySelectorAll('.portfolio__button.modal');\nvar modal_Close = document.querySelectorAll('.portfolio__modal-close');\n\nvar modal = function modal(Click) {\n  modal_View[Click].classList.toggle('is-active');\n};\n\nmodal_Button.forEach(function (btn, i) {\n  btn.addEventListener('click', function () {\n    modal(i);\n  });\n});\nmodal_Close.forEach(function (btn, i) {\n  btn.addEventListener('click', function () {\n    modal(i);\n  });\n});\n/*=============== SCROLL NAV ACTIVE LINK ===============*/\n\nvar section = document.querySelectorAll('section[id]');\n\nfunction scrollNavMenuActive() {\n  var scrollWindowY = document.documentElement.scrollTop;\n  section.forEach(function (current_Section) {\n    var section_Height = current_Section.clientHeight;\n    var section_Top = current_Section.offsetTop - 105;\n    var section_Id = current_Section.getAttribute('id');\n\n    if (scrollWindowY > section_Top && scrollWindowY <= section_Top + section_Height) {\n      document.querySelector(\".nav__menu a[href*=\".concat(section_Id, \"]\")).classList.add('is-active');\n    } else {\n      document.querySelector(\".nav__menu a[href*=\".concat(section_Id, \"]\")).classList.remove('is-active');\n    }\n  });\n}\n\nwindow.addEventListener('scroll', scrollNavMenuActive);\n\n//# sourceURL=webpack://sass/./js/theme.js?");

/***/ }),

/***/ "./css/theme.scss":
/*!************************!*\
  !*** ./css/theme.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sass/./css/theme.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./js/theme.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./css/theme.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;