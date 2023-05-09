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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n:root {\\n  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n}\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: navajowhite;\\n  color: black;\\n}\\nheader {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  background-color: coral;\\n  margin-bottom: 8px;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n#content {\\n  height: 90%;\\n  width: 100vw;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n  grid-template-rows: 50% 50%;\\n  gap: 24px;\\n  justify-items: center;\\n}\\n.card-container {\\n  grid-column: span 2;\\n  display: flex; \\n  gap: 36px;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding: 8px;\\n}\\n.weather-container {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n}\\n.weather-head {\\n  display: flex;\\n  gap: 24px;\\n}\\n.weather-image {\\n  height: 150px;\\n  border-radius: 8px;\\n}\\n.body-container {\\n  margin-top: 8px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  gap: 16px;\\n}\\nform {\\n  display: flex;\\n  gap: 4px;\\n  margin-bottom: 8px;\\n}\\nform>button {\\n  background-color: coral;\\n  border: 0px;\\n  padding: 4px;\\n  border-radius: 4px;\\n}\\ninput {\\n  border-radius: 4px;\\n  border: 2px solid coral;\\n}\\n.weather-widget {\\n  padding: 8px;\\n  background-color: coral;\\n  border-radius: 8px;\\n}\\n.sidebar {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n.sidebar-item {\\n  background-color: cornflowerblue;\\n  border: 0px;\\n  border-radius: 4px;\\n  padding: 8px;\\n}\\n.hour-card {\\n  background-color: cornflowerblue;\\n  padding: 8px;\\n  border-radius: 8px;\\n  border: 4px solid black;\\n}\\n.hour-card.current-hour {\\n  background-color: greenyellow;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_giphy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/giphy */ \"./src/modules/giphy.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helperFuncs */ \"./src/modules/helperFuncs.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n// eslint-disable-next-line no-unused-vars\n\n\nconst form = document.querySelector('form');\nconst input = document.querySelector('input');\nlet cards = [];\nfunction renderPage(data) {\n  data.hours.forEach((hour) => {\n    if ((0,_modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__.convertTime)(data.currentTime) === (0,_modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__.convertTime)(hour.time)) {\n      cards.push((0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createHourCard)(hour, true));\n    } else {\n      cards.push((0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createHourCard)(hour));\n    }\n  });\n  const hourCards = (0,_modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__.filterHourCards)(cards);\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.renderCards)(hourCards);\n  (0,_modules_giphy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.currentCondition.text).then((url) => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.addWeatherCard)(data, url);\n  });\n}\n(0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n  renderPage(data);\n});\nconst savedLocations = {};\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.clearWeather)();\n  cards = [];\n  (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value)\n    .then((data) => {\n      savedLocations[data.location] = data;\n      (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.renderSidebar)(savedLocations);\n      console.log(savedLocations);\n      renderPage(data);\n    })\n    .then(() => {\n      const sidebarLinks = document.querySelectorAll('.sidebar-item');\n      console.log(sidebarLinks);\n      sidebarLinks.forEach((link) => {\n        link.addEventListener('click', (event) => {\n          (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.clearWeather)();\n          renderPage(savedLocations[event.target.dataset.location]);\n        });\n      });\n    })\n    .catch((err) => {\n      console.error(err);\n    });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addWeatherCard\": () => (/* binding */ addWeatherCard),\n/* harmony export */   \"clearWeather\": () => (/* binding */ clearWeather),\n/* harmony export */   \"createHourCard\": () => (/* binding */ createHourCard),\n/* harmony export */   \"renderCards\": () => (/* binding */ renderCards),\n/* harmony export */   \"renderSidebar\": () => (/* binding */ renderSidebar)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/modules/helperFuncs.js\");\n\n\nlet weatherActive = false;\nconst weatherContainer = document.querySelector('.weather-container');\nconst cardContainer = document.querySelector('.card-container');\nconst sidebar = document.querySelector('.sidebar');\nfunction addImage(url, container) {\n  if (document.querySelector('.weather-image')) {\n    const oldImage = document.querySelector('.weather-image');\n    weatherContainer.removeChild(oldImage);\n  }\n  const image = new Image();\n  image.src = url;\n  image.classList.add('weather-image');\n  container.appendChild(image);\n}\nfunction createHourCard(hour, current) {\n  const container = document.createElement('div');\n  container.classList.add('hour-card');\n  if (current) container.classList.add('current-hour');\n  const timeCond = document.createElement('div');\n  timeCond.classList.add('time-and-condition');\n  const time = document.createElement('h2');\n  time.textContent = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.convertTime)(hour.time);\n  timeCond.appendChild(time);\n  const cond = document.createElement('div');\n  cond.classList.add('cond-img');\n  const image = new Image();\n  image.src = hour.condition.icon;\n  image.classList.add('hour-cond-img');\n  cond.appendChild(image);\n  timeCond.appendChild(cond);\n  container.appendChild(timeCond);\n  const temp = document.createElement('h4');\n  temp.classList.add('hour-temp');\n  temp.textContent = hour.temp;\n  container.appendChild(temp);\n  const cOfR = document.createElement('h4');\n  cOfR.classList.add('hour-rain-chance');\n  cOfR.textContent = `Rain: ${hour.rainChance}`;\n  container.appendChild(cOfR);\n  return container;\n}\nfunction renderCards(hourCards) {\n  hourCards.forEach((card) => {\n    cardContainer.appendChild(card);\n  });\n}\nfunction addWeatherCard(data, url) {\n  weatherActive = true;\n  const headContainer = document.createElement('div');\n  headContainer.classList.add('weather-head');\n  addImage(url, headContainer);\n  const innerContainer = document.createElement('div');\n  innerContainer.classList.add('loc-and-condition');\n  const location = document.createElement('h1');\n  location.classList.add('weather-location');\n  location.textContent = data.location;\n  innerContainer.appendChild(location);\n  const condition = document.createElement('h4');\n  condition.classList.add('weather-condition');\n  condition.textContent = data.currentCondition.text;\n  innerContainer.appendChild(condition);\n  headContainer.appendChild(innerContainer);\n  weatherContainer.appendChild(headContainer);\n  const bodyContainer = document.createElement('div');\n  bodyContainer.classList.add('body-container');\n  const tempAndUvContainer = document.createElement('div');\n  tempAndUvContainer.classList.add('temp-and-uv-container', 'weather-widget');\n  const temp = document.createElement('h4');\n  temp.classList.add('current-temp', 'weather-module');\n  temp.textContent = `Currently: ${data.currentTemp}`;\n  tempAndUvContainer.appendChild(temp);\n  const uv = document.createElement('h4');\n  uv.classList.add('weather-uv', 'weather-module');\n  uv.textContent = `UV Index: ${data.currentUV}`;\n  tempAndUvContainer.appendChild(uv);\n  bodyContainer.appendChild(tempAndUvContainer);\n  const highLowContainer = document.createElement('div');\n  highLowContainer.classList.add('high-low-container', 'weather-widget');\n  const lowTemp = document.createElement('h4');\n  lowTemp.classList.add('low-temp', 'weather-module');\n  lowTemp.textContent = `Low: ${data.minTemp}`;\n  highLowContainer.appendChild(lowTemp);\n  const highTemp = document.createElement('h4');\n  highTemp.classList.add('high-temp', 'weather-module');\n  highTemp.textContent = `High: ${data.maxTemp}`;\n  highLowContainer.appendChild(highTemp);\n  bodyContainer.appendChild(highLowContainer);\n  const windContainer = document.createElement('div');\n  windContainer.classList.add('wind-container', 'weather-widget');\n  const wind = document.createElement('h4');\n  wind.classList.add('wind', 'weather-module');\n  wind.textContent = `Wind: ${data.currentWind}`;\n  windContainer.appendChild(wind);\n  const gust = document.createElement('h4');\n  gust.classList.add('gust', 'weather-module');\n  gust.textContent = `Gust: ${data.currentGust}`;\n  windContainer.appendChild(gust);\n  bodyContainer.appendChild(windContainer);\n  const rainContainer = document.createElement('div');\n  rainContainer.classList.add('rain-and-humidity-container', 'weather-widget');\n  const rain = document.createElement('h4');\n  rain.classList.add('rain', 'weather-module');\n  rain.textContent = `Precipitation: ${data.currentPrecip}`;\n  rainContainer.appendChild(rain);\n  const humidity = document.createElement('h4');\n  humidity.classList.add('humidity', 'weather-module');\n  humidity.textContent = `Humidity: ${data.currentHumidity}`;\n  rainContainer.appendChild(humidity);\n  bodyContainer.appendChild(rainContainer);\n  weatherContainer.appendChild(bodyContainer);\n}\nfunction clearWeather() {\n  if (weatherActive) {\n    weatherContainer.innerHTML = '';\n    cardContainer.innerHTML = '';\n  }\n}\nfunction renderSidebar(locations) {\n  sidebar.innerHTML = '';\n  // eslint-disable-next-line no-restricted-syntax, no-unused-vars\n  for (const [key] of Object.entries(locations)) {\n    const sidebarBtn = document.createElement('button');\n    sidebarBtn.textContent = key;\n    sidebarBtn.classList.add('sidebar-item');\n    sidebarBtn.dataset.location = key;\n    sidebar.appendChild(sidebarBtn);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/giphy.js":
/*!******************************!*\
  !*** ./src/modules/giphy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchImage)\n/* harmony export */ });\nconst API_KEY = 'kt4Luu8Pd4JcGKajRewfofuDRnYPTpdo';\n\nasync function fetchImage(condition = 'sunny') {\n  try {\n    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${condition}&limit=1`);\n    const json = await response.json();\n    return json.data[0].images.original.url;\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/giphy.js?");

/***/ }),

/***/ "./src/modules/helperFuncs.js":
/*!************************************!*\
  !*** ./src/modules/helperFuncs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTime\": () => (/* binding */ convertTime),\n/* harmony export */   \"filterHourCards\": () => (/* binding */ filterHourCards)\n/* harmony export */ });\nfunction convertTime(dateStr) {\n  const date = new Date(dateStr);\n  const hours = date.getHours();\n  // % 12 will take time down to 12 hr format i.e. 13 % 12 -> 1\n  if (hours >= 12) {\n    return `${(hours % 12 > 0) ? hours % 12 : 12}PM`;\n  // eslint-disable-next-line no-else-return\n  } else if (!hours) {\n    return '12AM';\n  }\n  return `${hours}AM`;\n}\nfunction filterHourCards(hours) {\n  let index;\n  hours.forEach((hour) => {\n    if (hour.classList.contains('current-hour')) {\n      index = hours.indexOf(hour);\n    }\n  });\n  return Array.prototype.concat(hours.slice(index, hours.length));\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/helperFuncs.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\nconst API_KEY = '2db864c7cf004874a79172657230205';\n\nasync function fetchData(location) {\n  try {\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`);\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n}\nfunction formatData(data) {\n  const currentTemp = `${data.current.temp_f}\\u00B0 F`;\n  const currentCondition = data.current.condition;\n  const currentTime = data.current.last_updated;\n  const currentUV = data.current.uv;\n  const currentWind = `${data.current.wind_mph}mph`;\n  const currentGust = `${data.current.gust_mph}mph`;\n  const currentHumidity = `${data.current.humidity}%`;\n  const currentPrecip = `${data.current.precip_in}in`;\n  const maxTemp = `${data.forecast.forecastday[0].day.maxtemp_f}\\u00B0 F`;\n  const minTemp = `${data.forecast.forecastday[0].day.mintemp_f}\\u00B0 F`;\n  const location = `${data.location.name}, ${data.location.region}`;\n  const hours = [];\n  data.forecast.forecastday[0].hour.forEach((val) => {\n    const temp = `${val.temp_f}\\u00B0 F`;\n    const { time } = val;\n    const feelsLike = `${val.feelslike_f}\\u00B0 F`;\n    const gust = `${val.gust_mph}mph`;\n    const rainChance = `${val.chance_of_rain}%`;\n    const snowChance = `${val.chance_of_snow}%`;\n    const { condition } = val;\n    const humidity = `${val.humidity}%`;\n    const { uv } = val;\n    const wind = `${val.wind_mph}mph`;\n    hours.push({\n      temp, time, feelsLike, gust, rainChance, snowChance, condition, humidity, uv, wind,\n    });\n  });\n  const days = [];\n  data.forecast.forecastday.forEach((day) => {\n    const { date } = day;\n    const minDayTemp = `${day.day.mintemp_f}\\u00B0 F`;\n    const maxDayTemp = `${day.day.maxtemp_f}\\u00B0 F`;\n    const condition = day.day.condition.text;\n    days.push({\n      date, minDayTemp, maxDayTemp, condition,\n    });\n  });\n  return {\n    // eslint-disable-next-line max-len\n    location, currentTemp, currentCondition, currentTime, currentUV, currentWind, currentGust, currentHumidity, currentPrecip, maxTemp, minTemp, hours, days,\n  };\n}\nasync function getData(location = 'New York') {\n  try {\n    const data = await fetchData(location);\n    console.log(data);\n    return formatData(data);\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;