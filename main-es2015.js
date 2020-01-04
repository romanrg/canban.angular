(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>Canban</h1>\n  <app-board></app-board>\n  <app-aside-controller></app-aside-controller>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aside-controller/aside-controller.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aside-controller/aside-controller.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <aside class=\"controller\">\n    <section class=\"board-controller\" draggable=\"true\" (dragstart)=\"startDrag($event)\">\n      <h2>New Column</h2>\n    </section>\n    <section class=\"cards-controller\">\n      <ul class=\"cards__list\">\n        <li class=\"card\" draggable=\"true\" (dragstart)=\"startDrag($event)\">\n          <h3>New Card</h3>\n        </li>\n        <li class=\"card\" draggable=\"true\" (dragstart)=\"startDrag($event)\">\n          <h3>New Card</h3>\n        </li>\n        <li class=\"card\" draggable=\"true\" (dragstart)=\"startDrag($event)\">\n          <h3>New Card</h3>\n        </li>\n      </ul>\n    </section>\n    <section\n      class=\"block-controller\"\n      draggable=\"true\"\n      (dragstart)=\"startDrag($event)\"\n    >\n      <h3>\n        Stop at 5\n      </h3>\n    </section>\n  </aside>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" >\n  <section class=\"board\" (dragover)=\"dragOver($event)\" (drop)=\"dropElement($event)\">\n    <ul class=\"column__list\">\n      <!--\n      <li class=\"column\"\n\n          *ngFor=\"let column of columns\"\n          (drop)=\"handleCardDrop($event, column._id)\"\n          [class.dragged-over]=\"isDraggedOver\"\n      >\n\n        <h2\n          class=\"column__header\"\n          (click)=\"showChangeForm()\"\n          *ngIf=\"!isShowChangeForm; else showForm\"\n        >{{column.title | titlecase}}</h2>\n        <ng-template #showForm>\n          <div\n            class=\"header__input-container\"\n          >\n            <input type=\"text\"\n                   class=\"header__input\"\n                   [formControl]=\"columnName\"\n                   placeholder=\"{{column.title}}...\"\n                   (keypress)=\"setColumnName(column._id, $event)\"\n            >\n            <button\n              type=\"submit\"\n              (click)=\"setColumnName(column._id)\"\n              class=\"submit-btn\"\n            >Change</button>\n          </div>\n        </ng-template>\n\n        <ul class=\"cards__list\" [ngStyle]=\"\n          (column.cards.length > 3 )? {'overflow-y': 'scroll'} : {}\n        \">\n          <li class=\"card\"\n              [ngStyle]=\"{'background': card.color}\"\n              *ngFor=\"let card of column.cards\"\n              draggable=\"true\"\n              (dragstart)=\"startCardTransition($event, card)\"\n              (dragleave)=\"startCardLeaveTransition($event, column._id, card._id)\"\n          >\n            <h3\n              class=\"card__title\"\n              (click)=\"showCardForm()\"\n              *ngIf=\"!isCardTitleFormVisible; else cardTitleForm\"\n            >\n              {{card.title | titlecase}}\n            </h3>\n            <ng-template #cardTitleForm>\n              <div\n                class=\"header__card-input-container\"\n              >\n                <input type=\"text\"\n                       class=\"header__input\"\n                       [formControl]=\"cardName\"\n                       placeholder=\"{{card.title}}...\"\n                       (keypress)=\"setCardName(column._id, card._id ,$event)\"\n                >\n                <button\n                  type=\"submit\"\n                  (click)=\"setColumnName(column._id)\"\n                  class=\"submit-btn\"\n                >Change</button>\n              </div>\n            </ng-template>\n            <p class=\"timestamp\"\n            [ngStyle]=\"card.isCompleted? {'text-decoration':'line-through'}:{'text-decoration':'none'}\"\n            >\n              {{card.timestamp | date:'yyyy/MM/dd, HH:mm'}}\n            </p>\n          </li>\n        </ul>\n        <div\n          *ngIf=\"column.stopAt\"\n          class=\"stop\"\n          [class.empty-space]=\"column.cards.length < column.stopAt\"\n          [class.no-empty-space]=\"column.cards.length >= column.stopAt\"\n        >\n          <span [class.invisible]=\"!isStopAtInputVisible\"\n                (click)=\"changeStopAt()\"\n          >\n            {{column.cards.length}} / {{column.stopAt}}\n          </span>\n          <div [class.invisible]=\"isStopAtInputVisible\">\n              <label>\n                <input\n                  placeholder=\"Stop At:\"\n                  class=\"stop-input\"\n                  type=\"number\"\n                  [formControl]=\"stopAtInputValue\"\n                  (keypress)=\"setStop(column._id, $event)\"\n                >\n              </label>\n\n          </div>\n        </div>\n      </li>\n      -->\n      <app-column\n        *ngFor=\"let column of columns\"\n        [column]=\"column\"\n        class=\"column\"\n      ></app-column>\n    </ul>\n\n  </section>\n  <p >\n\n  </p>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"card__container\"\n  [ngStyle]=\"{'border': color}\"\n>\n  <h2\n    class=\"card__header\"\n    (click)=\"showTitleForm()\"\n    *ngIf=\"!isTitleFormShowed; else titleForm\"\n  >\n    {{card | cardTitle}}\n  </h2>\n  <ng-template #titleForm >\n    <div class=\"input-card__container\">\n      <label>\n        <input\n          class=\"input-card__input\"\n          type=\"text\"\n          [formControl]=\"cardName\"\n          placeholder=\"{{card.title}}...\"\n          (keypress)=\"submitNewCardName($event)\"\n        >\n      </label>\n      <button\n        class=\"input-card__submit-btn\"\n        (click)=\"submitNewCardName(undefined)\"\n      >\n        Submit\n      </button>\n    </div>\n  </ng-template>\n\n  <p class=\"card__timestamp\">\n    {{card.timestamp | date:'yyyy/MM/dd, HH:mm'}}\n  </p>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li\n  class=\"column\"\n  (drop)=\"handleCardDrop($event, column._id)\"\n  [class.dragged-over]=\"isDraggedOver\"\n  (dragover)=\"handleDragOver($event)\"\n  (dragleave)=\"toggleDrag(); removeCard()\"\n\n>\n  <h2\n    class=\"column__header\"\n    (click)=\"showTitleForm()\"\n    *ngIf=\"!isTitleFormShowed; else titleForm\"\n  >\n    {{column.title | titlecase}}\n  </h2>\n  <ng-template #titleForm >\n    <div class=\"input-header__container\">\n      <label>\n        <input\n          class=\"input-header__input\"\n          type=\"text\"\n          [formControl]=\"columnName\"\n          placeholder=\"{{column.title}}...\"\n          (keypress)=\"submitNewColumnName($event)\"\n        >\n      </label>\n      <button\n        class=\"input-header__submit-btn\"\n        (click)=\"submitNewColumnName(undefined)\"\n      >\n        Submit\n      </button>\n    </div>\n  </ng-template>\n  <ul\n    class=\"card__list\"\n    [ngStyle]=\"column.cards.length > 3 ? {'overflow-y': 'scroll'} : {}\"\n  >\n    <app-card\n      draggable=\"true\"\n      (dragstart)=\"startCardDrag($event, card, column._id);  transferCard(card)\"\n      *ngFor=\"let card of column.cards\"\n      [card]=\"card\"\n      class=\"card__item\"\n\n    >\n    </app-card>\n\n\n  </ul>\n  <app-stop-at\n    (onChanged)=\"onChanged($event)\"\n    *ngIf=\"column.stopAt\"\n    [stop]=\"column.stopAt\"\n    [length]=\"column.cards.length\"\n    class=\"column__stop\"\n  ></app-stop-at>\n\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stop-at/stop-at.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stop-at/stop-at.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stop__wrapper\"\n  [class.empty-space]=\"stop > length\" [class.no-empty-space]=\"stop <= length\"\n>\n  <p class=\"stop__content\"\n    *ngIf=\"!isFormShowed; else form\"\n     (click)=\"showForm()\"\n  >{{length}} / {{stop}}</p>\n  <ng-template #form>\n    <label>\n      <input\n        type=\"number\"\n        [formControl]=\"stopAt\"\n        class=\"stop__input\"\n        placeholder=\"{{stopAt.value}}\"\n      >\n    </label>\n    <button\n      (click)=\"change(stopAt.value)\"\n      type=\"submit\"\n      class=\"stop__submit-btn\"\n    >\n      Submit\n    </button>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-board {\n  flex-grow: 1; }\n\napp-aside-controller {\n  flex-grow: 1; }\n\n.container {\n  display: flex;\n  flex-grow: 1;\n  margin-left: 5rem;\n  margin-right: 5rem;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin-top: 3rem; }\n\nh1 {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5rem; }\n\n.container:first-child {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBc3VzXFxEZXNrdG9wXFzQv9CzXFxBbmd1bGFyXFxOZXcgcHJvamVjdHNcXGNhbmIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUVFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJvYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbmFwcC1hc2lkZS1jb250cm9sbGVyIHtcclxuXHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxufVxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxufVxyXG4uY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'canb';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aside_controller_aside_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aside-controller/aside-controller.component */ "./src/app/aside-controller/aside-controller.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _column_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column/column.component */ "./src/app/column/column.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _stop_at_stop_at_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stop-at/stop-at.component */ "./src/app/stop-at/stop-at.component.ts");
/* harmony import */ var _pipes_card_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/card-title.pipe */ "./src/app/pipes/card-title.pipe.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _aside_controller_aside_controller_component__WEBPACK_IMPORTED_MODULE_4__["AsideControllerComponent"],
            _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
            _column_column_component__WEBPACK_IMPORTED_MODULE_7__["ColumnComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
            _stop_at_stop_at_component__WEBPACK_IMPORTED_MODULE_9__["StopAtComponent"],
            _pipes_card_title_pipe__WEBPACK_IMPORTED_MODULE_10__["CardTitlePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/aside-controller/aside-controller.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/aside-controller/aside-controller.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  max-width: 60rem;\n  margin: 0 auto; }\n\n.controller {\n  display: flex;\n  flex-grow: 1; }\n\n.board-controller {\n  margin-top: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.75);\n  padding: 1rem;\n  height: 8rem;\n  background-color: white;\n  border-radius: 0.5rem;\n  display: flex; }\n\n.board-controller h2 {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: center; }\n\n.cards-controller {\n  flex-grow: 1; }\n\n.cards__list {\n  margin: 0 1rem;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1; }\n\n.card {\n  margin-top: 1rem;\n  display: flex;\n  width: 100%;\n  height: 8rem;\n  border: 0.15rem solid cornflowerblue;\n  border-radius: 0.5rem;\n  background: white;\n  align-self: center;\n  margin-right: 1rem;\n  flex-grow: 1; }\n\n.card h3 {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: center; }\n\n.block-controller {\n  box-sizing: border-box;\n  padding: 1rem;\n  margin-top: 1rem;\n  height: 8rem;\n  display: flex;\n  border: 0.25rem dashed crimson; }\n\n.block-controller h3 {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNpZGUtY29udHJvbGxlci9DOlxcVXNlcnNcXEFzdXNcXERlc2t0b3BcXNC/0LNcXEFuZ3VsYXJcXE5ldyBwcm9qZWN0c1xcY2FuYi9zcmNcXGFwcFxcYXNpZGUtY29udHJvbGxlclxcYXNpZGUtY29udHJvbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFFYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaURBQThDO0VBQzlDLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBRXZCLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7O0FBVGY7SUFXSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFFRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBVmQ7SUFZSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQU5oQztJQVFJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXNpZGUtY29udHJvbGxlci9hc2lkZS1jb250cm9sbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWF4LXdpZHRoOiA2MHJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRyb2xsZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5cclxuLmJvYXJkLWNvbnRyb2xsZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyOiAwLjE1cmVtIHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGgyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZHMtY29udHJvbGxlciB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY2FyZHNfX2xpc3Qge1xyXG5cclxuICBtYXJnaW46IDAgMXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBoMyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uYmxvY2stY29udHJvbGxlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAwLjI1cmVtIGRhc2hlZCBjcmltc29uO1xyXG4gIGgzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/aside-controller/aside-controller.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/aside-controller/aside-controller.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideControllerComponent", function() { return AsideControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AsideControllerComponent = class AsideControllerComponent {
    constructor() { }
    ngOnInit() {
    }
    startDrag($event) {
        // @ts-ignore
        $event.dataTransfer.setData('text', $event.currentTarget.innerText);
    }
};
AsideControllerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside-controller',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aside-controller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aside-controller/aside-controller.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aside-controller.component.scss */ "./src/app/aside-controller/aside-controller.component.scss")).default]
    })
], AsideControllerComponent);



