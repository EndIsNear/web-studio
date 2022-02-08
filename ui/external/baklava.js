(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("BaklavaJS", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["BaklavaJS"] = factory(require("vue"));
	else
		root["BaklavaJS"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _decorators_InjectReactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72);
/* harmony import */ var _decorators_Provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _decorators_Provide__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _decorators_ProvideReactive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74);
/* harmony import */ var _decorators_Ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75);
/* harmony import */ var _decorators_VModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76);
/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>

















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDecorator; });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ __webpack_exports__["b"] = (Component);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _connection__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _eventDataTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var _nodeInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _nodeOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85);










/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resizeObservers; });
var resizeObservers = [];



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return needToProduceProvide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return produceProvide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reactiveInjectKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inheritInjected; });
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isReplacedElement; });
var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDomElementOfNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDomElements; });
function getDomElementOfNode(node) {
    return document.getElementById(node.id);
}
function getDomElements(ni) {
    var nodeDOM = document.getElementById(ni.parent.id);
    var interfaceDOM = document.getElementById(ni.id);
    var portDOM = interfaceDOM === null || interfaceDOM === void 0 ? void 0 : interfaceDOM.getElementsByClassName("__port");
    return {
        node: nodeDOM,
        interface: interfaceDOM,
        port: (portDOM && portDOM.length > 0) ? portDOM[0] : null
    };
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMetadata; });
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
var global = typeof window !== 'undefined' ? window : {};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/ConnectionView.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateBoxSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calculateBoxSizes; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);




var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(_utils_global__WEBPACK_IMPORTED_MODULE_3__[/* global */ "a"].navigator && _utils_global__WEBPACK_IMPORTED_MODULE_3__[/* global */ "a"].navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return Object.freeze({
        inlineSize: (switchSizes ? blockSize : inlineSize) || 0,
        blockSize: (switchSizes ? inlineSize : blockSize) || 0
    });
};
var zeroBoxes = Object.freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__[/* DOMRectReadOnly */ "a"](0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__[/* isHidden */ "b"])(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__[/* isSVG */ "d"])(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = Object.freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__[/* DOMRectReadOnly */ "a"](paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverBoxOptions */ "a"].DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverBoxOptions */ "a"].BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPortCoordinates; });
function getPortCoordinates(resolved) {
    if (resolved.node && resolved.interface && resolved.port) {
        return [
            resolved.node.offsetLeft + resolved.interface.offsetLeft + resolved.port.offsetLeft + resolved.port.clientWidth / 2,
            resolved.node.offsetTop + resolved.interface.offsetTop + resolved.port.offsetTop + resolved.port.clientHeight / 2
        ];
    }
    else {
        return [0, 0];
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserverBoxOptions; });
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserverController; });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(109);
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__[/* ResizeObserverDetail */ "a"](resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__[/* resizeObservers */ "a"].push(detail);
            detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__[/* ResizeObservation */ "a"](target, options && options.box));
            Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__[/* updateCount */ "b"])(1);
            _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__[/* scheduler */ "a"].schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__[/* resizeObservers */ "a"].splice(_utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__[/* resizeObservers */ "a"].indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__[/* updateCount */ "b"])(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialHook = exports.Hook = exports.PreventableBaklavaEvent = exports.BaklavaEvent = void 0;
var tslib_1 = __webpack_require__(0);
/** Main event class for Baklava */
var BaklavaEvent = /** @class */ (function () {
    function BaklavaEvent() {
        this.listeners = new Map();
    }
    /**
     * Subscribe to the event
     * @param token A token that can be used to unsubscribe from the event later on
     * @param listener A callback that will be invoked when the event occurs
     */
    BaklavaEvent.prototype.addListener = function (token, listener) {
        this.listeners.set(token, listener);
    };
    /**
     * Remove a listener
     * @param token The token that was specified when subscribing to the listener.
     * An invalid token does not result in an error.
     */
    BaklavaEvent.prototype.removeListener = function (token) {
        if (this.listeners.has(token)) {
            this.listeners.delete(token);
        }
    };
    /**
     * Invoke all listeners
     * @param data The data to invoke the listeners with.
     */
    BaklavaEvent.prototype.emit = function (data) {
        this.listeners.forEach(function (l) { return l(data); });
    };
    return BaklavaEvent;
}());
exports.BaklavaEvent = BaklavaEvent;
/** Extension for the [[BaklavaEvent]] class. A listener can return `false` to prevent
 * this event from happening.
 */
var PreventableBaklavaEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PreventableBaklavaEvent, _super);
    function PreventableBaklavaEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Invoke all listeners.
     * @param data The data to invoke all listeners with
     * @returns `true` when one of the listeners requested to prevent the event, otherwise `false`
     */
    PreventableBaklavaEvent.prototype.emit = function (data) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(this.listeners.values())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var l = _c.value;
                if (l(data) === false) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    return PreventableBaklavaEvent;
}(BaklavaEvent));
exports.PreventableBaklavaEvent = PreventableBaklavaEvent;
/** Base class for hooks in Baklava */
var Hook = /** @class */ (function () {
    function Hook() {
        this.tapMap = new Map();
        this.taps = [];
    }
    Hook.prototype.tap = function (token, tapFn) {
        if (this.tapMap.has(token)) {
            this.untap(token);
        }
        this.tapMap.set(token, tapFn);
        this.taps.push(tapFn);
    };
    Hook.prototype.untap = function (token) {
        if (this.tapMap.has(token)) {
            var tapFn = this.tapMap.get(token);
            this.tapMap.delete(token);
            var i = this.taps.indexOf(tapFn);
            if (i >= 0) {
                this.taps.splice(i, 1);
            }
        }
    };
    return Hook;
}());
exports.Hook = Hook;
/** This class will run the taps one after each other and pass the data from every tap to another. */
var SequentialHook = /** @class */ (function (_super) {
    tslib_1.__extends(SequentialHook, _super);
    function SequentialHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SequentialHook.prototype.execute = function (data) {
        var e_2, _a;
        var currentValue = data;
        try {
            for (var _b = tslib_1.__values(this.taps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tapFn = _c.value;
                currentValue = tapFn(currentValue);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return currentValue;
    };
    return SequentialHook;
}(Hook));
exports.SequentialHook = SequentialHook;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Editor.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);





var EditorView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorView, _super);
    function EditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeeditor = _this;
        _this.selectedNodeViews = [];
        _this.temporaryConnection = null;
        _this.hoveringOver = null;
        _this.selectedNodes = [];
        _this.ctrlPressed = false;
        _this.draggingStartPoint = null;
        _this.draggingStartPanning = null;
        // Reason: https://github.com/newcat/baklavajs/issues/54
        _this.counter = 0;
        _this.contextMenu = {
            items: [],
            show: false,
            x: 0,
            y: 0,
        };
        return _this;
    }
    Object.defineProperty(EditorView.prototype, "styles", {
        get: function () {
            return {
                "transform-origin": "0 0",
                "transform": "scale(" + this.plugin.scaling + ") translate(" + this.plugin.panning.x + "px, " + this.plugin.panning.y + "px)",
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "backgroundStyle", {
        get: function () {
            var positionLeft = this.plugin.panning.x * this.plugin.scaling;
            var positionTop = this.plugin.panning.y * this.plugin.scaling;
            var size = this.plugin.scaling * this.plugin.backgroundGrid.gridSize;
            var subSize = size / this.plugin.backgroundGrid.gridDivision;
            var backgroundSize = size + "px " + size + "px, " + size + "px " + size + "px";
            var subGridBackgroundSize = this.plugin.scaling > this.plugin.backgroundGrid.subGridVisibleThreshold
                ? ", " + subSize + "px " + subSize + "px, " + subSize + "px " + subSize + "px"
                : "";
            return {
                "background-position": "left " + positionLeft + "px top " + positionTop + "px",
                "background-size": backgroundSize + " " + subGridBackgroundSize,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "nodes", {
        get: function () {
            return this.plugin.editor ? this.plugin.editor.nodes : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "connections", {
        get: function () {
            return this.plugin.editor ? this.plugin.editor.connections : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "hasEnginePlugin", {
        get: function () {
            var e_1, _a;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.plugin.editor.plugins.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (p.type === "EnginePlugin") {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    EditorView.prototype.mounted = function () {
        var _this = this;
        this.updateContextMenu();
        this.plugin.editor.events.registerNodeType.addListener(this, function () { return _this.updateContextMenu(); });
        this.plugin.editor.hooks.load.tap(this, function (s) {
            _this.counter++;
            return s;
        });
        this.clipboard = new _clipboard__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](this.plugin.editor);
        this.history = new _history__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.plugin);
    };
    EditorView.prototype.updateContextMenu = function () {
        var _this = this;
        var categories = Array.from(this.plugin.editor.nodeCategories.keys())
            .filter(function (c) { return c !== "default"; })
            .map(function (c) {
            var nodes = Array.from(_this.plugin.editor.nodeCategories.get(c)).map(function (n) { return ({
                value: "addNode:" + n,
                label: _this.plugin.nodeTypeAliases[n] || n,
            }); });
            return { label: c, submenu: nodes };
        });
        var defaultNodes = this.plugin.editor.nodeCategories.get("default").map(function (n) { return ({
            value: "addNode:" + n,
            label: _this.plugin.nodeTypeAliases[n] || n,
        }); });
        var addNodeSubmenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(categories);
        if (categories.length > 0 && defaultNodes.length > 0) {
            addNodeSubmenu.push({ isDivider: true });
        }
        addNodeSubmenu.push.apply(addNodeSubmenu, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultNodes));
        this.contextMenu.items = [
            {
                label: "Add Node",
                submenu: addNodeSubmenu,
            },
            {
                label: "Copy Nodes",
                value: "copy",
                disabledFunction: function () { return _this.selectedNodes.length === 0; },
            },
            {
                label: "Paste Nodes",
                value: "paste",
                disabledFunction: function () { return _this.clipboard.isEmpty; },
            },
        ];
    };
    EditorView.prototype.hoveredOver = function (ni) {
        this.hoveringOver = ni;
        if (ni && this.temporaryConnection) {
            this.temporaryConnection.to = ni;
            this.temporaryConnection.status = this.plugin.editor.checkConnection(this.temporaryConnection.from, this.temporaryConnection.to)
                ? _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].ALLOWED
                : _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].FORBIDDEN;
            if (this.hasEnginePlugin) {
                this.connections
                    .filter(function (c) { return c.to === ni; })
                    .forEach(function (c) {
                    c.isInDanger = true;
                });
            }
        }
        else if (!ni && this.temporaryConnection) {
            this.$set(this.temporaryConnection, "to", undefined);
            this.temporaryConnection.status = _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].NONE;
            this.connections.forEach(function (c) {
                c.isInDanger = false;
            });
        }
    };
    EditorView.prototype.mouseMoveHandler = function (ev) {
        if (this.temporaryConnection) {
            this.temporaryConnection.mx = ev.offsetX / this.plugin.scaling - this.plugin.panning.x;
            this.temporaryConnection.my = ev.offsetY / this.plugin.scaling - this.plugin.panning.y;
        }
        else if (this.draggingStartPoint) {
            var dx = ev.screenX - this.draggingStartPoint.x;
            var dy = ev.screenY - this.draggingStartPoint.y;
            this.plugin.panning.x = this.draggingStartPanning.x + dx / this.plugin.scaling;
            this.plugin.panning.y = this.draggingStartPanning.y + dy / this.plugin.scaling;
        }
    };
    EditorView.prototype.mouseDown = function (ev) {
        var _this = this;
        if (ev.button === 0) {
            if (this.hoveringOver) {
                // if this interface is an input and already has a connection
                // to it, remove the connection and make it temporary
                var connection = this.connections.find(function (c) { return c.to === _this.hoveringOver; });
                if (this.hoveringOver.isInput && connection) {
                    this.temporaryConnection = {
                        status: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].NONE,
                        from: connection.from,
                    };
                    this.plugin.editor.removeConnection(connection);
                }
                else {
                    this.temporaryConnection = {
                        status: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].NONE,
                        from: this.hoveringOver,
                    };
                }
                this.$set(this.temporaryConnection, "mx", null);
                this.$set(this.temporaryConnection, "my", null);
            }
            else if (ev.target === this.$el) {
                this.unselectAllNodes();
                this.draggingStartPoint = {
                    x: ev.screenX,
                    y: ev.screenY,
                };
                this.draggingStartPanning = {
                    x: this.plugin.panning.x,
                    y: this.plugin.panning.y,
                };
            }
        }
    };
    EditorView.prototype.mouseUp = function () {
        this.draggingStartPoint = null;
        this.draggingStartPanning = null;
        var tc = this.temporaryConnection;
        if (tc && this.hoveringOver) {
            this.plugin.editor.addConnection(tc.from, tc.to);
        }
        this.temporaryConnection = null;
    };
    EditorView.prototype.mouseWheel = function (ev) {
        ev.preventDefault();
        var scrollAmount = ev.deltaY;
        if (ev.deltaMode === 1) {
            scrollAmount *= 32; // Firefox fix, multiplier is trial & error
        }
        var newScale = this.plugin.scaling * (1 - scrollAmount / 3000);
        var currentPoint = [
            ev.offsetX / this.plugin.scaling - this.plugin.panning.x,
            ev.offsetY / this.plugin.scaling - this.plugin.panning.y,
        ];
        var newPoint = [ev.offsetX / newScale - this.plugin.panning.x, ev.offsetY / newScale - this.plugin.panning.y];
        var diff = [newPoint[0] - currentPoint[0], newPoint[1] - currentPoint[1]];
        this.plugin.panning.x += diff[0];
        this.plugin.panning.y += diff[1];
        this.plugin.scaling = newScale;
    };
    EditorView.prototype.keyDown = function (ev) {
        var _this = this;
        if (ev.key === "Delete" && this.selectedNodes.length > 0) {
            this.selectedNodes.forEach(function (n) { return _this.plugin.editor.removeNode(n); });
        }
        else if (ev.key === "Tab") {
            ev.preventDefault();
        }
        else if (ev.key === "Control") {
            this.ctrlPressed = true;
        }
        else if (ev.key === "z" && ev.ctrlKey) {
            this.history.undo();
        }
        else if (ev.key === "y" && ev.ctrlKey) {
            this.history.redo();
        }
    };
    EditorView.prototype.keyUp = function (ev) {
        if (ev.key === "Control") {
            this.ctrlPressed = false;
        }
    };
    EditorView.prototype.selectNode = function (node, nodeView) {
        if (!this.ctrlPressed) {
            this.unselectAllNodes();
        }
        this.selectedNodes.push(node);
        this.selectedNodeViews.push(nodeView);
    };
    EditorView.prototype.unselectAllNodes = function () {
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodeViews.splice(0, this.selectedNodeViews.length);
    };
    EditorView.prototype.openContextMenu = function (event) {
        this.contextMenu.show = true;
        this.contextMenu.x = event.offsetX;
        this.contextMenu.y = event.offsetY;
    };
    EditorView.prototype.onContextMenuClick = function (action) {
        if (action.startsWith("addNode:")) {
            var nodeName = action.substring(action.indexOf(":") + 1);
            var nt = this.plugin.editor.nodeTypes.get(nodeName);
            if (nt) {
                var node = this.plugin.editor.addNode(new nt());
                if (node) {
                    node.position.x = this.contextMenu.x / this.plugin.scaling - this.plugin.panning.x;
                    node.position.y = this.contextMenu.y / this.plugin.scaling - this.plugin.panning.y;
                }
            }
        }
        else if (action === "copy" && this.selectedNodes.length > 0) {
            this.clipboard.copy(this.selectedNodes);
        }
        else if (action === "paste" && !this.clipboard.isEmpty) {
            this.clipboard.paste();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object, required: true }),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Provide */ "d"])("plugin")
    ], EditorView.prototype, "plugin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Provide */ "d"])("editor")
    ], EditorView.prototype, "nodeeditor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Provide */ "d"])("selectedNodeViews")
    ], EditorView.prototype, "selectedNodeViews", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("plugin.nodeTypeAliases")
    ], EditorView.prototype, "updateContextMenu", null);
    EditorView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], EditorView);
    return EditorView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (EditorView);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var Connection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Connection.prototype.mounted = function () {
        this.plugin.hooks.renderConnection.execute(this);
    };
    Connection.prototype.updated = function () {
        this.plugin.hooks.renderConnection.execute(this);
    };
    Object.defineProperty(Connection.prototype, "d", {
        get: function () {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transform(this.x1, this.y1), 2), tx1 = _a[0], ty1 = _a[1];
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transform(this.x2, this.y2), 2), tx2 = _b[0], ty2 = _b[1];
            if (this.plugin.useStraightConnections) {
                return "M " + tx1 + " " + ty1 + " L " + tx2 + " " + ty2;
            }
            else {
                var dx = 0.3 * Math.abs(tx1 - tx2);
                return "M " + tx1 + " " + ty1 + " C " + (tx1 + dx) + " " + ty1 + ", " + (tx2 - dx) + " " + ty2 + ", " + tx2 + " " + ty2;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "classes", {
        get: function () {
            return {
                "connection": true,
                "--temporary": this.isTemporary,
                "--allowed": this.state === _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].ALLOWED,
                "--forbidden": this.state === _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].FORBIDDEN
            };
        },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.transform = function (x, y) {
        var tx = (x + this.plugin.panning.x) * this.plugin.scaling;
        var ty = (y + this.plugin.panning.y) * this.plugin.scaling;
        return [tx, ty];
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number })
    ], Connection.prototype, "x1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number })
    ], Connection.prototype, "y1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number })
    ], Connection.prototype, "x2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number })
    ], Connection.prototype, "y2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number, default: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__[/* TemporaryConnectionState */ "a"].NONE })
    ], Connection.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Boolean, default: false })
    ], Connection.prototype, "isTemporary", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object })
    ], Connection.prototype, "connection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], Connection.prototype, "plugin", void 0);
    Connection = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], Connection);
    return Connection;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (Connection);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);






