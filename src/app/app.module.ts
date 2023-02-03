import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
