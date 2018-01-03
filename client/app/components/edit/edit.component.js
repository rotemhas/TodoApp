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
var EditComponent = /** @class */ (function () {
    function EditComponent(taskService) {
        this.taskService = taskService;
    }
    EditComponent.prototype.onClickSave = function (i) {
        var _this = this;
        var txt = document.getElementById("textTodo").value;
        this.edit[i] = false;
        var task = this.tasks[i];
        // save new title
        var _task = {
            _id: task._id,
            title: txt,
            done: task.done,
            category: task.category
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            _this.tasks[i].title = txt;
        });
    };
    EditComponent.prototype.onClickCancle = function (i) {
        this.edit[i] = false;
        document.getElementById("textTodo").value = this.tasks[i].title;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "tasks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "i", void 0);
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit-bar',
            templateUrl: 'app/components/edit/edit.component.html',
            styleUrls: ['app/components/todo/todo.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map