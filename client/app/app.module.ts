import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import {TodoComponent} from './components/todo/todo.component'
import {MenuComponent} from './components/menu/menu.component'
import {EditComponent} from './components/edit/edit.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {DropDownCategoriesComponent} from './components/drop-down-categories/dropdown_categories.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent,TodoComponent,MenuComponent,EditComponent,DropDownCategoriesComponent,SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
