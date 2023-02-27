/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#sidebar {\\n  overflow: scroll;\\n  grid-column: 1/2;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #2176FF;\\n  color: #F0EFF4;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 42px; }\\n  #sidebar .logo {\\n    height: 120px;\\n    display: flex;\\n    align-items: center;\\n    gap: 12px;\\n    justify-content: center; }\\n    #sidebar .logo h1 {\\n      color: white;\\n      font-size: 52px; }\\n    #sidebar .logo img {\\n      width: 64px; }\\n  #sidebar .sidebar-section {\\n    display: flex;\\n    flex-direction: column; }\\n    #sidebar .sidebar-section h2 {\\n      padding-left: 32px;\\n      text-transform: uppercase;\\n      margin-bottom: 12px; }\\n    #sidebar .sidebar-section ul {\\n      display: flex;\\n      flex-direction: column;\\n      align-items: end;\\n      list-style: none; }\\n      #sidebar .sidebar-section ul li {\\n        width: 100%; }\\n        #sidebar .sidebar-section ul li a {\\n          padding: 12px 0 12px 64px;\\n          display: flex;\\n          align-items: center;\\n          gap: 12px;\\n          text-decoration: none;\\n          color: white;\\n          font-size: 1.3rem;\\n          transition-duration: 0.3s; }\\n          #sidebar .sidebar-section ul li a svg {\\n            width: 1.5rem; }\\n          #sidebar .sidebar-section ul li a.open {\\n            background-color: #33A1FD;\\n            border-right: 8px solid #23F0C7;\\n            box-shadow: 0px 5px 8px 0px rgba(49, 57, 60, 0.2);\\n            color: white; }\\n          #sidebar .sidebar-section ul li a:hover {\\n            background-color: #33A1FD; }\\n\\n.content {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 32px 64px; }\\n  .content .header {\\n    text-transform: uppercase;\\n    font-size: 2rem;\\n    font-weight: 700;\\n    color: #31393C; }\\n    .content .header hr {\\n      width: 100%;\\n      height: 6px;\\n      border: 0;\\n      margin: 6px 0;\\n      background: linear-gradient(90deg, #33A1FD, #23F0C7); }\\n  .content .todo-list {\\n    padding: 32px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 16px; }\\n    .content .todo-list .add-item-btn, .content .todo-list .todo-item {\\n      display: flex;\\n      align-items: center;\\n      width: 100%;\\n      height: 64px;\\n      padding: 16px 24px;\\n      border-radius: 6px;\\n      gap: 16px; }\\n    .content .todo-list .add-item-btn {\\n      background-color: #E8E7EE;\\n      color: #535F65;\\n      border: none;\\n      cursor: pointer;\\n      font-size: 24px;\\n      transition-duration: 0.2s; }\\n      .content .todo-list .add-item-btn svg {\\n        width: 36px; }\\n      .content .todo-list .add-item-btn:hover {\\n        color: #31393C;\\n        background-color: #DDDBE6; }\\n    .content .todo-list .todo-item {\\n      background-color: white; }\\n      .content .todo-list .todo-item[priority='0'] {\\n        border-left: 16px solid #23F0C7; }\\n      .content .todo-list .todo-item[priority='1'] {\\n        border-left: 16px solid #33A1FD; }\\n      .content .todo-list .todo-item[priority='2'] {\\n        border-left: 16px solid #DB5461; }\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\nhtml, button {\\n  font-size: 18px;\\n  font-family: 'Nunito', sans-serif; }\\n\\nbody {\\n  background-color: #F0EFF4; }\\n\\nmain {\\n  width: 100vw;\\n  height: 100vh;\\n  display: grid;\\n  grid-template-columns: 320px 1fr;\\n  color: #31393C; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _tabFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabFactory */ \"./src/tabFactory.js\");\n/* harmony import */ var _todoStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoStorage */ \"./src/todoStorage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\n\r\n\r\n\r\nconst contentContaier = document.getElementById('content-container');\r\n\r\nconst allBtn = document.getElementById('nav-all');\r\nconst todayBtn = document.getElementById('nav-today');\r\nconst weekBtn = document.getElementById('nav-week');\r\nconst completedbtn = document.getElementById('nav-completed');\r\n\r\nswitchTab((0,_tabFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('All tasks', _todoStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllTodos()), allBtn);\r\n\r\nallBtn.addEventListener('click', () => {\r\n\tswitchTab((0,_tabFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('All tasks', _todoStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllTodos()), allBtn);\r\n});\r\ntodayBtn.addEventListener('click', () => {\r\n\tswitchTab((0,_tabFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Tasks for today'), todayBtn);\r\n});\r\nweekBtn.addEventListener('click', () => {\r\n\tswitchTab((0,_tabFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Tasks for this week'), weekBtn);\r\n});\r\ncompletedbtn.addEventListener('click', () => {\r\n\tswitchTab((0,_tabFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Completed tasks'), completedbtn);\r\n});\r\n\r\nfunction switchTab(tab, navBtn) {\r\n\tclearContent();\r\n\tcontentContaier.appendChild(tab);\r\n\tnavBtn?.classList.add('open');\r\n}\r\n\r\nfunction clearContent() {\r\n\twhile (contentContaier.lastChild) {\r\n\t\tcontentContaier.removeChild(contentContaier.lastChild);\r\n\t}\r\n\tconst openNavBtns = document.getElementsByClassName('open');\r\n\tfor (let btn of openNavBtns) {\r\n\t\tbtn.classList.remove('open');\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/script.js?");