var ResizeObserver = window.ResizeObserver || _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_2__[/* ResizeObserver */ "a"];
var ConnectionWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConnectionWrapper, _super);
    function ConnectionWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = { x1: 0, y1: 0, x2: 0, y2: 0 };
        return _this;
    }
    Object.defineProperty(ConnectionWrapper.prototype, "state", {
        get: function () {
            return this.connection.isInDanger ?
                _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_5__[/* TemporaryConnectionState */ "a"].FORBIDDEN :
                _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_5__[/* TemporaryConnectionState */ "a"].NONE;
        },
        enumerable: false,
        configurable: true
    });
    ConnectionWrapper.prototype.mounted = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.updateCoords();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionWrapper.prototype.beforeDestroy = function () {
        this.resizeObserver.disconnect();
    };
    ConnectionWrapper.prototype.updateCoords = function () {
        var _this = this;
        var from = Object(_domResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.connection.from);
        var to = Object(_domResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.connection.to);
        if (from.node && to.node) {
            if (!this.resizeObserver) {
                this.resizeObserver = new ResizeObserver(function () { _this.updateCoords(); });
                this.resizeObserver.observe(from.node);
                this.resizeObserver.observe(to.node);
            }
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getPortCoordinates(from), 2), x1 = _a[0], y1 = _a[1];
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getPortCoordinates(to), 2), x2 = _b[0], y2 = _b[1];
        this.d = { x1: x1, y1: y1, x2: x2, y2: y2 };
    };
    ConnectionWrapper.prototype.getPortCoordinates = function (resolved) {
        if (resolved.node && resolved.interface && resolved.port) {
            return [
                resolved.node.offsetLeft + resolved.interface.offsetLeft + resolved.port.offsetLeft + resolved.port.clientWidth / 2,
                resolved.node.offsetTop + resolved.interface.offsetTop + resolved.port.offsetTop + resolved.port.clientHeight / 2
            ];
        }
        else {
            return [0, 0];
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object })
    ], ConnectionWrapper.prototype, "connection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("connection.from.parent.position", { deep: true }),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("connection.to.parent.position", { deep: true })
    ], ConnectionWrapper.prototype, "updateCoords", null);
    ConnectionWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            components: {
                "connection-view": _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
            }
        })
    ], ConnectionWrapper);
    return ConnectionWrapper;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (ConnectionWrapper);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserverEntry; });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__[/* calculateBoxSizes */ "b"])(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = [boxes.borderBoxSize];
        this.contentBoxSize = [boxes.contentBoxSize];
        this.devicePixelContentBoxSize = [boxes.devicePixelContentBoxSize];
    }
    return ResizeObserverEntry;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _portCoordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);






var TemporaryConnection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemporaryConnection, _super);
    function TemporaryConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TemporaryConnection.prototype, "status", {
        get: function () {
            return this.connection ? this.connection.status : _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__[/* TemporaryConnectionState */ "a"].NONE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TemporaryConnection.prototype, "d", {
        get: function () {
            if (!this.connection) {
                return {
                    input: [0, 0],
                    output: [0, 0]
                };
            }
            var start = Object(_portCoordinates__WEBPACK_IMPORTED_MODULE_5__[/* getPortCoordinates */ "a"])(Object(_domResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.connection.from));
            var end = this.connection.to ?
                Object(_portCoordinates__WEBPACK_IMPORTED_MODULE_5__[/* getPortCoordinates */ "a"])(Object(_domResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.connection.to)) :
                [this.connection.mx || start[0], this.connection.my || start[1]];
            if (this.connection.from.isInput) {
                return {
                    input: end,
                    output: start
                };
            }
            else {
                return {
                    input: start,
                    output: end
                };
            }
        },
        enumerable: false,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object })
    ], TemporaryConnection.prototype, "connection", void 0);
    TemporaryConnection = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            components: {
                "connection-view": _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
            }
        })
    ], TemporaryConnection);
    return TemporaryConnection;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (TemporaryConnection);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_cssNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);


// @ts-ignore


var NodeView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NodeView, _super);
    function NodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.draggingStartPosition = null;
        _this.draggingStartPoint = null;
        _this.renaming = false;
        _this.tempName = "";
        _this.contextMenu = {
            show: false,
            x: 0,
            y: 0,
            items: [
                { value: "rename", label: "Rename" },
                { value: "delete", label: "Delete" },
            ],
        };
        return _this;
    }
    Object.defineProperty(NodeView.prototype, "classes", {
        get: function () {
            var _a;
            return _a = {
                    "node": true,
                    "--selected": this.selected,
                    "--dragging": !!this.draggingStartPoint,
                    "--two-column": !!this.data.twoColumn
                },
                _a["--type-" + Object(_utility_cssNames__WEBPACK_IMPORTED_MODULE_3__[/* sanitizeName */ "a"])(this.data.type)] = true,
                _a[this.data.customClasses] = true,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeView.prototype, "styles", {
        get: function () {
            return {
                top: this.data.position.y + "px",
                left: this.data.position.x + "px",
                width: this.data.width + "px",
            };
        },
        enumerable: false,
        configurable: true
    });
    NodeView.prototype.mounted = function () {
        var _this = this;
        this.data.events.addInterface.addListener(this, function () { return _this.update(); });
        this.data.events.removeInterface.addListener(this, function () { return _this.update(); });
        this.data.events.addOption.addListener(this, function () { return _this.update(); });
        this.data.events.removeOption.addListener(this, function () { return _this.update(); });
        this.plugin.hooks.renderNode.execute(this);
    };
    NodeView.prototype.updated = function () {
        this.plugin.hooks.renderNode.execute(this);
    };
    NodeView.prototype.beforeDestroy = function () {
        this.data.events.addInterface.removeListener(this);
        this.data.events.removeInterface.removeListener(this);
        this.data.events.addOption.removeListener(this);
        this.data.events.removeOption.removeListener(this);
    };
    NodeView.prototype.update = function () {
        this.$forceUpdate();
    };
    NodeView.prototype.startDrag = function (ev) {
        this.select();
        if (this.selectedNodeViews.length === 0 || this.selectedNodeViews[0] === undefined) {
            this.selectedNodeViews.splice(0, this.selectedNodeViews.length);
            this.selectedNodeViews.push(this);
        }
        this.selectedNodeViews.forEach(function (elem) {
            elem.draggingStartPoint = {
                x: ev.screenX,
                y: ev.screenY,
            };
            elem.draggingStartPosition = {
                x: elem.data.position.x,
                y: elem.data.position.y,
            };
            document.addEventListener("mousemove", elem.handleMove);
            document.addEventListener("mouseup", elem.stopDrag);
        });
    };
    NodeView.prototype.select = function () {
        this.$emit("select", this);
    };
    NodeView.prototype.stopDrag = function () {
        this.selectedNodeViews.forEach(function (elem) {
            elem.draggingStartPoint = null;
            elem.draggingStartPosition = null;
            document.removeEventListener("mousemove", elem.handleMove);
            document.removeEventListener("mouseup", elem.stopDrag);
        });
    };
    NodeView.prototype.handleMove = function (ev) {
        this.selectedNodeViews.forEach(function (elem) {
            if (elem.draggingStartPoint) {
                var dx = ev.screenX - elem.draggingStartPoint.x;
                var dy = ev.screenY - elem.draggingStartPoint.y;
                elem.data.position.x = elem.draggingStartPosition.x + dx / elem.plugin.scaling;
                elem.data.position.y = elem.draggingStartPosition.y + dy / elem.plugin.scaling;
            }
        });
    };
    NodeView.prototype.openContextMenu = function (ev) {
        this.contextMenu.show = true;
        this.contextMenu.x = ev.offsetX;
        this.contextMenu.y = ev.offsetY;
    };
    NodeView.prototype.onContextMenu = function (action) {
        switch (action) {
            case "delete":
                this.plugin.editor.removeNode(this.data);
                break;
            case "rename":
                this.tempName = this.data.name;
                this.renaming = true;
        }
    };
    NodeView.prototype.doneRenaming = function () {
        this.data.name = this.tempName;
        this.renaming = false;
    };
    NodeView.prototype.openSidebar = function (optionName) {
        this.plugin.sidebar.nodeId = this.data.id;
        this.plugin.sidebar.optionName = optionName;
        this.plugin.sidebar.visible = true;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object })
    ], NodeView.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Boolean, default: false })
    ], NodeView.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], NodeView.prototype, "plugin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("selectedNodeViews")
    ], NodeView.prototype, "selectedNodeViews", void 0);
    NodeView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            directives: {
                ClickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a.directive,
            },
        })
    ], NodeView);
    return NodeView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (NodeView);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var NodeInterfaceView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NodeInterfaceView, _super);
    function NodeInterfaceView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.isConnected = false;
        return _this;
    }
    Object.defineProperty(NodeInterfaceView.prototype, "classes", {
        get: function () {
            return {
                "node-interface": true,
                "--input": this.data.isInput,
                "--output": !this.data.isInput,
                "--connected": this.isConnected
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeInterfaceView.prototype, "displayName", {
        get: function () {
            return this.data.displayName || this.name;
        },
        enumerable: false,
        configurable: true
    });
    NodeInterfaceView.prototype.beforeMount = function () {
        var _this = this;
        this.value = this.data.value;
        this.data.events.setValue.addListener(this, function (v) { _this.value = v; });
        this.data.events.setConnectionCount.addListener(this, function (c) {
            _this.$forceUpdate();
            _this.isConnected = c > 0;
        });
        this.data.events.updated.addListener(this, function (v) { _this.$forceUpdate(); });
        this.isConnected = this.data.connectionCount > 0;
    };
    NodeInterfaceView.prototype.mounted = function () {
        this.plugin.hooks.renderInterface.execute(this);
    };
    NodeInterfaceView.prototype.updated = function () {
        this.plugin.hooks.renderInterface.execute(this);
    };
    NodeInterfaceView.prototype.beforeDestroy = function () {
        this.data.events.setValue.removeListener(this);
        this.data.events.setConnectionCount.removeListener(this);
        this.data.events.updated.removeListener(this);
    };
    NodeInterfaceView.prototype.startHover = function () {
        this.editor.hoveredOver(this.data);
    };
    NodeInterfaceView.prototype.endHover = function () {
        this.editor.hoveredOver(undefined);
    };
    NodeInterfaceView.prototype.getOptionComponent = function (name) {
        if (!name || !this.plugin.options) {
            return;
        }
        return this.plugin.options[name];
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object, default: function () { return ({}); } })
    ], NodeInterfaceView.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: String, default: "" })
    ], NodeInterfaceView.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], NodeInterfaceView.prototype, "plugin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("editor")
    ], NodeInterfaceView.prototype, "editor", void 0);
    NodeInterfaceView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], NodeInterfaceView);
    return NodeInterfaceView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (NodeInterfaceView);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var NodeOptionView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NodeOptionView, _super);
    function NodeOptionView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        return _this;
    }
    Object.defineProperty(NodeOptionView.prototype, "component", {
        get: function () {
            if (!this.plugin.options || !this.componentName) {
                return;
            }
            return this.plugin.options[this.componentName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeOptionView.prototype, "displayName", {
        get: function () {
            return this.option.displayName || this.name;
        },
        enumerable: false,
        configurable: true
    });
    NodeOptionView.prototype.beforeMount = function () {
        var _this = this;
        this.value = this.option.value;
        this.option.events.setValue.addListener(this, function (v) { _this.value = v; });
    };
    NodeOptionView.prototype.mounted = function () {
        this.plugin.hooks.renderOption.execute(this);
    };
    NodeOptionView.prototype.updated = function () {
        this.plugin.hooks.renderOption.execute(this);
    };
    NodeOptionView.prototype.beforeDestroy = function () {
        this.option.events.setValue.removeListener(this);
    };
    NodeOptionView.prototype.updateValue = function (v) {
        this.option.value = v;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], NodeOptionView.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], NodeOptionView.prototype, "option", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], NodeOptionView.prototype, "componentName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], NodeOptionView.prototype, "node", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], NodeOptionView.prototype, "plugin", void 0);
    NodeOptionView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], NodeOptionView);
    return NodeOptionView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (NodeOptionView);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_2__);


