import {Component, Input, Output, EventEmitter} from '@angular/core'
import {TaskService} from '../../services/task.service';
import {CategoryService} from '../../services/categories.service';
import {AppComponent} from '../../app.component';
import {Task} from '../../../Task';

@Component({
    selector: 'side-bar',        
    templateUrl: 'app/components/sidebar/sidebar.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [CategoryService]
})
export class SidebarComponent {
    @Input() categories;
    @Input() currentCategory;
    @Input() nameRegularTask;
    pressAddCategory;
    @Output() onCategoryChanged = new EventEmitter();

    constructor(private categoryService:CategoryService){
    }

  onClickAllTasks(){
    this.currentCategory = this.nameRegularTask;
    this.onCategoryChanged.emit(this.currentCategory);    
}

onClickCategory(indexCategory){
    this.currentCategory = this.categories[indexCategory].name;
    this.onCategoryChanged.emit(this.currentCategory);
}

addCategory(){
    this.pressAddCategory = !this.pressAddCategory;
}

add(){
    var txtCategory = (<HTMLInputElement>document.getElementById("addCategoryTxt")).value;
    this.pressAddCategory = false;

    event.preventDefault();
    var newCategory = {
        name: txtCategory
    }
    
    this.categoryService.addCategory(newCategory)
        .subscribe(category => {
            this.categories.push(category);
        });
}

cancle(){
  this.pressAddCategory = false;  
(<HTMLInputElement>document.getElementById("addCategoryTxt")).value = "";
  
}
}