/***/ }),

/***/ "./src/tabFactory.js":
/*!***************************!*\
  !*** ./src/tabFactory.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabFactory)\n/* harmony export */ });\nfunction tabFactory(tabName, todoList = []) {\r\n\tconst content = document.createElement('div');\r\n\tcontent.classList.add('content');\r\n\r\n\t// header\r\n\tconst header = document.createElement('div');\r\n\theader.classList.add('header');\r\n\tconst title = document.createElement('h3');\r\n\ttitle.textContent = tabName;\r\n\theader.appendChild(title);\r\n\tconst divider = document.createElement('hr');\r\n\theader.appendChild(divider);\r\n\tcontent.appendChild(header);\r\n\r\n\t// todo list\r\n\r\n\tconst list = document.createElement('div');\r\n\tlist.classList.add('todo-list');\r\n\tcontent.appendChild(list);\r\n\r\n\tconst addItem = document.createElement('button');\r\n\taddItem.classList.add('add-item-btn');\r\n\tconst addIcon = document.createElement('svg');\r\n\taddItem.innerHTML =\r\n\t\t'<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"2.2\" stroke=\"currentColor\"> <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\" /> </svg><h4>Add task</h4>';\r\n\tlist.appendChild(addItem);\r\n\r\n\tfor (let todo of todoList) {\r\n\t\tlist.appendChild(todoItemFactory(todo));\r\n\t}\r\n\r\n\treturn content;\r\n}\r\n\r\nfunction todoItemFactory(todo) {\r\n\tconst item = document.createElement('div');\r\n\titem.classList.add('todo-item');\r\n\titem.textContent = todo.title + ' ' + todo.id;\r\n\titem.setAttribute('priority', todo.priority);\r\n\treturn item;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/tabFactory.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _uidGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uidGenerator */ \"./src/uidGenerator.js\");\n\r\n\r\nconst MAX_PRIORITY = 3;\r\n\r\nclass Todo {\r\n\tconstructor(title, dueDate, priority = 0) {\r\n\t\tthis._id = 'todoid_' + (0,_uidGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t\tthis.title = title;\r\n\t\tthis.dueDate = dueDate;\r\n\t\tthis._priority = priority;\r\n\t}\r\n\r\n\tget priority() {\r\n\t\treturn this._priority;\r\n\t}\r\n\r\n\tset priority(value) {\r\n\t\tif (value < 0 || value > MAX_PRIORITY) {\r\n\t\t\tthrow new Error(`Invalid task priority: ${value}`);\r\n\t\t}\r\n\r\n\t\tthis._priority = this.priority;\r\n\t}\r\n\r\n\tget id() {\r\n\t\treturn this._id;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoRegistry.js":
/*!*****************************!*\
  !*** ./src/todoRegistry.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\r\n\t// initialize\r\n\tlet registry;\r\n\r\n\tif (!localStorage.getItem('todoRegistry')) {\r\n\t\tregistry = { todoKeys: [] };\r\n\t\tlocalStorage.setItem('todoRegistry', JSON.stringify(registry));\r\n\t} else {\r\n\t\tregistry = JSON.parse(localStorage.getItem('todoRegistry'));\r\n\t}\r\n\r\n\tfunction _updateRegistry() {\r\n\t\tlocalStorage.setItem('todoRegistry', JSON.stringify(registry));\r\n\t}\r\n\r\n\tfunction addKey(key) {\r\n\t\tif (registry.todoKeys.includes(key)) {\r\n\t\t\tthrow RegistryException.duplicateKey(key);\r\n\t\t}\r\n\r\n\t\tregistry.todoKeys.push(key);\r\n\t\t_updateRegistry();\r\n\t}\r\n\r\n\tfunction deleteKey(key) {\r\n\t\tconst index = registry.todoKeys.indexOf(key);\r\n\t\tif (index == -1) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tregistry.todoKeys.splice(index, 1);\r\n\t\t_updateRegistry();\r\n\t}\r\n\r\n\tfunction containsKey(key) {\r\n\t\treturn registry.todoKeys.includes(key);\r\n\t}\r\n\r\n\tfunction getKeys() {\r\n\t\treturn registry.todoKeys;\r\n\t}\r\n\r\n\treturn {\r\n\t\taddKey,\r\n\t\tdeleteKey,\r\n\t\tcontainsKey,\r\n\t\tgetKeys,\r\n\t};\r\n})());\r\n\r\nclass RegistryException extends Error {\r\n\tconstructor(message) {\r\n\t\tsuper(message);\r\n\t}\r\n\r\n\tstatic duplicateKey(key) {\r\n\t\treturn new RegistryException(`Key ${key} already exists in registry`);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoRegistry.js?");

/***/ }),