// @ts-ignore

var ContextMenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeMenu = -1;
        _this.activeMenuResetTimeout = null;
        _this.height = 0;
        _this.rootIsFlipped = { x: false, y: false };
        return _this;
    }
    ContextMenu_1 = ContextMenu;
    Object.defineProperty(ContextMenu.prototype, "styles", {
        get: function () {
            var s = {};
            if (!this.isNested) {
                s.top = (this.flippedY ? this.y - this.height : this.y) + "px";
                s.left = this.x + "px";
            }
            return s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "classes", {
        get: function () {
            return {
                "dark-context-menu": true,
                "--flipped-x": this.flippedX,
                "--flipped-y": this.flippedY,
                "--nested": this.isNested,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "_items", {
        get: function () {
            return this.items.map(function (i) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, i), { hover: false })); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "flippedX", {
        get: function () {
            return this.flippable && (this.rootIsFlipped.x || this.isFlipped.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "flippedY", {
        get: function () {
            return this.flippable && (this.rootIsFlipped.y || this.isFlipped.y);
        },
        enumerable: false,
        configurable: true
    });
    ContextMenu.prototype.onClick = function (item) {
        if (!item.submenu && item.value) {
            this.$emit("click", item.value);
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onChildClick = function (value) {
        this.$emit("click", value);
        this.activeMenu = -1;
        if (!this.isNested) {
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onClickOutside = function (event) {
        if (this.value) {
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onMouseEnter = function (event, index) {
        if (this.items[index].submenu) {
            this.activeMenu = index;
            if (this.activeMenuResetTimeout !== null) {
                clearTimeout(this.activeMenuResetTimeout);
                this.activeMenuResetTimeout = null;
            }
        }
    };
    ContextMenu.prototype.onMouseLeave = function (event, index) {
        var _this = this;
        if (this.items[index].submenu) {
            this.activeMenuResetTimeout = window.setTimeout(function () {
                _this.activeMenu = -1;
                _this.activeMenuResetTimeout = null;
            }, 200);
        }
    };
    ContextMenu.prototype.created = function () {
        if (this.$options.components) {
            this.$options.components["context-menu"] = vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"].extend(ContextMenu_1);
        }
        else {
            this.$options.components = { "context-menu": vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"].extend(ContextMenu_1) };
        }
    };
    ContextMenu.prototype.updateFlipped = function () {
        this.height = this.items.length * 30;
        var parentWidth = this.$parent.$el.offsetWidth;
        var parentHeight = this.$parent.$el.offsetHeight;
        this.rootIsFlipped.x = !this.isNested && this.x > parentWidth * 0.75;
        this.rootIsFlipped.y = !this.isNested && this.y + this.height > parentHeight - 20;
    };
    ContextMenu.prototype.updateDisabledValues = function () {
        var _this = this;
        if (this.value) {
            this.items.forEach(function (item) {
                if (item.disabledFunction) {
                    _this.$set(item, "disabled", item.disabledFunction());
                }
            });
        }
    };
    var ContextMenu_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Boolean, default: false })
    ], ContextMenu.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Array, default: function () { return []; } })
    ], ContextMenu.prototype, "items", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number, default: 0 })
    ], ContextMenu.prototype, "x", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Number, default: 0 })
    ], ContextMenu.prototype, "y", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Boolean, default: false })
    ], ContextMenu.prototype, "isNested", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Object, default: function () { return ({ x: false, y: false }); } })
    ], ContextMenu.prototype, "isFlipped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])({ type: Boolean, default: false })
    ], ContextMenu.prototype, "flippable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("y"),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("items")
    ], ContextMenu.prototype, "updateFlipped", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("value", { immediate: true })
    ], ContextMenu.prototype, "updateDisabledValues", null);
    ContextMenu = ContextMenu_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            directives: {
                ClickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a.directive,
            },
        })
    ], ContextMenu);
    return ContextMenu;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (ContextMenu);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var Sidebar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Sidebar, _super);
    function Sidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 300;
        return _this;
    }
    Object.defineProperty(Sidebar.prototype, "nodeName", {
        get: function () {
            var id = this.plugin.sidebar.nodeId;
            var n = this.plugin.editor.nodes.find(function (x) { return x.id === id; });
            return n ? n.name : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "styles", {
        get: function () {
            return {
                width: this.width + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    Sidebar.prototype.close = function () {
        this.plugin.sidebar.visible = false;
    };
    Sidebar.prototype.startResize = function () {
        var _this = this;
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", function () {
            window.removeEventListener("mousemove", _this.onMouseMove);
        }, { once: true });
    };
    Sidebar.prototype.onMouseMove = function (event) {
        var maxwidth = this.$parent.$el.getBoundingClientRect().width;
        this.width -= event.movementX;
        if (this.width < 300) {
            this.width = 300;
        }
        else if (this.width > 0.9 * maxwidth) {
            this.width = 0.9 * maxwidth;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], Sidebar.prototype, "plugin", void 0);
    Sidebar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], Sidebar);
    return Sidebar;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (Sidebar);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _connection_domResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




var Minimap = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Minimap, _super);
    function Minimap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.intervalHandle = 0;
        _this.showViewBounds = false;
        _this.dragging = false;
        _this.bounds = { x1: 0, y1: 0, x2: 0, y2: 0 };
        return _this;
    }
    Minimap.prototype.mounted = function () {
        var _this = this;
        var _a;
        var canvas = this.$refs.cv;
        this.ctx = (_a = canvas.getContext("2d")) !== null && _a !== void 0 ? _a : undefined;
        if (this.ctx) {
            this.ctx.imageSmoothingQuality = "high";
        }
        this.intervalHandle = setInterval(function () { return _this.updateCanvas(); }, 250);
    };
    Minimap.prototype.beforeDestroy = function () {
        clearInterval(this.intervalHandle);
    };
    Minimap.prototype.updateCanvas = function () {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        var _e, _f;
        if (!this.ctx) {
            return;
        }
        var nodeCoords = new Map();
        var nodeDomElements = new Map();
        try {
            for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.nodes), _h = _g.next(); !_h.done; _h = _g.next()) {
                var n = _h.value;
                var domElement = Object(_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__[/* getDomElementOfNode */ "b"])(n);
                var width = (_e = domElement === null || domElement === void 0 ? void 0 : domElement.clientWidth) !== null && _e !== void 0 ? _e : 0;
                var height = (_f = domElement === null || domElement === void 0 ? void 0 : domElement.clientHeight) !== null && _f !== void 0 ? _f : 0;
                nodeCoords.set(n, { x1: n.position.x, y1: n.position.y, x2: n.position.x + width, y2: n.position.y + height });
                nodeDomElements.set(n, domElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // get bound rectangle
        var bounds = {
            x1: Number.MAX_SAFE_INTEGER, y1: Number.MAX_SAFE_INTEGER,
            x2: Number.MIN_SAFE_INTEGER, y2: Number.MIN_SAFE_INTEGER
        };
        try {
            for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(nodeCoords.values()), _k = _j.next(); !_k.done; _k = _j.next()) {
                var nc = _k.value;
                if (nc.x1 < bounds.x1) {
                    bounds.x1 = nc.x1;
                }
                if (nc.y1 < bounds.y1) {
                    bounds.y1 = nc.y1;
                }
                if (nc.x2 > bounds.x2) {
                    bounds.x2 = nc.x2;
                }
                if (nc.y2 > bounds.y2) {
                    bounds.y2 = nc.y2;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // add some padding
        var padding = 50;
        bounds.x1 -= padding;
        bounds.y1 -= padding;
        bounds.x2 += padding;
        bounds.y2 += padding;
        this.bounds = bounds;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // draw connections
        this.ctx.strokeStyle = "white";
        try {
            for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.connections), _m = _l.next(); !_m.done; _m = _l.next()) {
                var c = _m.value;
                var toDom = Object(_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c.to);
                var _o = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__[/* getPortCoordinates */ "a"])(Object(_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c.from)), 2), origX1 = _o[0], origY1 = _o[1];
                var _p = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__[/* getPortCoordinates */ "a"])(Object(_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c.to)), 2), origX2 = _p[0], origY2 = _p[1];
                var _q = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(origX1, origY1), 2), x1 = _q[0], y1 = _q[1];
                var _r = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(origX2, origY2), 2), x2 = _r[0], y2 = _r[1];
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                if (this.plugin.useStraightConnections) {
                    this.ctx.lineTo(x2, y2);
                }
                else {
                    var dx = 0.3 * Math.abs(x1 - x2);
                    this.ctx.bezierCurveTo(x1 + dx, y1, x2 - dx, y2, x2, y2);
                }
                this.ctx.stroke();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // draw nodes
        this.ctx.strokeStyle = "lightgray";
        try {
            for (var _s = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(nodeCoords.entries()), _t = _s.next(); !_t.done; _t = _s.next()) {
                var _u = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_t.value, 2), n = _u[0], nc = _u[1];
                var _v = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(nc.x1, nc.y1), 2), x1 = _v[0], y1 = _v[1];
                var _w = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(nc.x2, nc.y2), 2), x2 = _w[0], y2 = _w[1];
                this.ctx.fillStyle = this.getNodeColor(nodeDomElements.get(n));
                this.ctx.beginPath();
                this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
                this.ctx.fill();
                this.ctx.stroke();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (this.showViewBounds) {
            var viewBounds = this.getViewBounds();
            var _x = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(viewBounds.x1, viewBounds.y1), 2), x1 = _x[0], y1 = _x[1];
            var _y = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.transformCoordinates(viewBounds.x2, viewBounds.y2), 2), x2 = _y[0], y2 = _y[1];
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            this.ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
        }
    };
    /** Transforms coordinates from editor space to minimap space */
    Minimap.prototype.transformCoordinates = function (origX, origY) {
        return [
            ((origX - this.bounds.x1) / (this.bounds.x2 - this.bounds.x1)) * this.ctx.canvas.clientWidth,
            ((origY - this.bounds.y1) / (this.bounds.y2 - this.bounds.y1)) * this.ctx.canvas.clientHeight
        ];
    };
    /** Transforms coordinates from minimap space to editor space */
    Minimap.prototype.reverseTransform = function (thisX, thisY) {
        return [
            (thisX * (this.bounds.x2 - this.bounds.x1)) / this.ctx.canvas.clientWidth + this.bounds.x1,
            (thisY * (this.bounds.y2 - this.bounds.y1)) / this.ctx.canvas.clientHeight + this.bounds.y1,
        ];
    };
    Minimap.prototype.getNodeColor = function (domElement) {
        if (domElement) {
            var content = domElement.querySelector(".__content");
            if (content) {
                var contentColor = this.getComputedColor(content);
                if (contentColor) {
                    return contentColor;
                }
            }
            var nodeColor = this.getComputedColor(domElement);
            if (nodeColor) {
                return nodeColor;
            }
        }
        return "gray";
    };
    Minimap.prototype.getComputedColor = function (domElement) {
        var c = getComputedStyle(domElement).backgroundColor;
        if (c && c !== "rgba(0, 0, 0, 0)") {
            return c;
        }
    };
    /** Returns view bounds in editor space */
    Minimap.prototype.getViewBounds = function () {
        var parentWidth = this.$parent.$el.offsetWidth;
        var parentHeight = this.$parent.$el.offsetHeight;
        var x2 = (parentWidth / this.plugin.scaling) - this.plugin.panning.x;
        var y2 = (parentHeight / this.plugin.scaling) - this.plugin.panning.y;
        return { x1: -this.plugin.panning.x, y1: -this.plugin.panning.y, x2: x2, y2: y2 };
    };
    Minimap.prototype.mousedown = function (ev) {
        if (ev.button === 0) {
            this.dragging = true;
            this.mousemove(ev);
        }
    };
    Minimap.prototype.mousemove = function (ev) {
        if (this.dragging) {
            // still slightly off when zoomed
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.reverseTransform(ev.offsetX, ev.offsetY), 2), cx = _a[0], cy = _a[1];
            var viewBounds = this.getViewBounds();
            var dx = (viewBounds.x1 - viewBounds.x2) / 2;
            var dy = (viewBounds.y1 - viewBounds.y2) / 2;
            this.plugin.panning.x = -(cx + dx);
            this.plugin.panning.y = -(cy + dy);
        }
    };
    Minimap.prototype.mouseup = function (ev) {
        this.dragging = false;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], Minimap.prototype, "nodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "c"])()
    ], Minimap.prototype, "connections", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Inject */ "b"])("plugin")
    ], Minimap.prototype, "plugin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("showViewBounds"),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("plugin.panning.x"),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("plugin.panning.y"),
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "f"])("plugin.scaling")
    ], Minimap.prototype, "updateCanvas", null);
    Minimap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], Minimap);
    return Minimap;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "e"]));
