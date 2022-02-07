/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/site.css":
/*!*****************************!*\
  !*** ./src/styles/site.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3NpdGUuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc2l0ZS5jc3M/MDdjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/site.css\n");

/***/ }),

/***/ "./src/scripts/pageService.js":
/*!************************************!*\
  !*** ./src/scripts/pageService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageService\": () => (/* binding */ PageService)\n/* harmony export */ });\nclass PageService {\r\n\r\n    pageHistoryStack = [];\r\n\r\n    /**\r\n     * \r\n     * @param {Event} page \r\n     */\r\n    openPage(page) {\r\n        const pageName = page.attributes['data-paneltype'].value;\r\n        this.togglePage(pageName);\r\n    }\r\n\r\n    togglePage(pageName) {\r\n        this.pageHistoryStack.push(pageName);\r\n        this.togglePageTab(pageName);\r\n        this.togglePagePanel(pageName);\r\n    }\r\n\r\n    togglePageTab(pageName) {\r\n\r\n        if (!pageName)\r\n            return;\r\n\r\n        let tab = [...document.querySelectorAll(\".editor-tab\")].find(tab => tab.attributes['data-paneltype'].value === pageName);\r\n        if (!tab) {\r\n            const tabToCreate = `\r\n            <div class=\"editor-tab\" data-paneltype=\"${pageName}\">\r\n                <span class=\"clickable\" \r\n                    onclick=\"pageService.togglePage('${pageName}')\">\r\n                    ${this.upperCase(pageName)}\r\n                </span>\r\n                <span class=\"close-button clickable\" onclick=\"pageService.closePageTab('${pageName}')\">&times;</span>\r\n            </div>\r\n        `;\r\n\r\n            document.getElementById('header-items').insertAdjacentHTML('afterbegin', tabToCreate);\r\n        }\r\n    }\r\n\r\n    togglePagePanel(pageName) {\r\n        const pageToOpen = `section-${pageName}`;\r\n\r\n        const allPages = document.querySelectorAll(\".editor-section\");\r\n        [...allPages].filter(p => p.id !== pageToOpen).forEach(page => {\r\n            page.classList.add('hidden');\r\n        });\r\n\r\n        [...allPages].find(p => p.id === pageToOpen)?.classList?.remove(\"hidden\");\r\n    }\r\n\r\n    closePageTab(pageName) {\r\n        this.pageHistoryStack = this.pageHistoryStack.filter(item => item !== pageName);\r\n        document.querySelector(`.editor-tab[data-paneltype=\"${pageName}\"]`).remove();\r\n\r\n        let newPage = \"\";\r\n        if (this.pageHistoryStack.length) {\r\n            newPage = this.pageHistoryStack.pop();\r\n        }\r\n        this.togglePage(newPage);\r\n\r\n        event?.stopPropagation();\r\n    }\r\n\r\n    upperCase(string) {\r\n        return string.charAt(0).toUpperCase() + string.slice(1);\r\n    }\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlU2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFLHNCQUFzQjtBQUN0QjtBQUNBLDBGQUEwRixTQUFTLFdBQVc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VTZXJ2aWNlLmpzP2E5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwYWdlSGlzdG9yeVN0YWNrID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IHBhZ2UgXHJcbiAgICAgKi9cclxuICAgIG9wZW5QYWdlKHBhZ2UpIHtcclxuICAgICAgICBjb25zdCBwYWdlTmFtZSA9IHBhZ2UuYXR0cmlidXRlc1snZGF0YS1wYW5lbHR5cGUnXS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhZ2UocGFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBhZ2UocGFnZU5hbWUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VIaXN0b3J5U3RhY2sucHVzaChwYWdlTmFtZSk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQYWdlVGFiKHBhZ2VOYW1lKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhZ2VQYW5lbChwYWdlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGFnZVRhYihwYWdlTmFtZSkge1xyXG5cclxuICAgICAgICBpZiAoIXBhZ2VOYW1lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0YWIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0b3ItdGFiXCIpXS5maW5kKHRhYiA9PiB0YWIuYXR0cmlidXRlc1snZGF0YS1wYW5lbHR5cGUnXS52YWx1ZSA9PT0gcGFnZU5hbWUpO1xyXG4gICAgICAgIGlmICghdGFiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYlRvQ3JlYXRlID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yLXRhYlwiIGRhdGEtcGFuZWx0eXBlPVwiJHtwYWdlTmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xpY2thYmxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25jbGljaz1cInBhZ2VTZXJ2aWNlLnRvZ2dsZVBhZ2UoJyR7cGFnZU5hbWV9JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMudXBwZXJDYXNlKHBhZ2VOYW1lKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnV0dG9uIGNsaWNrYWJsZVwiIG9uY2xpY2s9XCJwYWdlU2VydmljZS5jbG9zZVBhZ2VUYWIoJyR7cGFnZU5hbWV9JylcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1pdGVtcycpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRhYlRvQ3JlYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGFnZVBhbmVsKHBhZ2VOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZVRvT3BlbiA9IGBzZWN0aW9uLSR7cGFnZU5hbWV9YDtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRvci1zZWN0aW9uXCIpO1xyXG4gICAgICAgIFsuLi5hbGxQYWdlc10uZmlsdGVyKHAgPT4gcC5pZCAhPT0gcGFnZVRvT3BlbikuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgWy4uLmFsbFBhZ2VzXS5maW5kKHAgPT4gcC5pZCA9PT0gcGFnZVRvT3Blbik/LmNsYXNzTGlzdD8ucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUGFnZVRhYihwYWdlTmFtZSkge1xyXG4gICAgICAgIHRoaXMucGFnZUhpc3RvcnlTdGFjayA9IHRoaXMucGFnZUhpc3RvcnlTdGFjay5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBwYWdlTmFtZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRvci10YWJbZGF0YS1wYW5lbHR5cGU9XCIke3BhZ2VOYW1lfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3UGFnZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZUhpc3RvcnlTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbmV3UGFnZSA9IHRoaXMucGFnZUhpc3RvcnlTdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVQYWdlKG5ld1BhZ2UpO1xyXG5cclxuICAgICAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBwZXJDYXNlKHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pageService.js\n");

/***/ }),

/***/ "./src/scripts/site.js":
/*!*****************************!*\
  !*** ./src/scripts/site.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_site_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/site.css */ \"./src/styles/site.css\");\n/* harmony import */ var _pageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageService */ \"./src/scripts/pageService.js\");\n\r\n \"./pageService.js\";\r\n\r\nwindow.pageService = new _pageService__WEBPACK_IMPORTED_MODULE_1__.PageService();\r\n\r\nif (document.readyState !== 'loading') {\r\n    pageService.togglePage('home');\r\n} else {\r\n    document.addEventListener('DOMContentLoaded', function () {\r\n        pageService.togglePage('home');\r\n    });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE0QjtBQUNnQixDQUFDO0FBQzdDO0FBQ0EseUJBQXlCLHFEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2l0ZS5qcz83YzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zaXRlLmNzc1wiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuL3BhZ2VTZXJ2aWNlXCI7IFwiLi9wYWdlU2VydmljZS5qc1wiO1xyXG5cclxud2luZG93LnBhZ2VTZXJ2aWNlID0gbmV3IFBhZ2VTZXJ2aWNlKCk7XHJcblxyXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XHJcbiAgICBwYWdlU2VydmljZS50b2dnbGVQYWdlKCdob21lJyk7XHJcbn0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBhZ2VTZXJ2aWNlLnRvZ2dsZVBhZ2UoJ2hvbWUnKTtcclxuICAgIH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/site.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/site.js");
/******/ 	
/******/ })()
;