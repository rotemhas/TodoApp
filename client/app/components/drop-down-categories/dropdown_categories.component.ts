import {Component, Input} from '@angular/core';
import {TaskService} from '../../services/task.service';


@Component({
    selector: 'drop-down-categories',
    templateUrl: 'app/components/drop-down-categories/dropdown_categories.component.html',
    styleUrls: ['app/components/dropdown.css',
                'app/components/drop-down-categories/dropdown_categories.component.css']
  })
export class DropDownCategoriesComponent{
    @Input() nameRegularTask;
    @Input() task;
    @Input() i;
    @Input() categories;
    @Input() tasks;


    constructor(private taskService:TaskService){
        document.body.addEventListener('click', this.closeMenu.bind(this), true);                         
        
    }

    chooseRegular(task){
        var _task = {
            _id:task._id,
            title: task.title,
            done: task.done,
            category: "Regular Task"
        };
        
        this.taskService.updateStatus(_task).subscribe(data => {
          task.category ="Regular Task";
        });
     }

     changeCategory(task , indexCategory){
        var _task = {
            _id:task._id,
            title: task.title,
            done: task.done,
            category: this.categories[indexCategory].name
        };
        
        this.taskService.updateStatus(_task).subscribe(data => {
          task.category = this.categories[indexCategory].name;
        });
    }

    onClickCategory(i){
        var dropStr = "categoryDrop";
        var fullName = dropStr.concat(i); 
        document.getElementById(fullName).classList.toggle("show");
    }

    closeMenu(){
        // check which one is shown and close it
        var keys = Object.keys(this.tasks);
        for (var i = 0, len = keys.length; i < len; i++) {
         var myDropdown = document.getElementById("categoryDrop"+i);
             if(myDropdown!= null && myDropdown.classList.contains('show')){
                 myDropdown.classList.remove('show');
             }
       }
     }



}