/* harmony default export */ __webpack_exports__["a"] = (Minimap);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/ConnectionWrapper.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateDepthForNode; });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var calculateDepthForNode = function (node) {
    if (Object(_utils_element__WEBPACK_IMPORTED_MODULE_0__[/* isHidden */ "b"])(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/TemporaryConnection.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/Node.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/NodeInterface.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/NodeOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Minimap.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateCount; });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(106);



var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        Object(_queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__[/* queueResizeObserver */ "a"])(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = Object(_process__WEBPACK_IMPORTED_MODULE_0__[/* process */ "a"])();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : _global__WEBPACK_IMPORTED_MODULE_1__[/* global */ "a"].addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__[/* global */ "a"].addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__[/* global */ "a"].removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var NodeStep = /** @class */ (function () {
    function NodeStep(type, data) {
        this.type = type;
        if (type === "addNode") {
            this.nodeId = data;
        }
        else {
            this.nodeState = data;
        }
    }
    NodeStep.prototype.undo = function (editor) {
        if (this.type === "addNode") {
            this.removeNode(editor);
        }
        else {
            this.addNode(editor);
        }
    };
    NodeStep.prototype.redo = function (editor) {
        if (this.type === "addNode" && this.nodeState) {
            this.addNode(editor);
        }
        else if (this.type === "removeNode" && this.nodeId) {
            this.removeNode(editor);
        }
    };
    NodeStep.prototype.addNode = function (editor) {
        var nodeType = editor.nodeTypes.get(this.nodeState.type);
        if (!nodeType) {
            return;
        }
        var n = new nodeType();
        editor.addNode(n);
        n.load(this.nodeState);
        this.nodeId = n.id;
    };
    NodeStep.prototype.removeNode = function (editor) {
        var _this = this;
        var node = editor.nodes.find(function (n) { return n.id === _this.nodeId; });
        if (!node) {
            return;
        }
        this.nodeState = node.save();
        editor.removeNode(node);
    };
    return NodeStep;
}());
/* harmony default export */ __webpack_exports__["a"] = (NodeStep);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ConnectionStep = /** @class */ (function () {
    function ConnectionStep(type, data) {
        this.type = type;
        if (type === "addConnection") {
            this.connectionId = data;
        }
        else {
            var d = data;
            this.connectionState = {
                id: d.id,
                from: d.from.id,
                to: d.to.id
            };
        }
    }
    ConnectionStep.prototype.undo = function (editor) {
        if (this.type === "addConnection") {
            this.removeConnection(editor);
        }
        else {
            this.addConnection(editor);
        }
    };
    ConnectionStep.prototype.redo = function (editor) {
        if (this.type === "addConnection" && this.connectionState) {
            this.addConnection(editor);
        }
        else if (this.type === "removeConnection" && this.connectionId) {
            this.removeConnection(editor);
        }
    };
    ConnectionStep.prototype.addConnection = function (editor) {
        var fromIntf = editor.findNodeInterface(this.connectionState.from);
        var toIntf = editor.findNodeInterface(this.connectionState.to);
        if (!fromIntf || !toIntf) {
            return;
        }
        editor.addConnection(fromIntf, toIntf);
    };
    ConnectionStep.prototype.removeConnection = function (editor) {
        var _this = this;
        var connection = editor.connections.find(function (c) { return c.id === _this.connectionId; });
        if (!connection) {
            return;
        }
        this.connectionState = {
            id: connection.id,
            from: connection.from.id,
            to: connection.to.id
        };
        editor.removeConnection(connection);
    };
    return ConnectionStep;
}());
/* harmony default export */ __webpack_exports__["a"] = (ConnectionStep);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMRectReadOnly; });
var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return Object.freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gatherActiveObservationsAtDepth; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);


