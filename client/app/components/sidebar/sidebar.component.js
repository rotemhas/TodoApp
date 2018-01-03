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
var categories_service_1 = require("../../services/categories.service");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(categoryService) {
        this.categoryService = categoryService;
        this.onCategoryChanged = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.onClickAllTasks = function () {
        this.currentCategory = this.nameRegularTask;
        this.onCategoryChanged.emit(this.currentCategory);
    };
    SidebarComponent.prototype.onClickCategory = function (indexCategory) {
        this.currentCategory = this.categories[indexCategory].name;
        this.onCategoryChanged.emit(this.currentCategory);
    };
    SidebarComponent.prototype.addCategory = function () {
        this.pressAddCategory = !this.pressAddCategory;
    };
    SidebarComponent.prototype.add = function () {
        var _this = this;
        var txtCategory = document.getElementById("addCategoryTxt").value;
        this.pressAddCategory = false;
        event.preventDefault();
        var newCategory = {
            name: txtCategory
        };
        this.categoryService.addCategory(newCategory)
            .subscribe(function (category) {
            _this.categories.push(category);
        });
    };
    SidebarComponent.prototype.cancle = function () {
        this.pressAddCategory = false;
        document.getElementById("addCategoryTxt").value = "";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "currentCategory", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "nameRegularTask", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "onCategoryChanged", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'side-bar',
            templateUrl: 'app/components/sidebar/sidebar.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [categories_service_1.CategoryService]
        }),
        __metadata("design:paramtypes", [categories_service_1.CategoryService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map