/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 40rem;\n  flex-grow: 1;\n  display: flex; }\n\n.board {\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-around; }\n\n.column__list {\n  flex-grow: 1;\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  padding: 0; }\n\n.column {\n  display: flex;\n  width: 20rem;\n  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.75);\n  border-radius: 0.5rem;\n  margin: 0rem 1rem 1rem;\n  height: 36rem; }\n\n.cards__list {\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  flex-grow: 1;\n  border-radius: 0.5rem;\n  padding: 0;\n  margin: 0;\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.cards__list::-webkit-scrollbar {\n    width: 3px; }\n\n.cards__list::-webkit-scrollbar-track {\n    background: #f1f1f1; }\n\n.cards__list::-webkit-scrollbar-thumb {\n    background: #888; }\n\n.cards__list::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\n.card {\n  width: 100%;\n  background-color: cornflowerblue;\n  min-height: 8rem;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem; }\n\n.card__title {\n  display: flex;\n  flex-grow: 1;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  justify-content: center; }\n\n.timestamp {\n  font-style: italic;\n  font-size: 0.75rem;\n  opacity: 0.8; }\n\n.stop {\n  justify-self: flex-start;\n  text-align: center;\n  padding: 1rem;\n  height: 3rem;\n  display: flex; }\n\n.stop span {\n    flex-grow: 1;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display: flex; }\n\n.invisible {\n  display: none; }\n\n.empty-space {\n  border: 0.25rem dashed olivedrab; }\n\n.no-empty-space {\n  border: 0.25rem dashed crimson; }\n\n.header__input-container {\n  display: flex;\n  padding: 1rem; }\n\n.submit-btn {\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: inherit;\n  color: cornflowerblue;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.header__input {\n  width: 100%;\n  border: 0;\n  padding: 1rem;\n  font: inherit;\n  border-radius: 0.5rem; }\n\n.tasks-length {\n  position: relative;\n  right: -80%;\n  top: 0%;\n  background: pink;\n  box-sizing: border-box;\n  overflow: hidden;\n  height: 3rem;\n  display: flex;\n  width: 4rem;\n  align-items: center;\n  justify-content: center; }\n\n.stop-input {\n  display: flex;\n  flex-grow: 1;\n  padding: 1rem;\n  font: inherit; }\n\n.header__card-input-container {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvQzpcXFVzZXJzXFxBc3VzXFxEZXNrdG9wXFzQv9CzXFxBbmd1bGFyXFxOZXcgcHJvamVjdHNcXGNhbmIvc3JjXFxhcHBcXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpREFBOEM7RUFDOUMscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBRVQsVUFBQTtFQUtBLFVBQUE7RUFLQSxXQUFBO0VBS0Esb0JBQUEsRUFBcUI7O0FBeEJ2QjtJQVdJLFVBQVUsRUFBQTs7QUFYZDtJQWdCSSxtQkFBbUIsRUFBQTs7QUFoQnZCO0lBcUJJLGdCQUFnQixFQUFBOztBQXJCcEI7SUEwQkksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFMZjtJQU9JLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhLEVBQUE7O0FBS2pCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd2QjtFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBRWY7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogNDByZW07XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG59XHJcblxyXG4uY29sdW1uX19saXN0IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjByZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luOiAwcmVtIDFyZW0gMXJlbTtcclxuICBoZWlnaHQ6IDM2cmVtO1xyXG59XHJcblxyXG4uY2FyZHNfX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC8qIHdpZHRoICovXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICB9XHJcblxyXG4gIC8qIFRyYWNrICovXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIG1pbi1oZWlnaHQ6IDhyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aW1lc3RhbXAge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uc3RvcCB7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHNwYW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZW1wdHktc3BhY2Uge1xyXG4gIGJvcmRlcjogMC4yNXJlbSBkYXNoZWQgb2xpdmVkcmFiO1xyXG59XHJcblxyXG4ubm8tZW1wdHktc3BhY2Uge1xyXG4gIGJvcmRlcjogMC4yNXJlbSBkYXNoZWQgY3JpbXNvbjtcclxufVxyXG4uaGVhZGVyX19pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaGVhZGVyX19pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi50YXNrcy1sZW5ndGgge1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IC04MCU7XHJcbiAgdG9wOiAwJTtcclxuICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RvcC1pbnB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcbi5oZWFkZXJfX2NhcmQtaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_column_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/column-service.service */ "./src/app/services/column-service.service.ts");
/* harmony import */ var _services_card_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/card-service.service */ "./src/app/services/card-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let BoardComponent = class BoardComponent {
    constructor(columnService, cardService) {
        this.columnService = columnService;
        this.cardService = cardService;
        this.isShowChangeForm = false;
        this.isDraggedOver = false;
        this.isStopAtInputVisible = true;
        this.columns = [];
        this.stopAtInputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.columnName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.cardName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.isCardTitleFormVisible = false;
    }
    cardTransfer(card) {
        console.log(card);
    }
    ngOnInit() {
        this.columnService.createNewColumn();
    }
    dragOver($event) {
        $event.preventDefault();
        this.isDraggedOver = true;
    }
    dropElement($event) {
        $event.preventDefault();
        this.isDraggedOver = false;
        if ($event.dataTransfer.getData('text') === 'New Column') {
            if (this.columns.length === 5) {
                return;
            }
            this.columns.push(this.columnService.createNewColumn());
        }
    }
    handleCardDrop($event, id) {
        const col = this.columns.find(col => col._id === id);
        if ($event.dataTransfer.getData('text').includes('Stop') && col.stopAt === undefined) {
            col.stopAt = 5;
            return;
        }
        if (col.stopAt === undefined || col.stopAt > col.cards.length) {
            // @ts-ignore
            if (this.operableCard !== undefined && !col.cards.includes(this.operableCard)) {
                const prevCol = this.columns.find(col => col._id === this.operableCol);
                this.operableCard.timestamp = new Date();
                if (this.columns.findIndex(col => prevCol._id === col._id) === this.columns.length - 2) {
                    this.operableCard.isCompleted = true;
                    // @ts-ignore
                    col.cards.unshift(this.operableCard);
                }
                else {
                    this.operableCard.isCompleted = false;
                    // @ts-ignore
                    col.cards.push(this.operableCard);
                }
                // @ts-ignore
                prevCol.cards = prevCol.cards.filter(card => card._id !== this.operableCard._id);
                this.operableCard = undefined;
                this.operableCol = undefined;
                return;
            }
            else { // @ts-ignore
                // @ts-ignore
                if (col.cards.includes(this.operableCard)) {
                    this.operableCard = undefined;
                    this.operableCol = undefined;
                    return;
                }
            }
            // @ts-ignore
            this.columns.find(col => col._id === id).cards.push(
            // @ts-ignore
            this.cardService.addNewCard());
        }
    }
    changeStopAt() {
        this.isStopAtInputVisible = false;
    }
    setStop(id, $event) {
        if ($event !== undefined) {
            if ($event.key !== 'Enter') {
                return;
            }
        }
        const col = this.columns.find(col => col._id === id);
        col.stopAt = this.stopAtInputValue.value;
        this.isStopAtInputVisible = true;
        this.stopAtInputValue.reset();
    }
    showChangeForm() {
        this.isShowChangeForm = true;
    }
    setColumnName(id, $event) {
        if (this.columnName.value.trim() === '') {
            return;
        }
        if ($event !== undefined) {
            if ($event.key !== 'Enter') {
                return;
            }
        }
        const col = this.columns.find(col => col._id === id);
        col.title = this.columnName.value;
        this.isShowChangeForm = false;
        this.columnName.reset();
    }
    startCardTransition($event, card) {
        // @ts-ignore
        $event.dataTransfer.setData('text', $event.currentTarget.innerText);
        this.operableCard = card;
    }
    startCardLeaveTransition($event, colId, cardId) {
        if (this.operableCard._id !== cardId) {
            return;
        }
        this.operableCol = colId;
    }
    showCardForm() {
        this.isCardTitleFormVisible = true;
    }
    setCardName(colId, cardId, $event) {
        if ($event.key === 'Enter' || $event === undefined) {
            const col = this.columns.find(c => c._id === colId);
            // @ts-ignore
            const card = col.cards.find(c => c._id === cardId);
            if (this.cardName.value !== '') {
                // @ts-ignore
                card.title = this.cardName.value.trim();
                this.isCardTitleFormVisible = false;
                this.cardName.reset();
            }
        }
    }
};
BoardComponent.ctorParameters = () => [
    { type: _services_column_service_service__WEBPACK_IMPORTED_MODULE_2__["ColumnServiceService"] },
    { type: _services_card_service_service__WEBPACK_IMPORTED_MODULE_3__["CardServiceService"] }
];
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__container {\n  flex-grow: 1;\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  justify-content: space-between; }\n\n.card__header {\n  color: black;\n  margin: 0;\n  overflow: hidden;\n  align-self: center; }\n\n.card__timestamp {\n  font-style: italic;\n  font-size: 0.75rem;\n  opacity: 0.8;\n  align-self: flex-start;\n  justify-self: flex-end; }\n\n.input-card__container {\n  display: flex; }\n\n.input-card__container label {\n    box-sizing: border-box; }\n\n.input-card__container .input-card__input {\n    width: 100%;\n    border: 0;\n    padding: 1rem;\n    font: inherit;\n    border-radius: 0.5rem;\n    box-sizing: border-box; }\n\n.input-card__container .input-card__submit-btn {\n    border: none;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font: inherit;\n    color: cornflowerblue;\n    font-weight: bold;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9DOlxcVXNlcnNcXEFzdXNcXERlc2t0b3BcXNC/0LNcXEFuZ3VsYXJcXE5ldyBwcm9qZWN0c1xcY2FuYi9zcmNcXGFwcFxcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBSUksc0JBQXNCLEVBQUE7O0FBSjFCO0lBUUksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0IsRUFBQTs7QUFiMUI7SUFpQkksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkX19jb250YWluZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmRfX2hlYWRlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRfX3RpbWVzdGFtcCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaW5wdXQtY2FyZF9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWNhcmRfX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWNhcmRfX3N1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CardComponent = class CardComponent {
    constructor() {
        this.cardName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.isTitleFormShowed = false;
    }
    ngOnInit() {
        this.color = `${this.card.color} solid 0.15rem`;
    }
    showTitleForm() {
        this.isTitleFormShowed = true;
    }
    submitNewCardName($event) {
        if (this.cardName.value === '' || this.cardName.value === null) {
            return;
        }
        if ($event !== undefined) {
            if ($event.key !== 'Enter') {
                return;
            }
        }
        this.card.title = this.cardName.value.trim();
        this.cardName.reset();
        this.isTitleFormShowed = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "card", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/column/column.component.scss":
/*!**********************************************!*\
  !*** ./src/app/column/column.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  padding: 0.5rem;\n  border: none; }\n\n.column__header {\n  text-align: center;\n  color: black;\n  cursor: pointer; }\n\n.dragged-over {\n  transition: border 0.2s ease-in-out;\n  border: 0.25rem dashed lightslategray; }\n\n.card__list {\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  flex-grow: 1;\n  border-radius: 0.5rem;\n  padding: 0;\n  margin: 0;\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.card__list::-webkit-scrollbar {\n    width: 3px; }\n\n.card__list::-webkit-scrollbar-track {\n    background: #f1f1f1; }\n\n.card__list::-webkit-scrollbar-thumb {\n    background: #888; }\n\n.card__list::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\n.card__item {\n  width: 100%;\n  min-height: 8rem;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  margin-bottom: 0.5rem; }\n\n.input-header__container {\n  display: flex;\n  padding: 1rem; }\n\n.input-header__container label {\n    box-sizing: border-box; }\n\n.input-header__container .input-header__input {\n    width: 100%;\n    border: 0;\n    padding: 1rem;\n    font: inherit;\n    border-radius: 0.5rem;\n    box-sizing: border-box; }\n\n.input-header__container .input-header__submit-btn {\n    border: none;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font: inherit;\n    color: cornflowerblue;\n    font-weight: bold;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sdW1uL0M6XFxVc2Vyc1xcQXN1c1xcRGVza3RvcFxc0L/Qs1xcQW5ndWxhclxcTmV3IHByb2plY3RzXFxjYW5iL3NyY1xcYXBwXFxjb2x1bW5cXGNvbHVtbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFFRSxtQ0FBbUM7RUFDbkMscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztFQUVULFVBQUE7RUFLQSxVQUFBO0VBS0EsV0FBQTtFQUtBLG9CQUFBLEVBQXFCOztBQXhCdkI7SUFXSSxVQUFVLEVBQUE7O0FBWGQ7SUFnQkksbUJBQW1CLEVBQUE7O0FBaEJ2QjtJQXFCSSxnQkFBZ0IsRUFBQTs7QUFyQnBCO0lBMEJJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFFdEIscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFGZjtJQUlJLHNCQUFzQixFQUFBOztBQUoxQjtJQVFJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUE7O0FBYjFCO0lBaUJJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29sdW1uX19oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcmFnZ2VkLW92ZXIge1xyXG4gIC8vYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyOiAwLjI1cmVtIGRhc2hlZCBsaWdodHNsYXRlZ3JheTtcclxufVxyXG4uY2FyZF9fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLyogd2lkdGggKi9cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gIH1cclxuXHJcbiAgLyogVHJhY2sgKi9cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLyogSGFuZGxlICovXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICB9XHJcblxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZF9faXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogOHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cclxufVxyXG5cclxuLmlucHV0LWhlYWRlcl9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbGFiZWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1oZWFkZXJfX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWhlYWRlcl9fc3VibWl0LWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/column/column.component.ts":
/*!********************************************!*\
  !*** ./src/app/column/column.component.ts ***!
  \********************************************/
/*! exports provided: ColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_card_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/card-service.service */ "./src/app/services/card-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ColumnComponent = class ColumnComponent {
    constructor(cardService) {
        this.cardService = cardService;
        this.cardTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDraggedOver = false;
        this.isTitleFormShowed = false;
        this.columnName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    ngOnInit() {
    }
    onChanged(stopAt) {
        if (typeof stopAt === 'number') {
            this.column.stopAt = stopAt;
        }
    }
    transferCard(card) {
        this.cardTransfer.emit(card);
    }
    handleCardDrop($event, id) {
        const drop = $event.dataTransfer.getData('text');
        try {
            const card = JSON.parse(drop);
            this.addAlreadyExistCard(card);
            this.toggleDrag();
            return;
        }
        catch (e) {
        }
        switch (drop) {
            case 'New Card':
                this.addNewCard();
                break;
            default:
                this.addStopAt();
                break;
        }
        this.toggleDrag();
    }
    addNewCard() {
        if (this.column.cards.length < this.column.stopAt || this.column.stopAt === undefined) {
            this.column.cards.push(this.cardService.addNewCard());
        }
    }
    handleDragOver($event) {
        $event.preventDefault();
        this.isDraggedOver = true;
    }
    addStopAt() {
        this.column.stopAt = 5;
    }
    showTitleForm() {
        this.isTitleFormShowed = true;
    }
    submitNewColumnName($event) {
        if (this.columnName.value === '' || this.columnName.value === null) {
            return;
        }
        if ($event !== undefined) {
            if ($event.key !== 'Enter') {
                return;
            }
        }
        this.column.title = this.columnName.value.trim();
        this.columnName.reset();
        this.isTitleFormShowed = false;
    }
    startCardDrag($event, card, id) {
        this.cardTransfered = card;
        $event.dataTransfer.setData('text', JSON.stringify({ card, id }));
    }
    toggleDrag() {
        this.isDraggedOver = false;
    }
    addAlreadyExistCard({ card }) {
        if (this.column.cards.find(c => c._id === card._id)) {
            return;
        }
        if (this.column.cards.length >= this.column.stopAt) {
            return;
        }
        card.timestamp = new Date();
        this.column.cards.push(card);
    }
    removeCard() {
        if (this.cardTransfered) {
            this.column.cards = this.column.cards.filter(c => c._id !== this.cardTransfered._id);
        }
    }
};
ColumnComponent.ctorParameters = () => [
    { type: _services_card_service_service__WEBPACK_IMPORTED_MODULE_2__["CardServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnComponent.prototype, "column", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ColumnComponent.prototype, "cardTransfer", void 0);
ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-column',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./column.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./column.component.scss */ "./src/app/column/column.component.scss")).default]
    })
], ColumnComponent);



/***/ }),

/***/ "./src/app/pipes/card-title.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/card-title.pipe.ts ***!
  \******************************************/
/*! exports provided: CardTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitlePipe", function() { return CardTitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const MAX_TITLE_LENGTH = 80;
let CardTitlePipe = class CardTitlePipe {
    transform(card, ...args) {
        if (card.title.length > MAX_TITLE_LENGTH) {
            return `${card.title.substr(0, MAX_TITLE_LENGTH)}...`;
        }
        return card.title;
    }
};
CardTitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'cardTitle'
    })
], CardTitlePipe);



/***/ }),

