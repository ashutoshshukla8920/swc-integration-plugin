/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/**************************************************************************
 *  ADOBE CONFIDENTIAL
 *
 *  Copyright 2022 Adobe
 *  All Rights Reserved.
 *
 *  NOTICE:  All information contained herein is, and remains
 *  the property of Adobe and its suppliers, if any. The intellectual
 *  and technical concepts contained herein are proprietary to Adobe
 *  and its suppliers and are protected by all applicable intellectual
 *  property laws, including trade secret and copyright laws.
 *  Dissemination of this information or reproduction of this material
 *  is strictly forbidden unless prior written permission is obtained
 *  from Adobe.
 ***************************************************************************/

// import our stylesheets


// import the components we'll use in this page
// import '@spectrum-web-components/button/sp-button';
// import '@spectrum-web-components/field-label/sp-field-label';
// import '@spectrum-web-components/picker/sp-picker';
// import '@spectrum-web-components/menu/sp-menu';
// import '@spectrum-web-components/menu/sp-menu-item';
// import '@spectrum-web-components/dialog/sp-dialog';
// import '@spectrum-web-components/action-button/sp-action-button';
// import '@spectrum-web-components/asset/sp-asset';
// import '@spectrum-web-components/avatar/sp-avatar';
// import '@spectrum-web-components/banner/sp-banner';
// import '@spectrum-web-components/button-group/sp-button-group';
// import '@spectrum-web-components/card/sp-card';
// import '@spectrum-web-components/button/sp-button';
// import '@spectrum-web-components/checkbox/sp-checkbox';
// import '@spectrum-web-components/coachmark/sp-coachmark';
// import '@spectrum-web-components/color-handle/sp-color-handle';
// import '@spectrum-web-components/color-loupe/sp-color-loupe';
// import '@spectrum-web-components/color-slider/sp-color-slider';
// import '@spectrum-web-components/color-wheel/sp-color-wheel';
// import '@spectrum-web-components/divider/sp-divider';
// import '@spectrum-web-components/dropzone/sp-dropzone';
// import '@spectrum-web-components/field-group/sp-field-group';
// import '@spectrum-web-components/field-label/sp-field-label';
// import '@spectrum-web-components/icon/sp-icon';
// import '@spectrum-web-components/link/sp-link';
// import '@spectrum-web-components/menu/sp-menu';
// import '@spectrum-web-components/menu/sp-menu-group';
// import '@spectrum-web-components/menu/sp-menu-item';
// import '@spectrum-web-components/menu/sp-menu-divider';
// import '@spectrum-web-components/meter/sp-meter';
// import '@spectrum-web-components/number-field/sp-number-field';
// import '@spectrum-web-components/popover/sp-popover';
// import '@spectrum-web-components/radio/sp-radio';
// import '@spectrum-web-components/radio/sp-radio-group';
// import '@spectrum-web-components/search/sp-search';
// import '@spectrum-web-components/sidenav/sp-sidenav';
// import '@spectrum-web-components/sidenav/sp-sidenav-heading';
// import '@spectrum-web-components/sidenav/sp-sidenav-item';
// import '@spectrum-web-components/slider/sp-slider';
// import '@spectrum-web-components/split-view/sp-split-view';
// import '@spectrum-web-components/switch/sp-switch';
// import '@spectrum-web-components/tabs/sp-tabs';
// import '@spectrum-web-components/tabs/sp-tab';
// import '@spectrum-web-components/tabs/sp-tab-panel';
// import '@spectrum-web-components/tags/sp-tags';
// import '@spectrum-web-components/tags/sp-tag';
// import '@spectrum-web-components/textfield/sp-textfield';
// import '@spectrum-web-components/theme/sp-theme';
// import '@spectrum-web-components/toast/sp-toast';
// import '@spectrum-web-components/tooltip/sp-tooltip';
// import '@spectrum-web-components/tray/sp-tray';
// import '@spectrum-web-components/underlay/sp-underlay';
// import '@spectrum-web-components/accordion/sp-accordion.js';
// import '@spectrum-web-components/accordion/sp-accordion-item.js';
// import '@spectrum-web-components/card/sp-card.js';

// import '@spectrum-web-components/popover/sp-popover.js';
// import '@spectrum-web-components/icon/sp-icon.js';
// import '@spectrum-web-components/dialog/sp-dialog.js';

// import {
//     Menu,
//     MenuItem
// } from '@spectrum-web-components/menu/src/Menu.js';


// export class UxpSpMenu  extends Menu {
//     constructor() {
//         super();
//         console.log("UXP Sp Menu");
//     }

// };


// import '@spectrum-web-components/menu/sp-menu.js';
// import '@spectrum-web-components/menu/sp-menu-group.js';
// import '@spectrum-web-components/menu/sp-menu-divider.js';

// import {
//     MenuItem
// } from '@spectrum-web-components/menu/src/MenuItem.js';

// import {html, css, LitElement} from 'lit';

// export class UxpMenuItem  extends MenuItem {
//     static styles = [
//         MenuItem.styles,
//         css`
//         :host([selected]) .checkmark {
//         padding-left:-8px;
//         }`,
//       ];
// }

// customElements.define("sp-menu-item", UxpMenuItem);

}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map