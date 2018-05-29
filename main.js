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

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _user_manager_user_manager_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-manager/user-manager.module */ "./src/app/user-manager/user-manager.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_manager_user_manager_module__WEBPACK_IMPORTED_MODULE_3__["UserManagerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_5__["appRoutes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
var appRoutes = [
    {
        path: '',
        redirectTo: '/userlist',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/user-manager/components/add-user/add-user.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/user-manager/components/add-user/add-user.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panelNT{\r\n    border-color: #cc2337;\r\n}\r\n.panel-default>.panel-heading{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}\r\nbutton{\r\n    margin-right: 5%;\r\n    background-color: #fff;\r\n    color: #cc2337;\r\n    border-color: #cc2337;\r\n}\r\nbutton:hover, button.actve, button:focus{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/user-manager/components/add-user/add-user.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user-manager/components/add-user/add-user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\" col-sm-10 col-md-6 offset-md-3\" >\r\n  \r\n  <div class=\"card panelNT\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Add User</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        \r\n        <form action=\"\" method=\"POST\" role=\"form\">\r\n        \r\n          <div class=\"form-group\">\r\n            <label for=\"\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Code</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"code\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Level</label>\r\n            \r\n            <select name=\"\" class=\"form-control\" [(ngModel)]=\"level\" [ngModelOptions]=\"{standalone: true}\">\r\n              \r\n              <option value=\"fresher\">-- Fresher --</option>\r\n              <option value=\"junio\">-- Junio --</option>\r\n              <option value=\"senior\">-- Senior --</option>\r\n            </select>\r\n            \r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-default \"\r\n            (click)=\"onAddUser()\"\r\n          >Add</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onBackList()\">Back to List</button>\r\n        </form>\r\n        \r\n      </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user-manager/components/add-user/add-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-manager/components/add-user/add-user.component.ts ***!
  \************************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.class */ "./src/app/user-manager/models/user.class.ts");
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user-service.service */ "./src/app/user-manager/service/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onBackList = function () {
        this._router.navigate(['userlist']);
    };
    AddUserComponent.prototype.onAddUser = function () {
        if (this.name != '' && this.code != ''
            && this.name != null && this.code != null && this.level != '' && this.level != null) {
            var user = new _models_user_class__WEBPACK_IMPORTED_MODULE_2__["User"](null, this.name, this.code, this.level);
            console.log(user);
            this._userService.addUser(user).subscribe(function (data) { });
            this.name = '';
            this.code = null;
            this.level = null;
        }
        else
            return false;
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/user-manager/components/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/user-manager/components/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/user-manager/components/task-list/task-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/user-manager/components/task-list/task-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin-bottom: 0;\r\n}\r\n.tableChild tr:first-child>td{\r\n    border-top: 0;\r\n}\r\n.userInfo{\r\n    margin: 20px;\r\n}\r\n.userInfo .form-group{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    text-align: left;\r\n}\r\n.userInfo input, .userInfo select{\r\n    width: 200px;\r\n    margin-left: 1%;\r\n}\r\n.navBtn{\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n.navBtn>button{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}\r\n.noPadding{\r\n    padding: 0;\r\n}\r\nthead{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}\r\n.table-bordered{\r\n    border: 2px solid #cc2337;\r\n    background-color: #fff;\r\n}\r\n.colorRed{color: #cc2337}\r\nbutton{\r\n    margin-right: 1%;\r\n    background-color: #fff;\r\n    color: #cc2337;\r\n    border-color: #cc2337;\r\n}\r\nbutton:hover,button.actve, button:focus{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/user-manager/components/task-list/task-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/user-manager/components/task-list/task-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t<div class=\"userInfo\" *ngIf = \"user\">\r\n\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"\">Name</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"user.name \">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"\">Code </label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"user.code \">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"\">Level </label>\r\n\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"user.level\" >\r\n\t\t\t\t\t<option value=\"fresher\">Fresher</option>\r\n\t\t\t\t\t<option value=\"junior\">Junior</option>\r\n\t\t\t\t\t<option value=\"senior\">Senior</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t<button type=\"button\" class=\"btn btn-default\" \r\n\t\t\t(click)=\"onEditUser(user.id,user.name,user.code,user.level)\"\r\n\t\t>Edit</button>\r\n\r\n\t\t<button type=\"button\" class=\"btn btn-default\" \r\n\t\t\t(click)=\"onDeleteUser(user.id)\"\r\n\t\t>Delete</button>\r\n\t\t\r\n\t</div>\r\n\r\n<div class=\"userTask\">\r\n  \r\n  <div class=\"\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Task</th>\r\n          <th scope=\"col\">Quest</th>\r\n          <th scope=\"col\">Submit Date</th>\r\n          <th scope=\"col\">Dealine</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let task of tasks\">\r\n\t\t\t <td scope=\"row\"> {{task.taskname | titlecase }} </td>\r\n\t\t\t <td class=\"noPadding\" scope=\"row\">\r\n\t\t\t\t <table class=\"table table-hover tableChild\">\r\n\t\t\t\t\t <tbody>\r\n\t\t\t\t\t\t <tr  *ngFor = \"let q of task.quest\">\r\n\t\t\t\t\t\t\t <td> {{q.name | titlecase}} </td>\r\n\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t </tbody>\r\n\t\t\t\t </table>\r\n\t\t\t </td>\r\n\r\n\t\t\t <td class=\"noPadding\" scope=\"row\">\r\n\t\t\t\t<table class=\"table table-hover tableChild\">\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr  *ngFor = \"let quest of task.quest\">\r\n\t\t\t\t\t\t\t<td *ngIf=\"task.id == quest.tasklistId\"> {{quest.submitdate | date}} </td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\r\n\t\t\t<td class=\"noPadding\" scope=\"row\">\r\n\t\t\t\t<table class=\"table table-hover tableChild\">\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr  *ngFor = \"let quest of task.quest\">\r\n\t\t\t\t\t\t\t<td  *ngIf=\"task.id == quest.tasklistId\"> {{quest.deadline | date}} </td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\r\n\t\t  </tr>\r\n\t\t\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"navBtn\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"OnBackList()\">Back to List</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user-manager/components/task-list/task-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user-manager/components/task-list/task-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user-service.service */ "./src/app/user-manager/service/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.class */ "./src/app/user-manager/models/user.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(_userService, _activatedRoute, _route) {
        this._userService = _userService;
        this._activatedRoute = _activatedRoute;
        this._route = _route;
        this.tasks = [];
        this.quests = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.loadTask();
        this.getUserById();
    };
    TaskListComponent.prototype.OnBackList = function () {
        this._route.navigate(['/userlist'], { relativeTo: this._activatedRoute.parent });
    };
    TaskListComponent.prototype.loadTask = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (x) {
            var tmp = x.id;
            _this._userService.GetAllTask(tmp).subscribe(function (data) {
                _this.tasks = data;
                // console.log(data)
                _this.loadQuest(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    TaskListComponent.prototype.loadQuest = function (task) {
        var _loop_1 = function (i) {
            this_1._userService.GetAllQuestById(task[i].userlistId, task[i].id).subscribe(function (data) {
                task[i].quest = data;
            }, function (err) {
                console.log(err);
            });
        };
        var this_1 = this;
        for (var i = 0; i < task.length; i++) {
            _loop_1(i);
        }
    };
    TaskListComponent.prototype.getUserById = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (x) {
            // console.log(x)
            _this._userService.getUserById(x.id).subscribe(function (data) {
                _this.user = data;
                console.log(data);
            });
        });
    };
    TaskListComponent.prototype.onEditUser = function (id, name, code, level) {
        var user = new _models_user_class__WEBPACK_IMPORTED_MODULE_3__["User"](id, name, code, level);
        console.log(user);
        this._userService.editUser(user).subscribe(function (data) { });
    };
    TaskListComponent.prototype.onDeleteUser = function (id) {
        var _this = this;
        this._userService.deleteUser(id).subscribe(function (data) {
            _this.OnBackList();
            _this.updateData(id);
        });
    };
    TaskListComponent.prototype.updateData = function (id) {
        for (var i = 0; i < this.user.length; i++) {
            if (this.user[i].id == id) {
                this.user.splice(i, 1);
            }
        }
    };
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/user-manager/components/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/user-manager/components/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/user-manager/components/user-list/user-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/user-manager/components/user-list/user-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image:hover {-webkit-transform:scale(1.1); transform:scale(1.1);}\r\n.image { transition: all 0.7s ease;}\r\n.box{overflow: hidden;}\r\na, a.active, a:focues, a:hover{\r\n    text-decoration: none;\r\n    border: 0;\r\n}\r\n/*------------------------------------------------------------*/\r\n.topBar{\r\n    padding: 30px 0 20px 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.title>h2{\r\n    margin: 0;\r\n    color: #cc2337;\r\n}\r\n.search{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.title>h2>a,.search input, .search option{\r\n    color: #cc2337;\r\n    text-decoration: none; \r\n    \r\n}\r\n.search input, .search select{\r\n    border: 1px solid #cc2337;\r\n    box-shadow:  0 0 40px rgba(25, 17, 34, 0.2) ;\r\n}\r\n.sort button{\r\n    box-shadow:  0 0 40px rgba(25, 17, 34, 0.2);\r\n    border: 1px solid #cc2337;\r\n}\r\n.sort button:hover{\r\n    background-color: #cc2337;\r\n    color: #fff;\r\n}\r\n.textBold{\r\n    font-weight: bold;\r\n    color: #000;\r\n    margin-right: 3%;\r\n}\r\n/* .userListContent{\r\n    display: flex;\r\n     flex-wrap: wrap; \r\n} */\r\n.userItem{\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 20px 0;\r\n    box-shadow: 1px 3px 17px 3px #d3d3d3;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    border: 1px solid #d3d3d3;\r\n    flex-wrap: wrap;\r\n}\r\n.userItem:hover{\r\n    background-color: #f0f0f5;\r\n}\r\n/* .boxPic{\r\n    margin: auto;\r\n} */\r\n.boxPic>img{\r\n    border-radius: 50%;\r\n    border: 1px solid #d3d3d3;\r\n    padding: 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-manager/components/user-list/user-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/user-manager/components/user-list/user-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\r\n\t<div class=\"topBar\">\r\n\t\t<div class=\"title col-12 col-sm-12 col-md-3 text-center\">\r\n\t\t\t<h2> <a [routerLink]=\"['/userlist']\"> User List</a></h2>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"search col-12 col-sm-9 col-md-7 text-center\">\r\n\t\t\t<form action=\"\" method=\"POST\" class=\"form-inline\" role=\"form\">\r\n\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" \r\n\t\t\t\t\tplaceholder=\"Search by name...\" [(ngModel)]=\"name\"\r\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"level\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<option value=\"fresher\">-- Fresher --</option>\r\n\t\t\t\t\t\t<option value=\"junior\">-- Junior --</option>\r\n\t\t\t\t\t\t<option value=\"senior\">-- Senior --</option>\r\n\t\t\t\t\t\t<option value=\"\">-- None --</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-4 col-sm-2 col-md-2 sort text-right\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['add']\">Add User</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"userListContent d-flex flex-wrap\">\r\n\t\t<div class=\"col-12 col-sm-6 col-md-4\" *ngFor =\"let user of userList | myFilter: name : level\" >\r\n\t\t\t<div class=\"userItem \" [routerLink] = \"['/userlist',user.id]\">\r\n\t\t\t\t\t<div class=\"boxPic col-6 col-sm-6 col-lg-4 mx-auto\">\r\n\t\t\t\t\t\t<img src=\"./../assets/images/user.png\" alt=\"user\" class=\"image box\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"boxText col-12 col-sm-12 col-lg-8\">\r\n\t\t\t\t\t<p><span class=\"textBold\"> Name: </span>  {{user.name | titlecase }}</p>\r\n\t\t\t\t\t<p> <span class=\"textBold\"> Code : </span> {{user.code |titlecase }}  </p>\r\n\t\t\t\t\t<p> <span class=\"textBold\"> Level : </span> {{user.level | titlecase }}  </p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n<!-- End userList Class -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user-manager/components/user-list/user-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user-manager/components/user-list/user-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/user-service.service */ "./src/app/user-manager/service/user-service.service.ts");
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



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, _router, _activatedrouter) {
        this.userService = userService;
        this._router = _router;
        this._activatedrouter = _activatedrouter;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    UserListComponent.prototype.loadData = function () {
        var _this = this;
        this.userService.GetAllUser().subscribe(function (data) {
            _this.userList = data;
        }, function (err) {
            _this.userService.handelError(err);
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-manager/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-manager/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user-manager/models/user.class.ts":
/*!***************************************************!*\
  !*** ./src/app/user-manager/models/user.class.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, code, level) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.level = level;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user-manager/pipes/my-filter.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/user-manager/pipes/my-filter.pipe.ts ***!
  \******************************************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (user, name, level) {
        // level, name == null return all User
        if (!level && !name) {
            return user;
        }
        else {
            //name
            if (name) {
                user = user.filter(function (x) {
                    return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
                });
            }
            //level
            if (level) {
                user = user.filter(function (x) {
                    return x.level.toLowerCase().indexOf(level.toLowerCase()) != -1;
                });
            }
        }
        return user;
    };
    MyFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'myFilter'
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/user-manager/route.class.ts":
/*!*********************************************!*\
  !*** ./src/app/user-manager/route.class.ts ***!
  \*********************************************/
/*! exports provided: usersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersRoutes", function() { return usersRoutes; });
/* harmony import */ var src_app_user_manager_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/user-manager/components/user-list/user-list.component */ "./src/app/user-manager/components/user-list/user-list.component.ts");
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task-list/task-list.component */ "./src/app/user-manager/components/task-list/task-list.component.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/user-manager/components/add-user/add-user.component.ts");
/* harmony import */ var _user_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-manager.component */ "./src/app/user-manager/user-manager.component.ts");




var usersRoutes = [
    {
        path: 'userlist',
        component: _user_manager_component__WEBPACK_IMPORTED_MODULE_3__["UserManagerComponent"],
        children: [
            {
                path: '', component: src_app_user_manager_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__["UserListComponent"]
            },
            {
                path: 'add', component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"]
            },
            {
                path: ':id', component: _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__["TaskListComponent"]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/user-manager/service/user-service.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-manager/service/user-service.service.ts ***!
  \**************************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
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


// import { catchError, map, tap } from 'rxjs/operators';
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.api = 'http://5b0620abff98d70014f38790.mockapi.io/userlist/';
    }
    UserServiceService.prototype.GetAllUser = function () {
        return this.http.get(this.api);
    };
    UserServiceService.prototype.GetAllTask = function (id) {
        return this.http.get(this.api + id + '/tasklists');
    };
    UserServiceService.prototype.GetAllQuestById = function (id, taskID) {
        return this.http.get(this.api + id + '/tasklists/' + taskID + '/QuestList');
    };
    UserServiceService.prototype.getUserById = function (id) {
        // const url = `${this.api}/${id}`;
        return this.http.get(this.api + id);
    };
    UserServiceService.prototype.addUser = function (user) {
        return this.http.post(this.api, user);
    };
    UserServiceService.prototype.editUser = function (user) {
        return this.http.put("" + this.api + user.id, user);
    };
    UserServiceService.prototype.deleteUser = function (id) {
        return this.http.delete("" + this.api + id);
    };
    UserServiceService.prototype.handelError = function (err) {
        if (err.error instanceof Error) {
            console.log("Client-side Error : " + err.error.message + " ");
        }
        else {
            console.log("Server-side Error : " + err.error.status + " - " + err.error + " ");
        }
    };
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/user-manager/user-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <div class=\"row\">\n    <div class=\"col-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.ts ***!
  \********************************************************/
/*! exports provided: UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
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

var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent() {
    }
    UserManagerComponent.prototype.ngOnInit = function () {
    };
    UserManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-manager',
            template: __webpack_require__(/*! ./user-manager.component.html */ "./src/app/user-manager/user-manager.component.html"),
            styles: [__webpack_require__(/*! ./user-manager.component.css */ "./src/app/user-manager/user-manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ }),

/***/ "./src/app/user-manager/user-manager.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-manager/user-manager.module.ts ***!
  \*****************************************************/
/*! exports provided: UserManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerModule", function() { return UserManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route.class */ "./src/app/user-manager/route.class.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/user-manager/components/user-list/user-list.component.ts");
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task-list/task-list.component */ "./src/app/user-manager/components/task-list/task-list.component.ts");
/* harmony import */ var _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/my-filter.pipe */ "./src/app/user-manager/pipes/my-filter.pipe.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/user-manager/components/add-user/add-user.component.ts");
/* harmony import */ var _user_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-manager.component */ "./src/app/user-manager/user-manager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserManagerModule = /** @class */ (function () {
    function UserManagerModule() {
    }
    UserManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_route_class__WEBPACK_IMPORTED_MODULE_5__["usersRoutes"])
            ],
            declarations: [
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
                _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"],
                _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["MyFilterPipe"],
                _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"],
                _user_manager_component__WEBPACK_IMPORTED_MODULE_10__["UserManagerComponent"]
            ]
        })
    ], UserManagerModule);
    return UserManagerModule;
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

module.exports = __webpack_require__(/*! D:\angular\httpClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map