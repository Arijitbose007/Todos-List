import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "src/app/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() 
  todo: Todo;//This is to recieve the todo passed by the todos.component.html
  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();//Defining todoDelete; <Todo>type
  constructor(){}
  ngOnInit(): void {
      
  }
  onclick(todo: Todo){// catches todo object
    this.todoDelete.emit(todo);//After listening it emits the delete option of the button
    console.log("The click has been triggered")
  }
}
