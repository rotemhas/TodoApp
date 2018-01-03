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
var MenuComponent = /** @class */ (function () {
    function MenuComponent(taskService) {
        this.taskService = taskService;
        document.body.addEventListener('click', this.closeMenu.bind(this), true);
    }
    MenuComponent.prototype.onclickMenu = function (i) {
        var dropStr = "dropdown";
        var fullName = dropStr.concat(i);
        document.getElementById(fullName).classList.toggle("show");
    };
    MenuComponent.prototype.closeMenu = function () {
        // check which one is shown and close it
        var keys = Object.keys(this.tasks);
        for (var i = 0, len = keys.length; i < len; i++) {
            var myDropdown = document.getElementById("dropdown" + i);
            if (myDropdown != null && myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    };
    MenuComponent.prototype.editToDo = function (i) {
        this.edit[i] = true;
    };
    MenuComponent.prototype.deleteToDo = function (i) {
        var _this = this;
        var tasks = this.tasks;
        this.taskService.deleteTask(this.tasks[i]._id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == _this.tasks[i]._id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "tasks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "edit", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'app/components/menu/menu.component.html',
            styleUrls: ['app/components/menu/menu.component.css',
                'app/components/dropdown.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map