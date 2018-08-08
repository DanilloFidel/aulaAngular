(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div *ngIf=\"isRuning; else youWin\">\r\n    <app-panel (endOfGame)=\"endOfGame($event)\"></app-panel>\r\n</div>\r\n<ng-template #youWin>\r\n    <div *ngIf=\"end == 'win'; else youLose\" class=\"container\" align=\"center\" style=\"margin-top: 6%\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3 style=\"color: green\">Muito bem! Você conhece muitos heróis e vilões dos quadrinhos.</h3>\r\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\" style=\"margin-top: 5%\">Reiniciar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #youLose>\r\n    <div class=\"container\" align=\"center\" style=\"margin-top: 6%\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3 style=\"color: red\">Fim de jogo, você perdeu!</h3>\r\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\" style=\"margin-top: 5%\">Reiniciar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
        this.isRuning = true;
    }
    AppComponent.prototype.endOfGame = function (status) {
        this.isRuning = false;
        this.end = status;
    };
    AppComponent.prototype.restartGame = function () {
        this.isRuning = true;
        this.end = undefined;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _lifes_lifes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lifes/lifes.component */ "./src/app/lifes/lifes.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"],
                _lifes_lifes_component__WEBPACK_IMPORTED_MODULE_5__["LifesComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <span class=\"navbar-brand mb-0 h1\">{{title}}</span>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'Comics Q.I';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/lifes/lifes.component.css":
/*!*******************************************!*\
  !*** ./src/app/lifes/lifes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  margin-left: 5%;\r\n}\r\n\r\n.container {\r\n  margin-left: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/lifes/lifes.component.html":
/*!********************************************!*\
  !*** ./src/app/lifes/lifes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img *ngFor=\"let x of hearths\" [src]=\"x.showLife()\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/lifes/lifes.component.ts":
/*!******************************************!*\
  !*** ./src/app/lifes/lifes.component.ts ***!
  \******************************************/
/*! exports provided: LifesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifesComponent", function() { return LifesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lifes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/lifes.model */ "./src/app/shared/lifes.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifesComponent = /** @class */ (function () {
    function LifesComponent() {
        this.hearths = [new _shared_lifes_model__WEBPACK_IMPORTED_MODULE_1__["Lifes"](true), new _shared_lifes_model__WEBPACK_IMPORTED_MODULE_1__["Lifes"](true), new _shared_lifes_model__WEBPACK_IMPORTED_MODULE_1__["Lifes"](true)];
    }
    LifesComponent.prototype.ngOnChanges = function () {
        if (this.attempts != this.hearths.length) {
            var i = this.hearths.length - this.attempts;
            this.hearths[i - 1].full = false;
        }
    };
    LifesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LifesComponent.prototype, "attempts", void 0);
    LifesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-lifes",
            template: __webpack_require__(/*! ./lifes.component.html */ "./src/app/lifes/lifes.component.html"),
            styles: [__webpack_require__(/*! ./lifes.component.css */ "./src/app/lifes/lifes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifesComponent);
    return LifesComponent;
}());



/***/ }),

/***/ "./src/app/panel/name-mock.ts":
/*!************************************!*\
  !*** ./src/app/panel/name-mock.ts ***!
  \************************************/