/***/ "./src/todoStorage.js":
/*!****************************!*\
  !*** ./src/todoStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoRegistry.js */ \"./src/todoRegistry.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function TodoStorage() {\r\n\tfunction addTodo(todo) {\r\n\t\tconst id = todo.id;\r\n\t\t_todoRegistry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addKey(id);\r\n\t\tlocalStorage.setItem(id, JSON.stringify(todo));\r\n\t}\r\n\r\n\tfunction deleteTodo(todo) {\r\n\t\tconst id = todo.id;\r\n\t\t_todoRegistry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteKey(id);\r\n\t\tlocalStorage.removeItem(id);\r\n\t}\r\n\r\n\tfunction updateTodo(todo) {\r\n\t\tconst id = todo.id;\r\n\t\tif (!_todoRegistry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].containsKey(id)) {\r\n\t\t\taddTodo(todo);\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem(id, JSON.stringify(todo));\r\n\t}\r\n\r\n\tfunction getAllTodos() {\r\n\t\tconst keys = _todoRegistry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getKeys();\r\n\t\tconst todos = [];\r\n\r\n\t\tfor (let key of keys) {\r\n\t\t\tconst todo = _getTodoById(key);\r\n\t\t\tif (todo == null) {\r\n\t\t\t\tthrow StorageException.valueNotExists(key);\r\n\t\t\t}\r\n\t\t\ttodos.push(todo);\r\n\t\t}\r\n\r\n\t\treturn todos;\r\n\t}\r\n\r\n\tfunction _getTodoById(key) {\r\n\t\treturn Object.assign(new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), JSON.parse(localStorage.getItem(key)));\r\n\t}\r\n\r\n\treturn {\r\n\t\taddTodo,\r\n\t\tdeleteTodo,\r\n\t\tupdateTodo,\r\n\t\tgetAllTodos,\r\n\t};\r\n})());\r\n\r\nclass StorageException extends Error {\r\n\tconstructor(message) {\r\n\t\tsuper(message);\r\n\t}\r\n\r\n\tstatic valueNotExists(key) {\r\n\t\treturn new StorageException(`Value for key ${key} does not found`);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoStorage.js?");

/***/ }),

/***/ "./src/uidGenerator.js":
/*!*****************************!*\
  !*** ./src/uidGenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createUid)\n/* harmony export */ });\nfunction createUid() {\r\n\treturn Date.now().toString(36) + Math.random().toString(36).slice(0, 2);\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/uidGenerator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;