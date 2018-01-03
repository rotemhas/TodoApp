"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./services/task.service");
var categories_service_1 = require("./services/categories.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        this.nameRegularTask = "Regular Task";
        this.currentCategory = this.nameRegularTask;
        // Get categories
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    }
    AppComponent.prototype.onCategoryChanged = function (newCurrCategory) {
        this.currentCategory = newCurrCategory;
    };
    AppComponent.prototype.onClickAllTasks = function () {
        this.currentCategory = this.nameRegularTask;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [task_service_1.TaskService, categories_service_1.CategoryService]
        }),
        __metadata("design:paramtypes", [categories_service_1.CategoryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map