/*! exports provided: NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMES", function() { return NAMES; });
var NAMES = [
    { nameAswer: "deadpool" },
    { nameAswer: "ravena" },
    { nameAswer: "homem aranha" },
    { nameAswer: "nova" },
    { nameAswer: "besouro azul" },
    { nameAswer: "electro" },
    { nameAswer: "galactus" },
    { nameAswer: "homem de ferro" },
    { nameAswer: "surfista prateado" },
    { nameAswer: "visao" },
    { nameAswer: "hulkbuster" },
    { nameAswer: "mutano" },
    { nameAswer: "cabeça de martelo" },
    { nameAswer: "demolidor" },
    { nameAswer: "hella" },
    { nameAswer: "doutor estranho" },
    { nameAswer: "gamora" },
    { nameAswer: "gaviao arqueiro" },
    { nameAswer: "heimdall" },
    { nameAswer: "luke cage" },
    { nameAswer: "rhino" },
    { nameAswer: "senhor das estrelas" }
];


/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 300px;\r\n  height: 300px;\r\n  margin-top: 5%;\r\n}\r\n\r\ntextarea {\r\n  margin-top: 30%;\r\n  width: 300px;\r\n  border: 2px solid gray;\r\n}\r\n\r\n.jumbotron {\r\n  margin-bottom: 0;\r\n  padding: 2% 2%;\r\n  margin-top: 5%;\r\n  height: auto;\r\n}\r\n\r\n.btn {\r\n  margin-top: 3%;\r\n}\r\n\r\np {\r\n  color: red;\r\n  font-weight: bold;\r\n  margin-top: 3%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col\" align=\"center\">\n        <h3>{{instruction}}</h3>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\" align=\"center\">\n        <img src=\"{{nameSrc}}\" alt=\"\">\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" cols=\"5\" rows=\"1\" placeholder=\"Digite sem letras maiusculas\" (input)=\"caughtAnswer($event)\"\n            [value]=\"answer\"></textarea>\n          <p>{{msg}}</p>\n          <div class=\"d-flex justify-content-center\">\n            <button (click)=\"checkAnswer()\" class=\"btn btn-primary\">Verificar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progress [progress]=\"progress\"></app-progress>\n      </div>\n      <div class=\"col-sm-6\">\n        <app-lifes [attempts]=\"attempts\"></app-lifes>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _name_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name-mock */ "./src/app/panel/name-mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing the classes of Names

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.instruction = "Quem é esse personagem??";
        //create attribute to receive the arrays of names
        this.names = _name_mock__WEBPACK_IMPORTED_MODULE_1__["NAMES"];
        this.nameNumber = 1;
        this.turn = 0;
        this.progress = 0;
        this.attempts = 3;
        this.msg = "";
        this.endOfGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //create instance of EventEmitter
        this.updateTurn();
        this.nameSrc = "../../assets/" + this.nameNumber + ".png";
    }
    PanelComponent.prototype.ngOnInit = function () { };
    PanelComponent.prototype.caughtAnswer = function (answer) {
        //object -> target -> value
        this.answer = answer.target.value;
    };
    PanelComponent.prototype.changeSrc = function () {
        return this.nameSrc;
    };
    PanelComponent.prototype.checkAnswer = function () {
        if (this.turnPerson.nameAswer === this.answer) {
            this.turn++;
            this.nameNumber++;
            this.msg = "";
            //update progress bar
            this.progress += 100 / this.names.length;
            //verify if conclude
            if (this.turn == this.names.length) {
                this.endOfGame.emit("win");
            }
            //change image src/////////
            this.nameSrc = "../../assets/" + this.nameNumber + ".png";
            //change the turn
            this.updateTurn();
        }
        else {
            this.attempts--;
            this.answer = "";
            this.msg = "Você errou, tente novamente!";
            if (this.attempts == -1) {
                this.endOfGame.emit("lose");
            }
        }
    };
    PanelComponent.prototype.updateTurn = function () {
        this.turnPerson = this.names[this.turn];
        this.answer = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PanelComponent.prototype, "endOfGame", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-panel",
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.css":
/*!*************************************************!*\
  !*** ./src/app/progress/progress.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\r\n  background-color: skyblue;\r\n  border: 1px solid darkblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" [style.width]=\"widthBar\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progress = 0;
    }
    ProgressComponent.prototype.ngOnInit = function () { };
    ProgressComponent.prototype.ngOnChanges = function (data) {
        this.progress = data.progress.currentValue;
        this.widthBar = this.progress + "%";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-progress",
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/shared/lifes.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/lifes.model.ts ***!
  \***************************************/
/*! exports provided: Lifes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lifes", function() { return Lifes; });
var Lifes = /** @class */ (function () {
    function Lifes(full, urlFull, urlEmpty) {
        if (urlFull === void 0) { urlFull = "/assets/coracao_cheio.png"; }
        if (urlEmpty === void 0) { urlEmpty = "/assets/coracao_vazio.png"; }
        this.full = full;
        this.urlFull = urlFull;
        this.urlEmpty = urlEmpty;
    }
    Lifes.prototype.showLife = function () {
        if (this.full) {
            return this.urlFull;
        }
        else {
            return this.urlEmpty;
        }
    };
    return Lifes;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\aulaAngular\projects\app2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map