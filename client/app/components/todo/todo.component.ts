import {Component, Input} from '@angular/core'
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
    selector: 'todo-list',        
    templateUrl: 'app/components/todo/todo.component.html',
    styleUrls: ['app/components/todo/todo.component.css',
                'app/components/dropdown.css']
})
export class TodoComponent {
    @Input() categories;
    @Input() currentCategory;
    nameRegularTask;
    edit = [];
    clickedMenu;
    tasks: Task[];
    title: string;
    

    constructor(private taskService:TaskService){
        // Get tasks
        this.taskService.getTasks()
        .subscribe(tasks => {
            this.tasks = tasks;
        });

        this.nameRegularTask = "Regular Task";   
    }

    addTask(event){
        event.preventDefault();
        var newTask = {
            title: this.title,
            done: false,
            category: "Regular Task"
        }
        
        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }

    
    clearCompleted(){
        for(var i=0; i<this.tasks.length; i++){
            if(this.tasks[i].done){
                this.deleteTask(this.tasks[i]._id);
            }
        }
    }
    
    deleteTask(id){
        var tasks = this.tasks;
        
        this.taskService.deleteTask(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            done: !task.done,
            category: task.category
        };
        
        this.taskService.updateStatus(_task).subscribe(data => {
            task.done = !task.done;
        });
    }
}