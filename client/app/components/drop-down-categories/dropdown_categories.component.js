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
var task_service_1 = require("../../services/task.service");
var DropDownCategoriesComponent = /** @class */ (function () {
    function DropDownCategoriesComponent(taskService) {
        this.taskService = taskService;
        document.body.addEventListener('click', this.closeMenu.bind(this), true);
    }
    DropDownCategoriesComponent.prototype.chooseRegular = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            done: task.done,
            category: "Regular Task"
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.category = "Regular Task";
        });
    };
    DropDownCategoriesComponent.prototype.changeCategory = function (task, indexCategory) {
        var _this = this;
        var _task = {
            _id: task._id,
            title: task.title,
            done: task.done,
            category: this.categories[indexCategory].name
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.category = _this.categories[indexCategory].name;
        });
    };
    DropDownCategoriesComponent.prototype.onClickCategory = function (i) {
        var dropStr = "categoryDrop";
        var fullName = dropStr.concat(i);
        document.getElementById(fullName).classList.toggle("show");
    };
    DropDownCategoriesComponent.prototype.closeMenu = function () {
        // check which one is shown and close it
        var keys = Object.keys(this.tasks);
        for (var i = 0, len = keys.length; i < len; i++) {
            var myDropdown = document.getElementById("categoryDrop" + i);
            if (myDropdown != null && myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownCategoriesComponent.prototype, "nameRegularTask", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownCategoriesComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownCategoriesComponent.prototype, "i", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownCategoriesComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownCategoriesComponent.prototype, "tasks", void 0);
    DropDownCategoriesComponent = __decorate([
        core_1.Component({
            selector: 'drop-down-categories',
            templateUrl: 'app/components/drop-down-categories/dropdown_categories.component.html',
            styleUrls: ['app/components/dropdown.css',
                'app/components/drop-down-categories/dropdown_categories.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], DropDownCategoriesComponent);
    return DropDownCategoriesComponent;
}());
exports.DropDownCategoriesComponent = DropDownCategoriesComponent;
//# sourceMappingURL=dropdown_categories.component.js.map