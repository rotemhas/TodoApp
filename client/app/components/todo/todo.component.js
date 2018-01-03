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
var TodoComponent = /** @class */ (function () {
    function TodoComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.edit = [];
        // Get tasks
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.nameRegularTask = "Regular Task";
    }
    TodoComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            done: false,
            category: "Regular Task"
        };
        this.taskService.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    TodoComponent.prototype.clearCompleted = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].done) {
                this.deleteTask(this.tasks[i]._id);
            }
        }
    };
    TodoComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TodoComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            done: !task.done,
            category: task.category
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.done = !task.done;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "currentCategory", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: 'app/components/todo/todo.component.html',
            styleUrls: ['app/components/todo/todo.component.css',
                'app/components/dropdown.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map