var gatherActiveObservationsAtDepth = function (depth) {
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__[/* resizeObservers */ "a"].forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__[/* calculateDepthForNode */ "a"])(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "node-editor",
        {
          "ignore-mouse": !!_vm.temporaryConnection,
          "--temporary-connection": !!_vm.temporaryConnection
        }
      ],
      attrs: { tabindex: "-1" },
      on: {
        mousemove: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.mouseMoveHandler($event)
        },
        mousedown: _vm.mouseDown,
        mouseup: _vm.mouseUp,
        wheel: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.mouseWheel($event)
        },
        keydown: _vm.keyDown,
        keyup: _vm.keyUp,
        contextmenu: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          $event.preventDefault()
          return _vm.openContextMenu($event)
        }
      }
    },
    [
      _c("div", { staticClass: "background", style: _vm.backgroundStyle }),
      _vm._v(" "),
      _c(
        "svg",
        { staticClass: "connections-container" },
        [
          _vm._l(_vm.connections, function(connection) {
            return _c(
              "g",
              { key: connection.id + _vm.counter.toString() },
              [
                _vm._t(
                  "connections",
                  [
                    _c(_vm.plugin.components.connection, {
                      tag: "component",
                      attrs: { connection: connection }
                    })
                  ],
                  { connection: connection }
                )
              ],
              2
            )
          }),
          _vm._v(" "),
          _vm.temporaryConnection
            ? _c(_vm.plugin.components.tempConnection, {
                tag: "component",
                attrs: { connection: _vm.temporaryConnection }
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "node-container", style: _vm.styles },
        _vm._l(_vm.nodes, function(node) {
          return _c(_vm.plugin.components.node, {
            key: node.id + _vm.counter.toString(),
            tag: "component",
            attrs: { data: node, selected: _vm.selectedNodes.includes(node) },
            on: {
              select: function($event) {
                return _vm.selectNode(node, $event)
              }
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(_vm.plugin.components.contextMenu, {
        tag: "component",
        attrs: {
          x: _vm.contextMenu.x,
          y: _vm.contextMenu.y,
          items: _vm.contextMenu.items,
          flippable: ""
        },
        on: { click: _vm.onContextMenuClick },
        model: {
          value: _vm.contextMenu.show,
          callback: function($$v) {
            _vm.$set(_vm.contextMenu, "show", $$v)
          },
          expression: "contextMenu.show"
        }
      }),
      _vm._v(" "),
      _c(_vm.plugin.components.sidebar, { tag: "component" }),
      _vm._v(" "),
      _vm.plugin.enableMinimap
        ? _c(_vm.plugin.components.minimap, {
            tag: "component",
            attrs: { nodes: _vm.nodes, connections: _vm.connections }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Emit */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inject; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InjectReactive */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"]];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"]] = _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"];
        }
    });
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Model */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModelSync */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prop; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PropSync */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provide; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* inheritInjected */ "a"])(componentOptions);
        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* needToProduceProvide */ "b"])(provide)) {
            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* produceProvide */ "c"])(provide);
        }
        provide.managed[k] = key || k;
    });
}


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProvideReactive */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* inheritInjected */ "a"])(componentOptions);
        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* needToProduceProvide */ "b"])(provide)) {
            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* produceProvide */ "c"])(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ref */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VModel */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'value';
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        ;
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('input', value);
            },
        };
    });
}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Watch; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemporaryConnectionState; });
var TemporaryConnectionState;
(function (TemporaryConnectionState) {
    TemporaryConnectionState[TemporaryConnectionState["NONE"] = 0] = "NONE";
    TemporaryConnectionState[TemporaryConnectionState["ALLOWED"] = 1] = "ALLOWED";
    TemporaryConnectionState[TemporaryConnectionState["FORBIDDEN"] = 2] = "FORBIDDEN";
})(TemporaryConnectionState || (TemporaryConnectionState = {}));


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("path", { class: _vm.classes, attrs: { d: _vm.d } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("connection-view", {
    attrs: {
      x1: _vm.d.x1,
      y1: _vm.d.y1,
      x2: _vm.d.x2,
      y2: _vm.d.y2,
      state: _vm.state,
      connection: _vm.connection
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserver; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverController */ "a"].connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!Object(_utils_element__WEBPACK_IMPORTED_MODULE_1__[/* isElement */ "a"])(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverController */ "a"].observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!Object(_utils_element__WEBPACK_IMPORTED_MODULE_1__[/* isElement */ "a"])(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverController */ "a"].unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverController */ "a"].disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("connection-view", {
    attrs: {
      x1: _vm.d.input[0],
      y1: _vm.d.input[1],
      x2: _vm.d.output[0],
      y2: _vm.d.output[1],
      state: _vm.status,
      connection: _vm.connection,
      "is-temporary": ""
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classes, style: _vm.styles, attrs: { id: _vm.data.id } },
    [
      _c(
        "div",
        {
          staticClass: "__title",
          on: {
            mousedown: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              $event.stopPropagation()
              return _vm.startDrag($event)
            },
            contextmenu: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              $event.preventDefault()
              return _vm.openContextMenu($event)
            }
          }
        },
        [
          !_vm.renaming
            ? _c("span", [_vm._v(_vm._s(_vm.data.name))])
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tempName,
                    expression: "tempName"
                  },
                  {
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: _vm.doneRenaming,
                    expression: "doneRenaming"
                  }
                ],
                staticClass: "dark-input",
                attrs: { type: "text", placeholder: "Node Name" },
                domProps: { value: _vm.tempName },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.doneRenaming($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tempName = $event.target.value
                  }
                }
              }),
          _vm._v(" "),
          _c(_vm.plugin.components.contextMenu, {
            tag: "component",
            attrs: {
              x: _vm.contextMenu.x,
              y: _vm.contextMenu.y,
              items: _vm.contextMenu.items
            },
            on: { click: _vm.onContextMenu },
            model: {
              value: _vm.contextMenu.show,
              callback: function($$v) {
                _vm.$set(_vm.contextMenu, "show", $$v)
              },
              expression: "contextMenu.show"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "__content" }, [
        _c(
          "div",
          { staticClass: "__outputs" },
          _vm._l(_vm.data.outputInterfaces, function(output, name) {
            return _c(_vm.plugin.components.nodeInterface, {
              key: output.id,
              tag: "component",
              attrs: { name: name, data: output }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "__options" },
          [
            _vm._l(_vm.data.options, function(ref) {
              var name = ref[0]
              var option = ref[1]
              return [
                _c(_vm.plugin.components.nodeOption, {
                  key: name,
                  tag: "component",
                  attrs: {
                    name: name,
                    option: option,
                    componentName: option.optionComponent,
                    node: _vm.data
                  },
                  on: {
                    openSidebar: function($event) {
                      return _vm.openSidebar(name)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.plugin.sidebar.nodeId === _vm.data.id &&
                _vm.plugin.sidebar.optionName === name &&
                option.sidebarComponent
                  ? _c(
                      "portal",
                      { key: "sb_" + name, attrs: { to: "sidebar" } },
                      [
                        _c(_vm.plugin.components.nodeOption, {
                          key: _vm.data.id + name,
                          tag: "component",
                          attrs: {
                            name: name,
                            option: option,
                            componentName: option.sidebarComponent,
                            node: _vm.data
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "__inputs" },
          _vm._l(_vm.data.inputInterfaces, function(input, name) {
            return _c(_vm.plugin.components.nodeInterface, {
              key: input.id,
              tag: "component",
              attrs: { name: name, data: input }
            })
          }),
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classes, attrs: { id: _vm.data.id } },
    [
      _c("div", {
        staticClass: "__port",
        on: { mouseover: _vm.startHover, mouseout: _vm.endHover }
      }),
      _vm._v(" "),
      _vm.data.connectionCount > 0 ||
      !_vm.data.option ||
      !_vm.getOptionComponent(_vm.data.option)
        ? _c("span", { staticClass: "align-middle" }, [
            _vm._v("\n        " + _vm._s(_vm.displayName) + "\n    ")
          ])
        : _c(_vm.getOptionComponent(_vm.data.option), {
            tag: "component",
            attrs: {
              option: _vm.data,
              value: _vm.value,
              name: _vm.displayName
            },
            on: {
              input: function($event) {
                _vm.data.value = $event
              }
            }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.component, {
    tag: "component",
    staticClass: "node-option",
    attrs: {
      name: _vm.displayName,
      node: _vm.node,
      value: _vm.value,
      option: _vm.option
    },
    on: {
      input: _vm.updateValue,
      openSidebar: function($event) {
        return _vm.$emit("openSidebar")
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        },
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.onClickOutside,
          expression: "onClickOutside"
        }
      ],
      class: _vm.classes,
      style: _vm.styles
    },
    [
      _vm._l(_vm._items, function(item, index) {
        return [
          item.isDivider
            ? _c("div", { key: index, staticClass: "divider" })
            : _c(
                "div",
                {
                  key: index,
                  staticClass: "d-flex align-items-center",
                  class: {
                    item: true,
                    submenu: !!item.submenu,
                    "--disabled": !!item.disabled
                  },
                  on: {
                    mouseenter: function($event) {
                      return _vm.onMouseEnter($event, index)
                    },
                    mouseleave: function($event) {
                      return _vm.onMouseLeave($event, index)
                    },
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onClick(item)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "flex-fill" }, [
                    _vm._v(_vm._s(item.label))
                  ]),
                  _vm._v(" "),
                  item.submenu
                    ? _c(
                        "div",
                        {
                          staticClass: "ml-3",
                          staticStyle: { "line-height": "1em" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "13",
                                height: "13",
                                viewBox: "-60 120 250 250"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M160.875 279.5625 L70.875 369.5625 L70.875 189.5625 L160.875 279.5625 Z",
                                  stroke: "none",
                                  fill: "white"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.submenu
                    ? _c("context-menu", {
                        attrs: {
                          value: _vm.activeMenu === index,
                          items: item.submenu,
                          "is-nested": true,
                          "is-flipped": { x: _vm.flippedX, y: _vm.flippedY },
                          flippable: _vm.flippable
                        },
                        on: { click: _vm.onChildClick }
                      })
                    : _vm._e()
                ],
                1
              )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["sidebar", { "--open": _vm.plugin.sidebar.visible }],
      style: _vm.styles
    },
    [
      _c("div", {
        staticClass: "__resizer",
        on: { mousedown: _vm.startResize }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c(
          "button",
          {
            staticClass: "__close",
            attrs: { tabindex: "-1" },
            on: { click: _vm.close }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "ml-2" }, [
          _c("b", [_vm._v(_vm._s(_vm.nodeName))])
        ])
      ]),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "sidebar" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("canvas", {
    ref: "cv",
    staticClass: "minimap",
    on: {
      mouseenter: function($event) {
        _vm.showViewBounds = true
      },
      mouseleave: function() {
        this$1.showViewBounds = false
        this$1.mouseup()
      },
      mousedown: function($event) {
        if ($event.target !== $event.currentTarget) {
          return null
        }
        return _vm.mousedown($event)
      },
      mousemove: function($event) {
        if ($event.target !== $event.currentTarget) {
          return null
        }
        return _vm.mousemove($event)
      },
      mouseup: _vm.mouseup
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaklavaVuePlugin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(portal_vue__WEBPACK_IMPORTED_MODULE_2__);


// @ts-ignore

var Baklava = {
    install: function (Vue, args) {
        if (vue__WEBPACK_IMPORTED_MODULE_0___default.a !== Vue) {
            // tslint:disable-next-line:no-console
            console.error("Multiple instances of Vue detected\n" +
                "See https://github.com/vuetifyjs/vuetify/issues/4068\n\n" +
                'If you\'re seeing "$attrs is readonly", it\'s caused by this');
        }
        Vue.use(portal_vue__WEBPACK_IMPORTED_MODULE_2___default.a);
        Vue.component("baklava-editor", _components_Editor_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
    }
};
var BaklavaVuePlugin = Baklava;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPlugin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _baklavajs_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49);










var ViewPlugin = /** @class */ (function () {
    function ViewPlugin() {
        this.type = "ViewPlugin";
        this.panning = { x: 0, y: 0 };
        this.scaling = 1;
        this.sidebar = { visible: false, nodeId: "", optionName: "" };
        /** Use straight connections instead of bezier curves */
        this.useStraightConnections = false;
        /** Show a minimap */
        this.enableMinimap = false;
        /** Background configuration */
        this.backgroundGrid = {
            gridSize: 100,
            gridDivision: 5,
            subGridVisibleThreshold: 0.6
        };
        this.options = {};
        this.nodeTypeAliases = {};
        this.hooks = {
            /** Called whenever a node is rendered */
            renderNode: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__["SequentialHook"](),
            /** Called whenever an option is rendered */
            renderOption: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__["SequentialHook"](),
            /** Called whenever an interface is rendered */
            renderInterface: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__["SequentialHook"](),
            /** Called whenever a connection is rendered */
            renderConnection: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__["SequentialHook"]()
        };
        /** Use this property to provide custom components,
         * which will be used when rendering the respective entities
         */
        this.components = {
            node: _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
            nodeOption: _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
            nodeInterface: _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
            connection: _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
            tempConnection: _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
            contextMenu: _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
            sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
            minimap: _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
        };
    }
    ViewPlugin.prototype.register = function (editor) {
        var _this = this;
        this.editor = editor;
        this.editor.hooks.load.tap(this, function (d) {
            _this.panning = d.panning;
            _this.scaling = d.scaling;
            return d;
        });
        this.editor.hooks.save.tap(this, function (d) {
            d.panning = _this.panning;
            d.scaling = _this.scaling;
            return d;
        });
        this.editor.events.beforeAddNode.addListener(this, function (node) {
            var n = node;
            n.position = { x: 0, y: 0 };
            n.disablePointerEvents = false;
            n.twoColumn = n.twoColumn || false;
            n.width = n.width || 200;
            n.customClasses = n.customClasses || "";
            node.hooks.save.tap(_this, function (state) {
                state.position = n.position;
                state.width = n.width;
                state.twoColumn = n.twoColumn;
                state.customClasses = n.customClasses;
                return state;
            });
            node.hooks.load.tap(_this, function (state) {
                // default values for savefiles from older versions
                n.position = state.position || { x: 0, y: 0 };
                n.width = state.width || 200;
                n.twoColumn = state.twoColumn || false;
                return state;
            });
        });
    };
    /**
     * Register a node option
     * @param name Name of the node option as used when defining nodes
     * @param component Component that will be rendered for the option
     */
    ViewPlugin.prototype.registerOption = function (name, component) {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.options, name, component);
    };
    /**
     * Add an alias for a node type that is displayed in the "Add Node" context menu instead of
     * the raw node type name
     * @param nodeType Node type
     * @param alias Alias that will be displayed in the context menu. When this value is `null`, an existing alias is removed
     */
    ViewPlugin.prototype.setNodeTypeAlias = function (nodeType, alias) {
        if (alias) {
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.nodeTypeAliases, nodeType, alias);
        }
        else if (this.nodeTypeAliases[nodeType]) {
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.delete(this.nodeTypeAliases, nodeType);
        }
    };
    return ViewPlugin;
}());



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var Clipboard = /** @class */ (function () {
    function Clipboard(editor) {
        this.nodeBuffer = "";
        this.connectionBuffer = "";
        this.editor = editor;
    }
    Object.defineProperty(Clipboard.prototype, "isEmpty", {
        get: function () {
            return !this.nodeBuffer;
        },
        enumerable: false,
        configurable: true
    });
    Clipboard.prototype.clear = function () {
        this.nodeBuffer = "";
        this.connectionBuffer = "";
    };
    Clipboard.prototype.copy = function (selectedNodes) {
        this.connectionBuffer = JSON.stringify(this.editor.connections
            .filter(function (conn) { return selectedNodes.includes(conn.from.parent) && selectedNodes.includes(conn.to.parent); })
            .map(function (conn) { return ({ from: conn.from.id, to: conn.to.id }); }));
        this.nodeBuffer = JSON.stringify(selectedNodes.map(function (n) { return n.save(); }));
    };
    Clipboard.prototype.paste = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        // Map old IDs to new IDs
        var idmap = new Map();
        // TODO: What is this?
        var intfmap = new Map();
        var parsedNodeBuffer = JSON.parse(this.nodeBuffer);
        var parsedConnectionBuffer = JSON.parse(this.connectionBuffer);
        var _loop_1 = function (n) {
            var nodeType = this_1.editor.nodeTypes.get(n.type);
            if (!nodeType) {
                // tslint:disable-next-line: no-console
                console.warn("Node type " + n.type + " not registered");
                return { value: void 0 };
            }
            var copiedNode = new nodeType();
            var generatedId = copiedNode.id;
            copiedNode.interfaces.forEach(function (intf) {
                intf.hooks.load.tap(_this, function (intfState) {
                    var newIntfId = _this.editor.generateId("ni");
                    idmap.set(intfState.id, newIntfId);
                    intfmap.set(intfState.id, generatedId);
                    intf.id = newIntfId;
                    intf.hooks.load.untap(_this);
                    return intfState;
                });
            });
            copiedNode.hooks.load.tap(this_1, function (nodeState) {
                var ns = nodeState;
                if (ns.position) {
                    ns.position.x += 10;
                    ns.position.y += 10;
                }
                return ns;
            });
            this_1.editor.addNode(copiedNode);
            copiedNode.load(n);
            copiedNode.id = generatedId;
            idmap.set(n.id, generatedId);
        };
        var this_1 = this;
        try {
            for (var parsedNodeBuffer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parsedNodeBuffer), parsedNodeBuffer_1_1 = parsedNodeBuffer_1.next(); !parsedNodeBuffer_1_1.done; parsedNodeBuffer_1_1 = parsedNodeBuffer_1.next()) {
                var n = parsedNodeBuffer_1_1.value;
                var state_1 = _loop_1(n);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parsedNodeBuffer_1_1 && !parsedNodeBuffer_1_1.done && (_a = parsedNodeBuffer_1.return)) _a.call(parsedNodeBuffer_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var _loop_2 = function (c) {
            var fromNode = this_2.editor.nodes.find(function (n) { return n.id === intfmap.get(c.from); });
            var toNode = this_2.editor.nodes.find(function (n) { return n.id === intfmap.get(c.to); });
            if (!fromNode || !toNode) {
                return "continue";
            }
            var fromIntf = Array.from(fromNode.interfaces.values()).find(function (intf) { return intf.id === idmap.get(c.from); });
            var toIntf = Array.from(toNode.interfaces.values()).find(function (intf) { return intf.id === idmap.get(c.to); });
            if (!fromIntf || !toIntf) {
                return "continue";
            }
            this_2.editor.addConnection(fromIntf, toIntf);
        };
        var this_2 = this;
        try {
            for (var parsedConnectionBuffer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parsedConnectionBuffer), parsedConnectionBuffer_1_1 = parsedConnectionBuffer_1.next(); !parsedConnectionBuffer_1_1.done; parsedConnectionBuffer_1_1 = parsedConnectionBuffer_1.next()) {
                var c = parsedConnectionBuffer_1_1.value;
                _loop_2(c);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (parsedConnectionBuffer_1_1 && !parsedConnectionBuffer_1_1.done && (_b = parsedConnectionBuffer_1.return)) _b.call(parsedConnectionBuffer_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Clipboard;
}());
/* harmony default export */ __webpack_exports__["a"] = (Clipboard);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nodeStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _connectionStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);


var History = /** @class */ (function () {
    function History(viewPlugin) {
        var _this = this;
        this.maxSteps = 200;
        this.steps = [];
        this.changeBySelf = false;
        this.currentIndex = -1;
        this.activeTransaction = false;
        this.transactionSteps = [];
        this.viewPlugin = viewPlugin;
        this.viewPlugin.editor.events.addNode.addListener(this, function (node) {
            _this.addStep(new _nodeStep__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]("addNode", node.id));
        });
        this.viewPlugin.editor.events.removeNode.addListener(this, function (node) {
            _this.addStep(new _nodeStep__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]("removeNode", node.save()));
        });
        this.viewPlugin.editor.events.addConnection.addListener(this, function (conn) {
            _this.addStep(new _connectionStep__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]("addConnection", conn.id));
        });
        this.viewPlugin.editor.events.removeConnection.addListener(this, function (conn) {
            _this.addStep(new _connectionStep__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]("removeConnection", conn));
        });
    }
    History.prototype.startTransaction = function () {
        this.activeTransaction = true;
    };
    History.prototype.commitTransaction = function () {
        this.activeTransaction = false;
    };
    History.prototype.undo = function () {
        if (this.steps.length === 0 || this.currentIndex === -1) {
            return;
        }
        this.changeBySelf = true;
        this.steps[this.currentIndex--].undo(this.viewPlugin.editor);
        this.changeBySelf = false;
    };
    History.prototype.redo = function () {
        if (this.steps.length === 0 || this.currentIndex >= this.steps.length - 1) {
            return;
        }
        this.changeBySelf = true;
        this.steps[++this.currentIndex].redo(this.viewPlugin.editor);
        this.changeBySelf = false;
    };
    History.prototype.addStep = function (step) {
        if (this.changeBySelf) {
            return;
        }
        if (this.activeTransaction) {
            this.transactionSteps.push(step);
        }
        else {
            if (this.currentIndex !== this.steps.length - 1) {
                this.steps = this.steps.slice(0, this.currentIndex + 1);
            }
            this.steps.push(step);
            this.currentIndex++;
            while (this.steps.length > this.maxSteps) {
                this.steps.shift();
            }
        }
    };
    return History;
}());
/* harmony default export */ __webpack_exports__["a"] = (History);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);




/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return process; });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);





var process = function () {
    var depth = 0;
    Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__[/* gatherActiveObservationsAtDepth */ "a"])(depth);
    while (Object(_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__[/* hasActiveObservations */ "a"])()) {
        depth = Object(_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__[/* broadcastActiveObservations */ "a"])();
        Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__[/* gatherActiveObservationsAtDepth */ "a"])(depth);
    }
    if (Object(_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__[/* hasSkippedObservations */ "a"])()) {
        Object(_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__[/* deliverResizeLoopError */ "a"])();
    }
    return depth > 0;
};



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasActiveObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

var hasActiveObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__[/* resizeObservers */ "a"].some(function (ro) { return ro.activeTargets.length > 0; });
};



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasSkippedObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

var hasSkippedObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__[/* resizeObservers */ "a"].some(function (ro) { return ro.skippedTargets.length > 0; });
};



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deliverResizeLoopError; });
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return broadcastActiveObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);




var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__[/* resizeObservers */ "a"].forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__[/* ResizeObserverEntry */ "a"](ot.target);
            var targetDepth = Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__[/* calculateDepthForNode */ "a"])(ot.target);
            entries.push(entry);
            ot.lastReportedSize = Object(_calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__[/* calculateBoxSize */ "a"])(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queueResizeObserver; });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);

var queueResizeObserver = function (cb) {
    Object(_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__[/* queueMicroTask */ "a"])(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queueMicroTask; });
var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObservation; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



var skipNotifyOnElement = function (target) {
    return !Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__[/* isSVG */ "d"])(target)
        && !Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__[/* isReplacedElement */ "c"])(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserverBoxOptions */ "a"].CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__[/* calculateBoxSize */ "a"])(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserverDetail; });
var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeName; });
function sanitizeName(name) {
    return name.replace(" ", "-");
}


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(5));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from && force === false) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.default = index;
exports.Portal = Portal;
exports.PortalTarget = PortalTarget;
exports.MountingPortal = MountingPortal;
exports.Wormhole = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_connection_ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49);
/* harmony import */ var _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaklavaVuePlugin", function() { return _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _viewPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPlugin", function() { return _viewPlugin__WEBPACK_IMPORTED_MODULE_11__["a"]; });











var Components = {
    Connection: _components_connection_ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], ConnectionWrapper: _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], TemporaryConnection: _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    Node: _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], NodeInterface: _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], NodeOption: _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    ContextMenu: _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Minimap: _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
};




