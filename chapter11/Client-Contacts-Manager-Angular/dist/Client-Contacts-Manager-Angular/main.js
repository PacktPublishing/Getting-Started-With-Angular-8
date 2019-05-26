(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about-page/about-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about-page/about-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About</h1>\n<mat-card>\n  <mat-card-content>\n    This is the Client Contacts Manager, where you can add the contact details of your sales clients.\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation title=\"Client Contacts Manager\"></app-navigation>\n<div class=\"container\"><router-outlet></router-outlet></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-detail/client-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-detail/client-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!editView\">\n  <mat-card-header>\n    <h1>{{ client?.firstname }} {{ client?.lastname }}</h1>\n  </mat-card-header>\n\n  <mat-card-subtitle>\n    <h2>{{ client?.companyName }}</h2>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <p>Email: {{ client?.email }}</p>\n    <p>Telephone: {{ client?.telephoneNumber }}</p>\n  </mat-card-content>\n  <mat-card-footer>\n    <button (click)=\"edit()\" mat-raised-button color=\"primary\">Edit</button>\n    <button (click)=\"searchAll()\" mat-raised-button color=\"primary\">Search All Clients</button>\n    <button (click)=\"delete(client)\" mat-raised-button color=\"warn\">Delete</button>\n  </mat-card-footer>\n</mat-card>\n\n<mat-card *ngIf=\"editView\">\n  <form [formGroup]=\"clientEditForm\">\n  <mat-card-header>\n    <mat-form-field>\n      <input matInput type=\"text\" name=\"firstname\" formControlName=\"firstname\" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" name=\"lastname\" formControlName=\"lastname\" />\n    </mat-form-field>\n  </mat-card-header>\n  <mat-card-subtitle>\n    <h2>{{ client?.companyName }}</h2>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput type=\"text\" name=\"email\" formControlName=\"email\" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" name=\"telephone\" formControlName=\"telephoneNumber\" />\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-footer>\n    <button mat-button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n  </mat-card-footer>\n</form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-details-page/client-details-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-details-page/client-details-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-detail (deleteEvent)=\"deleteClientHandler($event)\" (editEvent)=\"editEventHandler($event)\"\n                   (saveEvent)=\"saveClientHandler($event)\" (searchEvent)=\"searchEventHandler()\"\n                   [client]=\"selectedClient\"></app-client-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-edit-page/client-edit-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-edit-page/client-edit-page.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-form [client]=\"client\" [edit]=\"true\"></app-client-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-form/client-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-form/client-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"client-form\">\n  <form [formGroup]=\"clientForm\" (ngSubmit)=\"saveClient()\">\n    <mat-card-content>\n      <mat-form-field>\n        <input\n          matInput\n          type=\"text\"\n          name=\"firstnameTxt\"\n          formControlName=\"firstname\"\n          placeholder=\"Firstname...\"\n          required\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"lastnameTxt\" formControlName=\"lastname\" placeholder=\"Lastname...\" required />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"email\" name=\"emailTxt\" formControlName=\"email\" placeholder=\"Email...\" required />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"tel\" name=\"telephoneTxt\" formControlName=\"telephoneNumber\" placeholder=\"Telephone...\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input\n          matInput\n          type=\"tel\"\n          name=\"companyTxt\"\n          formControlName=\"companyName\"\n          placeholder=\"Company Name...\"\n          required\n        />\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-footer>\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!clientForm.valid\">\n        Save\n      </button>\n    </mat-card-footer>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-list/client-item/client-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-list/client-item/client-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client-item works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-list/client-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-list/client-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"client-list\">\n  <mat-list-item *ngFor=\"let client of clients\" role=\"list-item\">\n    <span>{{ client.firstname }}</span>\n    <span>{{ client.lastname }}</span>\n    <span>{{ client.email }}</span>\n    <span>{{ client.companyName }}</span>\n    <span>{{ client.telephoneNumber }}</span>\n    <button mat-icon-button (click)=\"viewClientDetails(client)\">\n      <mat-icon>info</mat-icon>\n    </button>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-page/client-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-page/client-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add a new Client</h1>\n<app-client-form (saveClientEvent)=\"saveClient($event)\"></app-client-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/client-search-page/client-search-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/client-search-page/client-search-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Client Search</h1>\n<app-search-form [title]=\"'Search for a Client'\" (searchEvent)=\"searchEventHandler($event)\"></app-search-form>\n<app-client-list [clients]=\"clientList\"> </app-client-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-detail/company-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-detail/company-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!editView\">\n  <mat-card-header>\n    <h1>{{ company?.companyName }}</h1>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>Address: {{ company?.address1 }}</p>\n    <p>Address: {{ company?.address2 }}</p>\n    <p>Town: {{ company?.town }}</p>\n    <p>Country: {{ company?.country }}</p>\n    <p>Postcode: {{ company?.postcode }}</p>\n    <p>Industry: {{ company?.industry }}</p>\n    <p>Staff: {{ company?.staffCount }}</p>\n  </mat-card-content>\n  <mat-card-footer>\n    <button (click)=\"edit()\" mat-raised-button color=\"primary\">Edit</button>\n\n    <button (click)=\"search()\" mat-raised-button color=\"primary\">Search All</button>\n    <button (click)=\"delete(company)\" mat-raised-button color=\"warn\">Delete</button>\n  </mat-card-footer>\n</mat-card>\n\n<mat-card *ngIf=\"editView\">\n  <form [formGroup]=\"companyEditForm\" (ngSubmit)=\"save()\">\n    <mat-card-header>\n      <h1>{{ company?.companyName }}</h1>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"contactEmail\" formControlName=\"contactEmail\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"address1\" formControlName=\"addressOne\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"address2\" formControlName=\"addressTwo\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"town\" formControlName=\"town\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"city\" formControlName=\"city\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"country\" formControlName=\"country\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"postcode\" formControlName=\"postCode\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"industry\" formControlName=\"industry\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"staffCount\" formControlName=\"staffCount\" />\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-footer>\n      <button mat-raised-button color=\"primary\">Save</button>\n    </mat-card-footer>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-details-page/company-details-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-details-page/company-details-page.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-company-detail\n  [company]=\"selectedCompany\"\n  (searchEvent)=\"searchEventHandler($event)\"\n  (editEvent)=\"editCompanyHandler($event)\"\n  (deleteEvent)=\"deleteCompanyHandler($event)\"\n  (saveEvent)=\"saveCompanyHandler($event)\"\n></app-company-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-form/company-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-form/company-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"company-form\">\n  <form [formGroup]=\"companyForm\" (ngSubmit)=\"saveCompany()\">\n    <mat-card-content>\n      <mat-form-field>\n        <input\n          matInput\n          type=\"text\"\n          formControlName=\"companyName\"\n          name=\"companyNameTxt\"\n          placeholder=\"Company Name\"\n          required\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input\n          matInput\n          type=\"text\"\n          formControlName=\"addressOne\"\n          name=\"addressOneTxt\"\n          placeholder=\"Address 1\"\n          required\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"addressTwo\" name=\"addressTwoTxt\" placeholder=\"Address 2\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"town\" name=\"townTxt\" placeholder=\"Town\" required />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"city\" name=\"cityTxt\" placeholder=\"City\" required />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"postCode\" name=\"postcodeTxt\" placeholder=\"Postcode\" required />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"country\" name=\"countryTxt\" placeholder=\"Country\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input\n          matInput\n          type=\"email\"\n          formControlName=\"contactEmail\"\n          name=\"contactEmailTxt\"\n          placeholder=\"Contact Email\"\n          required\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input\n          matInput\n          type=\"text\"\n          formControlName=\"staffCount\"\n          name=\"numberOfStaffTxt\"\n          placeholder=\"Number of staff\"\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" \n          formControlName=\"industry\" name=\"industryTxt\" placeholder=\"Industry\" />\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-footer>\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!companyForm.valid\">\n        Save\n      </button>\n    </mat-card-footer>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-list/company-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"company-list\">\n  <mat-list-item *ngFor=\"let company of companies\">\n    <span>{{ company.companyName }}</span>\n    <span>{{ company.address1 }}</span>\n    <span>{{ company.address2 }}</span>\n    <span>{{ company.city }}</span>\n    <span>{{ company.industry }}</span>\n    <span>{{ company.staffCount }}</span>\n    <button mat-icon-button (click)=\"viewCompanyDetails(company)\">\n      <mat-icon>info</mat-icon>\n    </button>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-page/company-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-page/company-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add a new Company</h1>\n<app-company-form (saveCompanyEvent)=\"saveCompany($event)\"></app-company-form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-search-page/company-search-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-search-page/company-search-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Company Search</h1>\n<app-search-form [title]=\"'Search for a company'\" (searchEvent)=\"searchCompanyHandler($event)\"></app-search-form>\n<app-company-list [companies]=\"companyList\"></app-company-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <p>{{ title }}</p>\n\n  <button mat-button [matMenuTriggerFor]=\"clientmenu\">Clients</button>\n  <mat-menu #clientmenu=\"matMenu\">\n    <button mat-menu-item (click)=\"goTo('clients/search')\">Client Search</button>\n    <button mat-menu-item (click)=\"goTo('clients/new')\">Add New Client</button>\n  </mat-menu>\n  <button mat-button [matMenuTriggerFor]=\"companymenu\">Company</button>\n  <mat-menu #companymenu=\"matMenu\">\n    <button mat-menu-item (click)=\"goTo('company/search')\">Company Search</button>\n    <button mat-menu-item (click)=\"goTo('company/new')\">Add New Company</button>\n  </mat-menu>\n  <button mat-button (click)=\"goTo('about')\">About</button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search-form/search-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search-form/search-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"search\">\n  <form class=\"search-form\" [formGroup]=\"searchForm\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        id=\"searchBox\"\n        placeholder=\"{{ title }}\"\n        name=\"searchField\"\n        formControlName=\"searchBox\"\n      />\n    </mat-form-field>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clients/client.module": "./src/app/clients/client.module.ts",
	"./company/company.module": "./src/app/company/company.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () { };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/about/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-material.module */ "./src/app/custom-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__["AboutPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutModule);
    return AboutModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
/* harmony import */ var _clients_client_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/client.module */ "./src/app/clients/client.module.ts");
/* harmony import */ var _company_company_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/company.module */ "./src/app/company/company.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'clients/new',
        loadChildren: './clients/client.module#ClientModule'
    },
    {
        path: 'clients/edit/:id',
        loadChildren: './clients/client.module#ClientModule'
    },
    {
        path: 'clients/search',
        loadChildren: './clients/client.module#ClientModule'
    },
    {
        path: 'clients/details/:id',
        loadChildren: './clients/client.module#ClientModule'
    },
    {
        path: 'company/new',
        loadChildren: './company/company.module#CompanyModule'
    },
    {
        path: 'company/search',
        loadChildren: './company/company.module#CompanyModule'
    },
    {
        path: 'company/details/:id',
        loadChildren: './company/company.module#CompanyModule'
    },
    {
        path: 'about',
        component: _about_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
    },
    {
        path: '',
        redirectTo: '/clients/search',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _clients_client_module__WEBPACK_IMPORTED_MODULE_3__["ClientModule"], _company_company_module__WEBPACK_IMPORTED_MODULE_4__["CompanyModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

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
        this.title = 'Client Contacts Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _clients_client_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients/client.module */ "./src/app/clients/client.module.ts");
/* harmony import */ var _company_company_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.module */ "./src/app/company/company.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-material.module */ "./src/app/custom-material.module.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _clients_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients/client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/in-memory-data.service */ "./src/app/services/in-memory-data.service.ts");
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
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryDataService"]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _custom_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
                _clients_client_module__WEBPACK_IMPORTED_MODULE_5__["ClientModule"],
                _company_company_module__WEBPACK_IMPORTED_MODULE_6__["CompanyModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_10__["AboutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_clients_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-subtitle {\n  padding-left: 35px;\n  font-size: 1.2em;\n}\n\nmat-card-content {\n  padding-left: 35px;\n  font-size: 1.1em;\n}\n\nmat-card-footer {\n  border-top: solid 1px white;\n  padding-left: 35px;\n  font-size: 0.9em;\n}\n\nmat-card-footer button {\n  margin: 2px;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbm1hdC1jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG5tYXQtY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbm1hdC1jYXJkLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDJweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./src/app/clients/client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(fb) {
        this.fb = fb;
        this.editView = false;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // creating new FormControls, with validation
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.telephoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        this.clientEditForm = this.fb.group({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            telephoneNumber: this.telephoneNumber
        });
    };
    ClientDetailComponent.prototype.ngOnChanges = function (change) {
        if (change.client.currentValue !== undefined) {
            this.populateForm(change.client.currentValue);
        }
    };
    ClientDetailComponent.prototype.searchAll = function () {
        this.searchEvent.emit();
    };
    ClientDetailComponent.prototype.edit = function () {
        this.toggleEdit();
    };
    ClientDetailComponent.prototype.delete = function (client) {
        this.deleteEvent.emit(client);
    };
    ClientDetailComponent.prototype.save = function () {
        this.saveEvent.emit(this.client);
        this.toggleEdit();
    };
    ClientDetailComponent.prototype.toggleEdit = function () {
        this.editView = !this.editView;
    };
    ClientDetailComponent.prototype.populateForm = function (clientDetails) {
        this.clientEditForm.get('firstname').setValue(clientDetails.firstname);
        this.clientEditForm.get('lastname').setValue(clientDetails.lastname);
        this.clientEditForm.get('email').setValue(clientDetails.email);
        this.clientEditForm.get('telephoneNumber').setValue(clientDetails.telephoneNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _client__WEBPACK_IMPORTED_MODULE_2__["Client"])
    ], ClientDetailComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientDetailComponent.prototype, "searchEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientDetailComponent.prototype, "editEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientDetailComponent.prototype, "deleteEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientDetailComponent.prototype, "saveEvent", void 0);
    ClientDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-detail/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/clients/client-detail/client-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-details-page/client-details-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/clients/client-details-page/client-details-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbHMtcGFnZS9jbGllbnQtZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients/client-details-page/client-details-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clients/client-details-page/client-details-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsPageComponent", function() { return ClientDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailsPageComponent = /** @class */ (function () {
    function ClientDetailsPageComponent(clientService, route, router) {
        this.clientService = clientService;
        this.route = route;
        this.router = router;
    }
    ClientDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clientID = this.route.snapshot.paramMap.get('id');
        this.clientService.getClientByID(clientID).subscribe(function (res) {
            _this.selectedClient = res;
        });
    };
    ClientDetailsPageComponent.prototype.searchEventHandler = function () {
        this.backToSearchPage();
    };
    ClientDetailsPageComponent.prototype.editEventHandler = function (client) {
        this.router.navigateByUrl('/clients/edit/' + client.id);
    };
    ClientDetailsPageComponent.prototype.deleteClientHandler = function (client) {
        var _this = this;
        this.clientService.deleteClient(client.id).subscribe(function () {
            _this.backToSearchPage();
        });
    };
    ClientDetailsPageComponent.prototype.saveClientHandler = function (client) {
        var _this = this;
        this.clientService.updateClient(client).subscribe(function () {
            _this.backToSearchPage();
        });
    };
    ClientDetailsPageComponent.prototype.backToSearchPage = function () {
        this.router.navigateByUrl('/clients/search');
    };
    ClientDetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details-page',
            template: __webpack_require__(/*! raw-loader!./client-details-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-details-page/client-details-page.component.html"),
            styles: [__webpack_require__(/*! ./client-details-page.component.scss */ "./src/app/clients/client-details-page/client-details-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClientDetailsPageComponent);
    return ClientDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-edit-page/client-edit-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/clients/client-edit-page/client-edit-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWVkaXQtcGFnZS9jbGllbnQtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients/client-edit-page/client-edit-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/clients/client-edit-page/client-edit-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditPageComponent", function() { return ClientEditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEditPageComponent = /** @class */ (function () {
    // get the client ID from the query params
    // then get the client details
    function ClientEditPageComponent(clientService, route) {
        this.clientService = clientService;
        this.route = route;
    }
    ClientEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clientId = this.route.snapshot.paramMap.get('id');
        this.clientService.getClientByID(clientId).subscribe(function (res) {
            _this.client = res;
        });
    };
    ClientEditPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-edit-page',
            template: __webpack_require__(/*! raw-loader!./client-edit-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-edit-page/client-edit-page.component.html"),
            styles: [__webpack_require__(/*! ./client-edit-page.component.scss */ "./src/app/clients/client-edit-page/client-edit-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClientEditPageComponent);
    return ClientEditPageComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-form/client-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-form/client-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-form {\n  padding-top: 20px;\n  margin-top: 40px;\n}\n.client-form mat-form-field {\n  width: 60%;\n}\n.client-form button {\n  font: 1em sans-serif;\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jbGllbnRzL2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxVQUFBO0FDRUo7QURBRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZm9ybS9jbGllbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICBidXR0b24ge1xuICAgIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogNHB4O1xuICB9XG59XG4iLCIuY2xpZW50LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5jbGllbnQtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY2xpZW50LWZvcm0gYnV0dG9uIHtcbiAgZm9udDogMWVtIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/clients/client-form/client-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-form/client-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./src/app/clients/client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientFormComponent = /** @class */ (function () {
    // in the constructor we create the a FormGroup and set the properties of
    // the formGroup to the FormControls then set it to be the clientForm we use
    // in the template.
    function ClientFormComponent(fb) {
        this.edit = false;
        this.saveClientEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // creating new FormControls, with validation
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.telephoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.clientForm = fb.group({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            telephoneNumber: this.telephoneNumber,
            companyName: this.companyName
        });
    }
    // event called when form is submitted, displaying the output of the form
    ClientFormComponent.prototype.saveClient = function () {
        this.saveClientEvent.emit(this.createClient(this.clientForm));
    };
    ClientFormComponent.prototype.createClient = function (form) {
        var clientObject = {
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            email: form.value.email,
            telephoneNumber: form.value.telephoneNumber,
            companyName: form.value.companyName
        };
        return clientObject;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _client__WEBPACK_IMPORTED_MODULE_2__["Client"])
    ], ClientFormComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientFormComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClientFormComponent.prototype, "saveClientEvent", void 0);
    ClientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! raw-loader!./client-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-form/client-form.component.html"),
            styles: [__webpack_require__(/*! ./client-form.component.scss */ "./src/app/clients/client-form/client-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-list/client-item/client-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/clients/client-list/client-item/client-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWxpc3QvY2xpZW50LWl0ZW0vY2xpZW50LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/clients/client-list/client-item/client-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/clients/client-list/client-item/client-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientItemComponent", function() { return ClientItemComponent; });
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

var ClientItemComponent = /** @class */ (function () {
    function ClientItemComponent() {
    }
    ClientItemComponent.prototype.ngOnInit = function () {
    };
    ClientItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-item',
            template: __webpack_require__(/*! raw-loader!./client-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-list/client-item/client-item.component.html"),
            styles: [__webpack_require__(/*! ./client-item.component.scss */ "./src/app/clients/client-list/client-item/client-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientItemComponent);
    return ClientItemComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-list/client-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-list {\n  width: 100%;\n  margin-top: 20px;\n}\n.client-list mat-list-item span {\n  color: black;\n  width: 20%;\n}\n.client-list mat-list-item mat-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWxpc3QvY2xpZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF0LWxpc3QtaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG59XG4iLCIuY2xpZW50LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jbGllbnQtbGlzdCBtYXQtbGlzdC1pdGVtIHNwYW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMCU7XG59XG4uY2xpZW50LWxpc3QgbWF0LWxpc3QtaXRlbSBtYXQtaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-list/client-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(router) {
        this.router = router;
    }
    ClientListComponent.prototype.viewClientDetails = function (client) {
        this.router.navigateByUrl('/clients/details/' + client.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientListComponent.prototype, "clients", void 0);
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! raw-loader!./client-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.scss */ "./src/app/clients/client-list/client-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-page/client-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-page/client-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LXBhZ2UvY2xpZW50LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/clients/client-page/client-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-page/client-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageComponent", function() { return ClientPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientPageComponent = /** @class */ (function () {
    function ClientPageComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    ClientPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (res) {
            _this.clientList = res;
        });
    };
    ClientPageComponent.prototype.saveClient = function (clientDetails) {
        var _this = this;
        this.clientService.save(clientDetails).subscribe(function (client) {
            _this.clientList.push(client);
            _this.router.navigateByUrl('/clients/search');
        });
    };
    ClientPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-page',
            template: __webpack_require__(/*! raw-loader!./client-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-page/client-page.component.html"),
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]],
            styles: [__webpack_require__(/*! ./client-page.component.scss */ "./src/app/clients/client-page/client-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClientPageComponent);
    return ClientPageComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-search-page/client-search-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/clients/client-search-page/client-search-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LXNlYXJjaC1wYWdlL2NsaWVudC1zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/clients/client-search-page/client-search-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/client-search-page/client-search-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSearchPageComponent", function() { return ClientSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client.service */ "./src/app/clients/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientSearchPageComponent = /** @class */ (function () {
    function ClientSearchPageComponent(clientService) {
        this.clientService = clientService;
    }
    ClientSearchPageComponent.prototype.ngOnInit = function () {
        this.loadClientList();
    };
    ClientSearchPageComponent.prototype.searchEventHandler = function (searchTerm) {
        if (searchTerm) {
            this.searchClients(searchTerm);
        }
        else {
            this.loadClientList();
        }
    };
    ClientSearchPageComponent.prototype.loadClientList = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (result) {
            _this.clientList = result;
        });
    };
    ClientSearchPageComponent.prototype.searchClients = function (searchTerm) {
        var _this = this;
        this.clientService.search(searchTerm).subscribe(function (res) {
            _this.clientList = res;
        });
    };
    ClientSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-search-page',
            template: __webpack_require__(/*! raw-loader!./client-search-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/client-search-page/client-search-page.component.html"),
            styles: [__webpack_require__(/*! ./client-search-page.component.scss */ "./src/app/clients/client-search-page/client-search-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientSearchPageComponent);
    return ClientSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/clients/client.module.ts":
/*!******************************************!*\
  !*** ./src/app/clients/client.module.ts ***!
  \******************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-material.module */ "./src/app/custom-material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-detail/client-detail.component */ "./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var _client_details_page_client_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-details-page/client-details-page.component */ "./src/app/clients/client-details-page/client-details-page.component.ts");
/* harmony import */ var _client_edit_page_client_edit_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-edit-page/client-edit-page.component */ "./src/app/clients/client-edit-page/client-edit-page.component.ts");
/* harmony import */ var _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-form/client-form.component */ "./src/app/clients/client-form/client-form.component.ts");
/* harmony import */ var _client_list_client_item_client_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-list/client-item/client-item.component */ "./src/app/clients/client-list/client-item/client-item.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/clients/client-list/client-list.component.ts");
/* harmony import */ var _client_page_client_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client-page/client-page.component */ "./src/app/clients/client-page/client-page.component.ts");
/* harmony import */ var _client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-search-page/client-search-page.component */ "./src/app/clients/client-search-page/client-search-page.component.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client.service */ "./src/app/clients/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'clients/new',
        component: _client_page_client_page_component__WEBPACK_IMPORTED_MODULE_12__["ClientPageComponent"]
    },
    {
        path: 'clients/search',
        component: _client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_13__["ClientSearchPageComponent"]
    },
    {
        path: 'clients/details/:id',
        component: _client_details_page_client_details_page_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsPageComponent"]
    },
    {
        path: 'clients/edit/:id',
        component: _client_edit_page_client_edit_page_component__WEBPACK_IMPORTED_MODULE_8__["ClientEditPageComponent"]
    }
];
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _client_page_client_page_component__WEBPACK_IMPORTED_MODULE_12__["ClientPageComponent"],
                _client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_13__["ClientSearchPageComponent"],
                _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientFormComponent"],
                _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_11__["ClientListComponent"],
                _client_list_client_item_client_item_component__WEBPACK_IMPORTED_MODULE_10__["ClientItemComponent"],
                _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailComponent"],
                _client_details_page_client_details_page_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsPageComponent"],
                _client_edit_page_client_edit_page_component__WEBPACK_IMPORTED_MODULE_8__["ClientEditPageComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/clients/client.service.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/client.service.ts ***!
  \*******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(httpClient) {
        this.httpClient = httpClient;
        this.clientAPIUrl = 'api/clients';
    }
    // save a client to local storage
    ClientService.prototype.save = function (client) {
        var url = "" + this.clientAPIUrl;
        return this.httpClient.post(url, client);
    };
    // get client by clientID
    ClientService.prototype.getClientByID = function (clientId) {
        var url = this.clientAPIUrl + "/" + clientId;
        return this.httpClient.get(url);
    };
    // get a list of the clients
    ClientService.prototype.getClients = function () {
        var url = "" + this.clientAPIUrl;
        return this.httpClient.get(url);
    };
    // archive a client
    ClientService.prototype.deleteClient = function (clientId) {
        var url = this.clientAPIUrl + "/" + clientId;
        return this.httpClient.delete(url);
    };
    // update a clients details
    ClientService.prototype.updateClient = function (client) {
        var url = "" + this.clientAPIUrl;
        return this.httpClient.put(url, client);
    };
    // search the clients list
    ClientService.prototype.search = function (searchTerm) {
        searchTerm.trim();
        var url = "" + this.clientAPIUrl;
        var searchOptions = searchTerm ? { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('firstname', searchTerm) } : {};
        return this.httpClient.get(url, searchOptions);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/clients/client.ts":
/*!***********************************!*\
  !*** ./src/app/clients/client.ts ***!
  \***********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/company/company-detail/company-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/company/company-detail/company-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\n  padding-left: 35px;\n  font-size: 1.1em;\n}\n\nmat-card-footer {\n  border-top: solid 1px white;\n  padding-left: 35px;\n  font-size: 0.9em;\n  padding: 2px;\n}\n\nmat-card-footer button {\n  margin: 2px;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jb21wYW55L2NvbXBhbnktZGV0YWlsL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wYW55L2NvbXBhbnktZGV0YWlsL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0UsV0FBQTtBQ0VKOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wYW55LWRldGFpbC9jb21wYW55LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbm1hdC1jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiAycHg7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbm1hdC1jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiAycHg7XG59XG5tYXQtY2FyZC1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/company/company-detail/company-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company/company-detail/company-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company */ "./src/app/company/company.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(fb) {
        this.editView = false;
        // creating new FormControls, with validation
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.addressOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.addressTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.town = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.postCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.contactEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.staffCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.industry = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.companyEditForm = fb.group({
            companyName: this.companyName,
            contactEmail: this.contactEmail,
            addressOne: this.addressOne,
            addressTwo: this.addressTwo,
            town: this.town,
            city: this.city,
            postCode: this.postCode,
            country: this.country,
            staffCount: this.staffCount,
            industry: this.industry
        });
    }
    CompanyDetailComponent.prototype.ngOnChanges = function (change) {
        if (change.company.currentValue !== undefined) {
            this.populateForm(change.company.currentValue);
        }
    };
    CompanyDetailComponent.prototype.edit = function () {
        this.toggleEdit();
    };
    CompanyDetailComponent.prototype.delete = function (company) {
        this.deleteEvent.emit(company);
    };
    CompanyDetailComponent.prototype.save = function () {
        this.saveEvent.emit(this.createCompanyObject(this.companyEditForm));
    };
    CompanyDetailComponent.prototype.search = function () {
        this.searchEvent.emit();
    };
    CompanyDetailComponent.prototype.toggleEdit = function () {
        this.editView = !this.editView;
    };
    CompanyDetailComponent.prototype.populateForm = function (companyDetails) {
        this.companyEditForm.get('contactEmail').setValue(companyDetails.contactEmail);
        this.companyEditForm.get('addressOne').setValue(companyDetails.address1);
        this.companyEditForm.get('addressTwo').setValue(companyDetails.address2);
        this.companyEditForm.get('town').setValue(companyDetails.town);
        this.companyEditForm.get('city').setValue(companyDetails.city);
        this.companyEditForm.get('country').setValue(companyDetails.country);
        this.companyEditForm.get('postCode').setValue(companyDetails.postcode);
        this.companyEditForm.get('industry').setValue(companyDetails.industry);
        this.companyEditForm.get('staffCount').setValue(companyDetails.staffCount);
    };
    CompanyDetailComponent.prototype.createCompanyObject = function (form) {
        var companyObject = {
            id: this.company.id,
            companyName: this.company.companyName,
            address1: form.value.address1,
            address2: form.value.address2,
            town: form.value.town,
            city: form.value.city,
            postcode: form.value.postCode,
            contactEmail: form.value.contactEmail,
            country: form.value.country,
            industry: form.value.industry,
            staffCount: form.value.staffCount
        };
        return companyObject;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _company__WEBPACK_IMPORTED_MODULE_2__["Company"])
    ], CompanyDetailComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyDetailComponent.prototype, "searchEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyDetailComponent.prototype, "editEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyDetailComponent.prototype, "deleteEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyDetailComponent.prototype, "saveEvent", void 0);
    CompanyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-detail',
            template: __webpack_require__(/*! raw-loader!./company-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-detail/company-detail.component.html"),
            styles: [__webpack_require__(/*! ./company-detail.component.scss */ "./src/app/company/company-detail/company-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/company/company-details-page/company-details-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/company/company-details-page/company-details-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1kZXRhaWxzLXBhZ2UvY29tcGFueS1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/company/company-details-page/company-details-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/company/company-details-page/company-details-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompanyDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsPageComponent", function() { return CompanyDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailsPageComponent = /** @class */ (function () {
    function CompanyDetailsPageComponent(companyService, router, route) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
    }
    CompanyDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var companyID = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompanyByID(companyID).subscribe(function (res) {
            _this.selectedCompany = res;
        });
    };
    CompanyDetailsPageComponent.prototype.searchEventHandler = function () {
        this.backToSearchPage();
    };
    CompanyDetailsPageComponent.prototype.editCompanyHandler = function (company) {
        this.router.navigateByUrl('/company/edit/' + company.id);
    };
    CompanyDetailsPageComponent.prototype.deleteCompanyHandler = function (company) {
        var _this = this;
        this.companyService.deleteCompany(company.id).subscribe(function () {
            _this.backToSearchPage();
        });
    };
    CompanyDetailsPageComponent.prototype.saveCompanyHandler = function (company) {
        var _this = this;
        this.companyService.updateCompany(company).subscribe(function () {
            _this.backToSearchPage();
        });
    };
    CompanyDetailsPageComponent.prototype.backToSearchPage = function () {
        this.router.navigateByUrl('/company/search');
    };
    CompanyDetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-details-page',
            template: __webpack_require__(/*! raw-loader!./company-details-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-details-page/company-details-page.component.html"),
            styles: [__webpack_require__(/*! ./company-details-page.component.scss */ "./src/app/company/company-details-page/company-details-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CompanyDetailsPageComponent);
    return CompanyDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/company/company-form/company-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/company/company-form/company-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-form {\n  padding-top: 20px;\n  margin-top: 40px;\n}\n.company-form mat-form-field {\n  width: 60%;\n}\n.company-form button {\n  font: 1em sans-serif;\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jb21wYW55L2NvbXBhbnktZm9ybS9jb21wYW55LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1mb3JtL2NvbXBhbnktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1mb3JtL2NvbXBhbnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBmb250OiAxZW0gc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDRweDtcbiAgfVxufVxuIiwiLmNvbXBhbnktZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNvbXBhbnktZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29tcGFueS1mb3JtIGJ1dHRvbiB7XG4gIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/company/company-form/company-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-form/company-form.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFormComponent", function() { return CompanyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company */ "./src/app/company/company.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyFormComponent = /** @class */ (function () {
    function CompanyFormComponent(fb) {
        this.edit = false;
        this.saveCompanyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // new FormControls and validators
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.addressOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.addressTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.town = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.postCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.contactEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.staffCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.industry = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.companyForm = fb.group({
            companyName: this.companyName,
            addressOne: this.addressOne,
            addressTwo: this.addressTwo,
            town: this.town,
            city: this.city,
            postCode: this.postCode,
            country: this.country,
            contactEmail: this.contactEmail,
            staffCount: this.staffCount,
            industry: this.industry
        });
    }
    CompanyFormComponent.prototype.ngOnInit = function () {
        if (this.company) {
            console.log(this.company);
        }
    };
    CompanyFormComponent.prototype.saveCompany = function () {
        this.saveCompanyEvent.emit(this.createCompany(this.companyForm));
    };
    CompanyFormComponent.prototype.createCompany = function (form) {
        var companyObject = {
            companyName: form.value.companyName,
            address1: form.value.addressOne,
            address2: form.value.addressTwo,
            town: form.value.town,
            city: form.value.city,
            postcode: form.value.postCode,
            country: form.value.country,
            contactEmail: form.value.contactEmail,
            staffCount: form.value.staffCount,
            industry: form.value.industry
        };
        return companyObject;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _company__WEBPACK_IMPORTED_MODULE_2__["Company"])
    ], CompanyFormComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompanyFormComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyFormComponent.prototype, "saveCompanyEvent", void 0);
    CompanyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-form',
            template: __webpack_require__(/*! raw-loader!./company-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-form/company-form.component.html"),
            styles: [__webpack_require__(/*! ./company-form.component.scss */ "./src/app/company/company-form/company-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CompanyFormComponent);
    return CompanyFormComponent;
}());



/***/ }),

/***/ "./src/app/company/company-list/company-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-list {\n  width: 100%;\n  margin-top: 20px;\n}\n.company-list mat-list-item span {\n  color: black;\n  width: 20%;\n}\n.company-list mat-list-item mat-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9jb21wYW55L2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hdC1saXN0LWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gICAgbWF0LWljb24ge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbXBhbnktbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbXBhbnktbGlzdCBtYXQtbGlzdC1pdGVtIHNwYW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMCU7XG59XG4uY29tcGFueS1saXN0IG1hdC1saXN0LWl0ZW0gbWF0LWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/company/company-list/company-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(router) {
        this.router = router;
    }
    CompanyListComponent.prototype.viewCompanyDetails = function (company) {
        this.router.navigateByUrl('/company/details/' + company.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompanyListComponent.prototype, "companies", void 0);
    CompanyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html"),
            styles: [__webpack_require__(/*! ./company-list.component.scss */ "./src/app/company/company-list/company-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/company/company-page/company-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/company/company-page/company-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1wYWdlL2NvbXBhbnktcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/company/company-page/company-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-page/company-page.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageComponent", function() { return CompanyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyPageComponent = /** @class */ (function () {
    function CompanyPageComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
    }
    CompanyPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanyList().subscribe(function (res) {
            _this.companyList = res;
        });
    };
    CompanyPageComponent.prototype.saveCompany = function (companyDetails) {
        var _this = this;
        this.companyService.save(companyDetails).subscribe(function (company) {
            _this.companyList.push(company);
            _this.router.navigateByUrl('/company/search');
        });
    };
    CompanyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-page',
            template: __webpack_require__(/*! raw-loader!./company-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-page/company-page.component.html"),
            styles: [__webpack_require__(/*! ./company-page.component.scss */ "./src/app/company/company-page/company-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanyPageComponent);
    return CompanyPageComponent;
}());



/***/ }),

/***/ "./src/app/company/company-search-page/company-search-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/company/company-search-page/company-search-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1zZWFyY2gtcGFnZS9jb21wYW55LXNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company-search-page/company-search-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/company/company-search-page/company-search-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: CompanySearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySearchPageComponent", function() { return CompanySearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanySearchPageComponent = /** @class */ (function () {
    function CompanySearchPageComponent(companyService) {
        this.companyService = companyService;
    }
    CompanySearchPageComponent.prototype.ngOnInit = function () {
        this.loadCompanyList();
    };
    CompanySearchPageComponent.prototype.searchCompanyHandler = function (term) {
        if (term) {
            this.searchCompany(term);
        }
        else {
            this.loadCompanyList();
        }
    };
    CompanySearchPageComponent.prototype.loadCompanyList = function () {
        var _this = this;
        this.companyService.getCompanyList().subscribe(function (result) {
            _this.companyList = result;
        });
    };
    CompanySearchPageComponent.prototype.searchCompany = function (term) {
        var _this = this;
        this.companyService.search(term).subscribe(function (results) {
            _this.companyList = results;
        });
    };
    CompanySearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-search-page',
            template: __webpack_require__(/*! raw-loader!./company-search-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-search-page/company-search-page.component.html"),
            styles: [__webpack_require__(/*! ./company-search-page.component.scss */ "./src/app/company/company-search-page/company-search-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]])
    ], CompanySearchPageComponent);
    return CompanySearchPageComponent;
}());



/***/ }),

/***/ "./src/app/company/company.module.ts":
/*!*******************************************!*\
  !*** ./src/app/company/company.module.ts ***!
  \*******************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-material.module */ "./src/app/custom-material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-detail/company-detail.component */ "./src/app/company/company-detail/company-detail.component.ts");
/* harmony import */ var _company_details_page_company_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-details-page/company-details-page.component */ "./src/app/company/company-details-page/company-details-page.component.ts");
/* harmony import */ var _company_form_company_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-form/company-form.component */ "./src/app/company/company-form/company-form.component.ts");
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-list/company-list.component */ "./src/app/company/company-list/company-list.component.ts");
/* harmony import */ var _company_page_company_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-page/company-page.component */ "./src/app/company/company-page/company-page.component.ts");
/* harmony import */ var _company_search_page_company_search_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-search-page/company-search-page.component */ "./src/app/company/company-search-page/company-search-page.component.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company.service */ "./src/app/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'company/new',
        component: _company_page_company_page_component__WEBPACK_IMPORTED_MODULE_10__["CompanyPageComponent"]
    },
    {
        path: 'company/search',
        component: _company_search_page_company_search_page_component__WEBPACK_IMPORTED_MODULE_11__["CompanySearchPageComponent"]
    },
    {
        path: 'company/details/:id',
        component: _company_details_page_company_details_page_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsPageComponent"]
    },
];
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [
                _company_details_page_company_details_page_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsPageComponent"],
                _company_form_company_form_component__WEBPACK_IMPORTED_MODULE_8__["CompanyFormComponent"],
                _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__["CompanyListComponent"],
                _company_search_page_company_search_page_component__WEBPACK_IMPORTED_MODULE_11__["CompanySearchPageComponent"],
                _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailComponent"],
                _company_page_company_page_component__WEBPACK_IMPORTED_MODULE_10__["CompanyPageComponent"]
            ],
            providers: [_company_service__WEBPACK_IMPORTED_MODULE_12__["CompanyService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/company/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/company/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyService = /** @class */ (function () {
    function CompanyService(httpClient) {
        this.httpClient = httpClient;
        this.companyAPIUrl = 'api/company';
    }
    // saves a new company to the in memory database
    CompanyService.prototype.save = function (company) {
        var url = "" + this.companyAPIUrl;
        return this.httpClient.post(url, company);
    };
    // gets all the companies
    CompanyService.prototype.getCompanyList = function () {
        var url = "" + this.companyAPIUrl;
        return this.httpClient.get(url);
    };
    // get a company by the ID
    CompanyService.prototype.getCompanyByID = function (companyId) {
        var url = this.companyAPIUrl + "/" + companyId;
        return this.httpClient.get(url);
    };
    // archive a client
    CompanyService.prototype.deleteCompany = function (companyId) {
        var url = this.companyAPIUrl + "/" + companyId;
        return this.httpClient.delete(url);
    };
    // update a clients details
    CompanyService.prototype.updateCompany = function (company) {
        var url = "" + this.companyAPIUrl;
        return this.httpClient.put(url, company);
    };
    // search for a company by name
    CompanyService.prototype.search = function (searchTerm) {
        searchTerm.trim();
        var url = "" + this.companyAPIUrl;
        var searchOptions = searchTerm ? { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('companyName', searchTerm) } : {};
        return this.httpClient.get(url, searchOptions);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/company/company.ts":
/*!************************************!*\
  !*** ./src/app/company/company.ts ***!
  \************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/custom-material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-material.module.ts ***!
  \*******************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
            ],
            exports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.goTo = function (location) {
        this.router.navigateByUrl(location);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "title", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/search/search-form/search-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/search/search-form/search-form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  margin: 5px;\n}\n.search .search-form {\n  width: 100%;\n}\n.search .search-form mat-form-field {\n  width: 80%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGVuLmFkYW1zL0Rldi9HZXR0aW5nLVN0YXJ0ZWQtV2l0aC1Bbmd1bGFyLTgvY2hhcHRlcjExL0NsaWVudC1Db250YWN0cy1NYW5hZ2VyLUFuZ3VsYXIvc3JjL2FwcC9zZWFyY2gvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FEQUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gIG1hcmdpbjogNXB4O1xuXG4gIC5zZWFyY2gtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iLCIuc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uc2VhcmNoIC5zZWFyY2gtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaCAuc2VhcmNoLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search-form/search-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/search/search-form/search-form.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(fb) {
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchForm = fb.group({
            searchBox: this.searchField
        });
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField.valueChanges.subscribe(function (result) {
            _this.searchEvent.emit(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchFormComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchFormComponent.prototype, "searchEvent", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! raw-loader!./search-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.scss */ "./src/app/search/search-form/search-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/services/in-memory-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/in-memory-data.service.ts ***!
  \****************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var clients = [
            {
                id: 1,
                firstname: 'John',
                lastname: 'Doe',
                email: 'john.doe@testclient.com',
                telephoneNumber: '01231234',
                companyName: 'Test Company inc'
            },
            {
                id: 2,
                firstname: 'Jane',
                lastname: 'Doe',
                email: 'jane.doe@example.com',
                telephoneNumber: '0777334455',
                companyName: 'Example inc'
            },
            {
                id: 3,
                firstname: 'Brad',
                lastname: 'Green',
                email: 'brad.green@google.com',
                telephoneNumber: '012312345',
                companyName: 'Google Inc'
            },
            {
                id: 4,
                firstname: 'Igor',
                lastname: 'Minar',
                email: 'igor.minar@google.com',
                telephoneNumber: '012312345',
                companyName: 'Google Inc'
            }
        ];
        var company = [{
                id: 1,
                companyName: 'Google Inc',
                address1: 'Googleplex',
                address2: 'Mountain View',
                town: 'San Fransisco',
                city: 'San Fransisco',
                postcode: 'SF123',
                country: 'US',
                contactEmail: 'info@google.com',
                staffCount: 4,
                industry: 'Tech'
            },
            {
                id: 2,
                companyName: 'Example Inc',
                address1: 'Example Office',
                address2: 'Example Street',
                town: 'Example Town',
                city: 'Example City',
                postcode: 'AA13BB',
                country: 'UK',
                contactEmail: 'info@example.com',
                staffCount: 3,
                industry: 'Tech'
            }
        ];
        return { clients: clients, company: company };
    };
    InMemoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material.module */ "./src/app/custom-material.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search-form/search-form.component */ "./src/app/search/search-form/search-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            exports: [_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephen.adams/Dev/Getting-Started-With-Angular-8/chapter11/Client-Contacts-Manager-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map