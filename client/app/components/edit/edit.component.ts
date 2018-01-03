import {Component, Input} from '@angular/core'
import {TaskService} from '../../services/task.service'
@Component({
    selector: 'edit-bar',        
    templateUrl: 'app/components/edit/edit.component.html',
    styleUrls: ['app/components/todo/todo.component.css']
})
export class EditComponent{
    @Input() edit;
    @Input() task;
    @Input() tasks;
    @Input() i;
    
    constructor(private taskService:TaskService){
        
    }

    onClickSave(i){
        var txt = (<HTMLInputElement>document.getElementById("textTodo")).value;
        this.edit[i] = false;
        var task = this.tasks[i];

        // save new title
        var _task = {
            _id:task._id,
            title: txt,
            done: task.done,
            category: task.category
        };
        
        this.taskService.updateStatus(_task).subscribe(data => {
            this.tasks[i].title = txt;
        });
    }

    onClickCancle(i){
       this.edit[i] = false;
       (<HTMLInputElement>document.getElementById("textTodo")).value = this.tasks[i].title;
    }

}