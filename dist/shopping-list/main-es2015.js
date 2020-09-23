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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_formatted_list_formatted_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/formatted-list/formatted-list.component */ "./src/app/shopping-list/formatted-list/formatted-list.component.ts");
/* harmony import */ var _basics_list_basics_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basics-list/basics-list.component */ "./src/app/basics-list/basics-list.component.ts");







const routes = [
    { path: "", redirectTo: "/shopping-list", pathMatch: "full" },
    { path: "shopping-list", component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListComponent"] },
    { path: "basics-list", component: _basics_list_basics_list_component__WEBPACK_IMPORTED_MODULE_4__["BasicsListComponent"] },
    { path: "formatted-list", component: _shopping_list_formatted_list_formatted_list_component__WEBPACK_IMPORTED_MODULE_3__["FormattedListComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






class AppComponent {
    constructor(sLS) {
        this.sLS = sLS;
        this.title = "shopping-list";
    }
    ngOnInit() {
        // When app is first initialized, check if a list exists from this session (protects the list from being wiped when page relods)
        let list = localStorage.getItem("shopping-list");
        if (list) {
            this.sLS.restoreSessionShoppingList(JSON.parse(list));
        }
        else {
            localStorage.setItem("shopping-list", "");
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n  margin-bottom: 5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n@media print {\r\n\r\n  app-header[_ngcontent-%COMP%], app-footer[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0;\r\n  }\r\n\r\n  @page {\r\n    margin[_ngcontent-%COMP%]:   100cm[_ngcontent-%COMP%];\r\n    padding[_ngcontent-%COMP%]:   0[_ngcontent-%COMP%];\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuXHJcbiAgYXBwLWhlYWRlcixcclxuICBhcHAtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIEBwYWdlIHtcclxuICAgIG1hcmdpbjogMTAwY207XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shopping_list_shopping_list_edit_shopping_list_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-list/shopping-list-edit/shopping-list-edit.component */ "./src/app/shopping-list/shopping-list-edit/shopping-list-edit.component.ts");
/* harmony import */ var _shopping_list_shopping_list_item_shopping_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-list-item/shopping-list-item.component */ "./src/app/shopping-list/shopping-list-item/shopping-list-item.component.ts");
/* harmony import */ var _shopping_list_formatted_list_formatted_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/formatted-list/formatted-list.component */ "./src/app/shopping-list/formatted-list/formatted-list.component.ts");
/* harmony import */ var _basics_list_basics_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basics-list/basics-list.component */ "./src/app/basics-list/basics-list.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingListComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _shopping_list_shopping_list_edit_shopping_list_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListEditComponent"],
        _shopping_list_shopping_list_item_shopping_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListItemComponent"],
        _shopping_list_formatted_list_formatted_list_component__WEBPACK_IMPORTED_MODULE_11__["FormattedListComponent"],
        _basics_list_basics_list_component__WEBPACK_IMPORTED_MODULE_12__["BasicsListComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingListComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _shopping_list_shopping_list_edit_shopping_list_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListEditComponent"],
                    _shopping_list_shopping_list_item_shopping_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListItemComponent"],
                    _shopping_list_formatted_list_formatted_list_component__WEBPACK_IMPORTED_MODULE_11__["FormattedListComponent"],
                    _basics_list_basics_list_component__WEBPACK_IMPORTED_MODULE_12__["BasicsListComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/basics-list/basics-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/basics-list/basics-list.component.ts ***!
  \******************************************************/
/*! exports provided: BasicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicsListComponent", function() { return BasicsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/item.model */ "./src/app/shared/item.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BasicsListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r2);
} }
class BasicsListComponent {
    constructor(sLS, snackBar) {
        this.sLS = sLS;
        this.snackBar = snackBar;
        this.basicsList = [
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("milk", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("eggs", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("margarine", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("coffee creamer", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("sliced cheese", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("sharp cheddar", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("cream cheese", "Dairy"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("mayonnaise", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("ketchup", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("soft drink", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("fizzy water", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("fruit cups", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("instant coffee", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("garbage bags", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("recycling bags", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("pam", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("baking soda", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("sliced bread", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("olive oil", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("vegetable oil", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("salt", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("pepper", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("dish soap", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("body wash", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("shampoo", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("toothpaste", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("dental floss", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("bar soap", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("mouth wash", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("toilet paper", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("paper towels", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("kleenex", "Aisles"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("bagels", "Bakery"),
            new _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("garlic", "Fruits & Vegetables"),
        ];
        this.basicsToAdd = [];
    }
    ngOnInit() { }
    onAddItemsToList() {
        const items = document.querySelectorAll("input");
        for (let i = 0; i < items.length; i++) {
            if (items[i].checked) {
                this.basicsToAdd.unshift(this.basicsList[+items[i].value]);
            }
        }
        this.sLS.addItemsToShoppingList(this.basicsToAdd);
        this.snackBar.open("Ingredients have been added to the list!", "", {
            duration: 1000,
        });
        window.console.log(this.basicsToAdd);
    }
}
BasicsListComponent.ɵfac = function BasicsListComponent_Factory(t) { return new (t || BasicsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
BasicsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicsListComponent, selectors: [["app-basics-list"]], decls: 9, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "button"], [3, "click"], [3, "for"], ["type", "checkbox", 3, "name", "id", "value"]], template: function BasicsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BasicsListComponent_li_5_Template, 4, 5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicsListComponent_Template_button_click_7_listener() { return ctx.onAddItemsToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Basics To List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0 auto;\r\n  padding: 0.5rem;\r\n  text-align: right;\r\n  max-width: -webkit-fit-content;\r\n  max-width: -moz-fit-content;\r\n  max-width: fit-content;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding: 0.5rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: lawngreen;\r\n  border: 2px solid lightgray;\r\n  border-radius: 0.4rem;\r\n  font-size: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNzLWxpc3QvYmFzaWNzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9iYXNpY3MtbGlzdC9iYXNpY3MtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbmxpIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-basics-list",
                templateUrl: "./basics-list.component.html",
                styleUrls: ["./basics-list.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FooterComponent {
    constructor(sLS, router, route) {
        this.sLS = sLS;
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
    onNavigateToFormattedList() {
        let categorizedItems = this.sLS.getCategorizedList();
        // let categorizedItemsString = JSON.stringify(categorizedItems);
        // let routerCommands = ["formatted-list"];
        this.router.navigate(["formatted-list"], { queryParams: categorizedItems });
    }
    onResetList() {
        if (window.confirm("Are you sure you want to reset the shopping list?")) {
            localStorage.removeItem("shopping-list");
            this.sLS.resetList();
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: {},
            });
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "reset", 3, "click"], [1, "action_button", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_3_listener() { return ctx.onResetList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Reset List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_6_listener() { return ctx.onNavigateToFormattedList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View Formatted List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  background: grey;\r\n  border-top: 1px solid black;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  border-top: 1px solid black;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding: 0.2rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.action_button[_ngcontent-%COMP%] {\r\n  background-color: cyan;\r\n  border: 1px solid black;\r\n}\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n  background-color: lightcoral;\r\n  border: 1px solid black;\r\n}\r\n\r\n@media screen and (min-width: 40rem) {\r\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin: 0.5rem;\r\n  }\r\n\r\n  .reset[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .action_button[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubGkge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxubGkgZGl2IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hY3Rpb25fYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucmVzZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MHJlbSkge1xyXG4gIGZvb3RlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5yZXNldCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbl9idXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer",
                templateUrl: "./footer.component.html",
                styleUrls: ["./footer.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor(sLS, router) {
        this.sLS = sLS;
        this.router = router;
    }
    ngOnInit() { }
    onNavigateToFormattedList() {
        let categorizedItems = this.sLS.getCategorizedList();
        // let categorizedItemsString = JSON.stringify(categorizedItems);
        // let routerCommands = ["formatted-list"];
        this.router.navigate(["formatted-list"], { queryParams: categorizedItems });
    }
    onResetList() {
        localStorage.removeItem("shopping-list");
        this.sLS.resetList();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [[1, "logo"], ["id", "shoppingListLink", "routerLink", "shopping-list", "routerLinkActive", "active"], [1, "links"], ["id", "basicsListLink", "routerLink", "basics-list", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Basics List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  background: black;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n#shoppingListLink[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n#shoppingListLink.active[_ngcontent-%COMP%] {\r\n  -webkit-text-decoration: underline white;\r\n          text-decoration: underline white;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  background: lightgray;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid black;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n#basicsListLink[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n#basicsListLink.active[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media screen and (min-width: 40rem) {\r\n  header[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding-top: 0.8rem;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: 1px solid black;\r\n    justify-content: flex-end;\r\n    padding-right: 0.5rem;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n    padding-left: 0.5rem;\r\n    border-left: 1px solid black;\r\n    margin: 0.3rem 0;\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7OztBQUdGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuI3Nob3BwaW5nTGlzdExpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNzaG9wcGluZ0xpc3RMaW5rLmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2hpdGU7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbn1cclxuXHJcbiNiYXNpY3NMaXN0TGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2Jhc2ljc0xpc3RMaW5rLmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MHJlbSkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIG5hdiB1bCBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor(name, category) {
        this._name = name;
        if (category) {
            this._category = category;
        }
        else {
            this._category = "Unknown";
        }
    }
    static createItemFromItemProperties(item) {
        return new Item(item._name, item._category);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    static get Categories() {
        return [...Item._Categories];
    }
}
Item._Categories = [
    "Aisles",
    "Fruits & Vegetables",
    "Meat",
    "Dairy",
    "Deli",
    "Bakery",
    "Unknown",
];


/***/ }),

/***/ "./src/app/shopping-list/formatted-list/formatted-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/formatted-list/formatted-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormattedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedListComponent", function() { return FormattedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FormattedListComponent_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function FormattedListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormattedListComponent_div_1_li_4_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r1.value);
} }
class FormattedListComponent {
    constructor(route) {
        this.route = route;
        this.categorizedItems = new Map();
    }
    ngOnInit() {
        // let categoriesAndItemsAsStrings: any[] = [];
        // console.log(this.route.snapshot.queryParams);
        // let paramMapKeys = this.route.snapshot.queryParamMap.keys;
        // for (let key of paramMapKeys) {
        //   categoriesAndItemsAsStrings.push(
        //     this.route.snapshot.queryParamMap.getAll(key)
        //   );
        // }
        // for (let category of categoriesAndItemsAsStrings) {
        //   this.categorizedItems.set(category[0], category[1].split(","));
        // }
        this.route.queryParams.subscribe((params) => {
            console.log("in callback: " + this.route.queryParams);
            if (this.route.snapshot.queryParams[0]) {
                let categoriesAndItemsAsStrings = [];
                console.log(this.route.snapshot.queryParams);
                let paramMapKeys = this.route.snapshot.queryParamMap.keys;
                for (let key of paramMapKeys) {
                    categoriesAndItemsAsStrings.push(this.route.snapshot.queryParamMap.getAll(key));
                }
                for (let category of categoriesAndItemsAsStrings) {
                    this.categorizedItems.set(category[0], category[1].split(","));
                }
            }
            else {
                this.categorizedItems = new Map();
            }
        });
    }
    showValue(value) {
        console.log(value);
    }
}
FormattedListComponent.ɵfac = function FormattedListComponent_Factory(t) { return new (t || FormattedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
FormattedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormattedListComponent, selectors: [["app-formatted-list"]], decls: 3, vars: 3, consts: [[1, "container"], ["class", "categoryList", 4, "ngFor", "ngForOf"], [1, "categoryList"], [4, "ngFor", "ngForOf"]], template: function FormattedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormattedListComponent_div_1_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.categorizedItems));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["h4[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 1rem 0;\r\n  list-style: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  padding: 0.2rem;\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\n@media screen and (min-width: 40rem) {\r\n  .container[_ngcontent-%COMP%] {\r\n    -moz-column-count: 2;\r\n         column-count: 2;\r\n  }\r\n\r\n  .categoryList[_ngcontent-%COMP%] {\r\n    -moz-column-break-inside: avoid;\r\n         break-inside: avoid;\r\n    padding-top: 1rem;\r\n  }\r\n}\r\n\r\n@media print {\r\n  .container[_ngcontent-%COMP%] {\r\n    -moz-column-count: 2;\r\n         column-count: 2;\r\n    gap: 1.5in;\r\n    font-size: 0.75rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .categoryList[_ngcontent-%COMP%] {\r\n    -moz-column-break-inside: avoid;\r\n         break-inside: avoid;\r\n  }\r\n\r\n  .categoryList[_ngcontent-%COMP%]:first-child {\r\n    margin: -1rem 0 0 0;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 2mm 0;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9mb3JtYXR0ZWQtbGlzdC9mb3JtYXR0ZWQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0U7SUFDRSxvQkFBZTtTQUFmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwrQkFBbUI7U0FBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBZTtTQUFmLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLCtCQUFtQjtTQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3QvZm9ybWF0dGVkLWxpc3QvZm9ybWF0dGVkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwcmVtKSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnlMaXN0IHtcclxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgICBnYXA6IDEuNWluO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5TGlzdCB7XHJcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5TGlzdDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IC0xcmVtIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMm1tIDA7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormattedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-formatted-list",
                templateUrl: "./formatted-list.component.html",
                styleUrls: ["./formatted-list.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-list/shopping-list-edit/shopping-list-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list-edit/shopping-list-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShoppingListEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListEditComponent", function() { return ShoppingListEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/item.model */ "./src/app/shared/item.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ShoppingListEditComponent {
    constructor(sLS) {
        this.sLS = sLS;
        this.item = new src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("");
    }
    ngOnInit() { }
    onAddItem() {
        console.log(this.item);
        this.sLS.addItemToShoppingList(this.item);
        this.item = new src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]("");
    }
}
ShoppingListEditComponent.ɵfac = function ShoppingListEditComponent_Factory(t) { return new (t || ShoppingListEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"])); };
ShoppingListEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListEditComponent, selectors: [["app-shopping-list-edit"]], decls: 6, vars: 1, consts: [["for", "itemName"], ["type", "search", "id", "itemName", "name", "itemName", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function ShoppingListEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Item Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShoppingListEditComponent_Template_input_ngModelChange_3_listener($event) { return ctx.item.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListEditComponent_Template_button_click_4_listener() { return ctx.onAddItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  text-align: center;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem;\r\n  flex: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n  flex: auto;\r\n}\r\n\r\ninput[type='search'][_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n@media screen and (min-width: 40rem) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWVkaXQvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0Esc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWVkaXQvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZmxleDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZmxleDogYXV0bztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwcmVtKSB7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-shopping-list-edit",
                templateUrl: "./shopping-list-edit.component.html",
                styleUrls: ["./shopping-list-edit.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-list/shopping-list-item/shopping-list-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list-item/shopping-list-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShoppingListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListItemComponent", function() { return ShoppingListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/item.model */ "./src/app/shared/item.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ShoppingListItemComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1, " ");
} }
class ShoppingListItemComponent {
    constructor(sLS) {
        this.sLS = sLS;
        this.categories = src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"].Categories;
    }
    ngOnInit() {
        this.item = this.sLS.getListItem(this.index);
    }
    onRemoveItem() {
        this.sLS.removeFromShoppingList(this.index);
    }
    onCategorySelect() {
        this.sLS.editListItem(this.item, this.index);
    }
    getImage() {
        return ("url(" +
            "../../../assets/images/" +
            this.item.category.replace(/\s/g, "") +
            ".jpg)");
    }
}
ShoppingListItemComponent.ɵfac = function ShoppingListItemComponent_Factory(t) { return new (t || ShoppingListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"])); };
ShoppingListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListItemComponent, selectors: [["app-shopping-list-item"]], inputs: { index: "index" }, decls: 12, vars: 5, consts: [[1, "container"], [1, "name"], [3, "click"], [1, "category"], ["for", "categorySelect"], ["id", "categorySelect", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ShoppingListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListItemComponent_Template_button_click_4_listener() { return ctx.onRemoveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShoppingListItemComponent_Template_select_ngModelChange_10_listener($event) { return ctx.item.category = $event; })("ngModelChange", function ShoppingListItemComponent_Template_select_ngModelChange_10_listener() { return ctx.onCategorySelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShoppingListItemComponent_option_11_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.getImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".container[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  border-radius: 0.2rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 0.4rem;\r\n  max-width: 100%;\r\n  background: lightgrey;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  border-right: 1px solid black;\r\n  margin: 0 0.5rem;\r\n  max-width: 100%;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n  \r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  margin: -0.4rem 0.25rem;\r\n  padding: 0.425rem 0.25rem 0;\r\n  max-width: 100%;\r\n  border-left: 1px solid black;\r\n  border-right: 1px solid black;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  margin: 0.2rem 0 0.5rem;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: tomato;\r\n  text-shadow: 0.1rem 0.1rem 0 black,\r\n    -0.1rem 0.1rem 0.1rem black,\r\n    0.1rem -0.1rem 0.1rem black,\r\n    -0.1rem -0.1rem 0.1rem black;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background: lightcoral;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 0 0.5rem;\r\n  max-width: 100%;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\noption[_ngcontent-%COMP%] {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtzQkFDb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLFFBQVEiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtaXRlbS9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gIC8qIGJhY2tncm91bmQgaW1hZ2UgaXMgc2V0IGlubGluZSBpbiB0aGUgaHRtbCBpbiBvcmRlciB0byBtYWtlIGl0IGR5bmFtaWMgb24gYVxyXG4gIHBlciBjYXRlZ29yeSBiYXNpcyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtYXJnaW46IC0wLjRyZW0gMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjQyNXJlbSAwLjI1cmVtIDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmg0IHtcclxuICBtYXJnaW46IDAuMnJlbSAwIDAuNXJlbTtcclxufVxyXG5cclxuLmNhdGVnb3J5IGg0IHtcclxuICBjb2xvcjogdG9tYXRvO1xyXG4gIHRleHQtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAgYmxhY2ssXHJcbiAgICAtMC4xcmVtIDAuMXJlbSAwLjFyZW0gYmxhY2ssXHJcbiAgICAwLjFyZW0gLTAuMXJlbSAwLjFyZW0gYmxhY2ssXHJcbiAgICAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtIGJsYWNrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5vcHRpb24ge31cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-shopping-list-item",
                templateUrl: "./shopping-list-item.component.html",
                styleUrls: ["./shopping-list-item.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["index"]
        }] }); })();


/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _shopping_list_edit_shopping_list_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list-edit/shopping-list-edit.component */ "./src/app/shopping-list/shopping-list-edit/shopping-list-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shopping_list_item_shopping_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list-item/shopping-list-item.component */ "./src/app/shopping-list/shopping-list-item/shopping-list-item.component.ts");






function ShoppingListComponent_app_shopping_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shopping-list-item", 2);
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r2);
} }
class ShoppingListComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ngOnInit() {
        this._list = this.shoppingListService.shoppingList;
        this.listSubscription = this.shoppingListService.shoppingListEdited.subscribe((list) => {
            this._list = list;
        });
    }
    onPrintList() {
        console.log(this._list);
    }
    ngOnDestroy() {
        this.listSubscription.unsubscribe();
    }
    get list() {
        return this._list;
    }
    set list(value) {
        this._list = value;
    }
}
ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) { return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"])); };
ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListComponent, selectors: [["app-shopping-list"]], decls: 4, vars: 1, consts: [[1, "container"], [3, "index", 4, "ngFor", "ngForOf"], [3, "index"]], template: function ShoppingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-shopping-list-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShoppingListComponent_app_shopping_list_item_3_Template, 1, 1, "app-shopping-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_shopping_list_edit_shopping_list_edit_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListEditComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shopping_list_item_shopping_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListItemComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n}\r\n\r\napp-shopping-list-edit[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 1rem 0;\r\n}\r\n\r\napp-shopping-list-item[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 1rem 0;\r\n  max-width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuYXBwLXNob3BwaW5nLWxpc3QtZWRpdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbmFwcC1zaG9wcGluZy1saXN0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-shopping-list",
                templateUrl: "./shopping-list.component.html",
                styleUrls: ["./shopping-list.component.css"],
            }]
    }], function () { return [{ type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/item.model */ "./src/app/shared/item.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class ShoppingListService {
    constructor() {
        // "Aisles",
        // "Fruits & Vegetables",
        // "Meat",
        // "Dairy",
        // "Deli",
        // "Bakery",
        // "Unknown",
        this._shoppingList = [
        // new Item("Brocolli", "Fruits & Vegetables"),
        // new Item("Asparagus", "Fruits & Vegetables"),
        // new Item("Romaine Hearts", "Fruits & Vegetables"),
        // new Item("Cucumber x 2", "Fruits & Vegetables"),
        // new Item("Eggs", "Dairy"),
        // new Item("Sharp Cheddar", "Dairy"),
        // new Item("Beer", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Gravy", "Aisles"),
        // new Item("Fruit Cups", "Aisles"),
        // new Item("Frozen Pizza", "Aisles"),
        // new Item("Fizz", "Aisles"),
        // new Item("Soda", "Aisles"),
        // new Item("Asian Noodles x 4", "Aisles"),
        // new Item("Worcestershire Sauce", "Aisles"),
        // new Item("Bagels", "Bakery"),
        // new Item("Sandwich Bread", "Bakery"),
        // new Item("Minced Beef", "Meat"),
        // new Item("Breakfast Meat", "Meat"),
        // new Item("Chicken Breasts", "Meat"),
        // new Item("Provolone", "Deli"),
        // new Item("Cold Cuts", "Deli"),
        // new Item("Milk", "Dairy"),
        ];
        this._shoppingListEdited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // ngOnInit() {
    //   let list = localStorage.getItem("shopping-list");
    //   if (list) {
    //     this._shoppingList = JSON.parse(list);
    //   } else {
    //     localStorage.setItem("shopping-list", "");
    //   }
    //   console.log(JSON.stringify(this._shoppingList));
    //   console.log("IIIIIIIIIIIIIIIIIIIIIIII");
    // }
    addItemToShoppingList(item) {
        console.log(item);
        this._shoppingList.unshift(item);
        localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
        this._shoppingListEdited.next([...this._shoppingList]);
    }
    addItemsToShoppingList(items) {
        console.log(items);
        for (const item of items) {
            this._shoppingList.unshift(item);
        }
        localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
        this._shoppingListEdited.next([...this._shoppingList]);
    }
    removeFromShoppingList(index) {
        this._shoppingList.splice(index, 1);
        localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
        this._shoppingListEdited.next([...this._shoppingList]);
    }
    getListItem(index) {
        return this._shoppingList[index];
    }
    editListItem(item, index) {
        this._shoppingList[index] = item;
        localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
        this._shoppingListEdited.next([...this._shoppingList]);
    }
    getCategorizedList() {
        let categorizedItemsMap = new Map();
        for (let item of this._shoppingList) {
            categorizedItemsMap.has(item.category)
                ? categorizedItemsMap.get(item.category).push(item.name)
                : categorizedItemsMap.set(item.category, [item.name]);
        }
        let categorizedItemsArray = Array.from(categorizedItemsMap);
        // console.log(categorizedItemsArray);
        return categorizedItemsArray;
    }
    restoreSessionShoppingList(shoppingList) {
        // this._shoppingList = shoppingList;
        // for some reason, typecasting doesn't work here, which causes issues, so i do this instead
        for (let item of shoppingList) {
            this._shoppingList.push(_shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"].createItemFromItemProperties(item));
        }
    }
    resetList() {
        this._shoppingList = [];
        this._shoppingListEdited.next([...this._shoppingList]);
    }
    get shoppingList() {
        return [...this._shoppingList];
    }
    get shoppingListEdited() {
        return this._shoppingListEdited;
    }
}
ShoppingListService.ɵfac = function ShoppingListService_Factory(t) { return new (t || ShoppingListService)(); };
ShoppingListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShoppingListService, factory: ShoppingListService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Waylon\git\shopping-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map