/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SequentialHook=t.Hook=t.PreventableBaklavaEvent=t.BaklavaEvent=void 0;var o=n(1),r=function(){function e(){this.listeners=new Map}return e.prototype.addListener=function(e,t){this.listeners.set(e,t)},e.prototype.removeListener=function(e){this.listeners.has(e)&&this.listeners.delete(e)},e.prototype.emit=function(e){this.listeners.forEach((function(t){return t(e)}))},e}();t.BaklavaEvent=r;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.emit=function(e){var t,n;try{for(var r=o.__values(Array.from(this.listeners.values())),i=r.next();!i.done;i=r.next()){if(!1===(0,i.value)(e))return!0}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return!1},t}(r);t.PreventableBaklavaEvent=i;var a=function(){function e(){this.tapMap=new Map,this.taps=[]}return e.prototype.tap=function(e,t){this.tapMap.has(e)&&this.untap(e),this.tapMap.set(e,t),this.taps.push(t)},e.prototype.untap=function(e){if(this.tapMap.has(e)){var t=this.tapMap.get(e);this.tapMap.delete(e);var n=this.taps.indexOf(t);n>=0&&this.taps.splice(n,1)}},e}();t.Hook=a;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.execute=function(e){var t,n,r=e;try{for(var i=o.__values(this.taps),a=i.next();!a.done;a=i.next()){r=(0,a.value)(r)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r},t}(a);t.SequentialHook=u},function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return r})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return u})),n.d(t,"__param",(function(){return s})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return v})),n.d(t,"__spread",(function(){return y})),n.d(t,"__spreadArrays",(function(){return m})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return _})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return g})),n.d(t,"__makeTemplateObject",(function(){return O})),n.d(t,"__importStar",(function(){return k})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return P})),n.d(t,"__classPrivateFieldSet",(function(){return j}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}function u(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function s(e,t){return function(n,o){t(n,o,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function u(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((o=o.apply(e,t||[])).next())}))}function l(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function d(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,r++)o[r]=i[a];return o}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function _(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){r[e]&&(o[e]=function(t){return new Promise((function(n,o){i.push([e,t,n,o])>1||u(e,t)}))})}function u(e,t){try{(n=r[e](t)).value instanceof b?Promise.resolve(n.value.v).then(s,c):f(i[0][2],n)}catch(e){f(i[0][3],e)}var n}function s(e){u("next",e)}function c(e){u("throw",e)}function f(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(e){var t,n;return t={},o("next"),o("throw",(function(e){throw e})),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return(n=!n)?{value:b(e[o](t)),done:"return"===o}:r?r(t):t}:r}}function g(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){(function(e,t,n,o){Promise.resolve(o).then((function(t){e({value:t,done:n})}),t)})(o,r,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function P(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},function(e,t,n){"use strict";n.r(t),n.d(t,"Connection",(function(){return a})),n.d(t,"DummyConnection",(function(){return u})),n.d(t,"Editor",(function(){return c})),n.d(t,"Node",(function(){return d})),n.d(t,"NodeBuilder",(function(){return h})),n.d(t,"NodeInterface",(function(){return f})),n.d(t,"NodeOption",(function(){return l}));var o=0;function r(){return Date.now().toString()+(o++).toString()}var i=n(0),a=function(){function e(e,t){if(this.isInDanger=!1,this.destructed=!1,this.events={destruct:new i.BaklavaEvent},!e||!t)throw new Error("Cannot initialize connection with null/undefined for 'from' or 'to' values");this.id=r(),this.from=e,this.to=t,this.from.connectionCount++,this.to.connectionCount++}return e.prototype.destruct=function(){this.events.destruct.emit(),this.from.connectionCount--,this.to.connectionCount--,this.destructed=!0},e}(),u=function(e,t){if(!e||!t)throw new Error("Cannot initialize connection with null/undefined for 'from' or 'to' values");this.id=r(),this.from=e,this.to=t},s=n(1),c=function(){function e(){this._plugins=new Set,this._nodes=[],this._connections=[],this._nodeTypes=new Map,this._nodeCategories=new Map([["default",[]]]),this.events={beforeRegisterNodeType:new i.PreventableBaklavaEvent,registerNodeType:new i.BaklavaEvent,beforeAddNode:new i.PreventableBaklavaEvent,addNode:new i.BaklavaEvent,beforeRemoveNode:new i.PreventableBaklavaEvent,removeNode:new i.BaklavaEvent,beforeAddConnection:new i.PreventableBaklavaEvent,addConnection:new i.BaklavaEvent,checkConnection:new i.PreventableBaklavaEvent,beforeRemoveConnection:new i.PreventableBaklavaEvent,removeConnection:new i.BaklavaEvent,beforeUsePlugin:new i.PreventableBaklavaEvent,usePlugin:new i.BaklavaEvent},this.hooks={save:new i.SequentialHook,load:new i.SequentialHook}}return Object.defineProperty(e.prototype,"nodes",{get:function(){return this._nodes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"connections",{get:function(){return this._connections},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nodeTypes",{get:function(){return this._nodeTypes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nodeCategories",{get:function(){return this._nodeCategories},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"plugins",{get:function(){return this._plugins},enumerable:!1,configurable:!0}),e.prototype.registerNodeType=function(e,t,n){void 0===n&&(n="default"),this.events.beforeRegisterNodeType.emit({typeName:e,type:t,category:n})||(this._nodeTypes.set(e,t),this.nodeCategories.has(n)||this._nodeCategories.set(n,[]),this.nodeCategories.get(n).push(e),this.events.registerNodeType.emit({typeName:e,type:t,category:n}))},e.prototype.addNode=function(e){if(!this.events.beforeAddNode.emit(e))return e.registerEditor(this),this._nodes.push(e),this.events.addNode.emit(e),e},e.prototype.removeNode=function(e){var t=this;if(this.nodes.includes(e)){if(this.events.beforeRemoveNode.emit(e))return;this.connections.filter((function(t){return t.from.parent===e||t.to.parent===e})).forEach((function(e){return t.removeConnection(e)})),this._nodes.splice(this.nodes.indexOf(e),1),this.events.removeNode.emit(e)}},e.prototype.addConnection=function(e,t){var n=this.checkConnection(e,t);if(n&&!this.events.beforeAddConnection.emit({from:e,to:t})){var o=new a(n.from,n.to);return this._connections.push(o),this.events.addConnection.emit(o),o}},e.prototype.removeConnection=function(e){if(this.connections.includes(e)){if(this.events.beforeRemoveConnection.emit(e))return;e.destruct(),this._connections.splice(this.connections.indexOf(e),1),this.events.removeConnection.emit(e)}},e.prototype.checkConnection=function(e,t){if(!e||!t)return!1;if(e.parent===t.parent)return!1;if(e.isInput&&!t.isInput){var n=e;e=t,t=n}return!(e.isInput||!t.isInput)&&(!this.connections.some((function(n){return n.from===e&&n.to===t}))&&(!this.events.checkConnection.emit({from:e,to:t})&&new u(e,t)))},e.prototype.load=function(e){for(var t,n,o,r,i=[],a=this.connections.length-1;a>=0;a--)this.removeConnection(this.connections[a]);for(a=this.nodes.length-1;a>=0;a--)this.removeNode(this.nodes[a]);try{for(var u=Object(s.__values)(e.nodes),c=u.next();!c.done;c=u.next()){var f=c.value,l=this.nodeTypes.get(f.type);if(l){var d=new l;this.addNode(d),d.load(f)}else i.push("Node type "+f.type+" is not registered")}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}try{for(var p=Object(s.__values)(e.connections),h=p.next();!h.done;h=p.next()){var v=h.value,y=this.findNodeInterface(v.from),m=this.findNodeInterface(v.to);if(y)if(m){var b=this.addConnection(y,m);b?b.id=v.id:i.push("Unable to create connection from "+v.from+" to "+v.to)}else i.push("Could not find interface with id "+v.to);else i.push("Could not find interface with id "+v.from)}}catch(e){o={error:e}}finally{try{h&&!h.done&&(r=p.return)&&r.call(p)}finally{if(o)throw o.error}}return this.hooks.load.execute(e),i.forEach((function(e){return console.warn(e)})),i},e.prototype.save=function(){var e={nodes:this.nodes.map((function(e){return e.save()})),connections:this.connections.map((function(e){return{id:e.id,from:e.from.id,to:e.to.id}}))};return this.hooks.save.execute(e)},e.prototype.use=function(e){return!this.events.beforeUsePlugin.emit(e)&&(this._plugins.add(e),e.register(this),this.events.usePlugin.emit(e),!0)},e.prototype.generateId=function(e){return void 0===e&&(e=""),e+r()},e.prototype.findNodeInterface=function(e){var t,n,o,r;try{for(var i=Object(s.__values)(this.nodes),a=i.next();!a.done;a=i.next()){var u=a.value;try{for(var c=(o=void 0,Object(s.__values)(u.interfaces.keys())),f=c.next();!f.done;f=c.next()){var l=f.value;if(u.interfaces.get(l).id===e)return u.interfaces.get(l)}}catch(e){o={error:e}}finally{try{f&&!f.done&&(r=c.return)&&r.call(c)}finally{if(o)throw o.error}}}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(),f=function(){function e(e,t){this.events={setConnectionCount:new i.BaklavaEvent,beforeSetValue:new i.PreventableBaklavaEvent,setValue:new i.BaklavaEvent,updated:new i.BaklavaEvent},this.hooks={load:new i.SequentialHook,save:new i.SequentialHook},this._connectionCount=0,this._value=null,this.parent=e,this.isInput=t,this.id="ni_"+r()}return Object.defineProperty(e.prototype,"connectionCount",{get:function(){return this._connectionCount},set:function(e){this._connectionCount=e,this.events.setConnectionCount.emit(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this.events.beforeSetValue.emit(e)||(this._value=e,this.events.setValue.emit(e))},enumerable:!1,configurable:!0}),e.prototype.load=function(e){this.id=e.id,this.value=e.value,this.hooks.load.execute(e)},e.prototype.save=function(){var e={id:this.id,value:this.value};return this.hooks.save.execute(e)},e}(),l=function(){function e(e,t,n){this.events={beforeSetValue:new i.PreventableBaklavaEvent,setValue:new i.BaklavaEvent,updated:new i.BaklavaEvent},this.optionComponent=e,this.sidebarComponent=n,this._value=t}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this.events.beforeSetValue.emit(e)||(this._value=e,this.events.setValue.emit(e))},enumerable:!1,configurable:!0}),e}(),d=function(){function e(){this.id="node_"+r(),this.interfaces=new Map,this.options=new Map,this.state={},this.events={beforeAddInterface:new i.PreventableBaklavaEvent,addInterface:new i.BaklavaEvent,beforeRemoveInterface:new i.PreventableBaklavaEvent,removeInterface:new i.BaklavaEvent,beforeAddOption:new i.PreventableBaklavaEvent,addOption:new i.BaklavaEvent,beforeRemoveOption:new i.PreventableBaklavaEvent,removeOption:new i.BaklavaEvent,update:new i.BaklavaEvent},this.hooks={load:new i.SequentialHook,save:new i.SequentialHook}}return Object.defineProperty(e.prototype,"inputInterfaces",{get:function(){var e={};return this.interfaces.forEach((function(t,n){t.isInput&&(e[n]=t)})),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outputInterfaces",{get:function(){var e={};return this.interfaces.forEach((function(t,n){t.isInput||(e[n]=t)})),e},enumerable:!1,configurable:!0}),e.prototype.load=function(e){var t=this;this.id=e.id,this.name=e.name,this.state=e.state,e.options.forEach((function(e){var n=Object(s.__read)(e,2),o=n[0],r=n[1];t.options.has(o)&&(t.options.get(o).value=r)})),e.interfaces.forEach((function(e){var n=Object(s.__read)(e,2),o=n[0],r=n[1];t.interfaces.has(o)&&t.interfaces.get(o).load(r)})),this.hooks.load.execute(e)},e.prototype.save=function(){var e={type:this.type,id:this.id,name:this.name,options:Array.from(this.options.entries()).map((function(e){var t=Object(s.__read)(e,2);return[t[0],t[1].value]})),state:this.state,interfaces:Array.from(this.interfaces.entries()).map((function(e){var t=Object(s.__read)(e,2);return[t[0],t[1].save()]}))};return this.hooks.save.execute(e)},e.prototype.calculate=function(e){},e.prototype.addInputInterface=function(e,t,n,o){var r=this;if(void 0===n&&(n=null),!this.events.beforeAddInterface.emit({name:e,isInput:!0,option:t,defaultValue:n})){var i=this.addInterface(!0,e,t);return i.events.setValue.addListener(this,(function(){return r.events.update.emit({name:e,interface:i})})),i.value=n,Object.entries(o||{}).forEach((function(e){var t=Object(s.__read)(e,2),n=t[0],o=t[1];i[n]=o})),this.events.addInterface.emit(i),i}},e.prototype.addOutputInterface=function(e,t){if(!this.events.beforeAddInterface.emit({name:e,isInput:!1})){var n=this.addInterface(!1,e);return Object.entries(t||{}).forEach((function(e){var t=Object(s.__read)(e,2),o=t[0],r=t[1];n[o]=r})),this.events.addInterface.emit(n),n}},e.prototype.removeInterface=function(e){var t=this,n=this.getInterface(e);if(n){if(this.events.beforeRemoveInterface.emit(n))return;if(n.connectionCount>0){if(!this.editorInstance)throw new Error("Interface is connected, but no editor instance is specified. Unable to delete interface");this.editorInstance.connections.filter((function(e){return e.from===n||e.to===n})).forEach((function(e){t.editorInstance.removeConnection(e)}))}this.interfaces.delete(e),this.events.removeInterface.emit(n)}},e.prototype.addOption=function(e,t,n,o,r){var i=this;if(void 0===n&&(n=null),!this.events.beforeAddOption.emit({name:e,component:t,defaultValue:n,sidebarComponent:o})){var a=new l(t,n,o);return Object.entries(r||{}).forEach((function(e){var t=Object(s.__read)(e,2),n=t[0],o=t[1];a[n]=o})),a.events.setValue.addListener(this,(function(){i.events.update.emit({name:e,option:a})})),this.options.set(e,a),this.events.addOption.emit({name:e,option:a}),a}},e.prototype.removeOption=function(e){if(this.options.has(e)){var t=this.options.get(e);if(this.events.beforeRemoveOption.emit({name:e,option:t}))return;this.options.delete(e),this.events.removeOption.emit({name:e,option:t})}},e.prototype.getInterface=function(e){if(!this.interfaces.has(e))throw new Error("No interface named '"+e+"'");return this.interfaces.get(e)},e.prototype.getOptionValue=function(e){if(!this.options.has(e))throw new Error("No option named '"+e+"'");return this.options.get(e).value},e.prototype.setOptionValue=function(e,t){if(!this.options.has(e))throw new Error("No option named '"+e+"'");this.options.get(e).value=t},e.prototype.registerEditor=function(e){this.editorInstance=e},e.prototype.addInterface=function(e,t,n){var o=new f(this,e);return o.option=n,this.interfaces.set(t,o),o},e}();function p(e){return"function"==typeof e?e():e}var h=function(){function e(e,t){this.type="",this.name="",this.intfs=[],this.options=new Map,this.type=e,this.name=e,this.additionalProperties=t}return e.prototype.build=function(){return e=this.type,t=this.name,n=this.additionalProperties,o=this.intfs,r=this.options,i=this.calcFunction,function(a){function u(){var i,u,c=a.call(this)||this;c.type=e,c.name=t,n&&Object.assign(c,n);try{for(var f=Object(s.__values)(o),l=f.next();!l.done;l=f.next()){var d=l.value;d.isInput?c.addInputInterface(d.name,d.option,p(d.defaultValue),d.additionalProperties):c.addOutputInterface(d.name,d.additionalProperties)}}catch(e){i={error:e}}finally{try{l&&!l.done&&(u=f.return)&&u.call(f)}finally{if(i)throw i.error}}return Array.from(r.entries()).forEach((function(e){var t=Object(s.__read)(e,2),n=t[0],o=t[1];c.addOption(n,o.optionComponent,p(o.value),o.sidebarComponent,o.additionalProperties)})),c}return Object(s.__extends)(u,a),u.prototype.calculate=function(e){if(i)return i.call(this,this,e)},u}(d);var e,t,n,o,r,i},e.prototype.setName=function(e){return this.name=e,this},e.prototype.addInputInterface=function(e,t,n,o){return void 0===n&&(n=null),this.checkDefaultValue(n),this.intfs.push({isInput:!0,name:e,option:t,defaultValue:n,additionalProperties:o}),this},e.prototype.addOutputInterface=function(e,t){return this.intfs.push({isInput:!1,name:e,additionalProperties:t}),this},e.prototype.addOption=function(e,t,n,o,r){return void 0===n&&(n=null),this.checkDefaultValue(n),this.options.set(e,{value:n,optionComponent:t,sidebarComponent:o,additionalProperties:r}),this},e.prototype.onCalculate=function(e){return this.calcFunction=e,this},e.prototype.checkDefaultValue=function(e){if("object"==typeof e&&null!==e)throw new Error("If the default value is an object, provide a generator function instead of the object")},e}()}])}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return a})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return c})),n.d(e,"__metadata",(function(){return s})),n.d(e,"__awaiter",(function(){return l})),n.d(e,"__generator",(function(){return f})),n.d(e,"__createBinding",(function(){return h})),n.d(e,"__exportStar",(function(){return d})),n.d(e,"__values",(function(){return p})),n.d(e,"__read",(function(){return y})),n.d(e,"__spread",(function(){return v})),n.d(e,"__spreadArrays",(function(){return _})),n.d(e,"__await",(function(){return b})),n.d(e,"__asyncGenerator",(function(){return w})),n.d(e,"__asyncDelegator",(function(){return m})),n.d(e,"__asyncValues",(function(){return g})),n.d(e,"__makeTemplateObject",(function(){return O})),n.d(e,"__importStar",(function(){return x})),n.d(e,"__importDefault",(function(){return P})),n.d(e,"__classPrivateFieldGet",(function(){return j})),n.d(e,"__classPrivateFieldSet",(function(){return E}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function c(t,e){return function(n,r){e(n,r,t)}}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function f(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function h(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}function d(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])}function p(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function _(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function w(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(i[0][2],n)}catch(t){l(i[0][3],t)}var n}function c(t){u("next",t)}function s(t){u("throw",t)}function l(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function m(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:b(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function g(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function O(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function x(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function P(t){return t&&t.__esModule?t:{default:t}}function j(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function E(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SequentialHook=e.Hook=e.PreventableBaklavaEvent=e.BaklavaEvent=void 0;var r=n(0),o=function(){function t(){this.listeners=new Map}return t.prototype.addListener=function(t,e){this.listeners.set(t,e)},t.prototype.removeListener=function(t){this.listeners.has(t)&&this.listeners.delete(t)},t.prototype.emit=function(t){this.listeners.forEach((function(e){return e(t)}))},t}();e.BaklavaEvent=o;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.emit=function(t){var e,n;try{for(var o=r.__values(Array.from(this.listeners.values())),i=o.next();!i.done;i=o.next()){if(!1===(0,i.value)(t))return!0}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return!1},e}(o);e.PreventableBaklavaEvent=i;var a=function(){function t(){this.tapMap=new Map,this.taps=[]}return t.prototype.tap=function(t,e){this.tapMap.has(t)&&this.untap(t),this.tapMap.set(t,e),this.taps.push(e)},t.prototype.untap=function(t){if(this.tapMap.has(t)){var e=this.tapMap.get(t);this.tapMap.delete(t);var n=this.taps.indexOf(e);n>=0&&this.taps.splice(n,1)}},t}();e.Hook=a;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.execute=function(t){var e,n,o=t;try{for(var i=r.__values(this.taps),a=i.next();!a.done;a=i.next()){o=(0,a.value)(o)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return o},e}(a);e.SequentialHook=u},function(t,e,n){"use strict";n.r(e),n.d(e,"Engine",(function(){return h})),n.d(e,"calculateOrder",(function(){return l})),n.d(e,"containsCycle",(function(){return f}));var r=n(0),o=n(1);function i(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;Object.create;new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");var u=new Error("request for lock canceled"),c=function(){function t(t,e){if(void 0===e&&(e=u),this._maxConcurrency=t,this._cancelError=e,this._queue=[],t<=0)throw new Error("semaphore must be initialized to a positive value");this._value=t}return t.prototype.acquire=function(){var t=this,e=this.isLocked(),n=new Promise((function(e,n){return t._queue.push({resolve:e,reject:n})}));return e||this._dispatch(),n},t.prototype.runExclusive=function(t){return i(this,void 0,void 0,(function(){var e,n,r;return a(this,(function(o){switch(o.label){case 0:return[4,this.acquire()];case 1:e=o.sent(),n=e[0],r=e[1],o.label=2;case 2:return o.trys.push([2,,4,5]),[4,t(n)];case 3:return[2,o.sent()];case 4:return r(),[7];case 5:return[2]}}))}))},t.prototype.isLocked=function(){return this._value<=0},t.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var t=this._currentReleaser;this._currentReleaser=void 0,t()}},t.prototype.cancel=function(){var t=this;this._queue.forEach((function(e){return e.reject(t._cancelError)})),this._queue=[]},t.prototype._dispatch=function(){var t=this,e=this._queue.shift();if(e){var n=!1;this._currentReleaser=function(){n||(n=!0,t._value++,t._dispatch())},e.resolve([this._value--,this._currentReleaser])}},t}(),s=function(){function t(t){this._semaphore=new c(1,t)}return t.prototype.acquire=function(){return i(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return[4,this._semaphore.acquire()];case 1:return t=e.sent(),[2,t[1]]}}))}))},t.prototype.runExclusive=function(t){return this._semaphore.runExclusive((function(){return t()}))},t.prototype.isLocked=function(){return this._semaphore.isLocked()},t.prototype.release=function(){this._semaphore.release()},t.prototype.cancel=function(){return this._semaphore.cancel()},t}();function l(t,e,n){var o=new Map;t.forEach((function(t){o.set(t,e.filter((function(e){return e.to&&e.to.parent===t})).map((function(t){return t.from.parent})))}));var i=n||t.filter((function(t){return e=t.outputInterfaces,[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length;var e})),a={children:i.map((function(t){return{n:t,children:[]}}))};!function t(e,n,o){var i,a;try{for(var u=Object(r.__values)(e.children),c=u.next();!c.done;c=u.next()){var s=c.value;if(n.includes(s.n))throw new Error("Cycle detected");n.unshift(s.n),s.children=s.children.concat(o.get(s.n).map((function(t){return{n:t,children:new Array}}))),t(s,n,o),n.shift()}}catch(t){i={error:t}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(i)throw i.error}}}(a,[],o);var u=[],c=[];for(u.push(a);u.length>0;){u.shift().children.forEach((function(t){c.push(t.n),u.push(t)}))}for(var s=[];c.length>0;){var l=c.pop();s.includes(l)||s.push(l)}return{calculationOrder:s,rootNodes:i}}function f(t,e){try{return l(t,e),!0}catch(t){return!1}}var h=function(){function t(t){void 0===t&&(t=!1),this.type="EnginePlugin",this.events={beforeCalculate:new o.PreventableBaklavaEvent,calculated:new o.BaklavaEvent},this.hooks={gatherCalculationData:new o.SequentialHook},this.nodeCalculationOrder=[],this.actualRootNodes=[],this.connectionsPerNode=new Map,this.recalculateOrder=!1,this.calculateOnChange=!1,this.calculationInProgress=!1,this.mutex=new s,this._rootNodes=void 0,this.interfaceTypePlugins=[],this.calculateOnChange=t}return Object.defineProperty(t.prototype,"rootNodes",{get:function(){return this._rootNodes},set:function(t){this._rootNodes=t,this.recalculateOrder=!0},enumerable:!1,configurable:!0}),t.prototype.register=function(t){var e=this;this.editor=t,this.editor.plugins.forEach((function(t){"InterfaceTypePlugin"===t.type&&e.interfaceTypePlugins.push(t)})),this.editor.events.usePlugin.addListener(this,(function(t){"InterfaceTypePlugin"===t.type&&e.interfaceTypePlugins.push(t)})),this.editor.events.addNode.addListener(this,(function(t){t.events.update.addListener(e,(function(t){(t.interface&&0===t.interface.connectionCount||t.option)&&e.onChange(!1)})),e.onChange(!0)})),this.editor.events.removeNode.addListener(this,(function(t){t.events.update.removeListener(e)})),this.editor.events.checkConnection.addListener(this,(function(t){if(!e.checkConnection(t.from,t.to))return!1})),this.editor.events.addConnection.addListener(this,(function(t){e.editor.connections.filter((function(e){return e.id!==t.id&&e.to===t.to})).forEach((function(t){return e.editor.removeConnection(t)})),e.onChange(!0)})),this.editor.events.removeConnection.addListener(this,(function(){e.onChange(!0)}))},t.prototype.calculate=function(t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e=this;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.mutex.runExclusive((function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){switch(e.label){case 0:return[4,this.internalCalculate(t)];case 1:return[2,e.sent()]}}))}))}))];case 1:return[2,n.sent()]}}))}))},t.prototype.calculateOrder=function(){this.calculateNodeTree(),this.recalculateOrder=!1},t.prototype.internalCalculate=function(t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,n,o,i,a,u,c,s,l=this;return Object(r.__generator)(this,(function(f){switch(f.label){case 0:if(this.events.beforeCalculate.emit(t))return[2,null];t=this.hooks.gatherCalculationData.execute(t),this.calculationInProgress=!0,this.recalculateOrder&&this.calculateOrder(),e=new Map,f.label=1;case 1:f.trys.push([1,6,7,8]),n=Object(r.__values)(this.nodeCalculationOrder),o=n.next(),f.label=2;case 2:return o.done?[3,5]:[4,(i=o.value).calculate(t)];case 3:a=f.sent(),this.actualRootNodes.includes(i)&&e.set(i,a),this.connectionsPerNode.has(i)&&this.connectionsPerNode.get(i).forEach((function(t){var e=l.interfaceTypePlugins.find((function(e){return e.canConvert(t.from.type,t.to.type)}));t.to.value=e?e.convert(t.from.type,t.to.type,t.from.value):t.from.value})),f.label=4;case 4:return o=n.next(),[3,2];case 5:return[3,8];case 6:return u=f.sent(),c={error:u},[3,8];case 7:try{o&&!o.done&&(s=n.return)&&s.call(n)}finally{if(c)throw c.error}return[7];case 8:return this.calculationInProgress=!1,this.events.calculated.emit(e),[2,e]}}))}))},t.prototype.checkConnection=function(t,e){var n={from:t,to:e,id:"dc",destructed:!1,isInDanger:!1},r=this.editor.connections.concat([n]);return r.filter((function(t){return t.to!==e})),f(this.editor.nodes,r)},t.prototype.onChange=function(t){this.recalculateOrder=this.recalculateOrder||t,this.calculateOnChange&&!this.calculationInProgress&&this.calculate()},t.prototype.calculateNodeTree=function(){var t=this,e=l(this.editor.nodes,this.editor.connections,this.rootNodes),n=e.calculationOrder,r=e.rootNodes;this.nodeCalculationOrder=n,this.actualRootNodes=r,this.connectionsPerNode.clear(),this.editor.nodes.forEach((function(e){t.connectionsPerNode.set(e,t.editor.connections.filter((function(t){return t.from.parent===e})))}))},t}()}])}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"InterfaceTypePlugin",(function(){return r}));var r=function(){function t(){this.type="InterfaceTypePlugin",this.types=new Map}return t.prototype.register=function(t){var e=this;this.editor=t,this.editor.plugins.forEach((function(t){"ViewPlugin"===t.type&&e.registerView(t)})),this.editor.events.checkConnection.addListener(this,(function(t){var n=t.from,r=t.to,o=n.type,i=r.type;if(o&&i)return!!e.canConvert(o,i)&&void 0})),this.editor.events.usePlugin.addListener(this,(function(t){"ViewPlugin"===t.type&&e.registerView(t)}))},t.prototype.addType=function(t,e){return this.types.set(t,{color:e,conversions:[]}),this},t.prototype.addConversion=function(t,e,n){if(!this.types.has(t))throw new Error('Can not add conversion for unknown type "'+t+'"');return n||(n=function(t){return t}),this.types.get(t).conversions.push({targetType:e,transformationFunction:n}),this},t.prototype.getConversion=function(t,e){return this.types.has(t)&&this.types.get(t).conversions.find((function(t){return t.targetType===e}))},t.prototype.canConvert=function(t,e){return t===e||this.types.has(t)&&this.types.get(t).conversions.some((function(t){return t.targetType===e}))},t.prototype.convert=function(t,e,n){if(t===e)return n;var r=this.getConversion(t,e);if(r)return r.transformationFunction(n);throw Error('Can not convert from "'+t+'" to "'+e+'"')},t.prototype.registerView=function(t){var e=this;t.hooks.renderInterface.tap(this,(function(t){var n=t.intf||t.data;if(!n)throw new Error("Could not get interface data");if(e.types.has(n.type)){var r=e.types.get(n.type).color,o=t.$el.getElementsByClassName("__port");Array.from(o).forEach((function(t){t.classList.add("__port-"+n.type),t.style.backgroundColor=r}))}return t}))},t}()}])}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __read; });
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _decorators_InjectReactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _decorators_Provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46);
/* harmony import */ var _decorators_ProvideReactive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47);
/* harmony import */ var _decorators_Ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _decorators_VModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49);
/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>

















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDecorator; });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ __webpack_exports__["b"] = (Component);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return needToProduceProvide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return produceProvide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reactiveInjectKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inheritInjected; });
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMetadata; });
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Arrow.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseNumericOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var BaseNumericOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(BaseNumericOption, _super);
    function BaseNumericOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAX_STRING_LENGTH = 9;
        _this.editMode = false;
        _this.invalid = false;
        _this.tempValue = "0";
        return _this;
    }
    Object.defineProperty(BaseNumericOption.prototype, "v", {
        get: function () {
            if (typeof this.value === "string") {
                return parseFloat(this.value);
            }
            else if (typeof this.value === "number") {
                return this.value;
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNumericOption.prototype, "stringRepresentation", {
        get: function () {
            var s = this.v.toFixed(3);
            return s.length > this.MAX_STRING_LENGTH ? this.v.toExponential(this.MAX_STRING_LENGTH - 5) : s;
        },
        enumerable: false,
        configurable: true
    });
    BaseNumericOption.prototype.setValue = function (newValue) {
        if (this.validate(newValue)) {
            this.$emit("input", newValue);
        }
    };
    BaseNumericOption.prototype.resetInvalid = function () {
        this.invalid = false;
    };
    BaseNumericOption.prototype.enterEditMode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "b"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "e"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tempValue = this.v.toFixed(3);
                        this.editMode = true;
                        return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.$refs.input.focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseNumericOption.prototype.leaveEditMode = function () {
        var v = parseFloat(this.tempValue);
        if (!this.validate(v)) {
            this.invalid = true;
        }
        else {
            this.$emit("input", v);
            this.editMode = false;
        }
    };
    BaseNumericOption.prototype.validate = function (v) {
        if (Number.isNaN(v)) {
            return false;
        }
        else if (typeof this.option.min === "number" && v < this.option.min) {
            return false;
        }
        else if (typeof this.option.max === "number" && v > this.option.max) {
            return false;
        }
        else {
            return true;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])()
    ], BaseNumericOption.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String })
    ], BaseNumericOption.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: Object })
    ], BaseNumericOption.prototype, "option", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Watch */ "d"])("tempValue")
    ], BaseNumericOption.prototype, "resetInvalid", null);
    BaseNumericOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], BaseNumericOption);
    return BaseNumericOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonOption_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonOption", function() { return _ButtonOption_vue__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _CheckboxOption_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxOption", function() { return _CheckboxOption_vue__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _InputOption_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputOption", function() { return _InputOption_vue__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _IntegerOption_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerOption", function() { return _IntegerOption_vue__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _NumberOption_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberOption", function() { return _NumberOption_vue__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _SelectOption_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOption", function() { return _SelectOption_vue__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _SliderOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderOption", function() { return _SliderOption_vue__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _TextOption_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextOption", function() { return _TextOption_vue__WEBPACK_IMPORTED_MODULE_7__["a"]; });












/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var ButtonOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(ButtonOption, _super);
    function ButtonOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String })
    ], ButtonOption.prototype, "name", void 0);
    ButtonOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], ButtonOption);
    return ButtonOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (ButtonOption);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var InputOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(InputOption, _super);
    function InputOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: Boolean })
    ], InputOption.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String })
    ], InputOption.prototype, "name", void 0);
    InputOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], InputOption);
    return InputOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (InputOption);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var InputOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(InputOption, _super);
    function InputOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputOption.prototype, "listeners", {
        get: function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this.$listeners), { input: function (ev) { return _this.$emit("input", ev.target.value); } });
        },
        enumerable: false,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String, default: "" })
    ], InputOption.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String })
    ], InputOption.prototype, "name", void 0);
    InputOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], InputOption);
    return InputOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (InputOption);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




var IntegerOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(IntegerOption, _super);
    function IntegerOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IntegerOption.prototype, "v", {
        get: function () {
            if (typeof (this.value) === "string") {
                return parseInt(this.value, 10);
            }
            else if (typeof (this.value) === "number") {
                return Math.floor(this.value);
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegerOption.prototype, "stringRepresentation", {
        get: function () {
            var s = this.v.toString();
            return s.length > this.MAX_STRING_LENGTH ?
                this.v.toExponential(this.MAX_STRING_LENGTH - 5) :
                s;
        },
        enumerable: false,
        configurable: true
    });
    IntegerOption.prototype.increment = function () {
        this.setValue(this.v + 1);
    };
    IntegerOption.prototype.decrement = function () {
        this.setValue(this.v - 1);
    };
    IntegerOption.prototype.leaveEditMode = function () {
        var v = parseInt(this.tempValue, 10);
        if (!this.validate(v)) {
            this.invalid = true;
        }
        else {
            this.$emit("input", v);
            this.editMode = false;
        }
    };
    IntegerOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
            }
        })
    ], IntegerOption);
    return IntegerOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_3__[/* BaseNumericOption */ "a"]));
/* harmony default export */ __webpack_exports__["a"] = (IntegerOption);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var Arrow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(Arrow, _super);
    function Arrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arrow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], Arrow);
    return Arrow;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (Arrow);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




var NumberOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(NumberOption, _super);
    function NumberOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberOption.prototype.increment = function () {
        this.setValue(this.v + 0.1);
    };
    NumberOption.prototype.decrement = function () {
        this.setValue(this.v - 0.1);
    };
    NumberOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
            }
        })
    ], NumberOption);
    return NumberOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_3__[/* BaseNumericOption */ "a"]));
/* harmony default export */ __webpack_exports__["a"] = (NumberOption);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_3__);



// @ts-ignore

var SelectOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(SelectOption, _super);
    function SelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = false;
        _this.items = [];
        return _this;
    }
    Object.defineProperty(SelectOption.prototype, "isAdvancedMode", {
        get: function () {
            return !this.items.every(function (i) { return typeof (i) === "string"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectOption.prototype, "selectedText", {
        get: function () {
            var _a, _b;
            if (this.value) {
                return this.isAdvancedMode ? (_b = (_a = this.getItemByValue(this.value)) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "" :
                    this.value;
            }
            else {
                return "";
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectOption.prototype.mounted = function () {
        var _this = this;
        // computed property won't work here due to missing reactivity
        this.items = this.option.items || [];
        this.option.events.updated.addListener(this, function () {
            _this.items = _this.option.items || [];
        });
    };
    SelectOption.prototype.beforeDestroy = function () {
        this.option.events.updated.removeListener(this);
    };
    SelectOption.prototype.isSelected = function (item) {
        if (this.isAdvancedMode) {
            return item.value === this.value;
        }
        else {
            return item === this.value;
        }
    };
    SelectOption.prototype.setSelected = function (item) {
        this.$emit("input", this.isAdvancedMode ? item.value : item);
    };
    SelectOption.prototype.getItemByValue = function (value) {
        return this.items.find(function (i) { return i.value === value; });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: String })
    ], SelectOption.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])()
    ], SelectOption.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ type: Object })
    ], SelectOption.prototype, "option", void 0);
    SelectOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"])({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
            },
            directives: {
                ClickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_3___default.a.directive
            }
        })
    ], SelectOption);
    return SelectOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (SelectOption);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



var SliderOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(SliderOption, _super);
    function SliderOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.didSlide = false;
        _this.isMouseDown = false;
        return _this;
    }
    Object.defineProperty(SliderOption.prototype, "min", {
        get: function () {
            return this.option.min || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderOption.prototype, "max", {
        get: function () {
            return this.option.max || 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderOption.prototype, "percentage", {
        get: function () {
            return Math.min(100, Math.max(0, (this.v * 100) / (this.max - this.min)));
        },
        enumerable: false,
        configurable: true
    });
    SliderOption.prototype.mousedown = function () {
        if (this.editMode) {
            return;
        }
        this.isMouseDown = true;
    };
    SliderOption.prototype.mouseup = function () {
        if (this.editMode) {
            return;
        }
        if (!this.didSlide) {
            this.enterEditMode();
        }
        this.isMouseDown = false;
        this.didSlide = false;
    };
    SliderOption.prototype.mouseleave = function (ev) {
        if (this.editMode) {
            return;
        }
        if (this.isMouseDown) {
            if (ev.offsetX >= this.$el.clientWidth) {
                this.$emit("input", this.max);
            }
            else if (ev.offsetX <= 0) {
                this.$emit("input", this.min);
            }
        }
        this.isMouseDown = false;
        this.didSlide = false;
    };
    SliderOption.prototype.mousemove = function (ev) {
        if (this.editMode) {
            return;
        }
        var v = Math.max(this.min, Math.min(this.max, (this.max - this.min) * (ev.offsetX / this.$el.clientWidth) + this.min));
        if (this.isMouseDown) {
            this.$emit("input", v);
            this.didSlide = true;
        }
    };
    SliderOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], SliderOption);
    return SliderOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__[/* BaseNumericOption */ "a"]));
/* harmony default export */ __webpack_exports__["a"] = (SliderOption);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var TextOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(TextOption, _super);
    function TextOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextOption.prototype, "sanitized", {
        get: function () {
            return String(this.value);
        },
        enumerable: false,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Prop */ "b"])({ default: "" })
    ], TextOption.prototype, "value", void 0);
    TextOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "c"])([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"]
    ], TextOption);
    return TextOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__[/* Vue */ "c"]));
/* harmony default export */ __webpack_exports__["a"] = (TextOption);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ButtonOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "dark-button --block",
      on: {
        click: function($event) {
          return _vm.$emit("openSidebar")
        }
      }
    },
    [_vm._v(_vm._s(_vm.name))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Emit */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Inject */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InjectReactive */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"]];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"]] = _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* reactiveInjectKey */ "d"];
        }
    });
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Model */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModelSync */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prop; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PropSync */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[/* applyMetadata */ "a"])(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Provide */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* inheritInjected */ "a"])(componentOptions);
        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* needToProduceProvide */ "b"])(provide)) {
            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* produceProvide */ "c"])(provide);
        }
        provide.managed[k] = key || k;
    });
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProvideReactive */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* inheritInjected */ "a"])(componentOptions);
        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* needToProduceProvide */ "b"])(provide)) {
            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[/* produceProvide */ "c"])(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ref */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VModel */
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'value';
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, key) {
        ;
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('input', value);
            },
        };
    });
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Watch; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[/* createDecorator */ "a"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/CheckboxOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: { "dark-checkbox": true, "--checked": _vm.value },
      on: {
        click: function($event) {
          return _vm.$emit("input", !_vm.value)
        }
      }
    },
    [
      _c("div", { staticClass: "__checkmark-container" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18"
            }
          },
          [
            _c("path", {
              staticClass: "__checkmark",
              attrs: {
                d: "M 6 5 L 6 10 L 16 10",
                transform: "rotate(-45 10 10)"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ml-2" }, [_vm._v(_vm._s(_vm.name))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/InputOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "input",
      _vm._g(
        {
          staticClass: "dark-input",
          attrs: { type: "text", placeholder: _vm.name },
          domProps: { value: _vm.value }
        },
        _vm.listeners
      )
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/IntegerOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dark-num-input" }, [
    _c(
      "div",
      { staticClass: "__button --dec", on: { click: _vm.decrement } },
      [_c("i-arrow")],
      1
    ),
    _vm._v(" "),
    !_vm.editMode
      ? _c(
          "div",
          { staticClass: "__content", on: { click: _vm.enterEditMode } },
          [
            _c("div", { staticClass: "__label .text-truncate" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ]
        )
      : _c("div", { staticClass: "__content" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tempValue,
                expression: "tempValue"
              }
            ],
            ref: "input",
            attrs: { type: "number" },
            domProps: { value: _vm.tempValue },
            on: {
              blur: _vm.leaveEditMode,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tempValue = $event.target.value
              }
            }
          })
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "__button --inc", on: { click: _vm.increment } },
      [_c("i-arrow")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }
    },
    [
      _c("path", {
        attrs: { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/NumberOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dark-num-input" }, [
    _c(
      "div",
      { staticClass: "__button --dec", on: { click: _vm.decrement } },
      [_c("i-arrow")],
      1
    ),
    _vm._v(" "),
    !_vm.editMode
      ? _c(
          "div",
          { staticClass: "__content", on: { click: _vm.enterEditMode } },
          [
            _c("div", { staticClass: "__label .text-truncate" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ]
        )
      : _c("div", { staticClass: "__content" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tempValue,
                expression: "tempValue"
              }
            ],
            ref: "input",
            staticClass: "dark-input",
            class: { "--invalid": _vm.invalid },
            staticStyle: { "text-align": "right" },
            attrs: { type: "number" },
            domProps: { value: _vm.tempValue },
            on: {
              blur: _vm.leaveEditMode,
              keydown: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.leaveEditMode($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tempValue = $event.target.value
              }
            }
          })
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "__button --inc", on: { click: _vm.increment } },
      [_c("i-arrow")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/SelectOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: function() {
            _vm.open = false
          },
          expression: "() => { open = false; }"
        }
      ],
      class: ["dark-select", { "--open": _vm.open }],
      on: {
        click: function($event) {
          _vm.open = !_vm.open
        }
      }
    },
    [
      _c("div", { staticClass: "__selected" }, [
        _c("div", { staticClass: "__text" }, [
          _vm._v(_vm._s(_vm.selectedText))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "__icon" }, [_c("i-arrow")], 1)
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.open,
                expression: "open"
              }
            ],
            staticClass: "__dropdown"
          },
          [
            _c("div", { staticClass: "item --header" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "div",
                {
                  key: i,
                  class: ["item", { "--active": _vm.isSelected(item) }],
                  on: {
                    click: function($event) {
                      return _vm.setSelected(item)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.isAdvancedMode ? item.text : item))]
              )
            })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/SliderOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "dark-slider",
      class: { "ignore-mouse": !_vm.editMode },
      on: {
        mousedown: _vm.mousedown,
        mouseup: _vm.mouseup,
        mousemove: _vm.mousemove,
        mouseleave: _vm.mouseleave
      }
    },
    [
      _c("div", {
        staticClass: "__slider",
        style: { width: _vm.percentage + "%" }
      }),
      _vm._v(" "),
      !_vm.editMode
        ? _c("div", { staticClass: "__content" }, [
            _c("div", { staticClass: "__label" }, [_vm._v(_vm._s(_vm.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ])
        : _c("div", { staticClass: "__content" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tempValue,
                  expression: "tempValue"
                }
              ],
              ref: "input",
              staticClass: "dark-input",
              class: { "--invalid": _vm.invalid },
              staticStyle: { "text-align": "right" },
              attrs: { type: "number" },
              domProps: { value: _vm.tempValue },
              on: {
                blur: _vm.leaveEditMode,
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.leaveEditMode($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tempValue = $event.target.value
                }
              }
            })
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/TextOption.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v(_vm._s(_vm.sanitized))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


var OptionPlugin = /** @class */ (function () {
    function OptionPlugin() {
        this.type = "OptionPlugin";
    }
    OptionPlugin.prototype.register = function (editor) {
        var _this = this;
        editor.events.usePlugin.addListener(this, function (p) {
            if (p.type === "ViewPlugin") {
                _this.registerOptions(p);
            }
        });
        editor.plugins.forEach(function (p) {
            if (p.type === "ViewPlugin") {
                _this.registerOptions(p);
            }
        });
    };
    OptionPlugin.prototype.registerOptions = function (viewPlugin) {
        Object.entries(_options__WEBPACK_IMPORTED_MODULE_1__).forEach(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "f"])(_a, 2), k = _b[0], v = _b[1];
            viewPlugin.registerOption(k, v);
        });
    };
    return OptionPlugin;
}());



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["ButtonOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["CheckboxOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["InputOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["IntegerOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["NumberOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["SelectOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["SliderOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextOption", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["TextOption"]; });

/* harmony import */ var _optionPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionPlugin", function() { return _optionPlugin__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ })
/******/ ]);
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBaklava", function() { return createBaklava; });
/* harmony import */ var _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _baklavajs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PluginEngine", function() { return _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PluginInterfaceTypes", function() { return _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PluginOptionsVue", function() { return _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PluginRendererVue", function() { return _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _baklavajs_plugin_renderer_vue_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);







function createBaklava(element) {
    vue__WEBPACK_IMPORTED_MODULE_6___default.a.use(_baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__["BaklavaVuePlugin"]);
    var editor = new _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__["Editor"]();
    var plugin = new _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__["ViewPlugin"]();
    editor.use(plugin);
    new vue__WEBPACK_IMPORTED_MODULE_6___default.a({
        data: function () {
            return {
                plugin: plugin
            };
        },
        render: function (createElement) {
            return createElement("baklava-editor", {
                props: {
                    plugin: this.plugin
                }
            });
        }
    }).$mount(element);
    return plugin;
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })
/******/ ]);
});