/***/ "./src/app/services/card-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/card-service.service.ts ***!
  \**************************************************/
/*! exports provided: CardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardServiceService", function() { return CardServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _column_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-service.service */ "./src/app/services/column-service.service.ts");



function getRandomBackground() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let CardServiceService = class CardServiceService {
    constructor() { }
    addNewCard() {
        return ({
            title: 'New Card',
            _id: Object(_column_service_service__WEBPACK_IMPORTED_MODULE_2__["generateId"])(),
            timestamp: new Date(),
            workers: [],
            isCompleted: false,
            color: getRandomBackground()
        });
    }
};
CardServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CardServiceService);



/***/ }),

/***/ "./src/app/services/column-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/column-service.service.ts ***!
  \****************************************************/
/*! exports provided: generateId, ColumnServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnServiceService", function() { return ColumnServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
let ColumnServiceService = class ColumnServiceService {
    constructor() { }
    createNewColumn() {
        return ({
            title: 'New Column',
            _id: generateId(),
            cards: [],
            timestamp: new Date()
        });
    }
};
ColumnServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ColumnServiceService);



/***/ }),

/***/ "./src/app/stop-at/stop-at.component.scss":
/*!************************************************!*\
  !*** ./src/app/stop-at/stop-at.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stop__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  cursor: pointer;\n  background: white; }\n  .stop__wrapper label {\n    box-sizing: border-box;\n    flex-grow: 1; }\n  .stop__content {\n  flex-grow: 1; }\n  .stop__wrapper {\n  justify-self: flex-start;\n  text-align: center;\n  padding: 1rem;\n  height: 3rem;\n  display: flex; }\n  .stop__wrapper span {\n    flex-grow: 1;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display: flex; }\n  .empty-space {\n  transition: border 0.5s ease-in-out;\n  border: 0.25rem dashed olivedrab; }\n  .no-empty-space {\n  transition: border 0.5s ease-in-out;\n  border: 0.25rem dashed crimson; }\n  .stop__submit-btn {\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: inherit;\n  color: cornflowerblue;\n  font-weight: bold;\n  text-transform: uppercase; }\n  .stop__input {\n  width: 100%;\n  border: 0;\n  padding: 1rem;\n  font: inherit;\n  border-radius: 0.5rem;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcC1hdC9DOlxcVXNlcnNcXEFzdXNcXERlc2t0b3BcXNC/0LNcXEFuZ3VsYXJcXE5ldyBwcm9qZWN0c1xcY2FuYi9zcmNcXGFwcFxcc3RvcC1hdFxcc3RvcC1hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFObkI7SUFRSSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBSWhCO0VBQ0UsWUFBWSxFQUFBO0VBSWQ7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBTGY7SUFPSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0VBS2pCO0VBQ0UsbUNBQW1DO0VBQ25DLGdDQUFnQyxFQUFBO0VBR2xDO0VBQ0UsbUNBQW1DO0VBQ25DLDhCQUE4QixFQUFBO0VBRWhDO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTtFQUUzQjtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdG9wLWF0L3N0b3AtYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcF9fd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbGFiZWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zdG9wX19jb250ZW50IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcblxyXG4uc3RvcF9fd3JhcHBlciB7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHNwYW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uZW1wdHktc3BhY2Uge1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMC4yNXJlbSBkYXNoZWQgb2xpdmVkcmFiO1xyXG59XHJcblxyXG4ubm8tZW1wdHktc3BhY2Uge1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMC4yNXJlbSBkYXNoZWQgY3JpbXNvbjtcclxufVxyXG4uc3RvcF9fc3VibWl0LWJ0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5zdG9wX19pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/stop-at/stop-at.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stop-at/stop-at.component.ts ***!
  \**********************************************/
/*! exports provided: StopAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopAtComponent", function() { return StopAtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let StopAtComponent = class StopAtComponent {
    constructor() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormShowed = false;
        this.stopAt = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.stop);
    }
    ngOnInit() {
    }
    change(stopAt) {
        if (typeof stopAt === 'number') {
            this.onChanged.emit(stopAt);
            this.isFormShowed = false;
            this.stop = this.stopAt.value;
        }
    }
    showForm() {
        this.isFormShowed = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StopAtComponent.prototype, "stop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StopAtComponent.prototype, "length", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StopAtComponent.prototype, "onChanged", void 0);
StopAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stop-at',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stop-at.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stop-at/stop-at.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stop-at.component.scss */ "./src/app/stop-at/stop-at.component.scss")).default]
    })
], StopAtComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Desktop\пг\Angular\New projects\canb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);