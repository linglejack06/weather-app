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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_giphy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/giphy */ \"./src/modules/giphy.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helperFuncs */ \"./src/modules/helperFuncs.js\");\n\n\n\n\n\nconst form = document.querySelector('form');\nconst input = document.querySelector('input');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value)\n    .then((data) => {\n      console.log(data);\n      (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.addHourCard)(data.hours[0]);\n      (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.addWeatherCard)(data);\n      console.log((0,_modules_helperFuncs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data.hours[14].time));\n      return data.currentCondition.text;\n    })\n    .then((condition) => {\n      (0,_modules_giphy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(condition).then((url) => {\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.addImage)(url);\n      });\n    })\n    .catch((err) => {\n      console.error(err);\n    });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHourCard\": () => (/* binding */ addHourCard),\n/* harmony export */   \"addImage\": () => (/* binding */ addImage),\n/* harmony export */   \"addWeatherCard\": () => (/* binding */ addWeatherCard)\n/* harmony export */ });\nfunction addImage(url) {\n  if (document.querySelector('img')) {\n    const oldImage = document.querySelector('img');\n    document.body.removeChild(oldImage);\n  }\n  const image = new Image();\n  image.src = url;\n  document.body.appendChild(image);\n}\nfunction addHourCard(hour) {\n  const container = document.createElement('div');\n  container.classList.add('hour-container');\n  container.textContent = hour.time;\n  document.body.appendChild(container);\n}\nfunction addWeatherCard(data) {\n  const card = document.createElement('div');\n  card.classList.add('weather-card');\n  card.textContent = data.currentTemp;\n  document.body.appendChild(card);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convertTime)\n/* harmony export */ });\nfunction convertTime(dateStr) {\n  const date = new Date(dateStr);\n  const hours = date.getHours();\n  // % 12 will take time down to 12 hr format i.e. 13 % 12 -> 1\n  if (hours > 12) {\n    return `${hours % 12}PM`;\n  // eslint-disable-next-line no-else-return\n  } else if (!hours) {\n    return '12AM';\n  }\n  return `${hours}AM`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/helperFuncs.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\nconst API_KEY = '2db864c7cf004874a79172657230205';\n\nasync function fetchData(location) {\n  try {\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`);\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n}\nfunction formatData(data) {\n  const currentTemp = `${data.current.temp_f}\\u00B0 F`;\n  const currentCondition = data.current.condition;\n  const maxTemp = `${data.forecast.forecastday[0].day.maxtemp_f}\\u00B0 F`;\n  const minTemp = `${data.forecast.forecastday[0].day.mintemp_f}\\u00B0 F`;\n  const location = `${data.location.name}, ${data.location.region}`;\n  const hours = [];\n  data.forecast.forecastday[0].hour.forEach((val) => {\n    const temp = `${val.temp_f}\\u00B0 F`;\n    const { time } = val;\n    const feelsLike = `${val.feelslike_f}\\u00B0 F`;\n    const gust = `${val.gust_mph}mph`;\n    const rainChance = `${val.chance_of_rain}%`;\n    const snowChance = `${val.chance_of_snow}%`;\n    const { condition } = val;\n    const humidity = `${val.humidity}%`;\n    const { uv } = val;\n    const wind = `${val.wind_mph}mph`;\n    hours.push({\n      temp, time, feelsLike, gust, rainChance, snowChance, condition, humidity, uv, wind,\n    });\n  });\n  const days = [];\n  data.forecast.forecastday.forEach((day) => {\n    const { date } = day;\n    const minDayTemp = `${day.day.mintemp_f}\\u00B0 F`;\n    const maxDayTemp = `${day.day.maxtemp_f}\\u00B0 F`;\n    const condition = day.day.condition.text;\n    days.push({\n      date, minDayTemp, maxDayTemp, condition,\n    });\n  });\n  return {\n    location, currentTemp, currentCondition, maxTemp, minTemp, hours, days,\n  };\n}\nasync function getData(location = 'New York') {\n  try {\n    const data = await fetchData(location);\n    return formatData(data);\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;