import {Component, Input} from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
    selector: 'menu',
    templateUrl: 'app/components/menu/menu.component.html',
    styleUrls: ['app/components/menu/menu.component.css',
                'app/components/dropdown.css']
})
export class MenuComponent { 
    @Input() index;
    @Input() tasks;
    @Input() edit;

    constructor(private taskService: TaskService){
        document.body.addEventListener('click', this.closeMenu.bind(this), true);                 
    }

   
    onclickMenu(i) {
        var dropStr = "dropdown";
        var fullName = dropStr.concat( i ); 
        document.getElementById(fullName).classList.toggle("show");
    }

    closeMenu(){
        // check which one is shown and close it
        var keys = Object.keys(this.tasks);
        for (var i = 0, len = keys.length; i < len; i++) {
         var myDropdown = document.getElementById("dropdown"+i);
             if(myDropdown!= null && myDropdown.classList.contains('show')){
                 myDropdown.classList.remove('show');
             }
       }
     }
     editToDo(i){
        this.edit[i] = true;
    }

    deleteToDo(i){
            var tasks = this.tasks;
            
            this.taskService.deleteTask(this.tasks[i]._id).subscribe(data => {
                if(data.n == 1){
                    for(var i = 0;i < tasks.length;i++){
                        if(tasks[i]._id == this.tasks[i]._id){
                            tasks.splice(i, 1);
                        }
                    }
                }
            });
    }
}