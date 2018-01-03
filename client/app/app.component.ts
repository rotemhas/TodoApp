import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {Category} from '../Category';
import {CategoryService} from './services/categories.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TaskService,CategoryService]
})

export class AppComponent {
  nameRegularTask;
  pressAddCategory;
  categories: Category[];
  currentCategory;

  constructor(private categoryService:CategoryService){
      this.nameRegularTask = "Regular Task";
      this.currentCategory = this.nameRegularTask; 

       // Get categories
       this.categoryService.getCategories()
       .subscribe(categories => {
           this.categories = categories;
       });       
  }

  onCategoryChanged(newCurrCategory){
    this.currentCategory = newCurrCategory;
  }

  onClickAllTasks(){
    this.currentCategory = this.nameRegularTask;
}

 }
